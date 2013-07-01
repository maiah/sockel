Sockel
======
Evented Realtime Streaming Database for Javascript based on LevelDB.

## Sample
```js
var db = Sockel('/mydb'),
    person = db.sublevel('person'),
    maiah = person.sublevel('maiah');

setTimeout(function () {
  console.log('Adding data');
  maiah.sublevel('name').set('Maiah Mac');
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
var person = db.sublevel('person');

// selecting a specific sub-region
var maiah = person.sublevel('maiah');
```

## Writing to a region's data
```js
maiah.sublevel('name').put('Maiah Mac');
```

## Reading a data
```js
maiah.on('data', function (data) {
  console.log('Reading data: ' + data.name);
});
```
