// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor.  we are not passing anything. it is just an empty function
function UI() {}

// Add Book to List.  Create a prototype object
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class = "delete"> X <a></td>

    `;
  list.appendChild(row);
};
// Show Alert
UI.prototype.ShowAlert = function(message, className) {
  // create div
  const div = document.createElement('div');
  //Add classes
  div.className = `alert ${className}`;
  //Add text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // get form
  const form = document.querySelector('#book-form');

  //Insert Alert. the first argument is what we want to insert and the second is where we want to insert it before

  container.insertBefore(div, form);

  // Timeout after 3 seconds

  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
};
// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value;
  isbn = document.getElementById('isbn').value;

  // instantiate book
  const book = new Book(title, author, isbn);
  // instantiate UI object
  const ui = new UI();
  // Validate
  if (title === '' || author === '' || isbn === '') {
    ui.ShowAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // show success
    ui.ShowAlert('Book Added!', 'Success');
    // clear fields
    ui.clearFields();
    
  }

  e.preventDefault();
});
