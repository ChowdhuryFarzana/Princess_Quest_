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
// present
const bool=true;
toggleBtnRobin.addEventListener('click', ()=> {
    if(flyingRobinB.classList.toggle('highlighted', bool)){
        flyingRobinB.classList.remove('highlighted');
        flyingRobinB.classList.add('highlighted');
        flyingRobinB.classList.toggle('highlighted');
    }
    else{
        flyingRobinB.classList.toggle('highlighted');
    }
animalCommunicationB.classList.toggle('highlighted');
swordFightingB.classList.toggle('highlighted')
//flyingRobinB.classList.toggle('highlighted');
});

