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
