import { Outlet } from 'react-router-dom'
import { LayoutContainer, OutletContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  )
}
