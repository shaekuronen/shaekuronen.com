
App.ProjectsCollection = Backbone.Collection.extend({

  model: App.ProjectModel,

  initialize: function() {

    this.name = 'projects';

  },

  setSelectedCategory: function(category) {

    // for each model in the collection
    this.each(function(model) {

      if ( _.contains(model.get('categories'), category) ) {

        model.set('selected', true);

      } else {

        model.set('selected', false);

      }

    });

  },

  getSelectedModels: function() {

    var selectedCollection = new Backbone.Collection();

    // for each model in the collection
    this.each(function(model) {

      // if model attribute selected is set to true
      if ( model.get('selected') ) {

        selectedCollection.add(model);

      }

    });

    return selectedCollection;

  },

  // models is an array of the models which will have their state updated
  // model visible state has three valid states: thumbnail, detail, false
  setVisibleModels: function(models, state) {

    var _models = models,
        _state = state;

    // for each model in the collection
    this.each(function(model) {

      var _model = model;

      // if the current model is contained in the _models array
      if ( _.contains(_models, _model) ) {

        console.log('IF');

        switch (_state) {

          case 'thumbnail':
            console.log('setVisibleModels executed and state is ' + _state);
            _model.set('visible', 'thumbnail');
            break;

          case 'detail':
            console.log('setVisibleModels executed and state is ' + _state);
            _model.set('visible', 'detail');
            break;

          case false:
            console.log('setVisibleModels executed and state is ' + _state);
            _model.set('visible', false);
            break;

          default:
            console.log('setVisibleModels executed and state is default');
            _model.set('visible', false);
            break;

        }

      } else {

        console.log('ELSE');

        // set all models not specified in the _models array visible state to false
        _model.set('visible', false);

      }

    });

  },

  getVisibleModels: function() {

    var _visible_models = new Backbone.Collection();

    // for each model in the collection
    this.each(function(model) {

      // if model visible attribute is not false
      if ( model.get('visible') !== false) {

        // add the model to the collection
        _visible_models.add(model);

      }

    });

    // return the collection
    return _visible_models;

  },

  getVisibleThumbnailModels: function() {

    var _visible_thumbnail_models = new Backbone.Collection();

    // for each model in the collection
    this.each(function(model) {

      // if model visible attribute is not false
      if ( model.get('visible') === 'thumbnail') {

        // add the model to the collection
        _visible_thumbnail_models.add(model);

      }

    });

    // return the collection
    return _visible_thumbnail_models;

  },

  getUniqueCategories: function() {

    var _categoriesArray = [],
        _uniqueCategoriesArray = [];

    // for each model in the collection
    this.each(function(model) {

      var _categories = model.get('categories'),
          _categories_keys = _.keys(_categories);

      _.each(_categories_keys, function(category) {

        var _category = category;

        // if the category does not exist in _categoriesArray
        if ( !(_.contains(_categoriesArray, category)) ) {

          _categoriesArray.push(_category);

          _uniqueCategoriesArray.push({
            'title': _category
          });

        }

      });

    });
    // end create an array of all categories in the collection

    // return an object with the unique categories sorted alphabetically
    return _uniqueCategoriesArray;

  },

  getProjectsByCategory: function(category) {

    var _category = category,
        _projects = new Backbone.Collection();

    // for each model in the collection
    this.each(function(model) {

      // for each category in the categories attribute
      var _categories = model.get('categories'),
          _categories_keys = _.keys(_categories);

      // if this models categories attribute contains the current category
      if ( _.contains(_categories_keys, _category) ) {

        // add the model to the collection
        _projects.add(model);

      }

    });

    return _projects;

  },

  getUniqueClients: function() {

    var _clientsArray = [],
        _uniqueClientsArray = [];

    // for each model in the collection
    this.each(function(model) {

      var _client = model.get('client'),
          _url_client = model.get('url_client'),
          _client_logo = model.get('client_logo');

      // if the client does not exist in _clientsArray AND client is not an empty string
      if ( !(_.contains(_clientsArray, _client)) && _client !== '' ) {

        _clientsArray.push(_client);

        _uniqueClientsArray.push({
          'title': _client,
          'url_title': _url_client,
          'logo': _client_logo
        });

      }

    });

    // return an object with the unique clients
    return _uniqueClientsArray;

  },

  getProjectsByClient: function(client) {

    var _client = client,
        _projects = new Backbone.Collection();

    // for each model in the collection
    this.each(function(model) {

      // if this model's client is equal to the client argument
      if ( _client === model.get('client') ) {

        // add the model to the collection
        _projects.add(model);

      }

    });

    return _projects;

  }

});

App.projectsCollection = new App.ProjectsCollection(App.Projects);

