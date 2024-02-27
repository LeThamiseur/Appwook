import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookies';
  subTitle = 'La super application';
  logoAffiche = true;
  valArech = '';

  rechercherSelfies(valeur:string){
    console.log('AppComponent',valeur);
    this.valArech = valeur;
  };
}
