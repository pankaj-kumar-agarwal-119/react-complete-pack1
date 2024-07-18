interface CustomerUser {
    name: string;
    age: number;
}
let cust1: CustomerUser = {
    name: "Mohan",
    age: 21
}

//Interface for function parameters
interface Product {
    id: number;
    name: string
}

const displayProduct = (product: Product) => {
    console.log(`${product.id} , ${product.name}`);
}
displayProduct({ id: 121, name: "Apple iphone" });

//Interface for return type
interface Address {
    street: string;
    city: string;
    zipCode: number
}
const getAddress = (): Address => {
    return {
        street: "downstreet 1",
        city: "bangalore",
        zipCode: 562123
    }
}

//Optional properties
interface Employee {
    name: string;
    department?: string;// ? means optional
}

const employee1: Employee = {
    name: "Mohan",
    department: "Engg"
}

const employee2: Employee = {
    name: "Mohan"
}

//Function with optional parameter
interface Config {
    url: string;
    timeout?: number;
}
const setUp = (config: Config) => {
    const timeout = config.timeout || 5000;
    console.log(`URL : ${config.url} , Timeout : ${timeout}`);
}
setUp({ url: "-----" });

//Read only property
//Readonly properties in an interafce cannot be modified once they are assigned a value
interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = {
    x: 10,
    y: 30
}
// point.x=100; Cannot assign to 'x' because it is a read-only property

//readonly array
interface ReadOnlyArrayExample {
    readonly items: number[];
}
const arr11: ReadOnlyArrayExample = {
    items: [1, 2, 3]
}
// arr11.items[0]=89;

//readonly property in class
interface Person {
    readonly name: string;
    age: number;
}
class Student implements Person {
    readonly name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student("Mohan", 21);
// student.name = "Sohan"; Cannot assign to 'name' because it is a read-only property.

//Example of using interafce with class having method also
interface Shape{
    area : number;
    calculateArea(w:number,h:number) : number
}
class Rectangle implements Shape {
    area : number;
    constructor(width:number,height:number){
      this.area = this.calculateArea(width,height);
    }
    calculateArea(w : number,h : number):number {
        return w*h;
    }

}

//Multiple interfaces
interface Printable {
 x : number;   
 print():void;
}

interface Savable {
  y : number;  
  save():void;
}
class DocumentX implements Printable,Savable{
  x: number;
  y:number;  
  constructor(){
    this.x=10;
    this.y=20;
  }
  print():void{
  console.log('Document printed');
  }
  save(): void {
    console.log('Document saved');
  }
}

//Multiple interface inheritance
interface Movable{
    move():void;
}
interface Flyable extends Movable{
    fly():void;
}
class Bird implements Flyable{
    move(): void {
        
    }
    fly(): void {
        
    }
}

//Fution types : Interface can describe function types, specifying the parameters and return tpe of a function
interface Greet {
    (name: string): string
}

const greet: Greet = (name: string): string => {
    return `hello ${name}`;
}

//function interface with multiple parameters
interface MathOperation {
(a:number,b:number):number;
}
const add : MathOperation = (a:number,b:number) : number=>{
  return a+b;
}

