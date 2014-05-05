
App.module("ItemDetail", function(ItemDetail, App, Backbone, Marionette, $, _) {

  App.vent.on('project:thumbnail:selected', function(model) {

    ItemDetail.itemView = new App.ItemDetailItemView({
      model: model
    });

    App.mainRegion.show(ItemDetail.itemView);

  });

  // App.vent.on('projects:category:selected', function(category) {

  //   // render item detail
  //   App.itemDetailRegion.close();

  // });

  // App.vent.on('project:selected', function(modelId) {

  //   var model = App.projectsCollection.get(modelId);

  //   // instantiate view
  //   var itemDetailItemView = new App.ItemDetailItemView({
  //     model: model
  //   });

  //   // render item detail
  //   App.itemDetailRegion.show(itemDetailItemView);

  //   // update the URL
  //   App.router.navigate('item/' + model.get('url_safe_title'));

  // });

  // App.vent.on('item:route', function(url_safe_title) {

  //   var model = App.projectsCollection.findWhere({'url_safe_title': url_safe_title});

  //   // instantiate view
  //   var itemDetailItemView = new App.ItemDetailItemView({
  //     model: model
  //   });

  //   // render item detail
  //   App.itemDetailRegion.show(itemDetailItemView);

  // });

});
