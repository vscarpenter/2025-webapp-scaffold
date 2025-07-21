import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Post } from "@/types"

async function getLatestPosts(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
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

export default async function HomePage() {
  const posts = await getLatestPosts()

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center text-center">
        <div className="mx-auto max-w-[58rem] space-y-4">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Next.js 15 WebApp Scaffold
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A modern, production-ready web application scaffold built with Next.js 15, 
            TypeScript, Tailwind CSS, and Shadcn/UI components. Features AWS Amplify 
            deployment configuration and dark mode support.
          </p>
          <div className="space-x-4">
            <Link href="/posts">
              <Button size="lg">View All Posts</Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-16">
        <div className="flex flex-col space-y-4 text-center">
          <h2 className="font-bold text-3xl">Latest Posts</h2>
          <p className="text-muted-foreground">
            Recent posts fetched from JSONPlaceholder API using React Server Components
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>Post #{post.id}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.body}
                  </p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">Failed to load posts. Please try again later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}