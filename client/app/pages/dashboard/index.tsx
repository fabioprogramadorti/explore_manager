import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bem-vindo ao ExploreManager</h1>
      <p>Plataforma SaaS para gestão de turismo.</p>
      <Link href="/dashboard">Acessar Dashboard</Link>
    </div>
  );
}
