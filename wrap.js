const wrap = (str, maxLen) => {
    if (str.length <= maxLen) {
        return str;
    } else {
        let returnStr = ''
        for (let i = 0; i < str.length; i+=maxLen) {
                returnStr += str.slice(i, maxLen)
            } returnStr += '\n'
        return returnStr
    }
}

module.exports = wrap;
