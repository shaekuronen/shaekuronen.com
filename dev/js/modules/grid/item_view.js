
App.GridItemView = Marionette.ItemView.extend({

  tagName: 'li',

  template: JST['dev/templates/grid_item.hbs'],

  events: {
    'click': 'thumbnailSelected'
  },

  thumbnailSelected: function() {

    App.vent.trigger('project:thumbnail:selected', this.model);

  }

});
