import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';


const routes : Routes = [
  {path:"", component: HomeComponent},
  {path:"add", component: AddAnnonceComponent},
  {path:"add/:id", component: AddAnnonceComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListAnnoncesComponent,
    AnnonceComponent,
    AddAnnonceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
