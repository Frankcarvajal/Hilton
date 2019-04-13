// flow
export const sortByObjKey = function (key: string): Function {
  return function (a: Object, b: Object): number {
    const textA = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key]
    const textB = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key]
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  }
}

// @flow
export const sortByDate = function (dir: string): Function {
  return function (a: Date, b: Date): number {
    return (dir === 'asc') ? a - b : b - a
  }
}

// @flow
export const sortBystring = function (a: string, b: string): number {
  const textA = a.toLowerCase()
  const textB = b.toLowerCase()

  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
}

// @flow
export const sortByOrder = function (order: Array<string>): Function {
  const flippedArr = order
    .map(i => i.toLowerCase())
    .reverse() // We flip this to make the first item has the highest index and thus gets sorted first

  // We end up just sorting on the index of the item in the array
  return function (a, b): number {
    const aVal = flippedArr.indexOf(a.toLowerCase())
    const bVal = flippedArr.indexOf(b.toLowerCase())

    return (aVal > bVal) ? -1 : (aVal < bVal) ? 1 : 0
  }
}
