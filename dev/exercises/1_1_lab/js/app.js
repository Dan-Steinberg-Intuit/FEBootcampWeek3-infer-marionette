require([], function(){

/* Ben's original code:
  // Working with Application example
  var Application = Marionette.Application.extend({
    initialize: function(args){
      console.log('At Initializer. Options: ' + JSON.stringify(args));
    }
  });

  // Initialize your Application
  var App = new Application({age: 35});

  // Declare our options
  App.options = {
    name: "Ben"
  };

  // Set up Application Events
  App.on("before:start", function(options){
    console.log('At event Before:Start. Options: ' + JSON.stringify(options));
  });

  // What should happen on Start
  App.on("start", function(options){
    console.log('At event Start. Option value: ' + Marionette.getOption(this, 'name'));
  });

  App.onBeforeStart = function(options){
    console.log('At Before:Start function. Option value: ' + Marionette.getOption(this, 'name'));
  };

  App.onStart = function(options){
    console.log('At Start function. Option value: ' + Marionette.getOption(this, 'name'));
  };

  // Start the app
  App.start(App.options);
*/

  // Set up your application
  var Application = Marionette.Application.extend({
    // Set an initializer function that logs out arguments
    initialize : function(args) {
      console.log("Args : " + JSON.stringify(args));
    }
  });

  // Instantiate an object of type Application
  var App = new Application({age: 35});

  // Declare some options
  App.options = { name: "Dan" };

  // Catch the before:start event
  App.on("before:start", function(options) {
    console.log("Event: Before the Start, option = " + Marionette.getOption(this, "name"));
  });

  // Catch the start event
  App.on("start", function(options) {
    console.log("Event: Start has occurred, option = " + Marionette.getOption(this, "name"));
  });

  // Now use the onBeforeStart method
  App.onBeforeStart = function(options) {
    console.log("Method: Before the Start, option = " + Marionette.getOption(this, "name"));
  };

  // And the onStart method
  App.onStart = function(options) {
    console.log("Method: Start, option = " + Marionette.getOption(this, "name"));
  };

  // Now, start the app
  App.start(App.options);


});