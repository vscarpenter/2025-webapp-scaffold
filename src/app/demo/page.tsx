import { CreatePostForm } from "./create-post-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="font-bold text-4xl">Demo Page</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This page demonstrates the key features of the scaffold including client components, 
          Server Actions, proper form handling, and UI components.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Features Demonstrated</CardTitle>
            <CardDescription>Key scaffold capabilities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">✅ React Server Components</h3>
              <p className="text-sm text-muted-foreground">
                Used throughout the app for efficient data fetching
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✅ Client Components</h3>
              <p className="text-sm text-muted-foreground">
                Interactive form with real-time validation
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✅ Server Actions</h3>
              <p className="text-sm text-muted-foreground">
                Form submission with server-side validation
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✅ Loading States</h3>
              <p className="text-sm text-muted-foreground">
                Proper UX during async operations
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✅ Error Handling</h3>
              <p className="text-sm text-muted-foreground">
                Graceful error states and user feedback
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✅ Dark Mode</h3>
              <p className="text-sm text-muted-foreground">
                System-aware theme switching
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✅ TypeScript</h3>
              <p className="text-sm text-muted-foreground">
                Strict type checking throughout
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">✅ Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Proper ARIA labels and keyboard navigation
              </p>
            </div>
          </CardContent>
        </Card>

        <CreatePostForm />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
          <CardDescription>Technologies used in this scaffold</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-1">
              <h4 className="font-medium">Framework</h4>
              <p className="text-muted-foreground">Next.js 15</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Language</h4>
              <p className="text-muted-foreground">TypeScript</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Styling</h4>
              <p className="text-muted-foreground">Tailwind CSS</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Components</h4>
              <p className="text-muted-foreground">Shadcn/UI</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Font</h4>
              <p className="text-muted-foreground">Geist Sans</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Deployment</h4>
              <p className="text-muted-foreground">AWS Amplify</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Linting</h4>
              <p className="text-muted-foreground">ESLint</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Formatting</h4>
              <p className="text-muted-foreground">Prettier</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}