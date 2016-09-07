var title = $('#title');
var body = $('#body');
var saveButton = ('#save');
var searchField = ('#search');

//give unique ids to ideas using timestamps via date.now//

// $(document).ready( function () {alert("Hello, world")
//   });
$('#savebtn').on('click', function () {
  var title = $('#title').val();
  var body = $('#body').val();

  saveIdea (title, body);

  function saveIdea (title, body) {
    return $('.ideaList').append(
      '<li class="idea">' +
        '<span>' + title +'</span>' +
        body + '</li>'
    );
  }
});
