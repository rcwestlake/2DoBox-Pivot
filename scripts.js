var saveButton = $('.savebtn');
var searchField = $('#search');
var title = $('#title').val();
var body = $('#body').val();

function saveIdea (title, body) {
  return $('.ideaList').prepend(`
    <li class="idea">

    <div class="title"> ${$('#title').val()} <input type="image" src="images/delete.svg" class="delete"></input></div>

    <div class="body"> ${$('#body').val()} </div>

    <div class="quality"> <img class="down" src="images/downvote.svg"> <img class="up" src="images/upvote.svg"> <p class="qualityword"> quality:</p> <p class="status">swill</p> </div>
    </li>
    <hr>
    `);
  };

// $('ul').on('click','.delete', function () {
//   console.log ('YO YO YO')
// });

$('.savebtn').on('click', function (event) {
  event.preventDefault()
  saveIdea(title, body);
  $('#form')[0].reset();
});





//give unique ids to ideas using timestamps via date.now//
