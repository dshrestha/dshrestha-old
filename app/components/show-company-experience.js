import Ember from "ember";

export
default Ember.Component.extend({
    /**
     * Property that holds a company object
     * @property 'company'
     * @return {Object}
     */
    company: null,

    /**
     * Property that holds list of all projects for a company
     * @property 'projects'
     * @return {Array}
     */
    projects: null,

    /**
     * Property that holds list of all experiences
     * @property 'allExperiences'
     * @return {Array}
     */
    allExperiences: null,

    /**
     * Property that holds list of experiences filtered by company
     * @property 'experiences'
     * @return {Array}
     */
    experiences: null,

    initialize: function() {
        var projects = [],
            experiences = this.get('allExperiences').filterBy('company', this.get('company'));

        experiences.forEach(function(experience) {
            projects.pushObjects(experience.get('projects').toArray());
        });

        this.setProperties({
            'projects': projects,
            'experiences': experiences
        });
    }.on('init') 
    
});