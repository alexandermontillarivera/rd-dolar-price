import type { RoutePage } from '@contracts/RoutePage'
import { useAddRoute } from '@hooks/useAddRoute'
import HomePage from '@pages/Home'
import ReferencesPage from '@pages/References'
import ApiDocumentationPage from '@pages/ApiDocumentation'

const routes: RoutePage[] = [
  useAddRoute({
    component: HomePage,
    path: '/'
  }),
  useAddRoute({
    component: ReferencesPage,
    path: '/references'
  }),
  useAddRoute({
    component: ApiDocumentationPage,
    path: '/api-documentation'
  })
]

export default routes
