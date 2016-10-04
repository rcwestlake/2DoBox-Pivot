const $ = require('jquery');

function Task(id, title, task, importance) {
  this.id = id || Date.now();
  this.title = title;
  this.task = task;
  this.importance = importance || 'Normal';
}

Task.prototype.upVote = function () {
  let importance = this.importance;
  this.importance = increaceImportance[importance];

  let increaceImportance = {
    'None': 'Low',
    'Low': 'Normal',
    'Normal': 'High',
    'High': 'Critical'
  };
  return 2dos.store(); // need to write this function
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
  return 2dos.store(); // need to write this function
};

Task.prototype.remove = function() {
  var allTasks = allTasks.filter(allOtherArrays);
  2dos.store(); // stores new array, need to write
  2dos.render(); // renders new arrary, need to write
};

function allOtherArrays(r) {
  return r.id !== id;
}

Task.prototype.editTaskTitle = function () {

};

Task.prototype.editTaskBody = function () {
  
};


// need upvote prototype method
// need downvote prototype method
// need remove task prototype method
// need edit title prototype method
// need edit task prototype method
// need completed task prototype (toggle class of completed) method
