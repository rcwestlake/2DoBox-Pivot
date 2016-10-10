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
