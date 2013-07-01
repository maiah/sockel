var assert = require('assert'),
    Sockel = require('./index');

var db = Sockel('./testdb');

assert(db);
assert.equal('/', db.location);

db.put('Hello Leveldb', function (err) {
  assert(!err);
});

db.on('data', function (data) {
  assert.equal('/', data.location);
  assert(data.val);
  assert(data.val.testdb);
  assert.equal('Hello Leveldb', data.val.testdb);
});