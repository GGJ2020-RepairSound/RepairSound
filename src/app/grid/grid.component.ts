import {Component, OnInit} from '@angular/core';
import {TilesModel} from "../models/TilesModel";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() {
  }

  rowSize: number;
  colSize: number;
  test: TilesModel = new TilesModel('',1 , 1);
  test2: TilesModel = new TilesModel('',3, 2) ;
  grid: Array<TilesModel>;
  tileX: any;


  ngOnInit() {
    this.grid = [this.test, this.test2];
    console.log(this.tileX = this.grid.keys());
    console.log(this.grid.values())
  }

}
