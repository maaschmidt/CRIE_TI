class Point{
  x: number = 10;
  y: number = 20;

  constructor(x: number, y:number){
    this.x = x;
    this.y = y
  }
}

function printCoord2(pt: Point){
  console.log(`X= ${pt.x}`)
  console.log(`Y= ${pt.y}`)
}

const point: Point = new Point( 100, 200 );

printCoord2(point);