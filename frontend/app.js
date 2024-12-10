'use strict';

/**
 * The code for changing the background theme when the button is clicked.
 */
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Theme";
    } else {
        this.textContent = "Light Theme";
    }

    console.log('current class name: ' + className);
});


/**
 * The code for showing and hiding the quest content for quest A when quest A button is clicked 
 */
const toggleBtnA= document.getElementById('toggleBtnA');
const contentA= document.querySelectorAll(".contentA");

toggleBtnA.addEventListener('click', function(){
    contentA.forEach(element => {
        if (element.style.display==='none'){
            element.style.display='block';
            toggleBtnA.innerHTML='Select quest A';
            // checkAllSelected();
            // if (toggleBtnA.innerHTML==='Can only select one quest. Click again to reset.'){
            //     toggleBtnA.addEventListener('click', function(){
            //         contentA.forEach(element =>{
            //         element.style.display='none';
            //         toggleBtnA.innerHTML='Unselect quest A';
            //         })
            //     });
            // }
        }
        else{
            element.style.display='none';
            toggleBtnA.innerHTML='Unselect quest A';
        }
    });
});


/**
 * The code the show and hide the quest content for quest B when button B is clicked
 */
const toggleBtnB= document.getElementById('toggleBtnB');
const contentB= document.querySelectorAll(".contentB");

toggleBtnB.addEventListener('click', function(){
    contentB.forEach(element => {
        if (element.style.display==='none'){
            element.style.display='block';
            toggleBtnB.innerHTML='Select quest B';
            // checkAllSelected();
            // if (toggleBtnB.innerHTML==='Can only select one quest. Click again to reset.'){
            //     toggleBtnB.addEventListener('click', function(){
            //         contentB.forEach(element =>{
            //         element.style.display='none';
            //         toggleBtnB.innerHTML='Unselect quest A';
            //         })
            //     });
            // }
        }
        else{
            element.style.display='none';
            toggleBtnB.innerHTML='Unselect quest B';
        }
    });
});


/**
 * Button click to highlight the skills for card Sol (quest B)
 */
const toggleBtnSol= document.getElementById('buttonSol');
const healingB=document.getElementById('healingB');
const flyingB=document.getElementById('flyingB');
toggleBtnSol.addEventListener('click', ()=> {
healingB.classList.toggle('highlighted');
flyingB.classList.toggle('highlighted');
});

/**
 *  Button click to highlight the skills for card Robin (quest B)
 */
const toggleBtnRobin= document.getElementById('buttonRobin');
const animalCommunicationB=document.getElementById('animalCommunicationB');
const swordFightingB=document.getElementById('swordFightingB');
const flyingRobinB=document.getElementById('flyingB');
let clickCounter=0;
toggleBtnRobin.addEventListener('click', ()=> {
  
    // TODO: implement the feature that will not unhighlight the talent that is already
    // highlighted by the previous card (selected)
    //-----------------------------------------------------------------------------------------

    // // The skill is highlighted already by previous cards  
    // if(isHighlighted('flyingB') && clickCount==1){
    //     flyingRobinB.classList.add('highlighted');
    // }
    // if (!isHighlighted('flyingB') && clickCount==1){
    //     flyingRobinB.classList.add('highlighted');
    // }
    // if(isHighlighted('flyingB') && !clickCount==1){
    //     flyingRobinB.classList.toggle('highlighted');
    // }
    // if(isHighlighted('flyingB') && !clickCount==1){
    //     flyingRobinB.classList.add('highlighted')
    // }
    // clickCount++;


animalCommunicationB.classList.toggle('highlighted');
swordFightingB.classList.toggle('highlighted')
flyingRobinB.classList.toggle('highlighted');
});

function isCellHighlighted(cell){
      return cell.classList.contains('highlighted');
}

// const toggleBtnRobin= document.getElementById('buttonRobin');
// const animalCommunicationB=document.getElementById('animalCommunicationB');
// const swordFightingB=document.getElementById('swordFightingB');
// const flyingRobinB=document.getElementById('flyingB');
// toggleBtnRobin.addEventListener('click', ()=> {
//     if(isCellHighlighted(document.getElementById('flyingB'))){
//         // This cell is highlighted by previous cards
//         flyingRobinB.classList.remove('highlighted'); 
//     }
//     else{
//         flyingRobinB.classList.toggle('highlighted');
//     }
//     animalCommunicationB.classList.toggle('highlighted');
//     swordFightingB.classList.toggle('highlighted')
// });



/**
 * The code the show and hide the algorithm outcome for quest A when button Greedy Approach is clicked
 */
// TODO: still needs to fix this 
const toggleQuestAGreedy= document.getElementById('toggleQuestAGreedy');
const paragraph= document.getElementById('toggleQuestAGreedyContentp');

toggleQuestAGreedy.addEventListener('click', function(){
        if (paragraph.style.display==='none'){
            paragraph.style.display='block';
        }
        else{
            paragraph.style.display='none';
        }
    });
    

/**
 * The code the show and hide the algorithm outcome for quest A when button Brute Force Approach is clicked
 */
// TODO: still needs to fix this
const toggleQuestABF= document.getElementById('toggleQuestABF');
const toggleQuestABFContent= document.querySelector(".toggleQuestABFContent");

toggleQuestABF.addEventListener('click', function(){
    toggleQuestABFContent.forEach(element => {
        if (element.style.display==='none'){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    });
});