# Babel Object Restructuring
A Babel Plugin to create new objects with a subset of fields from an existing object

NPM: https://www.npmjs.com/package/babel-object-restructuring

Input
```js
const oldObject = {
    fieldA: 1,
    fieldB: 2,
    fieldC: 3,
    fieldD: 4
};

const newObject = { fieldA, fieldB, fieldD } in oldObject;
```

Output
```js
const oldObject = {
    fieldA: 1,
    fieldB: 2,
    fieldC: 3,
    fieldD: 4
};

const newObject = {
    fieldA: oldObject.fieldA,
    fieldB: oldObject.fieldB,
    fieldD: oldObject.fieldD
};
```

