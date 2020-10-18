console.log("This is index.js");

// Add Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display Constructor
function Display() {}

// Add method to display prototype
Display.prototype.add = function (book) {
  tableBody = document.getElementById("tableBody");

  let uiString = `<tr>
                        <td>${book.name.toUpperCase()}</td>
                        <td>${book.author.toUpperCase()}</td>
                        <td>${book.type.toUpperCase()}</td>
                    </tr>`;

  tableBody.innerHTML += uiString;
};

//Implement the clear function.
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//Implement the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, data) {
  let message = document.getElementById("message");
  if(type=="Success"){
  message.innerHTML = `<div style="background: #98fb98" class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message : ${data}!</strong> 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
  }
  if(type=="error"){
    message.innerHTML = `<div style="background: #ff5842" class="alert alert-${type} alert-dismissible fade show" role="alert">
                              <strong>Message : ${data}!</strong> 
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                          </div>`;
    }
    setTimeout(function(){
        message.innerHTML="";
    } , 5000);
};

// Add submit eventlistener to Add Book button
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted the form");

  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  if (fiction.checked) {
    type = fiction.value;
  }
  if (programming.checked) {
    type = programming.value;
  }
  if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Success", "Your book has been successfully added.");
  } else {
    //show error to user
    display.show(
      "error",
      "Sorry, you cannot add this book!. Book name and author's name must contain more than 2 characters"
    );
  }

  e.preventDefault();
}
