import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    new Quotes(1, 'Sansa Stark', 'The lone wolf dies but the pack survives','Rhonajoy'),
    new Quotes(2,'Aria Stark','The lone wolf dies but the pack survives ','Rhonajoy'),
    new Quotes(3,'Jon Snow','The lone wolf dies but the pack survives','Rhonajoy'),
  ];
  toggleDetails(index: number){
    this.quote[index].showauthor = !this.quote[index].showauthor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
