import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ConfiguracionService } from '../../services/configuracion.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public siste: ConfiguracionService) { 
    console.log(siste);
  }

  GenerarPDF() {
    const doc = new jsPDF();
    doc.fromHTML(document.getElementById('Solicitud'), 10, 10);
    doc.save('Solicitud');
  }

  ngOnInit() {
  }

}
