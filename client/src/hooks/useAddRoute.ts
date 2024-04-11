interface IAddRouteParams {
  path: string
  component: () => JSX.Element
}

export const useAddRoute = ({ component, path }: IAddRouteParams) => {
  return {
    path,
    Component: component,
    id: crypto.randomUUID()
  }
}
