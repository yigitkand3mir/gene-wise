import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">🧬 Welcome to GeneWise</h1>
      <p className="mb-6">Discover what your DNA says about your intelligence, fitness, and mental health.</p>
      <Link href="/pricing">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">View Packages</button>
      </Link>
    </div>
  );
}
