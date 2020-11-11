const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(src, fn) {
      const srcCopy = Array.isArray(src) ? src.slice() : Object.values(src)
      for (let i = 0; i < srcCopy.length; i++) {
        fn(srcCopy[i])
      }
      return src;
    },

    map: function(src, fn) {
      const srcCopy = Array.isArray(src) ? src.slice() : Object.values(src);
      let returnArray = [];

      for (let i = 0; i < srcCopy.length; i++) {
        returnArray.push(fn(srcCopy[i]))
      }
      return returnArray;

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
