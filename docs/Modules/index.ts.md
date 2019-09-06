---
title: index.ts
nav_order: 1
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [RandomStringOptions (interface)](#randomstringoptions-interface)
- [randomBool (constant)](#randombool-constant)
- [random (function)](#random-function)
- [randomInt (function)](#randomint-function)
- [randomRange (function)](#randomrange-function)
- [randomString (function)](#randomstring-function)

---

# RandomStringOptions (interface)

A Option in random string

**Signature**

```ts
interface RandomStringOptions {
  /**
   *define whether the output should be lowercase / uppercase only. (default: null)
   */
  capitalization?: 'lowercase' | 'uppercase'
  /**
   *define the character set for the string. (default: 'alphanumeric')
   *alphanumeric - [0-9 a-z A-Z]
   *alphabetic - [a-z A-Z]
   *numeric - [0-9]
   *hex - [0-9 a-f]
   */
  charset?: string
  /**
   *the length of the random string. (default: 32)
   */
  length?: number
  /**
   *prefix
   */
  prefix?: string
  /**
   *exclude poorly readable chars: 0OIl. (default: false)
   */
  readable?: boolean
}
```

Added in v0.2.0

# randomBool (constant)

Returns a random boolean value with an equal chance of being `true` or `false`

**Signature**

```ts

export const : I.IO<boolean> = ...

```

Added in v2.0.0

# random (function)

Returns a random number between 0 (inclusive) and 1 (exclusive).

**Signature**

```ts

export const random: I.IO<number> = () => ...

```

Added in v2.0.0

# randomInt (function)

Takes a range specified by `low` and `high` , and returns a random integer uniformly
distributed in the closed interval `[low, high]`.

Added in v2.0.0

# randomRange (function)

Returns a random number between a minimum value (inclusive) and a maximum value (exclusive).

Added in v2.0.0

# randomString (function)

Takes a option returns a random string

**Signature**

```ts

export const randomString = (o?:RandomStringOptions): I.IO<string> => () => ...

```

Added in v0.2.0
