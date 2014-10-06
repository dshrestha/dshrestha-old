import Ember from "ember";
export
default Ember.View.extend({

    originalImageWidth: null,
    originalImageHeight: null,
    imageLoaded: null,

    /**
     * This method sets the original image width and height of the image to originalImageWidth, originalImageHeight
     * proprety so that when the image is resized later(due to window resizing), it does so maintaining the original
     * aspect ratio rather than aspect ratio of already resized image.
     *
     * @method 'onImageLoad'
     * @param {Object} Event
     */
    onImageLoad: function(event) {

        var thisView = event ? event.data.scope : this,
            image = Ember.$(thisView.get('element')).find('#album-photo');

        thisView.setProperties({
            'originalImageWidth': Ember.$(image).width(),
            'originalImageHeight': Ember.$(image).height()
        });

        thisView.resizeImage();
        thisView.set('imageLoaded', true);
        Ember.$('#album-photo').show();

    },

    /**
     * This method resizes the image based on the visible region of the window.
     * Code credit goes to : http://ericjuden.com/2009/07/jquery-image-resize/
     *
     * @method 'resizeImage'
     * @param {Object} Event
     */
    resizeImage: function(event) {

        var thisView = event ? event.data.scope : this,
            image = Ember.$(thisView.get('element')).find('#album-photo'),
            maxWidth = Ember.$(window).width(), // Max width for the image
            maxHeight = Ember.$(window).height(), // Max height for the image
            ratio = 0, // Used for aspect ratio
            width = thisView.get('originalImageWidth'), // Current image width
            height = thisView.get('originalImageHeight'); // Current image height

        // Check if the current width is larger than the max
        if (width > maxWidth) {
            ratio = maxWidth / width; // get ratio for scaling image
            Ember.$(image).css("width", maxWidth); // Set new width
            Ember.$(image).css("height", height * ratio); // Scale height based on ratio
            height = height * ratio; // Reset height to match scaled image
            width = width * ratio; // Reset width to match scaled image
        }
        // Check if current height is larger than max
        if (height > maxHeight) {
            ratio = maxHeight / height; // get ratio for scaling image
            Ember.$(image).css("height", maxHeight); // Set new height
            Ember.$(image).css("width", width * ratio); // Scale width based on ratio
            width = width * ratio; // Reset width to match scaled image
        }
    },

    didInsertElement: function() {
        this.set('imageLoaded', false);
        //hide the overflow when viewing image in full screen mode
        Ember.$('body').css('overflow', 'hidden');

        //resize the image when window resizes or image loads
        Ember.$(window).on("resize", {
            scope: this
        }, this.resizeImage);

        Ember.$('#album-photo').hide(); //only show image after it has been resized
        Ember.$('#album-photo').on('load', {
            scope: this
        }, this.onImageLoad);

        this.addObserver('controller.model', this, 'rerender');
    },

    willDestroyElement: function() {
        Ember.$('body').css('overflow-y', 'scroll');
        Ember.$(window).off("resize", this.resizeImage);
        Ember.$('#album-photo').off('load', this.onImageLoad);
        this.removeObserver('controller.model', this, 'rerender');
    }
});