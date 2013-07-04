Sockel
======
Evented Realtime Database for Javascript based on LevelDB.

## Sample
```js
var db = Sockel('/mydb'),
    person = db.sub('person'),
    maiah = person.sub('maiah');

setTimeout(function () {
  console.log('Adding data');
  maiah.sub('name').set('Maiah Mac');
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
var person = db.sub('person');

// selecting a specific sub-region
var maiah = person.sub('maiah');
```

## Writing to a region's data
```js
maiah.sub('name').put('Maiah Mac');
```

## Reading a data
```js
maiah.on('data', function (data) {
  console.log('Reading data: ' + data.name);
});
```
