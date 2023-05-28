"use strict"

const jsonString = `
{
  "book": {
    "category": "CHILDREN",
    "title": {
      "lang": "en",
      "value": "Harry Potter"
    },
    "author": "J. K. Rowling",
    "year": "2005",
    "price": 29.99
  }
}
`
const data = JSON.parse(jsonString)
console.log(data);

const book = data.book
console.log(book);

const result = {
  category: book.category,
  lang: book.title.lang,
  title: book.title.value,
  author: book.author,
  year: +(book.year),
  price: +(book.price),
}
console.log(result);

const string = JSON.stringify(result)
console.log(string);