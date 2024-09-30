import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListstudentsRoutingModule } from './liststudents-routing.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListstudentsRoutingModule,
    MatTableModule
  ]
})
export class ListstudentsModule { }
