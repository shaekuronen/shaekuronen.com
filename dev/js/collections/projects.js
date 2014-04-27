
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

    var selectedCollection = [];

    _.each(this.models, function(model) {

      if ( model.get('selected') ) {

        selectedCollection.push(model);

      }

    });

    return selectedCollection;

  },

  // setSelectedCategory: function(category) {

  //   this.set('selected_category', category);

  // },

  getUniqueCategories: function() {

    var _this = this,
        _categoriesArray = [];

    _.each(_this.models, function(model) {

      var _categories = model.get('categories'),
          _categories_keys = _.keys(_categories);

      _.each(_categories_keys, function(category) {

        _categoriesArray.push(category);

      });

    });
    // end create an array of all categories in the collection

    // return an object with the unique categories sorted alphabetically
    return {
      'categories': (_.uniq(_categoriesArray)).sort()
    };

  },

  getProjectsByCategory: function(categories) {

    var _this = this,
        _categories = [];

    // for each unique category in the projects collection
    _.each(categories['categories'], function(category) {

      var _projects = [],
          _category = {};

      // iterate through the collection models
      _.each(_this.models, function(model) {

        // get the categories object
        var _categories = model.get('categories'),
            _categories_keys = _.keys(_categories);

        // if this models categories attribute contains the current category
        if ( _.contains(_categories_keys, category) ) {

          _projects.push(model.get('title'));

        }

      });

      _category['projects'] = _projects;

      _category = {
        'category': category,
        'projects': _projects
      }

      _categories.push(_category);
      _categories[category] = _category;


    });

    return {
      'categories': _categories
    };

    // return _categories;

  }

});

// both grid and sorter_grid modules reference itemsCollection, so make instance here to have one global version (vs instantiating in both the module definitions, which doesn't seem super dry)
App.projectsCollection = new App.ProjectsCollection(App.Projects);

// create global unique categories instance, used in grid_sorter module & route_controller
App.uniqueCategoriesObject = App.projectsCollection.getUniqueCategories();
