import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsResponse, Gifs } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial :string[]=[];
  private apiKey     :string='MsfWOLGE9KFpC8FT6IcI0hkyWIXptMcI';
  private urlService :string='https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) { 
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
    this.resulatdos=JSON.parse(localStorage.getItem('resultados')!) || [];
    // if(localStorage.getItem('historial')){
    //   this._historial=JSON.parse(localStorage.getItem('historial')!);

    // }
  }




  public resulatdos:Gifs[]=[];

  get historia(){

    return [...this._historial]
  }

  

  buscarGifs(query:string){
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));

    }
    const params= new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','50')
      .set('q',query);

    this.http.get<GifsResponse>(`${this.urlService}/search`,{params})
      .subscribe(resp=>{
        this.resulatdos=resp.data;
        localStorage.setItem('resultados',JSON.stringify(this.resulatdos));

        
      });
 
  }


}
