import Ember from "ember";

export
default Ember.Route.extend({

    model: function(params) {
        return this.get('store').find('album-photo', params.photo_id);
    },

    setupController: function(controller, model) {
        var photosInAlbum = this.modelFor('photos');
        controller.set('hasPrevious', photosInAlbum.get('firstObject') !== model);
        controller.set('hasNext', photosInAlbum.get('lastObject') !== model);
        this._super(controller, model);

    }

});