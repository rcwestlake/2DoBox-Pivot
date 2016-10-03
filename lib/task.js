
function Task(id, title, task, importance) {
  this.id = id || Date.now();
  this.title = title;
  this.task = task;
  this.importance = importance || 'Normal';
};

// need upvote prototype method
// need downvote prototype method
// need remove task prototype method
// need edit title prototype method
// need edit task prototype method
// need completed task prototype (toggle class of completed) method
