import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Universidad {
  name: string;
  domains: string;
  web_pages: string;
}


@Component({
  selector: 'app-unisearch',
  templateUrl: './unisearch.page.html',
  styleUrls: ['./unisearch.page.scss'],
})
export class UnisearchPage implements OnInit {

  pais: string ="";
  universidades: Universidad[] = [];
  
  constructor(private http: HttpClient) { }

  buscarUniversidades() {
    this.http.get<Universidad[]>('http://universities.hipolabs.com/search?country=' + this.pais).subscribe(data => {
      console.log('Datos de universidades recibidos:', data);
      this.universidades = data;
    });
  }

  ngOnInit() {
  }

}
