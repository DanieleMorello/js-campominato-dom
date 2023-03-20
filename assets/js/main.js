/*
  L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
  Ogni cella ha un numero progressivo, da 1 a 100.
  Ci saranno quindi 10 caselle per ognuna delle 10 righe.
  Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
  ed emetto un messaggio in console con il numero della cella cliccata.
 */

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Seleziono il bottone e lo salvo in una variabile
const btnEL = document.querySelector('button')
btnEL.addEventListener("click", function() {
  // Seleziono il container e lo salvo in una variabile
  const containerEL = document.querySelector('.container')
  containerEL.innerHTML = ''

  // Creo un max numero di celle
  let numCells = 101

  const bomb = randomNumbers(16)
  console.log(bomb)

  // Creo un ciclo n volte per le celle
  for (let i = 1; i < numCells; i++) {
    const cell = `<div class="cell">${i}</div>`
    containerEL.innerHTML += cell
    
      /*
        Se il numero è presente nella lista dei numeri generati
        abbiamo calpestato una bomba:
        -la cella si colora di rosso e la partita termina.
      */
        // if(cell[i] === bomb[i]) {
        //   cell.style.backgroundColor = 'red'
        // }
  
  }

  // Seleziono una cella che ha classe cell e active
  const cellEl = document.querySelectorAll('.cell')
  // Aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl
  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i]
    console.log(thisCell)

    thisCell.addEventListener('click', function() {
      thisCell.classList.toggle('bg_blue')
      console.log(`Cella cliccata: ${thisCell.textContent}`)
    });
  }
  
/*
  Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: 
  le bombe.
  Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe
  non potranno esserci due numeri uguali.
  In seguito l'utente clicca su una cella:
  se il numero è presente nella lista dei numeri generati
  abbiamo calpestato una bomba
    -la cella si colora di rosso e la partita termina.
  Altrimenti:
    -la cella cliccata si colora di azzurro
    -l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo 
possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
l’utente ha cliccato su una cella che non era una bomba.
 */

//Il computer deve generare 16 numeri casuali
function randomNumbers(numMax) {
  // Creo un array vuoto per contenere i numeri casuali
const randomNumbers = []

// Genero un numero casuale compreso tra 1 e 100
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// Ciclo il numero casuale
for (let i = 0; randomNumbers.length < numMax; i++) {
  // Genero un numero casuale compreso tra 1 e 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Verifico se il numero casuale non è già presente nell'array
  if (randomNumbers.indexOf(randomNumber) === -1) {
    // Aggiungo il numero casuale all'array
    randomNumbers.push(randomNumber)
  }
}

// Stampo l'array di numeri casuali
  return randomNumbers
}

});


