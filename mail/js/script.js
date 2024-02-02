



// stampa un messaggio appropriato sull’esito del controllo.
// (NON utilizzate il metodo .includes())
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


const emailUser = document.querySelector("#email");

const emailGroup = ["cristianciao@hotmail.com", "pirupirucassone@outlook.it", "manuuue@gmail.com","miriamgoccette@outlook.it",];
const emailResult = document.querySelector("#result");
let buttonElement = document.querySelector("#button");

buttonElement.addEventListener("click",

    function () {
        let Emailverifica = false;

        for (let i = 0; i < emailGroup.length; i++) {
            
        
            if (emailUser.value === emailGroup[i]){

                Emailverifica = true;

                
        
                
        
        
            } 
        
        
        }

       if (Emailverifica === true){
        emailResult.innerHTML = `La mail è presente nel database`;
           
        } else {
            emailResult.innerHTML = `La tua mail non è registrata`;
            
        }
        

    }
)

