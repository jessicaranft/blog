import { Link } from 'react-router-dom'

import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </HeaderContainer>
  )
}
