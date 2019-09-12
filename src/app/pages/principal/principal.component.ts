import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  GenerarPDF(){
    const doc = new jsPDF();
    doc.fromHTML(document.getElementById('Solicitud'), 10, 10);
    doc.save('Solicitud');
  }

  ngOnInit() {
  }

}
