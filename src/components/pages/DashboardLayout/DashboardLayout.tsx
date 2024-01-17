import { FC, useEffect } from 'react'
import { SideBarOption } from '../../../types/sidebar-option'
import SidebarOptions from './SidebarOptions'
import TopBar from './TopBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useStompClient } from '../../../hooks/useStompClient'
import { useChatOptions } from '../../../hooks/useChatOptions'
import { Client, IMessage } from '@stomp/stompjs'
import { toast } from 'sonner'
import useAuth from '../../../hooks/useAuth'
import { Icons } from '../../Icons'
import { Message } from '../../../types/message'
import { useMessages } from '../../../hooks/useMessages'

const DashboardLayout: FC = () => {
  const {
    auth: { id },
  } = useAuth()
  const { setStompClient } = useStompClient()
  const { chatOptions } = useChatOptions()
  const { setMessages } = useMessages()

  const sidebarOptions: SideBarOption[] = [
    { id: 1, name: 'Home', href: '/dashboard/home', icon: 'Home' },
    { id: 4, name: 'Chats', href: '/dashboard/chats', icon: 'MessageCircle' },
    {
      id: 2,
      name: 'Explore services',
      href: '/dashboard/services?page=1&popupOpen=false&seeReviews=false&selectedServiceId=',
      icon: 'Lightbulb',
    },
    {
      id: 3,
      name: 'Explore experts',
      href: '/dashboard/experts',
      icon: 'Users',
    },
    {
      id: 5,
      name: 'Create new service',
      href: '/dashboard/services/create',
      icon: 'PackagePlus',
    },
    { id: 6, name: 'Statistics', href: '/dashboard/statistics', icon: 'BarChart4' },
    { id: 7, name: 'About', href: '/dashboard/about', icon: 'HelpCircle' },
  ]

  useEffect(() => {
    if (chatOptions.length) {
      const stompClient = new Client({
        brokerURL: 'ws://localhost:8080/ws',
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      })

      stompClient.onConnect = () => {
        console.log('connected');
        
        stompClient.subscribe(`/user/${id}/queue/inboxmessages`, (data) => {
      
          onMessageReceived(data)
        })
      }

      // initiate client
      stompClient.activate()

      // maintain the client for sending and receiving
      setStompClient(stompClient)

      const onMessageReceived = (data: IMessage) => {
        const message: Message = JSON.parse(data.body)
        setMessages((prev) => ({
          ...prev,
          [message.senderId]: [...(prev[message.senderId] || []), message],
        }))
        if (!window.location.pathname.includes('/chats')) {
          toast(
            <div className='flex gap-3 items-center text-slate-600'>
              <Icons.MessageCircle className='w-8 h-8 text-teal-700' />
              <span className='text-base font-semibold'>New message!</span>
            </div>,
            {
              style: {
                background: 'rgb(240 253 250)',
              },
            }
          )
        }
      }
    }
  }, [chatOptions])

  return (
    <>
      <TopBar />
      <div className='relative'>
        <SidebarOptions sidebarOptions={sidebarOptions} />
        <div className='inline-flex flex-col h-full w-full pl-[320px] pr-20'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default DashboardLayout
