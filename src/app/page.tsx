import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link
        href="/documents/123"
        className="text-blue-500 underline decoration-wavy"
      >
        Demo documents page
      </Link>
    </div>
  );
}
