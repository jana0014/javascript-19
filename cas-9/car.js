class Car {
    model;
    color;
    year;
    maxSpeed;
    currentSpeed;

    constructor(model, color, year, maxSpeed, currentSpeed) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = currentSpeed;
    }

    accelerate(speed) {
        if(this.currentSpeed + speed >= this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
            console.log('Maximal speed reached!')
            return
        }
        this.currentSpeed += speed;
    }

    decelerate(speed) {
        if(this.currentSpeed - speed <= this.maxSpeed) {
            this.currentSpeed = 0;
            console.log('Vehicle has stopped!')
            return
        }
        this.currentSpeed -= speed;
    }
}

const Audi = new Car('Audi', 'White', 2010, 200, 10)
const Toyota = new Car('Toyota', 'Blue', 2000, 150, 10)

console.log(Audi, Toyota)


setInterval(() => {
    Audi.accelerate(20)
    console.log(Audi.currentSpeed)
}, 1000
)

// setInterval(() => {
//   Toyota.decelerate(20)
//   console.log(Toyota.currentSpeed)
// }, 1000)
