import Ember from "ember";

export
default Ember.Route.extend({

    model: function(params) {
        return this.get('store').find('album', params.album_id);
    },

    actions: {
        goBackToAlbums: function() {
            this.transitionTo('albums');
        }
    }

});