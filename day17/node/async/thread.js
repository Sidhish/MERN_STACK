
// const crypto = require("crypto");
// console.log("Total Time");

// const MAX_TIME = 1;
// for(let i=0;i< MAX_TIME;i++){
//     crypto.pbkdf2("password","salt",100000,64,"sha512", () => {
//         console.timeEnd(`Task ${i}`);
//     });
//     console.time(`Task ${i}`);
// }


//synchronous date 
// const crypto = require("crypto");
// console.log("Total Time");

// const MAX_TIME = 2;
// const now = Date.now();
// for(let i=0;i< MAX_TIME;i++){
//     crypto.pbkdf2Sync("password","salt",100000,64,"sha512");
//     console.log(`Task ${i}:${Date.now() - now}`);
// }

//Asynchronous date 
process.env.UV_THREADPOOL_SIZE = 5; 
const crypto = require("crypto");
console.log("Total Time");

const MAX_TIME = 5;
const now = Date.now();
for(let i=0;i< MAX_TIME;i++){
    crypto.pbkdf2("password","salt",100000,64,"sha512",() => {
        
        console.log(`Task ${i}:${Date.now() - now}`);
    });
}
