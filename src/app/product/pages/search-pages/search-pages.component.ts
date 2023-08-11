import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.css']
})
export class SearchPagesComponent {

  public search= new FormControl();


  constructor() { }


}
