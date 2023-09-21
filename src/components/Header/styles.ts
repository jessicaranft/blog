import styled from 'styled-components'
import headerBg from '../../assets/header-bg.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 29.6rem;

  background: url(${headerBg}) no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;

  a {
    margin: 6.4rem auto 0;
  }
`
