import { EventEmitter,Output,Component, OnInit,Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-index',
  styles:[`.description tr td{ border-top:solid 1px black; padding:5px }`],
  template: `

<div [style.text-align]="'center'" >
  <iceey-puzzle 
      #puzzle
      [imgUrl]="settings.imgUrl"
      [basicDimension]="settings.dimension"
      [puzzleLevel]="settings.level"
      (puzzleClick)="console.log($event)" >
  </iceey-puzzle>
</div>

<table class="description">
  <tr>
    <td>
      <label>Input: [imgUrl]</label>
      <select [(ngModel)]="settings.imgUrl" >
        <option *ngFor="let i of imageSources" [value]="i" >{{i.replace('/iceey-puzzle','').replace('/assets/','')}}</option>
      </select>    
    </td>
  </tr>
  <tr>
    <td>
      <label>Input: [basicDimension]</label>
      <input type="number" [(ngModel)]="settings.dimension" min="200" >
    </td>
  </tr>
  <tr>
    <td>
      <label>Input: [puzzleLevel]</label>
      <input type="number" [(ngModel)]="settings.level" min="3" >
    </td>
  </tr>
  <tr>
    <td>
      Output: (puzzleClick) - Fires an $event. Emits true when the puzzle is completed. See console window
    </td>
  </tr>
  <tr>
    <td>
      Method: <button (click)="puzzle.shuffle()" >shuffle()</button> - Shuffle puzzle pieces
    </td>
  </tr>
  <tr>
    <td>
      Method: <button (click)="puzzle.arrange()" >arrange()</button> - Arrange puzzle pieces
    </td>
  </tr>
</table>


`
})
export class IndexComponent  {

  constructor(public elem:ElementRef) { }
  console = console;
  imageSources:any[] = window.location.href.includes("github")?
    [
      "/iceey-puzzle/assets/elephant.jpg",
      "/iceey-puzzle/assets/tiger.jpg",
      "/iceey-puzzle/assets/eagle.jpg"
    ]:
    [
      "/assets/elephant.jpg",
      "/assets/tiger.jpg",
      "/assets/eagle.jpg"
    ];

  settings:any = {
    imgUrl:this.imageSources[0],
    dimension:255,
    level:3
  };

  // imageSources:any[] = [
  //   "/iceey-puzzle/assets/elephant.jpg",
  //   "/iceey-puzzle/assets/tiger.jpg",
  //   "/iceey-puzzle/assets/dolphin.jpg"
  // ];
  

}
