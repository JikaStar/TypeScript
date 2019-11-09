import { classDemo } from "./classDemo"

//
export interface vehicle
{
    color:string;
    engine:number;
    camera?:boolean;  //camera is optional parameter
}

//create object of hte class, and using that that object call the methods orproperties present in that class
let cd=new classDemo(123);
cd.setUserName("abc");
console.log(cd.getUserName());
console.log(cd.getSSN());

function validate(value:number):void  //will not return function 
{
 //return value+1;
}

console.log(validate(2));

function str(value2:string):string
{
return value2;
}
console.log(str("hey"));

function validateCar(car:vehicle)
{
console.log(car.camera);
console.log(car.engine);
}

let Bmw=
{
    color:"red",
    engine:100,
    camera:true
}

let xyz=
{
    color:"black",
    engine:200,
    //camera:false
    
}
validateCar(Bmw);
validateCar(xyz);

