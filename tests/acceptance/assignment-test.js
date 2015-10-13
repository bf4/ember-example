import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'my-kanban-board/tests/helpers/start-app';

var first  = {status_code: 1, project: "first"};
var second = {status_code: 1, project: "second"};
var third  = {status_code: 1, project: "third"};
var last   = {status_code: 2, project: "last"};
var json = [first, second, third, last];

module('Acceptance | assignment', {
  beforeEach: function() {
    this.application = startApp();
    return Ember.$.fauxjax.new({
        request: {
            url: "/api/todos",
            method: "GET"
        },
        response: {
            status: 200,
            content: json
        }
    });
  },

  afterEach: function() {
    Ember.$.fauxjax.clear();
    Ember.run(this.application, 'destroy');
  }
});

test('unassigned items are grouped together', function(assert) {
  visit('/');
  andThen(function() {
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 3);
    var project = find(".unassigned .cards:eq(0) .todo_project");
    assert.equal(project.text(), "first");
  });
});

test('assigned items are grouped together', function(assert) {
  visit('/');
  andThen(function() {
    var assigned = find(".assigned .cards");
    assert.equal(assigned.length, 1);
    var project = find(".assigned .cards:eq(0) .todo_project");
    assert.equal(project.text(), "last");
  });
});

test('status is shown in plain english', function(assert) {
  visit('/');
  andThen(function() {
    var status = find(".assigned .cards:eq(0) .todo_status");
    assert.equal(status.text(), "Assigned");
  });
});

test('clicking the assign button will move item from unassigned to assigned', function(assert) {
  visit('/');
  andThen(function() {
    var assigned = find(".assigned .cards");
    assert.equal(assigned.length, 1);
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 3);
  });
  click(".unassigned .cards:eq(0) .assign_btn");
  andThen(function() {
    var assigned = find(".assigned .cards");
    assert.equal(assigned.length, 2);
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 2);
  });
});
