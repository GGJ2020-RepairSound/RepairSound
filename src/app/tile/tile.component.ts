import {Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild} from '@angular/core';
import Pizzicato from 'pizzicato';
import {TileData, tileEffects} from "../models/TileModel";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() @HostBinding('style.grid-column-start') x: number;
  @Input() @HostBinding('style.grid-row-start') y: number;
  @Input() jsonData: any;
  @Output() hasClicked = new EventEmitter<TileData>();
  data = new TileData();
  @ViewChild('img', {static: false}) DOM_img: ViewChild;

  constructor() {
  }

  onClick() {
    // emit data
    this.hasClicked.emit(this.data);
    // change image

  }

  ngOnInit() {
    this.data.id = this.jsonData.id;
    this.data.img = this.jsonData.img;
    if (this.jsonData.action.type === "sound") {
      this.data.sound = new Pizzicato.Sound('../../assets/sounds/' + this.jsonData.action.sound_file);
    } else {
      this.data.effect = tileEffects.get(this.jsonData.action);
    }
  }

}


