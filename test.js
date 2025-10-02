// ----------------- ArrayTasks -----------------

let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];

function flattenAndSortUnique(arr) {
  let flat = [];
  function flatten(a) {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) flatten(a[i]);
      else flat.push(a[i]);
    }
  }
  flatten(arr);

  let unique = [];
  for (let i = 0; i < flat.length; i++) {
    if (!unique.includes(flat[i])) {
      unique.push(flat[i]);
    }
  }

  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      if (unique[i] > unique[j]) {
        [unique[i], unique[j]] = [unique[j], unique[i]];
      }
    }
  }
  return unique;
}

console.log(flattenAndSortUnique(arr));

let products = [
  { name: "Phone", price: 1200, rating: 4.5 },
  { name: "Laptop", price: 2500, rating: 4.8 },
  { name: "Book", price: 30, rating: 4.9 },
  { name: "TV", price: 800, rating: 4.0 },
];

function highestRatedUnder1000(products) {
  let best = null;
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    if (p.price < 1000) {
      if (!best || p.rating > best.rating) {
        best = p;
      }
    }
  }
  return best;
}

console.log(highestRatedUnder1000(products));

let sentence = "dog cat dog bird cat dog fish bird";
let words = sentence.split(" ");

let count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(count);

function mostRepeated(count) {
  let maxWord = null;
  let maxCount = 0;
  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      maxWord = key;
    }
  }
  return { maxWord, maxCount };
}

console.log(mostRepeated(count));

// ----------------- ForLoop Tasks -----------------

function countLetter(str, letter) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) cnt++;
  }
  return cnt;
}

console.log(countLetter("banana", "a"));

function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("abba"));

function mergeUniqueSum(arr1, arr2) {
  let merged = [...arr1, ...arr2];
  let unique = [];
  for (let i = 0; i < merged.length; i++) {
    if (!unique.includes(merged[i])) unique.push(merged[i]);
  }
  let sum = unique.reduce((acc, num) => acc + num, 0);
  return { unique, sum };
}

console.log(mergeUniqueSum([1, 2, 3], [3, 4, 5]));

function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(factorial(5));

function twoSum(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));
