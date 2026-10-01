import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-sans text-6xl font-semibold text-gray-800">
        Hello World
      </h1>
    </div>
  );
}
