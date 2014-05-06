
App.module("ProjectsDropdown", function(ProjectsDropdown, App, Backbone, Marionette, $, _) {

  // instantiate projects dropdown item view
  ProjectsDropdown.itemView = new App.ProjectsDropdownItemView({
    collection: App.categoriesCollection
  });

  // render projects dropdown item view
  ProjectsDropdown.itemView.render();

});
