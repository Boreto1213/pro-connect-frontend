import { FC, ReactNode } from 'react'
// import { Toaster } from 'react-hot-toast'
import { Toaster } from 'sonner'
import { NextUIProvider } from '@nextui-org/react'
import AuthProvider from '../context/AuthProvider'
import ServiceProvider from '../context/ServiceProvider'
import UserDetailsProvider from '../context/UserDetailsProvider'
import StompClientProvider from '../context/StompClientProvider'
import MessagesProvider from '../context/MessagesProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ExpertFilterProvider from '../context/ExpertFilterProvider'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const GOOGLE_CLIENT_ID =
    '581569922726-ahnbp29r6u40s5v2rtuid29g44dob83n.apps.googleusercontent.com'
  return (
    <>
      <Toaster position='top-center' richColors />
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <StompClientProvider>
            <MessagesProvider>
              <UserDetailsProvider>
                <ExpertFilterProvider>
                  <ServiceProvider>
                    <NextUIProvider>{children}</NextUIProvider>
                  </ServiceProvider>
                </ExpertFilterProvider>
              </UserDetailsProvider>
            </MessagesProvider>
          </StompClientProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default Providers
