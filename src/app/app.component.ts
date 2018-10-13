import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onRatingChanged(){
    alert("jegfjhewf");
    console.log("Rating changed");
  }  
  post = {
    Title: "rating application",
    isRating: true
  } 
}
