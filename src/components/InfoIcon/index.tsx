import { InfoIconContainer } from './styles'

interface InfoIconProps {
  icon: React.ReactNode
  content: string
  variant: 'white' | 'gray'
}

export function InfoIcon({ icon, content, variant }: InfoIconProps) {
  return (
    <InfoIconContainer variant={variant}>
      {icon}
      <p>{content}</p>
    </InfoIconContainer>
  )
}
