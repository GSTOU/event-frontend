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

import { EventsList } from './core/events-list';
import { Layout } from './core/layout/layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <Layout>
          <EventsList />
        </Layout>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
