import {Injectable} from '@angular/core';
import Pizzicato from 'pizzicato';


@Injectable({
  providedIn: 'root'
})
export class TileService {

  constructor() {
  }

  reverb(): any {
    return new Pizzicato.Effects.Reverb({
      time: 1,
      decay: 0.8,
      reverse: true,
      mix: 0.5
    });
  }

  /*Creer un Echo*/
  delay(): any {
    return new Pizzicato.Effects.Delay({
      feedback: 1,
      time: 1,
      mix: 0.3
    });
  }

  /*Puissance et Volume du son*/
  distortion(): any {
    return new Pizzicato.Effects.Distortion({
      gain: 1
    });
  }

  /*Son à droite (+1) ou à gauche (-1)*/
  stereoRight(): any {
    return new Pizzicato.Effects.StereoPanner({
      pan: +1
    });
  }

  stereoLeft(): any {
    return new Pizzicato.Effects.StereoPanner({
      pan: -1
    });
  }
}
