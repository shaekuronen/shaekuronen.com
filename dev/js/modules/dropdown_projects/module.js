
App.module("ProjectsDropdown", function(ProjectsDropdown, App, Backbone, Marionette, $, _) {

  ProjectsDropdown.ProjectItemView = Marionette.ItemView.extend({

    tagName: 'li',

    template: '<span>{{this}}</span>',

    events: {

    }

  });

  ProjectsDropdown.ProjectsCollectionView = Marionette.CollectionView.extend({

    tagName: 'ul',

    itemView: ProjectsDropdown.ProjectItemView,

    initialize: function() {

    }

  });

  // ProjectsDropdown.CategoryCompositeView = Marionette.CompositeView.extend({

  //   tagName: 'li',

  //   itemView: ProjectsDropdown.ProjectsCollectionView,

  //   itemViewContainer: '.sk-dropdown-nav_dropdown-element_sub-nav',

  //   template: JST['dev/templates/projects_dropdown_category_item.hbs'],

  //   initialize: function() {

  //   }

  // });

  // ProjectsDropdown.CategoriesCompositeView = Marionette.CompositeView.extend({

  //   el: '#sk-projects-dropdown-element',

  //   itemView: ProjectsDropdown.CategoryCompositeView,

  //   itemViewContainer: '.sk-dropdown-nav_dropdown-element_sub-nav',

  //   initialize: function() {
  //     console.log('App.ProjectsDropdownCategoriesCompositeView initialize happened');
  //   }

  // });

  ProjectsDropdown.CategoriesCompositeView = Marionette.CompositeView.extend({

    tagName: 'li',

    itemView: ProjectsDropdown.ProjectsCollectionView,

    itemViewContainer: '.sk-dropdown-nav_dropdown-element_sub-nav',

    template: JST['dev/templates/projects_dropdown_category_item.hbs'],

    initialize: function() {

    }

  });

  // instantiate projects dropdown item view
  ProjectsDropdown.categoriesCompositeView = new ProjectsDropdown.CategoriesCompositeView({
    collection: App.categoriesCollection
  });

  // render projects dropdown item view
  ProjectsDropdown.categoriesCompositeView.render();

});
