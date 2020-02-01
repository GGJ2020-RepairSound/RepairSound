import {Component, OnInit} from '@angular/core';
import {TileComponent} from "../tile/tile.component";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  size: number = 10;
  solution: Array<Array<number>>;
  timeline: Array<Array<TileComponent>> = []; // à changer

  constructor() { }

  ngOnInit() {
  }

}
