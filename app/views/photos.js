import Ember from "ember";
export
default Ember.View.extend({

    activateSnappedLink: function() {
        Ember.$('ul.nav a[href="/albums"]').addClass('active');
    }.on('didInsertElement'),

    deactivateSnappedLink: function() {
        Ember.$('ul.nav a[href="/albums"]').removeClass('active');
    }.on('willDestroyElement')


});