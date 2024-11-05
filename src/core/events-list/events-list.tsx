/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-imports */
import { Image, LoadingOverlay, Pagination } from '@mantine/core';
import { useForm } from '@mantine/form';
import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../App-provider';
import { useGetEventsList } from '../../service/get-events-list';
dayjs.locale('ru');

export const EventsList = () => {
  const { token } = useContext(AppContext);

  const pageSize = 15;
  const [page, onChange] = useState(1);

  const form = useForm({
    initialValues: {
      full_name: undefined,
      citizenship: undefined,
      relationship: undefined,
      education: undefined,
    },
  });

  const { data, isFetching } = useGetEventsList({
    page: page,
    size: pageSize,
    token,
  });
  const paginationPageCount = data?.meta?.paginationPageCount;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 820,
        behavior: 'smooth',
      });
    }, 500);
  }, [page]);

  if (!token) {
    return (
      <LoadingOverlay visible={true} overlayProps={{ radius: 'sm', blur: 2 }} />
    );
  }

  return (
    <div className="mx-auto mt-8 grid max-w-container  items-center gap-2 md:flex-row md:items-stretch">
      <h1 style={{ fontSize: 56 }} className="font-semibold">
        Все мероприятия
      </h1>
      <div className="relative mt-4 grid min-h-60 gap-6 px-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <LoadingOverlay
          visible={isFetching}
          overlayProps={{ radius: 'sm', blur: 2 }}
        />
        {data?.items?.map((item: any) => {
          return (
            <div key={item?.id} className="shadow-card">
              <div className="flex h-full flex-col gap-2">
                <div className="relative rounded-[1em]   text-center">
                  <div className="bg-black">
                    <Image
                      w="100%"
                      h="330px"
                      src={
                        item?.photo
                          ? String(item?.photo)
                          : 'https://gstou.ru/university/profiles/profile.jpg'
                      }
                      alt={item?.full_name}
                      className="opacity-70"
                      classNames={{ root: 'rounded-t-[1em]' }}
                    />
                    <a
                      href={`https://leader-id.ru/events/${item?.id}`}
                      target="_blank"
                      className="absolute bottom-6 right-4 rounded-md px-4 py-2 text-white shadow-my-cardShadow"
                      style={{ backdropFilter: 'blur(25px)' }}
                      rel="noreferrer"
                    >
                      Узнать подробнее
                    </a>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between p-5 pt-0">
                  <div className="mt-2 text-xl font-bold">
                    {item?.full_name}
                  </div>
                  <div>
                    <div className="mt-4 flex justify-between  text-sm font-thin text-slate-600">
                      <div>
                        {dayjs(item?.date_start)?.format('DD MMMM YYYY, HH:mm')}{' '}
                        - {dayjs(item?.date_end)?.format('DD MMMM YYYY, HH:mm')}
                      </div>
                    </div>
                    <div className="font-semibold">
                      <div>{item?.space?.address?.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end pr-8">
        <Pagination
          classNames={{
            control:
              '!bg-my-blue !text-white data-[active=true]:!bg-my-red data-[active=true]:!border-my-blue data-[disabled=true]:!opacity-40',
          }}
          total={paginationPageCount}
          value={page}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
