
App.ClientModel = Backbone.Model.extend({

  initialize: function() {

    var _projects = App.projectsCollection.getProjectsByClient(this.get('title'));

    this.set('projects', _projects);

  }

});
