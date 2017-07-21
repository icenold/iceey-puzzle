import { EventEmitter,Output,Component, OnInit,Input, ElementRef } from '@angular/core';
import { PuzzlePiece } from './puzzle-piece';

@Component({
  selector: 'app-index',
  template: `

<iceey-puzzle 
    #puzzle
    [imgUrl]="settings.imgUrl"
    [basicDimension]="settings.dimension"
    [puzzleLevel]="settings.level" >
</iceey-puzzle>

`
})
export class IndexComponent  {

  constructor(public elem:ElementRef) { }
  settings:any = {
    imgUrl:"/iceey-puzzle/assets/elephant.jpg",
    dimemsion:255,
    level:3
  };

  imageSources:any[] = [
    "/iceey-puzzle/assets/elephant.jpg",
    "/iceey-puzzle/assets/tiger.jpg",
    "/iceey-puzzle/assets/dolphin.jpg"
  ];

}
