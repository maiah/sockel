sockel
======
Evented Realtime Streaming Database for Javascript based on LevelDB.

## sample
```js
var db = Sockel('/mydb');
var persons = db.sublevel('persons');

persons.on('data', function (data) {
  console.log('Found data: ' + data.name);
});

setTimeout(function () {
  persons.push({ "name": "Maiah" });
}, 3000);
```
