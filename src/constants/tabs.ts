import { FaBolt, FaHouse, FaList, FaRegCommentDots, FaUser } from 'react-icons/fa6'

export enum TabType {
  HOME = 'home',
  EVENT = 'event',
  PEOPLE = 'people',
  CHAT = 'chat',
  ACTION = 'action'
}

type TabInputType = {
  value: TabType
  href: string
  icon: React.ComponentType<{ size?: number }>
  label: string
}

export const tabs: TabInputType[] = [
  {
    value: TabType.HOME,
    icon: FaHouse,
    label: 'Home',
    href: '/'
  },
  {
    value: TabType.EVENT,
    icon: FaList,
    label: 'Event',
    href: '/events'
  },
  {
    value: TabType.PEOPLE,
    icon: FaUser,
    label: 'People',
    href: '/characters'
  },
  {
    value: TabType.CHAT,
    icon: FaRegCommentDots,
    label: 'Chat',
    href: '/chats'
  },
  {
    value: TabType.ACTION,
    icon: FaBolt,
    label: 'Action',
    href: '/actions'
  }
]
