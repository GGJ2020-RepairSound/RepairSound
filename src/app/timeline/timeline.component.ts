import {Component, OnInit} from '@angular/core';
import {TileComponent} from "../tile/tile.component";
import Pizzicato from 'pizzicato';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  size: number = 10;
  solution: Array<Array<number>>;
  timeline: Array<Array<TileComponent>> = []; // à changer
  catchSound: any;
  resultSound: Array<any> = [];
  spanArray:Array<any> = ['','','','','','','','','',''];

  constructor() { }

  ngOnInit() {
  }
  onCatchSound(event) {
    this.catchSound = event;
    this.resultSound.push(new Pizzicato.Sound('../../assets/sounds/'+this.catchSound.soundOrEffect));
    console.log('result', this.resultSound);
  }
}
