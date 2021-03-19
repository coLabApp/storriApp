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
 const btnContainer = document.querySelector('.btnContainer');



// when user clicks on new btn, there will be a display of question prompts 
 newBtn.addEventListener('click', function(){
     // adding class active to show question prompts
     questionContainer.classList.add('active');
     // removing class hide to show next button
     btnContainer.classList.remove('hide')
//starts with the first question id 
     displayData(0);
 })

 // the current question id is 0 
 let currentQuestion = 0; 

// display the properties inside the questions object  
function displayData(questionItem){
    const item = questions[questionItem];
    questionTitle.value = item.question;
    questionText.textContent = item.questionText;
    // creating cards that will show up after the questions are done to show what the user wrote
    
        
}

// everytime user clicks on the next button they will be taken to the next question in the questions object
let inputValues = [];
nextBtn.addEventListener('click', function(){
    currentQuestion++;
    //  titleValues.push(questionTitle.value);
    //  console.log(titleValues)
    inputValues.push([questionText.value, questionTitle.value]);
    const inputArray = inputValues;
     // after user clicks on next btn the input field is emptied 
    questionText.value = "";
    questionTitle.value = "";
if(currentQuestion > questions.length){
currentQuestion = 7;
} else if(currentQuestion === 8){
    inputArray.forEach(userInput =>{
        if(userInput[0] !== ""){
            const cards = document.createElement('div');
            cards.innerHTML = 
            `<div class="saved">
                <div class= "card">
                    <div class="tools">
                        <button class="edit"><i class="fas fa-edit"></i></button>
                    </div>
                    <input class="questionTitle" type="text" value="${userInput[1]}"></input>
                        <div>
                        <textarea class="card" placeholder="write here">${userInput[0]}</textarea>
                        </div>
                </div>
            <div>`
            document.getElementById('saveContainer').appendChild(cards)
        } else{
            const cards = document.createElement('div');
                    cards.innerHTML = 
                    `<div class="saved">
                        <div class= "card">
                            <div class="tools">
                                <button class="edit"><i class="fas fa-edit"></i></button>
                            </div>
                            <input class="questionTitle" type="text" value="${userInput[1]}"></input>
                                <div>
                                <textarea class="card" placeholder="write here">${userInput[0]}</textarea>
                                </div>
                        </div>
                    <div>`
                    document.getElementById('blankCards').appendChild(cards)
        }

    })
    questionBoard.classList.add('hide')

}
displayData(currentQuestion); 
})