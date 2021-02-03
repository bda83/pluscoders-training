/**
 * A string that can be changed.
 * 
 * @example
 *    var ms = new MutableString('   Hello, World  !  ')
 *    ms[3] = 'H'
 *    console.log(ms.toString())
 *      > '   Hello World  !  '
 *
 * @param {string} string  - The initial value.
 */

function MutableString(string) {
    for (var i = 0; i < string.length; i++)
        this[i] = string[i]
    
    this.length = string.length
}


/**
 * Returns a trimed string of this mutable string.
 * 
 * @returns {string} The trimed string.
 * 
 * @example
 *    var ms = new MutableString('   Hello, World  !  ')
 *    ms.trim()
 *      > 'Hello World  !'
 */

MutableString.prototype.trim = function() {
    var from = 0
    var to = this.length

    for (var i = 0; i < this.length; i++)
        if (this[i] === ' ') from++
        else break

    for (var i = this.length - 1; i > -1; i--)
        if (this[i] === ' ') to--
        else break

    var result = ''

    for (var i = from; i < to; i++) result += this[i]

    return result
}


/**
 * Returns the value of a array in a determinated position.
 * 
 * @returns {string} The string in position i.
 * 
 * @param {number} i - The position which you want to know the value.
 * 
 * @example
 *    var ms = new MutableString('   Hello, World  !  ')
 *    ms.charAt(9)
 *      > 'W'
 */

MutableString.prototype.charAt = function(i) {
    var result = ''

    if (i < this.length) result = this[i]

    return result
}


/**
 * Returns a boolean expresion about if a string starts in a index position.
 * 
 * @returns {boolean} The boelean about the query.
 * 
 * @param {string} text - The string to compare with the principal string.
 * @param {number} [from = 0 | !from] - the index position to look for.
 * 
 * @example
 *    var ms = new MutableString('   Hello, World  !  ')
 *    ms.starsWith('Hello', 3)
 *      > true
 */

MutableString.prototype.starsWith = function(text, from) { 
    var letter = 0
    var result = false

    if (!from) from = 0

    for (var i = from; i < this.length; i++)
        if (this[i] === text[letter])
            letter++
        else break

    if (letter === text.length)
        result = true

    return result
}


/**
 * Returns a boolean expresion about if a string ends in a index position.
 * 
 * @returns {boolean} The boelean about the query.
 * 
 * @param {string} text - The string to compare with the principal string.
 * @param {number} [from = this.length] - the index position where ends the string to look for.
 * 
 * @example
 *    var ms = new MutableString('   Hello, World  !  ')
 *    ms.endsWith('d  !', 18)
 *      > true
 */

MutableString.prototype.endsWith = function(text, from) {
    var letter = 0
    var result = false
    if (!from) var from = this.length
    from -= text.length

    for (var i = from; i < this.length; i++)
        if (this[i] === text[letter])
            letter++
        else break

    if (letter === text.length)
        result = true

    return result
}


/**
 * Returns a string with the values between two index positions.
 * 
 * @returns {string} The string between tho index positions.
 * 
 * @param {number} from - the index position to start.
 * @param {number} [to = this.length] - the index position to end.
 * 
 * @example
 *    var ms = new MutableString('   Hello, World  !  ')
 *    ms.slice(3, -5)
 *      > 'Hell'
 */

MutableString.prototype.slice = function(from, to) {
    var result = ''
    
    if (!from) from = 0
    if (from < 0) from += this.length
    if (!to) to = this.length
    if (to < 0) to += this.length

    for (var i = from; i < to; i++)
        result += this[i]

    return result
}