# CRUDAtento
Examen práctico - Grupo Atento

## Caracteristicas

- Operaciones básicas de un CRUD.
- Estructura simple y limpia.
- ADO.net para acceso a la base de datos.
- Código en C#, por lo que no requiere de un framework.
- Diseñado con principios de arquitectura MVC.
- Pluggin dataTable para la paginación.
- Procedimientos almacenados para ejecutar el CRUD.

## Funcionalidad:
### Front-end:

Utiliza HTML y CSS para crear una interfaz de usuario.
Divide la página en dos secciones: Agregar libros y Ver libros.
En la sección de agregar libros, crea un formulario con los campos requeridos.

### Back-end:

Utiliza C# y ASP.NET para manejar las solicitudes.
Conecta con la base de datos SQL para guardar y recuperar datos.

## Requerimientos

- Visual Studio 2017.
- SQL Server.
- IIS activado.
- Conocimiento básico de C#.
- Conocimiento básico de bases de datos.
- Conomientos básicos de JavaScript.

## Entrega
### Código Fuente:

Incluye todos los archivos de la aplicación ASP.NET y los scripts SQL.

### Instrucciones de Ejecución:

## Instalación

- Edite las credenciales de la base de datos en la cadena de conexión del archivo `Web.config`.
  
```
<connectionStrings>
    <add name="DBCS" connectionString="Data Source=[Aqui_Nombre_del_Servidor];Initial Catalog=[Aqui_Base_de_Datos];Integrated Security=True;" providerName="System.Data.SqlClient" />
  </connectionStrings>
```

## Base de datos

- En el Explorador de objetos, conéctese a una instancia del Motor de base de datos de SQL Server y expándala.
- Haga clic con el botón derecho en Bases de datos y, después, seleccione Nueva base de datos.
- En Nueva base de datos, especifique un nombre de base de datos. Recuerda que este debe ser el mismo que ingresa en la cadena de conexión.
- Ejecuta el script que se adjunta en la carpeta `CRUDAtento\CRUDAtento\script\sql.sql`
- Para el caso de los Procedimientos Almacenados, estos deberían verse de esta manera en la BD.

![alt tag](https://i.ibb.co/grcGChm/Screenshot-1.jpg)

## Inicio rapido

#### Estructura general

La ruta URL de la aplicación se ejecuta directamente en `http://localhost:56539/`. En caso contrario, debe existir alguna app que ocupa el puerto, de ser así hay que matar el proceso.

#### Mostrando una vista

![alt tag](https://i.ibb.co/Nnt0VY9/Screenshot-12.jpg)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Esto significa que puede usarlo y modificarlo de forma gratuita en proyectos privados o comerciales.
