import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { MiniPanelComponent } from './mini-panel/mini-panel.component';
import { BulletComponent } from './bullet/bullet.component';
import { TitlesComponent } from './titles/titles.component';
import { HomeComponent } from '../schedule/home/home.component';



@NgModule({
  declarations: [
    PanelComponent,
    MiniPanelComponent,
    BulletComponent,
    TitlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    MiniPanelComponent,
    TitlesComponent
  ],
  bootstrap: [PanelComponent, MiniPanelComponent]
  
})
export class ControlsModule { }
