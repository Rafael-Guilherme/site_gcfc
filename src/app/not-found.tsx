import { redirect } from 'next/navigation';

export default function GlobalNotFound() {
  // Redireciona para a flag padrão (Brasil)
  redirect('/br');
}
