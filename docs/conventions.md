## Convenciones
### Controllers
Cada uno de ellos es responsable de gestionar una ruta y es en el único lugar que se responde a los clientes de la API. \
La lógica se la delegan a los [servicios](#services), ya sea para hacer apicalls a las dependencias como para armar la respuesta al cliente.
Además, capturan los errores lanzados por los servicios y los envian al middleware de error. También son responsables de envíar la métrica [recordInternalApiResponse](#recordexternalapiresponse).

### Services
Son los responsables de ejecutar las lógicas de negocio, realizar los apicalls a las dependecias, armar la firma que se va a responder al usuario, entre otras cosas.
En caso de fallar, lanzan un error, que va a ser manejado por un [controller](#controllers). \
Decidi nombrar distinto las funciones que aislan la lógica de negocio de las que aislan la lógica para consumir una dependecia externa. Las funciones que empiezan con `fetch...` contienen la lógica para consumir una dependencia externa, la cual incluye tambien el manejo de errores (4xx, 5xx y timeouts); mientras que las funciones que empiezan con `get...` contienen la lógica de negocio, es decir, cómo manipular la info obtenida por la dependencia externa.

## Metrics
Se generaron funciones base, que se utilizan para armar las dos metricas principales. Ellas son:
- `recordIncrement`: representa un incremento para una métrica del tipo "contador".
- `recordHistogram`: representa una entrada para una métrica del tipo "histograma".
### recordInternalApiResponse
Métrica que se dispara cada vez que el server responde al usuario. \
Envía los siguientes datos:
| Dato | Descripción |
| --- | --- |
| tipo | `success` , `error`, `error_unhandled` |
| statusCode | HTTP status que recibe el cliente. |
| path | ruta que maneja el controller que dispara esta métrica. |
| redirect | indica si la respuesta le dice al usuario que tiene que redirigir a otro endopoint. |
| redirectUrl | indica el destino de la redirección. |

### recordExternalApiResponse
Métrica que se dispara cada vez que el server realiza un apicall a una dependencia. \
Envía los siguientes datos:
| Dato | Descripción |
| --- | --- |
| tipo |  `success` , `error` |
| statusCode | HTTP status de la respuesta del apicall. |
| api | Nombre de la dependecia. |
| action | Endpoint consulado. |
| time | Duración del request. |

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
