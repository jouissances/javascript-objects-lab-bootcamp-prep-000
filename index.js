var recipes = {
  prop: 1
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign( {}, recipes, { prop2 : 2} );
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var recipes = {
    prop: 1
  };
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign( {}, recipes, { prop2 : 2} );
  delete newObj.prop;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var recipes = {
    prop: 1
  };
  delete recipes.prop;
  return recipes;
}