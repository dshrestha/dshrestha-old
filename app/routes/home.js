import defaultRoute from "dshrestha/routes/default-route";

export
default defaultRoute.extend({

    model: function() {
        return this.get('store').find('experience');
    },

    afterModel: function() {
        //load all companies to the store
        this._super();
        return this.get('store').find('company');        
    },

    setupController: function(controller, model) {
        controller.set('companies', this.get('store').all('company'));
        this._super(controller, model);
    }

});