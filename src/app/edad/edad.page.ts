import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  nombre: string="";
  edad: number=0;
  estado: string="";
  constructor(private http: HttpClient) { }


  determinarEdad() {
    this.http.get<any>('https://api.agify.io/?name=' + this.nombre).subscribe(data => {
      this.edad = data.age;
      if (this.edad < 30) {
        this.estado = 'joven';
      } else if (this.edad >= 30 && this.edad < 60) {
        this.estado = 'adulto';
      } else {
        this.estado = 'anciano';
      }
    });
  }



  ngOnInit() {
  }

}
