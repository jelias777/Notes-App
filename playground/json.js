const book = {
    title: 'The infinite game',
    author: 'Simon Sinek'
}

//JSON to JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

//String to JSON
const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author)