var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = {...object};
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}