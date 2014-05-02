
App.module("NavDropdown", function(NavDropdown, App, Backbone, Marionette, $, _) {

  // App.dropdownsCollection = new App.DropdownsCollection(App.Projects);

  // // create global unique categories instance, used in grid_sorter module & route_controller
  // App.uniqueCategoriesObject = App.dropdownsCollection.getUniqueCategories();

  // // add projects associated with each category to App.uniqueCategoriesObject
  // NavDropdown.uniqueCategoriesWithAssociatedProjectsObject = App.dropdownsCollection.getProjectsByCategory(App.uniqueCategoriesObject);

  App.dropdownsCollection = new App.DropdownsCollection(App.Dropdowns);

  App.dropdownsCollectionView = new App.DropdownsCollectionView({
    collection: App.dropdownsCollection,
    itemView: App.DropdownItemView
  });

  // App.dropdownsCollectionView.render();

  App.dropdownsRegion.show(App.dropdownsCollectionView);

  // // var navDropdownModel = new App.DropdownModel(NavDropdown.uniqueCategoriesWithAssociatedProjectsObject);
  // NavDropdown.navDropdownModel = new App.DropdownModel(App.Dropdowns.Projects);

  // NavDropdown.navDropdownView = new App.DropdownItemView({
  //   model: NavDropdown.navDropdownModel,
  //   el: '#sk-dropdown-nav_dropdown-element'
  // });

  // // render dropdown
  // NavDropdown.navDropdownView.render();

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
