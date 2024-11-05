/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getEventsList = async ({
  page,
  size,
  token,
}: {
  token: string;
  page?: number;
  size?: number;
}) => {
  const data = axios.get(
    `https://apps.leader-id.ru/api/v1/events/search?paginationPage=${page}&paginationSize=${size}&placeIds%5B%5D=1295`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return data;
};

export const useGetEventsList = ({
  page = 1,
  size = 10,
  token,
}: {
  token: string;
  page: number;
  size: number;
}) => {
  const query = useQuery({
    queryKey: ['getEventsList', page, token],
    queryFn: () => (token ? getEventsList({ page, size, token }) : null),
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
