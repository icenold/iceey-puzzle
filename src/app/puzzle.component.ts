import { EventEmitter,Output,Component, OnInit,Input, ElementRef } from '@angular/core';

@Component({
  selector: 'iceey-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent  {

  constructor(public elem:ElementRef) { }
  
  @Output() puzzleClick:EventEmitter<any> = new EventEmitter<any>();
  @Input() delay:number = .5;
  @Input() imgUrl:string;
  @Input() puzzleLevel:number = 3;
  ngOnChanges(changes: any) {
    this.beginPuzzle();
  }
  @Input() basicDimension:number;

  puzzlePieces:PuzzlePiece[] = [];
  
  jsonCorrectPositions:string;

  ngOnInit() {
    this.beginPuzzle();
  }
  beginPuzzle(){
    this.assignPieces();
    this.shuffle();
  }
  private assignPieces(){
    this.puzzlePieces = [];
    for(var y = 0; y<this.puzzleLevel; y++){
      for(var x = 0; x<this.puzzleLevel; x++){
        var p = new PuzzlePiece();
        p.correct_x = x;
        p.correct_y = y;
        p.current_x = x;
        p.current_y = y;
        this.puzzlePieces.push(p);
      }
    }
    this.puzzlePieces[(this.puzzleLevel*this.puzzleLevel)-1].isBlankPiece = true;
    this.jsonCorrectPositions = JSON.stringify(this.puzzlePieces);
  }
  switchWithBlank(clickedPiece:PuzzlePiece){
    var blankPiece:PuzzlePiece = this.puzzlePieces[this.puzzlePieces.length-1];
    var sameX = clickedPiece.current_x == blankPiece.current_x && (clickedPiece.current_y+1==blankPiece.current_y || clickedPiece.current_y-1==blankPiece.current_y);
    var sameY = clickedPiece.current_y == blankPiece.current_y && (clickedPiece.current_x+1==blankPiece.current_x || clickedPiece.current_x-1==blankPiece.current_x);
    if(sameX || sameY){
      var blankX = blankPiece.current_x;
      var blankY = blankPiece.current_y;
      blankPiece.current_x = clickedPiece.current_x;
      blankPiece.current_y = clickedPiece.current_y;
      clickedPiece.current_x = blankX;
      clickedPiece.current_y = blankY;
      var isComplete:boolean = this.jsonCorrectPositions==JSON.stringify(this.puzzlePieces);
      this.puzzleClick.emit(isComplete);
    }
  }
  getRelativePosition(index:number, _x:number, _y:number){
    var x = _x*(this.basicDimension/this.puzzleLevel);
    var y = _y*(this.basicDimension/this.puzzleLevel);
    return{
      x:x,
      y:y
    };
  }
  public arrange(){
    this.puzzlePieces.forEach(p=>{
      p.current_x = p.correct_x;
      p.current_y = p.correct_y;
    });
    //this.puzzlePieces=JSON.parse(this.jsonCorrectPositions);
  }
  public shuffle(){
    var pieceSetter:PuzzlePiece[] = JSON.parse(JSON.stringify(this.puzzlePieces));
    ////console.log(pieceSetter);
    for(var ctr=0; ctr<this.puzzlePieces.length; ctr++){
      var randomIndex = this.randomIntFromInterval(0,pieceSetter.length-1);
      var removedPiece = pieceSetter.splice(randomIndex,1)[0];
      this.puzzlePieces[ctr].current_x = removedPiece.correct_x;
      this.puzzlePieces[ctr].current_y = removedPiece.correct_y;
    }
  }
  getBoardPossition(){
    return {
      x:this.elem.nativeElement.querySelector('#puzzleBoard').offsetLeft,
      y:this.elem.nativeElement.querySelector('#puzzleBoard').offsetTop
    };
  }
  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
};
class PuzzlePiece {
    correct_x:number;
    correct_y:number;
    current_x:number;
    current_y:number;
    isBlankPiece:boolean;
}
