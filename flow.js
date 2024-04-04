//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function figuresArray(arr){
    const firstFourNumbers = arr.slice(0,4).map(item => item * item);
    console.log(firstFourNumbers)
    const lastTwoNumbers = arr.slice(-2).map(item => item + 10);
    const middleNumbers = arr.slice(4,-2)
    const newValueArr = firstFourNumbers.concat(middleNumbers).concat(lastTwoNumbers)
    console.log(newValueArr)
   }
 figuresArray([1,2,3,4,5,6,7,8,9,10])
//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
while (i < arrNum.length) {
    if (i === 4) {
        break;
    }
    console.log(`Item: ${arrNum[i]}`);
    i++;
}
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
const onestring=(arrstring)=>{
    for (let i=0;i<arrstring.length;i++){
        console.log(arrstring[i]);
    }
    return arrstring
}
let arrstring= ['apple','plum','banana','strawberries','kiwi']
console.log(onestring(arrstring))

//Write a function that accepts an array of strings and console.logs each element using a for loop.
function stringArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`names: ${arr[i]}`);
    }
  }
    let peaple = ["man", "women", "chidren","adult"];
  stringArray(peaple);

//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function reverseString(str) {
    let reversedstr = '';
    let i = str.length - 1;
    while (i >= 0) {
      reversedstr += str[i];
      i--;
    }
    return reversedstr;
  }
    let strg = "happy";
  let reversedString = reverseString(strg);
  console.log("Reversed string:", reversedString); 
