// import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

// function handleFetchError(response: Response) {
//   if (!response.ok) {
//     return response.json().then((data) => {
//       const errorCode = data.errorCode || 'UNKNOWN_ERROR'; // Adjust based on your API response
//       const errorMessage = data.message || 'An error occurred';
//       throw new Error(`[${errorCode}] ${errorMessage}`);
//     });
//   }
// }

// const queryClient = new QueryClient({
//   queryCache: new QueryCache({
//     onError: (error, query) => {
//       console.log('🔯 Query onError');
//       console.log(error, query.meta);

//       handleFetchError;
//     },
//   }),
//   mutationCache: new MutationCache({
//     onError: (error, _variables, _context) => {
//       console.log('🔯 Mutation onError');
//       console.log(error);

//       handleFetchError;
//     },
//   }),
// });

// export default queryClient;
