import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  annonce = {
    id : 0,
    image : '',
    title : '',
    description : '',
    price : 0
  }
  title = "Ajouter une annonce"
  constructor(private data : DataService, private monRouter: Router, private maRoute : ActivatedRoute) { }

  ngOnInit() {
    let id = this.maRoute.snapshot.params.id;
    if(id != undefined) {
      this.annonce = this.data.getListAnnonces().find((a)=>a.id == id);
      this.title = "Modifier une annonce";
    }
  }

  change = (event) => {
    this.annonce[event.target.getAttribute("name")] = event.target.value;
  }



  add = () => {
    if(this.annonce.id == 0) {
      this.data.addAnnonce(this.annonce);
    }
    else {
      this.data.updateAnnonce(this.annonce)
    }
    this.monRouter.navigate(["/"]);
  }

}
