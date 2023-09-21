import { createContext, useEffect, useState } from 'react'

interface User {
  login: string
}

interface Post {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: User
}

interface PostsContextType {
  posts: Post[] | null
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsProviderProps {
  children: React.ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[] | null>(null)

  async function fetchPosts(query?: string) {
    let url = new URL('https://api.github.com/repos/jessicaranft/blog/issues')

    if (query) {
      url = new URL(
        `https://api.github.com/search/issues?q=${query}%20repo:jessicaranft/blog`,
      )
    }

    const response = await fetch(url.href)
    const data = await response.json()

    if (query) {
      const searchResponse = data as { items: Post[] }
      const filteredPosts = searchResponse.items.map((item) => ({
        id: item.id,
        number: item.number,
        title: item.title,
        body: item.body,
        created_at: item.created_at,
        comments: item.comments,
        html_url: item.html_url,
        user: { login: item.user.login },
      }))

      setPosts(filteredPosts)
    } else {
      const allPosts = data as Post[]

      setPosts(allPosts)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
