
App.ProjectsCollection = Backbone.Collection.extend({

  model: App.ProjectModel,

  setSelectedCategory: function(category) {

    _.each(this.models, function(model) {

      if ( _.contains(model.get('categories'), category) ) {

        model.set('selected', true);

      } else {

        model.set('selected', false);

      }

    });

  },

  getSelectedModels: function() {

    var selectedCollection = new Backbone.Collection();

    _.each(this.models, function(model) {

      // if model attribute selected is set to true
      if ( model.get('selected') ) {

        selectedCollection.add(model);

      }

    });

    return selectedCollection;

  },

  getUniqueCategories: function() {

    var that = this,
        _categoriesArray = [],
        _uniqueCategoriesArray = [];

    _.each(that.models, function(model) {

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

    var that = this,
        _category = category,
        _projects = new Backbone.Collection();

    // for each model in the collection
    that.each(function(model) {

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

