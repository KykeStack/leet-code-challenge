// **** 30 Days of JavaScript ****

// 2667. Create Hello World Function
/**
 * @return {Function}
 */
const createHelloWorld = function() {
    
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

const calls = 0
const createCounter = function(n) {
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
const filter = function(arr, fn) {
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
const argumentsLength = function(...args) {
	return args.length
};
// ----------------------------------------

// 2666. Allow One Function Call
/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
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
const cancellable1 = function(fn, args, t) {
  const id = setTimeout(() => fn(...args), t)
  return function () {
    clearTimeout(id)
  }
};

//-----------------------------------------------

// 2725. Interval Cancellation
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
  fn(...args)
  const id = setInterval(() => fn(...args), t)
  return function () {
      clearInterval(id)
  }
};

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

// 2622. Cache With Time Limit

// So this is a "Class" called TimeLimitedCache 
// Through the property Class.prototype are being added the methods: set, get and count
const TimeLimitedCache = function() {
    this.cache = {};
};

// So the Class should be able to get key/value pairs within an expiration time

// for Set
// set(key, value, duration)
// If key/value pair are expired, return null
// If key/value pair exists and are not expired, return true else false  
// Both the value and duration should be overwritten if the key already exists 

// for Get
// get(key)
// Once the key expired, the method get should return '-1'
// if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// for Count 
// count()
// returns the count of un-expired keys.

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let exists = false;

  // Check if key already exists
  if (key in this.cache) { 
    if (this.cache[key].duration < Date.now()) {
      return null
    }
    exists = true
  }

  // Overwrite or assign the value 
  this.cache[key] = {
    value: value, 
    duration: Date.now() + duration 
  }

  // Return whether if exists or not
  return exists
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  const value = this.cache[key] ?? -1

  // if key does not exist, immediately return -1 
  if (value === -1) return value

  // Check if key is expired
  if (value.duration < Date.now()) { 
    return -1
  }

  // All good, return the value
  return value.value
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  let count = 0
  Object.keys(this.cache).forEach(key => {

    // look for unexpired keys
    if (this.cache[key].duration > Date.now()) {
      count++
    }

  })
  return count
};
// ------------------------------------------------

// 2627. Debounce
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
  let currentTimeout
  return function(...args) {
      clearTimeout(currentTimeout)
      currentTimeout = setTimeout(() => fn(...args), t)
  }
};
// -----------------------------------------------------

// 2721. Execute Asynchronous Functions in Parallel

// Receives a list of promises, that don't accept any argument
// The promises should execute in parallel 

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function(functions) {
  return new Promise(async (resolve, reject) => {
      // Resolves
      // Resolves Async all *functions
      // It resolves when all promises have resolve successfully 
      // Returns an Array of Values keeping the original order 
      const resultValues = []
      const callStack = []
      for (const toCallStack of functions) {
          const proms = toCallStack().catch(e => reject(e))
          callStack.push(proms)
      }
      for (const task of callStack) {
        resultValues.push(await task)
      }

      resolve(resultValues)
        
  })
};
// -----------------------------------------------------------

// 2727. Is Object Empty
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {

  if (Object.keys(obj).length) return false
  return true
};
// ---------------------------------------------------------------

// 2677. Chunk Array
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

// Steps
// Divide to obtain the number of chunks -> arr.length / size
// Iterate over the array and push the number to idx position for every chunk
const chunk = function(arr, size) {
    let chunkedArray = []
    let cycle = 1
    let idx = 0

    for (const el of arr) {
      const next = chunkedArray[idx] ?? []
      chunkedArray[idx] = [...next, el]
      if (cycle < size) {
        cycle++
      } else {
        cycle = 1
        idx++
      }
    }
  
  return chunkedArray
};
//----------------------------------------------------------------

// 2619. Array Prototype Last
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  const last = this.slice(-1)
  if (last.length !== 0) return last[0]
  return -1 
};
//-----------------------------------------------------------------

// 2631. Group By
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const mapped = {};

  for (const item of this) {
      const output = fn(item);
      const values = mapped[output] || [];
      values.push(item);
      mapped[output] = values;
  }

  return mapped
};
// ---------------------------------------------------------------

// 2724. Sort By

// Assume that deals only with numbers, and fn will never duplicate numbers for a given array.
// Given a function, array -> Sort and return in ascending order 
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b))
};

// --------------------------------------------------------------------

// 2695. Array Wrapper
/**
 * @param {number[]} nums
 * @return {void}
 */
const ArrayWrapper = function(nums) {
    
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */