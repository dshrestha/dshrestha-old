import Ember from "ember";
export
default Ember.View.extend({


    actions: {

        refreshCaptcha: function() {
            var imageSrc = Ember.$('#captcha').attr('src');
            imageSrc = imageSrc.replace(/(\?\d+)$/g, "");
            Ember.$('#captcha').attr('src', imageSrc + '?' + (Date.now()));
        }
    }

});