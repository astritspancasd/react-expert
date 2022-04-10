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

## Unions

Union types allow us to create a new type that can have a value of one or a few more types. To create a union type, we have to use the | keyword.

```js
type Man = {
  name: “string”
};

type Woman = {
  name: “string”
};

type Person = Man | Woman;
```

## Tuples

Tuples are a very helpful concept in TypeScript, it brought to us this new data type that includes two sets of values of different data types.

```js
type Reponse = [string, number];
```

But, in TypeScript, we can only declare tuples using types and not interfaces. There’s no way we can declare a tuple in TypeScript using an interface, but you still are able to use a tuple inside an interface, like this:

```js
interface Response {
  value: [string, number];
}
```

We can see that we can achieve the same result as using types with interfaces. So, here comes the question that a lot of developers might have — should I use a type instead of an interface? If so, when should I use a type?

Let’s understand the best use cases for both of them, so you don’t need to abandon one for the other.

## Example usage of Types

```js
type Person = {
  name: string,
  age: number,
};

type ReturnPerson = (person: Person) => Person;

const returnPerson: ReturnPerson = (person) => {
  return person;
};
```

## TypeScript Type Assertion

In TypeScript, type assertion is a mechanism which tells the compiler about the type of a variable. When TypeScript determines that the assignment is invalid, then we have an option to override the type using a type assertion. If we use a type assertion, the assignment is always valid, so we need to be sure that we are right. Otherwise, our program may not work correctly.
