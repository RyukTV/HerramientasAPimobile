import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: '/menu', icon: 'menu'},
    { title: 'Predecir genero', url: '/genero', icon: 'body' },
    { title: 'Mostrar edad', url: '/edad', icon: 'people' },
    { title: 'Lista de universidades', url: '/unisearch', icon: 'business' },
    { title: 'Clima actual', url: '/clima', icon: 'cloudy' },
    { title: 'Ultimas Noticias', url: '/wordpress', icon: 'flame' },
    { title: 'Acerca de', url: '/about', icon: 'person' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
