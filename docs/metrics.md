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
