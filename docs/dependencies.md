## Dependencies
### Librería vs Solicion ad-hoc
Al elegir una librería tengo en cuenta los siguientes factores:
- Cantidad de proyectos en la cuál es utilizada.
- Frecuencia del mantenimiento.
- Dependencias que necesita.

La principal desventaja es que quedo expuesto todas las vulnerabilidades y bugs presentes en la lib.

### Other dependencies
Principales dependencias de la API:
- axios: un cliente HTTP basado en promesas para NodeJS y el navegador. Es isomorfo (puede ejecutarse en el navegador y nodejs con el mismo código).
- config: permite definir un conjunto de parámetros predeterminados y extenderlos para diferentes entornos de implementación (desarrollo, CI-CD, producción, entre otros). 
- cors: un middleware de Express para habilitar CORS. 
- express: un framework web minimalista, rápido y sin opiniones para NodeJS
- helmet: un middleware de Express para proteger la api configurando varios encabezados HTTP, que mitigan los vectores de ataque comunes.
- jest: un framework de JavaScript con un enfoque en la simplicidad.
- nock: un módulo de simulación de HTTP para NodeJS. Se utiliza para testear módulos que realizan solicitudes HTTP de forma aislada (evitando hacer el apicall real).
- redis: es un cliente de Redis moderno y de alto rendimiento para Node.js con soporte integrado para los comandos de Redis 6.2.
- supertest: Es un módulo de NodeJS que nos provee un nivel alto de abstacción para probar solicitudes HTTP.


 
