// Arithmetic Operator
let a = 5;
let b = 10;
console.log("a = ",a ,"& b = ", b);
console.log("Arithmetic Operation");
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
// Unary operator (a++/a=a+1, a--/a=a-1)
console.log("Unary Operation");
a++;
console.log("After increment a = ",a);
a=5;
a--;
console.log("After Decrement b = ",a);
//pre-Increment 
a=5;
console.log("pre-Increment value of a = ",++a);
//post-Increment 
a=5;
console.log("pre-Increment value of a = ",a++,"After Executing pre-Increment a = ",a);

//Assignment Operator 
/* 
     =,+=,*=,%=,**=
*/
let X=10;
   X += 1;//x = x+1
   console.log("After += :",X);
   X=10;
   X -= 1;//x = x-1
   console.log("After -= :",X);
   X=10;
   X *= 2;//x = x*2
   console.log("After *= :",X);
   X=10;
   X %= 2;//x = x%2
   console.log("After %= :",X);
   X=10;
   X /= 2;//x = x/2
   console.log("After /= :",X);

// Comparison Operator 
/*
  Equal to ==
  Equal to Both Value and Data type ===
  Not Equal to !=
  Not Equal to & Type !==
  greater then ,less then equal to >,<,>=,<=
*/
let x1 = 5;
let y1 = 10;
console.log("x1 = ",x1,"(",typeof(x1),")",",y1 = ",y1,"(",typeof(y1),")");
console.log("x1 == y1 : ",x1 == y1);
console.log("x1 === y1 : ",x1 === y1);
console.log("Type Of x1 === type of y1 : ",typeof(x1) === typeof(y1));
console.log("x1 != y1 : ",x1 != y1);
console.log("Type Of x1 !== type of y1 : ",typeof(x1) !== typeof(y1));

// Logical OPerator 
/*
  LOgical AND && 
  Logical OR  ||
  Logical NOT !
*/
let a1 = 6;
let b1 = 7;


// For Logical AND && (TT = T,TF = F , FT = F , FF = F)

let cond1 = a1 < b1;//true 
let cond2 = a1 === 6;//true
console.log("cond1 && cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 && cond2);
cond1 = a < b;//true 
cond2 = a1 === 7;//false
console.log("cond1 && cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 && cond2);
cond1 = a > b;//false
cond2 = a1 === 6;//true
console.log("cond1 && cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 && cond2);
cond1 = a > b;//false
cond2 = a1 === 7;//true
console.log("cond1 && cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 && cond2);


// For Logical OR || ( TT = T , TF = T ,FT = T , FF = F)


cond1 = a1 < b1;//true 
cond2 = a1 === 6;//true
console.log("cond1 || cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 || cond2);
cond1 = a < b;//true 
cond2 = a1 === 7;//false
console.log("cond1 || cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 || cond2);
cond1 = a > b;//false
cond2 = a1 === 6;//true
console.log("cond1 || cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 || cond2);
cond1 = a > b;//false
cond2 = a1 === 7;//true
console.log("cond1 || cond2 ","( a1,b1 :",a1,",",b1,")","= ",cond1 || cond2);

36 min...