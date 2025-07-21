# Next.js 15 WebApp Scaffold

A complete, production-ready web application scaffold built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI. Features modern development tools, AWS Amplify deployment configuration, and comprehensive examples.

## ✨ Features

- **Next.js 15** with App Router and React 19
- **TypeScript** with strict type checking
- **Tailwind CSS** for styling with Shadcn/UI components
- **Geist Sans** font family for modern typography
- **Dark mode** support with system preference detection
- **AWS Amplify** deployment configuration
- **ESLint & Prettier** for code quality and formatting
- **React Server Components** with data fetching examples
- **Server Actions** for form handling
- **Proper loading and error states**
- **Accessibility best practices**
- **SEO optimization** with metadata

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 2025-webapp-scaffold
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── demo/              # Demo page with Server Actions
│   ├── posts/             # Posts page with data fetching
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── layout/           # Layout components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/                  # Utility functions
│   └── utils.ts          # CN utility for class merging
└── types/                # TypeScript type definitions
    └── index.ts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 UI Components

This scaffold includes pre-configured Shadcn/UI components:

- **Button** - Various variants and sizes
- **Card** - Content containers with header, body, and footer
- **Input** - Form input with proper styling
- **Theme Toggle** - Dark/light mode switcher

To add more Shadcn/UI components:

```bash
npx shadcn@latest add [component-name]
```

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | Shadcn/UI |
| Font | Geist Sans |
| Deployment | AWS Amplify |
| Linting | ESLint |
| Formatting | Prettier |
| Theme | next-themes |

## 🚀 Deployment

### AWS Amplify

This project is pre-configured for AWS Amplify deployment:

1. Connect your repository to AWS Amplify
2. The `amplify.yml` build configuration is already included
3. Environment variables can be configured in the Amplify console

### Other Platforms

The project can also be deployed to:

- **Vercel**: Import repository and deploy
- **Netlify**: Connect repository with build command `npm run build`
- **Railway**: Deploy with automatic Next.js detection

## 📚 Examples

### React Server Component (Data Fetching)

```typescript
// src/app/posts/page.tsx
async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

export default async function PostsPage() {
  const posts = await getAllPosts()
  // Render posts...
}
```

### Client Component with Server Action

```typescript
// src/app/demo/create-post-form.tsx
"use client"

import { useActionState } from "react"
import { createPostAction } from "./actions"

export function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(createPostAction, null)
  // Form implementation...
}
```

### Server Action

```typescript
// src/app/demo/actions.ts
"use server"

export async function createPostAction(prevState: any, formData: FormData) {
  // Server-side form processing...
}
```

## 🎯 Best Practices

- **File Organization**: Components in `src/components`, pages in `src/app`
- **Type Safety**: Strict TypeScript configuration with proper type definitions
- **Accessibility**: Proper ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Server Components for data fetching, Client Components only when needed
- **SEO**: Metadata configuration, semantic HTML structure
- **Error Handling**: Proper error boundaries and loading states

## 🔧 Customization

### Theme Colors

Edit `tailwind.config.ts` and `src/app/globals.css` to customize the color scheme.

### Components

Add new Shadcn/UI components:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
```

### Environment Variables

Configure environment variables in `.env.local` for development and in your deployment platform for production.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS.