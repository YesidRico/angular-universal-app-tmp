import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PostService } from '../../shared/services/post/post.service';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule
]

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    PostService
  ],
  declarations: [HomeComponent, MyDashboardComponent]
})
export class HomeModule { }
