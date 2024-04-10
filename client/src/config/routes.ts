import type { RoutePage } from '@contracts/RoutePage'
import { useAddRoute } from '@hooks/useAddRoute'
import HomePage from '@pages/Home'

const routes: RoutePage[] = [
  useAddRoute({
    component: HomePage,
    path: '/'
  })
]

export default routes
