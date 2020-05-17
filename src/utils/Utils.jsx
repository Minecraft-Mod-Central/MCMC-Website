export function api(url, method, body) {
  const h = {
    'MCMC-API': '1',
    'Content-Type': 'application/json'
  }

  if (localStorage.token) {
    h['Authorization'] = 'Bearer ' + localStorage.token
  }

  const p = {
    method: 'get',
    headers: new Headers(h)
  }

  if (method) {
    p.method = method
  }

  if (body) {
    p.body = JSON.stringify(body)
  }

  return fetch('/api' + url, p).then(res => res.json())
}