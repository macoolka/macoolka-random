---
title: index.ts
nav_order: 1
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [RandomStringOptions (接口)](#randomstringoptions-%E6%8E%A5%E5%8F%A3)
- [randomBool (常量)](#randombool-%E5%B8%B8%E9%87%8F)
- [random (函数)](#random-%E5%87%BD%E6%95%B0)
- [randomInt (函数)](#randomint-%E5%87%BD%E6%95%B0)
- [randomRange (函数)](#randomrange-%E5%87%BD%E6%95%B0)
- [randomString (函数)](#randomstring-%E5%87%BD%E6%95%B0)

---

# RandomStringOptions (接口)

生成随机文本的选项

**签名**

```ts
interface RandomStringOptions {
  /**
   *大小写.缺省为null
   */
  capitalization?: 'lowercase' | 'uppercase'
  /**
   *指定字符集.缺省为alphanumeric
   *alphanumeric - [0-9 a-z A-Z]
   *alphabetic - [a-z A-Z]
   *numeric - [0-9]
   *hex - [0-9 a-f]
   */
  charset?: string
  /**
   *随机文本的长度.缺省值32
   */
  length?: number
  /**
   *前缀.缺省为null
   */
  prefix?: string
  /**
   *排除不可读的字符0OIl.缺省为false
   */
  readable?: boolean
}
```

v0.2.0 中添加

# randomBool (常量)

返回 boolean 的随机数字

**签名**

```ts

export const : I.IO<boolean> = ...

```

v2.0.0 中添加

# random (函数)

返回 0-1 之间的随机数字

**签名**

```ts

export const random: I.IO<number> = () => ...

```

v2.0.0 中添加

# randomInt (函数)

在指定范围内产生随机整数

v2.0.0 中添加

# randomRange (函数)

在指定范围内产生随机浮点数

v2.0.0 中添加

# randomString (函数)

根据选项产生随机数

**签名**

```ts

export const randomString = (o?:RandomStringOptions): I.IO<string> => () => ...

```

v0.2.0 中添加
