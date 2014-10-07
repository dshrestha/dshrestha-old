import Ember from "ember";

export
default Ember.Route.extend({

    beforeModel: function() {
        var applicationCntrl = this.controllerFor('application');
        applicationCntrl.set('blockUI', true);
    },

    afterModel: function() {
        var applicationCntrl = this.controllerFor('application');
        applicationCntrl.set('blockUI', false);
    }
});