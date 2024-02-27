import { Component, Input, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-read-only',
  templateUrl: './selfie-read-only.component.html',
  styleUrls: ['./selfie-read-only.component.css']
})
export class SelfieReadOnlyComponent implements OnInit {

  @Input()
  public unSelfie: Selfie | undefined ;


  constructor() { }

  ngOnInit(): void {
  }

}
