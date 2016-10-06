var TaskArray = require('./tasksArray');
var $ = require('jquery');

function Task (title, body, id, importance, completed) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.importance = importance || 'Normal';
  this.completed = completed || false;
}


Task.prototype.editTaskTitle = function () {

};

Task.prototype.editTaskBody = function () {

};

Task.prototype.addComparedTaskClass = function() {
  var specificTask = $(this).closest('.task'); // confirm this is the right hierarcy and class name
  specificTask.toggleClass('compared');
};

function allOtherArrays(r) {
  return r.id !== id;
}

function getSearch() {
  var searchInput = $('.search-field').val();
  return searchInput;
}

module.exports = Task;
