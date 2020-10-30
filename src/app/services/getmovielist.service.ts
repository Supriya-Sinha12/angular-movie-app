import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import allList from '../../assets/all.json';
import movielist from '../../assets/movielist.json';
import seriesList from '../../assets/webseries.json';

@Injectable({
  providedIn: 'root'
})
export class GetmovielistService {

  constructor(private http: HttpClient) {

    
  }
  // Make the HTTP request:



           
  getList(a): any {
    return  this.http.get('http://localhost:4200/assets/'+a+'.json')
  }
}

let abc = "kumar"
"pawan"+abc+"Soni"
