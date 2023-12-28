import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  user:string ="";
  constructor(){}

  ngOnInit(): void{

    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.user=obj;
    }

  }

}
