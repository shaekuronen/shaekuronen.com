
App.ProjectsDropdownCategoriesCompositeView = Marionette.CompositeView.extend({

  el: '#sk-projects-dropdown-element',

  itemView: App.ProjectsDropdownCategoryCompositeView,

  itemViewContainer: '.sk-dropdown-nav_dropdown-element_sub-nav',

  initialize: function() {
    console.log('App.ProjectsDropdownCategoriesCompositeView initialize happened');
  }

});
