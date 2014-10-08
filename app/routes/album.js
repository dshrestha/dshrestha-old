import defaultRoute from "dshrestha/routes/default-route";

export
default defaultRoute.extend({

    model: function(params) {
        return this.get('store').find('album', params.album_id);
    },

    actions: {
        goBackToAlbums: function() {
            this.transitionTo('albums');
        }
    }

});