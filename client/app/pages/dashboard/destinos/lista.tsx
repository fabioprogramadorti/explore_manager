import { useEffect, useState } from 'react';
import api from '@/utils/api';
import Link from 'next/link';

type Destination = {
  id: number;
  name: string;
  country: string;
  description: string;
};

export default function ListaDestinos() {
  const [destinos, setDestinos] = useState<Destination[]>([]);

  useEffect(() => {
    api.get('/destinations')
      .then(res => setDestinos(res.data))
      .catch(err => console.error('Erro ao carregar destinos:', err));
  }, []);

  return (
    <div>
      <h1>Destinos Turísticos</h1>
      <Link href="/dashboard/destinos/novo">+ Novo destino</Link>
      <ul>
        {destinos.map(dest => (
          <li key={dest.id}>
            <strong>{dest.name}</strong> - {dest.country}
            {' '}
            <Link href={`/dashboard/destinos/editar-${dest.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
