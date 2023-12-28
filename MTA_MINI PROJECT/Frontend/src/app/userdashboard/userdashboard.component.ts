import { Component } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  user:string ="";
  constructor(){}

  ngOnInit(): void{

    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.user=obj;
    }

  }

}
