var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var object_clone
  object_clone[object.key] = object.value
  object_clone[key] = value
  return object_clone
}
