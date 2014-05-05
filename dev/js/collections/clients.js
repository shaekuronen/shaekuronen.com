
App.ClientsCollection = Backbone.Collection.extend({

  model: App.ClientModel,

  initialize: function() {



  }


});

App.clientsCollection = new App.ClientsCollection(App.projectsCollection.getUniqueClients());
