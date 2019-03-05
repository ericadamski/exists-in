# exists-in

Checks an object to see if the given property exists

## Install

```
yarn add exists-in
```

## Usage

```javascript
const existsIn = require("exists-in");

existsIn("a.b.c", {
  a: {
    b: {
      c: "hooray!",
    },
  },
});
// > 'hooray!'

existsIn(
  "a.b.c.d",
  {
    a: {
      b: {
        c: "hooray!",
      },
    },
  },
  "oops!" // Pass a default fallback option to return if the value does not exist
);
// > 'oops!'
```
