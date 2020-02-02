import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
  }
  clicked: boolean = false;

  ngOnInit() {
  }

  getClick(click) {
    if(!click){
      this.clicked = true;
    }else this.clicked = false;

  }
}
