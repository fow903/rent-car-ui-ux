import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import {Globals} from "./globals";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private api:ApiService){

  }

}
