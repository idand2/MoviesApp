import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'
import  { MatExpansionModule }from '@angular/material/expansion'


const MaterialComponents = [
  MatSliderModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  FlexLayoutModule,
  MatIconModule,
  MatExpansionModule
  
]


@NgModule({
  imports: [MatSliderModule,MatCardModule,
    MatButtonModule,MatGridListModule,
    FlexLayoutModule,MatIconModule,
    MatExpansionModule],
  exports: [MatSliderModule,MatCardModule,
    MatButtonModule,MatGridListModule,
    FlexLayoutModule,MatIconModule,
    MatExpansionModule]
})
export class MaterialModule { }
