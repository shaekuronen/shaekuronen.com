
App.CategoriesCollection = Backbone.Collection.extend({

  model: App.CategoryModel,

  initialize: function() {

    this.name = 'categories';

  }


});

App.categoriesCollection = new App.CategoriesCollection(App.projectsCollection.getUniqueCategories());

