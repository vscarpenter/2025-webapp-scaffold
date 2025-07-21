"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createPostAction } from "./actions"
import { Loader2 } from "lucide-react"

export function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(createPostAction, null)

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
        <CardDescription>
          This form demonstrates Server Actions with client-side validation and loading states.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Enter post title (min 5 characters)"
              disabled={isPending}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="body" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Body
            </label>
            <textarea
              id="body"
              name="body"
              placeholder="Enter post content (min 10 characters)"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isPending}
              required
            />
          </div>

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Post...
              </>
            ) : (
              "Create Post"
            )}
          </Button>
        </form>

        {state && (
          <div className={`mt-4 p-4 rounded-md ${
            state.success 
              ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
              : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}>
            <p className="text-sm font-medium">{state.message}</p>
            {state.success && state.data && (
              <div className="mt-2 text-xs opacity-75">
                <p>Post ID: {(state.data as any).id}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}