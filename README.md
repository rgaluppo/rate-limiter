# Challenge Rate Limiter
El objetivo de este challenge es montar un server que exponga un endpoint `GET /message` a partir del cual se devuelva un mensaje del servicio de [Fuck Off as a Service](https://www.foaas.com/).

El mensaje a obtener de este servicio esta totalmente a eleccion del candidato. 

La unica restriccion es que un usuario que consuma este endpoint pueda utilizarlo HASTA 5 veces dentro de un periodo de 10 segundos. 

No es necesario modelar ningun tipo de usuario, se puede utilizar el metodo de autenticacion que la persona mejor considere. Ninguna parte de la autenticacion sera tomada en cuenta para la evaluacion del ejercicio asi que se puede implementar algo tan simple como un header con un userId inventado.


> Se espera que se implemente el llamado a la API de foaas.

> Se espera que se implemente la lógica del limiter.

## State machine
![state chart](docs/assets/state-chart.png)
## Instalation
1. Configurar la versión adecuada de NodeJS
```
nvm use
```
2. Instalar dependencias
```
npm install
```
3. Levantar la aplicacion localmente
```
npm run dev
```
## Other commands
Ejecutar los tests (junto con el linter)
```
npm test
```
Ejecutar api en produccion
```
npm start
```
Generar JS a partir del codigo Typescript
```
npm run build
```
Ejecutar el Linter (es-lint)
```
npm run lint
```
## Examples
```curl
curl -H "User-Id: 11111" -X GET "http://localhost:4000/"
```
> Para obtener una respuesta mockeada, simplemente agregar el header `x-mocks: true`:
```curl
curl -H "User-Id: 1" -H "x-mocks: true" -X GET "http://localhost:4000/"
```

## Design desitions

Otras decisiones importantes:
- [Scaffolding](docs/scaffolding.md)
- [Dependencias](docs/dependencies.md)
- [Convenciones](docs/conventions.md)
