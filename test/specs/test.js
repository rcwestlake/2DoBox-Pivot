const assert = require('assert');

describe('attributes on our application',function(){

  it('has input forms for title and body, and I can set values in those forms', function(){
    browser.url('/')
    var taskTitle = browser.element(".title-input")
    var taskBody = browser.element(".body-input")

    taskTitle.setValue('great title')
    taskBody.setValue('great body')

    assert.equal(taskTitle.getValue(), 'great title')
    assert.equal(taskBody.getValue(), 'great body')
  });

  it('should be able to add my tasks to the page',function(){
      browser.url('/')
      var taskTitle = browser.element(".title-input")
      var taskBody = browser.element(".body-input")

      taskTitle.setValue('great title')
      taskBody.setValue('great description')

      assert.equal(taskTitle.getValue(), 'great title')
      assert.equal(taskBody.getValue(), 'great description')

      browser.click('.save')

      var allTasks = browser.getText('.task-title')
      assert.equal(allTasks.replace(/\n/g, ", "), 'great title')

  });

  it('should be able to upvote the importance of a task from normal to high', function() {
    browser.url('/')

    browser.click('.upvote')

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'High')
  });

  it('should be able to downvote the importance of a task from high to normal', function() {
    browser.url('/')

    browser.click('.downvote')

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'Normal')

  });

  it('should be able to upvote the importance of a task from normal to critical with two clicks', function() {
    browser.url('/')

    browser.click('.upvote')
    browser.click('.upvote')

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'Critical')

  });

  it('should be able to allow tasks to persist on reload', function() {
    browser.url('/')
    browser.refresh()

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'Critical')

  });

  it('should be able to allow tasks to remain in local storage on reload', function(){
    browser.url('/')
    browser.refresh()

    var allTasks = browser.localStorage('GET', allTasks)
    assert.equal(allTasks[0].title, 'great title')

  });

  it('should be able to delete a single task from the page', function(){
    browser.url('/')
    browser.click('.remove-task')

    assert.equal(browser.isExisting('.task'), false );
  })

  // it('should be able to add my tasks to local storage',function(){
  //     browser.url('/')
  //     var taskTitle = browser.element(".title-input")
  //     var taskBody = browser.element(".body-input")
  //
  //     taskTitle.setValue('great title')
  //     taskBody.setValue('great description')
  //
  //     assert.equal(taskTitle.getValue(), 'great title')
  //     assert.equal(taskBody.getValue(), 'great description')
  //
  //     browser.click('.save')
  //
      // var allTasks = client.localStorage('GET', allTasks)
      // assert.equal(allTasks[1].title.replace(/\n/g, ", "), 'great title')
  //
  // });


  // TODO: editing an existing to do (body and title)
  // Searching - should filter just the tasks containing the input value
  // Make as complete (css should be a certain way)
  // critical, high, normal, low, non importance
  // should only show ten most recent
  // filter by importance
  // character counter - disabled if

});
