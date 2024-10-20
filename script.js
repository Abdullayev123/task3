// 1. for ile 1 den 100 e qeder edeleri ekrana cixarin : // with while
console.log("while ile");
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}
// with for
console.log("For ile");
for (let j = 1; j < 101; j++) {
  console.log(j);
}

// // 2. bir array yazin ve o array daki en kicik ededi tapan program yazin : // smallest number in an array
console.log("2) bir array yazin ve o array daki en kicik ededi tapan program");

const arr = [1, 3, 5, 6, 7, 88, 99, -100, 12387];
let minnum = arr[0];
for (let z = 0; z < arr.length; z++) {
  if (arr[z] < minnum) {
    minnum = arr[z];
  }
}
console.log("With for : ", minnum);
console.log("with Math :", Math.min(...arr));

// 3. bir array yazin ve o arraydaki en boyuk ededi tapan program yazin : // largest number in an array
console.log("3)Bir array yazin ve o arraydaki en boyuk ededi tapan program");
let maxnum = arr[0];
for (let z = 0; z < arr.length; z++) {
  if (arr[z] > minnum) {
    maxnum = arr[z];
  }
}
console.log(`With for : ${maxnum}`);
console.log(`With Math : ${Math.max(...arr)}`);

// // 4. bir eded secin ve o ededin sade mi murekkeb mi oldugunu tapan program yazin : // check if a number is prime or not
console.log(
  "4) Bir eded secin ve o ededin sade mi murekkeb mi oldugunu tapan program"
);
let number1 = parseInt(prompt("Write Number and I checked Prime or Not"));
let isPrime = true;
if (number1 === 1) {
  console.log(number1 + " is not prime / sade deil and not composite");
} else if (number1 > 1) {
  for (let i = 2; i < number1 / 2; i++) {
    if (number1 % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  if (isPrime) {
    console.log(number1 + " is prime / sadedir");
  } else {
    console.log(number1 + " is not composite / Murekkebdir");
  }
} else {
  console.log(number1 + " is not composite / Murekkebdir");
}

// 5.  bir array  yazin qarmasiq olsun o arrayi artan sira ile duzen program yazin : // sort an array in ascending order
// with bubble sort :
console.log(
  "5) Bir array  yazin qarmasiq olsun o arrayi artan sira ile duzen program"
);
let unsortedArray = [
  782, 12385, 1, 65, 785, 1234, 432, 8765, 236, 1324, 645, 75, 67, 58, 5678, 5,
  634, -234,
];
for (let i = unsortedArray.length - 1; i >= 0; i--) {
  for (let j = 0; j < unsortedArray.length; j++) {
    if (unsortedArray[j] > unsortedArray[j + 1]) {
      let key = unsortedArray[j];
      unsortedArray[j] = unsortedArray[j + 1];
      unsortedArray[j + 1] = key;
    }
  }
}
console.log(unsortedArray);

// 6. 1  den n e qeder ededlerin icindeki sade  ededleri tapan program yazin : // find prime numbers between 1 and n
console.log(
  "6) 1  den n e qeder ededlerin icindeki sade  ededleri tapan program "
);
let number = parseInt(prompt("Daxil et:"));
if (number === 1) {
  console.log(`${number} is not prime neither composite <3`);
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
} else {
  console.log(`${number} is not prime neither composite <3`);
}
