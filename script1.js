//functions
function sum(num){
    return num+num;
}
console.log(sum(2));//4

//object
let canvas={
    Euid:1031,
    name:"keerthi",
};
console.log(canvas);

//arrays

let array=[1,2,3,4];
console.log(array.length);

//strict equality(type+value should match)
console.log(1==='1');
console.log(1 === 1);

//lose equality value should be same
console.log('1'==1);
console.log(1=="1");

//ternary operator
let value = 100;
let type = value>110 ? 'keerthi' : 'govi';
console.log(type);

//airthmetic, logical, bitwise, operator precedence

//swap var
let a=2;
let b=3;
let c=a;
a=b;
b=a;
console.log(a);
console.log(b);

//if else()
let hour =18;
if(hour>=6 && hour< 12){
    console.log("good mrng");
}
else if(hour>=12 && hour <18){
    console.log("good af");
}
else{
    console.log("good eve");
}
// switch nd case
let role = "govi"
switch(role){
    case "guest" : 
    console.log('reddy');
    break;
    case "govi" :
    console.log("sodhiii");
    break;
}
// for loop
for(let i=0; i<=10; i++){
    console.log("hi chuncheshhh",i);
}
//while loop
let i=2;
while(i<=7){
if(i%2 === 0) console.log(i);//even
i++;
}
//do while
let j=10;
do{
    if(j%2 === 0) console.log(j);//even
    j++;
}while(j<8);
// for in loop mainly for objects
 canvas = {
    euid: 1031,
    name:"keerthi"
};
for(let key in canvas){
    console.log(key,canvas[key]);
}
//array
let h=[1,2,3,4];
console.log(h);
//for of mainly for arrays
const chichu = ['red', 'green'];
for(let color of chichu){
    console.log(color);
}
//break(loop out) and continue(iteration out)
let n=2;
while(n<=5){

    if(n==3){ 

        n++
        break;
    }
    console.log(n);
    n++
}

let x = "learn";
console.log(x.substring(5,1));

// for loop
for(let z=2; z<=7; z++){
    console.log("keerthi")
}
let z=1;
while(z<2){
    console.log("god");
    z++;
}
//max two numbers
function maxOfTwo(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
let result= maxOfTwo(4,4);
console.log(result);
//ex
function isLandscape(width, height){
    return (width>height) ? "yes it is landscape" : "no its not";
}
let sol= isLandscape(2.5,3.2);
console.log(sol);

//ex fizzbuzz algorithm
const output=fizzBuzz("tgfhjk");
console.log(output);
function fizzBuzz(input){
    if(typeof(input)!=="number"){
        return "NotANumber";
    }else if(input%3 ===0 && input%5 ===0){
        return "fizzBuzz";
    }else if(input%3===0 ){
        return "fizz";
    }else if(input%5===0)
    {
        return "Buzz";
    }else{
        return input;
    }
}
//if 70 speed limit ok message
//for 5km above speed limit 1 Point
//more than 12 points license suspended
checkSpeed(120);
function checkSpeed(speed){
    if(speed>=130){
        console.log("license suspended");
    }else if(speed<=70){
        console.log("ok");
    }
}
//ex
showNumbers(10);
function showNumbers(limit){
    for(let i=0; i<=limit; i++){
        if(i%2===0){
            console.log(i,"even");
        }else{
            console.log(i,"odd");
        }
    }
}
//truthy and falsy
const arr=[undefined,"", null];
console.log(countTruthy(arr));

function countTruthy(arr){
    let count=0;
    for(let i of arr){
        if(i){
            count=count+1;
        }
    }
    console.log(count);

}
//show properties
const movie={
    title:'a', releaseYear:2018,rating: 4.5, director:'b'
};
showProperties(movie);
function showProperties(obj){
for(let i in obj){
    if(typeof obj[i]=== "string")
    console.log(i,obj[i]);
}
}
//sum of multipiles
sum(10);
function sum(limit){
    let s=0;
    for(let i=1; i<=limit; i++){
        if( i%3==0 || i%5==0){
         s=s+i;
         
        }
        
    }
    console.log(s);           
}
//grade  calculation
const marks=[120,80,50];
calculationGrade(marks);
function calculationGrade(marks){
let avg=avge(marks);
    if(avg>=1 && avg<59){
        console.log("f");
    }else if(avg>=60 && avg<69){
        console.log("D");
    }else if((avg>=70 && avg<79)){
        console.log("C");
    }else if((avg>=80 && avg<89)){
        console.log("B");
    }else if((avg>=90 && avg<99)){
        console.log("B");
    }
}
// avg caalling outside of function
function avge(chi){
    let sum=0;
    let count=0;
    for(let i of chi){
        sum=sum+i;
        count=count+1;
    }
    let avg=sum/count;
    return avg;n 
}
//prime
showPrimes(20);
function showPrimes(limit){
    
    for(let num=2;num<=limit;num++){
        isPrime=false;
        for(let fact=2;fact<num;fact++){
            if(num%fact===0){
                isPrime=true;
                break;
            } 
        }
        if (isPrime) console.log(num);  
    }
}

//objects syntax
const ar={
kee:"chhfshfj", sur:"reddy"
};
ar.kee="nzkfv";
console.log(ar);

const kr={
    kee:"chhfshfj", sur:"reddy"
    };

    
   
//array

//constructor function
function Family(father,mother,sister){
    this.dad=father;
    this.mom=mother;
    this.sis=sister;
    this.surname=function(){
        console.log("chireddy");
    }    
}
const fam1=new Family("murali","raja","jyo");
const fam2=new Family("madhu","ramudu","sruj");
console.log(fam1);
console.log(fam2);
//address excercise
//object for in loop

let address={street: "green homes", city: "nandyal", zipcode:"518501"};
showAddress(address);
function showAddress(address){
    for(let key in address) {
        console.log(key, address[key]);
    }
} 
//constructor function
function Address(street, city, zipcode){
    this.st=street;
    this.ci=city;
    this.zip=zipcode;
}
const add1=new Address("green homes", "nandyal", "518501");
const add2=new Address("green homes", "nandyal", "518501");
console.log(add1);

areSame(add1,add2);


function areSame(a1,a2){
    if (a1===a2){
        console.log("true");
    }else{
       console.log("false");
    }
}
//areEqual
areEqual(add1,add2);

function areEqual(a1,a2){
    if((a1.st===a2.st) && (a1.ci===a2.ci) && (a1.zip===a2.zip)){
        console.log("true");
    }else{

        console.log("false");
    }

}
//blogpost

let blogPost={title: "wastescript", body:"script i am not liking much", author:"govardhan",
     views: 257, 
     comments: [{author:"govardhan", body:"script i am not liking much"}], 
     isLive:true
    }; 
console.log(blogPost);
    
//price range
let priceRange=[{
    label:"$",tooltip:"inexpesnive", minprice:0, maxprice:10 ,
    label:"$$",tooltip:"medium", minprice:11, maxprice:20 ,
    label:"$$$",tooltip:"expesnive", minprice:21, maxprice:30 ,      
}];
   
//adding elemnts in array
const numbers=[1,3];
numbers.push(4,5);//ending adding.....//pop is for deleting
numbers.unshift(0,1);//begining adding....//shift is deletingg at begining
numbers.splice(2,0,"k");//first find index then delete and add new elements
numbers.indexOf(1);//finding elements
numbers.lastIndexOf(1);
console.log(numbers);

console.log(numbers.indexOf(1,3));
console.log(numbers.lastIndexOf(1));
//create object and find elements in array
const courses=[
    {id:1, name:"java"},
    {id:2, name:"script"}
];
const course=courses.find(function(course){
    return course.id===1;
});
console.log(course);
//arrow function
const subjects=[
    {sub:1,name:"script"},
    {sub:2,name:"aws"},
    {sub:1,name:"aw"},
];
const subject=subjects.find(subject=>subject.sub===1);//filter all properties
console.log(subject);

let num=[1,2,3,4];
num.pop();
console.log(num);
console.log(num.shift());
num.splice(1,2);
console.log(num);
//emptying an array
let number=[1,2,3,4];
//number=[]; if there is no refrence we can use this sol
//number.length=0;empty an array
number.splice(0,number.length);
console.log(number);
//slice and concat
let first=[1,2,3,4];
let second=[5,6,7,8];
let combined=first.concat(second);
let third=combined.slice(4,6);
console.log(combined);
console.log(third);
//spread operator ...
let f=[2,3,4,5];
let s=[6,4,5,6,7];
let com=[...f,"kee",...s];
let copy=[...com]
console.log(com);
console.log(copy);
//iterating an array
let ar1=[2,3,4,56,6];
let ar2=[3,4,5];
// for(let ar of ar1){
//     console.log(ar);
// }
ar2.forEach((st)=>console.log(st));//foreach loop
//join method
let j1=[1,2,3];
let joi=j1.join(',');
console.log(joi);
console.log(typeof(joi));//it defines type of that method
//split is used for string to dived them in words with -
//whereas join is used 
// let var2=chi.join("-")
// console.log(var2);
let ch="keerthi is a good girl";
let chi=ch.split('i');
console.log(chi);
//sorting arrays
const school=[
    {id:2,name:"good"},
    {id:1,name:"Chaitanya"}
];


const school1=school.sort(function(a,b){
    const name1=a.name.toLowerCase();
    const name2=b.name.toLowerCase();
    if(name1<name2) return -1;
    if(name1>name2) return 1;
    return 0;
});
console.log(school1);

let rr1=[2,3,56,3,6];
rr1.sort((a,b)=>a-b);
console.log(rr1);
//testing elements either positive or negative every() , some() give only boolean

let positive=[1,2,3];
const allPositive=positive.every(positive => positive>=0);
console.log(allPositive);
//filtering an array to give only positive values gives only an array
let fil=[1,2,3,-1,-2];
const filtered=fil.filter(n => n>=0);
console.log(filtered);
//mapping an array
//reduce an array
let r=[1,2,3,4];//10 calculating sum only
const items=r.reduce((accumulator,currentValue)=> accumulator+currentValue);
console.log(items);

//calculating range
const numb=arrayFromRange(4,10);
function arrayFromRange(min,max){
    let res=[];
    for(let i=min;i<=max;i++){
       res.push(i);
    }
    console.log(res);
}
//search element that includes method
const incd=includes([1,2], 2)
console.log(incd);

function includes(array, searchElement){
    for(let i of array){
        if(i===searchElement){
           return true;
        }
    }
    return false;
    
}

//comment

let arar=[1,2,3];
console.log(arar);
