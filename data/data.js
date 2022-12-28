
export const data = [
    {
        name: "prjt1",
        instructions: [
            {
                title: "Aprendiendo a usar el editor 1",
                img: "../gifs/1.1.gif",
                code: "",
                text: "<p>Unity hub és el menú desde donde podemos crear proyectos a partir de plantillas. Además es desde donde gestionamos las versiones del programa y también podemos acceder a los diferentes proyectos ya creados. </p>"
            },
            {
                title: "Aprendiendo a usar el editor 2",
                img: "../gifs/1.2.gif",
                code: "",
                text: "<p>Vamos a aprender que hacen las diferentes ventanas. Imita en todo momento lo que veas en los ‘gifs’ y sigue las instrucciones.  </p> "
            },
            {
                title: "Aprendiendo a usar el editor 3",
                img: "../gifs/1.3.gif",
                code: "",
                text: " <p>Este es el editor de Unity.  La primera ventana que observamos es la escena, desde esta ventana colocaremos los objetos de nuestro juego. La ventana de Game es donde se juega… En la escena trasteamos, en el la pestaña de Game jugamos  </p>"
            },
            {
                title: "Aprendiendo a usar el editor 4",
                img: "../gifs/1.4.gif",
                code: "",
                text: "<p>La ventana de jerarquia o Hierarchy. Es la lista de los objetos o gameOjects que tenemos en nuestra escena. Podemos tener diferente tipo de objetos. Por ejemplo, por defecto hay creado un objeto de tipo cámara. Los diferentes tipos de gameObjects son diferentes entre sí.  </p><br><br><p>Crea un objeto haciendo click derecho sobre:  jerarquía ⇒ 2D Object ⇒ Sprites </p><br><p>Crea un cuadrado y un círculo.</p><br>"
            },
            {
                title: "Aprendiendo a usar el editor 5",
                img: "../gifs/1.5.gif",
                code: "",
                text: "<p>Si haces click en un gameObject, en el panel de la izquierda podemos observar sus componentes. En el inspector puedes cambiar en nombre de los objetos.<br> Los gameObjects pueden temer diferetes componentes. Algunos los podemos agregar y otros están por defecto.</p><br><br><p>Por defecto, todos los gameObjects tienen un componente Transform. Si mueves un objeto(selecciona y arrastra), puedes ver como en el inspector, las propiedades del componente Transform cambian.</p><br><br><p>Por defecto, todos los gameObjects tienen un componente Transform. Si mueves un objeto(selecciona y arrastra), puedes ver como en el inspector, las propiedades del componente Transform cambian.</p><br><br>  "
            },
            {
                title: "Aprendiendo a usar el editor 6",
                img: "../gifs/1.6.gif",
                code: "",
                text: "<p>En el inspector, otro componente que tienen los objetos es el sprite renderer. Este es el responsable de que nuestro objeto tenga un gráfico. <p><br><br><p> Este componente tiene diferentes propiedades, como el sprite, que permite cambiar la imagen (Sprite quiere decir imagen.), <br>También está la propiedad Color que nos permite cambiar el color de la imagen. <br><br>Prueba a cambiar el color de la imagen al que quieras. </p>"
            },
            {
                title: "Aprendiendo a usar el editor 7",
                img: "../gifs/1.7.gif",
                code: "",
                text: "<p>En el inspector podemos agregar nuevos componentes ya existentes que modificarán el comportamiento de un objeto. <br><br> Abajo hay un botón que nos permite agregar componentes.<br><br> <h3>Más adelante continuaremos trabajando con los componentes, ahora aprenderemos sobre la ventana de Project.</h3></p>"
            },
            {
                title: "Aprendiendo a usar el editor 8",
                img: "../gifs/1.8.gif",
                code: "",
                text: "<p>La ventana de Project es un gestor de archivos, desde donde podemos organizar nuestro proyecto en carpetas. <br><br>Por defecto se crea una carpeta Scenes, en ella se guardan las diferentes escenas, como la que ya hay creada por defecto.<br><br>En la carpeta de Scenes, haz clic derecho y: Create ⇒ Scene, y ponle el nombre de ‘Level2. <br><br> Las escenas son los diferentes espacios de nuestro juego, cada una de ellas contendrá diferentes objetos en su jerarquía.’</p>"
            },
            {
                title: "Aprendiendo a usar el editor 9",
                img: "../gifs/1.9.gif",
                code: "",
                text: "<p>Borra todos los objetos de la jerarquía de la primera escena. Para ello puedes clicar, suprimir una vez seleccionado el objeto.</p>"
            },
            {
                title: "Aprendiendo a usar el editor 10",
                img: "../gifs/1.10.gif",
                code: "",
                text: "<h2>Hagamos nuestro primer Juego</h2><br><br><ul><li>Crearemos un objeto círculo, a este le llamaremos Player.</li><li>Lo colocaremos en el centro arriba de la escena.</li></ul>"
            },
            {
                title: "Aprendiendo a usar el editor 11",
                img: "../gifs/1.11.gif",
                code: "",
                text: "<p>Para comenzar el juego, dale a la flechita de play. Esta iniciará el juego y nos cambiará a la pestaña de Game.<p><br><br><strong>La pelota no cae!</strong>.<br><br> <p>Esto se debe a que el objeto de Player no tiene físiscas. Sería fantástico que pudieramos ponerle una gravedad para que caiga.</p><br><br><p>Parar ello seleccionamos el objeto y agregamos un componente llamado rigidbody.</p><br><br><p>¡Dale al play!</p>"
            },
            {
                title: "Aprendiendo a usar el editor 12",
                img: "../gifs/1.12.gif",
                code: "",
                text: "<p>El componente Rigidbody tiene muchas propiedades que nos permiten cambiar el comportamiento de las físicas sobre nuestro objeto</p><br><br><p>Prueba a cambiar la gravedad un par de veces.</p> "
            },
            {
                title: "Aprendiendo a usar el editor 13",
                img: "../gifs/1.13.gif",
                code: "",
                text: "<p>Crea un nuevo gameObject, llámale suelo1 y colócalo debajo de la bola. Dale al play.<br><br><h3>¿Qué ha pasado?</h3> "
            },
            {
                title: "Aprendiendo a usar el editor 14",
                img: "../gifs/1.14.gif",
                code: "",
                text: "<p>Efectivamente, no chocan. Esto se debe a que les falta un componente llamado ‘Collider’, se trata de un área invisible que envuelve al objeto y permite que pueda chocar con otras cosas.</p><br><br><p>Para el objeto Player le pondremos un componente <strong>CircleCollider2D</strong>, y para el suelo un componente<strong> BoxCollider2D.</strong></p> "
            },
            {
                title: "Aprendiendo a usar el editor 15",
                img: "../gifs/1.15.gif",
                code: "",
                text: "<p>Nuestro jugador, al tratarse de un círculo, si choca con un plano inclinado, rodará</p> "
            },
            {
                title: "Aprendiendo a usar el editor 16",
                img: "../gifs/1.16.gif",
                code: "",
                text: "<p>Vamos a hacer a la pelota un poco más pequeña y crearemos muchos para crear un nivel por el que vaya cayendo la pelota. Puedes modificar las propiedades del rigidBody(gravedad, masa) para jugar con las físicas.</p>"
            },
            {
                title: "Aprendiendo a usar el editor 17",
                img: "../gifs/1.17.gif",
                code: "",
                text: "<p>En el componente RigidBody hay una propiedad llamada ‘material’, si le damos un material a un objeto podemos hacer que tenga mas elasticidad y por lo tanto rebote, y también podemos hacer que tenga más fricción, que provoca que frene.</p><br><br><p>En el gestor de archivos crearemos una carpeta llamada ‘Materiales’, en ella haremos click derecho ⇒ Create ⇒ 2D ⇒ Physics Material 2D, en crear le pondremos el nombre de <strong>boucepadMaterial</strong>. Le pondremos una ‘bounce’ de 0.7.</p><br><br><p>Para darle este material a un objeto podemos arrastrarle el material hasta el campo de material del RigidBody.</p> "
            },
            {
                title: "Aprendiendo a usar el editor 18",
                img: "../gifs/1.18.gif",
                code: "",
                text: "<p>Ahora nos gustaría que la cámara siguiese al jugador. Para ello:</p><br><br><ul><li>Ventana de Window ⇒ Package Manager ⇒ Selecciona ‘Unity Registry’</li><li>Ahora escribe <strong>cinemachine </strong> en el buscador, dale a instalar.</li></ul> "
            },
            {
                title: "Aprendiendo a usar el editor 19",
                img: "../gifs/1.19.gif",
                code: "",
                text: "<p><strong>Cimachine es un paquete que nos da la capacidad de tener una cámara configurable para hacer cinemáticas y además, hacer que la cámara siga al jugador.</strong></p><br><br><p>En la barra de herramientas de arriba, nos debería haber aparecido una nueva pestaña llamada <strong>Cinemachine</strong> clica en ella y luego clica en <strong>Create 2D camera</strong></p><br><br>"
            },
            {
                title: "Aprendiendo a usar el editor 20",
                img: "../gifs/1.20.gif",
                code: "",
                text: "<p>El nuevo objeto que nos aparece en la jerarquía, arrástralo sobre la cámara por defecto. Observa como el objeto se mete dentro del otro objeto.</p><br><br><p>Selecciona la nueva cámara y en el inspector, busca la propiedad ‘Follow’, en ella podemos arrastrar el gameObject que queramos que siga nuestra cámara, en este caso es el Player</p> "
            },
            {
                title: "Aprendiendo a usar el editor 21",
                img: "../gifs/1.21.gif",
                code: "",
                text: "<p>A lo mejor has podido observar que el círculo no es mueve de forma muy fluida.</p><br><br><p>Para corregirlo puedes ir al objeto Player, en su inspector, en el componente Rigidbody, marca la propiedad <strong>Collision Detection</strong> a Continuous. Y también la propiedad <strong>Sleeping Mode</strong> a ‘Never Sleep’</p>"
            },
            {
                title: "Aprendiendo a usar el editor 22",
                img: "../gifs/1.22.gif",
                code: "",
                text: "<p>Puedes crear objetos vacíos para que te sirvan de carpeta. Vamos a crear un GameObject de tipo ‘Create empty’, le pondremos el nombre de suelos y luego le arrastraremos en la jerarquía todos los suelos. Observa como ahora desplazando el objeto suelo, todos los objetos de dentro se desplazan con él. Esto es porque actúa como un padre.</p>"
            },
            {
                title: "Aprendiendo a usar el editor 23",
                img: "../gifs/1.23.gif",
                code: "",
                text: "<p>A continuación crearemos un objeto capaz de emitir fuerza a aquello con lo que entre en contacto</p>"
            },
            {
                title: "Aprendiendo a usar el editor 24",
                img: "../gifs/1.24.gif",
                code: "",
                text: "<p>El primer paso es crear un cuadrado, deformarlo y cambiarle la opacidad desde la propiedad color, y lo haremos visualmente transparente.</p>"
            },
            {
                title: "Aprendiendo a usar el editor 25",
                img: "../gifs/1.25.gif",
                code: "",
                text: "<p>A este objeto le agregaremos un box Collider 2D, si le das al play, puedes ver como El jugador colisiona con el objeto. Para desactivar la colisión física puedes desmarcar la casilla ‘is trigger’.</p>"
            },
            {
                title: "Aprendiendo a usar el editor 26",
                img: "../gifs/1.26.gif",
                code: "",
                text: "<p>En este punto el jugador atraviesa el objeto, pero en hacerlo este no le otorga ninguna fuerza. Para ello en nuestro objeto que va a impulsar le agregaremos un componete llamado <strong>Area Effector</strong></p><br><br>. <p>Este tiene una propiedad llamada ‘Force Angle’ que sirve para apuntar la dirección en la que saldrá impulsada la bola. Si le damos 90 grados, entonces irá arriba. La otra propiedad es magnitud, esta nos dice la fuerza con la que sale disparada, que sea 25. Dale al play y observa como no funciona. :(</p>"
            },
            {
                title: "Aprendiendo a usar el editor 27",
                img: "../gifs/1.27.gif",
                code: "",
                text: "</p>Para hacer que funcione, el collider del impulsor tiene que tener marcada la casilla de ‘Used by Effector’. Observa como ahora si funciona.<p>"
            },
            {
                title: "Aprendiendo a usar el editor 28",
                img: "../gifs/1.28.gif",
                code: "",
                text: "<p>Por último cúrrate un nivel complejo! Puedes hacer un efecto mariposa, o tal vez un recorrido muy loco.</p>"
            }

        ]
    },

    {
        name: "prjt2",
        instructions: [
            {
                title: "Programación Básica con C# 1",
                img: "../gifs/2.1.gif",
                code: "",
                text: "<p>Hasta ahora hemos hecho uso de los componentes ya creados como ‘Transform’, ‘Rigidbody’, ‘BoxCollider’..etc. Estos componentes tienen propiedades o variables  y también funcionalidades.</p> <br><p>Los Script son componentes artificiales, programados por nosotros en el lenguaje de C#. Estos pueden estar ligados a GameObject modificando sus comportamientos</p><br><p>Crea un projecto nuevo llamado ‘PrimerosJuegos’ y una vez dentro crearemos una carpeta llamada ‘Scripts’</p>"
            },
            {
                title: "Programación Básica con C# 2",
                img: "../gifs/2.2.gif",
                code: "",
                text: "<p>En la carpeta de Scripts, crea un archivo de tipo script c# y llámale prueba y asígnaselo a un objeto seleccionándolo y arrastrándole el script hasta el inspector.</p>"
            },
            {
                title: "Programación Básica con C# 3",
                img: "../gifs/2.3.gif",
                code: "",
                text: "<p>Estamos dentro del Script, puedes ver que ya hay código dentro del componente. Este código es la estructura de nuestro objeto.<br><br></p>"
            },
            {
                title: "Programación Básica con C# 4",
                img: "../gifs/2.4.gif",
                code: "",
                text: "<p>Lo primero que vemos son dos métodos: Start y Update.<br> Un método es una estructura que tiene un nombre y contiene Código.<br> El método Start se ejecuta en comenzar el juego, por lo que solo se ejecuta una vez. En cambio, el método Update se ejecuta por cada ‘Frame’ del juego, por lo que estará ejecutándose sin parar.</p>"
            },
            {
                title: "Programación Básica con C# 5",
                img: "../gifs/2.5.gif",
                code: "",
                text: "<p>Una variable es un contenedor que tiene un nombre o identificador y almacena un valor. Por ejemplo, en un videojuego, la vida, la munición, la puntuación, las monedas, etc.. Todo eso son variables que contienen un valor y pueden incrementar y decrementar y cambiar su valor.</p> <br><p>para crear una variable debemos especificar el tipo de valor que va a contener: <ul><li><strong>Número entero: </strong> int</li><strong>Número real</strong> float</li> <strong>Texto</strong> string, se ponen comillas</li> <strong>Booleano(True o False)</strong> bool</li><strong>Vector3</strong> Se trata de un vector de tres coordenadas x,y,z</li></ul></p> "
            },
            {
                title: "Programación Básica con C# 6",
                img: "../gifs/2.6.gif",
                code: "",
                text: "<p>Para crear una variable debemos escribir su tipo, luego darle un nombre y luego especificar su valor seguido del símbolo; que pondremos siempre que acabemos de escribir una instrucción. </p> <p>En el ejemplo siguiente creamos una variable llamada vida y le damos el valor de 1000</p>"
            },
            {
                title: "Programación Básica con C# 7",
                img: "../gifs/2.7.gif",
                code: "",
                text: "<p>dentro del método Start, escribiremos la instrucción ‘Debug.Log();’  si ponemos una variable o un valor entre los paréntesis, mostrará su valor por consola. Dale a ejecutar el juego. </p>"
            },
            {
                title: "Programación Básica con C# 8",
                img: "../gifs/2.8.gif",
                code: "",
                text: "<p>Prueba a sumarle 100 a vida dentro del ‘Debug.Log()’. Observa como imprime el valor de vida(que es 1000) + 100. Esto no quiere decir que vida tenga el valor 1100, solo que en mostrar por consola muestra vida+100</p>"
            },
            {
                title: "Programación Básica con C# 9",
                img: "../gifs/2.9.gif",
                code: "",
                text: "<p>Prueba a sumarle 100 a vida dentro del ‘Debug.Log()’. Observa como imprime el valor de vida(que es 1000) + 100. Esto no quiere decir que vida tenga el valor 1100, solo que en mostrar por consola muestra vida+100</p>"
            },
            {
                title: "Programación Básica con C# 10",
                img: "../gifs/2.10.gif",
                code: "",
                text: "<p>Una variable puede variar, por lo que se puede sobrescribir su valor. Escribiendo su nombre e igualando al nuevo valor. <br> En el ejemplo se ve como la variable vida vale 1000, posteriormente se reasigna su valor a 5 y posteriormente a 200.</p>"
            },
            {
                title: "Programación Básica con C# 11",
                img: "../gifs/2.11.gif",
                code: "",
                text: "<p>Si en vez de sobrescribir una variable, queremos incrementarla o decrementarla podemos usar += y -=. Prueba adentro del Start, decrementar vida en 5, mostrar por consola, luego decrementar en 5 más y mostrar por consola, y finalmente incrementar en 20.</p>"
            },
            {
                title: "Programación Básica con C# 12",
                img: "../gifs/2.12.gif",
                code: "",
                text: "<p>vamos a borrar el código que tenemos hasta ahora y vamos a crear una variable nueva llamada score, le vamos a dar el valor de 30.5f. Dentro del Update decrementamos su valor en 0.1f y observa que pasa en ejecutar. Si recuerdas el Update se ejecuta cada frame del juego.</p>"
            },
            {
                title: "Programación Básica con C# 13",
                img: "../gifs/2.13.gif",
                code: "",
                text: "<p>Ahora vamos a entender lo que són los vectores. Si te fijas en un componente transform, este tiene 3 propiedades.: posición, rotación y escala. Todas ellas son Vectores, también conocidos como coordenadas. Para obtener desde código, el vector de posición. Podemos escribir ‘transform.positon’, esto nos devolverá el vector. Dentro del Update vamos a mostrar el vector de posición.</p>"
            },
            {
                title: "Programación Básica con C# 14",
                img: "../gifs/2.14.gif",
                code: "",
                text: "p>Para poder crear un vector nuevo se debe escribir la sintaxis de ‘Vector 3 nombre = new Vector3(x,y,z);’ Vamos a crear un vector3 con 1 en ‘x’ y 0 en ‘y’ y ‘z’</p>"
            },
            {
                title: "Programación Básica con C# 15",
                img: "../gifs/2.15.gif",
                code: "",
                text: "<p>Ahora a trasform.position lo incrementaremos en nuestro vector speed. Observa que pasa en darla a play.</p>"
            },
            {
                title: "Programación Básica con C# 16",
                img: "../gifs/2.16.gif",
                code: "",
                text: "<p>Bajale la velocidad a speed. y modifica el vector para que se mueva diagonalmente.</p> "
            },
            {
                title: "Programación Básica con C# 17",
                img: "../gifs/2.17.gif",
                code: "",
                text: "<p>Si pudiésemos detectar si pulsamos izquierda y derecha, podríamos hacer que nuestro personaje solo se moviese cuando nosotros pulsamos la tecla correcta.</p><br><br> <p>Para ello podemos hacer uso de una estructura llamada condición:</p> <br><br><p> Si queremos comprobar si se ha pulsado la tecla derecha podemos escribir <strong>Input.GetKey()</strong> y entre paréntesis <strong>KeyCode.tecla</strong> </p>"
            },
            {
                title: "Programación Básica con C# 18",
                img: "../gifs/2.18.gif",
                code: "",
                text: "<p>Vamos a hacer una condición por cada flecha, y moveremos al jugador en su dirección</p> "
            },
            {
                title: "Programación Básica con C# 19",
                img: "#",
                code: "",
                text: "<p>Input.GeyKey detecta si se pulsa o mantiene una tecla. <br> Input.GetKeyDown detecta el momento en el que se apreta una tecla, y Input GetKeyUp detecta el moment en que se suelta una tecla. </p>"
            },
            {
                title: "Programación Básica con C# 20",
                img: "../gifs/2.20.gif",
                code: "",
                text: "<p>Diseña con rectángulos un laberinto para el cuadrado y ponle a las paredes un boxCollider con el trigger activado y al jugador ponle un collider sin trigger. Además, haz que la cámara siga al jugador.</p><br><p>Puesto que está activado los triggers de los colliders estos no presentan colisión.</p>"
            },
            {
                title: "Programación Básica con C# 21",
                img: "../gifs/2.21.gif",
                code: "",
                text: "<p>Vamos a guardar en una variable Vector3 la posición inicial del cuadrado al comenzar el juego, para ello, crearemos la variable, y dentro del método Start le diremos que es igual a trasform.postion, de está forma en dicha variable tendremos una referencia a la posición en la que comienza.</p>"
            },
            {
                title: "Programación Básica con C# 22",
                img: "../gifs/2.22.gif",
                code: "",
                text: "<p>Crearemos una tag llamada ‘paredes’ y se la asignaremos a todas las paredes, esto lo haremos para poder posteriormente detectar que es una pared y que no lo es.</p> "
            },
            {
                title: "Programación Básica con C# 23",
                img: "../gifs/2.23.gif",
                code: "",
                text: "<p>Al jugador le pondremos un rigidbody, pero le quitaremos la gravedad.</p>"
            },
            {
                title: "Programación Básica con C# 24",
                img: "../gifs/2.24.gif",
                code: "",
                text: "<p>Para detectar si nuestro jugador ha entrado en contacto con un collider que sea trigger como son las paredes podemos hacer uso del método OnTriggerEnter2D, que se ejecuta en cuanto el jugador entra en contacto con un trigger.</p>"
            },
            {
                title: "Programación Básica con C# 25",
                img: "../gifs/2.25.gif",
                code: "",
                text: "<p> En el caso de que choquemos con una pared, vamos a reiniciar la posición del personaje a la inicial. </p>"
            },
            {
                title: "Programación Básica con C# 26",
                img: "../gifs/2.26.gif",
                code: "",
                text: "<p>Podemos poner algunas paredes con collider con trigger y otras no, las que se pueden chocar las ponemos de color verde y las que no de color rojo. </p>"
            },
            {
                title: "Programación Básica con C# 27",
                img: "../gifs/2.27.gif",
                code: "",
                text: "<p>Crea un nivel extremadamente dificil de superar!</p>"
            }


        ]
    },


    {
        name: "prjt3",
        instructions: [
            {
                title: "Condiciones y Controles 1",
                img: "../gifs/3.1.gif",
                code: `
                if(/*la condición*/){
                 //el codigo que queremos que suceda si se cumple la condición   
                }`,
                text: "<p>Las condiciones nos pueden servir para detectar si se ha pulsado una tecla entre otras muchas cosas. Solemos escribirlas dentro del método update, ya que nos interesa que cada momento del juego pregunte si se cumple la condición la estructura de una condición es:</p>"
            },
            {
                title: "Condiciones y Controles 2",
                img: "../gifs/3.2.gif",
                code: `
                if (Input.GetKeyDown(KeyCode.Space))
                {
                    Debug.Log("Acabas de apretar espacio");
                }
                if (Input.GetKey(KeyCode.Space))
                {
                    Debug.Log("Estas apretado espacio");
                }
                if (Input.GetKeyUp(KeyCode.Space))
                {
                    Debug.Log("has soltado espacio");
                }`,
                text: "<p>Podemos comprobar si se pulsa una tecla en específica utilizando condiciones.</p><br><p>Las condiciones que existen para detectar si se aprieta una tecla són:</p><ul><li><b>Input.GetKeyDown(KeyCode.tecla)</b> Comprueba si la tecla ha sido pulsada</li><li><b>Input.GetKey(KeyCode.tecla)</b>Comprueba si la tecla está siendo detectada</li><li><b>Input.GetKeyUp(KeyCode.tecla)</b> Comprueba si la tecla se acaba de pulsar.</li>/ul><br><p>En un script nuevo pónselo a cualquier objeto y pega el siguiete código en el update para comprobar que sucede:</p>"
            },

            {
                title: "Condiciones y Controles 3",
                img: "../gifs/3.3.gif",
                code: `
                // aqui se crean las variables
                Rigidbody2D rb;//rb es el nombre de la variable
                void Start()
                {
                    //desde start capturamos el componente
                    rb = GetComponent<Rigidbody2D>();
                }
            
                // Update is called once per frame
                void Update()
                {
            
                }`,
                text: "<p>Crea un objeto que sea un cuadrado, tenga un rigidbody con gravedad, y un box collider, y pueda chocar contra un suelo. </p><br><p>Crea un script llamado movement1 y ponselo al jugador </p><br><p>Pdemos guardar el rigidbody del jugador en una variable Rigidbody2D, de forma que podemos modificar el componente desde código!</p><br><p>Para capturar el componente debemos primero crear la variable, y luego desde el método start lo atrapamos.</p>"
            },
            {
                title: "Condiciones y Controles 4",
                img: "../gifs/3.4.gif",
                code: `rb.velocity = Vector2.right * 5f;
               `,
                text: "<p>Podemos darle una velocidad al rigidbody, multiplicando un vector de dirección por una velocidad</p><br><p>Si queremos usar direcciones como derecha, izquierda, arriba o abajo, podemos obtener esas direcciones fácilmente con: <br> Vector2.Up, Vector2.right, Vector2.Down, Vector2.left.</p><br> <p>Para hacer que se mueva hacia a derecha vamos a decirla a la velocidad que sea igual a Vector2.Right*5f.</p>"
            }
            ,
            {
                title: "Condiciones y Controles 5",
                img: "../gifs/3.5.gif",
                code: `
               `,
                text: "<p>Ahora haremos un pequeño cambio, crearemos una variable de tipo float llamada velocidad, y le pondremos public antes de nada. Esto nos permite darle un valor a la variable y verla desde el editor de unity, mas concretamente allá donde esté el script</p><p>En vez de multiplicar 5f por Vector2.right, lo multiplicaremos por la variable velocidad. En el inspector prueba a darle un valor.<p><br><p>Puedes incluso modificar el valor mientras el juego está en ejecución</p>"
            },
            {
                title: "Condiciones y Controles 6",
                img: "",
                code: `
               `,
                text: "Substituye Vector.right, por up y observa lo que pasa, haz lo mismo para down y left."
            }
            ,
            {
                title: "Condiciones y Controles 7",
                img: "../gifs/3.7.gif",
                code: `
               `,
                text: "<p>Sabiendo que puedes comprobar si se pulsa la flecha izquierda y la derecha, podrías hacer que se moviese izquierda y derecha en clicar?</p>"
            },
            {
                title: "Condiciones y Controles 8",
                img: "../gifs/3.8.gif",
                code: `
               `,
                text: "<p>Utilizando Input.getAxisRaw(Horizontal'), podemos obener un número entre -1 y 1. Si no se aprieta nada obtendremos 0, si se aprieta derecha obtenemos 1, y si se aprieta izquierda obtenemos -1</p><br><p>Prueba a en el método Update mostrar por pantalla esta instrucción.</p>"
            },

            {
                title: "Condiciones y Controles 9",
                img: "../gifs/3.9.gif",
                code: `
               `,
                text: "<p>Sabiendo lo anterior podemos quitar las condiciones y meeter este valor en una variable llamada xinput y multiplicarla por la velocidad. Puesto que si no se pulsa nada, xinput será 0, no se moverá, ya que velocidad*0 = 0, en cambio, si es 1: velocidad * 1 irá hacia la derecha, y velocidad * -1  hacia la izquierda.</p>"
            },
            {
                title: "Condiciones y Controles 10",
                img: "../gifs/3.10.gif",
                code: `
        
               `,
                text: "<p>Vamos a quitarle el script de movement y vamos a crearle un script llamado Jump<p>"
            },
            {
                title: "Condiciones y Controles 11",
                img: "../gifs/3.11.gif",
                code: `
        
               `,
                text: "<p>Los métodos OnTriggerEnter2D y OnTriggerExit2D, sirven para eecutar código en el momento de una colisión y en el final de una misma. Agrega estos dos métodos al script y escribe un mensaje dentro de ellos qué diga ‘colision start’ y ‘colision end’. Además deberás agregar un nuevo collider de tipo trigger al jugador, que solo ocupe la parte inferior de sus piernas, serivirá para detectar el suelo</p>"
            },
            {
                title: "Condiciones y Controles 12",
                img: "../gifs/3.12.gif",
                code: `
                public bool isGrounded = false;
                void Start()
                {
            
                }
            
                // Update is called once per frame
                void Update()
                {
            
                }
            
                void OnTriggerEnter2D(Collider2D other)
                {
                    isGrounded = true;
                }
                void OnTriggerExit2D(Collider2D other)
                {
                    isGrounded = false;
                }
               `,
                text: "<p>Una variable bool, es una que puede contener solo dos valores, o true o false. Podemos usarlas para manejar estados. Por ejemplo en un juego de plataformas, solo se puede saltar si se esta tocando el suelo. Podemos tener una variable <b>isGrounded</b> que sea true cuando entramos en contacto y sea false cuando salimos de contacto. Haremos de la variable publica para verla desde el inspector.</p>"
            },
            {
                title: "Condiciones y Controles 13",
                img: "../gifs/3.13.gif",
                code: `
              
               `,
                text: "<p>Podría ser que hayan objetos que no son suelo que detectemos con los ontriggers. Para disernir de si es un suelo o no, al suelo le agregaremos una tag de suelo.</p>"
            },
            {
                title: "Condiciones y Controles 14",
                img: "../gifs/3.14.gif",
                code: `
                void OnTriggerEnter2D(Collider2D other)
                {
                    if (other.gameObject.CompareTag("suelo"))
                    {
            
                        isGrounded = true;
                    }
                }
                void OnTriggerExit2D(Collider2D other)
                {
                    if (other.gameObject.CompareTag("suelo"))
                    {
                        isGrounded = false;
                    }
                }
               `,
                text: "<p>Dentro de los Ontriggers podemos comprobar con unas condiciones si el collider que se registra, es de un gameObject con la tag de suelo. </p>"
            },
            {
                title: "Condiciones y Controles 15",
                img: "../gifs/3.15.gif",
                code: `
                if (isGrounded == true && Input.GetKeyDown(KeyCode.Space))
                {
                    //asi comprobamos dos cosas a la vez
                }
               `,
                text: "<p>Gracias a isGrounded sabemos si estamos tocando suelo o no. Saltaremos si estamos tocando el suelo y si a su vez si estamos apretando la tecla espacio.<br>Para comprobar si se cumplen dos condiciones a la vez puedes usar el operador && de la siguiente forma: </p>"
            },
            {
                title: "Condiciones y Controles 16",
                img: "../gifs/3.16.gif",
                code: `
                Rigidbody2D rb;
                void Start()
                {
                    rb = GetComponent<Rigidbody2D>();
                }
            
               `,
                text: "<p>Ahora solo queda hacer que salte, para ello necesitaremos usar el rigidbody del objeto. Recuerda que para usarlo hay que crear una variable,y en el Start, usando GetComponent obtenemos el rigidbody del objeto.</p> "
            },
            {
                title: "Condiciones y Controles 17",
                img: "../gifs/3.17.gif",
                code: `
               
               `,
                text: "<p>Solo queda hacer que salte, crearemos una variable jumpSpeed publica para poder darle un valor desde el ispector. Al rg.velocity le asignaremos en la y la velocidad</p> "
            },
            {
                title: "Condiciones y Controles 18",
                img: "../gifs/3.18.gif",
                code: `
               
               `,
                text: "<p>Si al jugador le arrastamos el script de movimiento, y tambien el de salto, podemos observar como por desgracia los dos scripts no funcionan a la vez. Esto es porque solo puede haber un metodo Update por gameObject, y nosotros tenemos uno en cada archivo</p> <br><p>En el script de mvement y de jump quitaremos el nombre udate y pondremos 'public void saltar' y 'public void mover'.</p>"
            },
            {
                title: "Condiciones y Controles 19",
                img: "../gifs/3.19.gif",
                code: `
               
               `,
                text: "<p>Ahora crearemos un nuevo archivo 'PlayerController' este será el script que tendrá el update, y nosotros crearemos dos variables para almacenar los componentes de Jump y Movenment al igual que hacemos con el Rigidbody.</p>"
            },
            {
                title: "Condiciones y Controles 20",
                img: "../gifs/3.20.gif",
                code: `
               
               `,
                text: "<p>Desde el metodo Update podemos decirle que ejecute mover y saltar todo el tiempo. Al guardar los componentes en este scrip podemos tener diferentes comporamientos con un solo Update. Si fueramos a implementar un script de Dash, entoces tendriamos que crear una varaible en el controller</p>"
            },
            {
                title: "Condiciones y Controles 21",
                img: "../gifs/3.21.gif",
                code: `
                rb.velocity = new Vector2(xinput * velocidad, rb.velocity.y);
               `,
                text: "<p>En el script de Movement lo movemos multiplicando por Vector2.right, esto entra en conflicto con la gravedad, para ellos sustituiremos esa linea por esta</p>"
            },
        ]
    },

]