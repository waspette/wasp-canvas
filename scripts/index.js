const canvas = document.querySelector('canvas');

const gameContext = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

gameContext.fillRect(250, 0, canvas.width, canvas.height);



function OnClickBaby(textToAppend) {
   
    const pTag = document.querySelector('p');

    pTag.append(textToAppend);

    linebreak = document.createElement("br");
    pTag.appendChild(linebreak);
}

function OnClickClear() {

    const pTag = document.querySelector('p');
    pTag.innerHTML = ""; 
}
