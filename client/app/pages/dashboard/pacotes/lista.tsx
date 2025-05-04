import { useEffect, useState } from 'react';
import api from '@/utils/api';
import Link from 'next/link';

type Pacote = {
  id: number;
  title: string;
  price: number;
  start_date: string;
  end_date: string;
};

export default function ListaPacotes() {
  const [pacotes, setPacotes] = useState<Pacote[]>([]);

  useEffect(() => {
    api.get('/packages').then(res => setPacotes(res.data));
  }, []);

  return (
    <div>
      <h1>Pacotes de Viagem</h1>
      <Link href="/dashboard/pacotes/novo">+ Novo pacote</Link>
      <ul>
        {pacotes.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong> - R$ {p.price}
            <br />
            {p.start_date} → {p.end_date}
            <br />
            <Link href={`/dashboard/pacotes/editar-${p.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
