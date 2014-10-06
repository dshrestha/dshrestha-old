import Ember from "ember";

export
default Ember.Component.extend({

    layout: Ember.Handlebars.compile('<div id="timeline-overview"></div>'),
    
    didInsertElement: function() {
        var today = new Date(),
            startDate = null,
            endDate = null,
            sourceData = {
                "timeline": {
                    "headline": "Hi there !!",
                    "type": "default",
                    "text": "<p>Let me introduce myself to you first, I am software engineer by profession and mostly have been dabbling with web projects and enjoying it a lot. You will find lots of details regarding my professional life in this page so I will refrain from it now. In my spare time I tend to work on my \"basement\" projects - improving on old codes and fooling around with new languages or gang up with folks for some <a href=\"http://www.teamfortress.com/\" target=\"_blank\">TF2</a> madness. I have been trying to ski for a while now and personally I think <strong>pizza</strong> is a scam. Oh and sometimes I like to google <a href=\"http://www.google.com/search?btnG=1&amp;pws=0&amp;q=best+personal+website\" target=\"_blank\">\"best personal websites\"</a> and then drool on the work of amazing web designers - true story.</p>",
                    "asset": {
                        "media": "assets/images/profile_pic.jpg",
                        "credit": "",
                        "caption": ""
                    },
                    "date": [{
                        "startDate": "1985",
                        "endDate": "1985",
                        "headline": "DOB",
                        "text": "<p>I was born in Nepal to my wonderful parents.</p>",
                        "tag": "",
                        "classname": "",
                        "asset": {
                            "media": "",
                            "thumbnail": "",
                            "credit": "",
                            "caption": ""
                        }
                    }, {
                        "startDate": "1993",
                        "endDate": "2000",
                        "headline": "School Leaving Certificate",
                        "text": "<p>Made life long friends here.</p>",
                        "tag": "",
                        "classname": "",
                        "asset": {
                            "media": "http://en.wikipedia.org/wiki/Adarsha_Vidya_Mandir",
                            "thumbnail": "",
                            "credit": "",
                            "caption": ""
                        }
                    }, {
                        "startDate": "2000",
                        "endDate": "2002",
                        "headline": "Proficiency Certificate In Science(Physics Group)",
                        "text": "<p>Made some more life long friends here.</p>",
                        "tag": "",
                        "classname": "",
                        "asset": {
                            "media": "",
                            "thumbnail": "",
                            "credit": "",
                            "caption": ""
                        }
                    }, {
                        "startDate": "2002",
                        "endDate": "2006",
                        "headline": "Bachelor of Engineering in Information Technology",
                        "text": "<p>Completed my 4 years undergraduate program in information technology and earned my bachelors degree from pokhara university</p>",
                        "tag": "",
                        "classname": "",
                        "asset": {
                            "media": "http://en.wikipedia.org/wiki/Pokhara_University",
                            "thumbnail": "",
                            "credit": "",
                            "caption": ""
                        }
                    }, {
                        "startDate": "2010, 02, 14",
                        "endDate": "2012, 12, 20",
                        "headline": "Master Of Science In Computer Science",
                        "text": "<p><a href=\"http://www.mum.edu/index.html\" target=\"_blank\">Maharishi University Of Management</a></p>",
                        "tag": "",
                        "classname": "",
                        "asset": {
                            "media": "http://en.wikipedia.org/wiki/Maharishi_University_of_Management",
                            "thumbnail": "",
                            "credit": "",
                            "caption": ""
                        }
                    }],
                    "era": [{
                        "startDate": "2011,12,10",
                        "endDate": today.getFullYear() + "," + (today.getMonth() + 1) + "," + today.getDate(),
                        "headline": "Headline Goes Here",
                        "text": "<p>Body text goes here, some HTML is OK</p>",
                        "tag": "This is Optional"
                    }]
                }
            };


        //append experience data
        this.get('experiences').forEach(function(experience) {

            startDate = experience.get('startDate');
            endDate = experience.get('endDate');
            sourceData.timeline.date.push({
                "startDate": startDate.getFullYear() + "," + (startDate.getMonth() + 1) + "," + startDate.getDate(),
                "endDate": endDate ? (endDate.getFullYear() + "," + (endDate.getMonth() + 1) + "," + endDate.getDate()) : "",
                "headline": experience.get('company.name'),
                "text": "<div>Title held : " + experience.get('title') + " </div> <div><a href=\"" + experience.get('company.website') + "\" target=\"_blank\">Official link</a></div>",
                "tag": "",
                "classname": "",
                "asset": {
                    "media": experience.get('company.logoPath'),
                    "thumbnail": "",
                    "credit": "",
                    "caption": experience.get('company.description')
                }
            });
        });

        createStoryJS({
            type: 'timeline',
            height: '600',
            source: sourceData,
            embed_id: 'timeline-overview',
            embed_path: 'libs/timeline/'
        });

    }   
});