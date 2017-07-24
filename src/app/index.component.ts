import { EventEmitter,Output,Component, OnInit,Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-index',
  styles:[`.description tr td{ border-top:solid 1px black; padding:3px }`],
  template: `


<p>Installation</p>
<pre><code>npm install iceey-puzzle</code></pre>
<br>
<p>Add Iceey Puzzle to your root module</p>
<pre>
  <code>
    {{"import { IceeyPuzzleModule } from 'iceey-puzzle';"}}

    imports: [
      ...
      IceeyPuzzleModule
    ]
  </code>
</pre>
<br>
<div [style.text-align]="'center'" >
  <iceey-puzzle 
      #puzzle
      [imgUrl]="settings.imgUrl"
      [basicDimension]="settings.dimension"
      [puzzleLevel]="settings.level"
      [delay]="settings.delay"
      (puzzleClick)="console.log($event)" >
  </iceey-puzzle>
</div>
<br>
<p>Usage</p>
<pre><code>{{usage}}</code></pre>
<table class="description">
  <tr>
    <td>
      <pre><code>{{imgUrlUsage}}</code></pre>
    </td>
    <td>
      <select [(ngModel)]="settings.imgUrl" >
        <option *ngFor="let i of imageSources" [value]="i" >{{i.replace('/iceey-puzzle','').replace('/assets/','')}}</option>
      </select>        
    </td>
  </tr>
  <tr>
    <td>
      <pre><code>{{basicDimensionUsage}}</code></pre>
    </td>
    <td>
      <input type="number" [(ngModel)]="settings.dimension" min="200" >      
    </td>
  </tr>
  <tr>
    <td>
      <pre><code>{{puzzleLevelUsage}}</code></pre>
    </td>
    <td>
      <input type="number" [(ngModel)]="settings.level" min="3" >
    </td>
  </tr>
  <tr>
    <td>
      <pre><code>{{delayUsage}}</code></pre>
    </td>
    <td>
      <input type="number" [(ngModel)]="settings.delay" step="0.1" >
    </td>    
  </tr>
  <tr>
    <td>
      <pre><code>{{puzzleClickUsage}}</code></pre>
    </td>
    <td>Fires $event. Emits true when the puzzle is completed. See console window</td>
  </tr>
  <tr>
    <td>
      <pre><code>{{shuffleUsage}}</code></pre>
    </td>
    <td><button (click)="puzzle.shuffle()" >Everyday I'm shufflin</button></td>
  </tr>
  <tr>
    <td>
      <pre><code>{{arrangeUsage}}</code></pre>
    </td>
    <td>
     <button (click)="puzzle.arrange()" >Arrange it!</button>
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
    level:3,
    delay:0.5
  };
  usage = `<iceey-puzzle></iceey-puzzle>`;
  imgUrlUsage = `<iceey-puzzle [imgUrl]="<string>" ></iceey-puzzle>`;
  basicDimensionUsage = `<iceey-puzzle [basicDimensionUsage]="<number>" ></iceey-puzzle>`;
  puzzleLevelUsage = `<iceey-puzzle [puzzleLevel]="<number>" ></iceey-puzzle>`;
  delayUsage = `<iceey-puzzle [delay]="<number>" ></iceey-puzzle>`;
  puzzleClickUsage = `<iceey-puzzle (puzzleClick)="doSomething($event)" ></iceey-puzzle>`;
  shuffleUsage = `<iceey-puzzle #myPuzzle ></iceey-puzzle>
<button (click)="myPuzzle.shuffle()" >Everyday I'm shufflin<button>`;
  arrangeUsage = `<iceey-puzzle #myPuzzle ></iceey-puzzle>
<button (click)="myPuzzle.arrange()" >Arrange it!<button>`;
  // imageSources:any[] = [
  //   "/iceey-puzzle/assets/elephant.jpg",
  //   "/iceey-puzzle/assets/tiger.jpg",
  //   "/iceey-puzzle/assets/dolphin.jpg"
  // ];
  

}
