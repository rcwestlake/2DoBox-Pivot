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

  it('should not be able to upvote the importance of a task past critical', function() {
    browser.url('/')

    browser.click('.upvote')
    browser.click('.upvote')
    browser.click('.upvote')

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'Critical')

  });

  it('should not be able to downvote the importance of a task past none', function() {
    browser.url('/')

    browser.click('.downvote')
    browser.click('.downvote')
    browser.click('.downvote')
    browser.click('.downvote')
    browser.click('.downvote')

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'None')

  });

  it('should be able to allow tasks to persist on reload', function() {
    browser.url('/')
    browser.refresh()

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'None')

  });

  it('should have a sort button that sorts tasks based on importance (if the sort:none button is clicked, it should only show tasks with the importance of none)', function(){
    browser.url('/')
    browser.click('.dropbtn')
    browser.click('.none-button')

    var taskImportance = browser.element('.displayed-importance')
    assert.equal(taskImportance.getText(), 'None')
  })

  it('should have an editable title that can receive values and persist on the page', function() {
      browser.url('/')

      var taskTitle = browser.element('.task-title')
      browser.click('.task-title')
      taskTitle.setValue('better title')

      assert.equal(browser.getText('.task-title'), 'better title')
    });

    it('should have an editable body that can receive values and persist on the page', function() {
        browser.url('/')

        var taskBody = browser.element('.task-body')
        browser.click('.task-body')
        taskBody.setValue('better body')

        assert.equal(browser.getText('.task-body'), 'better body')
      });

      it('should have a search function that will display only the tasks that have the search input text for their title or body', function() {
          browser.url('/')

          var taskTitle = browser.element(".title-input")
          var taskBody = browser.element(".body-input")

          taskTitle.setValue('greatest title')
          taskBody.setValue('greatest description')
          browser.click('.save')

          var searchField = browser.element('.search-field')
          searchField.setValue('great')

          var allTasksVisible = browser.isVisibleWithinViewport('.a-task.false')


          assert.equal(allTasksVisible.length, 2)





          // assert.equal(browser.getText('.task-body'), 'better body')
        });



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

  // TODO:
  // should only show ten most recent

});
