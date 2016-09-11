var saveButton = $('.savebtn');
var searchField = $('#search');
var titleInput = $('#title');
var bodyInput = $('#body');
var ideaBox = [];

//onLoadFunctions//

onLoad();

function onLoad(){
  checkLocalMakeLocal();
  displayIdeas();
};

function checkLocalMakeLocal(){
  if (localStorage.getItem("ideaBox") === null){
    localStorage.setItem("ideabox", JSON.stringify([]))
  };
};

//STORAGE//
function storeIdea(title){
 this.title= title;
 localStorage.setItem('Idea', JSON.stringify(ideaBox));
}

function getIdeas(title){
 var retrieveIdea = JSON.parse(localStorage.getItem(ideaBox));
}


//defines an idea//
function Idea(title, body, id, quality){
  this.title = title;
  this.body = body;
  this.id = parseInt(id);
  this.quality = quality;
};

//generates random id for each idea box//
function randomId() {
  return Date.now().tostring();
};

//save button disabled if input fields are empty//

function toggleButton (){
  if ($('#title').val().length > 0  || $('#body').val().length > 0) {
    $('.savebtn').attr('disabled', false);

  } else {
    $('.savebtn').attr('disabled', true);
  }
}
$('#body').on('keyup', function(){
  toggleButton();
});

//grabs what user types in title & body input fields//
function getTitle() {
  var ideaTitle = titleInput.val();
  return ideaTitle;
};

function getBody() {
  var ideaBody = bodyInput.val();
  return ideaBody;
};

function clearInputs() {
  $('#form')[0].reset();
}

//takes inputs, puts them into an object for storage, pushes that box to storage, and displays new box on screen//
function addNewIdea() {
  var newIdea = new Idea(randomID(), getTitle(), getBody(), 'Swill')
  currentIdeas= getIdeas();
  currentIdeas.push(newIdea);
  local.Storage.setItem('ideaBox', JSON.stringify(currentIdeas));
  formIdea(newIdea.id, newIdea.title, newIdea.body, 'Swill');
  clearInputs();
};

$('.savebtn').on('click', function (event) {
  event.preventDefault();
  addNewIdea();
  toggleButton();
});


function formIdea (id, title, body, quality) {
  return $('.ideaList').prepend(`
    <li id="`+ id +`" class="idea-box">
    <h2> class="editable" contenteditable="true">` + title + `</h2>
    <button class="delete"></button>
    <p class="editable idea-body" contenteditable="true">`+ body +`</p>
    <button class="up"></button>
    <button class="down"></button>
    <p class="idea-quality ` + quality +`"><span>Quality:</span> <span class="quality-displayed">` + quality + `</span> </p>
    <hr>
    </li>
    `);
  };


// $('ul').on('click','.up', function () {
//   alert ('YO YO YO')
// });
