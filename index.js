showNotes();
let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
  let addText = document.querySelector("#txtarea");
  let noteTitle = document.querySelector("#noteTitle");
  console.log(addText.value);
  let notes = localStorage.getItem("notes");
  let notesTitles = localStorage.getItem("notesTitles");
  if (notes == null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }
  if (notesTitles == null) {
    notesTitles = [];
  } else {
    notesTitles = JSON.parse(notesTitles);
  }
  notes.push(addText.value);
  notesTitles.push(noteTitle.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  addText.value = "";
  noteTitle.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  let notesTitles = localStorage.getItem("notesTitles");
  if (notes == null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }
  if (notesTitles == null) {
    notesTitles = [];
  } else {
    notesTitles = JSON.parse(notesTitles);
  }
  let html = "";
  notes.forEach((element, index) => {
    html += `
    <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${notesTitles[index]}</h5><hr>
            <p class="card-text">${element}</p>
            <button id = "${index}" onClick = "deleteNote(this.id)" class="btn btn-primary deleteButton">Delete</button>
        </div>
    </div>`;
  });
  let yourNotes = document.querySelector("#yourNotes");
  yourNotes.innerHTML = html;
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  let notesTitles = localStorage.getItem("notesTitles");
  notesObj = JSON.parse(notes);
  notesTitles = JSON.parse(notesTitles);
  notesObj.splice(index, 1);
  notesTitles.splice(index, 1);
  console.log(notesObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  showNotes();
}

let searchTxt = document.querySelector("#searchTxt");

searchTxt.addEventListener("input", () => {
  let inputVal = searchTxt.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    let cardTitle = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
    if (cardTxt.includes(inputVal) || cardTitle.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
