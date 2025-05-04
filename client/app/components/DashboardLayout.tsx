import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{
        width: '220px',
        background: '#f0f0f0',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2>ExploreManager</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/dashboard/destinos/lista">🌍 Destinos</Link>
          <Link href="/dashboard/pacotes/lista">🧳 Pacotes</Link>
          <Link href="/dashboard/atividades/lista">🏞️ Atividades</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
