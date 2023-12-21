/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelCount = 0;
    let str1 = str.toLowerCase();
    for(let i=0; i<str.length; i++){
      if(str1[i]=='a' || str1[i]=='e' || str1[i]=='i' || str1[i]=='o' || str1[i]=='u' ){
        vowelCount+=1
      }
    }
    return vowelCount;


  // let vovels = new Set();
  // vovels.add("a");
  // vovels.add("e");
  // vovels.add("i");
  // vovels.add("o");
  // vovels.add("u");

  // let numberOfVovels = 0;

  // strLower = str.toLowerCase();

  // for (let i = 0; i < strLower.length; i++) {
  //   if (vovels.has(strLower[i])) {
  //     numberOfVovels++;
  //   }
  // }

  // return numberOfVovels;
}

module.exports = countVowels;