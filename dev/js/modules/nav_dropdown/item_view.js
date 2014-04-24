
App.NavDropdownItemView = Marionette.ItemView.extend({

  template: JST['dev/templates/dropdown_item.hbs'],

  events: {
    'click .sk-dropdown-nav_dropdown-element li': 'projectsCategorySelected',
    'click .sk-dropdown-nav_dropdown-element_sub-nav li': 'projectDetailSelected'
  },

  projectsCategorySelected: function(thing) {
    console.log('this thing should be available now');
    window.thing = thing;
    // notify app that a projects category has been selected
    // App.vent.trigger('projects:category:selected', _category);

  }

});
