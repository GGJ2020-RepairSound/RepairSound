import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() id: number;
  @Input() img: string;
  @Input() soundpath: any;
  @Input() effectObject: any;

  constructor() {
  }

  ngOnInit() {
    // here load sound and effect
    console.log(this.img);
    console.log(this.soundpath);
    console.log(this.effectObject);
  }

}
