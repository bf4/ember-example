import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var first  = {status_code: 1, project: "first"};
    var second = {status_code: 1, project: "second"};
    var third  = {status_code: 1, project: "third"};
    var last   = {status_code: 2, project: "last"};
    return [first, second, third, last];
  }
});
