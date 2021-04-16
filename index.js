function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let a = fetch('https://anapioficeandfire.com/api/books/')
  a.then(Response => Response.json())
  .then(json => console.log(json));
  return a;
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    return renderBooks(json)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
