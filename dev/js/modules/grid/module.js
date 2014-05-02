
App.module("Grid", function(Grid, App, Backbone, Marionette, $, _) {

  //
  App.projectsCollection = new App.ProjectsCollection(App.Projects);

  // create an instance of GridCollectionView
  App.gridCollectionView = new App.GridCollectionView({
    collection: App.projectsCollection
  });

  // initial render grid
  App.gridRegion.show(App.gridCollectionView);

  App.vent.on('projects:category:selected', function(category) {

    // update collection models to selected:true if they contain the category
    App.projectsCollection.setSelectedCategory(category);

    // update the URL
    App.router.navigate('category/' + category);

  });

  // this module listens to changes on the collection
  Grid.listenTo(App.projectsCollection, 'change:selected', function() {

    // get a collection of models that have property selected: true
    var selectedCollection = App.projectsCollection.getSelectedModels();

    gridCollection.reset(selectedCollection);

  });

  // when an item in the grid is clicked
  App.vent.on('project:selected', function(modelId) {

    // deselect all items in the items collection
    App.projectsCollection.setSelectedCategory('');

  });

  App.vent.on('item:route', function(url_safe_title) {

    // deselect all items in the items collection
    App.projectsCollection.setSelectedCategory('');

  });

});
