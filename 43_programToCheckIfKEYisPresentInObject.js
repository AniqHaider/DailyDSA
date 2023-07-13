const checkKey = (obj, key) => {
    const hasKey = obj.hasOwnProperty(key);
    console.log(`Using hasOwnProperty(): ${hasKey}`);
  
    const keyExists = key in obj;
    console.log(`Using 'in' operator: ${keyExists}`);
  };
  
  const myObject = {
    name: "John",
    age: 30,
    city: "New York"
  };
  

  // using checkkey inBuilt function
  checkKey(myObject, "age");  
  checkKey(myObject, "gender");  
  