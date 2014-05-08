
App.ClientsCollection = Backbone.Collection.extend({

  model: App.ClientModel,

  initialize: function() {

    this.name = 'clients';

  }


});

App.clientsCollection = new App.ClientsCollection(App.projectsCollection.getUniqueClients());
