## Convenciones
### Controllers
Cada uno de ellos es responsable de gestionar una ruta y es en el único lugar que se responde a los clientes de la API. \
La lógica se la delegan a los [servicios](#services), ya sea para hacer apicalls a las dependencias como para armar la respuesta al cliente.
Además, capturan los errores lanzados por los servicios y los envian al middleware de error. También son responsables de envíar la métrica [recordInternalApiResponse](#recordexternalapiresponse).

### Services
Son los responsables de ejecutar las lógicas de negocio, realizar los apicalls a las dependecias, armar la firma que se va a responder al usuario, entre otras cosas.
En caso de fallar, lanzan un error, que va a ser manejado por un [controller](#controllers). \
Decidi nombrar distinto las funciones que aislan la lógica de negocio de las que aislan la lógica para consumir una dependecia externa. Las funciones que empiezan con `fetch...` contienen la lógica para consumir una dependencia externa, la cual incluye tambien el manejo de errores (4xx, 5xx y timeouts); mientras que las funciones que empiezan con `get...` contienen la lógica de negocio, es decir, cómo manipular la info obtenida por la dependencia externa.

### Scaffolding
El proyecto tiene los archivos organizados de la siguiente forma:

```
|
├── config/ (configuración para producción y desarrollo)
│   ├── default-production.js
│   └── default.js
|
├── docs/  (documentacion del proyecto)
|   └── assets/
|
├── src/  (app router y todo lo relacionado a la app)
│   ├── features/ (features de la aplicación)
│   │   └── message/
│   │       ├── controllers/ (handlers para cada ruta del feature)
|   |       ├── mocks/ (mocks de los servicios) 
|   |       |   ├── cases/
|   |       |   └── index.ts
|   |       |
│   │       ├── services/ (servicios junto con sus tests unitarios)
│   │       ├── tests/ (test e2e)
│   │       ├── types/ (definicion de tipos)
│   │       └── index.ts (exporta los controllers)
|   |
│   ├── helpers/ (utils que podrian estar en una libreria compartida)
|   |   ├── stores/ (ejemplos de implementaciones de un Store)
|   |   ├── logger.ts
|   |   ├── metrics.ts
│   │   └── restclient.ts
|   |
│   ├── middlewares/ (middleware compartidos)
│   ├── mocks/ (mocks server)
|   |   ├── builders/
│   │   └── index.ts
|   |
│   ├── server/
│   │   ├── routes/
│   │   └── index.ts (server express-router)
│   |
│   ├── types/ (tipos generales al proyecto)
|   └── index.ts  (entry point donde se inicializa el server)
│
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .npmrc
├── .nvmrc
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.js
```
