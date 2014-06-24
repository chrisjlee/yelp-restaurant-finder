Yrf.Router.map(function () {
    this.route('/');
});


Yrf.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return this.store.find('Business');
    }
});



