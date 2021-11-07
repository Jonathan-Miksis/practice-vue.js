/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      todos: []
    };
  },
  methods: {
    loadTodos: function() {
      // Make a request for a user with a given ID
      axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
        // handle success
          console.log(response.data);
          this.todos = response.data;
        });  
    },
  },
});
