import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search;
  constructor(private data : DataService) { }

  ngOnInit() {
  }

  change = (event) => {
    this.search = event.target.value
  }

  startSearch = () => {
    this.data.updateSearchValue(this.search);
  }

}
