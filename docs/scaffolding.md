## Scaffolding
El proyecto tiene los archivos organizados de la siguiente forma:

```
|
├── config/ (configuración para producción y desarrollo)
│   ├── default-production.js
│   └── default.js
|
├── docs/  (documentacion del proyecto)
|   └── assets/
├── src/  (app router y todo lo relacionado a la app)
│   ├── features/ (features de la aplicación)
│   │   └── message/
│   │       ├── controllers/ (handlers para cada ruta del feature)
|   |       ├── mocks/ (mocks de los servicios) 
|   |       |   ├── cases/
|   |       |   └── index.ts
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
