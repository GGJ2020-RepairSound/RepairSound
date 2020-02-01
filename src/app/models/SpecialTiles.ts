import {TileData} from "./TileModels";

export const emptyTile: TileData = {
  img: "../../assets/images/empty.png",
  sound: null,
  effect: null,
  wall: false,
  end: false
};

export const endTile: TileData = {
  img: "../../assets/images/end.png",
  sound: null,
  effect: null,
  wall: false,
  end: true
};

export const wallTile: TileData = {
  img: "../../assets/images/wall.png",
  sound: null,
  effect: null,
  wall: true,
  end: false
};
