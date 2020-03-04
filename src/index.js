// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.map((el, index) => index % 2 === 0 ? el : el.reverse()).flat()
}
