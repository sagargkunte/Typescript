"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "sagar", age: 20 };
console.log("Sagar");
console.log(user.email);
TODO;
Types(Primitive-- > number, string, boolean);
var userID = 33;
var userId = 33.0980; //? Here Float and Integers are treated as same as number 
var nme = "sagar";
var isLoggedIn = true;
var userID = 33; //? This still works known as {Type inference}
userID.toFixed();
var hero; //! Avoid using any (Ex. let hero;)
function getHero() {
    return "true";
}
hero = getHero();
TODO: Functions;
start;
from;
here(Types(like, number, string, boolean) in a, parameter);
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("4");
function signUpUser(name, email, isPaid) {
    return;
}
signUpUser("sagar", "123@gmail.com", true);
var signUpUser = function (name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid)
        return name;
};
signUpUser("sagar", true);
TODO;
Types(means);
return types;
of;
a;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var arr = ["sagar", "sneha"];
arr.map(function (name) {
    return "function is ".concat(name);
});
function fail(msg) {
    throw new Error(msg);
}
TODO;
Objects in Typescript;
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "sagar", isPaid: false, email: "s@gmail.dev" };
createUser(newUser); //! This will not give error even though email is not defined in function defination
createUser({ name: "sagar", isPaid: false, email: "s@gmail.dev" }); //! This will give error that email is not present in function parameter
function createCourse() {
    return { name: "react", price: 399 };
}
function createUser(user) {
    return { name: "", email: "", isActive: false };
}
createUser({ name: "", email: "", isActive: true });
