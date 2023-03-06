import { Component, OnInit } from '@angular/core';
import { ServiceResponseInterface } from './_services/_interfaces/service-response.interface';
import { ShipModel } from './_models/ship.model';
import { ShipsService } from './_services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Array<ShipModel> = [];
  public bLoading = true;
  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.getShips(1);
  }

  private getShips(pageNumber: number) {
    this.shipsService.getShips(pageNumber).subscribe((result: ServiceResponseInterface) => {
      console.log(result);
      this.dataList = this.dataList.concat(result.results);
      if (result.next !== null) {
        this.getShips(++pageNumber);
      } else {
        this.bLoading = false;
      }
      console.log('SHIPS -->', this.dataList);
    });
  }
}
