
//Manejo del Dom Variables

const Contenido = document.querySelector(".ContainerTexto")
const computerData = document.querySelector("#Computer")
const showMessage = document.querySelector("#ContainerTexto2")
const btn = document.querySelector("#btn")
const thisData = document.querySelector(".AnswerDatos")
const winComputer = document.querySelector(".WinComputer")
const winHuman = document.querySelector(".WinHuman")
const refresh = document.querySelector(".refresh")

//Obtener Datos con getElmentById etc, uso de variables para acceder al hmtl

const rock = document.getElementById("element1")
const textRock = rock.alt;
console.log(textRock)
const paper = document.getElementById("element2")
const textPaper = paper.alt
console.log(textPaper)
const scissors = document.getElementById("element3")
const textScissors = scissors.alt
console.log(textScissors)




//Contadores y variables para guardar contador 

//
//let Humano = 0;
//let computer= 0;



//Funcion para jugar con la computadora

function getComputerChoice() {
  //Uso de valores Ramdon y se multiplica por tres por la longitud
  let datosRandoms = Math.floor(Math.random() * 3)
  switch (datosRandoms) {
    case 0:
      return "Rock";

    case 1:
      return "Paper";
    case 2:
      return "Scissors";

  }



}

let Humano = 0
let computer = 0
let totalHuman;
let total2Computer;


//Funcion para guardar nuestro datos de jugaro y la computGame

function playetLoad(playerSelection, computerSelection) {

  //Uso de condiciones para definir los datos de cada jugada
  if (playerSelection === computerSelection) {
    console.log("Empate")
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    console.log(`Gana el humano con ${playerSelection} a ${computerSelection}`)
    Humano++
    totalHuman = Humano
  } else {
    console.log(`Gana la computadora con ${computerSelection} a ${playerSelection}`)
    computer++
    total2Computer = computer

  }


  console.log("Puntacion Total ")
}


//Eventos para utilizar los botones ademas incluir en la funcion de game cada 
//string de game eso eso se refiere extrar el datos del alt de la imagen


rock.addEventListener('click', () => {
  game("Rock")
})


paper.addEventListener('click', () => {
  game("Paper")
})

scissors.addEventListener('click', () => {
  game("Scissors")

})



// Funcion para guardar los datos y empezar el juego


let bandera = false
function game(playerSelection) {

  // Un for para comenzar el juego y empezar 



  //guardamos en variable la funcion para utilizarla en el juego 
  let computerSelection = getComputerChoice()
  //Usamos la funcion del juego para obtener los datos y argumentos

  playetLoad(playerSelection, computerSelection)




  if (totalHuman <= 5) {
    showMessage.textContent = `Humano: ${totalHuman}`
    showMessage.style.color = "black"
    showMessage.style.fontSize = "18px";
    showMessage.style.fontWeight = "bold";
    
    
}else if(totalHuman >=5){
  location.reload();
  console.log("Termino del juego")
}
  


  if (total2Computer <= 5) {
    
    computerData.textContent = `AI: ${total2Computer}`
    computerData.style.color = "black"
    computerData.style.fontSize = "18px"
    computerData.style.fontWeight = "bold";
  }else if(total2Computer >= 5){
    console.log("Termino del juego")
    location.reload();
  }









  if (totalHuman === total2Computer) {
    //thisData.textContent = "Empate"
    thisData.style.color = "white"
    thisData.style.fontSize = "30px"
    thisData.style.fontWeight = "bold"
  } else if (total2Computer === 5) {
    thisData.remove()
    winHuman.remove()
    Toastify({
      text: "Gano la AI🤖",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    winComputer.style.color = "white"
    winComputer.style.fontSize = "30px"
    winComputer.st.fontWeight = "bold"

  } else if (totalHuman === 5) {
    thisData.remove()
    winComputer.remove()
    Toastify({
      text: "Ganastes Humano🎉",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    winHuman.style.color = "white"
    winHuman.style.fontSize = "30px"
    winHuman.style.fontWeight = "bold"

  }






}






// Uso de la funcion para actualizar la pagina y refrescar

refresh.addEventListener("click", () => {
  location.reload();

})


//Hacer el puntaje Total






