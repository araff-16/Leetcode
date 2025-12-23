enum Statusenum {
  good = "good",
  bad = "good",
}



class Car {
  public speed: number;
  private brand: string;
  private model: string;

  public status: Statusenum = Statusenum.good;

  constructor(speed: number, brand: string, model: string) {
    this.speed = speed;
    this.brand = brand;
    this.model = model;
  }

  public getstatus() {
    console.log(`This ${this.brand} ${this.model} is moving  at ${this.speed}`);
    return;
  }
}

const mycar = new Car(120, "mazda", "mazda3");

mycar.getstatus();
mycar.speed = 34;

mycar.getstatus();

const yourcar = new Car(100, "lambo", "aventador");

const speedupallcars = (cars: Car[]) => {
  for (let car of cars) {
    car.speed = car.speed + 50;
  }
};

speedupallcars([mycar, yourcar]);

mycar.getstatus();
yourcar.getstatus();

console.log(mycar.status);
