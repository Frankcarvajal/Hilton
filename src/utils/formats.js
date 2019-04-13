import { format } from 'date-fns'

// @flow
export function currency (n: number, toFixed: bool) {
  return n && typeof n === 'number'
    ? `$${numberWithCommas(toFixed ? n.toFixed(2) : n)}`
    : n
}

// @flow
export function numberWithCommas (n: number) {
  return n && typeof n === 'number'
    ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : n
}

// @flow
export function denominate (n: number) {
  let denominatedValue = n + ''

  if (n && typeof n === 'number') {
    if (n / 1e9 >= 1) {
      denominatedValue = `${Math.round((n / 1e9) * 100) / 100}B`
    } else if (n / 1e6 >= 1) {
      denominatedValue = `${Math.round((n / 1e6) * 100) / 100}M`
    } else if (n / 1e3 >= 1 && n / 1e3 < 1000) {
      denominatedValue = `${Math.round((n / 1e3) * 100) / 100}K`
    }
  }

  return denominatedValue
}

// @flow
// replaces - and _ in a string with spaces
export function stripCase (str: string) {
  return str && typeof str === 'string'
    ? str
      .toLowerCase()
      .replace(/[-_]/g, ' ')
    : str
}

// @flow
export function denominateCurrency (n: number) {
  return n && typeof n === 'number'
    ? `$${denominate(n)}`
    : n
}

// @flow
export function uppercase (str: string) {
  return str && typeof str === 'string'
    ? str.toUpperCase()
    : str
}

// @flow
export function titleCase (str: string) {
  return str && typeof str === 'string'
    ? stripCase(str).split(' ')
      .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(' ')
    : str
}

// @flow
// Preserves uppercase letters witin words
// ex: McDonalds
export function titleCaseAlt (str: string) {
  return str && typeof str === 'string'
    ? str.split(' ')
      .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(' ')
    : str
}

// @flow
export function formatDate (dateString) {
  return format(new Date(dateString), 'MM/DD/YY')
}

// @flow
export function formatTime (dateString) {
  return format(new Date(dateString), 'hh:mm A')
}
