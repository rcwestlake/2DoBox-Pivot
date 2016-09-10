var saveButton = $('.savebtn');
var searchField = $('#search');
var title = $('#title').val();
var body = $('#body').val();

// var storage = getLocalStorage() || [];
// renderToPage();
// voteDown();
// voteUp();

$('.savebtn').on('click', function (event) {
  event.preventDefault();
  formIdea(title, body);
  $('#form')[0].reset();

  toggleButton();
});


function formIdea (title, body) {
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
