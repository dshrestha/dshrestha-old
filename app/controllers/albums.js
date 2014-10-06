import Ember from "ember";

export
default Ember.ArrayController.extend({

    actions: {

        selectAlbum: function(album) {
            this.transitionToRoute('album', album);
        }

    }
});