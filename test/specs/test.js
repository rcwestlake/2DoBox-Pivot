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
  //
  // it('should be able to allow tasks to remain in local storage on reload', function(){
  //   browser.url('/')
  //   browser.refresh()
  //
  //   var allTasks = browser.localStorage('GET', allTasks)
  //   var allTasks = JSON.parse(allTasks)
  //   assert.equal(allTasks[0].title, 'great title')
  //
  // });
  //

  it('should be able to delete a single task from the page with remove button', function(){
    browser.url('/')
    browser.click('.remove-task')

    assert.equal(browser.isExisting('.a-task.true.false'), false );
  });

  it('should have the class of .true.false if the completed task button is clicked', function() {
    browser.url('/')
    var taskTitle = browser.element(".title-input")
    var taskBody = browser.element(".body-input")

    taskTitle.setValue('great title')
    taskBody.setValue('great description')

    assert.equal(taskTitle.getValue(), 'great title')
    assert.equal(taskBody.getValue(), 'great description')

    browser.click('.save')
    browser.click('.completed-button')

    assert.equal(browser.isExisting('.a-task.true.false'), true)
  });


  it('should show two completed tasks after the page is refreshed and the show completed todos button is clicked', function() {
      browser.url('/')
      var taskTitle = browser.element(".title-input")
      var taskBody = browser.element(".body-input")

      taskTitle.setValue('great title')
      taskBody.setValue('great description')

      browser.click('.save')

      taskTitle.setValue('better title')
      taskBody.setValue('better description')

      browser.click('.save')
      browser.click('.completed-button')
      browser.refresh()
      browser.click('.show-completed-button')

      var completedTasks = browser.elements('.a-task.true').getText()

      assert.equal(completedTasks.length, 2)
    });

    it('should have an input counter that counts characters in title and body input fields', function() {
        browser.url('/')
        var taskTitle = browser.element(".title-input")
        var taskBody = browser.element(".body-input")

        taskTitle.setValue('great title')
        taskBody.setValue('great description')

        assert.equal(browser.getText('.input-counter'), '11')
        assert.equal(browser.getText('.body-counter'), '17')
      });




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
