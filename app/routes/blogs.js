import defaultRoute from "dshrestha/routes/default-route";

export
default defaultRoute.extend({

    model: function() {
        var category = this.modelFor('blog-category');
        return this.get('store').find('blog', {
            'category': category.get('id')
        });
    }

});