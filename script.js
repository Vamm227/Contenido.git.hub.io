const messages = [

    "Compilando...   ",

    "Error: No se encuentra el archivo. <br> <span style='font-size: 3rem;'>😨</span>",

    "Cargando...  <br><span style='font-size: 3rem;'>😊</span>  ",

    "<div class='birthday-message justified' style='padding: 30px; background-color: rgba(0, 0, 0, 1); border-radius: 10px; margin: 10px;'>🎈¡Feliz Cumpleaños, Sergio!.🎉🎉🎉🎈<br>Se que ya pasó tiempo desde tu cumpleaños pero quería ser recíproca.<br>Lo hice con mucho cariño, ya que tú me darás un presente yo también quería hacerlo en agradecimiento por ser lindo en mi Cumpleaños.<br>Gracias...</div>",

    "Fin de la ejecución. <br><span style='font-size: 3rem;'>😄</span> "

];





let balloonInterval;



// Lista de URLs de imágenes de globos de diferentes colores

const balloonImages = [
  'uno.png',
  'dos.png',
  'tres.png',
  'cuatro.png',
  'cinco.png'
];






function showMessage() {

    const codeLines = document.getElementById('codeLines');

    const buttonElement = document.getElementById('birthdayBtn');



    // Hacer que el botón desaparezca

    buttonElement.style.opacity = '0';

    buttonElement.style.pointerEvents = 'none';



    let index = 0;

    const interval = setInterval(() => {

        if (index < messages.length) {

            //codeLines.textContent = messages[index];

            codeLines.innerHTML = messages[index]; // Cambia textContent por innerHTML



			codeLines.style.opacity = '1';



            // Si el mensaje es el de cumpleaños, darle más tiempo

            if (messages[index].includes("¡Feliz Cumpleaños, Sergio!")) {

                // Mantener el mensaje durante 30 segundos (30000 ms)

                setTimeout(() => {

                    index++;

                }, 12000); // Cambia 12000 por el tiempo que quieras

            } else {

                index++;

            }

        } else {

            clearInterval(interval);

            setTimeout(() => {

                codeLines.style.opacity = '0'; // Ocultar el mensaje

            }, 2000);

        }

    }, 3000); // Este es el intervalo general, puedes ajustarlo si es necesario



    startCreatingBalloons();

}



function createBalloons() {

    const balloonContainer = document.getElementById('balloonContainer');

    const balloonCount = 5;



    for (let i = 0; i < balloonCount; i++) {

        const balloon = document.createElement('img');

        const randomIndex = Math.floor(Math.random() * balloonImages.length);

        balloon.src = balloonImages[randomIndex];

        balloon.className = 'balloon';

        balloon.style.left = Math.random() * 100 + 'vw';

        balloonContainer.appendChild(balloon);



        balloon.addEventListener('animationend', () => {

            balloon.remove();

        });

    }

}



function startCreatingBalloons() {

    balloonInterval = setInterval(() => {

        createBalloons();

    }, 1000);

}


