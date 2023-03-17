import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectionComponent
  ]
})
export class SharedModule { }
