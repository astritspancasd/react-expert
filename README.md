## Intersection

Intersection allows us to combine multiple types into a single one type. To create an intersection type, we have to use the & keyword:

```js
type Name = {
  name: “string”
};

type Age = {
  age: number
};

type Person = Name & Age;
```
