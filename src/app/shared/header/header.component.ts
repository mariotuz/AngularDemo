import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../../services/configuracion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  config = [];
  constructor(public siste: ConfiguracionService) {   this.config = siste.sistemasConfig;
  }
  ngOnInit() {
  }

}
