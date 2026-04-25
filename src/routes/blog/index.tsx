import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4 text-slate-900">Blog</h1>
      <p className="text-lg text-slate-600">
        Blog posts coming soon...
      </p>
    </div>
  )
}