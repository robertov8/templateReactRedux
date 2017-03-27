export const TEMPLATE = 'TEMPLATE'

let id = 0

export function helloWorld (text) {
  return {
    type: TEMPLATE,
    id: id++,
    text
  }
}
