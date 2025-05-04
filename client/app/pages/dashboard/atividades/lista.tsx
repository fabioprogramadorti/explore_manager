import { useEffect, useState } from 'react';
import api from '@/utils/api';
import Link from 'next/link';

type Atividade = {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
};

export default function ListaAtividades() {
  const [atividades, setAtividades] = useState<Atividade[]>([]);

  useEffect(() => {
    api.get('/activities').then(res => setAtividades(res.data));
  }, []);

  return (
    <div>
      <h1>Atividades / Passeios</h1>
      <Link href="/dashboard/atividades/novo">+ Nova atividade</Link>
      <ul>
        {atividades.map((a) => (
          <li key={a.id}>
            <strong>{a.name}</strong> - {a.duration} - R$ {a.price}
            <br />
            {a.description}
            <br />
            <Link href={`/dashboard/atividades/editar-${a.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
