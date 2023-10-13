const questions=[
    {
        question:"Which animal does not fit in this group?",
        answers:[
            { text:"Snake", correct:false},
            { text:"Tiger", correct:false},
            { text:"Spider", correct:false},
            { text:"Shark", correct:true},
        ]
    },
    {
        question:"Which number should come next in this series?<br> 1, 3, 5, ?",
        answers:[
            { text:"6", correct:false},
            { text:"7", correct:true},
            { text:"10", correct:false},
            { text:"9",correct:false},
        ]
    },
    {
        question:"Fish is to ocean as bird is to... ?",
        answers:[
            { text:"earth", correct:false},
            { text:"sky", correct:true},
            { text:"sun", correct:false},
            { text:"hunter", correct:false},
        ]
    },
    {
        question:"If square is 4, how many is triangle?",
        answers:[
            { text:"1", correct:false},
            { text:"2", correct:false},
            { text:"3", correct:true},
            { text:"0", correct:false},
        ]
    },
    {
        question:"Lisa is taller than Jade. Nana is taller than Lisa. Who is the tallest?",
        answers:[
            { text:"Lisa", correct:false},
            { text:"Jade", correct:false},
            { text:"Nana", correct:true},
            { text:"Me", correct:false},
        ]
    },
    {
        question:"James is 18th in line at the entrance of San Diego's Comic-Con. He is also 18th from the back of the line. How many people are there in this line?",
        answers:[
            { text:"38", correct:false},
            { text:"37", correct:false},
            { text:"35", correct:true},
            { text:"36", correct:false},
        ]
    },
    {
        question:"Which is the following number in this list?<br>1, 2, 5, 2, ?",
        answers:[
            { text:"5", correct:false},
            { text:"3", correct:false},
            { text:"2", correct:false},
            { text:"1", correct:true},
        ]
    },
    {
        question:"Key likes 222 but not 225. He likes 1700 but not 1600. He likes 2 but not 4. Which of the following does he like?",
        answers:[
            { text:"9", correct:false},
            { text:"16", correct:false},
            { text:"121", correct:true},
            { text:"7", correct:false},
        ]
    },
    {
        question:"APPLE = 50<br>TOMATO = 84<br>LEMON = 59<br>EGG = ?",
        answers:[
            { text:"19", correct:true},
            { text:"53", correct:false},
            { text:"21", correct:false},
            { text:"11", correct:false},
        ]
    },
    {
        question:"LEMON is to NELMO as 25898 is to...?",
        answers:[
            { text:"85289", correct:true},
            { text:"85298", correct:false},
            { text:"82598", correct:false},
            { text:"89528", correct:false},
        ]
    },
    {
        question:"Which is the following number in this list?<br>1, 1, 2, 3, 5, 8, ?",
        answers:[
            { text:"9", correct:false},
            { text:"12", correct:false},
            { text:"13", correct:true},
            { text:"40", correct:false},
        ]
    },
    {
        question:"Which is the following pair in this list?<br>AC, BD, CE, ?",
        answers:[
            { text:"FG", correct:false},
            { text:"HI", correct:false},
            { text:"DF", correct:true},
            { text:"BF", correct:false},
        ]
    },
    {
        question:"Sean has more awards than Leo, and Brad has less awards than Sean. Which of the following statements is true?",
        answers:[
            { text:"Brad has more awards than Leo.", correct:false},
            { text:"Brad has as many awards as Leo.", correct:false},
            { text:"Brad has less awards than Leo.", correct:false},
            { text:"It's impossible to tell whether Brad or Leo has more awards.", correct:true},
        ]
    },
    {
        question:"Anna, who is eighteen years old, is three times as old as her brother Jeff. Fabien was twice as old as Jeff two years ago. How old will Fabien be in two years?",
        answers:[
            { text:"10", correct:false},
            { text:"8", correct:false},
            { text:"6", correct:false},
            { text:"12", correct:true},
        ]
    },
    {
        question:"Which one of the numbers does not belong in the following series?<br>0, 1, 5, 6, 8, 10, 11",
        answers:[
            { text:"5", correct:false},
            { text:"6", correct:false},
            { text:"8", correct:false},
            { text:"10", correct:true},
        ]
    },
    {
        question:"Choose the number that is 1/4 of 1/2 of 1/5 of 160?",
        answers:[
            { text:"20", correct:false},
            { text:"8", correct:false},
            { text:"10", correct:false},
            { text:"4", correct:true},
        ]
    },
    {
        question:"Which is the following number of this list?<br>2, 5, 4, 7, 6, ?",
        answers:[
            { text:"3", correct:false},
            { text:"8", correct:false},
            { text:"9", correct:true},
            { text:"10", correct:false},
        ]
    },
    {
        question:"Which is the following number in this list?<br>1, 21, 213, 4213, ?",
        answers:[
            { text:"42135", correct:true},
            { text:"54213", correct:false},
            { text:" 521", correct:false},
            { text:"2135", correct:false},
        ]
    },
    {
        question:"At a business meeting of five people, every person shakes hands with every other person one time. How many total handshakes occur?",
        answers:[
            { text:"10", correct:true},
            { text:"12", correct:false},
            { text:"8", correct:false},
            { text:"5", correct:false},
        ]
    },
    {
        question:"If you rearrange the letters &quot;WYRANO&quot; you would have the name of a(n):",
        answers:[
            { text:"Celebrity", correct:false},
            { text:"Country", correct:true},
            { text:"Ocean", correct:false},
            { text:"City", correct:false},
        ]
    },
    
]

const questionelement = document.getElementById("question");
const answerbuttons = document.getElementById("ans-but");
const nextbutton = document.getElementById("next-btn");
const redbutton = document.getElementById("red-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showquestion();
}

function showquestion() {
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate() {
    nextbutton.style.display = "none";
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if (iscorrect) {
        selectedbtn.classList.add("correct");
        score++; // Increment the score if the answer is correct
    } else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function showscore() {
    resetstate();
    questionelement.innerHTML =`Want to see the result press the result button`;
    nextbutton.innerHTML = "n";
    nextbutton.style.display = "none";
    Red();
    // You can include further actions related to displaying the result here
}
function result(){
    resetstate();

    questionelement.innerHTML =`You scored ${score} out of ${questions.length}!`;
}
function Red(){
    redbutton.style.display="block";
    }
function handlenextbutton() {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion();
    } else {
        showscore();
    }
}

nextbutton.addEventListener("click", () => {
    if (currentquestionindex < questions.length) {
        handlenextbutton();
    } else {
        Red();
    }
});

startquiz();
