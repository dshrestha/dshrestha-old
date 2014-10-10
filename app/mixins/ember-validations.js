import Ember from "ember";

export
default Ember.Mixin.create(Ember.Validations.Mixin, {

    validationErrors: null,

    initializeValidationErrors: function() {
        this.set('validationErrors', Ember.Object.create());
    }.on('init'),

    clearValidationErrors: function() {
        this.get('validationErrors').destroy();
        this.set('validationErrors', Ember.Object.create());
    },

    populateErrors: function() {
        Ember.keys(this.get('errors')).forEach(function(field) {
            this.get('validationErrors').set(field, Ember.$.extend(true, [], this.get('errors').get(field)));
        }.bind(this));
    }

});