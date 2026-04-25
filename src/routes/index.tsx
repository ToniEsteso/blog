import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4 text-slate-900">Welcome</h1>
      <p className="text-lg text-slate-600">
        This is my personal website. Here you&apos;ll find my CV, information about me, and my blog.
      </p>
    </div>
  )
}
