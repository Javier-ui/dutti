import { Component, OnInit, Input } from '@angular/core';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.dataList.length
    };
  }

  getStarshipId(url: string): string {
    let urlSplit = url.split('/');
    this.shipId = urlSplit[urlSplit.length - 2];
    console.log()
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`
    return urlImage;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
