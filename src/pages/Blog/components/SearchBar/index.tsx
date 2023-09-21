import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { SearchBarContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostsContext } from '../../../../contexts/PostsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const { posts, fetchPosts } = useContext(PostsContext)

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPosts(data.query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h2>Publicações</h2>
        <span>
          {posts?.length === 1
            ? `${posts?.length} publicação`
            : `${posts?.length} publicações`}
        </span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchBarContainer>
  )
}
