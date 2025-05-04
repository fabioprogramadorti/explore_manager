import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '@/utils/api';

export default function NovoPacote() {
  const [form, setForm] = useState({
    destinationId: '',
    title: '',
    description: '',
    price: '',
    start_date: '',
    end_date: ''
  });

  const [destinos, setDestinos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    api.get('/destinations').then(res => setDestinos(res.data));
  }, []);

  const salvar = async () => {
    await api.post('/packages', { ...form, price: parseFloat(form.price) });
    router.push('/dashboard/pacotes/lista');
  };

  return (
    <div>
      <h1>Novo Pacote</h1>
      <select onChange={e => setForm({ ...form, destinationId: e.target.value })}>
        <option>Selecione um destino</option>
        {destinos.map((d: any) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>
      <input placeholder="Título" onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Descrição" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Preço" onChange={e => setForm({ ...form, price: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, start_date: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, end_date: e.target.value })} />
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
