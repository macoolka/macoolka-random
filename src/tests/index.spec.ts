import { isString } from 'macoolka-predicate'
import { makeBy } from 'fp-ts/lib/Array'
import { randomString } from '../'

describe('Random', () => {
    it('randomString', () => {
        expect(isString(randomString()())).toBeTruthy()
        expect(randomString({ length: 8 })().length === 8).toBeTruthy()
        const r = randomString({ length: 5, prefix: 'mk-', charset: 'alphabetic', capitalization: 'lowercase' })
        const as = makeBy(5, r)
        const value = as.every(a => isString(a) && a.length === 8 && a.indexOf('mk-') === 0)
        expect(value).toBeTruthy()
    })

})