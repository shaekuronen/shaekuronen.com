
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
        _categories = [];

    _.each(_this.models, function(model) {

      _.each(model.get('categories'), function(category) {

        _categories.push(category);

      });

    });
    // end create an array of all categories in the collection

    // return an object with the unique categories sorted alphabetically
    return {
      'categories': (_.uniq(_categories)).sort()
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

        // if this models categories attribute contains the current category
        if ( _.contains(model.get('categories'), category) ) {

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

    console.log('_categories is currently ' + Object.keys(_categories));
    console.log('the type of _categories is ' + typeof _categories);
    console.log('the type of _categories is array? ' + _.isArray(_categories));
    console.log('_categories[0] is currently ' + _categories[0]);
    console.log('_categories[CMS] is currently ' + Object.keys(_categories['CMS']));
    console.log('_categories[CMS] is currently ' + Object.keys(_categories['CMS']['projects']));
    console.log('_categories[CMS] is currently ' + _categories['CMS']['projects']['0']);

    return {
      'categories': _categories
    };

    // return _categories;

  }

});

// both grid and sorter_grid modules reference itemsCollection, so make instance here to have one global version (vs instantiating in both the module definitions, which doesn't seem super dry)
App.projectsCollection = new App.ProjectsCollection(App.Projects);



