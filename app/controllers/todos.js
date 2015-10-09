import Ember from 'ember';

export default Ember.Controller.extend({
  unassigned: function() {
    var first = {project: "first"};
    var second = {project: "second"};
    var third = {project: "third"};
    return [first, second, third];
  }.property()
});
