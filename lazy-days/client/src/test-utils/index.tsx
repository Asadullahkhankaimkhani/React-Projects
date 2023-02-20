import { render, RenderResult } from '@testing-library/react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { generateQueryClientConfig } from 'react-query/queryClient';

// import { defaultQueryClientOptions } from '../react-query/queryClient';

setLogger({
    log: console.log,
    warn: console.warn,
    error: () => {},
});


// make a function to generate a unique queryClient for each test
export const generateQueryClient = () => {
    const client =  generateQueryClientConfig();
    const options = client.getDefaultOptions();
    options.queries = {
        ...options.queries,
        retry: false,
    }
    return client;
};


export function renderWithQueryClient(ui: React.ReactElement ,client?: QueryClient) : RenderResult {
    const queryClient = client ?? generateQueryClient();
    return render(
        <QueryClientProvider client={queryClient}>
            {ui}
        </QueryClientProvider>
    );
}

// from https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
// export const createQueryClientWrapper = (): React.FC => {
//   const queryClient = generateQueryClient();
//   return ({ children }) => (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };
