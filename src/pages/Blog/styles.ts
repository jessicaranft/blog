import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 86.4rem;

  @media (max-width: 768px) {
    width: 36rem;
    max-width: 100%;
    margin: 0 1rem;
  }
`

export const CardsContainer = styled.section`
  margin: 4.8rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const PostCard = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 3.2rem;
  border-radius: 10px;

  width: 41.6rem;
  height: 26rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  header {
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }

  .p-container {
    height: 11.2rem;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
