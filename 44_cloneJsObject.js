// cloning a js object 

function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  const originalObject = {
    name: 'Johnny',
    age: 27,
    address: {
      street: '433 Main St',
      city: 'New Hampshire',
      country: 'UK'
    }
  };
  
  const clonedObject = cloneObject(originalObject);
  
  console.log(originalObject);
  console.log(clonedObject);
  