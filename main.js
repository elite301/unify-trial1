const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

const get = (obj, path, def = undefined) => {
  try {
    return path.split(".").reduce((res, key) => res[key], obj);
  } catch (err) {
    return def;
  }
}

get(obj, "a.b"); // { c : 'd' }
get(obj, "a.b.c"); // 'd'
get(obj, "a.e"); // 'f'
get(obj, "x.x.e"); // undefined
get(obj, "a.x.e", true); // true
get(obj, "a.x.e", "My default value"); // My default value
