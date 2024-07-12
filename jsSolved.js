//First Question :
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 28, gender: "female" },
  { name: "David", age: 22, gender: "male" },
  { name: "Eve", age: 35, gender: "female" },
];

const names = people
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);
// console.log("Names:", names);

//Second Question :
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

const bookTitles = books.map((book) => book.title);
// console.log("Book Title:", bookTitles);

//Third Question :

const squareDoubleAddFive = (num) => {
  const square = (num) => num * num;
  const double = (num) => num * 2;
  const addFive = (num) => num + 5;
  return addFive(double(square(num)));
};
const result = squareDoubleAddFive(3);
// console.log(result);

//Four Question :
const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2021 },
];

const sortCars = cars.sort((a, b) => a.year - b.year);
// console.log(sortCars);

//Five Number Question :

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvens = numbersArray.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);

console.log("Sum of even numbers:", sumOfEvens);
