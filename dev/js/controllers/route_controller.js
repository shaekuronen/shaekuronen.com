
App.RouteController = Marionette.Controller.extend({

  indexRoute: function() {

    console.log('indexRoute executed');

  },

  projectsRoute: function() {

    console.log('projectsRoute executed');

  },

  projectRoute: function(project) {

    console.log('projectRoute executed and the project was ' + project);

  },

  categoryRoute: function(category) {

    console.log('categoryRoute executed and the category was ' + category);

    // category defaults to all
    var _category = 'all';

    // if the category exists in the categories array
    App.categoriesCollection.each(function(model) {

      if (model.get('url_title') === category) {
        _category = category;
      }

    });

    // notify app that a projects category has been selected
    App.vent.trigger('projects:category:selected', _category);

  },

  agencyRoute: function(agency) {

    console.log('agencyRoute executed and the agency was ' + agency);

  },

  clientsRoute: function() {

    console.log('clientsRoute executed');

  },

  clientRoute: function(client) {

    console.log('clientRoute executed and the client was ' + client);

  }

});
