const assert = require('chai').assert
const TaskArray = require('../lib/tasksArray');
const Task = require('../lib/task');


describe('our Task Array', function () {
  it('should work', function () {
    assert(true)
  });
  it('should have a "store" method', function(){
    assert.isFunction(TaskArray.store);
  });
  it('should have a "retrieve" method', function(){
    assert.isFunction(TaskArray.retrieve);
  });
  it('should have a "renderTasksToHtml" method', function(){
    assert.isFunction(TaskArray.renderTasksToHtml)
  });
  it('should have a "renderTasksToHtmlAppend" method',function(){
    assert.isFunction(TaskArray.renderTasksToHtmlAppend)
  })
  it('should have a "populateArray" method', function(){
    assert.isFunction(TaskArray.populateArray)
  })
  it('should have a "renderCompletedTasks" method', function(){
    assert.isFunction(TaskArray.renderCompletedTasks)
  })
  it('should have a "renderUncompletedTasks" method', function(){
    assert.isFunction(TaskArray.renderUncompletedTasks)
  })
  it('should have a "renderUncompletedTasksAppend" method', function(){
    assert.isFunction(TaskArray.renderUncompletedTasksAppend)
  })
  it('should have an "upVote" method', function(){
    assert.isFunction(TaskArray.upVote)
  })
  it('should have a "downVote" method', function(){
    assert.isFunction(TaskArray.downVote)
  })
  it('should have an "updateTitle" method', function(){
    assert.isFunction(TaskArray.updateTitle)
  })
  it('should have an "updateBody" method', function(){
    assert.isFunction(TaskArray.updateBody)
  })
  it('should have a "removeTask" method', function(){
    assert.isFunction(TaskArray.removeTask)
  })
  it('should have a "markCompleted" method', function(){
    assert.isFunction(TaskArray.markCompleted)
  })
  it('should have a "sortTasksByCompleted" method', function(){
    assert.isFunction(TaskArray.sortTasksByCompleted)
  })
  it('should have a "sliceArray" method', function(){
    assert.isFunction(TaskArray.sliceArray)
  })
  it('should have a "clearListContainer" method', function(){
    assert.isFunction(TaskArray.clearListContainer)
  })
  it('should have a "clearUncompleteList" method', function(){
    assert.isFunction(TaskArray.clearUncompleteList)
  })
  it('should have a "findTaskById" method', function(){
    assert.isFunction(TaskArray.findTaskById)
  })
  it('should have a "allOtherArrays" method', function(){
    assert.isFunction(TaskArray.allOtherArrays)
  })
  it('should have a "search" method', function(){
    assert.isFunction(TaskArray.search)
  })
  it('should have a "filterByImportance" method', function(){
    assert.isFunction(TaskArray.filterByImportance)
  })
  it('should have a "filterAll" method', function(){
    assert.isFunction(TaskArray.filterAll)
  })
  it('should have a "clearInputs" method', function(){
    assert.isFunction(TaskArray.clearInputs)
  })
  it('should have a "toggleButton" method', function(){
    assert.isFunction(TaskArray.toggleButton)
  })
  it('should have a "inputCounter" method', function(){
    assert.isFunction(TaskArray.inputCounter)
  })
  it('should have a "bodyCounter" method', function(){
    assert.isFunction(TaskArray.bodyCounter)
  })
});

describe('our Task', function () {
  it('should be a constructor function', function(){
    assert.isFunction(Task)
  })

  it('should instantiate a task', function(){
    var task = new Task();
    assert.isObject(task);
  })

  it('should have a title property', function(){
    var task = new Task('great title');
    assert.equal(task.title, 'great title')
  })

  it('should have a body property', function(){
    var task = new Task('great title', 'fabulous body');
    assert.equal(task.body, 'fabulous body');
  })

  it('should have an id', function() {
    var task = new Task('great title', 'fabulous body', 123)
    assert.equal(task.id, 123)
  })

  it('should have an importance', function() {
    var task = new Task('great title', 'fabulous body', 123, 'Normal')
    assert.equal(task.importance, 'Normal')
  })

  it('should have an completed status', function() {
    var task = new Task('great title', 'fabulous body', 123, 'Normal', false)
    assert.equal(task.completed, false)
  })

  it('should have a prototype method called addComparedTaskClass', function(){
    var task = new Task()
    assert.isFunction(task.addComparedTaskClass)
  })
});

describe('taskArray functions', function () {

  it('should push a new task to the allTasks array', function(){
    var task = new Task('great title', 'fabulous body', 123, 'Normal', false);
    TaskArray.pushToArray(task)
    assert.equal(TaskArray.allTasks.length, 1)
  })

  it('should store the new task to localstorage with the store function', function(){
    TaskArray.store();
    var taskFromLocalStorage = JSON.parse(localStorage.getItem('allTasks'))
    assert.equal(taskFromLocalStorage.length, 1)
  })

  it('should retrieve the new task from localStorage with the retrieve function and push it to the allTasks array with the populateArray method', function() {
    TaskArray.retrieve()
    TaskArray.populateArray()
    assert.equal(TaskArray.allTasks.length, 2)
  })

  it("should set a task's importance from Normal to Low with the downVote method", function() {
      var task = new Task('great title', 'fabulous body', 123, 'Normal', false);
      TaskArray.downVote(task)
      assert.equal(task.importance, 'Low')
  })

  it("should set a task's importance from Normal to High with the upVote method", function() {
      var task = new Task('great title', 'fabulous body', 123, 'Normal', false);
      TaskArray.upVote(task)
      assert.equal(task.importance, 'High')
  })

  it('should remove a task from the allTasks array with the removeTask feature', function() {
    var task = new Task('great title', 'fabulous body', 123, 'Normal', false);
    TaskArray.pushToArray(task)
    TaskArray.removeTask(task.id)
    assert.equal(TaskArray.allTasks.length, 0)
  })

  it("should set a task's completed status to true if the markCompleted method is called", function(){
      var task = new Task('great title', 'fabulous body', 123, 'Normal', false);
      TaskArray.markCompleted(task)
      assert.equal(task.completed, true)
  })

});
