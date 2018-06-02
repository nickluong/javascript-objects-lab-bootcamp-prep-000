var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  let newObj = object
  newObj[key] = value
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}