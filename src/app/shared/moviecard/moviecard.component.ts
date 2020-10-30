import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {
  @Input() cardProb: any;
  
  togglePop:string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  changeStyle($event){
    this.togglePop = $event.type == 'mouseover' ? 'active' : '';
  }
}
