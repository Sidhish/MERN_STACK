// module.exports = (a,b) =>{
//     return a-b;
// }; 
console.log("Subtract module Loaded");
function subtract1 (a,b) {
    return a - b;
};
function subtract2 (a,b) {
    return a-b;
};
module.exports = {subtract1,subtract2};