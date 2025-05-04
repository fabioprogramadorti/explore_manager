import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '@/utils/api';

export default function EditarDestino() {
  const { query } = useRouter();
  const id = query.id;
  const [form, setForm] = useState({ name: '', country: '', description: '' });

  useEffect(() => {
    if (id) {
      api.get(`/destinations/${id}`).then(res => setForm(res.data));
    }
  }, [id]);

  const atualizar = async () => {
    try {
      await api.put(`/destinations/${id}`, form);
      alert('Destino atualizado!');
    } catch {
      alert('Erro ao atualizar destino.');
    }
  };

  return (
    <div>
      <h1>Editar Destino</h1>
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} />
      <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <button onClick={atualizar}>Salvar</button>
    </div>
  );
}
