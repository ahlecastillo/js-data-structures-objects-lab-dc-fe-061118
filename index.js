// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign ({}, driver, newDriver); 
}

const newDriver = {
  name: 'Sam',
  address: '11 Broadway'};
  
function destructivelyUpdateDriverWithKeyAndValue (driver,address,value) {
 
 driver.name = 'Sam',
 driver.address = '12 Broadway';
       
 return driver; 
}

function deleteFromDriverByKey(obj, key){
  var newdriver = Object.assign ({}, obj);
  delete newdriver.key;
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj.key;
  return obj;
}

