import defaultRoute from "dshrestha/routes/default-route";

export
default defaultRoute.extend({

    model: function(params) {
        return this.get('store').find('blog-category', params.category_id);
    },

});