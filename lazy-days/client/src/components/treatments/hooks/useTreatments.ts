import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useQuery } from 'react-query';

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');
  return data;
}

export function useTreatments(): Treatment[] {
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments);
  return data;
}
