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

// 2620. Counter
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

// 2704. To Be Or Not To Be
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

// 2665. Counter II
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

// 2635. Apply Transform Over Each Element in Array
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

// 2635. Apply Transform Over Each Element in Array
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

// 2626. Array Reduce Transformation
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

// 2629. Function Composition
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

// 2703. Return Length of Arguments Passed
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return args.length
};
// ----------------------------------------

// 2666. Allow One Function Call
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

// 2623. Memoize 
/**
 * @param {Function} fn
 * @return {Function}
 * Creates a memo of a function,  
 * that is never called twice with the same inputs 
 * return instead cache values
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

// 2723. Add Two Promises
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

// ------------------------------------------------------------

// 2621. Sleep
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(res => setTimeout(res, millis))
}
// -------------------------------------------------------------

// 2715. Timeout Cancellation
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 * fn should be executed in t milliseconds
 * function cancellable should return a cancel execution function
 */
var cancellable = function(fn, args, t) {
  const id = setTimeout(() => fn(...args), t)
  return function () {
    clearTimeout(id)
  }
};

//-----------------------------------------------

// 2637. Promise Time Limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// fn is async 
// t is time in millis
// return a ""time limited function""

// The ""time limited function"" Rules: 
// if fn resolve in t time, return fn => {}
// else reject

const timeLimit = function(fn, t) {
  // ↓ This is the time limited function 
  return new Promise(async (resolve, reject) => {
    // Encapsulate Everything in a try/catch block
    try {
      setTimeout(() => reject("Time Limit Exceeded"), t)
      resolve(await fn(...args))
    }
    catch (e) {
      reject(e)
  }
})
};
// -----------------------------------------------------