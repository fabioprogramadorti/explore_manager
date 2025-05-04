import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/utils/api';

export default function NovoDestino() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const salvar = async () => {
    try {
      await api.post('/destinations', { name, country, description });
      router.push('/dashboard/destinos/lista');
    } catch (err) {
      alert('Erro ao criar destino');
    }
  };

  return (
    <div>
      <h1>Novo Destino</h1>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="País" value={country} onChange={e => setCountry(e.target.value)} />
      <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
