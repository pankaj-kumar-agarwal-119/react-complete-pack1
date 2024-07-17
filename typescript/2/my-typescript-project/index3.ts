import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

let message = "Hello World";
//Typescript infers the type os message as string

let count = 42;
//Typescript infers the type as number

/*Best common type inference
When dealing with arrays , Typescript tries to infer a "best common type" that is compitable with all elemenst of the array
*/
let mixedType = [1,"two",true];
//Typescript infers the type of mixedArray as (number|string|boolean)[]

/*Contextual type inference


*/
window.onmousedown=function(event){
    console.log(event);
}
//event is inferred as MouseEvent

//Examples
//1. Inferring function return type
function add(a : number,b:number){
    return a+b;
}
//infer retun type as number
// Inferring types in object isLabelWithInternallyDisabledControl
type Person ={
    name : string;
    age : number;
    isStudent : boolean
}
// let person : Person = {
//     name : "Mohan",
//     age : 30,
//     isStudent : false
// }
let person  = {
    name : "Mohan",
    age : 30,
    isStudent : false
}
//infers type as {name : string,age : number,isStudent:boolean}

//inferring the consdition
let value = Math.random() > 0.5?"hello":42;
//infer type as number | string

//infer the function parameter
let numbers = [1,2,3,4];
let dobleNumbers = numbers.map((num=>{
    return num*2;
}))
//here infer num as number
