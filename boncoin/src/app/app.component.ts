import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boncoin';
  constructor(private data : DataService, private monRouter : Router) {
   
  }
  start = () => {
    this.data.updateSearchValue("");
    this.monRouter.navigate(["/"])
  }
}
