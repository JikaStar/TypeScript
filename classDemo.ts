
 import (vehicle} from './access'
    export class classDemo 
{
    //properties,methods,constructors
    username:string; 
    password:string;
    ssn:number;

    constructor(ssn:number)
    {
        this.ssn=ssn;
    }

    getUserName()
    {
        return this.username; //username property of hte class
    }
    setUserName(username:string)
    {
       
       this.username=username//set username property to one name
    }
    getSSN()
    {
        return this.ssn;
    }
}
//create object of hte class, and using that that object call the methods orproperties present in that class
let cd=new classDemo(123);
cd.setUserName("abc");
console.log(cd.getUserName());
console.log(cd.getSSN());

function validateCar(car:vehicle)
{
console.log(car.camera);
console.log(car.engine);
}


