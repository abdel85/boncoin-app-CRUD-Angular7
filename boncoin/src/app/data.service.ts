import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  searchValue;

  searchValueSubjet = new Subject<String>()

  constructor() { }

  updateSearchValue =(value)=> {
    this.searchValue = value;
    this.searchValueSubjet.next(this.searchValue);
  }

  
  getListAnnonces =() => {
    return (JSON.parse(localStorage.getItem("annonces")) != null) ? JSON.parse(localStorage.getItem("annonces")).reverse() : []
  }

  addAnnonce = (annonce) => {
    let maxId = (this.getListAnnonces()[0] == undefined) ? 0 : this.getListAnnonces()[0].id;
    this.getListAnnonces().forEach(element => {
      if(element.id > maxId) {
        maxId = element.id;
      }
    });
    annonce.id = maxId + 1;
    let liste = this.getListAnnonces();
    liste.push(annonce);
    localStorage.setItem("annonces", JSON.stringify(liste)); 
  }

  updateAnnonce = (annonce) => {
    let liste = this.getListAnnonces();
    liste.forEach(a => {
      if(a.id == annonce.id) {
        a.image = annonce.image;
        a.title = annonce.title;
        a.price = annonce.price;
        a.description = annonce.description
      }
    })
    localStorage.setItem("annonces", JSON.stringify(liste)); 
  }

  deleteAnnonce = (annonce) => {
    let liste = this.getListAnnonces();
    liste.splice(liste.findIndex(a=>a.id == annonce.id),1);
    localStorage.setItem("annonces", JSON.stringify(liste));
  }

}
