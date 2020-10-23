const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('puestionCounter');


let currentQuestion = {};
let acceptingAnswers = false;

let questionCounter = 0;
let availableQuesinons = [];

let questions = [
    {
        question: "কোনটি প্রাকৃতিক পরিবেশের উপাদান ?",
        choice1: "গাছ",
        choice2: "টেবিল",
        choice3: "কলম",
        choice4: "চেয়ার",
        answer: 1
    },
    {
        question: "কোনটি মানুষের তৈরি পরিবেশের উপাদান ?",
        choice1: "পাখি",
        choice2: "পাহাড়",
        choice3: "ঘরবাড়ি",
        choice4: "মাছ",
        answer: 3
    },
    {
        question: "নিচের কোনটি জীব ?",
        choice1:"মরিচ গাছ",
        choice2:"বাড়ি",
        choice3:"রিকশা",
        choice4:"এরোপ্লেন",
        answer: 1
    },
    {
        question: "কোনটি বৃদ্ধি পায় ?",
        choice1:"মোটরগাড়ি",
        choice2:"কবুতর",
        choice3:"চেয়ার",
        choice4:"পাথর",
        answer: 2
    },
    {
        question: "নিচের কোনটি অপুষ্পক উদ্ভিদ ?",
        choice1:"আম",
        choice2:"ঢেঁকি শাক",
        choice3:"ধান",
        choice4:"শাপলা",
        answer: 2
    },
    {
        question: "কোনটি কঠিন পদার্থ ?",
        choice1:"পানি",
        choice2:"জলীয় বাষ্প",
        choice3:"ফলের রস",
        choice4:"আইসক্রিম",
        answer: 4
    },
    {
        question: "কোনটি তরল পদার্থ ?",
        choice1:"তেল",
        choice2:"জলীয় বাষ্",
        choice3:"বুদবুদ",
        choice4:"বরফ",
        answer: 1
    },
    {
        question: "কোনটি পানি দূষণের কারণ ?",
        choice1:"পানিতে ময়লা ফেলা",
        choice2:"পানিতে নৌকা চালানো",
        choice3:"পানিতে মাছ ধরা",
        choice4:"খাবার রান্না করা",
        answer: 1
    },
    {
        question: "কোনটি নিরাপদ পানি ?",
        choice1:"পুকুরের পানি",
        choice2:"ফুটানো পানি",
        choice3:"নদীর পানি",
        choice4:"সাগরের পানি",
        answer: 2
    },
    {
        question: "শিম এবং কাঁঠাল কোন মাটিতে ভালো জম্মায় ?",
        choice1:"বেলে মাটি",
        choice2:"দোআঁশ মাটি",
        choice3:"এঁটেল মাটি",
        choice4:"লোনা মাটি",
        answer: 3
    },
    {
        question: "তরমুজ ও চিনাবাদাম কোন মাটিতে ভালো জম্মায় ?",
        choice1:"বেলে মাটি",
        choice2:"দোআঁশ মাটি",
        choice3:"এঁটেল মাটি",
        choice4:"লোনা মাটি",
        answer: 1
    },
    {
        question: "উদ্ভিদ কার্বন ডাই-অক্সাইড কী কাজে ব্যবহার করে ?",
        choice1:"খাদ্য তৈরি",
        choice2:"বৃদ্ধিতে",
        choice3:"ফুল ফোটাতে",
        choice4:"ফল উৎপাদনে",
        answer: 1
    },      
    {
        question: "আমিষের প্রধান কাজ কি ?",
        choice1:"শক্তি যোগান",
        choice2:"দূর্বলতা দূর করা",
        choice3:"রোগ প্রতিরোধ করা",
        choice4:"দেহের গঠন ও বৃদ্ধি",
        answer: 4
    },      
    {
        question: "অধিক আমিষের উৎস কোনটি ?",
        choice1:"লাউ",
        choice2:"কুমড়া",
        choice3:"ডাল",
        choice4:"আালু",
        answer: 3
    },      
    {
        question: "রোগ প্রতিরোধের জন্য কোন অভ্যাসটি ভালো ?",
        choice1:"বেশি খাবার খাওয়া",
        choice2:"নিয়মিত হাত ধোয়া",
        choice3:"দেরিতে ঘুমানো",
        choice4:"খোল খবার খাওয়া",
        answer: 2
    },
    {
        question: "শরীরে সুস্থ রাখার জন্য কোনটি ভালো ?",
        choice1:"প্রয়োজন মতো বিশ্রাম ও ঘুম",
        choice2:"কঠোর পরিশ্রম",
        choice3:"বেশি করে ওষুধ খাওয়া",
        choice4:"বেশি বেশি খবার খাওয়া",
        answer: 1
    },
    {
        question: "কোনটি শক্তি ?",
        choice1:"টেলিভিশন",
        choice2:"ফ্যান",
        choice3:"আলো",
        choice4:"কলম",
        answer: 3
    },
    {
        question: "কোনটি বিদ্যুৎ ব্যবহার করে চলে?",
        choice1:"ঠেলাগাড়ি",
        choice2:"রেডিও",
        choice3:"সূর্য",
        choice4:"বাষ্পীয় ইঞ্জিন",
        answer: 2
    },
    {
        question: "কোনটি আধুনিক প্রযুক্তি ?",
        choice1:"কোদাল",
        choice2:"লাঙল",
        choice3:"কাস্তে",
        choice4:"ট্রাক্টর",
        answer: 4
    },
    {
        question: "কোন প্রযুক্তিটি প্রথমে তৈরি হয়েছে?",
        choice1:"কলম",
        choice2:"কাগজ",
        choice3:"বই",
        choice4:"মুদ্রণযন্ত্র",
        answer: 2
    },         
    {
        question: "কোনটি যাতায়াত প্রযুক্তি ?",
        choice1:"কম্পিউটার",
        choice2:"টেলিফোন",
        choice3:"উড়োজাহাজ",
        choice4:"ট্রাক্টর",
        answer: 3
    },
    {
        question: "কোনটি প্রাকৃতি সম্পদ?",
        choice1:"কলম",
        choice2:"বই",
        choice3:"মাটি",
        choice4:"টেবিল",
        answer: 3
    } 
 ];

//CONSTANTS
const MAX_QUESTIONS = 22;

startGame = () => {
    questionCounter = 0;
    availableQuesinons = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuesinons == 0 || questionCounter > MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("index.html");
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  
    
    const questionIndex = Math.floor(Math.random() * availableQuesinons.length);
    currentQuestion = availableQuesinons[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesinons.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectadChoice = e.target;
        const selectadAnswer = selectadChoice.dataset["number"];

        const classToApply = 
           selectadAnswer == currentQuestion.answer ? "correct" : "incorrect";

        selectadChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
        selectadChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000);
        
    });
});

startGame();