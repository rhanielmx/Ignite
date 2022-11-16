import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
