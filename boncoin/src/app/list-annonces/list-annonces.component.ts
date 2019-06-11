import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {
  listAnnonces = [];

  constructor(private data : DataService, private monRouter : Router) { }

  ngOnInit() {
    this.listAnnonces = this.data.getListAnnonces();
    this.data.searchValueSubjet.subscribe((newValue)=> {  
    this.listAnnonces = this.data.getListAnnonces().filter((a)=>a.title.includes(newValue));
    //  this.listAnnonces = []
    //  for(let a of this.data.getListAnnonces()) {
    //    if(a.includes(newValue)) {
    //      this.listAnnonces.push(a);
    //    }
    //  }
    })
  }

  getInforFromChild = (event) => {
    alert("merci j'ai eu l'information : "+event.title)
  }

  deleteAnnonce = (event) => {
    this.data.deleteAnnonce(event);
    this.listAnnonces = this.data.getListAnnonces();
  }

  updateAnnonce = (annonce) => {
    this.monRouter.navigate(['/add',annonce.id]);
  }

}
