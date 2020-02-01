import {Component, OnInit} from '@angular/core';
import {TileInstance, TileData} from "../models/TileModels";
import {emptyTile, endTile, wallTile} from "../models/SpecialTiles";
import axios from 'axios';
import {TileComponent} from "../tile/tile.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  filename: string;
  grid: Map<string, TileComponent> = new Map();
  gridWidth: number = 5;
  gridHeight: number = 4;
  resultSound: any; // à changer
  solution: Array<Array<number>>;
  axiosInstance = axios.create({
    baseURL: 'http://localhost:4200/assets'
  });

  constructor() {
    this.filename = 'levels/level01.json';

    for (let y = 0; y < this.gridHeight; ++y) {
      for (let x = 0; x < this.gridWidth; ++x) {
        this.grid.set(x+"."+y, null);
      }
    }
  }

  async ngOnInit() {
    let response = await this.axiosInstance.get(this.filename);
    console.log(response);
    let levelData = response.data;
    console.log(levelData);
    for (const [id, tile] of levelData.tiles.entries()) {
      this.grid.set(tile.x+"."+tile.y, new TileComponent(id, tile));
    }
    console.log(this.filename);
    console.log(this.grid);
  }

}
