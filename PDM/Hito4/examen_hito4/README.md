# Librería Onboarding React-Native

_Con esta librería podrá crear fácilmente vistas (Onboardings) unicamente enviando la imagen que quieres mostrar. _

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Lee **Atentamente** para conocer cómo utilizar la libreria.


### Pre-requisitos 📋

_Primero que nada necesitamos tener los siguientes recursos instalados:_
* [Node.js](https://nodejs.org/es/download/) - El servidor que se necesita instalar en la PC.
* [react-native](https://www.npmjs.com/package/react-native) - El framework que vamos a utilizar.
* Un editor de código para editar nuestro código, este editor puede ser el que tú quieras, algunas ideeas pueden ser:[Atom](https://atom.io/),[Visual Code](https://code.visualstudio.com/download),[Sublime](https://www.sublimetext.com/3).
* Una vez instalados y configurados Iniciamos un nuevo proyecto, escribimos en nuestra consola:
```
npx react-native init NOMBRE_DE_TU_PROYECTO
```
Ahora ya que tenemos eso listo, podemos continuar la instalación de la librería.

### Instalación 🔧

_Ahora ya que tenemos un nuevo Proyecto con REAC-NATIVE podemos instalar la librería, para eso nos situamos con nuestra consola dentro de nuestro proyecto y ejecutamos:_

```
npm i examen_hito4
```

_Una vez termine de descargar la libreria, podemos emepeazr a implementarla._

* Creamos una carperta para nuestras imagenes, para eso escribimos en nuestra consola:
```
mkdir imagenes
```
* Ese comando creará una nueva carpeta dentro de nuestro proyecto.
* Copiamos y pegamos 2 imágenes de nuestra preferencia dentro de la carpeta **imagenes**
* Ahora necesitmos instanciar la ruta de las imágenes que vamos a utilizar, pare eso cremos un nuevo archivo js llamado **img.js**
```
mkdir ing.js
```
* Ahora dentro del archivo que acabamos de crear escribimos el siguiente código.
```
export default{
    IMG:require('./imagenes/NOMBRE_DE_TU_IMGEN1.png'),
    IMG2:require('./imagenes/NOMBRE_DE_TU_IMGEN2.png')    
}
```
* Ahora dentro de nuestro Proyecto buscamos el archivo **App.js** y en la parte superior del código escribimos:
```
import Img from './imagenes';
import ejemLib from 'examen_hito4/src';
```
* Luego declaramos los datos necesarios para utilizar nuestra libreria, este ejemplo sirve para generar 2 pantallas con nuestra libreria:
```
let data = [
  {
    Img:Img.IMG,                                      //Nombre de la imagen
    titulo: 'UNIFRANZ',                               //Título de preferencia
    descripcion: 'Estudiante: Isaac Herrera Mareño',  //Una pequeña descripción
    colortexto: '#fff',                               //color de las letras en formato hexadecimal
    colorFondo: '#1fb3a9',                            //color del fondo de la pantalla en formato hexadecimal
    textoBotonPrev: '',                               //texto del boton que hará la función de retroceder
    textoBotonNext: 'Next',                           //texto del boton que hará la función de avanzar
  },
  {
    Img:Img.IMG2,
    titulo: 'Onboarding',
    descripcion: 'Hito 4 - 7° Semestre',
    colortexto: '#1fb3a9',
    colorFondo: '#fff',
    textoBotonPrev: 'Prev',
    textoBotonNext: '',
  },
];
```

_Ahora ya tenemos el proyecto todo listo para su uso, pero nos toca configuar nuestro dispositivo android:_

### Si no cuentas con un dispositivo android puedes utilizar:

[Expo](https://expo.io/) - Expo es una cadena de herramientas construida alrededor de React Native para ayudarlo a iniciar rápidamente una aplicación, siguiendo las instrucciones que se encuentra en la documentación de su página web.

## Si tienes un dispositivo android puedes seguir con estos pasos
## Configuración del dispositivo android ⚙️

* Esto depende mucho de la marca del dispositivo.
* Lo usual es ir a configuracion del sipositivo.
* Buscar y encender la opción: **Depuración por USB**.


_AHORA CONECTAMOS NUESTRO DISPOSITIVO A NUENTRO ORDENADOR VIA USB_

* Y ejecutamos el siguiente comando para iniciar el proyecto en nuestro dispositivo.
```
npx react-native run-android
```

## Autor ✒️

* **Isaac Limbert Herrera Mareño** - *Desarrollo de la librería* - [Guit Isaac0155](https://github.com/Isaac0155)
* **William Barra** - *Docente guía para el desarrollo* - [Guit dheeyi](https://github.com/dheeyi)

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para más detalles.
