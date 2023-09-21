import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 86.4rem;

  @media (max-width: 768px) {
    width: 36rem;
    max-width: 100%;
    margin: 0 1rem;
  }
`

export const PostContentContainer = styled.div`
  padding: 4rem;

  p {
    text-align: justify;
  }

  h2,
  h3 {
    color: ${(props) => props.theme['base-title']};
    margin: 2rem 0;
  }

  pre {
    background: ${(props) => props.theme['base-profile']};
    padding: 3rem;
    border-radius: 8px;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    overflow-x: scroll;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`
