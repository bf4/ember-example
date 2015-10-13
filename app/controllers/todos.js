import Ember from 'ember';

export default Ember.Controller.extend({
  todos: Ember.inject.controller(),
  isActiveRoute: Ember.computed.equal("todos.application.currentRouteName", "todos.index"),
  actions: {
    assign: function(todo) {
      todo.set("status_code", 2);
    }
  },
  unassigned: function() {
    return this.get("model").filter(function(model) {
      return model.status_code === 1;
    });
  }.property("model.@each.status_code"),
  assigned: function() {
    return this.get("model").filter(function(model) {
      return model.status_code === 2;
   });
  }.property("model.@each.status_code")
});
