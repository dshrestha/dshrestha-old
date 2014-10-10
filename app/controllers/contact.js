import Ember from "ember";
import config from './../config/environment';
import EmberValidations from "./../mixins/ember-validations";
export
default Ember.ObjectController.extend(EmberValidations, {
    name: null,
    email: null,
    message: null,
    captcha: null,
    captchaPath: config.host+'/captcha',

    clearFormFields: function() {
        this.setProperties({
            'name': null,
            'email': null,
            'message': null,
            'captcha': null
        });
        this.get('validationErrors').clear();
    },
    validations: {
        name: {
            presence: {
                message: 'I really need to know your name.'
            },
            length: {
                allowBlank: true,
                minimum: 3,
                maximum: 100,
                messages: {
                    tooShort: 'Really, that short name?',
                    tooLong: 'Really, your name is that long? Oh I don\'t trust you.'
                }
            }
        },
        email: {
            presence: {
                message: 'I might need to respond to your email!'
            },
            format: {
                with: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                allowBlank: true,
                message: 'Common give me your real email address.'
            }
        },
        message: {
            presence: {
                message: 'You really don\'t want to write anything at all?'
            }
        },
        captcha: {
            presence: true
        }
    },
    actions: {
        submitFeedback: function() {
            var self = this;
            this.get('validationErrors').clear();
            if (this.get('isValid')) {
                Ember.$.ajax({
                    url: config.host+'/newapassa/sendFeedback',
                    type: 'POST',
                    data: {
                        'name': self.get('name'),
                        'email': self.get('email'),
                        'message': self.get('message'),
                        'captcha': self.get('captcha')
                    },
                    xhrFields: {
                        withCredentials: true
                    }
                }).success(function() {
                    self.clearFormFields();
                }).fail(function(failResponse) {
                    var responseText = JSON.parse(failResponse.responseText);
                    responseText.errors.forEach(function(err) {
                        self.validationErrors.set(err.field, [err.message]);
                    });
                });
            } else {
                this.populateValidationErrors();
            }
        }
    }
});