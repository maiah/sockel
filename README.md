Sockel
======
Evented Realtime Streaming Database for Javascript based on LevelDB.

## Sample
```js
var db = Sockel('/mydb'),
    person = db.node('person'),
    maiah = person.node('maiah');

setTimeout(function () {
  console.log('Adding data');
  maiah.node('name').set('Maiah Mac');
}, 3000);

maiah.on('data', function (data) {
  console.log('Reading data: ' + data.name);
});
```

## Opening a db
```js
var db = Sockel('/mydb');
```

## Selecting a region
```js
var person = db.node('person');

// selecting a specific sub-region
var maiah = person.node('maiah');
```

## Writing to a region's data
```js
maiah.node('name').put('Maiah Mac');
```

## Reading a data
```js
maiah.on('data', function (data) {
  console.log('Reading data: ' + data.name);
});
```
