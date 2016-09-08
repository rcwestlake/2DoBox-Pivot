var saveButton = $('.savebtn');
var searchField = $('#search');
var title = $('#title').val();
var body = $('#body').val();

function saveIdea (title, body) {
  return $('.ideaList').append(`
    <li class="idea">

    <span class="title"> ${$('#title').val()} <img class="delete" src="images/delete.svg"></span>

    <span class="body"> ${$('#body').val()} </span>

    <span class="quality"> <img class="down" src="images/downvote.svg"> <img class="up" src="images/upvote.svg"> <p class="qualityword"> quality:</p> <p class="status">swill</p> </span>
    </li>
    <hr>
    `);
  }

$('.savebtn').on('click', function (event) {
  event.preventDefault()
  saveIdea(title, body);
  $('#form')[0].reset();
});





//give unique ids to ideas using timestamps via date.now//
