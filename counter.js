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

//map function 

// const newName = name.map((name, index) => {
//     return `Index of this name ${name} = ${index}`;
// });

// console.log(newName);
// console.log(name);

//Filter method where it used to filter with the function that has given 

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


