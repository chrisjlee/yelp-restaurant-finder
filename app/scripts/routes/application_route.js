Yrf.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return this.store.find('Business');
    },
    // action: {
    //   update: function () {
    //     var count = this.store.all('category').get('Business'),
    //         randomId = Math.floor(Math.random() * (count - 0 + 1)) + min;
    //     return this.store.find('Business', randomId);
    //   }
    // }
});

