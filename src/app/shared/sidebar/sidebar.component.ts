import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent  {

  private _historial:string[]=[];

  constructor(private gifsService:GifsService) { }

  get historial(){
    return this.gifsService.historia;
  }

  buscar(item:string){
    this.gifsService.buscarGifs(item);
  }


  


}
