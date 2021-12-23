/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, AxiosError } from 'axios';
import useSWR from 'swr';

/**
 * Fetcher function
 */
export const fetcher = <T>(endpoint: string) =>
  axios.get(endpoint).then((res: AxiosResponse<T>) => res.data);

/**
 * useEmpathy props
 */
export type UseEmpathyProps = string;

/**
 * useEmpathy return type
 */
export type UseEmpathyType<T> = {
  data: T | undefined;
  error: any | undefined;
  loading: boolean;
};

/**
 * useEmpathy hook
 */
export const useEmpathy = <T>(endpoint: UseEmpathyProps): UseEmpathyType<T> => {
  const { data, error } = useSWR<T, AxiosError>(endpoint, fetcher);

  if (error) {
    console.warn(`Error fetching "${endpoint}": `, { error });
    console.error(error);
  }

  return {
    data,
    error,
    loading: !error && !data,
  };
};
