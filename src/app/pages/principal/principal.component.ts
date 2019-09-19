import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ConfiguracionService } from '../../services/configuracion.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  sisCurrent = [];

  constructor(public siste: ConfiguracionService, private route: ActivatedRoute) {

    this.route.params
      .subscribe( parametros => {
        this.sisCurrent = siste.getData(parametros.Propiedad);
      });
  }

  GenerarPDF() {
    const doc = new jsPDF();
    doc.fromHTML(document.getElementById('Solicitud'), 10, 10);
    doc.save('Solicitud');
  }

  ngOnInit() {
  }

}
