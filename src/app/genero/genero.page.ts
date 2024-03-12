import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  nombre: string = "";
  genero: string = "";
  color: string = "";


  constructor(private http: HttpClient) { }

  idengenero(){
    this.http.get<any>('https://api.genderize.io/?name='+ this.nombre).subscribe(data => {
    this.genero = data.gender;

    if(this.genero === 'male') {
      this.color = 'blue';
    }else{
      this.color = 'pink'
    }
    });

  }


  ngOnInit() {
  }

}
