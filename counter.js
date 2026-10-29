// let a=1;
// console.log(a)
// let b=++a;
// console.log(b)
// let c=a++;
// console.log(c)
// console.log(a+b+c)

// const a=5
// const b=5
// const c=a-b
// const d=c
// console.log(d)

// //console.log(typeof [])

// let user={name:"thani",age:20}
// const {name} = user
// console.log(name)

// const a="5"
// const b="10"
// const c=(b+a)-(a+b) //use + and - operators to convert string to number
// console.log(c)

// const a="5"
// const b="10"
// const c=(Number(b)*a)+(a*b) //use + and - operators to convert string to number
// console.log(c)

// const a="5"
// const b="10"
// const c=(Number(b)*a)+(a+b) 
// console.log(c)

// const a="5"
// const b=5
// const c=a==b
// console.log(c)

// const a="5"
// const b=5
// const c=a===b
// console.log(c)

// console.log("1"===1)//false 

// console.log("1"===String(1))//true

// let name = ["Alice", "Bob", "Charlie", "David", "Eve"];
//---------------------------------------------------------------------------------------------------

//map function  set of arrra of stings is used to print the state one by one by map 


// const newName = name.map((name, index) => {
//     return `Index of this name ${name} = ${index}`;
// });

// console.log(newName);
// console.log(name);

//Filter method where it used to filter with the function that has given  returnn new array , 
//existing la modify agum incase new condiiton kudutha 


// let name = [1,2,3,4,5,6]

// const v = name.filter((name,index) => name%2===0)
// console.log(v)
// console.log(name)



   
 
// find and findIndex()

// let arr = [1,2,3,4,5]
// const b= arr.find((element) => element === 4 )
// console.log(b)

//both find and findIndex() function

// const users = [
//     {id: 1 , name: "Santhosh" , email : "santhosh@gmail.com"},
//     {id: 2 , name: "Augustin" , email : "augustin@gmail.com"},
//     {id: 3 , name: "Vishal" , email : "vishal@gmail.com"},
//     {id: 4 , name: "Siva" , email: "siva@gmail.com"},
//     {id: 5 , name: "Shiva" , email : "Shiva@gmail.com"},
//     {id: 6 , name: "Mukesh" , email : "mukesh@gmail.com"},
//     {id: 7 , name: "thani" , email : "Thani@gmail.com"},
//     {id: 8 , name: "Jeeva" , email : "jeeva@gmail.com"},
//     {id: 9 , name: "bala" , email : "bala@gmail.com"},
//     {id: 10 , name: "bas" , email : "bas@gmail.com"}

// ]

//    const user1 = users.find((db)=> db.id===11)
//    console.log(user1)
//    const user2 =users.findIndex((user)=> user.id===10)
//    console.log(user2)

//reducer fn() accumulator (acc) 
// let arr = ['a', 'b' , 'c' ,'d', 'e']
// const print = arr.reduce((acc,n) => acc + n , "letter:")
// console.log(print) 


// const items = ['pen','book','bag'];
// items.forEach((items,i) => {
//     console.log(`${i} : ${items}`)
// });

// let total = 0;
// [5,10,15].forEach(n => total+=n)
// console.log(total)

//some operator OR operator this or that 
//every operator is AND operator elamey satified ana than true or false varum 

// const ages=['16','25','34'];
// console.log(ages.some(a=> a<18));
// console.log(ages.every(a=> a>18));
// console.log(ages.every(a=>a>10));

// console.log([].some(a=> a>0));
// console.log([].every(a=> a>0));

// onst pets = ['cat', 'dogs', 'cat', NaN];
// console.log(pets.indexOf('cat'));
// console.log(pets.indexOf('cat', 1));
// console.log(pets.indexOf('fox'));
// console.log(pets.includes('dogs'));
// console.log(pets.includes(NaN));
// console.log(pets.indexOf(NaN));

// const n = [1,205,502,101,100,59];
// console.log([...n].sort());
// console.log([...n].sort((a,b) => a-b));
// console.log([...n].sort((a,b) => b-a));


// const n = [7,100,1000,59,1];
// console.log([...n].sort());

// const name = ['zara','arun','Bala']
// name.sort((a,b)=> a.localeCompare(b));
// console.log(name)

// let a = [1,2,3,4,5]
// const b = a.pop(3,4)
// console.log(a)
// console.log(b) 

// doubt kekanum but 100% confirm pannalaam

//spice and slice theriyala 