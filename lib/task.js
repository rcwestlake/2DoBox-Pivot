const $ = require('jquery');

function Task(title, body, id, importance) {

  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.importance = importance || 'Normal';
}

// need upvote prototype method
// need downvote prototype method
// need remove task prototype method
// need edit title prototype method
// need edit task prototype method
// need completed task prototype (toggle class of completed) method

Task.prototype.upVote = function () {
  let importance = this.importance;
  this.importance = increaceImportance[importance];

  let increaceImportance = {
    'None': 'Low',
    'Low': 'Normal',
    'Normal': 'High',
    'High': 'Critical'
  };
  return tasksArray.store(); // need to write this function
};

Task.prototype.downVote = function () {
  let importance = this.importance;
  this.importance = increaceImportance[importance];

  let increaceImportance = {
    'Critical': 'High',
    'High': 'Normal',
    'Normal': 'Low',
    'Low': 'None'
  };
  return tasksArray.store(); // need to write this function
};


Task.prototype.editTaskTitle = function () {

};

Task.prototype.editTaskBody = function () {

};

Task.prototype.addCompletedTaskClass = function() {
  var specificTask = $(this).closest('.task'); // confirm this is the right hierarcy and class name
  specificTask.toggleClass('completed');
};

function allOtherArrays(r) {
  return r.id !== id;
}

// function getTitle() {
//   var taskTitle = $titleInput.val();
//   return taskTitle;
// }
//
// function getBody() {
//   var taskBody = $bodyInput.val();
//   return taskBody;
// }

function getSearch() {
  var searchInput = $('.search-field').val();
  return searchInput;
}

module.exports = Task;
