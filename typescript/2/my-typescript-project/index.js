var nameEmp = "Rohan";
console.log("The name is : ".concat(nameEmp));
//boolean type : The booelan type represents true/false
var isDone = true;
console.log("isDone : ".concat(isDone));
//number : The numbet type is used for both integers and floating point
var myNum1 = 12.69898;
var myNum2 = 33;
var fixedStr = myNum1.toFixed(3);
console.log("myNum1 : ".concat(fixedStr, " | myNum2 : ").concat(myNum2));
//string : The string type is used to represent the textual data
var color = "blue";
color = color.toUpperCase();
console.log("The color is ".concat(color));
//array : collection of elements
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//array methods
list.push(4);
console.log("the list of numbers : ".concat(list));
//strig array
var cityNames = ["Mohan", "Sohan", "Rohan"];
console.log("The city names : ".concat(cityNames));
//Tuple declaration : The tuple type is used to represent an array with fixed number of elements where each element is of diff type
var x1 = ["Mohan", 121, true];
console.log("The tuple x1 : ".concat(x1));
console.log("".concat(x1[0], " -- ").concat(x1[1]));
//Tuple with optional elements
var t1 = ["Mohan"];
console.log("Tuple with optional number : ".concat(t1));
//Enum : enum type is used to define a set of name constants
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var col = Color.GREEN;
console.log("The color is : ".concat(col, " -- ").concat(typeof col));
//Enum with custom value
var Cities;
(function (Cities) {
    Cities[Cities["BANGALORE"] = 11] = "BANGALORE";
    Cities[Cities["CHENNAI"] = 22] = "CHENNAI";
    Cities[Cities["PUNE"] = 33] = "PUNE";
})(Cities || (Cities = {}));
var myAppCity = Cities.CHENNAI;
console.log("City for myApp : ".concat(myAppCity));
//any : It allows any type of values
var x = 10;
x = "Mohan";
x = true;
//any with array
var myCols = [1, 2, 3];
myCols = ["a", "b", "c"];
//any in function
var logMessage = function (message) {
    console.log("The message is : ".concat(message));
};
logMessage(1);
logMessage("something");
logMessage(true);
//void : used for function that do not retur anything
var warnUser = function () {
    console.log("SOmething went wrong");
};
