/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      tasks: [
        {
          id: 1,
          text: "take out the garbage bad",
          completed: false
        },
        {
          id: 2,
          text: "make the bed",
          completed: false
        },
        {
          id: 3,
          text: "shave your beard",
          completed: true
        }
      ],
      text: "",
      completed: ""
    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      console.log('adding the task...');
      // make an object the same structure as the elements in my current array
      var newTask = {
        id: 3,
        text: this.text,
        completed: this.completed
      };

      if (this.text !== '' || this.completed !== '') {
        this.tasks.push(newTask);
      }
      // rest the stuff in the text input boxes
      this.text = "";
      this.completed = "";
    },
    removeTask: function(inputTask) {
      console.log('removing the task');
      // find the index of that task
      var index = this.tasks.indexOf(inputTask);
      console.log(index);
      // remove it from the array
      this.tasks.splice(index, 1);
    },
    isPositive: function(inputTask) {
      // if the text has the word 'bad' in it, don't show it
      var text = inputTask.text;
      if (text.indexOf('bad') !== -1) {
        return false;
      } else {
        return true;
      }
    },
    toggleCompleted: function(inputTask) {
      inputTask.completed = !inputTask.completed;
    },
    numberOfIncompleteTasks: function() {
      // get the array of tasks
      var count = 0;
      // loop through
      this.tasks.forEach(function(task) {
        // find out if it's completed
        if (task.completed === false) {
          count++;
        }
        // if it is, then increment the counter
      })
      // count up all the incomplete tasks
      return count;
    },
    removeCompletedTasks: function() {
      // get all the tasks
      // make a new array with all the ones I haven't completed
      var incompleteTasks = [];
      for (var i = 0; i < this.tasks.length; i++) {
        if (!this.tasks[i].completed) {
          incompleteTasks.push(this.tasks[i]);
        }
      }
      this.tasks = incompleteTasks;
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
