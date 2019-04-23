export const dynamicAttributes = (attribute, value) => {
  var opts = {}
  if (typeof value !== 'undefined' && value !== null) {
    opts[attribute] = value
    return opts
  }
  return false
}

export const toCamelCase = str => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase()
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase()
    })
}

export const revertCamelCase = str => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
}
