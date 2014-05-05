
App.module("ClientsDropdown", function(ClientsDropdown, App, Backbone, Marionette, $, _) {

  // instantiate clients dropdown item view
  ClientsDropdown.itemView = new App.ClientsDropdownItemView({
    collection: App.clientsCollection
  });

  // render clients dropdown item view
  ClientsDropdown.itemView.render();



});
