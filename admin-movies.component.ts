import { Component, OnInit } from '@angular/core';

import { Movies } from '../_model';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {
 // email:any;
  constructor() { }

  ngOnInit(): void {
  }

  goback()
  {
    
  //  this.pathhome("http://localhost:4200/movies");
  }

}
