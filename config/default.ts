export default {
  port: 4000,
  baseUrl: 'localhost',
  limiter: {
    timeWindow: 10, // in seconds
    maximumRate: 5
  },
  restclient: {
    timeout: 3000
  },
  foaas: {
    baseUrl: 'https://www.foaas.com',
    path: '/dumbledore/:from',
    behavior: '',
    company: '',
    from: 'nachoman',
    language: '',
    name: '',
    noun: '',
    thing: '',
    tool: ''
  }
}
