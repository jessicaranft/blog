import styled from 'styled-components'

export const SearchBarContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin-top: 7.2rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.8rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;

    display: flex;
    align-items: center;
    padding: 1.2rem 1.6rem;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
