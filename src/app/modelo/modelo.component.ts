import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Globals} from "../globals";

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent {
  title = "Modelos"
  modelos = []
  marcas = []
  selectedModelo;
  constructor(private api: ApiService, private globals:Globals){
    this.getModelo();
    this.api.getAllMarcas().subscribe(

      data => {
        // this.globals.marcas = data;
        this.marcas = data;
      },
      error => {
        console.log(error);
      }
    );
    this.selectedModelo = {id: -1, descripcion: '', estado: '', marca:''};
  }
  getModelo = () => {
    this.api.getAllModelos().subscribe(

      data => {
        this.modelos = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  modeloClicked = (modelo) => {
    if(this.selectedModelo.id == modelo.id){
      this.selectedModelo = {id: -1, descripcion: '', estado: '', marca:''};
    }
    else {
      this.api.getOneModelo(modelo.id).subscribe(

      data => {
        this.selectedModelo = data;
        console.log(this.selectedModelo.marca.descripcion);
        console.log(modelo.id == this.selectedModelo.id);
      },
      error => {
        console.log(error);
      }
    )
    }

  }

  updateModelo = () => {
    this.api.updateModelo(this.selectedModelo).subscribe(
      data => {
        this.selectedModelo = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  createModelo = () => {
    this.api.createModelo(this.selectedModelo).subscribe(
      data => {
        this.modelos.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
