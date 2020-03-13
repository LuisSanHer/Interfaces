import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  heroes=null;
  
  hero={
    id:null,
    nombre:null,
    raza:null,
    descripcion: null,
    imagen: null
  }

  constructor(private HeroesService: HeroesService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.HeroesService.recuperarTodos().subscribe(result => this.heroes = result);
  }

  alta() {
    this.HeroesService.alta(this.hero).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(id) {
    this.HeroesService.baja(id).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.HeroesService.modificacion(this.hero).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(id) {
    this.HeroesService.seleccionar(id).subscribe(result => this.hero = result[0]);
  }

  hayHeroes() {
    return true;
  } 

}