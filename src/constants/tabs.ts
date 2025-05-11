import { FaBolt, FaComments, FaList, FaUser } from 'react-icons/fa6'

export enum TabType {
  LOG = 'log',
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
    value: TabType.LOG,
    icon: FaList,
    label: 'Log',
    href: '/logs'
  },
  {
    value: TabType.PEOPLE,
    icon: FaUser,
    label: 'People',
    href: '/characters'
  },
  {
    value: TabType.CHAT,
    icon: FaComments,
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
