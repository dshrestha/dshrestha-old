import Ember from "ember";
export
default Ember.View.extend({

    activateSnappedLink: function() {
        Ember.$('ul.nav a:contains("Snapped")').addClass('active');
    }.on('didInsertElement'),
    
    deactivateSnappedLink: function() {
        Ember.$('ul.nav a:contains("Snapped")').removeClass('active');
    }.on('willDestroyElement')
});