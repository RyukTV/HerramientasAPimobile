import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima/Api';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  ciudad = 'Santo Domingo';
  clima: any;


  constructor(private climaService: ClimaService) { }

  ngOnInit() {
    this.obtenerClima();
  }

  obtenerClima() {
    this.climaService.obtenerClima(this.ciudad).subscribe(data => {
      this.clima = data;
    });
  }


}
