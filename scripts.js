var saveButton = $('.savebtn');
var searchField = $('#search');
var title = $('#title').val();
var body = $('#body').val();
var timestamp = Date.now();

function saveIdea (title, body, timestamp) {
  this.title = title;
  this.body = body;
  this.timestamp = Date.now();
  return $('.ideaList').prepend(`
    <li class="idea">

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

// $('ul').on('click','.up', function () {
//   alert ('YO YO YO')
// });

$('.savebtn').on('click', function (event) {

  event.preventDefault();
  saveIdea(title, body, timestamp);
  $('#form')[0].reset();
  $('li').attr('id', timestamp)
});


//give unique ids to ideas using timestamps via date.now//
