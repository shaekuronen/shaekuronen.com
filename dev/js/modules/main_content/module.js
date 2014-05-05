
// this module governs what models are visible in the main content region
App.module("Main", function(Main, App, Backbone, Marionette, $, _) {

  Main.contentController = new App.MainContentController({
    collection: App.projectsCollection
  });



});
