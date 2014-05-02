
App.module("NavDropdown", function(NavDropdown, App, Backbone, Marionette, $, _) {

  // instantiate dropdowns collection
  NavDropdown.dropdownsCollection = new App.DropdownsCollection(App.Dropdowns);

  // instantiate dropdowns collection view
  NavDropdown.dropdownsCollectionView = new App.DropdownsCollectionView({
    collection: NavDropdown.dropdownsCollection,
    itemView: App.DropdownItemView
  });

  // render dropdowns collection view
  App.dropdownsRegion.show(NavDropdown.dropdownsCollectionView);


  App.vent.on('projects:category:selected', function(category) {



  });

  App.vent.on('project:selected', function(modelId) {



  });

});
