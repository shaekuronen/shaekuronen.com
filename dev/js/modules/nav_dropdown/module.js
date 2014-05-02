
App.module("NavDropdown", function(NavDropdown, App, Backbone, Marionette, $, _) {

  // instantiate dropdowns collection
  App.dropdownsCollection = new App.DropdownsCollection(App.Dropdowns);

  // instantiate dropdowns collection view
  App.dropdownsCollectionView = new App.DropdownsCollectionView({
    collection: App.dropdownsCollection,
    itemView: App.DropdownItemView
  });

  // render dropdowns collection view
  App.dropdownsRegion.show(App.dropdownsCollectionView);

  App.vent.on('projects:category:selected', function(category) {

    // update the model's selected_category property
    // NavDropdown.navDropdownModel.setSelectedCategory(category);

  });

  App.vent.on('project:selected', function(modelId) {

    // update the model's selected_category property to empty string
    // this resets the sorter to default state (in this case, 'Categories')
    // NavDropdown.navDropdownModel.setSelectedCategory('');

  });

});
