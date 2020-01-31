import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthenticatedLayoutComponent } from './layout/unauthenticated-layout/unauthenticated-layout.component';
import { AuthenticatedLayoutComponent } from './layout/authenticated-layout/authenticated-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [UnauthenticatedLayoutComponent, AuthenticatedLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
