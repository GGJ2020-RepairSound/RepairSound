import {Component, OnInit, Input} from '@angular/core';
import {PlayerModel} from '../models/PlayerModel';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() {
  }

  @Input() playerX: number;
  @Input() playerY: number;
  player: PlayerModel;


  ngOnInit() {
    this.player = new PlayerModel(1, 1, '');
    console.log(this.player);
  }

}
