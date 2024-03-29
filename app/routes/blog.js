import Ember from "ember";
import defaultRoute from "dshrestha/routes/default-route";
import config from './../config/environment';

export
default defaultRoute.extend({

    model: function(params) {
        return this.get('store').find('blog', params.blog_id);
    },

    setupController: function(controller, model) {
        Ember.$.ajax({
            url: config.host + '/newapassa/blogContent/' + model.get('id'),
            success: function(data) {
                controller.set('blogContent', data);
            }
        });
        this._super(controller, model);
    }
});