
//string type
let nameEmp: string = "Rohan";
console.log(`The name is : ${nameEmp}`);

//boolean type : The booelan type represents true/false
let isDone: boolean = true;
console.log(`isDone : ${isDone}`);

//number : The number type is used for both integers and floating point
let myNum1: number = 12.69898;
let myNum2: number = 33;
let fixedStr: string = myNum1.toFixed(2);
console.log(`myNum1 : ${fixedStr.length} | myNum2 : ${myNum2}`);

//string : The string type is used to represent the textual data
let color: string = "blue";
color = color.toUpperCase();
console.log(`The color is ${color}`);

//array : collection of elements
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//array methods
list.push(4);
console.log(`the list of numbers : ${list}`);

//strig array
let cityNames: string[] = ["Mohan", "Sohan", "Rohan"];
console.log(`The city names : ${cityNames}`);

//Tuple declaration : The tuple type is used to represent an array with fixed number of elements where each element is of diff type
let x1: [string, number, boolean] = ["Mohan", 121, true];
console.log(`The tuple x1 : ${x1}`);
console.log(`${x1[0]} -- ${x1[1]}`);

//Tuple with optional elements
let t1: [string, number?] = ["Mohan"];
console.log(`Tuple with optional number : ${t1}`);

//Enum : enum type is used to define a set of name constants
enum Color {
    RED,
    GREEN,
    BLUE
}
let col: Color = Color.GREEN;
console.log(`The color is : ${col} -- ${typeof col}`);// 1 -- number

//Enum with custom value
enum Cities {
    BANGALORE = 11,
    CHENNAI = 22,
    PUNE = 33
}
let myAppCity: Cities = Cities.CHENNAI;
console.log(`City for myApp : ${myAppCity}`);//22

//any : It allows any type of values
let x: any = 10;
x = "Mohan";
x = true;

//any with array
let myCols: any[] = [1, 2, 3];
myCols = ["a", "b", "c"];

//any in function
const logMessage = (message: any): void => {
    console.log(`The message is : ${message}`);
}
logMessage(1);
logMessage("something");
logMessage(true);

//void : used for function that do not retur anything
let warnUser = (): void => {
    console.log("SOmething went wrong");
}

//void with variables
let unuasable: void = undefined;

//null declaration
let n: null = null;

//undefined
let n2: undefined = undefined;

//null and undefined as union
let someValue: number | undefined | null = null;
someValue = 5;
someValue = undefined;

//never : The never type represents values that never occur, often used in function that never returns
function error(err: string): never {

    throw new Error(err);
}

error("Something went wrong!");

//For infinite loop also the return type will be never
function infiniteLoop(): never {
    while (true) {

    }
}

//Exhaustivesnness checking
type myCheck = string | number;
function checkEnv(value: myCheck) {
    if (typeof value == "string") {
        //handle string
    }
    else if (typeof value == "number") {
        //handle number case
    }
}

