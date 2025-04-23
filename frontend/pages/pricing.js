import Link from 'next/link';

export default function Pricing() {
  const packages = [
    { name: 'IQgen™', price: '299₺', slug: 'iqgen' },
    { name: 'BodyFuel™', price: '299₺', slug: 'bodyfuel' },
    { name: 'MindMap™', price: '299₺', slug: 'mindmap' }
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Choose Your Genetic Insight</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.slug} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
            <p className="mb-4">Only {pkg.price}</p>
            <Link href={`/buy/${pkg.slug}`}>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
