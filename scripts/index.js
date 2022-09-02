const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const gameContext = canvas.getContext('2d');
const gravity = 0.2;

const keys = {

    a: {
        pressed: false,
        value: 'a'
    },
    d: {
        pressed: false,
        value: 'd'
    },

    //player two keys here
    ArrowLeft: {
        pressed: false,
        value: 'ArrowLeft'
    },
    ArrowRight: {
        pressed: false,
        value: 'ArrowRight'
    }
}

let lastKeyPress;

gameContext.fillRect(0, 0, canvas.width, canvas.height);

class Sprite { //class used to represent friendly and enemy players
    constructor({ position, velocity }) { //A constructor defines required values to create a new instance (copy) of a class. A position must be passed in to create a Sprite


        this.position = position //the this keyword means on *this* specific instance of Sprite. So the Debra or Becky or Louis Sprite.
        this.velocity = velocity
        this.height = 150
        this.width = 50

    }

    drawBody(color) { //draws the Sprite using the position property from the Sprite class and the color passed in from the caller. This is a method that lives IN the class NEXT to the constructor, not INSIDE of the constructor.
        gameContext.fillStyle = color;
        gameContext.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(color) {
        this.drawBody(color)

        this.position.y += this.velocity.y //+= means this.position.y = this.posiiton.y += velocity;

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
        else {
            this.velocity.y += gravity
        }

        this.position.x += this.velocity.x

        if (this.position.x + this.width + this.velocity.x >= canvas.width || this.position.x + this.width + this.velocity.x <= 0) //need to prevent exiting left side of screen
        {
            this.velocity.x = 0
        }
        else {

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

    hottie.velocity.x = 0;
    wraith.velocity.x = 0;

    if (keys.a.pressed && lastKeyPress === keys.a.value) {
        hottie.velocity.x = -1;
    }
    else if (keys.d.pressed && lastKeyPress === keys.d.value) {
        hottie.velocity.x = 1;
    }

    //player 2
    if (keys.ArrowLeft.pressed && lastKeyPress === keys.ArrowLeft.value) {
        wraith.velocity.x = -1;
    }
    else if (keys.ArrowRight.pressed && lastKeyPress === keys.ArrowRight.value) {
        wraith.velocity.x = 1;
    }
}

animate();

window.addEventListener('keydown', (event) => {

    switch (event.key.toLowerCase()) {
        case 'w':
            break;
        case 'a':
            keys.a.pressed = true
            lastKeyPress = keys.a.value; // 'a'
            break;
        case 's':
            break
        case 'd':
            keys.d.pressed = true
            lastKeyPress = keys.d.value; // 'd'
            break;

        //player 2 controls below

        case 'arrowleft':
            keys.ArrowLeft.pressed = true;
            lastKeyPress = keys.ArrowLeft.value;
            break;

        case 'arrowright':
            keys.ArrowRight.pressed = true;
            lastKeyPress = keys.ArrowRight.value;
            break;
        default: break
    }
    console.log(event.key.toLowerCase())
})

window.addEventListener('keyup', (event) => {

    switch (event.key.toLowerCase()) {
        case 'w':
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            break
        case 'd':
            keys.d.pressed = false
            break

        //player 2 controls below
        case 'arrowleft':
            keys.ArrowLeft.pressed = false
            break;

        case 'arrowright':
            keys.ArrowRight.pressed = false
            break;
        default: break
    }
    console.log(event.key)
})

console.log(wraith);
console.log(hottie); // ctrl+shift+i to open developer tools then view the console window to see object logged