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
  visit('/assignment');

  andThen(function() {
    assert.equal(currentURL(), '/assignment');
  });
});
