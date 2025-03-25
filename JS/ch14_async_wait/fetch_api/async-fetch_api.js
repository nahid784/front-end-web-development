function getData(){
    // it will get data from server

    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve(455)
        },3500);
    })
}

console.log("loading modules")

let data = getData();