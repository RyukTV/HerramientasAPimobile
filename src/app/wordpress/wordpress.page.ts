import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {


  noticias: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias() {
    this.http.get<any[]>('https://www.rollingstone.com/wp-json/wp/v2/posts?per_page=3').subscribe((data: any[]) => {
      this.noticias = data.map(noticia => {
        return {
          titulo: noticia.title.rendered,
          resumen: noticia.excerpt.rendered,
          link: noticia.link
        };
      });
    });
  }


}
