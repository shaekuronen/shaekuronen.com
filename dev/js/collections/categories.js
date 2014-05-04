
App.CategoriesCollection = Backbone.Collection.extend({

  model: App.CategoryModel,

  initialize: function() {



  }


});

App.categoriesCollection = new App.CategoriesCollection(App.projectsCollection.getUniqueCategories());

