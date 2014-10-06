import Ember from "ember";

export
default Ember.Route.extend({

    model: function() {
        return this.get('store').find('experience');
    },

    afterModel: function() {
        //load all companies to the store
        return this.get('store').find('company');
    },

    setupController: function(controller, model) {
        controller.set('companies', this.get('store').all('company'));
        this._super(controller, model);
    }

});