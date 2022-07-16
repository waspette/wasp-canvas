const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const gameContext = canvas.getContext('2d');
const gravity = 0.2
gameContext.fillRect(0, 0, canvas.width, canvas.height);

class Sprite { //class used to represent friendly and enemy players
    constructor({ position, velocity}) { //A constructor defines required values to create a new instance (copy) of a class. A position must be passed in to create a Sprite
        this.position = position //the this keyword means on *this* specific instance of Sprite. So the Debra or Becky or Louis Sprite.
        this.velocity = velocity
        this.height = 150
        this.width = 50

    }

    drawBody(color) { //draws the Sprite using the position property from the Sprite class and the color passed in from the caller. This is a method that lives IN the class NEXT to the constructor, not INSIDE of the constructor.
        gameContext.fillStyle = color;
        gameContext.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(color){
        this.drawBody(color)
 
        this.position.y += this.velocity.y //+= means this.position.y = this.posiiton.y += velocity;

        if (this.position.y + this.height + this.velocity.y >= canvas.height)
        {
            this.velocity.y = 0
        }
        else
        {
            this.velocity.y += gravity
        }
    }
}

const hottie = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    }
})

const wraith = new Sprite({
    position: {
        x: 150,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

function animate() { //an infinite loop that is listening frame by frame for animations. Will run forever until told to stop. SEE: animate()   
    window.requestAnimationFrame(animate)
    gameContext.fillStyle = 'black';
    gameContext.fillRect(0, 0, canvas.width, canvas.height)

    hottie.update('purple')
    wraith.update('red')
}

animate();
window.addEventListener('keydown', (event) => {
    console.log(event)
 })

console.log(wraith);
console.log(hottie); // ctrl+shift+i to open developer tools then view the console window to see object logged