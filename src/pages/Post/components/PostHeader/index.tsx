import { useNavigate, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa'
import { FaArrowUpRightFromSquare, FaChevronLeft } from 'react-icons/fa6'
import {
  PostHeaderContainer,
  PostDetailsContainer,
  NavStyledLink,
} from './styles'
import { InfoIcon } from '../../../../components/InfoIcon'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'

export function PostHeader() {
  const { posts } = useContext(PostsContext)
  const { number } = useParams()

  const currentPost = posts?.find((post) => post.number === Number(number))

  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <nav>
        <NavStyledLink onClick={handleGoBack}>
          <FaChevronLeft size={12} /> Voltar
        </NavStyledLink>
        <a href={currentPost?.html_url} target="_blank" rel="noreferrer">
          <NavStyledLink>
            Ver no GitHub <FaArrowUpRightFromSquare size={12} />
          </NavStyledLink>
        </a>
      </nav>

      <h1>{currentPost?.title}</h1>

      <PostDetailsContainer>
        <InfoIcon
          icon={<FaGithub size={18} />}
          content={`${currentPost?.user.login}`}
          variant="gray"
        />

        <InfoIcon
          icon={<FaCalendarDay size={18} />}
          content={
            currentPost?.created_at
              ? formatDistanceToNow(new Date(currentPost?.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })
              : ''
          }
          variant="gray"
        />

        <InfoIcon
          icon={<FaComment size={18} />}
          content={`${currentPost?.comments} comentários`}
          variant="gray"
        />
      </PostDetailsContainer>
    </PostHeaderContainer>
  )
}
