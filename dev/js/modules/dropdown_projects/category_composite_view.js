
App.ProjectsDropdownCategoryCompositeView = Marionette.CompositeView.extend({

  tagName: 'li',

  itemView: App.ProjectsDropdownProjectsCollectionView,

  itemViewContainer: '.sk-dropdown-nav_dropdown-element_sub-nav',

  template: JST['dev/templates/projects_dropdown_category_item.hbs'],

  initialize: function() {


  }

});
