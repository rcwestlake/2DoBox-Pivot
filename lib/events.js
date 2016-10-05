const $ = require('jquery');


// define globals for main functions
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save');
// upvote button
// downvote button
// remove button
// completed tasks button


// input field character counter


$($saveButton).on('click', function() {
  var task = new Task(id, Task.getTitle(), Task.getBody(), importance);
  console.log(task) // require Task at top of page, ensure it references the right function
});
