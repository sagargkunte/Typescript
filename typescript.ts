// let user  = {name:"sagar",age:20};

// console.log("Sagar");
// console.log(user.email);

// TODO Types (Primitive --> number ,string, boolean)

// let userID:number = 33; 
// let userId:number = 33.0980; //? Here Float and Integers are treated as same as number 
// let nme:string = "sagar";
// let isLoggedIn:boolean = true;

// let userID = 33; //? This still works known as {Type inference}
// userID.toFixed()


// let hero:string; //! Avoid using any (Ex. let hero;)
// function getHero() {
//     return "true";
// }

// hero = getHero();

// TODO : Functions start from here (Types(like number,string,boolean) in a parameter)

// function addTwo(num:number) { //? Here function is accepting a parameter as number
//     return num + 2;
// }
// addTwo(5);

// function getUpper(val:string) { //? Here function is accepting a parameter as string
//     return val.toUpperCase();
// }
// getUpper("4");

// function signUpUser(name:string,email:string,isPaid:boolean) { //? Here function is accepting a parameter as string and boolean
//     return;
// }
// signUpUser("sagar","123@gmail.com",true);

// let signUpUser = (name:string,isPaid:boolean = false) => { //? isPaid:boolean = false, this is nothing but default value if isPaid is not provided
//     if(isPaid) return name;
// }
// signUpUser("sagar",true);

// TODO Types (means return types) of a function

// function addTwo(num:number):number {  //? Return type of this function is number (specified)
//     return num + 2;
// }
// addTwo(5);

// function getValue(myVal:number):boolean {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

// const arr = ["sagar","sneha"];
// arr.map((name):string => {
//     return `function is ${name}`;
// })

// function fail(msg:string):never { //! This is the function which will never return anything
//     throw new Error(msg);
// }

// TODO Objects in Typescript


// function createUser({name:string, isPaid:boolean}) {}
// let newUser = {name:"sagar",isPaid:false,email:"s@gmail.dev"};
// createUser(newUser); //! This will not give error even though email is not defined in function defination
// createUser({name:"sagar",isPaid:false,email:"s@gmail.dev"}) //! This will give error that email is not present in function parameter


// function createCourse():{name:string,price:number} {
//     return {name:"react",price:399};
// }

// // TODO Type Aliases
// type User = {  //? Defining own datatype like (type)
//     name:string;
//     email:string;
//     isActive:boolean;
// }
// function createUser(user:User):User {
//     return {name:"",email:"",isActive:false};
// }
// createUser({name:"",email:"",isActive:true})


export {}