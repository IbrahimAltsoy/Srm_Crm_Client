import { Component } from '@angular/core';
// declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SF03_CRM';
}

// $.get("https://localhost:8080/api/Customers?Page=5&Size=10", (datas: any)=>{
//   console.log(datas)
// });
