import Ember from "ember";

export
default Ember.Route.extend({

    model: function() {
        var album = this.modelFor('album');
        return this.get('store').find('album-photo', {
            'album': album.get('id')
        });
    },

    setupController: function(controller, model) {
    	this._super(controller, model);
    }

});