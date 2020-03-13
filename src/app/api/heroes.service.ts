import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url='http://localhost/api'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}/recuperartodos.php`);
  }

  alta(heroe) {
    return this.http.post(`${this.url}/alta.php`, (heroe));    
  }

  baja(id:number) {
    return this.http.get(`${this.url}/baja.php?id=${id}`);
  }
  
  seleccionar(id:number) {
    return this.http.get(`${this.url}/seleccionar.php?id=${id}`);
  }

  modificacion(heroe) {
    return this.http.post(`${this.url}/modificacion.php`, (heroe));    
  } 
}