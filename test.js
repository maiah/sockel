var assert = require('assert'),
    Sockel = require('./index');

var db = Sockel('./testdb');

assert(db);
assert.equal('/', db.location);

db.put('Hello Leveldb', function (err) {
  assert(!err);
});

db.on('data', function (data) {
  assert(data);
  assert.equal('/', data.location);
  assert.equal('Hello Leveldb', data['testdb']);
});

var titleNode = db.sub('title');

titleNode.put('Amazing Movie', function (err) {
  assert(!err);
});

titleNode.on('data', function (data) {
  assert(data);
  assert.equal('/title/', data.location);
  assert.equal('Amazing Movie', data['title']);
});

var personNode = db.sub('person');
var maiahNode = personNode.sub('maiah');

var nameNode = maiahNode.sub('name');
nameNode.put('Maiah Mac', function (err) {
  assert(!err);
});

nameNode.on('data', function (data) {
  assert(data);
  assert.equal('/person/maiah/name/', data.location);
  assert.equal('Maiah Mac', data['name']);
});