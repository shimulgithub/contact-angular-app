import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    UpdateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ListComponent
    },
    {
      path: 'add',
      component: AddComponent
    },
    {
      path: 'update',
      component: UpdateComponent
    },
    {
      path: 'detail',
      component: DetailComponent
    }
  ])
  ]
})
export class ContactModule { }
