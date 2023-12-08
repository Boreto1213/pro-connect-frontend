import { FC, ReactNode } from 'react'
// import { Toaster } from 'react-hot-toast'
import { Toaster } from 'sonner'
import { NextUIProvider } from '@nextui-org/react'
import AuthProvider from '../context/AuthProvider'
import ServiceProvider from '../context/ServiceProvider'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position='top-center' richColors />

      <AuthProvider>
        <ServiceProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </ServiceProvider>
      </AuthProvider>
    </>
  )
}

export default Providers
