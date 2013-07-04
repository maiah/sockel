var LevelUp = require('levelup'),
    Sublevel = require('level-sublevel'),
    LiveStream = require('level-live-stream');

var Sockel = function (db) {
  var self = this;
  self.location = '/';
  self.db = db;
};

Sockel.prototype.put = function (val, cb) {
  if (this.location === '/') {
    var dbName = this.db.location.split('/')[1];
    this.db.put(dbName, val, cb);
  } else {
    var keys = this.location.split('/');
    var keyIndex = keys.length - 2;
    var key = keys[keyIndex];
    this.db.put(key, val, cb);
  }
};

Sockel.prototype.on = function (eventType, cb, opts) {
  if (eventType === 'data') {
    var readStream = null;

    if (opts) {
      readStream = this.db.createReadStream(opts);
    } else {
      readStream = this.db.createReadStream();
    }

    var obj = new Sockel(this.db);
    obj.location = this.location;

    readStream.on('data', function (data) {
      obj[data.key] = data.value;
    });

    readStream.on('end', function () {
      cb(obj);
    });
  }
};

Sockel.prototype.sub = function (loc) {
  var subdb = this.db.sublevel(loc);
  var obj = new Sockel(subdb);
  obj.location = this.location + loc + '/';
  return obj;
};

module.exports = function(dbDir) {
  var db = LevelUp(dbDir);
  var sub = Sublevel(db);

  // Create initial sockel instance
  return new Sockel(sub);
};