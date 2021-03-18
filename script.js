const questions = [{
    id:0,
    question:"Who was there / were you with anyone?",
    textarea:document.getElementById('questionText').value
},
{
    id:1,
    question:"Where were you / Where did this take place?",
    textarea:document.getElementById('questionText').value
},
{
    id:2,
    question:"What happened?",
    textarea:document.getElementById('questionText').value
},
{
    id:3,
    question:"What could you see? What could you hear? What could you feel? What could you smell?",
    textarea:document.getElementById('questionText').value
},
{
    id:4,
    question:"Think about how you could bring the characters in your story to life?",
    textarea:document.getElementById('questionText').value
}, {
    id:5,
    question:"Do you have photo or video of any aspect or characters in this story?",
    textarea:document.getElementById('questionText').value
},
{
    id:6,
    question:"What do you this this story could represent or symbolize?",
    textarea:document.getElementById('questionText').value
},
{
    id:7,
    question:"What is the point of this story? [Think: /*The reason I'm telling you this is because _____*/] ",
    textarea:document.getElementById('questionText').value
},
// {
//     id:8,
//     question:"blank",
//     textarea:document.getElementById('questionText').value
// },
// {
//     id:9,
//     question:"blank",
//     textarea:document.getElementById('questionText').value
// },
]


 const questionContainer = document.querySelector('.questionContainer');
 const nextBtn = document.querySelector('.nextBtn');
 const questionTitle = document.querySelector('.questionTitle');
 const questionText = document.getElementById('questionText');
 const saveEl = document.getElementById('saveContainer')
 const newBtn = document.querySelector('.newStory')
 const questionBoard = document.querySelector('.questionBoard');
 const btnContainer = document.querySelector('.btnContainer')

 newBtn.addEventListener('click', function(){
     questionContainer.classList.add('active');
     btnContainer.classList.remove('hide')

     displayData(0);
 })
 let currentQuestion = 0; 

 function displayData(questionItem){
     const item = questions[questionItem];
     questionTitle.textContent = item.question;
     questionText.textContent = item.questionText;

     const cards = document.createElement('div');
     cards.innerHTML = 
     `<div class="saved" >
         <div>
             <h2>${item.question}</h2>
         <textarea class="card" placeholder="write here">${questionText.value}</textarea>
         </div>
     <div>`
     //     const textArea = cards.querySelector('textarea');
     //     textArea.addEventListener('input', (e) =>{
     //     const target = e.target.value
     //     })
         document.getElementById('saveContainer').appendChild(cards)
        
 }


 nextBtn.addEventListener('click', function(){
     currentQuestion++;
     questionText.value = "";
   if(currentQuestion > questions.length){
   currentQuestion = 7;
   } else if(currentQuestion === 8){
       questionBoard.classList.add('hide')

   }
   displayData(currentQuestion);
     
 })