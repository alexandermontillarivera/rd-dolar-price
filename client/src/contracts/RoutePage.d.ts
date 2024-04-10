export interface RoutePage {
  path: string
  id: string
  Component: () => JSX.Element
}
