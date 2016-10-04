const $ = require('jquery');

var TaskArray = {

 allTasks: [],

  pushToArray: function(newTask) {
    allTasks.push(newTask);
  },

  store : function (){
    localStorage.setItem('allTasks', JSON.stringify(this.allTasks));
  },
  retrieve : function (){
    JSON.parse(localStorage.getItem("allTasks"));
  },
   renderTasksToHtml : function (task){
     $('.idea-list').prepend(`
       <article id="`+ task.id +`" class="idea-card">
         <h2 class="editable" contenteditable="true">` + task.title + `</h2>
         <button class="delete-idea"></button>
         <p class="editable idea-body" contenteditable="true">` + task.body + `</p>
         <button class="upvote"></button>
         <button class="downvote"></button>
         <p class= "idea-quality ` + task.importance +`"><span>Quality:</span> <span class="displayed-quality">` + task.importance + `</span> </p>
       </article>`);
   },
  renderArray : function(){
    for (var i = 0; i < 10; i++)
    this.renderTasksToHtml(this.allTasks[i]);
  }
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
