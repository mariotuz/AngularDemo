import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Solicitudes } from 'src/app/interfaces/solicitudes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor( public jsonSolicitudes: SolicitudesService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params
      .subscribe( params => {
        console.log(params.search);
        this.jsonSolicitudes.getData(params.search);
      });
  }
}
