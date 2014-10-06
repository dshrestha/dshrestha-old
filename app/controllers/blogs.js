import Ember from "ember";

export
default Ember.ArrayController.extend({
	
    actions: {

        showBlog: function(blog) {
            this.transitionToRoute('blog', blog);
        }

    }
});