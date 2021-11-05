/* global Vue */

var app = new Vue({
  el: "#app",
  data: {
    displayInfo: true,
    teams: [
      'Steelers',
      'Patriots',
      'Jets',
      'Chiefs',
      'Jaguars'
    ],
    newTeam: ''
  },
  methods: {
    toggle: function() {
      this.displayInfo = !this.displayInfo;
    },
    addTeam: function() {
      console.log('adding team');
      console.log(this.newTeam);
      this.teams.push(this.newTeam);
    }
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

var button = new Vue({
  el: "#button",
  data: {
    message: "Amazing"
  },
  methods: {
    reverse: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});


