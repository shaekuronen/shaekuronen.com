
App.module("NavDropdown", function(NavDropdown, App, Backbone, Marionette, $, _) {

  var navDropdownModel = new App.NavDropdownModel(App.uniqueCategoriesWithAssociatedProjectsObject);

  var navDropdownView = new App.NavDropdownItemView({
    model: navDropdownModel
  });

  // render sorter
  App.projectsDropdownRegion.show(navDropdownView);

  App.vent.on('gridSorter:category:selected', function(category) {

    // update the model's selected_category property
    navDropdownModel.setSelectedCategory(category);

  });

  App.vent.on('grid:item:selected', function(modelId) {

    // update the model's selected_category property to empty string
    // this resets the sorter to default state (in this case, 'Categories')
    navDropdownModel.setSelectedCategory('');

  });

});
