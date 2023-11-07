Descrizione:
Attraverso l'apposita API di boolean

genera 10 indirizzi email e stamparli in pagina all'interno di una lista

- inizializzare vue e importare libreria axios
- nuova variabile array vuota ('emails') in data() per salvare le email
- nuova funzione 'getEmail()' in methods per generare email
- consolo. log nella funzione
- dentro la funzione di 10 giri che fa chiamata axios a API
- salvare risultato della chiamata in variabile 'result' o 'res' (importante che è il risultato della chiamata e non la mail)
- analizzare 'result' per vedere quale proprietà ha la mail come risultato
-   pushare la proprietà con mail dentro array 'emails'
- ciclo v-for di 'rmails' e stampare valore di ogni email


Bonus:
Far comparire gli indirizzi email solamente quando sono stat tutti generati.

- utilizzare v-if v-else in html
- v-if emails = 0 -> scritta loading (array emails non cancora popolato)
- v-else -> v-if emails (array email popolato)