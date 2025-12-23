enum ColorEnum {
  red,
  yellow,
}

class Player {
  name: string;
  color: ColorEnum;

  constructor(name: string, color: ColorEnum) {
    this.name = name;
    this.color = color;
  }
}

export { ColorEnum, Player };
