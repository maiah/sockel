sockel
======
Evented Realtime Streaming Database for Javascript based on LevelDB.

## sample
```js
var db = Sockel('/mydb'),
    person = db.child('person'),
    maiah = db.child('maiah');

setTimeout(function () {
  console.log('Adding data');
  maiah.child('name').set('Maiah Mac');
}, 3000);

maiah.on('value', function (data) {
  console.log('Reading data: ' + data.name);
});
```

## opening a db
```js
var db = Sockel('/mydb');
```

## selecting a region (or a table similar to sql db)
```js
var person = db.child('person');

// selecting a specific sub-region
person = persons.child('maiah');
```

## setting/updating a region's data
```js
person.child('name').set('Maiah');
```
