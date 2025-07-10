// const buff = Buffer.from("Hello");
// console.log("Buffer: ",buff); 

const buff2 = Buffer.alloc(10);
console.log("Buffer: ",buff2); //allocates memory 

buff2.write("Hello LPU"); //writes string into buffer 
console.log("Buffer after string: ",buff2);
console.log("Buffer to string: ",buff2.toString()); // converts buffer to string

