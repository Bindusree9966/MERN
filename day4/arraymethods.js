let a = [1, 2, 3, 4, 5, 6];
const addone = (num) => {
  return num + 1;
};
let r = a.map(addone);
let double = a.map((num) => {
  return num * 2;
});
console.log(r);
console.log(double);

//array methods using array objects

let products=[
    {id:1,name:'Laptop',price:25000},
    {id:2,name:'Mobile',price:20000},
    {id:2,name:'Keyboard',price:1000},

]
let productName=products.map((product)=>{console.log(product.name)})

//filter

let arr=[1,2,3,4,5,6]
let b=arr.filter((num)=>num>3)
console.log(b)

let ar=[1,2,3,4,5,6]
let bo=ar.filter((num)=>num%2==0)
console.log(bo)

let produc=[
    {id:1,name:'Laptop',price:25000},
    {id:2,name:'Mobile',price:20000},
    {id:2,name:'Keyboard',price:1000},

]
let productNam=produc.filter((p)=>p.price>6000)
console.log(productNam)

//reduce

let ab=[1,2,3,4,5,6]
let sum=ab.reduce((total,curr)=>{return total+curr},0)
console.log(sum)

let produ = [
  { id: 1, name: 'Laptop', price: 25000 },
  { id: 2, name: 'Mobile', price: 20000 },
  { id: 3, name: 'Keyboard', price: 1000 },
];
let total = produ.reduce((sum, item) => {
  return sum + item.price;
}, 0);
console.log(total);

//find
let produ1 = [
  { id: 1, name: 'Laptop', price: 25000 },
  { id: 2, name: 'Mobile', price: 20000 },
  { id: 3, name: 'Keyboard', price: 1000 },
];
let a1=produ1.find((p)=>p.id==2)
console.log(a);


let ar1=[11,22,33,44,55,66]
let [eleven,,twentyTwo,thirtyThree]=ar1
console.log(twentyTwo) 

let student={
  name:"xyz",
  dept:"CSE",
  age:19
}
const {name,dept}=student
console.log(name,dept)

let car={
    brand:"BMW",
    year:"2024"
}
const{brand} = car
console.log(brand)

//spread operator

let arr1=[11,2,3,44,5]
let arr2=[...arr1]
console.log(arr2)

let ca={
  brand:"BMW",
  year:2024
}
let n={...ca,year:2026}
console.log(n)


//rest operator

let a2=[11,22,33,44,55]
let [first,...other]=a2
console.log(other)

let a3=[66,77]
let a4=[...a2,...a3] 
console.log(a4)

