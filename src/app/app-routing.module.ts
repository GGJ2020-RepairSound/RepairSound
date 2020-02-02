import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LevelComponent} from "./level/level.component";
//import {MainpageComponent} from "./mainpage/mainpage.component";
import {MenuComponent} from "./menu/menu.component";


const routes: Routes = [
  { path: 'level/:id', component: LevelComponent },
  { path: '', component: MenuComponent },
  // { path: '', redirectTo: 'level/01', pathMatch: 'full' }
  // { path: '', component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
