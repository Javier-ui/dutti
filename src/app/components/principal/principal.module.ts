import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { ShipsComponent } from './screens/ships/ships.component';
import { PageOneComponent } from './screens/page-one/page-one.component';
import { PageTwoComponent } from './screens/page-two/page-two.component';
import { ShipsDetailsComponent } from './screens/ships/ships-details/ships-details.component';

@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class PrincipalModule { }