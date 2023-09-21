import styled from 'styled-components'

interface InfoIconContainerProps {
  variant: 'white' | 'gray'
}

export const InfoIconContainer = styled.div<InfoIconContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    fill: ${(props) => props.theme['base-label']};
  }

  p {
    color: ${(props) =>
      props.variant === 'white'
        ? props.theme['base-title']
        : props.theme['base-span']};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
