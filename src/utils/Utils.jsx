export function fetchAPI(url, method, body) {
  const h = {
    'Content-Type': 'application/json'
  }

  if (localStorage.token) {
    h['Authorization'] = 'Bearer ' + localStorage.token
  }

  const p = {
    method: method,
    headers: new Headers(h)
  }

  if (body) {
    p.body = JSON.stringify(body)
  }

  return fetch('/api' + url, p).then(res => res.json())
}