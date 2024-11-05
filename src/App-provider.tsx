import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({
  token: '',
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    axios
      .post('https://apps.leader-id.ru/api/v1/oauth/token', {
        ['client_id']: 'c96a1dcf-db3a-41da-b2d5-f8748545d87c',
        ['client_secret']: '8A3hNmFL04n5093y5bMVJ2tXjSsiWUuJ',
        ['grant_type']: 'client_credentials',
      })
      .then((res) => {
        setToken(res?.data?.access_token);
      });
    // .catch(() => {
    //   setTimeout(() => {
    //     document.location.reload();
    //   }, 5000);
    // });
  }, []);

  const value = { token };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
