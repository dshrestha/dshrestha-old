import Ember from "ember";
import config from './../config/environment';
import EmberValidations from "./../mixins/ember-validations";

export
default Ember.ObjectController.extend(EmberValidations, {

    username: null,

    password: null,

    registerUser: function() {

    },

    validations: {
        username: {
            presence: {
                message: 'The Username field is required.'
            }
        },
        password: {
            presence: {
                message: 'The Password field is required.'
            }
        }
    },

    actions: {

        login: function() {
            if (this.get('isValid')) {
                var self = this;
                Ember.$.ajax({
                    'url': config.host + '/users/authenticate',
                    'data': {
                        'username': this.get('username'),
                        'password': this.get('password')
                    },
                    'type': 'POST',
                    'success': function(userInfo) {
                        self.registerUser(userInfo);
                    },
                    'error': function(failResponse) {
                        self.clearValidationErrors();
                        var responseText = JSON.parse(failResponse.responseText);
                        responseText.errors.forEach(function(err) {
                            self.get('validationErrors').set(err.field, [err.message]);
                        });
                    }
                });
            } else {
                this.populateValidationErrors();
            }
        }
    }

});