
App.module("NavDropdown", function(NavDropdown, App, Backbone, Marionette, $, _) {

  // add projects associated with each category to App.uniqueCategoriesObject
  NavDropdown.uniqueCategoriesWithAssociatedProjectsObject = App.projectsCollection.getProjectsByCategory(App.uniqueCategoriesObject);

  var navDropdownModel = new App.NavDropdownModel(NavDropdown.uniqueCategoriesWithAssociatedProjectsObject);

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

  App.vent.on('project:selected', function(modelId) {

    // update the model's selected_category property to empty string
    // this resets the sorter to default state (in this case, 'Categories')
    navDropdownModel.setSelectedCategory('');

  });

});
