var Yrf = window.Yrf = Ember.Application.create({
    LOG_TRANSITIONS: true,
    //LOG_RESOLVER: true,
    LOG_ACTIVE_GENERATION: true, // log whats being actively generated
    //LOG_MODULE_RESOLVER: true,
    //LOG_TRANSITIONS: true,
    //LOG_TRANSITIONS_INTERNAL: true,
    //LOG_VIEW_LOOKUPS: true
});

/* Order and include as you please. */
require('yelp');
require('node-fs');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

    // fs = require("fs"),
    // config = (JSON.parse(fs.readFileSync("./app/config/yelp-api.json", "utf8")));

    // console.log(config);


Yrf.IndexRoute = Ember.Route.extend({
  model: function () {
    return;
  }
});




