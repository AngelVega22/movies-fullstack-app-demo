# Movies App (.NET 8  &  ANGULAR 17)

Aplicación web que permita ver la cartelera de películas disponibles en las salas
de cine.

![Movies App](screenshots/movies-app-demo.png "Movies App")


## Tabla de Contenidos

1. [Instalación](#Instalación)
2. [Uso](#Uso)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Ejemplos de Prueba](#ejemplos-de-prueba)

## Instalación
```bash
npm install
```
## Uso

```bash
ng serve
```

## Estructura del Proyecto

/
|-- MoviesWebApi/
|-- MoviesWebClient/
|-- ...


## Ejemplos de prueba


#### 1. Insertar una película
```bash
{
  "title": "string",
  "genre": "string",
  "synopsis": "string",
  "duration": 0,
  "startTime": "2024-03-04T04:13:42.245Z",
  "imageURL": "string"
}
```

#### 2. Insertar una función
```bash
{
  "movieID": 0,
  "theater": "string",
  "startTime": "2024-03-04T04:15:12.910Z",
  "endTime": "2024-03-04T04:15:12.910Z",
  "availableSeats": 0,
}
```
#### 3. Reservar una función de la película seleccionada

![Movies App](screenshots/movies-app-register.png "Movies App")


#### 4. Verificar en el Swagger que se reservó correctamente

![Movies App](screenshots/movies-app-reserve.png "Movies App")
