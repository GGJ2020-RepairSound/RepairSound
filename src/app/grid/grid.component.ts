import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import axios from 'axios';
import {TileData} from "../models/TileModel";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  filename: string;
  grid: Map<string, any> = new Map();
  gridWidth = 5;
  gridHeight = 4;
  axiosInstance = axios.create({
    baseURL: 'http://localhost:4200/assets'
  });

  constructor() {
    this.filename = 'levels/level01.json';
    for (let y = 0; y < this.gridHeight; ++y) {
      for (let x = 0; x < this.gridWidth; ++x) {
        this.grid.set(x + '.' + y, null);
      }
    }
  }

  async ngOnInit() {

    const response = await this.axiosInstance.get(this.filename);
    console.log(response);
    const levelData = response.data;
    console.log(levelData);
    for (const tile of levelData.tiles) {
      this.grid.set(tile.x + '.' + tile.y, tile);
    }
    console.log(this.filename);
    console.log(this.grid);
  }
  forwardData(data: TileData) {
    console.log('data', data);
    // timeline.push(data);
  }

}
