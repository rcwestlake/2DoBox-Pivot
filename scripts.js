var saveButton = $('.savebtn');
var searchField = $('#search');

function saveIdea (title, body) {
  return $('.ideaList').append(`
    <li class="idea">
    <span> ${$('.title').val()} </span>
    <span> ${$('.body').val()} </span> </li>
    `);
  }

$('.savebtn').on('click', function (event) {
  event.preventDefault()
  var title = $('.title').val();
  var body = $('.body').val();

  saveIdea(title, body);

});



//give unique ids to ideas using timestamps via date.now//
