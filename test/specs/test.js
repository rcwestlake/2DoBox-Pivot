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
  })
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
