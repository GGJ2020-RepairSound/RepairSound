import {Component, Input, OnInit} from '@angular/core';
import {TileData} from "../models/TileModel";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  size = 10;
  @Input() solution: Array<Array<number>>;
  @Input() resultSoundSrc: string;
  timeline: Array<Array<TileData>> = []; // à changer
  currentColumn = 0;

  constructor() {
    for (let i = 0; i < this.size; ++i) {
      this.timeline.push([]);
    }
  }

  ngOnInit() {
  }

  public push(data: TileData) {
    console.log(data);
  }
}
