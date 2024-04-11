import type { IconHomeEco } from '@tabler/icons-react'

interface IUseAddIMenuItem {
  text: string
  path: string
  icon: typeof IconHomeEco
}

export const useAddIMenuItem = ({ icon, ...rest }: IUseAddIMenuItem) => {
  return {
    id: crypto.randomUUID(),
    Icon: icon,
    ...rest
  }
}
