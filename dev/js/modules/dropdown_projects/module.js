
App.module("ProjectsDropdown", function(ProjectsDropdown, App, Backbone, Marionette, $, _) {

  ProjectsDropdown.ProjectItemView = Marionette.ItemView.extend({

    tagName: 'li',

    template: JST['dev/templates/projects_dropdown_project_item.hbs'],

    events: {
      'click': 'itemClicked'
    },

    itemClicked: function() {
      console.log('itemClicked executed');
      App.vent.trigger('nav:item:selected', this.model);
    }

  });

  ProjectsDropdown.CategoryCompositeView = Marionette.CompositeView.extend({

    tagName: 'li',

    itemView: ProjectsDropdown.ProjectItemView,

    itemViewContainer: '.sk-dropdown-nav_dropdown-element_sub-nav',

    template: JST['dev/templates/projects_dropdown_category_item.hbs'],

    initialize: function(options) {
      // set this view's collection to App.categoriesCollection.projects
      this.collection = options.model.get('projects');
    }

  });

  ProjectsDropdown.CategoriesCollectionView = Marionette.CollectionView.extend({

    el: '#sk-projects-dropdown-element',

    itemView: ProjectsDropdown.CategoryCompositeView

  });

  // instantiate projects dropdown collection view
    ProjectsDropdown.categoriesCollectionView = new ProjectsDropdown.CategoriesCollectionView({
    collection: App.categoriesCollection
  });

  // render projects dropdown collection view
  ProjectsDropdown.categoriesCollectionView.render();

});
