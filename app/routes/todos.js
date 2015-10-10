import Ember from "ember";
import Todo from "my-kanban-board/models/todo";

export default Ember.Route.extend({
  model: function() {
    var todos = [];
    return Ember.$.getJSON("/api/todos").then(function(response) {
      response.forEach(function(data) {
        todos.pushObject(Todo.create(data));
      });
      return todos;
    });
  }
});
