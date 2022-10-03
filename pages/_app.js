import '../styles/globals.css'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AuthUserProvider } from '../context/AuthUserContext';
function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
      }}
    >
      <NotificationsProvider>
        <AuthUserProvider>
          <Component {...pageProps} />
        </AuthUserProvider>
      </NotificationsProvider>
    </MantineProvider>
  )
}

export default MyApp
