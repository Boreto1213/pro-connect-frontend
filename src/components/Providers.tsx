import { FC, ReactNode } from 'react'
// import { Toaster } from 'react-hot-toast'
import { Toaster } from 'sonner'
import { NextUIProvider } from '@nextui-org/react'
import AuthProvider from '../context/AuthProvider'
import ServiceProvider from '../context/ServiceProvider'
import UserDetailsProvider from '../context/UserDetailsProvider'
import StompClientProvider from '../context/StompClientProvider'
import MessagesProvider from '../context/MessagesProvider'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position='top-center' richColors />

      <AuthProvider>
        <StompClientProvider>
          <MessagesProvider>
            <UserDetailsProvider>
              <ServiceProvider>
                <NextUIProvider>{children}</NextUIProvider>
              </ServiceProvider>
            </UserDetailsProvider>
          </MessagesProvider>
        </StompClientProvider>
      </AuthProvider>
    </>
  )
}

export default Providers
