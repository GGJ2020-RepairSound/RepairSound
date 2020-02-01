import { Component, OnInit } from '@angular/core';
import * as Pizzicato from '../../../node_modules/pizzicato/distr/Pizzicato.js';
import {TileService} from '../services/tile.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private soundEffect: TileService) { }


  ngOnInit() {
  this.playSound();
  }
  playSound() {

    // const sound = new Pizzicato.Sound('../../assets/sounds/1er_Niveau/Violon_SOL.wav', () => {
    //   this.soundEffect.addDelay(sound);
    //   sound.play();
    // });


    const sound2 = new Pizzicato.Sound('../../assets/sounds/1er_Niveau/Violon_SOL.wav', () => {
      this.soundEffect.addDistortion(sound2);
      sound2.play();
    });
    const sound3 = new Pizzicato.Sound('../../assets/sounds/1er_Niveau/Violon_SOL.wav', () => {
      this.soundEffect.addStereo(sound3);
      sound3.play();
    });
  }
}
