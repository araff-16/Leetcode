interface beans {
  cansize: string;

  eatbeans(): string;
}

class heartless implements beans {
  cansize: string = "large";

  eatbeans(): string {
    return "done";
  }
}

const y = { d: 40 };
y.d = 4;

const buttterfinger = () => {
  console.log("hey2");
};

// buttterfinger();

class beanCounterClass {
  private peanuts: string = "4";
  constructor() {
    console.log("initiliaze ");
    // this.peanuts='3'
  }

  setter() {
    this.peanuts = "66";
  }

  getter() {
    console.log(this.peanuts);
  }
}

let banker = new beanCounterClass();

banker.setter();
banker.getter();

enum SizeEnum {
  Big = "Big",
  small = "small",
  large = "large",
}

interface Spot {
  time: number;
}

const examplemap: Map<string, Spot> = new Map();

examplemap.set("aaa", { time: 1 });
examplemap.set("abc", { time: 3 });
examplemap.set("abd", { time: 3 });

examplemap.forEach((value, key) => {
  console.log(key);
  console.log(key);
});

interface Iketchup {
  name: string;
  availableSpots: Map<SizeEnum, Spot[]>;

  getname(): string;
}
class Token {
  color: string;
  constructor() {
    this.color = "s";
  }
}

let playingField: (Token | null)[][];

const attemptdoingsomething: Map<SizeEnum, Spot[]> = new Map();

type trysomethingnew = {
  new1: string;
};

const newobject: trysomethingnew = {
  new1: "string",
};

attemptdoingsomething.set(SizeEnum.Big, []);

// attemptdoingsomething.delete('key');

const attemptne: Set<number> = new Set();
attemptne.add(1);

let examplearray = [1, 2, 3, 4];

class i1 implements Iketchup {
  public name: string;
  availableSpots: Map<SizeEnum, Spot[]>;

  constructor(name: string, somemap: Map<SizeEnum, Spot[]>) {
    this.name = name;
    this.availableSpots = somemap;
  }
  // private getname(): string {
  //   return this.name;
  // }
  getname(): string {
    return this.name;
  }

  returnName() {
    this.getname();
  }

  getSize() {
    return SizeEnum.Big;
  }
}

const tryagain = new i1("name", attemptdoingsomething);

// class i2 implements Iketchup {
//   constructor(public name: string) {}
//   public getname(): string {
//     return this.name;
//   }
// }

// let in2 = new i2("rrr");

// console.log(in2.name);
