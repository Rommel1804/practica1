import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   resultado: string="-";
   num1: string="";
   num2: string="";
  
   constructor(private router:Router) {}
  
   calcular(){
    this.resultado=(parseInt(this.num1)+parseInt(this.num2)).toString();

  }


  login() {
    this.router.navigate(["/login"]);
  }

  
}
