const title = document.querySelector('.title');
const strTitle = title.textContent;
console.log(strTitle);
const splitTitle = strTitle.split("");
title.textContent = ""; //gets rid of h1 tag

for(let i=0; i < splitTitle.length; i++){
    title.innerHTML += "<span>" + splitTitle[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick,50);
   
function onTick(){
    const span = title.querySelectorAll('span')[char];
    console.log(span);
    span.classList.add('fade');
    char++
    if(char === splitTitle.length){
        complete();
        return;
    }
}

function complete(){
    title.textContent = strTitle; //gets rid of h1 tag
    clearInterval(timer);
    timer = null;
}