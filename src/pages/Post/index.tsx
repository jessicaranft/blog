import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { PostContainer, PostContentContainer } from './styles'

import { PostHeader } from './components/PostHeader'
import { PostsContext } from '../../contexts/PostsContext'

export function Post() {
  const { posts } = useContext(PostsContext)
  const { number } = useParams()

  const currentPost = posts?.find((post) => post.number === Number(number))

  return (
    <PostContainer>
      <PostHeader />

      <PostContentContainer>
        <ReactMarkdown>{currentPost?.body || ''}</ReactMarkdown>
      </PostContentContainer>
    </PostContainer>
  )
}
