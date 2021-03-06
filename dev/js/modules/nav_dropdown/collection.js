
App.DropdownsCollection = Backbone.Collection.extend({

  model: App.DropdownModel,

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

  }

});


