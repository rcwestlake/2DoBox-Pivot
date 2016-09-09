var saveButton = $('.savebtn');
var searchField = $('#search');
var title = $('#title').val();
var body = $('#body').val();
var timestamp = Date.now();

// var storage = getLocalStorage() || [];
// renderToPage();
// voteDown();
// voteUp();

$('.savebtn').on('click', function (event) {
  event.preventDefault();
  saveIdea(title, body);
  $('#form')[0].reset();

  toggleButton();
});



function saveIdea (title, body) {
  this.title = title;
  this.body = body;
  this.timestamp = Date.now();
  return $('.ideaList').prepend(`
    <li class="idea" id= "${Date.now()}">

    <div class="title"> ${$('#title').val()} <input type="image" src="images/delete.svg" class="delete">
    </input>
    </div>

    <div class="body"> ${$('#body').val()} </div>

    <div class="quality">
    <input type="image" src="images/downvote.svg" class="down">
    <input type="image" src="images/upvote.svg"
    class="up">
    <p class="qualityword">quality:</p>
    <p class="status">swill</p>
    </div>

    </li>
    <hr>
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
