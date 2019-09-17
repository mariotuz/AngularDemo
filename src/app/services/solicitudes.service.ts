import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitudes } from '../interfaces/solicitudes';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  jsonSoli: Solicitudes[] = [];
  cargando = true;

  constructor( private http: HttpClient) {
  }

  getData(search: string) {
    this.jsonSoli = [];
    this.http.get('assets/data/data-demo-solicitudes.json')
    .subscribe( (resp: Solicitudes[]) => {
      if (search &&  search !== '') {
        resp.forEach( prod => {
          if ( prod.Solicitante.indexOf( search ) >= 0 ){
            this.jsonSoli.push( prod );
          }
        });
      } else {
        this.jsonSoli = resp ;
      }
      this.cargando = false;
    });
  }
}
