import DS from "ember-data";

export
default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    uploadDate: DS.attr('date'),
    coverPhoto: DS.attr('string')
});