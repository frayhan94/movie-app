export const transformObjToQuery = (obj: { [x: string]: any }) => {
  let result = '?'
  for (const proper in obj) {
    if (result === '?') {
      result += `${proper}=${obj[proper]}`
    } else {
      result += `&${proper}=${obj[proper]}`
    }
  }
  return result
}
