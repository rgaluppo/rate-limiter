## Scaffolding

```
|
├── config/ (Configuración para producción y desarrollo)
│   ├── default-production.js
│   └── default.js
|
├── docs/  (Documentacion del proyecto)
├── src/  (App router y todo lo relacionado a la app)
│   ├── features/ (features de la aplicación)
│   │   └── message/
│   │       ├── controllers/ (handlers para cada ruta del feature)
│   │       ├── services/ (servicios junto con sus tests unitarios)
│   │       ├── tests/ (test e2e)
|   |       ├── mocks/ (mocks de los servicios) 
│   │       ├── types/ (definicion de tipos)
│   │       └── index.ts (exporta los controllers)
|   |
│   ├── helpers/ (middleware compartidos)
│   ├── middlewares/ (middleware compartidos)
│   ├── mocks/ (mocks server)
│   ├── server/
│   │   ├── routes/
│   │   └── index.ts (server express-router)
│   |
│   ├── types/ (opcional: tipos generales al proyecto)
|   └── index.ts  (Entry point donde se inicializa el server)
│
├── .gitignore
├── .npmrc
├── .nvmrc
├── jest.config.js
├── package.json
├── README.md
└── tsconfig.js
```
