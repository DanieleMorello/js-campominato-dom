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

  // Creo un ciclo n volte per le celle
  for (let i = 1; i < numCells; i++) {
    const cell = `<div class="cell">${i}</div>`
    containerEL.innerHTML += cell
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
});