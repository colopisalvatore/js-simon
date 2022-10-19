
/* Consegna
-Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
-Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto 
precedentemente, tramite il prompt().
-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.
*/

console.log("JavaScript is working properly! =) Let's code!");

// -------------->  [CONFIG]  <----------------
const timer=3; //durata in secondi del tempo di attesa



//Clicco sul pulsante
const button = document.getElementById('start-button');
//Prendo il contenitore dove mettere gli elementi
const contentContainer = document.getElementById('content');
// dichiaro l'array
let arrayNumbers=[];
let userNumbers=[];

button.addEventListener('click', function() {
    console.log("Pulsante di avvio cliccato!");

    //Genero 5 numeri random e li salvo nell'array
    for(let i=0; i<5; i++)
        arrayNumbers[i]=Math.floor(Math.random()* 9);
    //stampa array in console
    console.log("VALORI GENERATI: ", arrayNumbers);

    //stampa nella pagina
    contentContainer.innerHTML = '';
    for(let i=0; i<5; i++)
    contentContainer.innerHTML += `<span class="w-big-numbers m-x">${arrayNumbers[i]}</span>`;
    
    //timer di 30 secondi
    setTimeout(function(){


        // Cosa faccio dopo 30 secondi?
        console.log('Timeout!')
        //nascondo i numeri
        contentContainer.innerHTML = '';
        
            //Stampo nella pagina un input
            contentContainer.innerHTML = '<div class="m-5"><h2>Mettiamo alla prova la tua memoria!</h2><input type="number" id="userInput"></div>';

        setTimeout(function(){
            // Chiedo all'utente di inserire i numeri
            userNumbers = getNumbersByUser();
            
            //confrontare gli array
            //quanti e quali numeri sono stati individuati
            let count=0;
            for(let i=0; i<5; i++){
                //scorro l'array dell'utente
                if( arrayNumbers.includes(userNumbers[i]) ) {
                    //contali
                    removeNumFromArrayNumbers(userNumbers[i]);
                    count++;
                    //stampa in console
                    console.log("Il numero ", userNumbers[i], "è presente!");
                    //stampa nella pagina                    
                    contentContainer.innerHTML += `<div class="w-small-numbers">Numero ${userNumbers[i]} indovinato!</div>`;

                }
            }
            //quali
            console.log("Complimenti hai indovinato i numeri: ", count);
            contentContainer.innerHTML += `<div class="w-normal-numbers">Complimenti hai indovinato i numeri: ${count} </div>`;
            if(count==0) {
                console.log("Hai perso!");
                contentContainer.innerHTML += `<div class="w-big-numbers">Hai perso!</div>`;
            }
            if(count==5) {
                console.log("HAI VINTO!");
                contentContainer.innerHTML += `<div class="w-big-numbers">HAI VINTO!</div>`;
            }

        }, 100)        

    }, timer*1000);
})

// --------FUNZIONI--------

function getNumbersByUser() {
    const userInput = getElementById('userInput')
    const array = [];
    for(let i=0; i<5; i++)
        array[i] = parseInt(userInput);
    console.log('user: ',array);
    return array;
}
function removeNumFromArrayNumbers(valueToRemove){
    //Verifica lungo tutto l'array
    let firstTime=0;
    for(let i=0; i < arrayNumbers.length; i++ ){
        //se trovi il valore, rimuovilo dall'array
        if(valueToRemove === arrayNumbers[i] && firstTime===0 ){
            arrayNumbers[i]= '';
            firstTime=1;
        }
    }
}