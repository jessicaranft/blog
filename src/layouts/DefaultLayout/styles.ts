import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const OutletContainer = styled.div`
  margin-top: -8rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`
