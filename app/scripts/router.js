Yrf.Router.map(function () {
    this.route('/');
});


Yrf.IndexRoute = Ember.Route.extend({
  renderTemplate: function () {
    this.render('index');
  }
});


