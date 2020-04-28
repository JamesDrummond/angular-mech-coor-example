import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTabsModule, MatTableModule, MatIconModule, MatExpansionModule, MatCheckboxModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    MatTabsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    DragDropModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
