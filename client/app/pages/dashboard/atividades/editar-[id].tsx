import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '@/utils/api';

export default function EditarAtividade() {
  const { query } = useRouter();
  const id = query.id;
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    destinationId: ''
  });

  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    api.get('/destinations').then(res => setDestinos(res.data));
    if (id) {
      api.get(`/activities/${id}`).then(res => setForm(res.data));
    }
  }, [id]);

  const atualizar = async () => {
    await api.put(`/activities/${id}`, { ...form, price: parseFloat(form.price) });
    alert('Atividade atualizada!');
  };

  return (
    <div>
      <h1>Editar Atividade</h1>
      <select value={form.destinationId} onChange={e => setForm({ ...form, destinationId: e.target.value })}>
        {destinos.map((d: any) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <input value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
      <input value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
      <button onClick={atualizar}>Salvar</button>
    </div>
  );
}
