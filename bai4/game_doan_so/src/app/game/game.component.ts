import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  isPlayingGame:boolean = false;
  numbers:number[] = [];
  point:number = 0;
  next:number = 1;
  timeleft:number = 0;
  timeStart:any = false;
  maxTime:number = 5;

  constructor() { }

  ngOnInit(): void {
    this.timeleft = this.maxTime;
    for( let i = 1; i <= 100; i++ ){
      this.numbers.push(i)
    }
    //xao tron mang
    this.numbers = this.shuffle(this.numbers);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    if( this.isPlayingGame == true ){
      if(!this.timeStart){
        this.timeStart  = setInterval( () => {
          this.timeleft--;
        }, 1000 )
      }
    }
    // chay khi co du lieu thay doi
    console.log( this.isPlayingGame )
    console.log('ngDoCheck');

    if( this.isPlayingGame == true ){
      if( this.timeleft <= 0 ){
        this.resetGame();
      }
    }

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  resetGame():void {
    alert('Game Over');
    this.isPlayingGame = false;
    this.next = 1;
    this.point = 0;
    this.timeleft = this.maxTime;
    clearInterval(this.timeStart);
    this.timeStart = null;
  }

  playGame():void {
    this.isPlayingGame = true;
  }

  endGame():void {
    this.resetGame();
  }

  play(number:number):void {
    if( number == this.next ){
      this.next++;
      //cong diem
      this.point++;
      //xao tron
      //xao tron mang
      this.numbers = this.shuffle(this.numbers);
    }else{
      this.resetGame();
    }
  }

  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  setTime(value:any){
    this.timeleft= value;


  }

}
