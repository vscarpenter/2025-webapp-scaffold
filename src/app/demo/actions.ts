"use server"

import type { ServerActionResult } from "@/types"

export async function createPostAction(
  prevState: ServerActionResult | null,
  formData: FormData
): Promise<ServerActionResult> {
  const title = formData.get("title") as string
  const body = formData.get("body") as string

  if (!title || !body) {
    return {
      success: false,
      message: "Title and body are required",
    }
  }

  if (title.length < 5) {
    return {
      success: false,
      message: "Title must be at least 5 characters long",
    }
  }

  if (body.length < 10) {
    return {
      success: false,
      message: "Body must be at least 10 characters long",
    }
  }

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to create post")
    }

    const newPost = await response.json()

    return {
      success: true,
      message: "Post created successfully!",
      data: newPost,
    }
  } catch (error) {
    console.error("Error creating post:", error)
    return {
      success: false,
      message: "Failed to create post. Please try again.",
    }
  }
}