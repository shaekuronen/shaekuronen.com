
// this controller listens for App.vent events and triggers appropriate responses
App.EventsController = Marionette.Controller.extend({

  initialize: function(options) {

    App.vent.on('nav:item:selected', function(model) {

      // get the collection the model is in
      // name is defined in collection initialize function
      var _model = model,
          _collection = model.collection.name;

      console.log('the name of this models collection is ' + _collection);

      switch (_collection) {

        case 'projects':
          console.log('PROJECTS');
          App.projectsCollection.setVisibleModels(_model, 'thumbnail');
          break;

        case 'categories':
          console.log('CATEGORIES');
          // get the models in the projects collection on the current category model
          var _models = _model.get('projects');
          App.projectsCollection.setVisibleModels(_models, 'thumbnail');
          break;

        case 'clients':
          // get the models in the projects collection on the current client model
          var _models = _model.get('projects');
          App.projectsCollection.setVisibleModels(_models, 'thumbnail');
          break;

        default:
          _model.set('visible', false);
          break;

      }

    });

  }

});

App.eventsController = new App.EventsController();
