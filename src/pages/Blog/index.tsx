import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

import { BlogContainer, CardsContainer, PostCard } from './styles'

import { SearchBar } from './components/SearchBar'
import { Profile } from './components/Profile'
import { PostsContext } from '../../contexts/PostsContext'

export function Blog() {
  const { posts } = useContext(PostsContext)
  const navigate = useNavigate()

  function handlePostClick(number: number) {
    navigate(`/post/${number}`)
  }

  return (
    <BlogContainer>
      <Profile />

      <SearchBar />

      <CardsContainer>
        {Array.isArray(posts) ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              onClick={() => handlePostClick(post.number)}
            >
              <header>
                <h1>{post.title}</h1>
                <span>
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>

              <div className="p-container">
                <p>{post.body}</p>
              </div>
            </PostCard>
          ))
        ) : (
          <p>Não há posts para exibir.</p>
        )}
      </CardsContainer>
    </BlogContainer>
  )
}
