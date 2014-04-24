
App.module("NavDropdown", function(NavDropdown, App, Backbone, Marionette, $, _) {

  var navDropdownModel = new App.NavDropdownModel(App.uniqueCategoriesWithAssociatedProjectsObject);

  var navDropdownView = new App.NavDropdownItemView({
    model: navDropdownModel,
    el: '#sk-dropdown-nav_dropdown-element'
  });

  // render dropdown
  navDropdownView.render();

  App.vent.on('projects:category:selected', function(category) {

    // update the model's selected_category property
    navDropdownModel.setSelectedCategory(category);

  });

  App.vent.on('grid:item:selected', function(modelId) {

    // update the model's selected_category property to empty string
    // this resets the sorter to default state (in this case, 'Categories')
    navDropdownModel.setSelectedCategory('');

  });

});
