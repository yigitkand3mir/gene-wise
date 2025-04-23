import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('genome_file', file);
    formData.append('email', email);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) alert('Your DNA report is being prepared!');
    else alert('Upload failed.');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Your DNA File</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border px-4 py-2" />
        <input type="file" accept=".txt,.csv" onChange={(e) => setFile(e.target.files[0])} required className="w-full border px-4 py-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
