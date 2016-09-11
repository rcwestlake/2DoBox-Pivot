var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.savebtn');

//onLoad Functions, retrieve local storage//

onLoad();

function onLoad(){
  checkLocalMakeLocal();
  populateDOM();
};

function checkLocalMakeLocal(){
  if (localStorage.getItem("ideas") === null){
    localStorage.setItem("ideas", JSON.stringify([]))
  };
};

function populateDOM(){
  var ideas = getIdeas();
  ideas.forEach(function(idea) {
    addNewIdea(idea.id, idea.title, idea.body, idea.quality);
  });
};

function getIdeas(){
 return JSON.parse(localStorage.getItem("ideas"));
};


//defines an idea//
function Idea(id, title, body, quality) {
  this.id = parseInt(id);
  this.title = title;
  this.body = body;
  this.quality = quality;
};

// generates random id for each idea //
function idGenerator() {
  return Date.now().toString();
};

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
  var ideaTitle = $titleInput.val();
  return ideaTitle;
};

function getBody() {
  var ideaBody = $bodyInput.val();
  return ideaBody;
};

function clearInputs() {
  $titleInput.val('');
  $bodyInput.val('');
};

//takes inputs, puts them into an object for storage, pushes that box to storage, and displays new box on screen//
function makeNewIdea() {
  var newIdea = new Idea(idGenerator(), getTitle(), getBody(), 'Swill')
  currentIdeas= getIdeas();
  currentIdeas.push(newIdea);
  localStorage.setItem('ideas', JSON.stringify(currentIdeas));
  formIdea(newIdea.id, newIdea.title, newIdea.body, 'Swill');
  clearInputs();
  toggleButton();
};

$($saveButton).on('click', makeNewIdea);

function makeIdeaCard (id, title, body, quality) {
  return $('.ideaList').prepend(`
    <article id="`+ id +`" class="idea-card">
    <h2> class="editable" contenteditable="true">` + title + `</h2>
    <button class="delete-idea"></button>
    <p class="editable idea-body" contenteditable="true">`+ body +`</p>
    <button class="up"></button>
    <button class="down"></button>
    <p class="idea-quality ` + quality +`"><span>Quality:</span> <span class="quality-displayed">` + quality + `</span> </p>
    <hr>
    </article>
    `);
  };


// $('ul').on('click','.up', function () {
//   alert ('YO YO YO')
// });
