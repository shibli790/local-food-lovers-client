export async function apiFetch(path, { method = 'GET', body, token } = {}) {
  const base = import.meta.env.VITE_API_BASE_URL;
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${base}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    let msg = 'Request failed';
    try {
      const d = await res.json();
      msg = d.message || msg;
    } catch {
      ('');
    }
    throw new Error(msg);
  }
  return res.json();
}
