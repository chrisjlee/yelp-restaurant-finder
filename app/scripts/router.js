Yrf.Router.map(function () {
    this.route('/');
    this.route('/get');
});

Yrf.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return this.store.find('Business');
    }
});

// Yrf.ApplicationRoute = Ember.Route.extend({
//     // admittedly, this should be in IndexRoute and not in the
//     // top level ApplicationRoute; we're in transition... :-)
//     model: function () {
//           var businessCount = this.store.get('Business').length,
//             min = 0,
//             max = businessCount,
//             randomBusinessCountId = Math.floor(Math.random() * (max - min + 1)) + min;
//         return this.store.get('Business', randomBusinessCountId);
//     }
// });

// Yrf.GetRoute = Ember.Route.extend({
//     // admittedly, this should be in IndexRoute and not in the
//     // top level ApplicationRoute; we're in transition... :-)
//     model: function () {
//         var businessCount = this.store.get('Business').length,
//             min = 0,
//             max = businessCount,
//             randomBusinessCountId = Math.floor(Math.random() * (max - min + 1)) + min;
//         return this.store.find('Business', randomBusinessCount);
//     }
// });
