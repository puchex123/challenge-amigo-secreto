# challenge-amigo-secreto
🎁 Juego del Amigo Secreto
Este juego consiste en ingresar los nombres de los participantes para luego realizar un sorteo y asignar un amigo secreto a cada uno.

✏️ ¿Cómo funciona?
Añadir nombres:
Escribe los nombres de los participantes en el cuadro de texto.
Si intentas agregar un nombre sin escribir nada, aparecerá una alerta indicándolo.
Cada nombre agregado se guardará en una lista y se mostrará debajo del cuadro.

Realizar el sorteo:
Una vez agregados todos los nombres, presiona el botón de "Sortear amigo".
El sistema asignará aleatoriamente un amigo secreto a cada participante.
A medida que se vayan sorteando los nombres, estos desaparecerán de la lista.
Cuando no queden más nombres, el sistema indicará que la lista está vacía.

¡Diviértete jugando con tus amigos! 🎉



Este código es para una aplicación de "Amigo Secreto", donde los usuarios pueden agregar amigos, visualizar la lista de amigos y realizar un sorteo aleatorio para asignar a cada persona un "amigo secreto".

El código está dividido en tres partes principales:

    1. HTML (Estructura de la página):

    * Se tiene un formulario donde los usuarios pueden escribir el nombre de un amigo y agregarlo a una lista.
    * Hay dos botones: uno para agregar amigos y otro para realizar el sorteo.

    2. CSS (Estilo de la página):

    * Estiliza la página con un diseño básico, asegurando que los elementos se vean bien y sean fáciles de usar.

    3. JavaScript (Lógica de la aplicación):

    * Aquí es donde se maneja la lógica de agregar amigos, hacer el sorteo y mostrar el resultado.



# Amigo Secreto

Este es un proyecto de "Amigo Secreto" donde los usuarios pueden agregar nombres de amigos a una lista, y luego hacer un sorteo aleatorio para asignar un amigo secreto.

## Funcionalidades

1. **Agregar Nombres**: Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a la lista visible al hacer clic en el botón "Adicionar".
2. **Validar Entrada**: Si el campo de texto está vacío, el programa muestra una alerta solicitando un nombre válido.
3. **Visualizar la Lista**: Los nombres ingresados aparecen en una lista debajo del campo de entrada.
4. **Sorteo Aleatorio**: Al hacer clic en el botón "Sortear Amigo Secreto", se selecciona aleatoriamente un nombre de la lista y se muestra en la página. Luego, ese nombre se elimina de la lista para que no se repita en el siguiente sorteo.

## Tecnologías Usadas

- **HTML**: Para la estructura de la página web.
- **CSS**: Para el estilo de la página web.
- **JavaScript**: Para la lógica de agregar amigos y realizar el sorteo.

## Instrucciones para Usar

1. **Abrir el Proyecto**:
    - Descarga o clona el repositorio en tu computadora.
    - Abre el archivo `index.html` en un navegador web.

2. **Agregar un Amigo**:
    - Escribe el nombre de un amigo en el campo de texto.
    - Haz clic en el botón "Adicionar" para agregarlo a la lista de amigos.

3. **Realizar el Sorteo**:
    - Haz clic en el botón "Sortear Amigo Secreto" para realizar el sorteo aleatorio de un amigo secreto.
    - El nombre del amigo secreto aparecerá en la página.

4. **Ver la Lista de Amigos**:
    - Los amigos agregados se muestran debajo del campo de entrada de texto.

## Enlace del Proyecto

Puedes acceder al proyecto en GitHub Pages aquí:  
[https://puchex123.github.io/challenge-amigo-secreto/](https://puchex123.github.io/challenge-amigo-secreto/)

---

### **Explicación del Código**

#### **HTML**:
El archivo `index.html` contiene la estructura de la página web, que incluye:
- Un campo de texto para ingresar nombres de amigos.
- Botones para agregar amigos y realizar el sorteo.
- Un área donde se muestra la lista de amigos.

#### **CSS**:
El archivo `style.css` proporciona estilos básicos para los elementos de la página, asegurando que se vean bien y sean fáciles de usar.

#### **JavaScript**:
El archivo `app.js` maneja la lógica de agregar amigos y hacer el sorteo:
1. **Función `agregarAmigo()`**: Añade un amigo a la lista si el campo no está vacío.
2. **Función `sortearAmigo()`**: Realiza el sorteo aleatorio de un amigo secreto y elimina el amigo sorteado de la lista.


