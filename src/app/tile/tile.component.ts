import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  img: string;
  sound: any;
  effect: any;

  constructor(public id: number, jsonData: any) {
    this.img = jsonData.img;
    this.sound = jsonData.sound; // change this later
    this.effect = jsonData.effect; // change this later
  }

  ngOnInit() {
  }

}
