/*
Union type is powerful feature in typescript that allows a variable to hold values of multiple types
*/

//using the union with variable
let value : string | number;
value = "Hello world!";
value = 45;

//union as function parameters
function printId(id :number | string){
    if(typeof id == "number"){
        console.log(`ID : ${id}`);
    }
    else{
        console.log(`ID : ${id.toUpperCase()}`);
    }
}

//Array with union types
let data : (number|string)[] = [1,"two","four"];
data.push(5);
data.push("Hi");

//Best way to define the type is interface
interface User {
    id : number | string;//id is of uniontype
    name : string;//name is of string type
}
const user1 : User = {
    id : 1,name : "Mohan"
}
const user2 : User = {
    id : "abc123",
    name : 'Sohan'
}

//Handling the api response
interface SuccessResponse {
    status : "success",
    data: string
}
interface ErrorResponse {
    status : "error",
    message : string
}

type ApiResponse = SuccessResponse | ErrorResponse;
function handleResponse(response:ApiResponse){
    if(response.status == "success"){
      console.log(`Data : ${response.data}`);
    }
    else{
        console.log(`Error : ${response.message}`);
    }
}