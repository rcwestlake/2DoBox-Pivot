var Task =  require('./task');
var TaskArray = require('./tasksArray');









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

$(document).ready(function(){
  TaskArray.renderArray();
});


$($saveButton).on('click', function() {
  var task = new Task(getTitle(), getBody());
  console.log(task);
  TaskArray.pushToArray(task);
  TaskArray.store();
  TaskArray.renderTasksToHtml(task);
  // require Task at top of page, ensure it references the right function
});

$('.task-list').on('click', '.remove-task', function(e){
  var id = parseInt($(this).parent().attr('id'));
  TaskArray.findTaskById(id);
  TaskArray.removeTask(id);
});

function getTitle() {
  var taskTitle = $titleInput.val();
  return taskTitle;
}

function getBody() {
  var taskBody = $bodyInput.val();
  return taskBody;
}
