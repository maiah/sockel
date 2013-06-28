sockel
======
Evented Realtime Streaming Database for Javascript based on LevelDB.

## sample
```js
var db = Sockel('/mydb');
var persons = db.child('persons');

persons.on('value', function (data) {
  console.log('Found data: ' + data.name);
});

setTimeout(function () {
  persons.push({ "name": "Maiah" });
}, 3000);
```

## opening a db
```js
var db = Sockel('/mydb');
```

## selecting a region (or a table similar to sql db)
```js
var persons = db.child('persons');

// selecting a specific sub-region
var person = persons.child('1');
```

## setting/updating a region's data
```js
var persons = db.child('persons');
var person = persons.child('1');

person.child('name').set('Maiah');
```
