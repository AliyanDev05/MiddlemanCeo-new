const BASE = import.meta.env.VITE_API_URL || ''

export async function post(endpoint, data) {
  const res = await fetch(`${BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}
