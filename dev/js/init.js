
App = new Marionette.Application();

App.addRegions({
  dropdownsRegion: '#sk-dropdowns-region',
  gridRegion: '#grid-region',
  itemDetailRegion: '#item-detail-region'
});

// add an event manager
App.vent = new Backbone.Wreqr.EventAggregator();

App.on("initialize:after", function() {

  // instantiate router
  App.router = new App.Router();

  // start Backbone history
  Backbone.history.start({
    pushState: true,
    // http://joefleming.net/posts/how-i-use-backbone-router/
    // force full page refreshes if browser does not support pushState
    hashChange: Modernizr.history ? true : false
  });

});
