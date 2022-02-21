## Convenciones
### Controlladores
Cada uno de ellos es responsable de gestionar una ruta y es en el único lugar que se responde a los clientes de la API.
Además, delegan a los servicios: la invocacion a las dependecias y las logicas de negocio.

### Servicios
Decidi seperar la logica de negocio y la logica para consumir una dependecia externa.
Las funciones que empiezan con `fetch...` contienen la logica para consumir una dependencia externa, la cual incluye tambien el manejo de errores (4xx, 5xx y timeouts); mientras que las funciones que empiezan con `get...` contienen la logica de negocio, es decir, cómo manipular la info obtenida por la dependencia externa.

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