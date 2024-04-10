import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/Main'
import routes from './config/routes'

function App () {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {routes.map(({ Component, id, path }) => (
              <Route
                key={id}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App
