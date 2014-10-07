import defaultRoute from "dshrestha/routes/default-route";

export
default defaultRoute.extend({

    model: function() {
        return this.get('store').find('album');
    }

});