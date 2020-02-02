import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import {TimelineComponent} from "../timeline/timeline.component";
import {TileData} from "../models/TileModel";
import Pizzicato from 'pizzicato';

@Component({
  selector: 'app-grid',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  solution: Array<Array<number>>;
  resultSound: any;
  tiles: Array<any>;
  gridWidth: number;
  gridHeight: number;
  @ViewChild(TimelineComponent, {static: false}) timeline: TimelineComponent;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot);
  }

  async ngOnInit() {
    let levelID: string = this.route.snapshot.paramMap.get('id');
    console.log(levelID);
    let levelData = (await axios.get('http://localhost:4200/assets/levels/level' + levelID + '.json')).data;
    console.log(levelData);
    this.solution = levelData.solution;
    this.resultSound = new Pizzicato.Sound('../../assets/sounds/' + levelData.resultSoundSrc);
    this.tiles = levelData.tiles;
    // get maximum width and height here
  }

  forwardToTimeline(data: TileData) {
    this.timeline.push(data);
  }

  computePercentages(numItems: number): string {
    return ((100 / numItems) + "%").repeat(numItems);
  }
}
