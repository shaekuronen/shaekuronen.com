
App.ClientsDropdownItemView = Marionette.ItemView.extend({

  el: '#sk-clients-dropdown-element',
  tagName: 'li',
  className: 'sk-nav_item sk-dropdown-nav_container',

  template: JST['dev/templates/dropdown_item.hbs'],

  events: {

  }

});
