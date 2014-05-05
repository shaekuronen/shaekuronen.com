
App.ProjectsCollection = Backbone.Collection.extend({

  model: App.ProjectModel,

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

      // if the current model is contained in the _models array
      if _.contains(_models, model) {

        switch (_state) {

          case 'thumbnail':
            model.set('visible', 'thumbnail');
            break;

          case 'detail':
            model.set('visible', 'detail');
            break;

          case false:
            model.set('visible', false);
            break;

          default:
            model.set('visible', false);
            break;

        }

      } else {

        // set all models not specified in the _models array visible state to false
        model.set('visible', false);

      }

    });

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

  }

});

App.projectsCollection = new App.ProjectsCollection(App.Projects);

