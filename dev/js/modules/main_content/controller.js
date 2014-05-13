
App.MainContentController = Marionette.Controller.extend({

  initialize: function(options) {

    this.collection = options.collection;

    this.listenTo(this.collection, 'change:visible', function() {

      console.log('App.MainContentController change:visible event happened');

      // get models that are not visible: false
      var _models = this.collection.getVisibleModels();

      console.log('this.collection.getVisibleModels() models are ' + _models);
      window._models = _models;

      // get models state
      // note: currently assuming all models not visible: false models will have state thumbnail OR detail
      // but will need to add testing for multiple states + error handling
      // so TEMPORARILY querying only zeroth model, to only return first models state
      var _state = _models.at(0).get('visible');

      console.log('model zero state is ' + _state);


    });

  }

});
