//Print Statement 
console.log("My Name Is Golam Moula");
//Variable 
age = 24;
height = 182.5002;
Name = "Golam Moula Rakib";
bankBalance = null;
sakibBankBalance = undefined;
console.log("My Name is : ",Name);
console.log("My age is :",age+1,"Years");
console.log("My height is : ",height,"ft");
console.log("My current Bank Balance is : ",bankBalance,"Tk.");
console.log("Shakib's current Bank Balance is : ",sakibBankBalance,"Tk.");
//Variable name is case sensetive
fullname="Rakib";
FULLNAME = "Golam Moula ";

console.log(fullname);
console.log(FULLNAME);
// Only letter ,underscore(_),or $ should be first character .
// full name = "Rakib"; (Wrong name of variable name)
//My_user_name@287 = "Rakib" (Wrong name of variable name)
//123user = "34567" ;(Wrong name of variable name)
my_user_name$287 = "Rakib7788";
//We can not use reserved key word as a variable name 

/*console = "Ye keya hogiya";
console.log(console);*/

Console = "Ye keya hogiya";// for Capital C it's valid 
console.log(Console);
//We Should Use camel case for writing variable name 
myName = "Rakib";
//Though there is no error but we need to write let key word before  to write variable name 
let weight = 300 ;
let CertificateName = "Golam Moula";
console.log("Weight :",weight,"Kg    ",CertificateName);

// let , const & var
/*
-------var : Variable can be re-declared & updated. A global scope variable(We can use it any where) 
*/
var price = 34;
var price = 49;
var price = 67;
console.log("price : ",price);
/*
-------let : Variable can  be re-declared but can not be updated. A block/{} scope variable.
*/
let food = "coke";

// let food = "Cake"; (Can not be re declare)

{food = "Cake " // Can be Updated 
console.log(food);
}
// We can use in a single block
{food = "Cake " // Can be Updated 
console.log(food);
}


/*
-------onst: Variable cannot be re-declared or updated . A block/{} scope variable.It must be initialize when it declare
*/
const PI = 3.1416;
// PI = 234; (const variable is not updatable)
console.log(PI);


// ----- Data Type ----------
//To check data type we can use 'typeof data type ';

/*

*/
{
    let age = 20 ;
    console.log(age);
    
    console.log(typeof age);
}
// 7 types of primitive data types are there Number , String , boolean , Undefine , Null , Bigint , Symbol


// Object is the collections of different types of values 
//syntax  of object
/*
   const/let object name = {
    Variable Name : Value;
    Variable Name : Value;
    Variable Name : Value;

  };
*/ 
const student = {
    Name  : "Golam Moula",
    age   : 20,
    cgpa  : 3.8,
    ispass:true,

};

console.log(student);
// Accessing keys 
console.log(student["Name"]);
//alternate way 
console.log(student.age);
// We can change the value of Object data member even though it is const type 
console.log(student.age+1);










