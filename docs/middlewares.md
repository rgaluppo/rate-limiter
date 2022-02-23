## Custom Express Middlewares
Se crearon varios middlewares de ExpressJS para aislar ciertas lógicas de la API.

### Authentication Middeware
Aisla la lógica para comprobar si un usuario esta debidamente autenticado. En este caso, solamente valida que el request tenga el header `user-id`.

### Error Middeware
Es responsable de normalizar los errores antes de responder al cliente. Dispara los logs y métricas necesarias, entre las cuales se encuentra [recordInternalApiResponse](#recordexternalapiresponse).

### Not Found Middeware
Es responsable de gestionar las rutas inexistentes de la API.

### Rate Limiter Middeware
Es el responsable de controlar y hacer respetar el límite. Para ello se apoya en una librería externa.
