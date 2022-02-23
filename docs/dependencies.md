## Dependencies
### Libreria vs Solicion ad-hoc
Eleji una libreria para implemetar el rate limiter ya que vi las siguientes ventajas:
- Codigo estandar y utilizado en varios proyectos.
- Evito reinventar la rueda.
- Esta libreria en particular permite cambiar el repositorio de datos (store), pudiendo usar Redis, MemCached, entre otros.

La principal desventaja es que quedo expuesto todas las vulnerabilidades y bugs presentes en la lib.

Al elegir una librería tengo en cuenta los siguientes factores:
- Si es utilizada en muchos proyectos.
- Si tiene mantenimiento.
- Las dependencias que tiene.

### Other dependencies
Principales dependencias de la API:
- axios: un cliente HTTP basado en promesas para NodeJS y el navegador. Es isomorfo (puede ejecutarse en el navegador y nodejs con el mismo código).
- config: permite definir un conjunto de parámetros predeterminados y extenderlos para diferentes entornos de implementación (desarrollo, CI-CD, producción, entre otros). 
- cors: un middleware de Express para habilitar CORS. 
- express: un framework web minimalista, rápido y sin opiniones para NodeJS
- express-rate-limit: un middleware básico de limitación de velocidad para Express.
- helmet: un middleware de Express para proteger la api configurando varios encabezados HTTP, que mitigan los vectores de ataque comunes.
- jest: Un framework de JavaScript con un enfoque en la simplicidad.
- nock: un módulo de simulación de HTTP para NodeJS. Se utiliza para testear módulos que realizan solicitudes HTTP de forma aislada (evitando hacer el apicall real).
- supertest: Es un módulo de NodeJS que nos provee un nivel alto de abstacción para probar solicitudes HTTP.


 
