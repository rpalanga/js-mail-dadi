let buttonElement = document.querySelector("#start-game");

let userChoice = document.querySelector("#user-choice");

let pcChoice = document.querySelector("#pc-choice");

let result = document.querySelector("#result")

buttonElement.addEventListener(`click`,
    function () {

        let numberA = Math.floor(Math.random() * 6) + 1;
        userChoice.innerHTML = numberA;
        
        let numberB = Math.floor(Math.random() * 6) + 1;
        pcChoice.innerHTML = numberB;

        if (numberA > numberB) {

            result.innerHTML = "Hai vinto";
            
        } else if (numberA < numberB) {

            result.innerHTML = "Hai perso";

        } else (numberA === numberB) {

            result.innerHTML = "Pareggio";

        }
        
        console.log(result)
        
    }



)







// else (numberA < numberB) {

//     result.innerHTML = "Hai perso";


// }
// 


