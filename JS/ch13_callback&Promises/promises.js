console.log("js promises");

let prom1 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("yes, this is promise");
        resolve("Resolved");
    },1000);
})

// prom1.then((a)=>{
//     console.log(a);
// })

let prom2 = new Promise ((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("no random num was not supporting.");
        // it will show error..
        console.log("rejected");
    }
    else{
        setTimeout(()=>{
            console.log("It is supporting");
            resolve("Math resolved");
        },1000);
    }
})

// prom2.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
//     // it catches the error to handle error.
// })

// for showing promises all (need to resolve all promises.)
let prom3 = Promise.all([prom1,prom2])
prom3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

// for showing all settled promises
let prom4 = Promise.allSettled([prom1,prom2])
prom4.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})