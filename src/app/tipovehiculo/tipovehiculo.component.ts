import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-tipovehiculo',
  templateUrl: './tipovehiculo.component.html',
  styleUrls: ['./tipovehiculo.component.css']
})
export class TipovehiculoComponent {
  tipos = []
  selectedTipo;
  constructor(private api: ApiService){
    this.getTipoveh();
    this.selectedTipo = {id: -1, descripcion: '', estado: ''};
  }
  getTipoveh = () => {
    this.api.getAllTiposVeh().subscribe(

      data => {
        this.tipos = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  tipoClicked = (tipo) => {
    if(this.selectedTipo.id == tipo.id){
      this.selectedTipo = {id: -1, descripcion: '', estado: ''};
    }
    else {
      this.api.getOneTiposVeh(tipo.id).subscribe(

      data => {
        this.selectedTipo = data;
        console.log(tipo.id == this.selectedTipo.id);
      },
      error => {
        console.log(error);
      }
    )
    }

  }

  updateTipo = () => {
    this.api.updateTiposVeh(this.selectedTipo).subscribe(
      data => {
        this.selectedTipo = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  createTipo = () => {
    this.api.createTiposVeh(this.selectedTipo).subscribe(
      data => {
        this.tipos.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
