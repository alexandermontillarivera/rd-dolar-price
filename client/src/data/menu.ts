import type { IMenuItem } from '@contracts/Menu'
import { useAddIMenuItem } from '@hooks/useAddIMenuItem'
import { IconHome, IconLibrary, IconApi, IconCode } from '@tabler/icons-react'

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
    path: '/api-documentation',
    text: 'Documentación de API'
  }),
  useAddIMenuItem({
    icon: IconCode,
    path: '/source-code',
    text: 'Proyecto'
  })
]
