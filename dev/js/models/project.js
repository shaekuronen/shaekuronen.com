
App.ProjectModel = Backbone.Model.extend({

  initialize: function() {

    var that = this;

    // visible defaults to false
    // tri-state possible values: thumbnail, detail, false
    this.set('visible', false);

    // get the categories of the current model
    var _categories = this.get('categories');

    // for each category
    _.each(_categories, function(category) {

      // if the category is Landing
      if (category === 'Landing') {

        // set the visible category to thumbnail so that the project will show in grid
        that.set('visible', 'thumbnail');

      }

    });

    // add category 'All' to the temp categories array
    _categories.push('All');

    // add url versions of the categories
    // key is the display category
    // value is the url category
    _categories = this.createUrlCategories(_categories);

    // add the updated categories to the current model
    this.set('categories', _categories);

    // create a url safe title
    var url_safe_title = this.get('title').replace(/[^a-z0-9]/gi, '-').toLowerCase();

    // add the url safe title to the model
    this.set('url_safe_title', url_safe_title);

    // create a url safe title
    var url_client = this.get('client').replace(/[^a-z0-9]/gi, '-').toLowerCase();

    // add the url safe title to the model
    this.set('url_client', url_client);

    // model defaults to selected
    this.set('selected', true);



  },

  // take the original categories and add url safe versions of each category
  createUrlCategories: function(categoriesArray) {

    var newCategoriesObject = {};

    _.each(categoriesArray, function(category) {

      // create a url safe category
      var _url_safe_category = category.replace(/[^a-z0-9]/gi, '-').toLowerCase();

      // add the category and url safe category to the array as an object
      newCategoriesObject[category] = _url_safe_category;

    });

    return newCategoriesObject;

  }

});

