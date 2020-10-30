import { Component, OnInit } from '@angular/core';
import { GetmovielistService } from '../services/getmovielist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieList:any 

  carousellist:any= [{
    "imagename": "37281.jpg",
    "heading":"Hulk",
    "description":"The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics."
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

   this.getmovielistService.getList('all').subscribe(data => { this.movieList =  data})
   
  }
}
