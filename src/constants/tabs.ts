import { FaBolt, FaComments, FaInfo } from 'react-icons/fa6'

export enum TabType {
  INFO = 'info',
  CHAT = 'chat',
  ACTION = 'action'
}

type TabInputType = {
  value: TabType
  icon: React.ComponentType<{ size?: number }>
  label: string
}

export const tabs: TabInputType[] = [
  {
    value: TabType.INFO,
    icon: FaInfo,
    label: 'Info'
  },
  {
    value: TabType.CHAT,
    icon: FaComments,
    label: 'Chat'
  },
  {
    value: TabType.ACTION,
    icon: FaBolt,
    label: 'Action'
  }
]
