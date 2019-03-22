const answer = document.getElementById("answer");
const question = document.getElementById("question")
const card = document.getElementsByClassName("card")[0]


// add event listener to the question.
    //card.addEventListener("click", clickMe);

    const show = function(answer) {
        return answer.style.visibility = "visible";
    }

    const hide = function(answer){
        return answer.style.visibility = "hidden";
    }

    const toggle = function() {
        if(window.getComputedStyle(answer).visibility === "visible"){
            hide(answer);
            return;
        } else {
            show(answer)
        }
    }

    card.addEventListener('click', toggle)
// DONE add event handler

// DONE if question = clicked, answer should show

//  create data object with question and answer

// display flashcard object

// make it behave like originalNext

const flashcards = [
        ['Capital of Spain', 'Madrid'],
        ['Capital of Australia', 'Camberra'],
        ['Capital of Brazil', 'Brasilia'],
        ['Capital of Mexico', 'Mexico City']
    ]


let currentCardNumber = 0
function displayFlashcards (elem){
    question.innerText = flashcards[currentCardNumber][0]
    answer.innerText = flashcards[currentCardNumber][1]
}
displayFlashcards()




function nextQuestion(elem){
    displayFlashcards()
    currentCardNumber = currentCardNumber + 1;
    if(flashcards.indexOf() === 'undefined'){
        displayFlashcards()
    }
    return currentCardNumber
}

document.getElementsByClassName("next")[0].addEventListener('click', nextQuestion)
