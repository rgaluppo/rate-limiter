# Challenge Rate Limiter

## Instalation
1. Configurar la versión adecuada de NodeJS
```
nvm use
```
2. Instañar dependencias
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
curl -H "User-Id: 1" -X GET "http://localhost:4000/"
```

## Design desitions

Otras decisiones importantes:
- [Scaffolding](docs/scaffolding.md)
- [Dependencias](docs/dependencies.md)
- [Convenciones](docs/conventions.md)
