var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key, value) {
  var newObj = Object.assig({}, object);
  delete newObj[key];
  return newObj;
}
