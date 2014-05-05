
// this module governs what models are visible in the main content region
App.module("Main", function(Main, App, Backbone, Marionette, $, _) {

  Main.listenTo(App.projectsCollection, 'change:visible', function() {



  });

});
