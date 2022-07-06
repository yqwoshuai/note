---
sidebar: 'auto'
---

# TS 类型挑战

按照这个库[type-challenges](https://github.com/type-challenges/type-challenges)的题目，学习编写 TS 类型

## Easy 题

### 实现 Pick

题目：通过从 K 中选择属性 T 来构造类型

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

解答：

```typescript
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

---

### 实现 Readonly

题目：构造一个类型，并将 T 的所有属性设置为只读，这意味着无法重新分配所构造类型的属性。

```typescript
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
```

解答：

```typescript
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

---

### 元组转换为对象

题目：给定数组，转换为对象类型，键/值必须在给定数组中。

```typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

解答：

```typescript
type TupleToObject<T> = {
  [P in T[number]]: P
}
```

---

### 第一个元素

题目：实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。

```typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

解答：

```typescript
type First<T extends any[]> = T extends [] ? never : T[0]
```

---

### 获取元组长度

题目：对于给定的元组，您需要创建一个通用的`Length`，选择元组的长度

```typescript
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

解答：

```typescript
type Length<T extends readonly any[]> = T['length']
```

---

### Exclude

题目：实现内置的`Exclude <T，U>`，从 T 中排除可分配给 U 的那些类型

```typescript
type x = string | number | boolean

type y = string | number

type c = MyExclude<x, y>

const b: c = true
```

解答：

```typescript
type MyExclude<T, U> = T extends U ? never : T
```

---

### Awaited

题目：我们有 `Promise<ExampleType>` 如何获得 `ExampleType`？

```typescript
type b = Promise<string>

const c: Awaited<b> = ''
```

解答：

```typescript
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? (R extends Promise<any> ? MyAwaited<R> : R) : never
```

---

### If

题目：实现一个工具类型，它接受条件 c 为 true 或 false，c 为 true 返回 T，c 为 false 返回 U。

```typescript
type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

解答：

```typescript
type If<C extends boolean, T, U> = C extends true ? T : U
```

---

### Concat

题目：在类型系统中实现`Array.concat`

```typescript
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

解答：

```typescript
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]
```

---

### Includes

题目：在类型系统中实现`Array.includes`

```typescript
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
```

解答：

```typescript
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ? (Equal<U, F> extends true ? true : Includes<R, U>) : false
```

---

### Push

题目：在类型系统中实现`Array.push`

```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

解答：

```typescript
type Push<T extends any[], U> = [...T, U]
```

---

### Unshift

题目：在类型系统中实现`Array.unshift`

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```

解答：

```typescript
type Unshift<T extends any[], U> = [U, ...T]
```

---

### Parameters

题目：实现内置的 Parameters 类型

```typescript
const foo = (arg1: string, arg2: number): void => {}
type Result = MyParameters<typeof foo> // [string, number]
```

解答：

```typescript
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? [...R] : never
```

---

## Middle 题

### 获取函数返回类型

题目：不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 范型。

```typescript
const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```

解答：

```typescript
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any
```

---

### 实现 Omit

题目：不使用 Omit 实现 TypeScript 的 `Omit<T, K>` 范型。Omit 会创建一个省略 K 中字段的 T 对象。

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

解答：

```typescript
type MyOmit<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P]
}
```

---

### Readonly 2

题目：实现一个通用`MyReadonly2<T, K>`，它带有两种类型的参数 T 和 K。

K 指定应设置为 Readonly 的 T 的属性集。如果未提供 K，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK
```

解答：

```typescript
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}
```

---

### 深度 Readonly

题目：实现一个通用的`DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

```typescript
type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

const todo: DeepReadonly<X> // should be same as `Expected`
```

解答：

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}
```

---

### 元组转合集

题目：实现泛型`TupleToUnion<T>`，它覆盖元组的值与其值联合。

```typescript
type Arr = ['1', '2', '3']

const a: TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

解答：

```typescript
type TupleToUnion<T extends any[]> = T[number]
```

---

### 可串联构造器

题目：在 JavaScript 中我们很常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给他附上类型吗？

在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 option(key, value) 和 get()。在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。

你只需要在类型层面实现这个功能 - 不需要实现任何 TS/JS 的实际逻辑。

你可以假设 key 只接受字符串而 value 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。同样的 key 只会被使用一次。

```typescript
declare const config: Chainable

const result = config.option('foo', 123).option('name', 'type-challenges').option('bar', { value: 'Hello World' }).get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```

解答：

```typescript
type Chainable<T = {}> = {
  option<k extends string, v>(key: k extends keyof T ? never : k, value: v): Chainable<T & { [i in k]: v }>
  get(): T
}
```

---

### 最后一个元素

题目：实现一个通用`Last<T>`，它接受一个数组 T 并返回其最后一个元素的类型。

```typescript
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```

解答：

```typescript
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type Last<T> = T extends [...any[], infer P] ? P : never
```

---

### 出堆

题目：实现一个通用`Pop<T>`，它接受一个数组 T 并返回一个没有最后一个元素的数组。

```typescript
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```

解答：

```typescript
type Pop<T extends any[]> = T extends [...infer U, infer P] ? U : never
```

---

### Promise.all

题目：键入函数`PromiseAll`，它接受 PromiseLike 对象数组，返回值应为`Promise<T>`，其中 T 是解析的结果数组。

```typescript
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

// expected to be `Promise<[number, number, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
```

解答：

```typescript
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: T[P] extends Promise<infer U> ? U : T[P]
}>
```

---

### Type Lookup

题目：有时，您可能希望根据其属性在并集中查找类型。

在此挑战中，我们想通过在联合`Cat | Dog中`搜索公共 type 字段来获取相应的类型。换句话说，在以下示例中，我们期望`LookUp<Dog | Cat, 'dog'>`获得 Dog，`LookUp<Dog | Cat, 'cat'>`获得 Cat。

```typescript
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```

解答：

```typescript
type LookUp<U, T extends string> = U extends { type: T } ? U : never
```

---

### Trim Left

题目：删除字符串开头的空格

```typescript
type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
```

解答：

```typescript
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S
```

---

### Trim

题目：删除字符串开头和结尾的空格

```typescript
type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
```

解答：

```typescript
type space = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${space}${infer R}` ? Trim<R> : S extends `${infer R}${space}` ? Trim<R> : S
```

---

### Capitalize

题目：将第一个字符转为大写

```typescript
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```

解答：

```typescript
type MyCapitalize<S extends string> = S extends `${infer U}${infer R}` ? `${Uppercase<U>}${R}` : S
```

---

### Replace

题目：替换给定的内容

```typescript
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
```

解答：

```typescript
type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${B}`
  : S
```

---

### ReplaceAll

题目：替换全部给定的内容

```typescript
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
```

解答：

```typescript
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer R}${From}${infer U}`
  ? `${R}${To}${ReplaceAll<`${U}`, From, To>}`
  : S
```

---

### 追加参数

题目：实现一个范型`AppendArgument<Fn, A>`，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。

```typescript
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// 期望是 (a: number, b: string, x: boolean) => number
```

解答：

```typescript
type AppendArgument<Fn, A> = Fn extends (...arg: infer P) => infer R ? (...arg: [...P, A]) => R : never
```

---

### Permutation

实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

```typescript
type perm = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
```

解答：

```typescript
type Permutation<T, U = T> = [T] extends [never] ? []: T extends U ? [T, ...Permutation<Exclude<U,T>>] : []
```

---

### Length of String

题目：计算字符串的长度

```typescript
type a = 'hellow world'

type b = LengthOfString<a> // type b = 12
```

解答：

```typescript
type LengthOfString<T extends string, U extends any[] = []> = T extends `${infer R}${infer K}` ? LengthOfString<K, [...U, R]> : U['length']
```

---

### Flatten

题目：铺平数组

```typescript
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
```

解答：

```typescript
type Flatten<T extends any[]> = T extends [infer R, ...infer K]
  ? R extends any[]
    ? [...Flatten<R>, ...Flatten<K>]
    : [R, ...Flatten<K>]
  : T
```

---

### Append to object

题目：拓展对象的属性

```typescript
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
```

解答：

```typescript
type AppendToObject<T extends object, U extends string, K> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : K
}
```

---

### Absolute

题目：获取数字的绝对值，返回绝对值的字符串形式

```typescript
type Test = -100
type Result = Absolute<Test> // expected to be "100"
```

解答：

```typescript
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}`
```

---

### Merge

题目：合并两个类型，key 相同的类型由第二个覆盖第一个

```typescript
type a = {
  x: 1
  y: 3
}

type b = {
  y: 2
  z: 3
}

type c = Merge<a, b> // c { x: 1, y: 2, z: 3 }
```

解答：

```typescript
type Merge<T, U> = {
  [P in keyof T | keyof U]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never
}
```

---

### CamelCase

题目：将 横杠式 for-bar-baz 改为 驼峰式 forBarBaz

```typescript
type a = 'for-bar-baz'

type b = CamelCase<a> // forBarBaz
```

解答：

```typescript
type CamelCase<T extends string> = T extends `${infer R}-${infer U}${infer K}` ? CamelCase<`${R}${Uppercase<U>}${K}`> : T
```
