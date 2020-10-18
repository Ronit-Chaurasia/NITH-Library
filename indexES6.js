class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    let tableBody = document.getElementById("tableBody");

    let uiString = `<tr>
                        <td>${book.name.toUpperCase()}</td>
                        <td>${book.author.toUpperCase()}</td>
                        <td>${book.type.toUpperCase()}</td>
                    </tr>`;

    tableBody.innerHTML += uiString;
  }

  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }

  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  };

  show (type, data) {
    let message = document.getElementById("message");
    if(type==="Success"){
    message.innerHTML = `<div style="background: #98fb98" class="alert alert-${type} alert-dismissible fade show" role="alert">
                              <strong>Message : ${data}!</strong> 
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                          </div>`;
    }
    if(type==="error"){
      message.innerHTML = `<div style="background: #ff5842" class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message : ${data}!</strong> 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
      }
      setTimeout(function(){
          message.innerHTML="";
      } , 4000);
  };
}


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
    display.show("error","Sorry, you cannot add this book!. Book name and author's name must contain more than 2 characters");
  }

  e.preventDefault();
}