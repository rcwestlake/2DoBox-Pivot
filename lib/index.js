var TaskArray = require('./tasksArray');
var Task = require('./task');


// define globals for main functions
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save');
var $taskList = $('.task-list');
// upvote button
// downvote button
// remove button
// completed tasks button


// input field character counter

$(document).ready(function(){
  TaskArray.populateArray();
  TaskArray.renderArray();
});


$($saveButton).on('click', function() {
  var task = new Task(getTitle(), getBody());
  console.log(task);
  TaskArray.pushToArray(task);
  TaskArray.store();
  TaskArray.renderTasksToHtml(task);
});

$($taskList).on('click', '.remove-task', function(e){
  var id = parseInt($(this).parent().attr('id'));
  TaskArray.findTaskById(id);
  TaskArray.removeTask(id);
});

$($taskList).on('click', '.upvote', function(e){
  console.log(this);
  var id = parseInt($(this).parent().attr('id'));
  console.log(id);
  var task = TaskArray.findTaskById(id);
  TaskArray.upVote(task);
});

$($taskList).on('click', '.downvote', function(e){
  console.log(this);
  var id = parseInt($(this).parent().attr('id'));
  console.log(id);
  var task = TaskArray.findTaskById(id);
  TaskArray.downVote(task);
});



function getTitle() {
  var taskTitle = $titleInput.val();
  return taskTitle;
}

function getBody() {
  var taskBody = $bodyInput.val();
  return taskBody;
}
