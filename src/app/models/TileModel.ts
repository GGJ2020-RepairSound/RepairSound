import Pizzicato from 'pizzicato';

export class TileData {
  id: number;
  img: string;
  sound: any = null;
  effect: any = null;
}

export const tileEffects = new Map<string, any>([
  [
    'reverb',
    new Pizzicato.Effects.Reverb({
      time: 1,
      decay: 0.8,
      reverse: true,
      mix: 0.5
    })
  ],

  /*Creer un Echo*/
  [
    'delay',
    new Pizzicato.Effects.Delay({
      feedback: 1,
      time: 1,
      mix: 0.3
    })
  ],

  /*Puissance et Volume du son*/
  [
    'distortion',
    new Pizzicato.Effects.Distortion({
      gain: 1
    })
  ],

  /*Son à droite (+1) ou à gauche (-1)*/
  [
    'stereoRight',
    new Pizzicato.Effects.StereoPanner({
      pan: +1
    })
  ],

  [
    'stereoLeft',
    new Pizzicato.Effects.StereoPanner({
      pan: -1
    })
  ]
]);
