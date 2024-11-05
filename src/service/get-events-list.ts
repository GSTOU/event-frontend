/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from '@tanstack/react-query';

import { apiClient } from '../libs/axios';

export const getEventsList = async ({
  page,
  size,
}: {
  page?: number;
  size?: number;
}) => {
  const data = apiClient.get(`api/v1/leader/events?page=${page}&size=${size}`);

  return data;
};

export const useGetEventsList = ({
  page = 1,
  size = 9,
}: {
  page: number;
  size: number;
}) => {
  const query = useQuery({
    queryKey: ['getEventsList', page, size],
    queryFn: () => getEventsList({ page, size }),
  });

  const data = query?.data?.data;
  const isFetching = query.isFetching;
  const refetch = query.refetch;

  return {
    data,
    isFetching,
    refetch,
  } as const;
};
