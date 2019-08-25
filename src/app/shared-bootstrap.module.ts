import { NgModule } from '@angular/core';
import { CarouselModule, AccordionModule } from 'ngx-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    AccordionModule,
    DatepickerModule,
    BsDatepickerModule,
    CarouselModule
  ]
})
export class SharedBootstrapModule { }
