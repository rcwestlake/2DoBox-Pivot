var Task =  require('./task');
require('./tasksArray');









// const $ = require('jquery');


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
  debugger;
  var task = new Task(getTitle(), getBody());
  console.log(task) // require Task at top of page, ensure it references the right function
});

function getTitle() {
  var taskTitle = $titleInput.val();
  return taskTitle;
}

function getBody() {
  var taskBody = $bodyInput.val();
  return taskBody;
}
