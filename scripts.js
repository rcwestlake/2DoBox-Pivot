var saveButton = $('.savebtn');
var searchField = $('#search');
var titleInput = $('#title');
var bodyInput = $('#body');
var ideaBox = [];
// var quality = '.quality';

// var storage = getLocalStorage() || [];
// renderToPage();
// voteDown();
// voteUp();



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

$('.savebtn').on('click', function() {
  var title = $('#title').val();
  var body = $('#body').val();
  var idea = new Idea(title, body);
  ideaBox.push(idea);
 storeIdea(ideaBox);
});

$('.savebtn').on('click', function (event) {
  event.preventDefault();
  formIdea(title, body);
  toggleButton();
});


function formIdea (id, title, body, quality) {
  return $('.ideaList').prepend(`
    <li class="idea swill" id= "${Date.now()}">

    <div class="title"> ${$('#title').val()} <input type="image" src="images/delete.svg" class="delete">
    </input>
    </div>

    <div class="body"> ${$('#body').val()} </div>

    <div class="quality">
    <input type="image" src="images/downvote.svg" class="down">
    <input type="image" src="images/upvote.svg"
    class="up">
    <p class="qualityword">quality: swill </p>
    </div>
    <hr>
    </li>

    `);
  };


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

// $('ul').on('click','.up', function () {
//   alert ('YO YO YO')
// });

$('ul').on('click', '.delete', function () {
  $(this).parent().parent().remove();
});

//UpVote//
$('ul').on('click', '.up', function () {
  if ($(this).parent().parent().hasClass('swill')) {
  $(this).parent().parent().addClass('plausible');
  $(this).parent().parent().removeClass('swill'); }
 else if ($(this).parent().parent().hasClass('plausible')) {
$(this).parent().parent().addClass('genius');
$(this).parent().parent().removeClass('plausible');
 }});

 //DownVote//

 $('ul').on('click', '.down', function () {
   if ($(this).parent().parent().hasClass('genius')) {
   $(this).parent().parent().addClass('plausible');
   $(this).parent().parent().removeClass('genius'); }
  else if ($(this).parent().parent().hasClass('plausible')) {
 $(this).parent().parent().addClass('swill');
 $(this).parent().parent().removeClass('plausible');
  }});

// Display Quality - UpVotes //

$('ul').on('click', '.up', function () {
if ($(this).parent().parent().hasClass('swill')) {
  $(this).siblings('.qualityword').text('quality: swill'); }
else if
($(this).parent().parent().hasClass('plausible')) {
  $(this).siblings('.qualityword').text('quality: plausible'); }
else if
($(this).parent().parent().hasClass('genius')) {
  $(this).siblings('.qualityword').text('quality: genius'); }
});

// Display Qulity - DownVotes //

$('ul').on('click', '.down', function () {
if ($(this).parent().parent().hasClass('swill')) {
  $(this).siblings('.qualityword').text('quality: swill'); }
else if
($(this).parent().parent().hasClass('plausible')) {
  $(this).siblings('.qualityword').text('quality: plausible'); }
else if
($(this).parent().parent().hasClass('genius')) {
  $(this).siblings('.qualityword').text('quality: genius'); }
});
