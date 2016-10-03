
function Task(id, title, task, importance) {
  this.id = id || Date.now();
  this.title = title;
  this.task = task;
  this.importance = importance || 'Normal';
};
