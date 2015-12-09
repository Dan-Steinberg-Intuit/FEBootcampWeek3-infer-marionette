require([], function(){

  // Set up your application
  var App = new Marionette.Application();

  // Create a new contact model
  var Contact = Backbone.Model.extend();

  // Create an ItemView
  var ContactView = Marionette.ItemView.extend({
    template: "#template",

    ui: {
      destroyButton: ".button"
    },

    events: {
      "click @ui.destroyButton": "destroyView"
    },

    destroyView: function() {
      this.destroy();
    },

    onBeforeDestroy: function() {
      console.log(this.el);
    }
  });


  App.on("start", function(){
    // Instantiate the model
    var alice = new Contact({
      firstName: "Alice",
      lastName: "Wonderland"
    });

    // Instantiate the view
    var aliceView = new ContactView({
      model: alice,
      el: ".target"
    });

    // render the view
    aliceView.render();
  });
 
  // Now, start the app
  App.start();

});