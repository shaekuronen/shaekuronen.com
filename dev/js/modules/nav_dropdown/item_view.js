
App.NavDropdownItemView = Marionette.ItemView.extend({

  template: JST['dev/templates/dropdown_item.hbs'],

  events: {
    'click li h4': 'projectsCategorySelected',
    'click .sk-dropdown-nav_dropdown-element_sub-nav li': 'projectSelected'
  },

  projectsCategorySelected: function(event) {
    console.log('in projectsCategorySelected, the category selected is ' + event.currentTarget.innerHTML);
    // notify app that a projects category has been selected
    App.vent.trigger('projects:category:selected', event.currentTarget.innerHTML);

  },

  projectSelected: function(event) {
    event.stopPropagation();
    console.log('in projectSelected, the category selected is ' + event.currentTarget.innerHTML);
    App.vent.trigger('projects:selected', event.currentTarget.innerHTML);
  }

});
