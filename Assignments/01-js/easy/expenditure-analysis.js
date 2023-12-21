/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const output = {};

  for (const transaction of transactions) {
      const { category, price } = transaction;
      if (!output[category]) {
          output[category] = price;
      } else {
          output[category] += price;
      }
  }

  let result = [];
  for (const x in output) {
      result.push({ category: x, totalSpent: output[x] });
  }
  return result;

  // let myMap = new Map();

  // for (let i of transactions) {
  //   const { category, price } = i;
  //   if (!myMap.has(category)) {
  //     myMap.set(category, price);
  //   } else {
  //     myMap.set(category, myMap.get(category) + price);
  //   }
  // }

  // let resultArr = [];

  // myMap.forEach((value, key) => {
  //   resultArr.push({ category: key, totalSpent: value });
  // });

  // return resultArr;

}

module.exports = calculateTotalSpentByCategory;
