import {AfterViewInit, Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild} from '@angular/core';
import Pizzicato from 'pizzicato';
import {TileData, tileEffects} from "../models/TileModel";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit, AfterViewInit {

  @Input() @HostBinding('style.grid-column-start') x: number;
  @Input() @HostBinding('style.grid-row-start') y: number;
  @Input() jsonData: any;
  @Output() hasClicked = new EventEmitter<TileData>();
  data = new TileData();
  background: HTMLElement;
  timeoutID: any = null;

  constructor() {
  }

  onClick() {
    // emit data
    this.hasClicked.emit(this.data);
    // change image
    this.background.style.backgroundPosition = '100% 0';
    console.log(this.background.style);
    // clear previous timer
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.background.style.backgroundPosition = '0 0';
      console.log(this.background.style);
    }, 500);
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

  ngAfterViewInit() {
    this.background = document.querySelector('.background-' + this.data.id);
    console.log(this.background);
  }

  getBackgroundImage(): string {
    return 'url("../../assets/images/' + this.data.img + '")';
  }
}
