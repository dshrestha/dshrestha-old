import Ember from "ember";

export
default Ember.Route.extend({

    model: function() {
        var category = this.modelFor('blog-category');
        return this.get('store').find('blog', {
            'category': category.get('id')
        });
    }

});