import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50">
      <h1 className="font-sans text-6xl font-semibold text-red-700">
        Hello World
      </h1>
    </div>
  );
}
