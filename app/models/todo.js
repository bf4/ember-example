import Ember from "ember";

export default Ember.Object.extend({
  status: function() {
    return "x";
  }.property()
});
