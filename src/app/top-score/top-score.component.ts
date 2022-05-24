import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {

  @Input() equipoLocal: any = {};
  @Input() equipoVisitante: any = {};
  jugadores: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    // spread operator ...
    this.jugadores = [
      ...this.equipoLocal.jugadores, 
      ...this.equipoVisitante.jugadores
    ];
  }

  ngAfterContentChecked() {
    this.sortJugadores();
  }

  sortJugadores(): void {
    this.jugadores.sort((a: any, b: any) => {
      return (b.puntos - a.puntos);
    })
  }

}
