import { APIEndpoint, APIClientCrash } from 'src/types/api-callbacks'

function api(url: string, method?: string, body?: string): Promise<any> {
  const headers = new Headers()
  headers.set('MCMC-API', '1')
  headers.set('Content-Type', 'application/json')

  if (localStorage.token) {
    headers.set('Authorization', `Bearer ${localStorage.token}`)
  }

  const p: RequestInit = {
    method: 'get',
    headers: headers
  }

  if (method) {
    p.method = method
  }

  if (body) {
    p.body = JSON.stringify(body)
  }

  return fetch('/api' + url, p).then(res => res.json())
}

export function apiEndpoints(): Promise<Array<APIEndpoint>> {
  return api('')
}

export function apiClientCrash(crash: string): Promise<APIClientCrash> {
  return api(`/stats/client/crashes/${crash}`)
}