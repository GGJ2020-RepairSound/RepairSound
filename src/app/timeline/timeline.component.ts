import {Component, Input, OnInit} from '@angular/core';
import {TileData} from "../models/TileModel";
import Pizzicato from 'pizzicato';

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
  currentSound:Array<any>=[];
  currentColumn = 0;
  constructor() {
    for (let i = 0; i < this.size; ++i) {
      this.timeline.push([]);
    }
  }

  ngOnInit() {
  }
  playCurrentSound(){
       let newGroup = new Pizzicato.Group(this.currentSound);
        newGroup.play();

  }
  playResultSound(){
    // @ts-ignore
    this.resultSoundSrc.play();
  }
  public push(data: TileData) {
    this.currentSound.push(data.sound);
    data.sound.play();
    console.log(this.currentSound);

  }
}
