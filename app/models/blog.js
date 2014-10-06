import DS from "ember-data";

export
default DS.Model.extend({
    category: DS.belongsTo('blog-category'),
    title: DS.attr('string'),
    createdOn: DS.attr('date'),
    abstract: DS.attr('string')
});