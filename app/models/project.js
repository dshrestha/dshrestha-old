import DS from "ember-data";

export
default DS.Model.extend({
    name: DS.attr('string'),
    displayName: DS.attr('string'),
    description: DS.attr('string'),
    responsibilities: DS.attr(),
    languages: DS.attr()
});