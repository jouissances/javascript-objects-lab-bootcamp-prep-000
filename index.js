var recipes = {
  prop: 1
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign( {}, recipes, { prop2 : 2} );
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes['prop2'] = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  delete newObj.prop;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.prop;
  return recipes;
}