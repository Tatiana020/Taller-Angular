import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series : Array<Serie> = [];
  promedioTemporadas: number = 0; 
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.promedioTemporadas = this.getPromedioSeasons(this.series);
    });
  }
  ngOnInit() {
    this.getSeries();
  }
  getPromedioSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons= totalSeasons + serie.seasons);
    return totalSeasons / series.length;
  }
}