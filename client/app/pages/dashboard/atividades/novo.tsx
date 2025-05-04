import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '@/utils/api';

export default function NovaAtividade() {
  const [form, setForm] = useState({
    destinationId: '',
    name: '',
    description: '',
    price: '',
    duration: '',
  });

  const [destinos, setDestinos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    api.get('/destinations').then(res => setDestinos(res.data));
  }, []);

  const salvar = async () => {
    await api.post('/activities', { ...form, price: parseFloat(form.price) });
    router.push('/dashboard/atividades/lista');
  };

  return (
    <div>
      <h1>Nova Atividade</h1>
      <select onChange={e => setForm({ ...form, destinationId: e.target.value })}>
        <option>Selecione um destino</option>
        {destinos.map((d: any) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>
      <input placeholder="Nome" onChange={e => setForm({ ...form, name: e.target.value })} />
      <textarea placeholder="Descrição" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Preço" onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Duração" onChange={e => setForm({ ...form, duration: e.target.value })} />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
