
App.RouteController = Marionette.Controller.extend({

  categoryRoute: function(id) {

    var _category = 'all',
        _categories = App.projectsCollection.getUniqueCategories();

    // if the category exists in the categories array
    if (_.indexOf(_categories, id) >= 0) {
      _category = id;
    }

    // notify app that a projects category has been selected
    App.vent.trigger('projects:category:selected', _category);

  },

  itemRoute: function(url_safe_title) {

    console.log('itemRoute executed with url_safe_title ' + url_safe_title);

    App.vent.trigger('item:route', url_safe_title);

  }

});
