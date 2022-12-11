showNotes();
let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
  let addText = document.querySelector("#txtarea");
  console.log(addText.value);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }
  notes.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  addText.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }
  let html = "";
  notes.forEach((element, index) => {
    html += `
    <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5><hr>
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
  notesObj = JSON.parse(notes);
  notesObj.splice(index, 1);
  console.log(notesObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let searchTxt = document.querySelector('#searchTxt');

searchTxt.addEventListener("input", ()=>{
  let inputVal = searchTxt.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
