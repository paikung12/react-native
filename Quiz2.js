//1
for(let i = 1 ; i<= 20; i+=1) {
     console.log(i)
}

//2
for(let i = 1 ; i<= 20; i+=1) {
    if(i%2==0)
    console.log(i)
}
//3
let result = [-1,2,3,56,6,-93,0,4].map(el => el*2)
console.log(result)
//4
let result2 = [-1,2,3,56,6,-93,0,4].filter(el => el/2 === 0)
console.log(result2)