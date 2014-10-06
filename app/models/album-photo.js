import DS from "ember-data";

export
default DS.Model.extend({
    album: DS.belongsTo('album'),
    source: DS.attr('string'),
    description: DS.attr('string'),
    meta: DS.attr()
});