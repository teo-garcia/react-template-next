<!-- ![README.md banner](./README.png) -->

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-next)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-next)

# React Template Next

Start building modern web applications using React and Next.js.

## Requirements

- `Node 18+`
- `Git 2+`
- `pnpm 8`

## Installation

1. Get the template using `npx degit`:

```bash
  npx degit teo-garcia/react-template-next my_project
```

2. Install the dependencies:

```bash
  pnpm install
```

3. Run the project:

```bash
  pnpm dev
```

## Tools

- Next 14.
- React 18.
- Tailwind 3.
- Typescript 4.
- ESLint 8 + Prettier 3.
- Husky 8 + Lint Staged 15.
- Jest 29 + Testing Library React 14.
- Playwright 1.
- MSW 2.

## Commands

| **Command**             | **Description**                                 |
| ----------------------- | ----------------------------------------------- |
| dev                     | Run `dev:web`.                                  |
| build                   | Run `build:web`.                                |
| dev:web                 | Run `next` in `DEV` mode.                       |
| build:web               | Run `next` in `PROD` mode.                      |
| start:web               | Run `next` server (build required).             |
| test:unit               | Run `jest`.                                     |
| test:e2e                | Run `dev`, and `playwright`.                    |
| lint:css                | Lint CSS files.                                 |
| lint:js                 | Lint JS files.                                  |
| create:component <name> | Creates a component at `src/components/<name>`. |
| create:feature <name>   | Creates a component at `src/features/<name>`.   |

# Cheatsheet

## 1. Basics

### 1.1 App Router

##### 1.1.1 Getting Started

An overview of the folder and file conventions in Next.js and tips for organizing your project.

##### 1.1.2 Project Structure

###### 1.1.2.1 Top-level Folders

- **app**: App Router
- **pages**: Pages Router
- **public**: Static assets to be served
- **src**: Optional application source folder

###### 1.1.2.2 Top-level Files

- **next.config.js**: Configuration file for Next.js
- **package.json**: Project dependencies and scripts
- **instrumentation.ts**: OpenTelemetry and Instrumentation file
- **middleware.ts**: Next.js request middleware
- **.env**: Environment variables
  - **.env.local**: Local environment variables
  - **.env.production**: Production environment variables
  - **.env.development**: Development environment variables
- **.eslintrc.json**: Configuration file for ESLint
- **.gitignore**: Git files and folders to ignore
- **next-env.d.ts**: TypeScript declaration file for Next.js
- **tsconfig.json**: Configuration file for TypeScript
- **jsconfig.json**: Configuration file for JavaScript

##### 1.1.3 Routing Files

- **layout.js/.jsx/.tsx**: Layout
- **page.js/.jsx/.tsx**: Page
- **loading.js/.jsx/.tsx**: Loading UI
- **not-found.js/.jsx/.tsx**: Not found UI
- **error.js/.jsx/.tsx**: Error UI
- **global-error.js/.jsx/.tsx**: Global error UI
- **route.js/.ts**: API endpoint
- **template.js/.jsx/.tsx**: Re-rendered layout
- **default.js/.jsx/.tsx**: Parallel route fallback page

###### 1.1.3.1 Nested Routes

- **folder/**: Route segment
- **folder/folder/**: Nested route segment

###### 1.1.3.2 Dynamic Routes

- **[folder]**: Dynamic route segment
- **[...folder]**: Catch-all route segment
- **[[...folder]]**: Optional catch-all route segment

###### 1.1.3.3 Route Groups and Private Folders

- **(folder)**: Group routes without affecting routing
- **\_folder**: Opt folder and all child segments out of routing

###### 1.1.3.4 Parallel and Intercepted Routes

- **@folder**: Named slot
- **(.)folder**: Intercept same level
- **(..)folder**: Intercept one level above
- **(...)folder**: Intercept from root

#### 1.2 Metadata File Conventions

##### 1.2.1 App Icons

- **favicon.ico**: Favicon file
- **icon.(ico|jpg|jpeg|png|svg)**: App Icon file
- **icon.(js|ts|tsx)**: Generated App Icon
- **apple-icon.(jpg|jpeg|png)**: Apple App Icon file
- **apple-icon.(js|ts|tsx)**: Generated Apple App Icon

##### 1.2.2 Open Graph and Twitter Images

- **opengraph-image.(jpg|jpeg|png|gif)**: Open Graph image file
- **opengraph-image.(js|ts|tsx)**: Generated Open Graph image
- **twitter-image.(jpg|jpeg|png|gif)**: Twitter image file
- **twitter-image.(js|ts|tsx)**: Generated Twitter image

##### 1.2.3 SEO

- **sitemap.xml**: Sitemap file
- **sitemap.(js|ts)**: Generated Sitemap
- **robots.txt**: Robots file
- **robots.(js|ts)**: Generated Robots file

#### 1.3 Component Hierarchy

The React components defined in special files of a route segment are rendered in this hierarchy:

1. **layout.js**
2. **template.js**
3. **error.js** (React error boundary)
4. **loading.js** (React suspense boundary)
5. **not-found.js** (React error boundary)
6. **page.js** or nested **layout.js**

In nested routes, components of a segment nest inside the parent segment's components.

#### 1.4 Organizing Your Project

##### 1.4.1 Colocation

- Route structure is defined by folders.
- Public access is controlled by the presence of page.js or route.js in a folder.

##### 1.4.2 Private Folders

- Prefix folders with \_ to make them private and opt out of routing.
- Example: \_folderName

##### 1.4.3 Route Groups

- Wrap a folder in parentheses to group routes without affecting the URL path.
- Example: (folderName)

##### 1.4.4 src Directory

- Store application code (including app) inside an optional src directory.

##### 1.4.5 Common Strategies

1. **Store project files outside of app**: Application code in shared folders at the root.
2. **Store project files in app**: Shared folders within the app directory.
3. **Split project files by feature or route**: Globally shared code in app, specific code colocated within route segments.

### 2. Images and Fonts

#### 2.1 Handling Static Assets

Store static files (e.g., images, fonts) in the `public` folder. These files are accessible via the base URL (`/`).

#### 2.2 Optimizing Images

##### 2.2.1 Using the `<Image>` Component

```tsx
import Image from 'next/image'

export default function Page() {
  return <Image src="" alt="" />
}
```

##### 2.2.2 Local Images

```tsx
import Image from 'next/image'
import profilePic from './me.png'

export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}
```

##### 2.2.3 Remote Images

```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```

##### 2.2.4 Allowing Remote Image Domains

```ts
import { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/my-bucket/**',
      },
    ],
  },
}

export default config
```

#### 2.3 Optimizing Fonts

##### 2.3.1 Using Google Fonts

```tsx
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}
```

##### 2.3.2 Variable Fonts

```tsx
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
```

##### 2.3.3 Local Fonts

```tsx
import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
```

##### 2.3.4 Multiple Font Files for a Font Family

```tsx
const roboto = localFont({
  src: [
    { path: './Roboto-Regular.woff2', weight: '400', style: 'normal' },
    { path: './Roboto-Italic.woff2', weight: '400', style: 'italic' },
    { path: './Roboto-Bold.woff2', weight: '700', style: 'normal' },
    { path: './Roboto-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
})
```

#### 3. Fetching Data and Streaming

Fetching data and streaming are essential to delivering dynamic content and optimizing user experience in modern web applications. This section explains how to efficiently fetch data on the server or client and how to leverage streaming for faster page loads.

##### 3.1 Fetching Data

###### 3.1.1 Server Components

Server Components allow you to fetch data directly on the server, optimizing performance by keeping large data handling and API calls off the client side.

###### Fetching Data with the `fetch` API

The `fetch` API is a versatile method to retrieve data from external APIs or services. It is ideal for server-side data fetching, leveraging asynchronous calls to streamline rendering.

```tsx
// app/blog/page.tsx
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

###### Fetching Data with an ORM or Database

Using an ORM or database integration lets you fetch data directly from a backend system. This method is useful for dynamic or personalized content that depends on structured data.

```tsx
// app/blog/page.tsx
import { db, posts } from '@/lib/db'

export default async function Page() {
  const allPosts = await db.select().from(posts)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

###### 3.1.2 Client Components

Client Components handle data fetching on the client side, enabling features like user interaction and state management. These are suitable for dynamic updates and real-time data.

###### Using React's `use` Hook

The `use` hook allows for streaming data from the server to the client, improving rendering efficiency. It integrates seamlessly with `Suspense` to manage loading states effectively.

```tsx
// app/blog/page.tsx
import Posts from '@/app/ui/posts'
import { Suspense } from 'react'

export default function Page() {
  const posts = getPosts()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}

// app/ui/posts.tsx
;('use client')
import { use } from 'react'

export default function Posts({
  posts,
}: {
  posts: Promise<{ id: string; title: string }[]>
}) {
  const data = use(posts)

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

###### Using Community Libraries (e.g., SWR)

Community libraries like SWR and React Query simplify data fetching by providing features like caching, retries, and real-time updates, making them excellent for client-side data management.

```tsx
'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    'https://api.vercel.app/blog',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

##### 3.2 Streaming

###### 3.2.1 Using `loading.js`

The `loading.js` file is used to create a global loading state for a route. It displays fallback content while data is being fetched, ensuring a smooth user experience during navigation.

```tsx
// app/blog/loading.tsx
export default function Loading() {
  return <div>Loading...</div>
}
```

###### 3.2.2 Using `<Suspense>`

`<Suspense>` enables fine-grained control over loading states, allowing developers to progressively stream content while displaying fallback components for incomplete data.

```tsx
// app/blog/page.tsx
import { Suspense } from 'react'
import BlogList from '@/components/BlogList'
import BlogListSkeleton from '@/components/BlogListSkeleton'

export default function BlogPage() {
  return (
    <div>
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  )
}
```

##### 3.3 Creating Meaningful Loading States

Creating meaningful loading states ensures users receive immediate feedback during navigation. Use skeleton screens, spinners, or placeholders to enhance user experience while data loads.

Design loading states that provide meaningful feedback to users, such as skeleton screens or spinners. Use React Devtools to preview loading states during development.

#### 4. Mutating Data

Mutating data in Next.js is essential for creating dynamic applications that require updates to server-side data or user interactions. This section covers how to create, invoke, and manage Server Functions for mutating data efficiently.

##### 4.1 Creating Server Functions

Server Functions are defined using the `use server` directive, enabling safe server-side data mutations. Use a separate file to manage these functions for better organization.

```tsx
// app/lib/actions.ts
'use server'

export async function createPost(formData: FormData) {
  // Logic to create a new post
}

export async function deletePost(formData: FormData) {
  // Logic to delete a post
}
```

##### 4.2 Using Server Functions in Components

###### 4.2.1 Server Components

Server Functions can be inlined within Server Components using the `use server` directive.

```tsx
// app/page.tsx
export default async function Page() {
  async function createPost() {
    'use server'
    // Mutate data
  }
  return <></>
}
```

###### 4.2.2 Client Components

Server Functions cannot be defined in Client Components but can be invoked by importing them.

```tsx
// app/ui/button.tsx
'use client'
import { createPost } from '@/app/lib/actions'

export function Button() {
  return <button formAction={createPost}>Create</button>
}
```

##### 4.3 Invoking Server Functions

###### 4.3.1 Forms

Server Functions can be invoked directly from forms using the `action` attribute. The function automatically receives the `FormData` object.

```tsx
// app/ui/form.tsx
import { createPost } from '@/app/lib/actions'

export function Form() {
  return (
    <form action={createPost}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  )
}
```

###### 4.3.2 Event Handlers

Server Functions can also be invoked using event handlers in Client Components.

```tsx
// app/ui/like-button.tsx
'use client'
import { incrementLike } from '@/app/lib/actions'
import { useState } from 'react'

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <button
      onClick={async () => {
        const updatedLikes = await incrementLike()
        setLikes(updatedLikes)
      }}
    >
      Like
    </button>
  )
}
```

##### 4.4 Showing a Pending State

Use the `useActionState` hook to show a loading indicator while a Server Function is executing.

```tsx
// app/ui/button.tsx
'use client'
import { useActionState } from 'react'
import { createPost } from '@/app/lib/actions'

export function Button() {
  const [state, action, pending] = useActionState(createPost, false)

  return (
    <button onClick={async () => action()}>
      {pending ? 'Loading...' : 'Create Post'}
    </button>
  )
}
```

##### 4.5 Revalidating the Cache

Revalidate the Next.js cache after a mutation to show updated data.

```tsx
// app/lib/actions.ts
'use server'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  // Mutate data
  revalidatePath('/posts')
}
```

##### 4.6 Redirecting

Redirect users after a mutation using the `redirect` function.

```tsx
// app/lib/actions.ts
'use server'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  // Mutate data
  redirect('/posts')
}
```

#### 5. Error Handling

### 5. Error Handling

Error handling in Next.js is essential for building robust applications that gracefully manage both expected errors and uncaught exceptions. This section covers handling errors in Server and Client Components, as well as creating custom error boundaries and global error handling.

#### 5.1 Handling Expected Errors

Expected errors occur during normal application operation, such as validation errors or failed requests. These should be explicitly handled and communicated to the client.

##### 5.1.1 Server Actions

Use the `useActionState` hook to manage Server Function states and handle expected errors without using `try/catch`.

```tsx
// app/actions.ts
'use server'

export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')

  const res = await fetch('https://api.vercel.app/posts', {
    method: 'POST',
    body: { title, content },
  })
  const json = await res.json()

  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
}

// app/ui/form.tsx
;('use client')
import { useActionState } from 'react'
import { createPost } from '@/app/actions'

const initialState = { message: '' }

export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}
```

##### 5.1.2 Server Components

In Server Components, conditionally render error messages or redirect based on the response.

```tsx
// app/page.tsx
export default async function Page() {
  const res = await fetch('https://...')
  const data = await res.json()

  if (!res.ok) {
    return 'There was an error.'
  }

  return '...'
}
```

##### 5.1.3 Not Found Handling

Use the `notFound` function for 404 errors and define a `not-found.js` file for custom 404 UI.

```tsx
// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/posts'

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <div>{post.title}</div>
}

// app/blog/[slug]/not-found.tsx
export default function NotFound() {
  return <div>404 - Page Not Found</div>
}
```

#### 5.2 Handling Uncaught Exceptions

Uncaught exceptions indicate bugs or issues outside the normal flow. These should be managed with error boundaries.

##### 5.2.1 Nested Error Boundaries

Define `error.js` files to create error boundaries for route segments.

```tsx
// app/dashboard/error.tsx
'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

##### 5.2.2 Global Error Handling

Use `global-error.js` for application-wide error boundaries. This replaces the root layout in case of an error.

```tsx
// app/global-error.tsx
'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
```

Error handling in Next.js is essential for building robust applications that gracefully manage both expected errors and uncaught exceptions. This section covers handling errors in Server and Client Components, as well as creating custom error boundaries and global error handling.

#### 5.1 Handling Expected Errors

Expected errors occur during normal application operation, such as validation errors or failed requests. These should be explicitly handled and communicated to the client.

##### 5.1.1 Server Actions

Use the `useActionState` hook to manage Server Function states and handle expected errors without using `try/catch`.

```tsx
// app/actions.ts
'use server'

export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')

  const res = await fetch('https://api.vercel.app/posts', {
    method: 'POST',
    body: { title, content },
  })
  const json = await res.json()

  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
}

// app/ui/form.tsx
;('use client')
import { useActionState } from 'react'
import { createPost } from '@/app/actions'

const initialState = { message: '' }

export function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  )
}
```

##### 5.1.2 Server Components

In Server Components, conditionally render error messages or redirect based on the response.

```tsx
// app/page.tsx
export default async function Page() {
  const res = await fetch('https://...')
  const data = await res.json()

  if (!res.ok) {
    return 'There was an error.'
  }

  return '...'
}
```

##### 5.1.3 Not Found Handling

Use the `notFound` function for 404 errors and define a `not-found.js` file for custom 404 UI.

```tsx
// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/posts'

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <div>{post.title}</div>
}

// app/blog/[slug]/not-found.tsx
export default function NotFound() {
  return <div>404 - Page Not Found</div>
}
```

#### 5.2 Handling Uncaught Exceptions

Uncaught exceptions indicate bugs or issues outside the normal flow. These should be managed with error boundaries.

##### 5.2.1 Nested Error Boundaries

Define `error.js` files to create error boundaries for route segments.

```tsx
// app/dashboard/error.tsx
'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

##### 5.2.2 Global Error Handling

Use `global-error.js` for application-wide error boundaries. This replaces the root layout in case of an error.

```tsx
// app/global-error.tsx
'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
```

## 2. Routing

### 2.1 Layouts and Pages

Next.js uses a file-system based routing system, allowing you to define routes using folders and files. This section explains how to create layouts, pages, and nested routes, as well as how to navigate between them.

#### 2.1.1 Creating a Page

A page is a UI rendered on a specific route. To create a page, add a `page` file inside the `app` directory and export a React component.

```tsx
// app/page.tsx
export default function Page() {
  return <h1>Hello Next.js!</h1>
}
```

#### 2.1.2 Creating a Layout

A layout is a shared UI that persists across multiple pages. Layouts preserve state, remain interactive, and do not rerender during navigation. Define a layout by exporting a React component with a `children` prop.

```tsx
// app/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
```

The above layout, defined in the root `app` directory, is a **root layout**. Root layouts must include `<html>` and `<body>` tags.

#### 2.1.3 Creating a Nested Route

Nested routes are composed of multiple URL segments. For example, the `/blog/[slug]` route consists of:

- `/` (Root Segment)
- `blog` (Segment)
- `[slug]` (Dynamic Segment)

To create nested routes, use folders to define segments and `page` files to define the UI for each segment.

```tsx
// app/blog/page.tsx
import { getPosts } from '@/lib/posts'
import { Post } from '@/ui/post'

export default async function Page() {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  )
}

// app/blog/[slug]/page.tsx
export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}
```

Dynamic routes, defined using square brackets (e.g., `[slug]`), generate multiple pages from data.

#### 2.1.4 Nesting Layouts

Layouts can be nested by adding `layout` files to specific route segments. Nested layouts wrap their child layouts via the `children` prop.

```tsx
// app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
```

For example, the root layout (`app/layout.tsx`) wraps the blog layout (`app/blog/layout.tsx`), which in turn wraps the blog page (`app/blog/page.tsx`) and blog post page (`app/blog/[slug]/page.tsx`).

#### 2.1.5 Linking Between Pages

Use the `<Link>` component for client-side navigation. This component extends the HTML `<a>` tag with prefetching capabilities for improved performance.

```tsx
// app/ui/post.tsx
import Link from 'next/link'

export default function Post({
  post,
}: {
  post: { slug: string; title: string }
}) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}
```

Alternatively, use the `useRouter` hook for programmatic navigation and more advanced use cases.

### 2.2 Linking and Navigating

Next.js offers several ways to navigate between routes, providing flexibility and performance optimizations. This section explains the main methods for linking and navigating, including `<Link>`, `useRouter`, `redirect`, and the native History API.

#### 2.2.1 Using the `<Link>` Component

The `<Link>` component extends the HTML `<a>` tag for client-side navigation with prefetching capabilities. It is the recommended method for linking between routes.

```tsx
// app/page.tsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

#### 2.2.2 Using the `useRouter` Hook

The `useRouter` hook enables programmatic navigation in Client Components.

```tsx
// app/page.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```

#### 2.2.3 Using the `redirect` Function

The `redirect` function handles navigation in Server Components. It can be used for conditional redirects during server-side rendering.

```tsx
// app/team/[id]/page.tsx
import { redirect } from 'next/navigation'

async function fetchTeam(id: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}

export default async function Profile({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  if (!id) {
    redirect('/login')
  }

  const team = await fetchTeam(id)
  if (!team) {
    redirect('/join')
  }
}
```

#### 2.2.4 Using the Native History API

Next.js integrates with the browser's History API, allowing you to use `pushState` and `replaceState` for navigation without full-page reloads.

##### pushState Example

```tsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function SortProducts() {
  const searchParams = useSearchParams()

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}
```

##### replaceState Example

```tsx
'use client'

import { usePathname } from 'next/navigation'

export function LocaleSwitcher() {
  const pathname = usePathname()

  function switchLocale(locale: string) {
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }

  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  )
}
```

#### 2.2.5 How Routing and Navigation Work

##### 1. Code Splitting

Next.js splits application code by route segments, reducing the data needed for navigation.

##### 2. Prefetching

Routes are prefetched using the `<Link>` component or `router.prefetch`.

##### 3. Caching

The Router Cache stores React Server Component payloads for faster navigation.

##### 4. Partial Rendering

Only the route segments that change re-render on the client, preserving shared layouts and improving performance.

##### 5. Soft Navigation

Soft navigation ensures only modified route segments re-render, maintaining React state across navigations.

##### 6. Back and Forward Navigation

Scroll position is preserved, and cached segments are reused during backward and forward navigation.

##### 7. Routing Between `pages/` and `app/`

Next.js manages routing transitions between `pages/` and `app/` directories during incremental migration.
