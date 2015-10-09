import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'my-kanban-board/tests/helpers/start-app';

module('Acceptance | assignment', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /assignment', function(assert) {
  visit('/');
  andThen(function() {
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 3);
    var project = find(".unassigned .cards:eq(0) .todo_project");
    assert.equal(project.text(), "first");
  });
});
