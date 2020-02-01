import {Component, OnInit} from '@angular/core';
import {TileInstance, TileData} from "../models/TileModels";
import {emptyTile, endTile, wallTile} from "../models/SpecialTiles";
import axios from 'axios';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  filename: string;
  tileset: Array<TileData> = [];
  grid: Array<TileInstance> = [];
  axiosInstance = axios.create({
    baseURL: 'http://localhost:4200/assets'
  });

  constructor() {
    this.filename = "levels/level01.json";
  }

  async ngOnInit() {
    let response = await this.axiosInstance.get(this.filename);
    console.log(response);
    let levelData = response.data;
    console.log(levelData);
    for (const tileData of levelData.tileset) {
      this.tileset.push(new TileData(tileData));
    }
    for (const [y, row] of levelData.grid.entries()) {
      for (const [x, tileID] of row.entries()) {
        let curTileData: TileData;
        if (tileID === null) {
          // empty tile
          curTileData = emptyTile;
        } else if (tileID == -1) {
          // spawn : init player position and leave tile empty
          curTileData = emptyTile;
          // todo init player position
        } else if (tileID == -2) {
          // end tile
          curTileData = endTile;
        } else if (tileID == -3) {
          // wall
          curTileData = wallTile;
        } else {
          curTileData = this.tileset[tileID];
        }
        this.grid.push({
          'tileData': curTileData,
          'x': x,
          'y': y
        });
      }
    }
    console.log(this.filename);
    console.log(this.tileset);
    console.log(this.grid);
  }

}
