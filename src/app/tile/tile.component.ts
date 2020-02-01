import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TileService} from '../services/tile.service';
import Pizzicato from 'pizzicato';
import {TileData} from "../models/TileModel";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() jsonData: any;
  @Output() hasClicked = new EventEmitter<TileData>();
  data: TileData;

  constructor(private soundService: TileService) {
  }

  emitData() {
    this.hasClicked.emit(this.data);
  }

  ngOnInit() {
    this.data.id = this.jsonData.id;
    this.data.img = this.jsonData.img;
    if (this.jsonData.action.type === "sound") {
      this.data.sound = new Pizzicato.Sound('../../assets/sounds/' + this.jsonData.action.sound_file);
    } else {
      this.data.effect = Reflect.get(TileService, this.jsonData.action.type)()
    }
  }

}


