/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-restricted-imports */
import './index.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import 'dayjs/locale/ru';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './libs/route/routs';

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState<unknown>(null);
  useEffect(() => {
    axios
      .post('https://apps.leader-id.ru/api/v1/oauth/token', {
        client_id: 'c96a1dcf-db3a-41da-b2d5-f8748545d87c',
        client_secret: '8A3hNmFL04n5093y5bMVJ2tXjSsiWUuJ',
        grant_type: 'client_credentials',
      })
      .then((res) => {
        setToken(res?.data?.access_token);
      });
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get(
          'https://apps.leader-id.ru/api/v1/events/search?paginationPage=1&paginationSize=50&placeIds%5B%5D=1295',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          console.log(res?.data);
        });
    }
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
