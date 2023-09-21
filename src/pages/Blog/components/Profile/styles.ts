import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  background-color: ${(props) => props.theme['base-profile']};

  padding: 3.2rem 4rem;
  border-radius: 8px;

  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 3.2rem;

  position: relative;

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 2.4rem;
    line-height: 130%;
  }

  @media (max-width: 768px) {
    width: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 1.6rem;
    align-items: center;
  }
`

export const ProfileDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`

export const ProfileGithubLink = styled.a`
  color: ${(props) => props.theme.blue};

  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 0;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  position: absolute;
  right: 3rem;
  top: 3rem;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    top: 2rem;
    right: 2rem;
  }
`
