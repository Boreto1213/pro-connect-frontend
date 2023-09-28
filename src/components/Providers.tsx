import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import {NextUIProvider} from '@nextui-org/react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <NextUIProvider>{children}</NextUIProvider>
    </>
  )
}

export default Providers