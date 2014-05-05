
App.MainContentController = Marionette.Controller.extend({

  initialize: function(options) {

    this.collection = options.collection;

    this.listenTo(this.collection, 'change:visible', function() {

      console.log('App.MainContentController change:visible event happened');

    });

  }

});
