import Ember from "ember";
export
default Ember.View.extend({

    unBlockUI: function() {
        this.set('controller.blockUI', false);
    }.on('didInsertElement')

});