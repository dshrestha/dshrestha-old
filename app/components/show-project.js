import Ember from "ember";

export
default Ember.Component.extend({

    /**
     * Property that is used to store the expanded state of project details
     *
     * @property 'expanded'
     * @type {boolean}
     */
    expanded: false,

    languages: null,

    classNames: ['space-bottom-sm'],

    didInsertElement: function() {
        this.set('languages', this.get('project.languages').toArray().join(", "));
    }
});