import { Component, Input, OnInit } from '@angular/core';
import { Panels } from '../models/Panels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() panel?: Panels;
 
  panels : Array<Panels> = [
    {
      id: 1,
      title: 'Iniciadas'
    }
    /*{
      id: 2,
      title: 'Iniciadas',
    }*/
  ];

  newPanel(texto:string)
  {
    const lastId = this.panels.map(element => element.id),
    newId = Math.max(...lastId) + 1,
    //newPanelName = (<HTMLInputElement>document.getElementById(texto)).value;
    newPanelName = texto;
    
    //console.log("pasó aquí");

    if (newPanelName != '')
    {

      //console.log("aquí también");

      //console.log(newPanelName);

      this.panels.push(
        {
          id: newId,
          title: newPanelName
        }
      );
      //console.log(this.panels);
      //(<HTMLInputElement>document.getElementById("2")).value = '';

      //(<HTMLInputElement>document.getElementById(texto)).value = "";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
