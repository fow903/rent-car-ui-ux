import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Globals} from "../globals";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { endpoints } from "../shared/endpoints";

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css'],
  animations: [
     trigger('fade',[
        transition('void => *',[
          style({opacity: 0}),
          animate(2000)
        ]),

       transition('* => void',[
          style({opacity: 1}),
          animate(2000)
        ])
     ])

  ]
})
export class ModeloComponent {
  title = "Modelos";
  modelos = [];
  marcas = [];
  marcas2 = [];
  selectedModelo;
  selectedMarca = {id: -1, descripcion: '', estado: ''};
  constructor(private api: ApiService, private globals:Globals){
    this.getModelo();
    this.getMarcas();
    this.selectedModelo = {id: -1, descripcion: '', estado: '', marca:-1};
  }
  getMarcas = () => {
     return this.api.getAll(endpoints.marcas).subscribe(

      data => {
        this.marcas =  data;
        this.marcas2 =  data;
        console.log(this.marcas);
        console.log(this.marcas2);
      },
      error => {
        console.log(error);
      }
    );
  };
  getModelo = () => {
    this.api.getAll(endpoints.modelos).subscribe(

      data => {
        this.modelos = data;
      },
      error => {
        console.log(error);
      }
    )
  };

  modeloClicked = (modelo) => {
    if(this.selectedModelo.id == modelo.id){
      this.selectedModelo = {id: -1, descripcion: '', estado: '', marca:-1};
    }
    else {
      this.api.getOne(modelo.id, endpoints.modelos).subscribe(

      data => {
        this.selectedModelo = data;
        console.log(this.marcas);
        console.log(this.marcas2);
        var marca = this.marcas.find(x => x.id = modelo.marca);
        this.selectedMarca = marca;
        // console.log(this.selectedModelo.marca.descripcion);
        // console.log(modelo.id == this.selectedModelo.id);
      },
      error => {
        console.log(error);
      }
    )
    }

  };

  updateModelo = () => {
    this.api.update(this.selectedModelo, endpoints.modelos).subscribe(
      data => {
        this.selectedModelo = data;
      },
      error => {
        console.log(error);
      }
    )
  };
  createModelo = () => {
    this.selectedModelo.marca = this.selectedMarca.id;
    this.api.create(this.selectedModelo, endpoints.modelos).subscribe(
      data => {
        this.modelos.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
