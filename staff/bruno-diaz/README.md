# Bruno Díaz Arias

[github](https://github.com/bda83)


**IIFE** (Expresión de función ejecutada inmediatamente)

Es un patrón de diseño que también es conocido como función autoejecutable (Self-Executing Anonymous Function) y se compone de dos partes: función anónima con alcance léxico encerrado por el operador de agrupación () - impide el acceso de variables fuera del IIFE y contaminar el alcance del scope global - y la creación de la expresión de función cuya ejecución es inmediata ().

*Ejemplo:*
var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result;


**HTTP - métodos**

Al desarrollar una API REST se crea un servicio web apoyado en el protocolo HTTP, el cual tiene una serie de métodos (o verbos) para enviar información y/o recibirla.

Los más frecuentes son [*CRUD*]: 
· **POST** [*Create*] - para guardar recursos/información en el backend/API/...
· **GET** [*Read*] - para obtener recursos/información del backend/API/...; está limitada a por el número de caracteres de la URL-2KB
· **PUT** [*Update*] - para actualizar recursos/información del backend/API/...
· **DELETE** [*Delete*] - para eliminar recursos/información del backend/API/...

Otros métodos:
· **HEAD** - igual que GET, pero trae solo la cabecera - información de la página web
· **PATCH** - igual que PUT, pero PATCH solo actualiza un pequeño fragmento
· **CONNECT** - para establecer comunicación bidireccional en el servidor
· **OPTION** - describir las opciones de comunicación para el recurso de destino
· **TRACE** - para comprobar que las peticiones se reciben correctamente



**JWT (JSON Web Token)** es un estándar que define un mecanismo para poder propagar entre dos partes, y de forma segura, la identidad de un determinado usuario, además con una serie de claims o privilegios. Estos están codificados en objetos de tipo JSON que se incrustan dentro del payload que va firmado digitalmente. Se trata de una cadena de texto que se compone de 3 partes (separadas por un '.') codificadas en Base64:

· **Header** es el encabezado donde se indica, al menos, el algoritmo y el tipo de token. Usa una codificación en Base64.
· **Payload** es donde aparecen los datos de usuario y privilegios, así como toda la información que queramos añadir, todos los datos que creamos convenientes. Usa una codificación en Base64.
· **Signature** es la firma que nos permite verificar si el token es válido o no: verificar que el remitente es quien dice ser y que el mensaje no ha sido modificado por el camino. A diferencia de los anteriores, la signature lleva una codificación secreta de la aplicación que se use, por lo que SIEMPRE hay que verificar esta parte y admitir o denegar la petición.

Aunque el algoritmo nos permita verificar la signature (confiar o no), las otras dos partes no llevan una cifrado y son muy fácilmente decodificables. JWT nos invita a que la comunicación entre partes se realice con HTTPS para encriptar el tráfico, de forma que si alguien lo interceptara, el propio tráfico a través de HTTP sobre esos sockets SSL cifraría toda la comunicación (incluyendo el token)

***Ejemplo*** *: Comenzaríamos desde el cliente, haciendo una petición POST para enviar el usuario y contraseña, y realizar el proceso de login. Se comprobaría que ese usuario y su contraseña son correctos, y de serlos, generar el token JWT para devolverlo al usuario. A partir de ahí la aplicación cliente, con ese token, haría peticiones solicitando recursos, siempre con ese token JWT dentro de un encabezado, que sería Authorization: Bearer XXXXXXX, siendo Bearer el tipo de prefijo seguido de todo el contenido del token. En el servidor se comprobaría el token mediante la firma, para verificar que el token es seguro, y, por tanto, podemos confiar en el usuario. Dentro del cuerpo del token, además, tenemos los datos de quién es el usuario que ha realizado esa petición, porque podemos contener en el payload todos los datos de usuario que queramos. Tras verificar que el token es correcto y saber quién es el que ha hecho la petición, podemos aplicar entonces el mecanismo de control de acceso, saber si puede acceder o no, y si es así, responder con el recurso protegido, de manera que lo podría recibir de una forma correcta.*

Se puede debugar un JWT online en 'https://jwt.io/' y conocer su contenido.