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
    this.http.get('assets/data/data-demo-solicitudes.json')
      .subscribe( (resp: Solicitudes[]) => {
        this.jsonSoli = resp ;
        this.cargando = false;
      });
   }
}
