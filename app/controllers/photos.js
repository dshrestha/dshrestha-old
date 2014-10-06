import Ember from "ember";

export
default Ember.ArrayController.extend({
	
    actions: {

        viewPhoto: function(photo) {
            this.transitionToRoute('photo', photo);
        }

    }
});