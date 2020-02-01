import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TileService} from '../services/tile.service';
import Pizzicato from 'pizzicato';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() id: number;
  @Input() img: string;
  @Input() soundPathOrEffect: any;
  @Output() eventSound = new EventEmitter<any>();

  constructor(private soundService: TileService) {
  }

  throwSound() {
    const mySound = new Object({
      id: this.id,
      img: this.img,
      soundOrEffect: this.soundPathOrEffect,
    });
    this.eventSound.emit(mySound);
  }

  onClick() {
    if (this.soundPathOrEffect.includes('.wav')) {
      this.playSound();
    } else {
      // this.sendEffect();
    }
  }

  playSound() {
    const sound = new Pizzicato.Sound('../../assets/sounds/' + this.soundPathOrEffect, () => {
      // Sound loaded!
      sound.play();
    });
  }

  sendEffect() {
    this.eventSound.emit(this.soundPathOrEffect);
  }

  ngOnInit() {

  }

}


