
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { TileComponent } from './tile/tile.component';
import { TimelineComponent } from './timeline/timeline.component';
// import { MenuComponent } from './menu/menu.component';
// import { MainpageComponent } from './mainpage/mainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    TileComponent,
    TimelineComponent
    // MenuComponent,
    // MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
