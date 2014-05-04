
App.CategoryModel = Backbone.Model.extend({

  initialize: function() {

    // create a url safe title
    var url_title = this.get('title').replace(/[^a-z0-9]/gi, '-').toLowerCase();

    // add the url safe title to the model
    this.set('url_title', url_title);

  }

});

