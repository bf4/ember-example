import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    assign: function(todo) {
      todo.set("status_code", 2);
    }
  },
  unassigned: function() {
    return this.get("model").filter(function(model) {
      return model.status_code === 1;
    });
  }.property(),
  assigned: function() {
    return this.get("model").filter(function(model) {
      return model.status_code === 2;
   });
  }.property()
});
