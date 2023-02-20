import jsonpatch from 'fast-json-patch';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { queryKeys } from 'react-query/constants';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

// TODO: update type to UseMutateFunction type
export function usePatchUser(): UseMutateFunction<
  User,
  unknown,
  User,
  unknown
> {
  const { user, updateUser } = useUser();
  const toast = useCustomToast();

  const queryClient = useQueryClient();

  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData, user),
    {
      onMutate: (newUserData: User) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        queryClient.cancelQueries(queryKeys.user);

        // Snapshot the previous value
        const previousUser = queryClient.getQueryData<User>(queryKeys.user);

        // Optimistically update to the new value
        if (previousUser) updateUser(newUserData);

        // Return a context object with the snapshotted value
        return { previousUser };
      },

      onError: (err, newUserData, context) => {
        if (context?.previousUser) {
          updateUser(context.previousUser);
          toast({
            title: 'Update failed restored previous data',
            status: 'error',
          });
        }
      },
      onSuccess: (userData: User | null) => {
        if (userData) {
          toast({
            title: 'User updated',
            description: 'Your user data has been updated',
            status: 'success',
          });
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}
