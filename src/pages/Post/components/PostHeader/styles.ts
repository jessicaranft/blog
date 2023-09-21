import { styled } from 'styled-components'

export const PostHeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};

  padding: 3.2rem 4rem;
  border-radius: 8px;

  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 2.4rem;
    line-height: 130%;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const PostDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;
`

export const NavStyledLink = styled.button`
  color: ${(props) => props.theme.blue};

  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 2rem;

  background: none;
  border: none;

  cursor: pointer;
`
