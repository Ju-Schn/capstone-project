import useSWR from 'swr';

export default function useFetch() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {
    data: publicCards,
    error: cardsError,
    mutate: mutatePublicCards,
  } = useSWR('/api/public-cards/', fetcher);
  return { publicCards, cardsError, mutatePublicCards };
}
