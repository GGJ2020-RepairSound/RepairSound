export class TileData {
  //Sound as to be a type Audio something
  img: string;
  sound: any;
  effect: any;
  wall: boolean;
  end: boolean;

  constructor(jsonData: any) {
    this.img = jsonData.img;
    this.sound = jsonData.sound; // change this later
    this.effect = jsonData.effect; // change this later
    this.wall = false;
    this.end = false;
  }
}

export class TileInstance {
  'tileData': TileData;
  'x': number;
  'y': number;
}
