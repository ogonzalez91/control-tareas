import { Component, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from 'src/app/schedule/home/home.component';

@Component({
  selector: 'app-mini-panel',
  templateUrl: './mini-panel.component.html',
  styleUrls: ['./mini-panel.component.scss']
})
export class MiniPanelComponent implements OnInit {

  @Input() displayText = '';
  @Input() id = '';
  
  @Output() nuevoPanel = new HomeComponent();

  
  constructor() { }

  ngOnInit(): void {
  }

  
}
