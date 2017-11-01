/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Vue = factory());
}(this, (function() {
  'use strict';

  var globalSpace = 0;
  var globalRate = 100;
  var forDele = "dddddddd"
  var ssp = "";
  var sspStand = "  ";

  function setStartSpace() {
    globalSpace = globalSpace + 1;
    ssp = "";
    for (var ss = 0; ss < globalSpace; ss++) {
      ssp = ssp + sspStand;
    }
    ssp = forDele + ssp;
  }

  function setGlobalSpace() {
    ssp = "";
    for (var ss = 0; ss < globalSpace; ss++) {
      ssp = ssp + sspStand;
    }
    ssp = forDele + ssp;
  }

  function isUndef(v) {
    return v === undefined || v === null
  }

  function isNotEmpty(v) { // 判断是否为空 
    return v !== undefined && v !== null
  }

  function isTrue(v) {
    return v === true
  }

  function isFalse(v) {
    return v === false
  }

  /**
   * Check if value is primitive-原始的，远古的；简单的，粗糙的
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number'
  }

  /**
   * Quick object check -
   * this is primarily used to tell Objects from primitive values
   * when we know the value is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && typeof obj === 'object'
  }

  var _toString = Object.prototype.toString;

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {

    return _toString.call(obj) === '[object Object]'

  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ toString ------------" + val);
    globalSpace = globalSpace - 1;

    return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val)

  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {

    var n = parseFloat(val);
    return isNaN(n) ? val : n

  }

  /** 
   * Make a map and return a function for checking if a key is in that map. 
   */
  function makeMap(key, str, expectsLowerCase) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ makeMap ------------" + key);
    globalSpace = globalSpace - 1;


    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }


    return expectsLowerCase ? function(val) {
      return map[val.toLowerCase()];
    } : function(val) {
      return map[val];
    }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap("isBuiltInTag", 'slot,component', true);

  /**
   * Remove an item from an array
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn, key) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ cached ------------" + key);
    globalSpace = globalSpace - 1;

    var cache = Object.create(null);

    return (function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })

  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function(str, ) {
    return str.replace(camelizeRE, function(_, c) {
      return c ? c.toUpperCase() : '';
    })
  }, "camelize");

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }, "capitalize");

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /([^-])([A-Z])/g;
  var hyphenate = cached(function(str) {
    return str
      .replace(hyphenateRE, '$1-$2')
      .replace(hyphenateRE, '$1-$2')
      .toLowerCase()
  }, "hyphenate");

  /**
   * Simple bind, faster than native
   */
  function bind(fn, ctx) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ bind ------------");
    globalSpace = globalSpace - 1;


    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx)
    }
    // record original fn length
    boundFn._length = fn.length;
    return boundFn
  }

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ toArray ------------");
    globalSpace = globalSpace - 1;


    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ extend ------------");
    globalSpace = globalSpace - 1;


    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ toObject ------------");
    globalSpace = globalSpace - 1;



    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res

  }

  /**
   * Perform no operation.
   */
  function noop() {

  }

  /**
   * Always return false.
   */
  var no = function() {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function(_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genStaticKeys ------------");
    globalSpace = globalSpace - 1;


    return modules.reduce(function(keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')

  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ looseEqual ------------");
    globalSpace = globalSpace - 1;


    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        return JSON.stringify(a) === JSON.stringify(b)
      } catch (e) {
        // possible circular reference
        return a === b
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  function looseIndexOf(arr, val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ looseIndexOf ------------");
    globalSpace = globalSpace - 1;


    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i
      }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ once ------------");
    globalSpace = globalSpace - 1;


    var called = false;
    return function() {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }

  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ];



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,


    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });



  var emptyObject = Object.freeze({});

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isReserved ------------" + str);
    globalSpace = globalSpace - 1;


    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F

  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ def ------------" + key);
    globalSpace = globalSpace - 1;


    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;

  function parsePath(path) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parsePath ------------" + path);
    globalSpace = globalSpace - 1;


    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function(obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return
        }
        obj = obj[segments[i]];
      }
      return obj
    }

  }



  var warn = noop;
  var tip = noop;
  var formatComponentName = (null); // work around flow check


  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function(str) {
    return str
      .replace(classifyRE, function(c) {
        return c.toUpperCase();
      })
      .replace(/[-_]/g, '');
  };

  warn = function(msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  tip = function(msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string' ? vm : typeof vm === 'function' && vm.options ? vm.options.name : vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function(str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function(vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function(vm, i) {
          return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)") : formatComponentName(vm)));
        })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };



  function handleError(err, vm, info) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ handleError ------------");
    globalSpace = globalSpace - 1;


    if (config.errorHandler) {
      config.errorHandler.call(null, err, vm, info);
    } else {
      {
        warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
      }
      /* istanbul ignore else */
      if (inBrowser && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err
      }
    }
  }


  /* globals MutationObserver */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0;
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;


  // ------------------------------------------------------ 兼容滚动模式
  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({ // passive: 被动的，消极的
        get: function get() {

          /* istanbul ignore next */
          supportsPassive = true; // 这个的目的就是给：supportsPassive赋值

        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts); // 这个的目的就是给：supportsPassive赋值
    } catch (e) {}
  }
  // ------------------------------------------------------


  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  // ------------------------------------------------------
  /**
   * Defer a task to execute it asynchronously.
   */
  var nextTick = (function() {
    var callbacks = [];
    var pending = false;
    var timerFunc;

    function nextTickHandler() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }

    }

    // the nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore if */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      var logError = function(err) {
        console.error(err);
      };
      timerFunc = function() {
        p.then(nextTickHandler).catch(logError);
        // in problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) {
          setTimeout(noop);
        }
      };
    } else if (typeof MutationObserver !== 'undefined' && (
        isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === '[object MutationObserverConstructor]'
      )) {
      // use MutationObserver where native Promise is not available,
      // e.g. PhantomJS IE11, iOS7, Android 4.4
      var counter = 1;
      var mutationobserver = new MutationObserver(nextTickHandler);
      var textNode = document.createTextNode(String(counter));
      mutationobserver.observe(textNode, {
        characterData: true
      });
      timerFunc = function() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
    } else {
      // fallback to setTimeout
      /* istanbul ignore next */
      timerFunc = function() {
        setTimeout(nextTickHandler, 0);
      };
    }

    return function queueNextTick(cb, ctx) {
      var _resolve;
      callbacks.push(function() {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function(resolve, reject) {
          _resolve = resolve;
        })
      }
    }
  })();

  // ------------------------------------------------------
  var _Set;
  /* istanbul ignore if */
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = (function() {
      function Set() {

        this.set = Object.create(null);

      }
      Set.prototype.has = function has(key) {

        return this.set[key] === true

      };
      Set.prototype.add = function add(key) {

        this.set[key] = true;

      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }


  // ------------------------------------------------------
  var uid = 0;

  /**
   * 
   * A dep is an observable that can have multiple directives subscribing to it.
   * 
   */
  var Dep = function Dep() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ Dep ------------");

    this.id = uid++;
    this.subs = [];

    globalSpace = globalSpace - 1;

  };

  Dep.prototype.addSub = function addSub(sub) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Dep ------------ addSub ------------");
    globalSpace = globalSpace - 1;

    this.subs.push(sub);

  };

  Dep.prototype.removeSub = function removeSub(sub) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Dep ------------ removeSub ------------");
    globalSpace = globalSpace - 1;

    remove(this.subs, sub);

  };

  Dep.prototype.depend = function depend() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Dep ------------ depend ------------");

    if (Dep.target) {
      Dep.target.addDep(this);
    }

    globalSpace = globalSpace - 1;

  };

  Dep.prototype.notify = function notify() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Dep ------------ notify ------------");

    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }

    setGlobalSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Dep end ------------ notify ------------");
    globalSpace = globalSpace - 1;

  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ pushTarget ------------");

    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;

    globalSpace = globalSpace - 1;

  }

  function popTarget() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ popTarget ------------");

    Dep.target = targetStack.pop();

    globalSpace = globalSpace - 1;

  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);
  [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ]
  .forEach(function(method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mutator ------------");

      var arguments$1 = arguments;

      // avoid leaking arguments:
      // http://jsperf.com/closure-with-arguments
      var i = arguments.length;
      var args = new Array(i);
      while (i--) {
        args[i] = arguments$1[i];
      }
      var result = original.apply(this, args);
      var ob = this.__BigOb__;
      var inserted;
      switch (method) {
        case 'push':
          inserted = args;
          break
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();

      globalSpace = globalSpace - 1;

      return result

    });
  });



  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * By default, when a reactive property is set, the new value is
   * also converted to become reactive. However when passing down props,
   * we don't want to force conversion because the value may be a nested value
   * under a frozen data structure. Converting it would defeat the optimization.
   */
  var observerState = {
    shouldConvert: true,
    isSettingProps: false
  };

  /**
   * BigObserver class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   */
  var BigObserver = function BigObserver(value) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "BigObserver ------------ BigObserver ------------");

    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;

    def(value, '__BigOb__', this);

    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }

    setGlobalSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end BigObserver ------------ BigObserver ------------");
    globalSpace = globalSpace - 1;

  };

  /**
   *
   * Walk through each property and convert them into getter/setters.
   * This method should only be called when value type is Object.
   *
   */
  BigObserver.prototype.walk = function walk(obj) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "BigObserver ------------ walk ------------");

    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }

    globalSpace = globalSpace - 1;
  };

  /**
   * Observe a list of Array items.
   */
  BigObserver.prototype.observeArray = function observeArray(items) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "BigObserver ------------ observeArray ------------");

    for (var i = 0, l = items.length; i < l; i++) {
      smallobserve(items[i]);
    }

    globalSpace = globalSpace - 1;
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ protoAugment ------------");

    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
    globalSpace = globalSpace - 1;


  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ copyAugment ------------");

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }

    globalSpace = globalSpace - 1;


  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function smallobserve(value, asRootData) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ observe ------------");

    if (!isObject(value)) {
      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ observe ------------");
      globalSpace = globalSpace - 1;
      return
    }

    var bigOb;
    if (hasOwn(value, '__BigOb__') && value.__BigOb__ instanceof BigObserver) {
      bigOb = value.__BigOb__;
    } else if (observerState.shouldConvert && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      bigOb = new BigObserver(value);
    }

    if (asRootData && bigOb) {
      bigOb.vmCount++;
    }

    setGlobalSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ observe ------------");
    globalSpace = globalSpace - 1;

    return bigOb
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive(obj, key, val, customSetter) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ defineReactive ------------");

    var watchDep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      globalSpace = globalSpace - 1;
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;

    var valueOb = smallobserve(val);

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ reactiveGetter ------------");


        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {

          watchDep.depend();

          if (valueOb) {

            valueOb.dep.depend();

          }

          if (Array.isArray(value)) {
            dependArray(value);
          }

        }

        setGlobalSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ reactiveGetter ------------");
        globalSpace = globalSpace - 1;

        return value

      },
      set: function reactiveSetter(newVal) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ reactiveSetter ------------" + newVal);

        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {

          globalSpace = globalSpace - 1;

          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        valueOb = smallobserve(newVal);
        watchDep.notify();


        setGlobalSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ reactiveSetter ------------" + newVal);
        globalSpace = globalSpace - 1;

      }
    });

    globalSpace = globalSpace - 1;

  }

  /**
   * Set a property on an object. 
   * Adds the new property and triggers change notification 
   * if the property doesn't already exist.
   */
  function set(target, key, val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ set ------------");


    if (Array.isArray(target) && typeof key === 'number') {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);

      globalSpace = globalSpace - 1;
      return val
    }

    if (hasOwn(target, key)) {
      target[key] = val;

      globalSpace = globalSpace - 1;
      return val
    }

    var ob = (target).__BigOb__;

    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data at runtime - ' +
        'declare it upfront in the data option.'
      );

      globalSpace = globalSpace - 1;
      return val
    }

    if (!ob) {
      target[key] = val;

      globalSpace = globalSpace - 1;
      return val
    }

    defineReactive(ob.value, key, val);
    ob.dep.notify();

    globalSpace = globalSpace - 1;
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ del ------------");

    if (Array.isArray(target) && typeof key === 'number') {
      target.splice(key, 1);

      globalSpace = globalSpace - 1;
      return
    }
    var ob = (target).__BigOb__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );

      globalSpace = globalSpace - 1;
      return
    }
    if (!hasOwn(target, key)) {

      globalSpace = globalSpace - 1;
      return
    }
    delete target[key];
    if (!ob) {

      globalSpace = globalSpace - 1;
      return
    }
    ob.dep.notify();

    globalSpace = globalSpace - 1;
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ dependArray ------------");

    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__BigOb__ && e.__BigOb__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }

    globalSpace = globalSpace - 1;
  }



  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option value into the final value. 
   */
  // TODO starats的作用是什么
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */

  strats.el = strats.propsData = function(parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };


  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeData ------------");

    if (!from) {

      globalSpace = globalSpace - 1;
      return to
    }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }

    globalSpace = globalSpace - 1;
    return to
  }

  /**
   * Data
   */
  strats.data = function(parentVal, childVal, vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ strats.data ------------");
    globalSpace = globalSpace - 1;


    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component definitions.',
          vm
        );
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergedDataFn ------------");

        globalSpace = globalSpace - 1;
        return mergeData(
          childVal.call(this),
          parentVal.call(this)
        )

      }
    } else if (parentVal || childVal) {
      return function mergedInstanceDataFn() {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergedInstanceDataFn ------------");

        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;

        globalSpace = globalSpace - 1;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }

      }
    }
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal
  }

  LIFECYCLE_HOOKS.forEach(function(hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeAssets ------------");

    var res = Object.create(parentVal || null);
    globalSpace = globalSpace - 1;
    return childVal ? extend(res, childVal) : res
  }

  ASSET_TYPES.forEach(function(type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function(parentVal, childVal) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ strats.watch ------------");
    globalSpace = globalSpace - 1;

    /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null)
    }
    if (!parentVal) {
      return childVal
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key in childVal) {
      var parent = ret[key];
      var child = childVal[key];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key] = parent ? parent.concat(child) : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
    strats.methods =
    strats.computed = function(parentVal, childVal) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ strats.props.methods.computed ------------");
      globalSpace = globalSpace - 1;

      if (!childVal) {
        return Object.create(parentVal || null)
      }
      if (!parentVal) {
        return childVal
      }
      var ret = Object.create(null);
      extend(ret, parentVal);
      extend(ret, childVal);
      return ret
    };

  /**
   * Default strategy.
   */
  var defaultStrat = function(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkComponents ------------");

    for (var key in options.components) {
      var lower = key.toLowerCase();
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        warn(
          'Do not use built-in or reserved HTML elements as component ' +
          'id: ' + key
        );
      }
    }

    globalSpace = globalSpace - 1;

  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeProps ------------");

    var props = options.props;
    if (!props) {
      globalSpace = globalSpace - 1;
      return
    }

    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = {
            type: null
          };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : {
          type: val
        };
      }
    }
    options.props = res;

    globalSpace = globalSpace - 1;
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeDirectives ------------");

    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = {
            bind: def,
            update: def
          };
        }
      }
    }
    globalSpace = globalSpace - 1;

  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {


    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeOptions ------------");


    checkComponents(child);


    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }

    function mergeField(key) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeField ------------");

      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);

      globalSpace = globalSpace - 1;
    }

    globalSpace = globalSpace - 1;
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveAsset ------------");

    /* istanbul ignore if */
    if (typeof id !== 'string') {

      globalSpace = globalSpace - 1;
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {

      globalSpace = globalSpace - 1;
      return assets[id]
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {

      globalSpace = globalSpace - 1;
      return assets[camelizedId]
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {

      globalSpace = globalSpace - 1;
      return assets[PascalCaseId]
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }

    globalSpace = globalSpace - 1;
    return res
  }



  function validateProp(key, propOptions, propsData, vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ validateProp ------------");


    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // handle boolean props
    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      smallobserve(value);
      observerState.shouldConvert = prevShouldConvert;
    } {
      assertProp(prop, key, value, vm, absent);
    }

    globalSpace = globalSpace - 1;
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getPropDefaultValue ------------");

    // no default, return undefined
    if (!hasOwn(prop, 'default')) {

      globalSpace = globalSpace - 1;
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {

      globalSpace = globalSpace - 1;
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    globalSpace = globalSpace - 1;
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ assertProp ------------");


    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );

      globalSpace = globalSpace - 1;
      return
    }

    if (value == null && !prop.required) {

      globalSpace = globalSpace - 1;
      return
    }

    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];

    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        'Invalid prop: type check failed for prop "' + name + '".' +
        ' Expected ' + expectedTypes.map(capitalize).join(', ') +
        ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
        vm
      );

      globalSpace = globalSpace - 1;
      return
    }

    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }

    globalSpace = globalSpace - 1;
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ assertType ------------");

    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      valid = typeof value === expectedType.toLowerCase();
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }

    globalSpace = globalSpace - 1;
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getType ------------");
    globalSpace = globalSpace - 1;

    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''

  }

  function isType(type, fn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isType ------------");
    globalSpace = globalSpace - 1;

    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type)
    }
    for (var i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true
      }
    }
    /* istanbul ignore next */
    return false
  }


  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;


  var allowedGlobals = makeMap("allowedGlobals",
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function(target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy = (typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/));

  if (hasProxy) {
    var isBuiltInModifier = makeMap("isBuiltInModifier", 'stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "hasProxy ------------ set ------------");
        globalSpace = globalSpace - 1;

        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "hasHandler ------------ has ------------");

      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }

      globalSpace = globalSpace - 1;
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get(target, key) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "getHandler ------------ get ------------");

      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }

      globalSpace = globalSpace - 1;
      return target[key]
    }
  };

  initProxy = function initProxy(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initProxy ------------");

    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }

    globalSpace = globalSpace - 1;
  };



  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.functionalContext = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
  };

  var prototypeAccessors = {
    child: {}
  };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function() {
    return this.componentInstance
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function() {
    var node = new VNode();
    node.text = '';
    node.isComment = true;
    return node
  };

  function createTextVNode(val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createTextVNode ------------");
    globalSpace = globalSpace - 1;

    return new VNode(undefined, undefined, undefined, String(val))

  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ cloneVNode ------------");

    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.isCloned = true;

    globalSpace = globalSpace - 1;

    return cloned
  }

  function cloneVNodes(vnodes) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ cloneVNodes ------------");

    var len = vnodes.length;
    var res = new Array(len);
    for (var i = 0; i < len; i++) {
      res[i] = cloneVNode(vnodes[i]);
    }

    globalSpace = globalSpace - 1;
    return res

  }



  var normalizeEvent = cached(function(name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  }, "normalizeEvent");

  function createFnInvoker(fns) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createFnInvoker ------------");


    function invoker() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ invoker ------------");

      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        for (var i = 0; i < fns.length; i++) {
          fns[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers 
        globalSpace = globalSpace - 1;
        return fns.apply(null, arguments)
      }

      globalSpace = globalSpace - 1;
    }

    invoker.fns = fns;

    globalSpace = globalSpace - 1;
    return invoker
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateListeners ------------");

    var name, cur, old, event;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn("Invalid handler for event \"" + (event.name) + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }

    globalSpace = globalSpace - 1;

  }



  function mergeVNodeHook(def, hookKey, hook) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeVNodeHook ------------");

    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ wrappedHook ------------");

      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);

      globalSpace = globalSpace - 1;
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isNotEmpty(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;

    globalSpace = globalSpace - 1;
  }



  function extractPropsFromVNodeData(data, Ctor, tag) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ extractPropsFromVNodeData ------------");


    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      globalSpace = globalSpace - 1;
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isNotEmpty(attrs) || isNotEmpty(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key); {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }

    globalSpace = globalSpace - 1;
    return res
  }

  function checkProp(res, hash, key, altKey, preserve) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkProp ------------");
    globalSpace = globalSpace - 1;

    if (isNotEmpty(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }



  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ simpleNormalizeChildren ------------");

    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        globalSpace = globalSpace - 1;
        return Array.prototype.concat.apply([], children)
      }
    }
    globalSpace = globalSpace - 1;
    return children

  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeChildren ------------");
    globalSpace = globalSpace - 1;

    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined
  }

  function isTextNode(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isTextNode ------------");
    globalSpace = globalSpace - 1;

    return isNotEmpty(node) && isNotEmpty(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren(children, nestedIndex) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeArrayChildren ------------");

    var res = [];
    var i, c, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue
      }
      last = res[res.length - 1];
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          (last).text += String(c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[res.length - 1] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isNotEmpty(c.tag) && isUndef(c.key) && isNotEmpty(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }

    globalSpace = globalSpace - 1;
    return res
  }



  function ensureCtor(comp, base) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ ensureCtor ------------");
    globalSpace = globalSpace - 1;

    return isObject(comp) ? base.extend(comp) : comp
  }

  function resolveAsyncComponent(factory, baseCtor, context) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ ensureCtor ------------");


    if (isTrue(factory.error) && isNotEmpty(factory.errorComp)) {
      globalSpace = globalSpace - 1;
      return factory.errorComp
    }

    if (isNotEmpty(factory.resolved)) {
      globalSpace = globalSpace - 1;
      return factory.resolved
    }

    if (isTrue(factory.loading) && isNotEmpty(factory.loadingComp)) {
      globalSpace = globalSpace - 1;
      return factory.loadingComp
    }

    if (isNotEmpty(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function() {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function(res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      var reject = once(function(reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isNotEmpty(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isNotEmpty(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isNotEmpty(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isNotEmpty(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function() {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isNotEmpty(res.timeout)) {
            setTimeout(function() {
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously

      globalSpace = globalSpace - 1;
      return factory.loading ? factory.loadingComp : factory.resolved
    }

    globalSpace = globalSpace - 1;
  }



  function getFirstComponentChild(children) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getFirstComponentChild ------------");

    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isNotEmpty(c) && isNotEmpty(c.componentOptions)) {

          globalSpace = globalSpace - 1;
          return c
        }
      }
    }

    globalSpace = globalSpace - 1;

  }



  function initEvents(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initEvents ------------");

    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }

    globalSpace = globalSpace - 1;
  }

  var target;

  function add(event, fn, once$$1) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ add ------------");

    if (once$$1) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }

    globalSpace = globalSpace - 1;
  }

  function remove$1(event, fn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ remove$1 ------------");

    target.$off(event, fn);

    globalSpace = globalSpace - 1;
  }

  function updateComponentListeners(vm, listeners, oldListeners) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ remove$1 ------------");

    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);

    globalSpace = globalSpace - 1;
  }

  function eventsMixin(Vue) {


    var hookRE = /^hook:/;
    Vue.prototype.$on = function(event, fn) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ $on ------------");

      var this$1 = this;

      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }

      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ $on ------------");
      globalSpace = globalSpace - 1;

      return vm
    };

    Vue.prototype.$once = function(event, fn) {
      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ $once ------------");

      var vm = this;

      function on() {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ on ------------");

        vm.$off(event, on);
        fn.apply(vm, arguments);

        globalSpace = globalSpace - 1;
      }

      on.fn = fn;
      vm.$on(event, on);

      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ $once ------------");
      globalSpace = globalSpace - 1;

      return vm
    };

    Vue.prototype.$off = function(event, fn) {
      var this$1 = this;

      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          this$1.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (arguments.length === 1) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function(event) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ $emit ------------");


      var vm = this; {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i].apply(vm, args);
        }
      }


      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ $emit ------------");
      globalSpace = globalSpace - 1;

      return vm
    };

  }



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveSlots ------------");


    var slots = {};
    if (!children) {
      globalSpace = globalSpace - 1;
      return slots
    }
    var defaultSlot = [];
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.functionalContext === context) &&
        child.data && child.data.slot != null
      ) {
        var name = child.data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        defaultSlot.push(child);
      }
    }
    // ignore whitespace
    if (!defaultSlot.every(isWhitespace)) {
      slots.default = defaultSlot;
    }
    globalSpace = globalSpace - 1;
    return slots
  }

  function isWhitespace(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isWhitespace ------------");
    globalSpace = globalSpace - 1;

    return node.isComment || node.text === ' ';
  }

  function resolveScopedSlots(
    fns, // see flow/vnode
    res
  ) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveScopedSlots ------------");

    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }

    globalSpace = globalSpace - 1;
    return res
  }



  var activeInstance = null;

  function initLifecycle(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initLifecycle ------------");

    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;

    setGlobalSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ initLifecycle ------------");
    globalSpace = globalSpace - 1;
  }

  function lifecycleMixin(Vue) {


    Vue.prototype._update = function(vnode, hydrating) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ _update ------------");


      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(
          vm.$el, vnode, hydrating, false /* removeOnly */ ,
          vm.$options._parentElm,
          vm.$options._refElm
        );
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.


      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ _update ------------");
      globalSpace = globalSpace - 1;

    };

    Vue.prototype.$forceUpdate = function() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ $forceUpdate ------------");

      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }


      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ $forceUpdate ------------");
      globalSpace = globalSpace - 1;

    };

    Vue.prototype.$destroy = function() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ $destroy ------------");


      var vm = this;
      if (vm._isBeingDestroyed) {

        setGlobalSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ $destroy ------------");
        globalSpace = globalSpace - 1;

        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__BigOb__) {
        vm._data.__BigOb__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // remove reference to DOM nodes (prevents leak)
      vm.$options._parentElm = vm.$options._refElm = null;

      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ $destroy ------------");
      globalSpace = globalSpace - 1;

    };



  }

  function mountComponent(vm, el, hydrating) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mountComponent ------------");


    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode; {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;

    updateComponent = function() {
      vm._update(vm._render(), hydrating);
    };


    vm._watcher = new Watcher(vm, updateComponent, noop);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }

    setGlobalSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ mountComponent ------------");
    globalSpace = globalSpace - 1;

    return vm
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateChildComponent ------------");


    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(
      renderChildren || // has new static slots
      vm.$options._renderChildren || // has old static slots
      parentVnode.data.scopedSlots || // has new scoped slots
      vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false; {
        observerState.isSettingProps = true;
      }
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        props[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true; {
        observerState.isSettingProps = false;
      }
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    globalSpace = globalSpace - 1;

  }

  function isInInactiveTree(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isInInactiveTree ------------");

    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        globalSpace = globalSpace - 1;
        return true
      }
    }

    globalSpace = globalSpace - 1;
    return false

  }

  function activateChildComponent(vm, direct) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ activateChildComponent ------------");

    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        globalSpace = globalSpace - 1;
        return
      }
    } else if (vm._directInactive) {
      globalSpace = globalSpace - 1;
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }

    globalSpace = globalSpace - 1;
  }

  function deactivateChildComponent(vm, direct) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ deactivateChildComponent ------------");

    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        globalSpace = globalSpace - 1;
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }

    globalSpace = globalSpace - 1;
  }

  function callHook(vm, hook) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ callHook ------------" + hook);

    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, (hook + " hook"));
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    globalSpace = globalSpace - 1;
  }



  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resetSchedulerState ------------");

    index = queue.length = activatedChildren.length = 0;
    has = {}; {
      circular = {};
    }
    waiting = flushing = false;

    globalSpace = globalSpace - 1;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ flushSchedulerQueue ------------");

    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function(a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user ? ("in watcher with expression \"" + (watcher.expression) + "\"") : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdateHooks(updatedQueue);

    setGlobalSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ flushSchedulerQueue ------------");
    globalSpace = globalSpace - 1;
  }

  function callUpdateHooks(queue) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ callUpdateHooks ------------");

    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }

    globalSpace = globalSpace - 1;
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ queueActivatedComponent ------------");

    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);

    globalSpace = globalSpace - 1;
  }

  function callActivatedHooks(queue) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ callActivatedHooks ------------");

    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */ );
    }

    globalSpace = globalSpace - 1;
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ queueWatcher ------------");

    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }

    globalSpace = globalSpace - 1;
  }



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options) {
    this.vm = vm;
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function() {};
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ get ------------");

    pushTarget(this);
    var value;
    var vm = this.vm;
    if (this.user) {
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      }
    } else {
      value = this.getter.call(vm, vm);
    }
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();

    globalSpace = globalSpace - 1;
    return value

  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ addDep ------------");

    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }

    globalSpace = globalSpace - 1;
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ cleanupDeps ------------");

    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;

    globalSpace = globalSpace - 1;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ update ------------");

    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }

    globalSpace = globalSpace - 1;
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ run ------------");

    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }

    globalSpace = globalSpace - 1;
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ evaluate ------------");

    this.value = this.get();
    this.dirty = false;

    globalSpace = globalSpace - 1;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ depend ------------");

    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }

    globalSpace = globalSpace - 1;
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Watcher ------------ teardown ------------");

    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }

    globalSpace = globalSpace - 1;
  };

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  var seenObjects = new _Set();

  function traverse(val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ traverse ------------");

    seenObjects.clear();
    _traverse(val, seenObjects);

    globalSpace = globalSpace - 1;
  }

  function _traverse(val, seen) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ _traverse ------------");

    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
      globalSpace = globalSpace - 1;
      return
    }
    if (val.__BigOb__) {
      var depId = val.__BigOb__.dep.id;
      if (seen.has(depId)) {
        globalSpace = globalSpace - 1;
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }

    globalSpace = globalSpace - 1;
  }



  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ proxy ------------");

    sharedPropertyDefinition.get = function proxyGetter() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ proxyGetter ------------");
      globalSpace = globalSpace - 1;

      return this[sourceKey][key]

    };
    sharedPropertyDefinition.set = function proxySetter(val) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ proxySetter ------------");
      globalSpace = globalSpace - 1;

      this[sourceKey][key] = val;

    };
    Object.defineProperty(target, key, sharedPropertyDefinition);

    globalSpace = globalSpace - 1;
  }

  function initState(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initState ------------");

    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      smallobserve(vm._data = {}, true /* asRootData */ );
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch) {
      initWatch(vm, opts.watch);
    }

    globalSpace = globalSpace - 1;
  }

  var isReservedProp = {
    key: 1,
    ref: 1,
    slot: 1
  };

  function initProps(vm, propsOptions) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initProps ------------");

    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        if (isReservedProp[key] || config.isReservedAttr(key)) {
          warn(
            ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive(props, key, value, function() {
          if (vm.$parent && !observerState.isSettingProps) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop(key);
    observerState.shouldConvert = true;

    globalSpace = globalSpace - 1;
  }

  function initData(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initData ------------");

    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var i = keys.length;
    while (i--) {
      if (props && hasOwn(props, keys[i])) {
        warn(
          "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(keys[i])) {
        proxy(vm, "_data", keys[i]);
      }
    }
    // observe data
    smallobserve(data, true /* asRootData */ );

    globalSpace = globalSpace - 1;
  }

  function getData(data, vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getData ------------");
    globalSpace = globalSpace - 1;

    try {
      return data.call(vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    }
  }

  var computedWatcherOptions = {
    lazy: true
  };

  function initComputed(vm, computed) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initComputed ------------");

    var watchers = vm._computedWatchers = Object.create(null);

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get; {
        if (getter === undefined) {
          warn(
            ("No getter function has been defined for computed property \"" + key + "\"."),
            vm
          );
          getter = noop;
        }
      }
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }

    setGlobalSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end ------------ initComputed ------------");
    globalSpace = globalSpace - 1;

  }

  function defineComputed(target, key, userDef) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ defineComputed ------------");

    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = createComputedGetter(key);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);

    globalSpace = globalSpace - 1;
  }

  function createComputedGetter(key) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createComputedGetter ------------");
    globalSpace = globalSpace - 1;

    return function computedGetter() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ computedGetter ------------");

      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }

        globalSpace = globalSpace - 1;
        return watcher.value
      }

      globalSpace = globalSpace - 1;
    }

  }

  function initMethods(vm, methods) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initMethods ------------");

    var props = vm.$options.props;
    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm); {
        if (methods[key] == null) {
          warn(
            "method \"" + key + "\" has an undefined value in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
      }
    }

    globalSpace = globalSpace - 1;
  }

  function initWatch(vm, watch) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initWatch ------------");

    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }

    globalSpace = globalSpace - 1;
  }

  function createWatcher(vm, key, handler) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createWatcher ------------");

    var options;
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    vm.$watch(key, handler, options);

    globalSpace = globalSpace - 1;
  }

  function stateMixin(Vue) {


    // ------------------------------------------------------
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function() {
      return this._data
    };
    var propsDef = {};
    propsDef.get = function() {
      return this._props
    };

    dataDef.set = function(newData) {
      warn(
        'Avoid replacing instance root $data. Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function() {
      warn("$props is readonly.", this);
    };

    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;
    // ------------------------------------------------------

    Vue.prototype.$watch = function(expOrFn, cb, options) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ $watch ------------");

      var vm = this;
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }

      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ $watch ------------");
      globalSpace = globalSpace - 1;

      return function unwatchFn() {
        watcher.teardown();
      }

    };
  }



  function initProvide(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initProvide ------------");

    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }

    globalSpace = globalSpace - 1;
  }

  function initInjections(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initInjections ------------");

    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      Object.keys(result).forEach(function(key) {
        /* istanbul ignore else */
        {
          defineReactive(vm, key, result[key], function() {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
    }

    globalSpace = globalSpace - 1;
  }

  function resolveInject(inject, vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveInject ------------");

    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      // isArray here
      var isArray = Array.isArray(inject);
      var result = Object.create(null);
      var keys = isArray ? inject : hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = isArray ? key : inject[key];
        var source = vm;
        while (source) {
          if (source._provided && provideKey in source._provided) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
      }

      globalSpace = globalSpace - 1;
      return result
    }

    globalSpace = globalSpace - 1;
  }



  function createFunctionalComponent(Ctor, propsData, data, context, children) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createFunctionalComponent ------------");

    var props = {};
    var propOptions = Ctor.options.props;
    if (isNotEmpty(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || {});
      }
    } else {
      if (isNotEmpty(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isNotEmpty(data.props)) {
        mergeProps(props, data.props);
      }
    }
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var _context = Object.create(context);
    var h = function(a, b, c, d) {
      return createElement(_context, a, b, c, d, true);
    };
    var vnode = Ctor.options.render.call(null, h, {
      data: data,
      props: props,
      children: children,
      parent: context,
      listeners: data.on || {},
      injections: resolveInject(Ctor.options.inject, context),
      slots: function() {
        return resolveSlots(children, context);
      }
    });
    if (vnode instanceof VNode) {
      vnode.functionalContext = context;
      vnode.functionalOptions = Ctor.options;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }

    globalSpace = globalSpace - 1;
    return vnode
  }

  function mergeProps(to, from) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeProps ------------");

    for (var key in from) {
      to[camelize(key)] = from[key];
    }
    globalSpace = globalSpace - 1;
  }



  // hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ init ------------");

      if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      } else if (vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      }

      globalSpace = globalSpace - 1;
    },

    prepatch: function prepatch(oldVnode, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ prepatch ------------");

      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );

      globalSpace = globalSpace - 1;
    },

    insert: function insert(vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ insert ------------");

      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */ );
        }
      }

      globalSpace = globalSpace - 1;
    },

    destroy: function destroy(vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ destroy ------------");

      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */ );
        }
      }

      globalSpace = globalSpace - 1;
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createComponent ------------");


    if (isUndef(Ctor)) {

      globalSpace = globalSpace - 1;
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }

      globalSpace = globalSpace - 1;
      return
    }

    // async component
    if (isUndef(Ctor.cid)) {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
      if (Ctor === undefined) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.

        globalSpace = globalSpace - 1;
        return
      }
    }

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    data = data || {};

    // transform component v-model data into props & events
    if (isNotEmpty(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {

      globalSpace = globalSpace - 1;
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners
      data = {};
    }

    // merge component management hooks onto the placeholder node
    mergeHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context, {
        Ctor: Ctor,
        propsData: propsData,
        listeners: listeners,
        tag: tag,
        children: children
      }
    );

    globalSpace = globalSpace - 1;
    return vnode
  }

  function createComponentInstanceForVnode(
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent, // activeInstance in lifecycle state
    parentElm,
    refElm
  ) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createComponentInstanceForVnode ------------");


    var vnodeComponentOptions = vnode.componentOptions;
    var options = {
      _isComponent: true,
      parent: parent,
      propsData: vnodeComponentOptions.propsData,
      _componentTag: vnodeComponentOptions.tag,
      _parentVnode: vnode,
      _parentListeners: vnodeComponentOptions.listeners,
      _renderChildren: vnodeComponentOptions.children,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isNotEmpty(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }

    globalSpace = globalSpace - 1;
    return new vnodeComponentOptions.Ctor(options)
  }

  function mergeHooks(data) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeHooks ------------");

    if (!data.hook) {
      data.hook = {};
    }
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = componentVNodeHooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }

    globalSpace = globalSpace - 1;
  }

  function mergeHook$1(one, two) {
    return function(a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    }
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ transformModel ------------");

    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input';
    (data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    if (isNotEmpty(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }

    globalSpace = globalSpace - 1;
  }



  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createElement ------------");


    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }

    globalSpace = globalSpace - 1;
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement(context, tag, data, children, normalizationType) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ _createElement ------------");

    if (isNotEmpty(data) && isNotEmpty((data).__BigOb__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      globalSpace = globalSpace - 1;
      return createEmptyVNode()
    }

    if (!tag) {
      // in case of component :is set to falsy value
      globalSpace = globalSpace - 1;
      return createEmptyVNode()
    }

    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = {
        default: children[0]
      };
      children.length = 0;
    }

    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }

    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if (isNotEmpty(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }

    if (isNotEmpty(vnode)) {
      if (ns) {
        applyNS(vnode, ns);
      }
      globalSpace = globalSpace - 1;
      return vnode
    } else {
      globalSpace = globalSpace - 1;
      return createEmptyVNode()
    }

    globalSpace = globalSpace - 1;
  }

  function applyNS(vnode, ns) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ applyNS ------------");

    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject

      globalSpace = globalSpace - 1;
      return
    }
    if (isNotEmpty(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isNotEmpty(child.tag) && isUndef(child.ns)) {
          applyNS(child, ns);
        }
      }
    }

    globalSpace = globalSpace - 1;
  }



  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ renderList ------------");

    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isNotEmpty(ret)) {
      (ret)._isVList = true;
    }

    globalSpace = globalSpace - 1;
    return ret
  }



  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ renderList ------------");

    var scopedSlotFn = this.$scopedSlots[name];
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        extend(props, bindObject);
      }

      globalSpace = globalSpace - 1;
      return scopedSlotFn(props) || fallback;

    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes && "development" !== 'production') {
        slotNodes._rendered && warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
        slotNodes._rendered = true;
      }

      globalSpace = globalSpace - 1;
      return slotNodes || fallback;
    }
  }



  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveFilter ------------");

    globalSpace = globalSpace - 1;
    return resolveAsset(this.$options, 'filters', id, true) || identity

  }



  /**
   * Runtime helper for checking keyCodes from config.
   */
  function checkKeyCodes(eventKeyCode, key, builtInAlias) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkKeyCodes ------------");

    var keyCodes = config.keyCodes[key] || builtInAlias;

    globalSpace = globalSpace - 1;
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  }



  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ bindObjectProps ------------");


    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];
          }
        }
      }
    }

    globalSpace = globalSpace - 1;
    return data
  }



  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ bindObjectProps ------------");

    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      globalSpace = globalSpace - 1;
      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] =
      this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ("__static__" + index), false);

    globalSpace = globalSpace - 1;
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ markOnce ------------");

    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);

    globalSpace = globalSpace - 1;
    return tree
  }

  function markStatic(tree, key, isOnce) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ markStatic ------------");

    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }

    globalSpace = globalSpace - 1;
  }

  function markStaticNode(node, key, isOnce) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ markStaticNode ------------");

    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;

    globalSpace = globalSpace - 1;
  }



  function initRender(vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initRender ------------");

    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null;
    var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function(a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function(a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    globalSpace = globalSpace - 1;
  }

  function renderMixin(Vue) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ renderMixin ------------");

    Vue.prototype.$nextTick = function(fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function() {


      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ _render ------------");

      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      var _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
        // clone slot nodes on re-renders
        for (var key in vm.$slots) {
          vm.$slots[key] = cloneVNodes(vm.$slots[key]);
        }
      }

      vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

      if (staticRenderFns && !vm._staticTrees) {
        vm._staticTrees = [];
      }
      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render function");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          vnode = vm.$options.renderError ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) : vm._vnode;
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;


      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ _render ------------");
      globalSpace = globalSpace - 1;

      return vnode
    };

    // internal render helpers.
    // these are exposed on the instance prototype to reduce generated render
    // code size.
    Vue.prototype._o = markOnce;
    Vue.prototype._n = toNumber;
    Vue.prototype._s = toString;
    Vue.prototype._l = renderList;
    Vue.prototype._t = renderSlot;
    Vue.prototype._q = looseEqual;
    Vue.prototype._i = looseIndexOf;
    Vue.prototype._m = renderStatic;
    Vue.prototype._f = resolveFilter;
    Vue.prototype._k = checkKeyCodes;
    Vue.prototype._b = bindObjectProps;
    Vue.prototype._v = createTextVNode;
    Vue.prototype._e = createEmptyVNode;
    Vue.prototype._u = resolveScopedSlots;

    globalSpace = globalSpace - 1;
  }



  var uid$1 = 0;

  function initMixin(Vue) {


    Vue.prototype._init = function(options) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue import ------------ _init ------------");

      var vm = this;
      // a uid
      vm._uid = uid$1++;

      var startTag, endTag;


      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');



      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }

      setGlobalSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "end Vue import ------------ _init ------------");
      globalSpace = globalSpace - 1;

    };

  }

  function initInternalComponent(vm, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initInternalComponent ------------");

    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;
    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }

    globalSpace = globalSpace - 1;
  }

  function resolveConstructorOptions(Ctor) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveConstructorOptions ------------");

    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }

    globalSpace = globalSpace - 1;
    return options

  }

  function resolveModifiedOptions(Ctor) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveModifiedOptions ------------");

    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    globalSpace = globalSpace - 1;
    return modified

  }

  function dedupe(latest, extended, sealed) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ dedupe ------------");

    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      globalSpace = globalSpace - 1;
      return res
    } else {
      globalSpace = globalSpace - 1;
      return latest
    }
    globalSpace = globalSpace - 1;
  }

  function Vue$3(options) {
    if (!(this instanceof Vue$3)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }


  initMixin(Vue$3);
  stateMixin(Vue$3);
  eventsMixin(Vue$3);
  lifecycleMixin(Vue$3);
  renderMixin(Vue$3);

  setStartSpace();
  if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initMixin stateMixin eventsMixin lifecycleMixin renderMixin ------------");
  globalSpace = globalSpace - 1;


  function initUse(Vue) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initUse ------------");
    globalSpace = globalSpace - 1;

    Vue.use = function(plugin) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue ------------ use ------------");
      globalSpace = globalSpace - 1;


      /* istanbul ignore if */
      if (plugin.installed) {
        return this
      }
      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      plugin.installed = true;
      return this
    };
  }



  function initMixin$1(Vue) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initUse ------------");
    globalSpace = globalSpace - 1;

    Vue.mixin = function(mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }



  function initExtend(Vue) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initExtend ------------");
    globalSpace = globalSpace - 1;

    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function(extendOptions) {


      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Vue ------------ extend ------------" + extendOptions.name);

      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        globalSpace = globalSpace - 1;
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }


      var Sub = function VueComponent(options) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ VueComponent ------------");

        this._init(options);

        globalSpace = globalSpace - 1;
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function(type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;

      globalSpace = globalSpace - 1;
      return Sub
    };

  }

  function initProps$1(Comp) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initProps$1 ------------");

    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
    globalSpace = globalSpace - 1;
  }

  function initComputed$1(Comp) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initComputed$1 ------------");

    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
    globalSpace = globalSpace - 1;
  }



  function initAssetRegisters(Vue) {

    setStartSpace();
    if (globalSpace < globalRate) {
      console.log(ssp + globalSpace + "-" + "------------ initAssetRegisters ------------");
      ASSET_TYPES.forEach(function(type) {
        console.log(ssp + globalSpace + "-" + "------------ ASSET_TYPES ------------" + type);
      });
    }

    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function(type) {

      Vue[type] = function(id, definition) {

        //TODO
        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ ASSET_TYPES ------------");
        globalSpace = globalSpace - 1;

        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */

          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component id: ' + id
            );
          }

          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = {
              bind: definition,
              update: definition
            };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }

      };
    });

    globalSpace = globalSpace - 1;
  }



  var patternTypes = [String, RegExp];

  function getComponentName(opts) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getComponentName ------------");

    globalSpace = globalSpace - 1;
    return opts && (opts.Ctor.options.name || opts.tag)

  }

  function matches(pattern, name) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ matches ------------");
    globalSpace = globalSpace - 1;

    if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache(cache, current, filter) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ pruneCache ------------");

    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          if (cachedNode !== current) {
            pruneCacheEntry(cachedNode);
          }
          cache[key] = null;
        }
      }
    }
    globalSpace = globalSpace - 1;
  }

  function pruneCacheEntry(vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ pruneCacheEntry ------------");

    if (vnode) {
      vnode.componentInstance.$destroy();
    }

    globalSpace = globalSpace - 1;
  }

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes
    },

    created: function created() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ created ------------");

      this.cache = Object.create(null);

      globalSpace = globalSpace - 1;
    },

    destroyed: function destroyed() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ destroyed ------------");

      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache[key]);
      }

      globalSpace = globalSpace - 1;
    },

    watch: {
      include: function include(val) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ include ------------");

        pruneCache(this.cache, this._vnode, function(name) {
          return matches(val, name);
        });

        globalSpace = globalSpace - 1;
      },
      exclude: function exclude(val) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ exclude ------------");

        pruneCache(this.cache, this._vnode, function(name) {
          return !matches(val, name);
        });

        globalSpace = globalSpace - 1;
      }
    },

    render: function render() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ render ------------");

      var vnode = getFirstComponentChild(this.$slots.default);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        if (name && (
            (this.include && !matches(this.include, name)) ||
            (this.exclude && matches(this.exclude, name))
          )) {

          globalSpace = globalSpace - 1;
          return vnode
        }
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '') : vnode.key;
        if (this.cache[key]) {
          vnode.componentInstance = this.cache[key].componentInstance;
        } else {
          this.cache[key] = vnode;
        }
        vnode.data.keepAlive = true;
      }

      globalSpace = globalSpace - 1;
      return vnode

    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };



  function initGlobalAPI(Vue) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initGlobalAPI ------------");

    // config
    var configDef = {};
    configDef.get = function() {
      return config;
    };
    configDef.set = function() {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };

    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function(type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);

    globalSpace = globalSpace - 1;
  }

  initGlobalAPI(Vue$3);


  Object.defineProperty(Vue$3.prototype, '$ssrContext', {
    get: function get() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ get ------------");
      globalSpace = globalSpace - 1;

      /* istanbul ignore next */
      return this.$vnode.ssrContext

    }
  });

  Vue$3.version = '2.3.3';



  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap("isReservedAttr", 'style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap("acceptValue", 'input,textarea,option,select');
  var mustUseProp = function(tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap("isEnumeratedAttr", 'contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap("isBooleanAttr",
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function(name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function(val) {
    return val == null || val === false
  };



  function genClassForVnode(vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genClassForVnode ------------");

    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isNotEmpty(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isNotEmpty(parentNode = parentNode.parent)) {
      if (parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }

    globalSpace = globalSpace - 1;
    return genClassFromData(data)

  }

  function mergeClassData(child, parent) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ mergeClassData ------------");

    globalSpace = globalSpace - 1;
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isNotEmpty(child.class) ? [child.class, parent.class] : parent.class
    }
  }

  function genClassFromData(data) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genClassFromData ------------");

    var dynamicClass = data.class;
    var staticClass = data.staticClass;
    if (isNotEmpty(staticClass) || isNotEmpty(dynamicClass)) {
      globalSpace = globalSpace - 1;
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */

    globalSpace = globalSpace - 1;
    return ''

  }

  function concat(a, b) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ concat ------------");
    globalSpace = globalSpace - 1;

    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass(value) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ stringifyClass ------------");

    if (isUndef(value)) {
      globalSpace = globalSpace - 1;
      return ''
    }
    if (typeof value === 'string') {
      globalSpace = globalSpace - 1;
      return value
    }
    var res = '';
    if (Array.isArray(value)) {
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isNotEmpty(value[i])) {
          if (isNotEmpty(stringified = stringifyClass(value[i])) && stringified !== '') {
            res += stringified + ' ';
          }
        }
      }
      globalSpace = globalSpace - 1;
      return res.slice(0, -1)
    }
    if (isObject(value)) {
      for (var key in value) {
        if (value[key]) {
          res += key + ' ';
        }
      }
      globalSpace = globalSpace - 1;
      return res.slice(0, -1)
    }
    /* istanbul ignore next */

    globalSpace = globalSpace - 1;
    return res

  }



  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap("isHTMLTag",
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap("isSVG",
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function(tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace(tag) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getTagNamespace ------------");
    globalSpace = globalSpace - 1;

    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }

  }

  var unknownElementCache = Object.create(null);

  function isUnknownElement(tag) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isUnknownElement ------------");

    /* istanbul ignore if */
    if (!inBrowser) {
      globalSpace = globalSpace - 1;
      return true
    }
    if (isReservedTag(tag)) {
      globalSpace = globalSpace - 1;
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      globalSpace = globalSpace - 1;
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      globalSpace = globalSpace - 1;
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      globalSpace = globalSpace - 1;
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }

  }



  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ query ------------");
    globalSpace = globalSpace - 1;

    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }

  }



  function createElement$1(tagName, vnode) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createElement$1 ------------");

    var elm = document.createElement(tagName);
    if (tagName !== 'select') {

      globalSpace = globalSpace - 1;
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }

    globalSpace = globalSpace - 1;
    return elm
  }

  function createElementNS(namespace, tagName) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createElementNS ------------");
    globalSpace = globalSpace - 1;

    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode(text) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createTextNode ------------");
    globalSpace = globalSpace - 1;

    return document.createTextNode(text)

  }

  function createComment(text) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createComment ------------");
    globalSpace = globalSpace - 1;

    return document.createComment(text)

  }

  function insertBefore(parentNode, newNode, referenceNode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ insertBefore ------------");
    globalSpace = globalSpace - 1;

    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ removeChild ------------");
    globalSpace = globalSpace - 1;

    node.removeChild(child);
  }

  function appendChild(node, child) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ appendChild ------------");
    globalSpace = globalSpace - 1;

    node.appendChild(child);
  }

  function parentNode(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parentNode ------------");
    globalSpace = globalSpace - 1;

    return node.parentNode

  }

  function nextSibling(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ nextSibling ------------");
    globalSpace = globalSpace - 1;

    return node.nextSibling

  }

  function tagName(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ tagName ------------");
    globalSpace = globalSpace - 1;

    return node.tagName

  }

  function setTextContent(node, text) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ setTextContent ------------");
    globalSpace = globalSpace - 1;

    node.textContent = text;
  }

  function setAttribute(node, key, val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ setAttribute ------------");
    globalSpace = globalSpace - 1;

    node.setAttribute(key, val);
  }


  var nodeOps = Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setAttribute: setAttribute
  });



  var ref = {
    create: function create(_, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ create ------------");

      registerRef(vnode);
      globalSpace = globalSpace - 1;
    },
    update: function update(oldVnode, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ update ------------");

      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
      globalSpace = globalSpace - 1;
    },
    destroy: function destroy(vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ destroy ------------");

      registerRef(vnode, true);

      globalSpace = globalSpace - 1;
    }
  };

  function registerRef(vnode, isRemoval) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ registerRef ------------");

    var key = vnode.data.ref;
    if (!key) {
      globalSpace = globalSpace - 1;
      return
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
          refs[key].push(ref);
        } else {
          refs[key] = [ref];
        }
      } else {
        refs[key] = ref;
      }
    }

    globalSpace = globalSpace - 1;
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *

  /*
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ sameVnode ------------");
    globalSpace = globalSpace - 1;

    return (
      a.key === b.key &&
      a.tag === b.tag &&
      a.isComment === b.isComment &&
      isNotEmpty(a.data) === isNotEmpty(b.data) &&
      sameInputType(a, b)
    )
  }

  // Some browsers do not support dynamically changing type for <input>
  // so they need to be treated as different nodes
  function sameInputType(a, b) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ sameInputType ------------");

    if (a.tag !== 'input') {
      globalSpace = globalSpace - 1;
      return true
    }
    var i;
    var typeA = isNotEmpty(i = a.data) && isNotEmpty(i = i.attrs) && i.type;
    var typeB = isNotEmpty(i = b.data) && isNotEmpty(i = i.attrs) && i.type;

    globalSpace = globalSpace - 1;
    return typeA === typeB
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createKeyToOldIdx ------------");

    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isNotEmpty(key)) {
        map[key] = i;
      }
    }
    globalSpace = globalSpace - 1;
    return map
  }

  function createPatchFunction(backend) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createPatchFunction ------------");

    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isNotEmpty(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ emptyNodeAt ------------");
      globalSpace = globalSpace - 1;

      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb(childElm, listeners) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createRmCb ------------");


      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;

      globalSpace = globalSpace - 1;
      return remove$$1
    }

    function removeNode(el) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ removeNode ------------");

      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isNotEmpty(parent)) {
        nodeOps.removeChild(parent, el);
      }
      globalSpace = globalSpace - 1;
    }

    var inPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createElm ------------");

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        globalSpace = globalSpace - 1;
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isNotEmpty(tag)) {
        {
          if (data && data.pre) {
            inPre++;
          }
          if (!inPre &&
            !vnode.ns &&
            !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
            config.isUnknownElement(tag)
          ) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isNotEmpty(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          inPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }

      globalSpace = globalSpace - 1;
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createComponent ------------");

      var i = vnode.data;
      if (isNotEmpty(i)) {
        var isReactivated = isNotEmpty(vnode.componentInstance) && i.keepAlive;
        if (isNotEmpty(i = i.hook) && isNotEmpty(i = i.init)) {
          i(vnode, false /* hydrating */ , parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isNotEmpty(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }

          globalSpace = globalSpace - 1;
          return true
        }
      }

      globalSpace = globalSpace - 1;
    }

    function initComponent(vnode, insertedVnodeQueue) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ initComponent ------------");

      if (isNotEmpty(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }

      globalSpace = globalSpace - 1;
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ reactivateComponent ------------");

      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isNotEmpty(i = innerNode.data) && isNotEmpty(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);

      globalSpace = globalSpace - 1;
    }

    function insert(parent, elm, ref) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ insert ------------");

      if (isNotEmpty(parent)) {
        if (isNotEmpty(ref)) {
          if (ref.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
      globalSpace = globalSpace - 1;
    }

    function createChildren(vnode, children, insertedVnodeQueue) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createChildren ------------");

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
      }
      globalSpace = globalSpace - 1;
    }

    function isPatchable(vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isPatchable ------------");

      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      globalSpace = globalSpace - 1;
      return isNotEmpty(vnode.tag)
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ invokeCreateHooks ------------");

      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isNotEmpty(i)) {
        if (isNotEmpty(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isNotEmpty(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
      globalSpace = globalSpace - 1;
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ setScope ------------");

      var i;
      var ancestor = vnode;
      while (ancestor) {
        if (isNotEmpty(i = ancestor.context) && isNotEmpty(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isNotEmpty(i = activeInstance) &&
        i !== vnode.context &&
        isNotEmpty(i = i.$options._scopeId)
      ) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      globalSpace = globalSpace - 1;
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addVnodes ------------");

      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
      globalSpace = globalSpace - 1;
    }

    function invokeDestroyHook(vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ invokeDestroyHook ------------");

      var i, j;
      var data = vnode.data;
      if (isNotEmpty(data)) {
        if (isNotEmpty(i = data.hook) && isNotEmpty(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isNotEmpty(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
      globalSpace = globalSpace - 1;
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ removeVnodes ------------");

      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isNotEmpty(ch)) {
          if (isNotEmpty(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
      globalSpace = globalSpace - 1;
    }

    function removeAndInvokeRemoveHook(vnode, rm) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ removeAndInvokeRemoveHook ------------");

      if (isNotEmpty(rm) || isNotEmpty(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isNotEmpty(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isNotEmpty(i = vnode.componentInstance) && isNotEmpty(i = i._vnode) && isNotEmpty(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isNotEmpty(i = vnode.data.hook) && isNotEmpty(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
      globalSpace = globalSpace - 1;
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateChildren ------------");

      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, elmToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isNotEmpty(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            elmToMove = oldCh[idxInOld];
            /* istanbul ignore if */
            if (!elmToMove) {
              warn(
                'It seems there are duplicate keys that is causing an update error. ' +
                'Make sure each v-for item has a unique key.'
              );
            }
            if (sameVnode(elmToMove, newStartVnode)) {
              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
              newStartVnode = newCh[++newStartIdx];
            }
          }
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }

      globalSpace = globalSpace - 1;
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ patchVnode ------------");

      if (oldVnode === vnode) {

        globalSpace = globalSpace - 1;
        return
      }
      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {

        vnode.elm = oldVnode.elm;
        vnode.componentInstance = oldVnode.componentInstance;

        globalSpace = globalSpace - 1;
        return
      }

      var i;
      var data = vnode.data;
      if (isNotEmpty(data) && isNotEmpty(i = data.hook) && isNotEmpty(i = i.prepatch)) {
        i(oldVnode, vnode);
      }
      var elm = vnode.elm = oldVnode.elm;
      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isNotEmpty(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isNotEmpty(i = data.hook) && isNotEmpty(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isNotEmpty(oldCh) && isNotEmpty(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isNotEmpty(ch)) {
          if (isNotEmpty(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isNotEmpty(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isNotEmpty(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isNotEmpty(data)) {
        if (isNotEmpty(i = data.hook) && isNotEmpty(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }

      globalSpace = globalSpace - 1;
    }

    function invokeInsertHook(vnode, queue, initial) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ invokeInsertHook ------------");

      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isNotEmpty(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }

      globalSpace = globalSpace - 1;
    }

    var bailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    var isRenderedModule = makeMap("isRenderedModule", 'attrs,style,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue) {

      setStartSpace();
      if (globalSpace < globalRate) {
        console.log(ssp + globalSpace + "-" + "------------ hydrate ------------");
      }

      if (!assertNodeMatch(elm, vnode)) {
        globalSpace = globalSpace - 1;
        return false
      }

      vnode.elm = elm;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      if (isNotEmpty(data)) {
        if (isNotEmpty(i = data.hook) && isNotEmpty(i = i.init)) {
          i(vnode, true /* hydrating */ );
        }
        if (isNotEmpty(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);

          globalSpace = globalSpace - 1;
          return true
        }
      }
      if (isNotEmpty(tag)) {
        if (isNotEmpty(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              if (
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              globalSpace = globalSpace - 1;
              return false
            }
          }
        }
        if (isNotEmpty(data)) {
          for (var key in data) {
            if (!isRenderedModule(key)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      globalSpace = globalSpace - 1;
      return true
    }

    function assertNodeMatch(node, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ assertNodeMatch ------------");
      globalSpace = globalSpace - 1;

      if (isNotEmpty(vnode.tag)) {
        return (
          vnode.tag.indexOf('vue-component') === 0 ||
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    globalSpace = globalSpace - 1;
    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ patch ------------");

      if (isUndef(vnode)) {
        if (isNotEmpty(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }

        globalSpace = globalSpace - 1;
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isNotEmpty(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);

                globalSpace = globalSpace - 1;
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }
          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm$1,
            nodeOps.nextSibling(oldElm)
          );

          if (isNotEmpty(vnode.parent)) {
            // component root element replaced.
            // update parent placeholder node element, recursively
            var ancestor = vnode.parent;
            while (ancestor) {
              ancestor.elm = vnode.elm;
              ancestor = ancestor.parent;
            }
            if (isPatchable(vnode)) {
              for (var i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, vnode.parent);
              }
            }
          }

          if (isNotEmpty(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isNotEmpty(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);

      globalSpace = globalSpace - 1;
      return vnode.elm
    }

  }



  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ unbindDirectives ------------");

      updateDirectives(vnode, emptyNode);

      globalSpace = globalSpace - 1;
    }
  };

  function updateDirectives(oldVnode, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateDirectives ------------");

    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
    globalSpace = globalSpace - 1;
  }

  function _update(oldVnode, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ _update ------------");

    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function() {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
    globalSpace = globalSpace - 1;
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeDirectives$1 ------------");

    var res = Object.create(null);
    if (!dirs) {
      globalSpace = globalSpace - 1;
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    globalSpace = globalSpace - 1;
    return res
  }

  function getRawDirName(dir) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getRawDirName ------------");
    globalSpace = globalSpace - 1;

    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))

  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ callHook$1 ------------");

    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }

    globalSpace = globalSpace - 1;

  }

  var baseModules = [
    ref,
    directives
  ];



  function updateAttrs(oldVnode, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateAttrs ------------");

    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      globalSpace = globalSpace - 1;
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isNotEmpty(attrs.__BigOb__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    /* istanbul ignore if */
    if (isIE9 && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
    globalSpace = globalSpace - 1;
  }

  function setAttr(el, key, value) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ setAttr ------------");

    if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, key);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, value);
      }
    }
    globalSpace = globalSpace - 1;
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };



  function updateClass(oldVnode, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateClass ------------");

    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {

      globalSpace = globalSpace - 1;
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isNotEmpty(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }

    globalSpace = globalSpace - 1;
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };



  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseFilters ------------");

    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;
            break // "
          case 0x27:
            inSingle = true;
            break // '
          case 0x60:
            inTemplateString = true;
            break // `
          case 0x28:
            paren++;
            break // (
          case 0x29:
            paren--;
            break // )
          case 0x5B:
            square++;
            break // [
          case 0x5D:
            square--;
            break // ]
          case 0x7B:
            curly++;
            break // {
          case 0x7D:
            curly--;
            break // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ pushFilter ------------");

      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;


      globalSpace = globalSpace - 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }
    globalSpace = globalSpace - 1;
    return expression

  }

  function wrapFilter(exp, filter) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ wrapFilter ------------");
    globalSpace = globalSpace - 1;

    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + "," + args)
    }
  }



  function baseWarn(msg) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ baseWarn ------------");
    globalSpace = globalSpace - 1;

    console.error(("[Vue compiler]: " + msg));

  }

  function pluckModuleFunction(modules, key) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ baseWarn ------------");
    globalSpace = globalSpace - 1;

    return modules ? modules.map(function(m) {
      return m[key];
    }).filter(function(_) {
      return _;
    }) : []
  }

  function addProp(el, name, value) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addProp ------------");

    (el.props || (el.props = [])).push({
      name: name,
      value: value
    });
    globalSpace = globalSpace - 1;
  }

  function addAttr(el, name, value) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addAttr ------------");

    (el.attrs || (el.attrs = [])).push({
      name: name,
      value: value
    });
    globalSpace = globalSpace - 1;
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addDirective ------------");

    (el.directives || (el.directives = [])).push({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      modifiers: modifiers
    });
    globalSpace = globalSpace - 1;
  }

  function addHandler(el, name, value, modifiers, important, warn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addHandler ------------");

    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers && modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.'
      );
    }
    // check capture modifier
    if (modifiers && modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers && modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers && modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }
    var events;
    if (modifiers && modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }
    var newHandler = {
      value: value,
      modifiers: modifiers
    };
    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    globalSpace = globalSpace - 1;
  }

  function getBindingAttr(el, name, getStatic) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getBindingAttr ------------");
    globalSpace = globalSpace - 1;

    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  function getAndRemoveAttr(el, name) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getAndRemoveAttr ------------");

    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    globalSpace = globalSpace - 1;
    return val
  }



  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genComponentModel ------------");

    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: ("\"" + value + "\""),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };

    globalSpace = globalSpace - 1;
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genAssignmentCode ------------");

    var modelRs = parseModel(value);

    globalSpace = globalSpace - 1;
    if (modelRs.idx === null) {
      return (value + "=" + assignment)
    } else {
      return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
        "if (!Array.isArray($$exp)){" +
        value + "=" + assignment + "}" +
        "else{$$exp.splice($$idx, 1, " + assignment + ")}"
    }
  }

  /**
   * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
   *
   * for loop possible cases:
   *
   * - test
   * - test[idx]
   * - test[test1[idx]]
   * - test["a"][idx]
   * - xxx.test[a[a].test1[idx]]
   * - test.xxx.a["asa"][test1[idx]]
   *
   */

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  function parseModel(val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseModel ------------");

    str = val;
    len = str.length;
    index$1 = expressionPos = expressionEndPos = 0;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {

      globalSpace = globalSpace - 1;
      return {
        exp: val,
        idx: null
      }
    }

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    globalSpace = globalSpace - 1;
    return {
      exp: val.substring(0, expressionPos),
      idx: val.substring(expressionPos + 1, expressionEndPos)
    }

  }

  function next() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ next ------------");
    globalSpace = globalSpace - 1;

    return str.charCodeAt(++index$1)

  }

  function eof() {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ eof ------------");
    globalSpace = globalSpace - 1;

    return index$1 >= len

  }

  function isStringStart(chr) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isStringStart ------------");
    globalSpace = globalSpace - 1;

    return chr === 0x22 || chr === 0x27

  }

  function parseBracket(chr) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseBracket ------------");


    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
    globalSpace = globalSpace - 1;
  }

  function parseString(chr) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseString ------------");

    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
    globalSpace = globalSpace - 1;
  }



  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {


    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ model ------------");


    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (tag === 'input' && dynamicType) {
        warn$1(
          "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
          "v-model does not support dynamic input types. Use v-if branches instead."
        );
      }
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead."
        );
      }
    }

    if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime

      globalSpace = globalSpace - 1;
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.'
      );
    }

    // ensure runtime directive metadata

    globalSpace = globalSpace - 1;
    return true
  }

  function genCheckboxModel(el, value, modifiers) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genCheckboxModel ------------");

    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true' ? (":(" + value + ")") : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, CHECKBOX_RADIO_TOKEN,
      "var $$a=" + value + "," +
      '$$el=$event.target,' +
      "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
      '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );

    globalSpace = globalSpace - 1;
  }

  function genRadioModel(el, value, modifiers) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genRadioModel ------------");

    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
    globalSpace = globalSpace - 1;
  }

  function genSelect(el, value, modifiers) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genSelect ------------");

    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
    globalSpace = globalSpace - 1;
  }

  function genDefaultModel(el, value, modifiers) {
    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genDefaultModel ------------");

    var type = el.attrsMap.type;
    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number || type === 'number') {
      addHandler(el, 'blur', '$forceUpdate()');
    }
    globalSpace = globalSpace - 1;
  }



  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeEvents ------------");

    var event;
    /* istanbul ignore if */
    if (isNotEmpty(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    if (isNotEmpty(on[CHECKBOX_RADIO_TOKEN])) {
      // Chrome fires microtasks in between click/change, leads to #4521
      event = isChrome ? 'click' : 'change';
      on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }

    globalSpace = globalSpace - 1;
  }

  var target$1;

  function add$1(event, handler, once$$1, capture, passive) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ add$1 ------------");

    if (once$$1) {
      var oldHandler = handler;
      var _target = target$1; // save current target element in closure
      handler = function(ev) {
        var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, handler, capture, _target);
        }
      };
    }
    target$1.addEventListener(
      event,
      handler,
      supportsPassive ? {
        capture: capture,
        passive: passive
      } : capture
    );

    globalSpace = globalSpace - 1;
  }

  function remove$2(event, handler, capture, _target) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ remove$2 ------------");
    globalSpace = globalSpace - 1;

    (_target || target$1).removeEventListener(event, handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateDOMListeners ------------");

    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      globalSpace = globalSpace - 1;
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);

    globalSpace = globalSpace - 1;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };



  function updateDOMProps(oldVnode, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateDOMProps ------------");

    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      globalSpace = globalSpace - 1;
      return
    }

    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isNotEmpty(props.__BigOb__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, vnode, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
    globalSpace = globalSpace - 1;
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, vnode, checkVal) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ shouldUpdateValue ------------");
    globalSpace = globalSpace - 1;

    return (!elm.composing && (
      vnode.tag === 'option' ||
      isDirty(elm, checkVal) ||
      isInputChanged(elm, checkVal)
    ))
  }

  function isDirty(elm, checkVal) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isDirty ------------");
    globalSpace = globalSpace - 1;

    // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
    return document.activeElement !== elm && elm.value !== checkVal
  }

  function isInputChanged(elm, newVal) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isInputChanged ------------");
    globalSpace = globalSpace - 1;

    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if ((isNotEmpty(modifiers) && modifiers.number) || elm.type === 'number') {
      return toNumber(value) !== toNumber(newVal)
    }
    if (isNotEmpty(modifiers) && modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };



  var parseStyleText = cached(function(cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function(item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  }, "parseStyleText");

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeStyleData ------------");

    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it

    globalSpace = globalSpace - 1;
    return data.staticStyle ? extend(data.staticStyle, style) : style

  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ normalizeStyleBinding ------------");
    globalSpace = globalSpace - 1;

    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle

  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getStyle ------------");

    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    globalSpace = globalSpace - 1;
    return res
  }



  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function(el, name, val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ setProp ------------");


    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }

    globalSpace = globalSpace - 1;
  };

  var prefixes = ['Webkit', 'Moz', 'ms'];

  var testEl;
  var normalize = cached(function(prop) {
    testEl = testEl || document.createElement('div');
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in testEl.style)) {
      return prop
    }
    var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < prefixes.length; i++) {
      var prefixed = prefixes[i] + upper;
      if (prefixed in testEl.style) {
        return prefixed
      }
    }
  }, "normalize");

  function updateStyle(oldVnode, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ updateStyle ------------");

    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      globalSpace = globalSpace - 1;
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likley wants
    // to mutate it.
    vnode.data.normalizedStyle = isNotEmpty(style.__BigOb__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }

    globalSpace = globalSpace - 1;
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };



  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addClass ------------");

    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      globalSpace = globalSpace - 1;
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function(c) {
          globalSpace = globalSpace - 1;
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }

    globalSpace = globalSpace - 1;
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ removeClass ------------");

    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      globalSpace = globalSpace - 1;
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function(c) {
          globalSpace = globalSpace - 1;
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      el.setAttribute('class', cur.trim());
    }

    globalSpace = globalSpace - 1;
  }



  function resolveTransition(def$$1) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ resolveTransition ------------");

    if (!def$$1) {

      globalSpace = globalSpace - 1;
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);

      globalSpace = globalSpace - 1;
      return res
    } else if (typeof def$$1 === 'string') {

      globalSpace = globalSpace - 1;
      return autoCssTransition(def$$1)
    }
    globalSpace = globalSpace - 1;
  }

  var autoCssTransition = cached(function(name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  }, "autoCssTransition");

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

  function nextFrame(fn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ nextFrame ------------");

    raf(function() {
      raf(fn);
    });

    globalSpace = globalSpace - 1;
  }

  function addTransitionClass(el, cls) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addTransitionClass ------------");

    (el._transitionClasses || (el._transitionClasses = [])).push(cls);
    addClass(el, cls);

    globalSpace = globalSpace - 1;
  }

  function removeTransitionClass(el, cls) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ removeTransitionClass ------------");

    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);

    globalSpace = globalSpace - 1;
  }

  function whenTransitionEnds(el, expectedType, cb) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ removeTransitionClass ------------");

    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      globalSpace = globalSpace - 1;
      return cb()
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function() {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);

    globalSpace = globalSpace - 1;
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getTransitionInfo ------------");

    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);

    globalSpace = globalSpace - 1;
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout(delays, durations) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getTimeout ------------");

    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    globalSpace = globalSpace - 1;
    return Math.max.apply(null, durations.map(function(d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  function toMs(s) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ toMs ------------");
    globalSpace = globalSpace - 1;

    return Number(s.slice(0, -1)) * 1000

  }



  function enter(vnode, toggleDisplay) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ enter ------------");

    var el = vnode.elm;

    // call leave callback now
    if (isNotEmpty(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      globalSpace = globalSpace - 1;
      return
    }

    /* istanbul ignore if */
    if (isNotEmpty(el._enterCb) || el.nodeType !== 1) {
      globalSpace = globalSpace - 1;
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      globalSpace = globalSpace - 1;
      return
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
    var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
    var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
    var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration) ? duration.enter : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function() {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function() {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function() {
        addTransitionClass(el, toClass);
        removeTransitionClass(el, startClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }

    globalSpace = globalSpace - 1;
  }

  function leave(vnode, rm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ leave ------------");

    var el = vnode.elm;

    // call enter callback now
    if (isNotEmpty(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      globalSpace = globalSpace - 1;
      return rm()
    }

    /* istanbul ignore if */
    if (isNotEmpty(el._leaveCb) || el.nodeType !== 1) {
      globalSpace = globalSpace - 1;
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration) ? duration.leave : duration
    );

    if (isNotEmpty(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function() {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ performLeave ------------");

      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        globalSpace = globalSpace - 1;
        return
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function() {
          addTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled && !userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }

      globalSpace = globalSpace - 1;
    }

    globalSpace = globalSpace - 1;
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkDuration ------------");

    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
    globalSpace = globalSpace - 1;
  }

  function isValidDuration(val) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isValidDuration ------------");
    globalSpace = globalSpace - 1;

    return typeof val === 'number' && !isNaN(val)

  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getHookArgumentsLength ------------");
    globalSpace = globalSpace - 1;

    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isNotEmpty(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns) ? invokerFns[0] : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }

  }

  function _enter(_, vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ _enter ------------");

    if (vnode.data.show !== true) {
      enter(vnode);
    }
    globalSpace = globalSpace - 1;
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];



  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({
    nodeOps: nodeOps,
    modules: modules
  });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function() {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var model$1 = {
    inserted: function inserted(el, binding, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ inserted ------------");

      if (vnode.tag === 'select') {
        var cb = function() {
          setSelected(el, binding, vnode.context);
        };
        cb();
        /* istanbul ignore if */
        if (isIE || isEdge) {
          setTimeout(cb, 0);
        }
      } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          if (!isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }

      globalSpace = globalSpace - 1;
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ componentUpdated ------------");

      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var needReset = el.multiple ? binding.value.some(function(v) {
          return hasNoMatchingOption(v, el.options);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
        if (needReset) {
          trigger(el, 'change');
        }
      }

      globalSpace = globalSpace - 1;
    }
  };

  function setSelected(el, binding, vm) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ setSelected ------------");

    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );

      globalSpace = globalSpace - 1;
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          globalSpace = globalSpace - 1;
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }

    globalSpace = globalSpace - 1;
  }

  function hasNoMatchingOption(value, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ hasNoMatchingOption ------------");

    for (var i = 0, l = options.length; i < l; i++) {
      if (looseEqual(getValue(options[i]), value)) {
        globalSpace = globalSpace - 1;
        return false
      }
    }
    globalSpace = globalSpace - 1;
    return true
  }

  function getValue(option) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getValue ------------");
    globalSpace = globalSpace - 1;

    return '_value' in option ? option._value : option.value

  }

  function onCompositionStart(e) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ onCompositionStart ------------");
    globalSpace = globalSpace - 1;

    e.target.composing = true;

  }

  function onCompositionEnd(e) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ onCompositionEnd ------------");
    globalSpace = globalSpace - 1;

    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return
    }
    e.target.composing = false;
    trigger(e.target, 'input');

  }

  function trigger(el, type) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ trigger ------------");

    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);

    globalSpace = globalSpace - 1;
  }



  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ locateNode ------------");
    globalSpace = globalSpace - 1;

    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode

  }

  var show = {
    bind: function bind(el, ref, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ bind ------------");

      var value = ref.value;

      vnode = locateNode(vnode);
      var transition = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition && !isIE9) {
        vnode.data.show = true;
        enter(vnode, function() {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }

      globalSpace = globalSpace - 1;
    },

    update: function update(el, ref, vnode) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ update ------------");

      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (value === oldValue) {
        globalSpace = globalSpace - 1;
        return
      }
      vnode = locateNode(vnode);
      var transition = vnode.data && vnode.data.transition;
      if (transition && !isIE9) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function() {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function() {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }

      globalSpace = globalSpace - 1;
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ unbind ------------");
      globalSpace = globalSpace - 1;

      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: model$1,
    show: show
  };



  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getRealChild ------------");
    globalSpace = globalSpace - 1;

    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }

  }

  function extractTransitionData(comp) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ extractTransitionData ------------");

    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }

    globalSpace = globalSpace - 1;
    return data

  }

  function placeholder(h, rawChild) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ placeholder ------------");

    if (/\d-keep-alive$/.test(rawChild.tag)) {

      globalSpace = globalSpace - 1;
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }

    globalSpace = globalSpace - 1;
  }

  function hasParentTransition(vnode) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ hasParentTransition ------------");

    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        globalSpace = globalSpace - 1;
        return true
      }
    }

    globalSpace = globalSpace - 1;
  }

  function isSameChild(child, oldChild) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isSameChild ------------");
    globalSpace = globalSpace - 1;

    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "Transition ------------ render ------------");

      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        globalSpace = globalSpace - 1;
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function(c) {
        return c.tag;
      });
      /* istanbul ignore if */
      if (!children.length) {
        globalSpace = globalSpace - 1;
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (
        mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        globalSpace = globalSpace - 1;
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        globalSpace = globalSpace - 1;
        return rawChild
      }

      if (this._leaving) {
        globalSpace = globalSpace - 1;
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key) : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function(d) {
          return d.name === 'show';
        })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild && (oldChild.data.transition = extend({}, data));
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function() {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });

          globalSpace = globalSpace - 1;
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          var delayedLeave;
          var performLeave = function() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function(leave) {
            delayedLeave = leave;
          });
        }
      }

      globalSpace = globalSpace - 1;
      return rawChild

    }
  };



  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final desired state. This way in the second pass removed
  // nodes will remain where they should be.

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "TransitionGroup ------------ render ------------");

      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;
            (c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      globalSpace = globalSpace - 1;
      return h(tag, null, children)

    },

    beforeUpdate: function beforeUpdate() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "TransitionGroup ------------ beforeUpdate ------------");

      // force removing pass
      this.__patch__(
        this._vnode,
        this.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this._vnode = this.kept;

      globalSpace = globalSpace - 1;
    },

    updated: function updated() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "TransitionGroup ------------ updated ------------");

      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        globalSpace = globalSpace - 1;
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      var body = document.body;
      var f = body.offsetHeight; // eslint-disable-line

      children.forEach(function(c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {

            setStartSpace();
            if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ cb ------------");

            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });

      globalSpace = globalSpace - 1;
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "TransitionGroup ------------ hasMove ------------");

        /* istanbul ignore if */
        if (!hasTransition) {
          globalSpace = globalSpace - 1;
          return false
        }
        if (this._hasMove != null) {
          globalSpace = globalSpace - 1;
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function(cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);

        globalSpace = globalSpace - 1;
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs(c) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ callPendingCbs ------------");

    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }

    globalSpace = globalSpace - 1;
  }

  function recordPosition(c) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ recordPosition ------------");

    c.data.newPos = c.elm.getBoundingClientRect();

    globalSpace = globalSpace - 1;
  }

  function applyTranslation(c) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ applyTranslation ------------");

    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }

    globalSpace = globalSpace - 1;
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };



  // install platform specific utils
  Vue$3.config.mustUseProp = mustUseProp;
  Vue$3.config.isReservedTag = isReservedTag;
  Vue$3.config.isReservedAttr = isReservedAttr;
  Vue$3.config.getTagNamespace = getTagNamespace;
  Vue$3.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue$3.options.directives, platformDirectives);
  extend(Vue$3.options.components, platformComponents);

  // install platform patch function
  Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue$3.prototype.$mount = function(el, hydrating) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ $mount ------------");
    globalSpace = globalSpace - 1;

    el = el && inBrowser ? query(el) : undefined;

    return mountComponent(this, el, hydrating)
  };

  // check whether current browser encodes a char inside attribute values
  function shouldDecode(content, encoded) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ shouldDecode ------------");

    var div = document.createElement('div');
    div.innerHTML = "<div a=\"" + content + "\">";

    globalSpace = globalSpace - 1;
    return div.innerHTML.indexOf(encoded) > 0
  }

  // #3663
  // IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;



  var isUnaryTag = makeMap("isUnaryTag",
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap("canBeLeftOpenTag",
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap("isNonPhrasingTag",
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );



  var decoder;

  function decode(html) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ decode ------------");

    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;

    globalSpace = globalSpace - 1;
    return decoder.textContent

  }

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var singleAttrIdentifier = /([^\s"'<>/=]+)/;
  var singleAttrAssign = /(?:=)/;
  var singleAttrValues = [
    // attr value double quotes
    /"([^"]*)"+/.source,
    // attr value, single quotes
    /'([^']*)'+/.source,
    // attr value, no quotes
    /([^\s"'=<>`]+)/.source
  ];
  var attribute = new RegExp(
    '^\\s*' + singleAttrIdentifier.source +
    '(?:\\s*(' + singleAttrAssign.source + ')' +
    '\\s*(?:' + singleAttrValues.join('|') + '))?'
  );

  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
  var startTagOpen = new RegExp('^<' + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
  var doctype = /^<!DOCTYPE [^>]+>/i;
  var comment = /^<!--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function(m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap("isPlainTextElement", 'script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

  function decodeAttr(value, shouldDecodeNewlines) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ decodeAttr ------------");

    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;

    globalSpace = globalSpace - 1;
    return value.replace(re, function(match) {
      return decodingMap[match];
    })
  }

  function parseHTML(html, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseHTML ------------");

    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            continue
          }
        }

        var text = (void 0),
          rest$1 = (void 0),
          next = (void 0);
        if (textEnd >= 0) {
          rest$1 = html.slice(textEnd);
          while (!endTag.test(rest$1) &&
            !startTagOpen.test(rest$1) &&
            !comment.test(rest$1) &&
            !conditionalComment.test(rest$1)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest$1.indexOf('<', 1);
            if (next < 0) {
              break
            }
            textEnd += next;
            rest$1 = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var endTagLength = 0;
        var rest = html.replace(reStackedTag, function(all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!--([\s\S]*?)-->/g, '$1')
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (options.chars) {
            options.chars(text);
          }

          globalSpace = globalSpace - 1;
          return ''
        });
        index += html.length - rest.length;
        html = rest;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ advance ------------");

      index += n;
      html = html.substring(n);

      globalSpace = globalSpace - 1;
    }

    function parseStartTag() {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseStartTag ------------");

      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;

          globalSpace = globalSpace - 1;
          return match
        }
      }

      globalSpace = globalSpace - 1;
    }

    function handleStartTag(match) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ handleStartTag ------------");

      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        attrs[i] = {
          name: args[1],
          value: decodeAttr(
            value,
            options.shouldDecodeNewlines
          )
        };
      }

      if (!unary) {
        stack.push({
          tag: tagName,
          lowerCasedTag: tagName.toLowerCase(),
          attrs: attrs
        });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }

      globalSpace = globalSpace - 1;
    }

    function parseEndTag(tagName, start, end) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseEndTag ------------");

      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (
            (i > pos || !tagName) &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag.")
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }

      globalSpace = globalSpace - 1;
    }

    globalSpace = globalSpace - 1;

  }



  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function(delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  }, "buildRegex");

  function parseText(text, delimiters) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseText ------------");

    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {

      globalSpace = globalSpace - 1;
      return
    }
    var tokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }

    globalSpace = globalSpace - 1;
    return tokens.join('+')
  }



  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
  var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(decode, "decodeHTMLCached");

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parse ------------");


    warn$2 = options.warn || baseWarn;
    platformGetTagNamespace = options.getTagNamespace || no;
    platformMustUseProp = options.mustUseProp || no;
    platformIsPreTag = options.isPreTag || no;
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ warnOnce ------------");

      if (!warned) {
        warned = true;
        warn$2(msg);
      }

      globalSpace = globalSpace - 1;
    }

    function endPre(element) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ endPre ------------");

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }

      globalSpace = globalSpace - 1;
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      start: function start(tag, attrs, unary) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ start ------------");

        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = {
          type: 1,
          tag: tag,
          attrsList: attrs,
          attrsMap: makeAttrsMap(attrs),
          parent: currentParent,
          children: []
        };
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element)) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.'
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          preTransforms[i](element, options);
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else {
          processFor(element);
          processIf(element);
          processOnce(element);
          processKey(element);

          // determine whether this is a plain element after
          // removing structural attributes
          element.plain = !element.key && !attrs.length;

          processRef(element);
          processSlot(element);
          processComponent(element);
          for (var i$1 = 0; i$1 < transforms.length; i$1++) {
            transforms[i$1](element, options);
          }
          processAttrs(element);
        }

        function checkRootConstraints(el) {

          setStartSpace();
          if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkRootConstraints ------------");


          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }

          globalSpace = globalSpace - 1;
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce(
              "Component template should contain exactly one root element. " +
              "If you are using v-if on multiple elements, " +
              "use v-else-if to chain them instead."
            );
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) { // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"';
            (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          endPre(element);
        }
        // apply post-transforms
        for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
          postTransforms[i$2](element, options);
        }

        globalSpace = globalSpace - 1;
      },

      end: function end() {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ end ------------");

        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        endPre(element);

        globalSpace = globalSpace - 1;
      },

      chars: function chars(text) {

        setStartSpace();
        if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ chars ------------");

        if (!currentParent) {

          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }

          globalSpace = globalSpace - 1;
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {

          globalSpace = globalSpace - 1;
          return
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
          // only preserve whitespace if its not right after a starting tag
          : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var expression;
          if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: expression,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }


        globalSpace = globalSpace - 1;
      }
    });
    globalSpace = globalSpace - 1;
    return root
  }

  function processPre(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processPre ------------");

    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
    globalSpace = globalSpace - 1;
  }

  function processRawAttrs(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processRawAttrs ------------");

    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
    globalSpace = globalSpace - 1;
  }

  function processKey(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processKey ------------");

    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }

    globalSpace = globalSpace - 1;
  }

  function processRef(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processRef ------------");

    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }

    globalSpace = globalSpace - 1;
  }

  function processFor(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processFor ------------");

    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var inMatch = exp.match(forAliasRE);
      if (!inMatch) {
        warn$2(
          ("Invalid v-for expression: " + exp)
        );
        globalSpace = globalSpace - 1;
        return
      }
      el.for = inMatch[2].trim();
      var alias = inMatch[1].trim();
      var iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
        el.alias = iteratorMatch[1].trim();
        el.iterator1 = iteratorMatch[2].trim();
        if (iteratorMatch[3]) {
          el.iterator2 = iteratorMatch[3].trim();
        }
      } else {
        el.alias = alias;
      }
    }

    globalSpace = globalSpace - 1;
  }

  function processIf(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processIf ------------");

    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }

    globalSpace = globalSpace - 1;
  }

  function processIfConditions(el, parent) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processIfConditions ------------");

    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if."
      );
    }
    globalSpace = globalSpace - 1;
  }

  function findPrevElement(children) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ findPrevElement ------------");

    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        globalSpace = globalSpace - 1;
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored."
          );
        }
        children.pop();
      }
    }

    globalSpace = globalSpace - 1;
  }

  function addIfCondition(el, condition) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ addIfCondition ------------");

    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
    globalSpace = globalSpace - 1;
  }

  function processOnce(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processOnce ------------");

    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }

    globalSpace = globalSpace - 1;
  }

  function processSlot(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processSlot ------------");

    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead."
        );
      }
    } else {
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      }
      if (el.tag === 'template') {
        el.slotScope = getAndRemoveAttr(el, 'scope');
      }
    }

    globalSpace = globalSpace - 1;
  }

  function processComponent(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processComponent ------------");

    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }

    globalSpace = globalSpace - 1;
  }

  function processAttrs(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ processAttrs ------------");

    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                genAssignmentCode(value, "$event")
              );
            }
          }
          if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var expression = parseText(value, delimiters);
          if (expression) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.'
            );
          }
        }
        addAttr(el, name, JSON.stringify(value));
      }
    }

    globalSpace = globalSpace - 1;
  }

  function checkInFor(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkInFor ------------");
    globalSpace = globalSpace - 1;

    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false

  }

  function parseModifiers(name) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ parseModifiers ------------");

    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function(m) {
        ret[m.slice(1)] = true;
      });
      globalSpace = globalSpace - 1;
      return ret
    }

    globalSpace = globalSpace - 1;
  }

  function makeAttrsMap(attrs) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ makeAttrsMap ------------");

    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (

        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    globalSpace = globalSpace - 1;
    return map

  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isTextTag ------------");
    globalSpace = globalSpace - 1;

    return el.tag === 'script' || el.tag === 'style'

  }

  function isForbiddenTag(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isForbiddenTag ------------");
    globalSpace = globalSpace - 1;

    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (!el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )

  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ guardIESVGBug ------------");

    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }

    globalSpace = globalSpace - 1;
    return res

  }

  function checkForAliasModel(el, value) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkForAliasModel ------------");

    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead."
        );
      }
      _el = _el.parent;
    }

    globalSpace = globalSpace - 1;
  }



  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1, "genStaticKeysCached");

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ optimize ------------");

    if (!root) {
      globalSpace = globalSpace - 1;
      return
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);

    globalSpace = globalSpace - 1;
  }

  function genStaticKeys$1(keys) {
    return makeMap("genStaticKeys$1",
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ markStatic$1 ------------");

    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        globalSpace = globalSpace - 1;
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
    }

    globalSpace = globalSpace - 1;
  }

  function markStaticRoots(node, isInFor) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ markStaticRoots ------------");

    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;

        globalSpace = globalSpace - 1;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        walkThroughConditionsBlocks(node.ifConditions, isInFor);
      }
    }

    globalSpace = globalSpace - 1;
  }

  function walkThroughConditionsBlocks(conditionBlocks, isInFor) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ walkThroughConditionsBlocks ------------");

    for (var i = 1, len = conditionBlocks.length; i < len; i++) {
      markStaticRoots(conditionBlocks[i].block, isInFor);
    }

    globalSpace = globalSpace - 1;
  }

  function isStatic(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isStatic ------------");
    globalSpace = globalSpace - 1;

    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (!node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))

  }

  function isDirectChildOfTemplateFor(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ isDirectChildOfTemplateFor ------------");
    globalSpace = globalSpace - 1;

    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false

  }



  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function(condition) {
    return ("if(" + condition + ")return null;");
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative, warn) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genHandlers ------------");

    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      var handler = events[name];
      // #5330: warn click.right, since right clicks do not actually fire click events.
      if (
        name === 'click' &&
        handler && handler.modifiers && handler.modifiers.right
      ) {
        warn(
          "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
          "do not actually fire \"click\" events."
        );
      }
      res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
    }

    globalSpace = globalSpace - 1;
    return res.slice(0, -1) + '}'
  }

  function genHandler(name, handler) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genHandler ------------");

    if (!handler) {

      globalSpace = globalSpace - 1;
      return 'function(){}'
    }

    if (Array.isArray(handler)) {

      globalSpace = globalSpace - 1;
      return ("[" + (handler.map(function(handler) {
        return genHandler(name, handler);
      }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {

      globalSpace = globalSpace - 1;
      return isMethodPath || isFunctionExpression ? handler.value : ("function($event){" + (handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? ("(" + (handler.value) + ")($event)") : handler.value;

      globalSpace = globalSpace - 1;
      return ("function($event){" + code + handlerCode + "}")
    }

    globalSpace = globalSpace - 1;
  }

  function genKeyFilter(keys) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genKeyFilter ------------");
    globalSpace = globalSpace - 1;

    return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")

  }

  function genFilterCode(key) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genFilterCode ------------");

    var keyVal = parseInt(key, 10);
    if (keyVal) {
      globalSpace = globalSpace - 1;
      return ("$event.keyCode!==" + keyVal)
    }
    var alias = keyCodes[key];

    globalSpace = globalSpace - 1;
    return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")

  }



  function bind$1(el, dir) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ bind$1 ------------");
    globalSpace = globalSpace - 1;

    el.wrapData = function(code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
    };
  }



  var baseDirectives = {
    bind: bind$1,
    cloak: noop
  };



  // configurable state
  var warn$3;
  var transforms$1;
  var dataGenFns;
  var platformDirectives$1;
  var isPlatformReservedTag$1;
  var staticRenderFns;
  var onceCount;
  var currentOptions;

  function generate(ast, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ generate ------------");

    // save previous staticRenderFns so generate calls can be nested
    var prevStaticRenderFns = staticRenderFns;
    var currentStaticRenderFns = staticRenderFns = [];
    var prevOnceCount = onceCount;
    onceCount = 0;
    currentOptions = options;
    warn$3 = options.warn || baseWarn;
    transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
    dataGenFns = pluckModuleFunction(options.modules, 'genData');
    platformDirectives$1 = options.directives || {};
    isPlatformReservedTag$1 = options.isReservedTag || no;
    var code = ast ? genElement(ast) : '_c("div")';
    staticRenderFns = prevStaticRenderFns;
    onceCount = prevOnceCount;

    globalSpace = globalSpace - 1;
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: currentStaticRenderFns
    }
  }

  function genElement(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genElement ------------");


    if (el.staticRoot && !el.staticProcessed) {

      globalSpace = globalSpace - 1;
      return genStatic(el)
    } else if (el.once && !el.onceProcessed) {

      globalSpace = globalSpace - 1;
      return genOnce(el)
    } else if (el.for && !el.forProcessed) {

      globalSpace = globalSpace - 1;
      return genFor(el)
    } else if (el.if && !el.ifProcessed) {

      globalSpace = globalSpace - 1;
      return genIf(el)
    } else if (el.tag === 'template' && !el.slotTarget) {

      globalSpace = globalSpace - 1;
      return genChildren(el) || 'void 0'
    } else if (el.tag === 'slot') {

      globalSpace = globalSpace - 1;
      return genSlot(el)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el);
      } else {
        var data = el.plain ? undefined : genData(el);

        var children = el.inlineTemplate ? null : genChildren(el, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < transforms$1.length; i++) {
        code = transforms$1[i](el, code);
      }

      globalSpace = globalSpace - 1;
      return code
    }

    globalSpace = globalSpace - 1;
  }

  // hoist static sub-trees out
  function genStatic(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genStatic ------------");

    el.staticProcessed = true;
    staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));

    globalSpace = globalSpace - 1;
    return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")

  }

  // v-once
  function genOnce(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genOnce ------------");
    globalSpace = globalSpace - 1;

    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        warn$3(
          "v-once can only be used inside v-for that is keyed. "
        );
        return genElement(el)
      }
      return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
    } else {
      return genStatic(el)
    }

  }

  function genIf(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genIf ------------");
    globalSpace = globalSpace - 1;

    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice())

  }

  function genIfConditions(conditions) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genIfConditions ------------");
    globalSpace = globalSpace - 1;

    if (!conditions.length) {
      return '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genTernaryExp ------------");

      return el.once ? genOnce(el) : genElement(el)
    }

  }

  function genFor(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genFor ------------");
    globalSpace = globalSpace - 1;

    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (

      maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key
    ) {
      warn$3(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
      '})'

  }

  function genData(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genData ------------");

    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < dataGenFns.length; i++) {
      data += dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + (genProps(el.attrs)) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + (genProps(el.props)) + "},";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false, warn$3)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true, warn$3)) + ",";
    }
    // slot target
    if (el.slotTarget) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el.scopedSlots)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }

    globalSpace = globalSpace - 1;
    return data

  }

  function genDirectives(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genDirectives ------------");

    var dirs = el.directives;
    if (!dirs) {
      globalSpace = globalSpace - 1;
      return
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, warn$3);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      globalSpace = globalSpace - 1;
      return res.slice(0, -1) + ']'
    }

    globalSpace = globalSpace - 1;
  }

  function genInlineTemplate(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genInlineTemplate ------------");
    globalSpace = globalSpace - 1;

    var ast = el.children[0];
    if ((
        el.children.length > 1 || ast.type !== 1
      )) {
      warn$3('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, currentOptions);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function(code) {
        return ("function(){" + code + "}");
      }).join(',')) + "]}")
    }

  }

  function genScopedSlots(slots) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genScopedSlots ------------");
    globalSpace = globalSpace - 1;

    return ("scopedSlots:_u([" + (Object.keys(slots).map(function(key) {
      return genScopedSlot(key, slots[key]);
    }).join(',')) + "])")

  }

  function genScopedSlot(key, el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genScopedSlot ------------");
    globalSpace = globalSpace - 1;

    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el)
    }
    return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
      "return " + (el.tag === 'template' ? genChildren(el) || 'void 0' : genElement(el)) + "}}"
  }

  function genForScopedSlot(key, el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genForScopedSlot ------------");
    globalSpace = globalSpace - 1;

    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el)) +
      '})'
  }

  function genChildren(el, checkSkip) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genChildren ------------");
    globalSpace = globalSpace - 1;

    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        return genElement(el$1)
      }
      var normalizationType = checkSkip ? getNormalizationType(children) : 0;
      return ("[" + (children.map(genNode).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getNormalizationType ------------");
    globalSpace = globalSpace - 1;

    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function(c) {
          return needsNormalization(c.block);
        }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function(c) {
          return maybeComponent(c.block);
        }))) {
        res = 1;
      }
    }
    return res

  }

  function needsNormalization(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ needsNormalization ------------");
    globalSpace = globalSpace - 1;

    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'

  }

  function maybeComponent(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ maybeComponent ------------");
    globalSpace = globalSpace - 1;

    return !isPlatformReservedTag$1(el.tag)

  }

  function genNode(node) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genNode ------------");
    globalSpace = globalSpace - 1;

    if (node.type === 1) {
      return genElement(node)
    } else {
      return genText(node)
    }

  }

  function genText(text) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genText ------------");
    globalSpace = globalSpace - 1;

    return ("_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")

  }

  function genSlot(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genSlot ------------");

    var slotName = el.slotName || '"default"';
    var children = genChildren(el);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs && ("{" + (el.attrs.map(function(a) {

      globalSpace = globalSpace - 1;
      return ((camelize(a.name)) + ":" + (a.value));
    }).join(',')) + "}");
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }

    globalSpace = globalSpace - 1;
    return res + ')'

  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genComponent ------------");

    var children = el.inlineTemplate ? null : genChildren(el, true);

    globalSpace = globalSpace - 1;
    return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
  }

  function genProps(props) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ genProps ------------");

    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }

    globalSpace = globalSpace - 1;
    return res.slice(0, -1)

  }

  // #3895, #4268
  function transformSpecialNewlines(text) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ transformSpecialNewlines ------------");
    globalSpace = globalSpace - 1;

    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')

  }



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // check valid identifier for v-for
  var identRE = /[A-Za-z_$][\w$]*/;

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ detectErrors ------------");

    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }

    globalSpace = globalSpace - 1;
    return errors

  }

  function checkNode(node, errors) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkNode ------------");

    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), errors);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), errors);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }

    globalSpace = globalSpace - 1;
  }

  function checkEvent(exp, text, errors) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkEvent ------------");

    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    }
    checkExpression(exp, text, errors);

    globalSpace = globalSpace - 1;
  }

  function checkFor(node, text, errors) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkFor ------------");

    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);

    globalSpace = globalSpace - 1;
  }

  function checkIdentifier(ident, type, text, errors) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkIdentifier ------------");

    if (typeof ident === 'string' && !identRE.test(ident)) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }

    globalSpace = globalSpace - 1;
  }

  function checkExpression(exp, text, errors) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkExpression ------------");

    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
        );
      } else {
        errors.push(("invalid expression: " + (text.trim())));
      }
    }

    globalSpace = globalSpace - 1;
  }



  function baseCompile(template, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ checkExpression ------------");

    var ast = parse(template.trim(), options);
    optimize(ast, options);
    var code = generate(ast, options);

    globalSpace = globalSpace - 1;
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  }

  function makeFunction(code, errors) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ makeFunction ------------");
    globalSpace = globalSpace - 1;

    try {
      return new Function(code)
    } catch (err) {
      errors.push({
        err: err,
        code: code
      });
      return noop
    }
  }

  function createCompiler(baseOptions) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ createCompiler ------------");

    var functionCompileCache = Object.create(null);

    function compile(template, options) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ compile ------------");


      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function(msg, tip$$1) {
        (tip$$1 ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions); {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;

      globalSpace = globalSpace - 1;
      return compiled
    }

    function compileToFunctions(template, options, vm) {

      setStartSpace();
      if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ compileToFunctions ------------");


      options = options || {};

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (functionCompileCache[key]) {
        globalSpace = globalSpace - 1;
        return functionCompileCache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function(e) {
              return ("- " + e);
            }).join('\n') + '\n',
            vm
          );
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function(msg) {
            globalSpace = globalSpace - 1;
            return tip(msg, vm);
          });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = makeFunction(compiled.render, fnGenErrors);
      var l = compiled.staticRenderFns.length;
      res.staticRenderFns = new Array(l);
      for (var i = 0; i < l; i++) {
        res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
      }

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function(ref) {
              var err = ref.err;
              var code = ref.code;

              globalSpace = globalSpace - 1;
              return ((err.toString()) + " in\n\n" + code + "\n");
            }).join('\n'),
            vm
          );
        }
      }

      globalSpace = globalSpace - 1;
      return (functionCompileCache[key] = res)
    }

    globalSpace = globalSpace - 1;
    return {
      compile: compile,
      compileToFunctions: compileToFunctions
    }

  }



  function transformNode(el, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ transformNode ------------");

    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var expression = parseText(staticClass, options.delimiters);
      if (expression) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.'
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */ );
    if (classBinding) {
      el.classBinding = classBinding;
    }

    globalSpace = globalSpace - 1;
  }

  function genData$1(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData$1
  };



  function transformNode$1(el, options) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ transformNode$1 ------------");

    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var expression = parseText(staticStyle, options.delimiters);
        if (expression) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.'
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */ );
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }

    globalSpace = globalSpace - 1;
  }

  function genData$2(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$2
  };

  var modules$1 = [
    klass$1,
    style$1
  ];



  function text(el, dir) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ text ------------");

    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
    }
    globalSpace = globalSpace - 1;
  }



  function html(el, dir) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ html ------------");

    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
    }
    globalSpace = globalSpace - 1;
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };



  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  var ref$1 = createCompiler(baseOptions);
  var compileToFunctions = ref$1.compileToFunctions;



  var idToTemplate = cached(function(id) {
    var el = query(id);
    return el && el.innerHTML
  }, "idToTemplate");

  var mount = Vue$3.prototype.$mount;
  Vue$3.prototype.$mount = function(el, hydrating) {


    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ $mount ------------");

    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      globalSpace = globalSpace - 1;
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }

          globalSpace = globalSpace - 1;
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {


        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          delimiters: options.delimiters
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;


      }
    }

    globalSpace = globalSpace - 1;
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {

    setStartSpace();
    if (globalSpace < globalRate) console.log(ssp + globalSpace + "-" + "------------ getOuterHTML ------------");
    globalSpace = globalSpace - 1;

    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }

  }

  Vue$3.compile = compileToFunctions;

  return Vue$3;

})));