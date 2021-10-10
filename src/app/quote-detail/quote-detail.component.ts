import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Input()
  quote!: Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
