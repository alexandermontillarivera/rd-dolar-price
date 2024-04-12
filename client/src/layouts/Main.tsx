import { Header } from '@components/global/Header'

interface Props {
  children: React.ReactNode
}

function MainLayout ({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout
