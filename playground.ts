
const multiply = (a: number, b: number, printText: string) =>{
  console.log(printText, a*b );
}
multiply(2, 2, 'Hey there');

type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b:number, op: Operation) => {
  if (op ==='multiply'){
    return a*b
  }
  else if (op ==='add'){
    return (a+b)
  }
  else if(op ==='divide'){
    if ( b == 0 ) return 'can\'t divide my 0';
    return (a/b)
  }
}
