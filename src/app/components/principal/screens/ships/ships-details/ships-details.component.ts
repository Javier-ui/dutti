import { Component, OnInit, Input } from '@angular/core';
import { ShipModel } from '../_models/ship.model';
import { PaginationConfigModel } from './_models/pagination-config.model';
import { ShipDetailInterface } from './_interfaces/ship-detail.interface';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: Array<ShipModel>;
  config: PaginationConfigModel;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';
  @Input() bLoading: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.config = new PaginationConfigModel(5, 1, this.dataList.length)
  }

  getStarshipId(url: string): string {
    let urlSplit = url.split('/');
    this.shipId = urlSplit[urlSplit.length - 2];
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`
    return urlImage;
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  openDetails(details: ShipDetailInterface) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
