# Filtrado organización miembros Github

- Se muestra por defecto el listado de miembros de lemoncode.
- Se muestra un input que por defecto tiene como valor: lemoncode.
- El usuario puede teclear otro nombre de organizacíon.
- El usuario puede navegar a la página de detalle del miembro.
- El filtrado prevalece tras ir a la página de detalle de un miembro.
- Paginación en front-end para la lista de miembros.

# Filtrado personajes de Rick y Morty

- Se muestra por defecto el listado completo de personajes de Rick y Morty.
- Filtrado de personajes por las siguientes categorias: 
  - Nombre: Filtrar por el nombre del personaje.
  - Estado: Alive, dead o unknown.
  - Especie: Filtrar por la especie del personaje.
  - Tipo: Filtrar por el tipo de personaje.
  - Género: Female, male, genderless or unknown.
- El usuario puede navegar a la página de detalle del personaje.

## Implementación 

- Búsqueda implementada usando debounce (para los campos de texto libre).
- Uso de la librería de Material UI.
- Uso de react-router.
