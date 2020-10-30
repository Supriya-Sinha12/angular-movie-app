import { Component, OnInit } from '@angular/core';
import { GetmovielistService } from '../services/getmovielist.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieList:any;

  carousellist:any=[{
    "imagename": "Black Panther.jpg",
    "heading":"Black Panther",
    "description":"movie descriprion."
  },
  {
    "imagename": "793211.jpg",
    "heading":"Thor Ragnarok",
    "description":"PDeprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death."
  },
  {
    "imagename": "5919.jpg",
    "heading":"Avengers Endgame",
    "description":"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."
  }
]

  constructor(private getmovielistService: GetmovielistService) { }

  ngOnInit(): void {
    this.getmovielistService.getList('movielist').subscribe(data => { this.movieList =  data})
  }

}
