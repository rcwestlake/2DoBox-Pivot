var saveButton = $('.savebtn');
var searchField = $('#search');
var title = $('#title').val();
var body = $('#body').val();

function saveIdea (title, body) {
  return $('.ideaList').append(`
    <li class="idea">
    <span class="title"> ${$('#title').val()} </span>
    <span class="body"> ${$('#body').val()} </span> </li>
    `);
  }

$('.savebtn').on('click', function (event) {
  event.preventDefault()
  saveIdea(title, body);
});





//give unique ids to ideas using timestamps via date.now//
