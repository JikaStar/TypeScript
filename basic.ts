const a=4;
let b:string="hello";
let c:number=4;
let list:Array<number>=[1,2,3];
let dynamic:any;
dynamic=3;
let flag:boolean=false;


for(let i=0; i<5;i++){
    setTimeout(function(){console.log(i);}, 100 * i);
}