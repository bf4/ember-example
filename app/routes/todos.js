import Ember from "ember";
import Todo from "my-kanban-board/models/todo";

export default Ember.Route.extend({
  model: function() {
    var first  = Todo.create({status_code: 1, project: "first"});
    var second = Todo.create({status_code: 1, project: "second"});
    var third  = Todo.create({status_code: 1, project: "third"});
    var last   = Todo.create({status_code: 2, project: "last"});
    return [first, second, third, last];
  }
});
