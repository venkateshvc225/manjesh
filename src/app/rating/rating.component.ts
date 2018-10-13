import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() isRating: boolean = true;
  @Output() dummy = new EventEmitter();
  
  onClickRatingIcon(){
    this.isRating = !this.isRating;
    console.log("clicked");
    this.dummy.emit();
    console.log("Here also");
  }
  constructor() { }

  ngOnInit() {
  }

}
