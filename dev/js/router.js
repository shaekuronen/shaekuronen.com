
App.Router = Marionette.AppRouter.extend({

  controller: new App.RouteController,

  appRoutes: {
    '(/)': 'indexRoute',
    'projects(/)': 'projectsRoute',
    'projects/:project(/)': 'projectRoute',
    'projects/category/:category(/)': 'categoryRoute',
    'projects/agency/:agency(/)': 'agencyRoute',
    'clients(/)': 'clientsRoute',
    'projects/client/:client(/)': 'clientRoute',
  }

});
