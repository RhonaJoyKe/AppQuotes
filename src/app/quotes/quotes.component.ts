import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    new Quotes(1, 'Sansa Stark', 'The lone wolf dies but the pack survives','Rhonajoy',new Date(2021,10,4)),
    new Quotes(2,'Aria Stark','The lone wolf dies but the pack survives ','Rhonajoy',new Date(2021,10,4)),
    new Quotes(3,'Jon Snow','The lone wolf dies but the pack survives','Rhonajoy',new Date(2021,10,4)),
  ];
  toggleDetails(index: number){
    this.quote[index].showauthor = !this.quote[index].showauthor;
  }
  deleteQuote(isComplete: any, index:  number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete quote?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote: Quotes){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.createdDate = new Date(quote.createdDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
