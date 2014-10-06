import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});
Router.map(function() {
    this.resource('home');
    this.resource('albums');
    this.resource('album', {
        path: 'albums/:album_id'
    }, function() {
        this.resource('photos', function() {
            this.resource('photo', {
                path: ':photo_id'
            });
        });
    });
    this.resource('blog-categories', function() {
        this.resource('blog-category', {
            path: ':category_id'
        }, function() {
            this.resource('blogs');
            this.resource('blog', {
                path: 'blogs/:blog_id'
            });
        });
    });
    this.resource('contact');
});
export
default Router;