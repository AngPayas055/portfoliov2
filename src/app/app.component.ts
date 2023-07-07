import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-v2';
  intro:boolean = true
  divClassName:string = "scale-display"
  
  ngOnInit(): void {
    setTimeout(() => {
      this.divClassName = "scale-display--reversed"
    }, 2500);
    setTimeout(() => {
      this.intro = false
    }, 3000);
  }
}
