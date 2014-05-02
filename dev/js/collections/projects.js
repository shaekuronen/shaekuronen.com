
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

  }

});


