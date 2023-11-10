/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

me = {
  name: "Matteo",
  surname: "Romano",
  age: 28,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Javascript");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let random = Math.floor(Math.random() * 5 + 1);
  return random;
}
dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(primoNumero, secondoNumero) {
  if (primoNumero > secondoNumero) {
    return primoNumero;
  } else {
    return secondoNumero;
  }
}
const risultato = whoIsBigger(3, 9);
console.log("Il numero maggiore è " + risultato);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]*/

function splitMe(stringa) {
  let stringaSplit = stringa.split(" ");
  return stringaSplit;
}
let testo = "Where do we go now";
let testoDiviso = splitMe(testo);
console.log(testoDiviso);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, booleano) {
  if (booleano) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}

let inputString = "Money Trees by Kendrick Lamar";
let isTrue = true;

let stringaFinita = deleteOne(inputString, isTrue);
console.log(stringaFinita);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringa2, booleano2) {
  const formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //regular expression trovata online//
  return formatoEmail.test(stringa2);
}
let emailProva = "ezmatteo@aol.com";
let verificaEmail = isThisAnEmail(emailProva);
console.log(verificaEmail);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  let dataCorrente = new Date();
  let oggi = dataCorrente.getDay();
  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return giorniSettimana[oggi];
}
let giornoCorrente = whatDayIsIt();
console.log("Oggi è " + giornoCorrente);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numeroLanci) {
  const risultati = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < numeroLanci; i++) {
    const facciaDado = dice();
    risultati.sum += facciaDado;
    risultati.values.push(facciaDado);
  }
  return risultati;
}

let risultatoLancio = rollTheDices(6);
console.log(risultatoLancio);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays() {
  let dataRecente = new Date();
  let dataVecchia = new Date("08/27/1995");
  const differenzaDate =
    (dataRecente.getTime() - dataVecchia.getTime()) / (1000 * 3600 * 24);
  return parseInt(differenzaDate);
}
console.log(
  "Dalle date inserite, è passato un intervallo di " + howManyDays() + " giorni"
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(myBirthday) {
  const oggi = new Date();

  const todayDay = oggi.getDate();
  const todayMonth = oggi.getMonth() + 1;

  const birthdayDay = parseInt(myBirthday.split("/")[0], 10);
  const birthdayMonth = parseInt(myBirthday.split("/")[1], 10);

  return todayDay === birthdayDay && todayMonth === birthdayMonth;
}
const birthday = "27/09";
const result = isTodayMyBirthday(birthday);

console.log(result);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }

  return obj;
}
let oggetto = {
  name: "Matteo",
  age: 28,
  city: "Napoli",
};

let oggettoModificato = deleteProp(oggetto, "age");
console.log(oggettoModificato);

/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
  let annoRecenteFilm = 0;
  for (let i = 0; i < movies.length; i++) {
    const annoFilm = movies[i].Year;

    if (annoFilm > annoRecenteFilm) {
      annoRecenteFilm = annoFilm;
    }
  }
  return annoRecenteFilm;
}
let annoRecenteFilm = newestMovie(movies);
console.log("L'anno piú recente è: " + annoRecenteFilm);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
  return movies.length;
}

let numeroFilm = countMovies(movies);
console.log("Nella lista sono presenti " + numeroFilm + " film.");

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  return movies.map(function (film) {
    return film.Year;
  });
}

let anniUscita = onlyTheYears(movies);
console.log("Anni di uscita dei film: ", anniUscita);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  return movies
    .filter(function (film) {
      return film.Year >= 2000;
    })
    .map(function (film) {
      return film.Year;
    });
}
let thisMillennium = onlyInLastMillennium(movies);

console.log("Anni di uscita dei film dal 2000 in poi: ", thisMillennium);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
  let sommaAnni = movies.reduce((acc, film) => acc + parseInt(film.Year), 0);
  return sommaAnni;
}
const sommaTotale = sumAllTheYears(movies);
console.log(`La somma degli anni di uscita è: ${sommaTotale}`);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(stringa) {
  let Ricerca = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(stringa.toLowerCase())
  );
  return Ricerca;
}
let cercaFilm = "The Avengers";
let risultatoRicerca = searchByTitle(cercaFilm);
console.log(`Risultato della ricerca per "${cercaFilm}":`, risultatoRicerca);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (ricerca, movies) => {
  if (ricerca.trim() === "") {
    alert("Scrivi qualcosa!");
  } else {
    const matchingMovies = movies.filter(function (movie) {
      return movie.Title.toLowerCase().includes(ricerca.toLowerCase());
    });
    const nonMatchingMovies = movies.filter(function (movie) {
      return !movie.Title.toLowerCase().includes(ricerca.toLowerCase());
    });
    return {
      match: matchingMovies,
      unmatch: nonMatchingMovies,
    };
  }
};

console.log(`Film che contengono "${searchTerm}":`, result.match);
console.log(`Film che non contengono "${searchTerm}":`, result.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(i) {
  if (i >= i && i < movies.length) {
    movies.splice(i, 1);
  } else {
    console.log("Indice non valido. Nessuna modifica all'array.");
  }
}

// Esempio di utilizzo della funzione
const indexToRemove = 1; // Indice dell'elemento da rimuovere
removeIndex(indexToRemove);

console.log("Array movies dopo la rimozione:", movies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectElement() {
  const containerElement = document.getElementById("container");

  if (containerElement) {
    console.log(containerElement);
  } else {
    console.log('Elemento con id "container" non trovato.');
  }

  return containerElement;
}

// Esempio di utilizzo della funzione
const container = selectElement();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectTd() {
  const tdElements = document.querySelectorAll("td");
  if (tdElements.length > 0) {
    console.log(tdElements);
  } else {
    console.log("Nessun elemento <td> trovato.");
  }
  return tdElements;
}

// Esempio di utilizzo della funzione
const tdElements = selectTd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTd() {
  const tdElements = document.querySelectorAll("td");
  tdElements.forEach((td) => {
    console.log(td.textContent);
  });
}

printTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function redBack() {
  let links = document.querySelectorAll("a");

  links.forEach(function (link) {
    link.style.backgroundColor = "red";
  });
}
window.onload = function () {
  redBack();
};
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElementoALista() {
  let nuovoElemento = document.createElement("li");
  let testoElemento = document.createTextNode("Nuovo Elemento");
  nuovoElemento.appendChild(testoElemento);

  let lista = document.getElementById("myList");

  lista.appendChild(nuovoElemento);
}

window.onload = function () {
  aggiungiElementoALista();
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista() {
  let lista = document.getElementById("myList");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

// Chiamata alla funzione per svuotare la lista quando la pagina è completamente caricata
window.onload = function () {
  svuotaLista();
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClass() {
  let righe = document.querySelectorAll("myTable tr");

  righe.forEach(function (riga) {
    riga.classList.add("test");
  });
}
window.onload = function () {
  addClass();
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
  
  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
