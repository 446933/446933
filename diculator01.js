let number01I='';
let number02I='';
let answerI='';
let operatorI='';
let updown=1;

let number01E=document.getElementById('number01E');
let number02E=document.getElementById('number02E');
let operatorE=document.getElementById('operatorE');
let answerE=document.getElementById('answerE');
let numbernumber = document.querySelectorAll('[numbernumber]')

function fplus(){
    operatorE.textContent='+';
    operatorI='+';
}
function fminus(){
    operatorE.textContent='-';
    operatorI='-';
}
function fmultiply(){
    operatorE.textContent='x';
    operatorI='x';
}
function fdivided(){
    operatorE.textContent='÷';
    operatorI='÷';
}

function fdeath(){
    if(updown>0){
        number01I = number01I.toString().slice(0, -1);
        number01E.textContent = number01I
    }
    else{
        number02I = number02I.toString().slice(0, -1);
        number02E.textContent = number02I
    }
}
function fextinction(){
    if(updown>0){
        number01I='';
        number01E.textContent='';
    }
    else{
        number02I='';
        number02E.textContent='';
    }
}

function fgeneration(){
    switch (operatorI){
        case '+':
            answerI=parseFloat(number01I)+parseFloat(number02I)
            answerE.textContent=answerI
            break;
        case '-':
            answerI=parseFloat(number01I)-parseFloat(number02I)
            answerE.textContent=answerI
            break;
        case 'x':
            answerI=parseFloat(number01I)*parseFloat(number02I)
            answerE.textContent=answerI
            break;
        case '÷':
            answerI=parseFloat(number01I)/parseFloat(number02I)
            answerE.textContent=answerI
            break;
    }
}

function fanswer(){
    if(updown>0){
        number01I=answerI;
        number01E.textContent=answerI;
    }
    else{
        number02I=answerI;
        number02E.textContent=answerI;
    }
}

function fup(){
    if(updown>0){
        updown=-1
        number02E.style.color='rgb(205,235,135)';
        number01E.style.color='rgba(222, 184, 135, 0.712)';
    }
    else{
        updown=1
        number01E.style.color='rgb(205,235,135)';
        number02E.style.color='rgba(222, 184, 135, 0.712)';
    }
}
function fpoint(){
    if(updown>0){
        if(number01I.includes('.')&&number01E.includes('.')){}
        else{
            number01I+='.';
            number01E.textContent+='.'
        }
    }
    else{
        if(number02I.includes('.')&&number02E.includes('.')){}
        else{
            number02I+='.';
            number02E.textContent+='.'
        }
    }
}

function fnumber(mumu){
    if(updown>0){
        number01E.style.color='rgb(205,235,135)'
        number01I+=mumu;
        number01E.textContent=number01I
    }
    else{
        number02I+=mumu;
        number02E.textContent=number02I
    }
}

//node diculator01.js