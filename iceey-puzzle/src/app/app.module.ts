import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PuzzleComponent } from './puzzle.component';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    IndexComponent,
    PuzzleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class IceeyPuzzleModule { }
