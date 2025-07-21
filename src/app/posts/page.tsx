import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Post } from "@/types"

async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
    })
    
    if (!response.ok) {
      throw new Error("Failed to fetch posts")
    }
    
    return response.json()
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

function PostsLoading() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardHeader>
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-3 bg-muted rounded w-1/4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-4/6" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

async function PostsList() {
  const posts = await getAllPosts()

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Failed to load posts. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
            <CardDescription>Post #{post.id} • User {post.userId}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground line-clamp-4">
              {post.body}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function PostsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col space-y-4 text-center mb-8">
        <h1 className="font-bold text-4xl">All Posts</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          All posts fetched from JSONPlaceholder API using React Server Components. 
          This demonstrates server-side data fetching with proper loading states.
        </p>
      </div>

      <Suspense fallback={<PostsLoading />}>
        <PostsList />
      </Suspense>
    </div>
  )
}