// var sum =0
// const fibonacci = (num:number):any=> {
//     if(num <= 1){
//         return 1;
//     }else{
//     return sum += fibonacci(num-1)+ fibonacci(num-2)
//     }
// }
// var num= 8
// console.log(fibonacci(num));
//sap xep chen
// var arr =[9,3,7,25,4,1]

// var t = arr.length-1,temp,i=0,pos
// for(i ; i <= t;i++){
// temp=arr[i];
// pos = i
// while(pos > 0 && temp < arr[pos-1]){
//     arr[pos] = arr[pos-1];
//     pos--;

// }
// arr[pos]=temp
// }

// console.log(arr);
let x = 0;
async function r5() {
  x += 1;
  console.log(x);
  return 5;
}
(async () => {
  x += await r5();
  console.log(x);
})();
