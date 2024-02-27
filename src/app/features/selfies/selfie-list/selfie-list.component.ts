import { Component, Input, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {

  lesSelfies : Selfie [] = [
    {image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1580754913362-2W7PYWOTKQRIOR7DVIMW/image-asset.jpeg', wookie:{nom:'Chewie', selfies:[]}, titre: "Un super selfie"},
    {image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1580754913362-2W7PYWOTKQRIOR7DVIMW/image-asset.jpeg', wookie:{nom:'Chewie2', selfies:[]}, titre:"Selfie de Ouff"}
  ];

  @Input()
  set filtre(valeur:String){
    console.log('SelfieListComponent', valeur);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
