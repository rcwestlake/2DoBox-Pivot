const $ = require('jquery');

var TaskArray = {

 allTasks: [],

  pushToArray: function(newTask) {
    this.allTasks.push(newTask);
  },

  store : function (){
    localStorage.setItem('allTasks', JSON.stringify(this.allTasks));
  },
  retrieve : function (){
    return JSON.parse(localStorage.getItem("allTasks"));
  },
   renderTasksToHtml : function (task){
     $('.task-list').prepend(`
       <article id="`+ task.id +`" class="a-task">
         <h2 class="task-title" contenteditable="true">` + task.title + `</h2>
         <button class="remove-task"></button>
         <p class="task-body" contenteditable="true">` + task.body + `</p>
         <button class="upvote"></button>
         <button class="downvote"></button>
         <p class= "task-importance ` + task.importance +`"><span>Importance:</span> <span class="displayed-importance">` + task.importance + `</span> </p>
       </article>`);
   },
  renderArray : function(){
    var tasks = JSON.parse(localStorage.getItem("allTasks"));
    // var tasks = this.retrieve();
    if (tasks.length < 10) {
      for (var i = 0; i < tasks.length; i++) {
        this.renderTasksToHtml(tasks[i]);
      }
    }
  },

  clearListContainer: function() {
    $('.a-task').remove();
  },
};



// empty array for 2Dos
// add new idea to array
// set array to local storage
// render ten most recent, event listener will tell funciton to show 10 more
// get local storage
// find task by ID
// clear the DOM
// search function
// show completed tasks
// sort method which filters through array, consider map or filter function
module.exports = TaskArray;
