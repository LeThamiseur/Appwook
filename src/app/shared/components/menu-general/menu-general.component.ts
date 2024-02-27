import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {
  @ViewChild('zoneRecherche',{static:false})
   maZoneRecherche: ElementRef | undefined;

  @Output()
   lancerRecherche: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  rechercher (){
    const valeurRecherchee=this.maZoneRecherche?.nativeElement.value;

    this.lancerRecherche.emit(valeurRecherchee);

  }
}
