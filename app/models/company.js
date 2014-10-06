import DS from "ember-data";

export
default DS.Model.extend({
    name: DS.attr('string'),
    website: DS.attr('string'),
    logoPath: DS.attr('string'),
    description: DS.attr('string'),
    address_1: DS.attr('string'),
    address_2: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    zip: DS.attr('string'),
    country: DS.attr('string')
});