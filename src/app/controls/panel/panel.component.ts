import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() displayTitulo = '';

  @Input() muestraEliminar = true;

  constructor() { }

  ngOnInit(): void {
  }

}

