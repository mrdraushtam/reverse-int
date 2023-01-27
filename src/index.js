module.exports = function reverse (n) {
    let otherN = -n;
    if (n >= 0) {
        return Number([...n.toString()].reverse().join(""))
    } else if (n <= 0) {
        return Number([...otherN.toString()].reverse().join(""))
    }
   
}
