import type { IMenuItem } from '@contracts/Menu'
import { useAddIMenuItem } from '@/hooks/useAddIMenuItem'
import { IconHome, IconLibrary, IconApi } from '@tabler/icons-react'

export const menuHeader: IMenuItem[] = [
  useAddIMenuItem({
    icon: IconHome,
    path: '/',
    text: 'Inicio'
  }),
  useAddIMenuItem({
    icon: IconLibrary,
    path: '/references',
    text: 'Referencias'
  }),
  useAddIMenuItem({
    icon: IconApi,
    path: '/api',
    text: 'Documentación de API'
  })
]
