var LevelUp = require('levelup'),
    Sublevel = require('level-sublevel'),
    LiveStream = require('level-live-stream');

module.exports = function(dbDir) {
  var db = LevelUp(dbDir);
  var sub = Sublevel(db);

  var dbName = sub.location.split('/')[1];

  function Sockel() {
    var self = this;
    self.location = '/';

    self.put = function (val, cb) {
      if (self.location === '/') {
        sub.put(dbName, val, cb);
      } else {
        sub.put(self.location, val, cb);
      }
    };

    self.on = function (eventType, cb) {
      if (eventType === 'data') {
        var readStream = db.createReadStream();
        var obj = new Sockel();
        obj.val = {};

        readStream.on('data', function (data) {
          obj['val'][data.key] = data.value;
        });

        readStream.on('end', function () {
          cb(obj);
        });
      }
    };

    self.sublevel = function (loc) {
      var subdb = sub.sublevel(loc);
    };
  };

  return new Sockel();
};