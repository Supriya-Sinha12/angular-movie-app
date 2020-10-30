import { Component, OnInit } from '@angular/core';
import { GetmovielistService } from '../services/getmovielist.service';

@Component({
  selector: 'app-web-series',
  templateUrl: './web-series.component.html',
  styleUrls: ['./web-series.component.css']
})
export class WebSeriesComponent implements OnInit {
  movieList:any 
  carousellist:any=[{
    "imagename": "seriescarousel.jpg",
    "heading":"Arrow",
    "description":"TV show description."
  },
  {
    "imagename": "lukecage.jpg",
    "heading":"Luke Cage",
    "description":"PDeprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death."
  },
  {
    "imagename": "TVShow4.jpg",
    "heading":"TV Series",
    "description":"Series Description"
  }
]


  constructor(private getmovielistService: GetmovielistService) { }

  ngOnInit(): void {
    this.getmovielistService.getList('webseries').subscribe(data => { this.movieList =  data})
  }


}
