var saveButton = $('.savebtn');
var searchField = $('.search-field');
var titleInput = $('.title-input');
var bodyInput = $('.body-input');

//onLoad Functions, retrieve local storage//

onLoad();

function onLoad(){
  checkLocalMakeLocal();
  displayIdeas();
};

function checkLocalMakeLocal(){
  if (localStorage.getItem("ideas") === null){
    localStorage.setItem("ideas", JSON.stringify([]))
  };
};

function getIdeas(){
 return JSON.parse(localStorage.getItem("ideas"));
};

function displayIdeas(){
  var ideas = getIdeas();
  ideas.forEach(function(idea) {
    addNewIdea(idea.id, idea.title, idea.body, idea.quality);
  });
};

//defines an idea//
function Idea(id, title, body, quality){
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = quality;
};

//generates random id for each idea //
// function idGenerator() {
//   return Date.now().tostring();
// };

//save button disabled if input fields are empty//

function toggleButton (){
  if ($('.title-input').val().length > 0  || $('.body-input').val().length > 0) {
    $('.savebtn').attr('disabled', false);

  } else {
    $('.savebtn').attr('disabled', true);
  }
}
$('.body-input').on('keyup', function(){
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
  var newIdea = new Idea(Date.now(), getTitle(), getBody(), 'Swill')
  currentIdeas= getIdeas();
  currentIdeas.push(newIdea);
  localStorage.setItem('ideas', JSON.stringify(currentIdeas));
  formIdea(newIdea.id, newIdea.title, newIdea.body, 'Swill');
};

$('.savebtn').on('click', function (event) {
  event.preventDefault();
  addNewIdea();
  clearInputs();
  toggleButton();
});


function formIdea (id, title, body, quality) {
  return $('.ideaList').prepend(`
    <article id="`+ id +`" class="idea-card">
    <h2> class="editable" contenteditable="true">` + title + `</h2>
    <button class="delete-idea"></button>
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
