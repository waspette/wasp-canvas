const canvas = document.querySelector('canvas');

const gameContext = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

gameContext.fillRect(0, 0, canvas.width, canvas.height);


function OnClickBaby(msg) {
   
    var pTag = document.querySelector('p');

    pTag.append(msg);
}