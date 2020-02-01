import {Injectable} from '@angular/core';
import Pizzicato from 'pizzicato';


@Injectable({
  providedIn: 'root'
})
export class TileService {

  constructor() {
  }


  addReverb(sound: any): any {
    const reverb = new Pizzicato.Effects.Reverb({
      time: 1,
      decay: 0.8,
      reverse: true,
      mix: 0.5
    });
    return sound.addEffect(reverb);
  }

  /*Creer un Echo*/
  addDelay(sound: any): any {
    const delay = new Pizzicato.Effects.Delay({
      feedback: 1,
      time: 1,
      mix: 0.3
    });
    return sound.addEffect(delay);
  }

  /*Puissance et Volume du son*/
  addDistortion(sound: any): any {
    const distortion = new Pizzicato.Effects.Distortion({
      gain: 1
    });
    return sound.addEffect(distortion);
  }

  /*Son à droite (1) ou à gauche (-1)*/
  addStereo(sound: any): any {
    console.log('yes');
    const stereoPanner = new Pizzicato.Effects.StereoPanner({
      pan: 1
    });
    return sound.addEffect(stereoPanner);
  }
}
