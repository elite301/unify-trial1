# Introduction

Write a get function that gets an object and the path to a nested property of an object and returns the value of that property (or undefined if the property doesn't exist).
The third, optional argument to the function is the default value that is returned if the value in the specified path does not exist.

const obj = { 
  a: { 
    b: { 
      c: 'd' 
    },
    e: 'f'
  }
};

get(obj, 'a.b');   // { c : 'd' }
get(obj, 'a.b.c'); // 'd'
get(obj, 'a.e');   // 'f'
get(obj, 'x.x.e'); // undefined
get(obj, 'a.x.e', true); // true
get(obj, 'a.x.e', 'My default value'); // My default value