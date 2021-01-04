import { Component, OnInit } from '@angular/core';
import { Movies } from '../_model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movies[]=[];
  Id_delete:any
  constructor() { }

  ngOnInit(): void {
  }
  reset()
  {
    this.movies;
  }

  add()
  {
    // let data = '{ "movies" : [' +
    // '{ "id":"1","Name":"mission imposible 1" , "ticket_price":"200" , "image":"pathh" , "year_of_release":"2008" ,"createdBy" :"teamA" ,"updatedBt":"teamA"},' +
    // '{"id":"2","Name":"hacker" , "ticket_price":"250" , "image":"pathh" , "year_of_release":"2011" ,"createdBy" :"teamA" ,"updatedBt":"teamA" },' +
    // '{ "id":"3","Name":"paa" , "ticket_price":"300" , "image":"pathh" , "year_of_release":"2014" ,"createdBy" :"teamA" ,"updatedBt":"teamA" } ]}';
      
    // var obj=JSON.parse(data);

    this.movies.forEach(element => {
      element.name;
      alert("Sucessfully added movie");
    });
  }

  update()
  {
     
  }
  deletes()
  {
  //   // if(Movies.id === this.Id_delete){
  //   //   $deleteid="id "

  //   }
    document.getElementById("movies").innerHTML = this.movies.toString();
  }


 
}
