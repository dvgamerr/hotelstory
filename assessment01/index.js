const largestPower = (n) => {
  if (n <= 4 && n > 1) return [1, -1]

  let largest = 0
  let count = 0
  for (let l = n; l >= 2; l--) {
    for (let i = n; i >= 2; i--) {
      // equation: l^x = i
      const xResult = parseFloat((Math.log(i) / Math.log(l)).toFixed(4))
      if (xResult == 1 || xResult % 1 !== 0) continue

      if (largest > i || i >= n) break
      if (i > largest) count = 0
      largest = i
      count++
    }
  }
  return [largest, count || -1]
}

console.log('largestPower(90) = [81, 2]  result =', largestPower(90))
console.log('largestPower(6)  = [ 4, 1]  result =', largestPower(6))
console.log('largestPower(65) = [64, 3]  result =', largestPower(65))
console.log('largestPower(3)  = [ 1,-1]  result =', largestPower(3))
console.log('largestPower(1)  = [ 0,-1]  result =', largestPower(1))
console.log('largestPower(81) = [64, 3]  result =', largestPower(81))
console.log('largestPower(29) = [27, 1]  result =', largestPower(29))
console.log('largestPower(4)  = [ 1,-1]  result =', largestPower(4))
