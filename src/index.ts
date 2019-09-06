/**
 * @file
 */
import * as _randomstring from 'randomstring'
import * as I from 'fp-ts/lib/IO'
import { pipe } from 'fp-ts/lib/pipeable'
/**
 * Returns a random number between 0 (inclusive) and 1 (exclusive).
 * @desczh
 * 返回0-1之间的随机数字
 *
 * @since 2.0.0
 */
export const random: I.IO<number> = () => Math.random()

/**
 * Takes a range specified by `low` and `high` , and returns a random integer uniformly
 * distributed in the closed interval `[low, high]`. 
 * @desczh
 * 在指定范围内产生随机整数
 * @since 2.0.0
 */
export function randomInt({ low, high }: { low: number, high: number }): I.IO<number> {
    return pipe(
        random,
        I.map(n => Math.floor((high - low + 1) * n + low))
    )

}
/**
 * Returns a random number between a minimum value (inclusive) and a maximum value (exclusive). 
 * @desczh
 * 在指定范围内产生随机浮点数
 * @since 2.0.0
 */
export function randomRange({ min, max }: { min: number, max: number }): I.IO<number> {
    return pipe(
        random,
        I.map(n => (max - min) * n + min)
    )
}

/**
 * Returns a random boolean value with an equal chance of being `true` or `false`
 * @desczh
 * 返回boolean的随机数字
 * @since 2.0.0
 */
export const randomBool: I.IO<boolean> =
    pipe(
        random,
        I.map(n => n < 0.5)
    )
/**
 * A Option in random string
 * @desczh
 * 生成随机文本的选项
 */
export interface RandomStringOptions {
    /**
     * the length of the random string. (default: 32) 
     * @desczh
     * 随机文本的长度.缺省值32
     */
    length?: number
    /**
     * exclude poorly readable chars: 0OIl. (default: false) 
     * @desczh
     * 排除不可读的字符0OIl.缺省为false
     */
    readable?: boolean
    /**
     * define the character set for the string. (default: 'alphanumeric')
     * alphanumeric - [0-9 a-z A-Z]
     * alphabetic - [a-z A-Z]
     * numeric - [0-9]
     * hex - [0-9 a-f]
     * @desczh
     * 指定字符集.缺省为alphanumeric
     * alphanumeric - [0-9 a-z A-Z]
     * alphabetic - [a-z A-Z]
     * numeric - [0-9]
     * hex - [0-9 a-f]     
     */
    charset?: string
    /**
     * define whether the output should be lowercase / uppercase only. (default: null)
     * @desczh
     * 大小写.缺省为null
     */
    capitalization?: 'lowercase' | 'uppercase'
    /**
     * prefix
     * @desczh
     * 前缀.缺省为null
     */
    prefix?: string
}

/**
 * Takes a option returns a random string
 * @desczh
 * 根据选项产生随机数
 * @since 0.2.0
 */
export const randomString = (o?:RandomStringOptions): I.IO<string> => () => {
    const prefix = o && o.prefix ? o.prefix : ''
    return prefix + _randomstring.generate(o)
}
