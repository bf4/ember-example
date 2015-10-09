import Ember from 'ember';

export default Ember.Controller.extend({
  unassigned: function() {
    return [1, 2, 3];
  }.property()
});
