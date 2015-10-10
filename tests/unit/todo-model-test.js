import { module, test } from 'qunit';

module('todo');

test('status_code of 1 is Unassigned', function(assert) {
  var subject = Todo.create({status_code: 1});
  assert.equal(subject.get("status"), "Unassigned");
});
