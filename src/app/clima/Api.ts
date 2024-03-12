import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class ClimaService {
  
    apiKey = 'ae8cbefdc1f57c87c3f47e6008d1b474';
  
    constructor(private http: HttpClient) { }
  
    obtenerClima(ciudad: string) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}`;
      return this.http.get(url);
    }
  }