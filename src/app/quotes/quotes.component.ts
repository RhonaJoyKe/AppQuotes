import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[] = [
    {id:1, author:'Watch finding Nemo',createdby:'Joy'},
    {id:2,author:'Buy Cookies',createdby:'Joy'},
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
