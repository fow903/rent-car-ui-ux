import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import { Globals } from "../globals";
import { endpoints } from "../shared/endpoints";

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent{
  title = "Marcas";
  marcas = [];
  selectedMarca;

  constructor(private api: ApiService, private globals: Globals){
    this.getMarca();
    this.selectedMarca = {id: -1, descripcion: '', estado: ''};
  }
  getMarca = () => {
    this.api.getAll(endpoints.marcas).subscribe(

      data => {
        this.marcas = data;
      },
      error => {
        console.log(error);
      }
    )
  };

  marcaClicked = (marca) => {
    if(this.selectedMarca.id == marca.id){
      this.selectedMarca = {id: -1, descripcion: '', estado: ''};
    }
    else {
      this.api.getOne(marca.id,endpoints.marcas).subscribe(

      data => {
        this.selectedMarca = data;
        console.log(marca.id == this.selectedMarca.id);
      },
      error => {
        console.log(error);
      }
    )
    }

  };

  updateMarca = () => {
    this.api.update(this.selectedMarca, endpoints.marcas).subscribe(
      data => {
        this.selectedMarca = data;
      },
      error => {
        console.log(error);
      }
    )
  };
  createMarca = () => {
    this.api.create(this.selectedMarca,endpoints.marcas).subscribe(
      data => {
        this.marcas.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
