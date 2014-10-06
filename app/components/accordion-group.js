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

    classNames: ['accordion-group'],

    actions: {

        /**
         * Toggles property expanded
         *
         * @action 'toggleExpand'
         */
        toggleExpand: function() {

            if (this.get('expanded')) {
                Ember.$(this.get('element')).find(".accordion-body").slideUp({
                    duration: 400
                });
            } else {
                Ember.$(this.get('element')).find(".accordion-body").slideDown({
                    duration: 400
                });
            }
            this.toggleProperty('expanded');
        }

    }
});