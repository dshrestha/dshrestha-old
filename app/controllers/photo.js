import Ember from "ember";

export
default Ember.ObjectController.extend({
    needs: ['photos'],
    photos: Ember.computed.alias('controllers.photos'),

    hasPrevious: false,
    hasNext: false,

    photoSource: function() {
        return 'assets/albums/' + this.get('album.name') + '/' + this.get('source');
    }.property('source'),

    actions: {
        /*
         * Exit full screen mode and goes back to photos route.
         *
         * @action 'exitFullScreenMode'
         */
        exitFullScreenMode: function() {
            this.transitionToRoute('photos');
        },

        /*
         * Show next photo in the album.
         *
         * @action 'showNext'
         */
        showNext: function() {
            var currentIndex = this.get('photos.model').indexOf(this.get('model')),
                nextPhoto = this.get('photos.model').objectAt(currentIndex + 1);

            this.transitionToRoute('photo', nextPhoto);
        },

        /*
         * Show previous photo in the album.
         *
         * @action 'showPrevious'
         */
        showPrevious: function() {
            var currentIndex = this.get('photos.model').indexOf(this.get('model')),
                previousPhoto = this.get('photos.model').objectAt(currentIndex - 1);

            this.transitionToRoute('photo', previousPhoto);
        }

    }
});