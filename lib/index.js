var TaskArray = require('./tasksArray');
var Task = require('./task');


var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $saveButton = $('.save');
var $taskList = $('.task-list');
var $searchField = $('.search-field');
// completed tasks button

// input field character counter

$(document).ready(function(){
  TaskArray.populateArray();
  TaskArray.renderUncompletedTasks();
});


$($saveButton).on('click', function() {
  var task = new Task(getTitle(), getBody());
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
  var id = parseInt($(this).parent().attr('id'));
  var task = TaskArray.findTaskById(id);
  TaskArray.upVote(task);
  var taskArticle = $('#' + id);
  var taskImportance = taskArticle.find('.displayed-importance');
  taskImportance[0].textContent = task.importance;
});

$($taskList).on('click', '.downvote', function(e){
  var id = parseInt($(this).parent().attr('id'));
  var task = TaskArray.findTaskById(id);
  TaskArray.downVote(task);
  var taskArticle = $('#' + id);
  var taskImportance = taskArticle.find('.displayed-importance');
  taskImportance[0].textContent = task.importance;
});

$($taskList).on('keyup', '.task-title', function(){
  var self = this;
  var id = parseInt($(this).parent().attr('id'));
  var task = TaskArray.findTaskById(id);
  TaskArray.updateTitle(task, self);
});

$($taskList).on('keyup', '.task-body', function(){
  var self = this;
  var id = parseInt($(this).parent().attr('id'));
  var task = TaskArray.findTaskById(id);
  TaskArray.updateBody(task, self);
});

$($taskList).on('click', '.completed-button', function(){
  var id = parseInt($(this).parent().attr('id'));
  var task = TaskArray.findTaskById(id);
  TaskArray.markCompleted(task);
});

$($searchField).on('keyup', function(){
  var searchInput = $searchField.val();
  TaskArray.search(searchInput);
});

$('.show-completed-button').on('click', function(){
  TaskArray.clearListContainer();
  TaskArray.sortTasks();
  TaskArray.renderArray();
});

$('.remove-completed-button').on('click', function(){
  TaskArray.clearListContainer();
  TaskArray.renderUncompletedTasks();
});

$($taskList).on('click', '.completed-button', function(){
  $(this).parent().toggleClass('true');
});

function getTitle() {
  var taskTitle = $titleInput.val();
  return taskTitle;
}

function getBody() {
  var taskBody = $bodyInput.val();
  return taskBody;
}
