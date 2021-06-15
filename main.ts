function cntNbors (num: number) {
    tot = 0
    for (let index = 0; index <= 8; index++) {
        tot += Universe[findCell(num, neighbors[index])]
    }
}
function findCell (num: number, num2: number) {
    tot = num + num2
    if (tot < 0) {
        tot = tot + 25
    }
    if (tot > 24) {
        tot = tot - 25
    }
    return tot
}
function findCoord (num: number) {
    sy = Math.trunc(num / 5)
    sx = num % 5
}
let sx = 0
let sy = 0
let tot = 0
let Universe: number[] = []
let neighbors: number[] = []
neighbors = [-6, -5, -4, -1, 1, 4, 5, 6]
Universe = [0]
for (let index = 0; index < 24; index++) {
    Universe.push(0)
}
let Next = [0]
for (let index = 0; index < 24; index++) {
    Next.push(0)
}
