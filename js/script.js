// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19

// creo delle variabili
var nome;
var cognome;
var colorePreferito;

// assegno un valore alle variabili
nome = prompt('Qual\'è il tuo nome?');
cognome = prompt('Qual\'è il tuo cognome?');
colorePreferito = prompt('E il tuo colore preferito?');

// verifico se funziona nella console
// console.log(nome,cognome,colorePreferito);

// stampo tutto sull'html
document.getElementById('generatore-psw').innerHTML = nome + cognome + colorePreferito + 19;

// mi accerto che le cose inserite dall'utente siano tutte minuscole e ristampo in html
nomeMinuscolo = nome.toLowerCase();
cognomeMinuscolo = cognome.toLowerCase();
colorePreferitoMinuscolo = colorePreferito.toLowerCase();


document.getElementById('generatore-psw').innerHTML = nomeMinuscolo + cognomeMinuscolo + colorePreferitoMinuscolo + 19;
