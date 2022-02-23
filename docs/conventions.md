## Convenciones
### Controlladores
Cada uno de ellos es responsable de gestionar una ruta y es en el único lugar que se responde a los clientes de la API.
Además, delegan a los servicios: la invocacion a las dependecias y las logicas de negocio.

### Servicios
Decidi seperar la logica de negocio y la logica para consumir una dependecia externa.
Las funciones que empiezan con `fetch...` contienen la logica para consumir una dependencia externa, la cual incluye tambien el manejo de errores (4xx, 5xx y timeouts); mientras que las funciones que empiezan con `get...` contienen la logica de negocio, es decir, cómo manipular la info obtenida por la dependencia externa.