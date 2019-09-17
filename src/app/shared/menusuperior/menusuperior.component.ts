import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menusuperior',
  templateUrl: './menusuperior.component.html',
  styleUrls: ['./menusuperior.component.css']
})
export class MenusuperiorComponent implements OnInit {

  constructor(public jsonSolicitudes: SolicitudesService, private router: Router ) { }

  ngOnInit() {
  }

  buscarSolicitante(nombre: string) {
    if ( nombre.length < 1) {
      this.router.navigate(['/solicitudes']);
    }

    this.router.navigate(['/solicitudes', nombre]);
  }
}
