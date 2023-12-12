// **** 30 Days of JavaScript ****

// 2667. Create Hello World Function
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
  return function(...args) {
      return "Hello World"
  }
};
// ----------------------------------

/**
 * @param {number} n
 * @return {Function} counter
 */

var calls = 0
var createCounter = function(n) {
    return function() {
        const newValue = n + calls
        calls++
        return newValue
    };
};
// ------------------------------------

/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
  return {
    toBe: (compareTo) =>  {
      if (val === compareTo) return true
      throw new Error ("Not Equal")
    },
    notToBe: (compareTo) => {
      if (val !== compareTo) return true
      throw new Error ("Equal")
  }
}};
// ----------------------------------------


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

let currentValue = 0
const createCounters = function(init) {
    currentValue = init
    return {
        increment: () => {
            currentValue++
            return currentValue
        },
        decrement: () => {
            currentValue--
            return currentValue
        },
        reset: () => {
            currentValue = init
            return currentValue
            }
    }
};
//-------------------------------------------

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const maps = function(arr, fn) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i))
  }
  return newArray
};
//-------------------------------------------

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArray = []
    for (let i = 0; arr.length > i; i++) {
      if (fn(arr[i], i)) newArray.push(arr[i])
    }
  return newArray
};
//-------------------------------------------


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
  if (nums.length === 0) return init
  let newValue = 0

  for (let i = 0; nums.length > i; i++) {
    if (i === 0) {
      newValue = fn(init, nums[i])
      continue
    }
    newValue = fn(newValue, nums[i])
  }

  return newValue
};
// ---------------------------------------

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    functions.reverse()
	return function(x) {
        let evaluator = x
        functions.forEach((element) => {
          evaluator = element(evaluator)
        });
        return evaluator
    }
    
};
// ------------------------------------------

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return args.length
};
// ----------------------------------------

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let call = false
return function(...args){
      if (!call) {
          call = true
          return fn(...args)
      }
  }
};
// -------------------------------------------

// A memo of a function as a Function that 
// never is called twice with the same inputs 
// retrun instead cache values

// Inputs: sum, fib, factorial

// sum = [a, b]: integer => a + b

// fib = [a: integer] => if (n <== 1) 1 : 
//                          fib(n - 1) + fib(n - 2) 

// factorial = [n: integer] => if (n <== 1) 1 : 
//                              factorial(n - 1) * n


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cacheValues = {}
  return function(...args) {
      const key = `[${args.toString()}]`
      const cache = cacheValues[key]
      
      if (key in cacheValues) return cache

      const call = fn(...args)
      cacheValues[key] = call

      return call
  }
}
// -------------------------------------------

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
    const firtsResolve = await promise1
    const secondResolve = await promise2
    return firtsResolve + secondResolve
};

// --------------------------------------------------------------

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(res => setTimeout(res, millis))
}
// ----------------------------------------------------------------

// fn shold be executed in t milliseconds

// The cancel function should return a cancel execution function

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  const id = setTimeout(() => fn(...args), t)
  return function () {
    clearTimeout(id)
  }
};

// const result = [];

// const fn = (x) => x * 5;
// const args = [2], t = 20, cancelTimeMs = 50;

// const start = performance.now();
//  const log = (...argsArr) => {
// const diff = Math.floor(performance.now() - start);
//       result.push({"time": diff, "returned": fn(...argsArr)});
// }
      
//  const cancel = cancellable(log, args, t);
// const maxT = Math.max(t, cancelTimeMs);
// setTimeout(cancel, cancelTimeMs);
 
// setTimeout(() => {
//     console.log(result); // [{"time":20,"returned":10}]
// }, maxT + 15)
 