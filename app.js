/* const arrows = document.querySelectorAll('.arrow')
const answers = document.querySelectorAll(".answer")
const questionBoxes = document.querySelectorAll(".question-box") */

const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')

const arrow1 = document.getElementById('arrow1')
const arrow2 = document.getElementById('arrow2')
const arrow3 = document.getElementById('arrow3')
const arrow4 = document.getElementById('arrow4')
const arrow5 = document.getElementById('arrow5')

const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const answer5 = document.getElementById('answer5')

const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const question4 = document.getElementById('question4')
const question5 = document.getElementById('question5')

function faqExpand() {
    arrow1.addEventListener("click", () => {
        arrow1.classList.toggle("arrowFlip")
        box1.classList.toggle("boxExpand")
        setTimeout(() => {
            answer1.style.opacity = "1"
        }, 100);
        answer1.classList.toggle("reveal")
        question1.classList.toggle("bolder")
    })

    arrow2.addEventListener("click", () => {
        arrow2.classList.toggle("arrowFlip")
        box2.classList.toggle("boxExpand")
        setTimeout(() => {
            answer2.style.opacity = "1"
        }, 100);
        answer2.classList.toggle("reveal")
        question2.classList.toggle("bolder")
    })

    arrow3.addEventListener("click", () => {
        arrow3.classList.toggle("arrowFlip")
        box3.classList.toggle("boxExpand")
        setTimeout(() => {
            answer3.style.opacity = "1"
        }, 100);
        answer3.classList.toggle("reveal")
        question3.classList.toggle("bolder")
    })

    arrow4.addEventListener("click", () => {
        arrow4.classList.toggle("arrowFlip")
        box4.classList.toggle("boxExpand")
        setTimeout(() => {
            answer4.style.opacity = "1"
        }, 100);
        answer4.classList.toggle("reveal")
        question4.classList.toggle("bolder")
    })

    arrow5.addEventListener("click", () => {
        arrow5.classList.toggle("arrowFlip")
        box5.classList.toggle("boxExpand")
        setTimeout(() => {
            answer5.style.opacity = "1"
        }, 100);
        answer5.classList.toggle("reveal")
        question5.classList.toggle("bolder")
    })
}

faqExpand()

/* function arrowStuff() {
    for (let i=0; i < arrows.length; i++) {
        arrows[i].addEventListener("click", () => {
            arrows[i].classList.toggle("arrowFlip")
            for (let i = 0; i < questionBoxes.length; i++) {
                    questionBoxes[i].classList.toggle("boxExpand")
            }
        })
        
        
    }
}

arrowStuff() */


/* arrows.forEach((arrow, index) => {
    
    arrow.addEventListener("click", () => {
        console.log(arrow)
        arrow.classList.toggle("arrowFlip")
        questionBoxes.forEach((questionBox, index) => {
            console.log(questionBox, index)
            questionBox.classList.toggle("boxExpand")
        })
        
        
        answers.forEach((answer) => {
            setTimeout(() => {
                answer.style.opacity = "1"
            }, 100);
            answer.classList.toggle("reveal")
        })
    })
}) */



/* function faqActivate() {
    arrow.addEventListener("click", () => {
        arrow.style.transform = "rotate(180deg)"
        setTimeout(() => {
            answer.style.opacity = "1"
        }, 100);
        answer.style.display = "block"
        
    })
    
    
}

faqActivate() */