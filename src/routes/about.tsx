import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4 text-slate-900">About Me</h1>
      <p className="text-lg text-slate-600">
        Add your bio here...
      </p>
    </div>
  )
}