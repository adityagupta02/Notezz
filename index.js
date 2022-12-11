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
  let html = '';
  notes.forEach((element, index) => {
    html += `
    <div class="card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <a href="#" class="btn btn-primary deleteButton">Delete</a>
        </div>
    </div>`;
  });
  let yourNotes = document.querySelector('#yourNotes');
  if(notes.length != 0)
    yourNotes.innerHTML = html;
}
