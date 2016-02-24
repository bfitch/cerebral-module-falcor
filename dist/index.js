module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alias = __webpack_require__(2);

	var _alias2 = _interopRequireDefault(_alias);

	var _warning = __webpack_require__(3);

	var _warning2 = _interopRequireDefault(_warning);

	var _signals = __webpack_require__(4);

	var _services = __webpack_require__(350);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  return function (module, controller) {
	    module.alias(_alias2.default);

	    module.addState({
	      lastUpdated: new Date().getTime(),
	      json: {},
	      queries: {}
	    });

	    module.addSignals({
	      batchQuery: _signals.batchQuery,
	      call: _signals.call,
	      registerQuery: _signals.registerQuery,
	      unregisterQuery: _signals.unregisterQuery,
	      replaceQueries: _signals.replaceQueries
	    });

	    var fullOptions = Object.assign({
	      initialState: {},
	      dataSource: '/model.json',
	      verbose: true,
	      disableTimeout: true
	    }, options);

	    var _initializeServices = (0, _services.initializeServices)(module, fullOptions);

	    var falcorModel = _initializeServices.falcorModel;
	    var falcorServices = _initializeServices.falcorServices;

	    module.addServices(falcorServices);

	    var meta = { warning: _warning2.default, falcorModel: falcorModel };
	    return meta;
	  };
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var alias = 'cerebral-module-falcor';
	exports.default = alias;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var warning = 'Falcor module is super experimental, use at your own risk!';
	exports.default = warning;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceQueries = exports.unregisterQuery = exports.registerQuery = exports.call = exports.batchQuery = undefined;

	var _batchQuery = __webpack_require__(5);

	var _batchQuery2 = _interopRequireDefault(_batchQuery);

	var _call = __webpack_require__(331);

	var _call2 = _interopRequireDefault(_call);

	var _registerQuery = __webpack_require__(333);

	var _registerQuery2 = _interopRequireDefault(_registerQuery);

	var _unregisterQuery = __webpack_require__(346);

	var _unregisterQuery2 = _interopRequireDefault(_unregisterQuery);

	var _replaceQueries = __webpack_require__(348);

	var _replaceQueries2 = _interopRequireDefault(_replaceQueries);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.batchQuery = _batchQuery2.default;
	exports.call = _call2.default;
	exports.registerQuery = _registerQuery2.default;
	exports.unregisterQuery = _unregisterQuery2.default;
	exports.replaceQueries = _replaceQueries2.default;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(6);

	var _cerebralAddons = __webpack_require__(196);

	var _batchQuery = __webpack_require__(314);

	var _batchQuery2 = _interopRequireDefault(_batchQuery);

	var _alias = __webpack_require__(2);

	var _alias2 = _interopRequireDefault(_alias);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var batchQuery = [(0, _cerebralAddons.set)('state:/falcor.lastUpdated', new Date().getTime()), [_batchQuery2.default, {
	  success: [function (_ref) {
	    var input = _ref.input;
	    var modules = _ref.modules;
	    var state = _ref.state;
	    var json = input.json;
	    var optimizedQuery = input.optimizedQuery;

	    var falcorModule = modules[_alias2.default];
	    var falcorState = state.select(falcorModule.path);
	    falcorState.merge({ json: json, optimizedQuery: optimizedQuery });
	  }],
	  error: [function (e) {
	    console.error(e);
	    debugger;
	  }]
	}]];
	exports.default = batchQuery;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(7);

	__webpack_require__(194);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(41);
	__webpack_require__(47);
	__webpack_require__(49);
	__webpack_require__(51);
	__webpack_require__(53);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(127);
	__webpack_require__(129);
	__webpack_require__(131);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(150);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(189);
	__webpack_require__(192);
	__webpack_require__(193);
	module.exports = __webpack_require__(12);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(9)
	  , $export           = __webpack_require__(10)
	  , DESCRIPTORS       = __webpack_require__(15)
	  , createDesc        = __webpack_require__(14)
	  , html              = __webpack_require__(21)
	  , cel               = __webpack_require__(22)
	  , has               = __webpack_require__(24)
	  , cof               = __webpack_require__(25)
	  , invoke            = __webpack_require__(26)
	  , fails             = __webpack_require__(16)
	  , anObject          = __webpack_require__(27)
	  , aFunction         = __webpack_require__(20)
	  , isObject          = __webpack_require__(23)
	  , toObject          = __webpack_require__(28)
	  , toIObject         = __webpack_require__(30)
	  , toInteger         = __webpack_require__(32)
	  , toIndex           = __webpack_require__(33)
	  , toLength          = __webpack_require__(34)
	  , IObject           = __webpack_require__(31)
	  , IE_PROTO          = __webpack_require__(18)('__proto__')
	  , createArrayMethod = __webpack_require__(35)
	  , arrayIndexOf      = __webpack_require__(40)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;

	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});

	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;

	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(37)});

	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};

	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};

	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , hide      = __webpack_require__(13)
	  , redefine  = __webpack_require__(17)
	  , ctx       = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(9)
	  , createDesc = __webpack_require__(14);
	module.exports = __webpack_require__(15) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , SRC       = __webpack_require__(18)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(12).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(29);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(29);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(19)
	  , IObject  = __webpack_require__(31)
	  , toObject = __webpack_require__(28)
	  , toLength = __webpack_require__(34)
	  , asc      = __webpack_require__(36);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(23)
	  , isArray  = __webpack_require__(37)
	  , SPECIES  = __webpack_require__(38)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(25);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(39)('wks')
	  , uid    = __webpack_require__(18)
	  , Symbol = __webpack_require__(11).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(34)
	  , toIndex   = __webpack_require__(33);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(9)
	  , global         = __webpack_require__(11)
	  , has            = __webpack_require__(24)
	  , DESCRIPTORS    = __webpack_require__(15)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(17)
	  , $fails         = __webpack_require__(16)
	  , shared         = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(42)
	  , uid            = __webpack_require__(18)
	  , wks            = __webpack_require__(38)
	  , keyOf          = __webpack_require__(43)
	  , $names         = __webpack_require__(44)
	  , enumKeys       = __webpack_require__(45)
	  , isArray        = __webpack_require__(37)
	  , anObject       = __webpack_require__(27)
	  , toIObject      = __webpack_require__(30)
	  , createDesc     = __webpack_require__(14)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(46)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(9).setDesc
	  , has = __webpack_require__(24)
	  , TAG = __webpack_require__(38)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(9)
	  , toIObject = __webpack_require__(30);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(30)
	  , getNames  = __webpack_require__(9).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(9);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(48)});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(9)
	  , toObject = __webpack_require__(28)
	  , IObject  = __webpack_require__(31);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(16)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {is: __webpack_require__(50)});

/***/ },
/* 50 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(52).set});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(9).getDesc
	  , isObject = __webpack_require__(23)
	  , anObject = __webpack_require__(27);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(19)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(54)
	  , test    = {};
	test[__webpack_require__(38)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(17)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(25)
	  , TAG = __webpack_require__(38)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(23);

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10)
	  , core    = __webpack_require__(12)
	  , fails   = __webpack_require__(16);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(23);

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(23);

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(23);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(23);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(23);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(30);

	__webpack_require__(56)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(28);

	__webpack_require__(56)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(28);

	__webpack_require__(56)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(44).get;
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(9).setDesc
	  , createDesc = __webpack_require__(14)
	  , has        = __webpack_require__(24)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(15) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(9)
	  , isObject      = __webpack_require__(23)
	  , HAS_INSTANCE  = __webpack_require__(38)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(9)
	  , global      = __webpack_require__(11)
	  , has         = __webpack_require__(24)
	  , cof         = __webpack_require__(25)
	  , toPrimitive = __webpack_require__(69)
	  , fails       = __webpack_require__(16)
	  , $trim       = __webpack_require__(70).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(15) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(17)(global, NUMBER, $Number);
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , defined = __webpack_require__(29)
	  , fails   = __webpack_require__(16)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(10)
	  , _isFinite = __webpack_require__(11).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {isInteger: __webpack_require__(74)});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(23)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(10)
	  , isInteger = __webpack_require__(74)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(10)
	  , log1p   = __webpack_require__(82)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(10);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(10)
	  , sign    = __webpack_require__(86);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(10)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {expm1: __webpack_require__(90)});

/***/ },
/* 90 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(10)
	  , sign      = __webpack_require__(86)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(10)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(10)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(16)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {log1p: __webpack_require__(82)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {sign: __webpack_require__(86)});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(10)
	  , expm1   = __webpack_require__(90)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(16)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(10)
	  , expm1   = __webpack_require__(90)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(10)
	  , toIndex        = __webpack_require__(33)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(10)
	  , toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(34);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(70)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(105)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(106)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32)
	  , defined   = __webpack_require__(29);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(46)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(17)
	  , hide           = __webpack_require__(13)
	  , has            = __webpack_require__(24)
	  , Iterators      = __webpack_require__(107)
	  , $iterCreate    = __webpack_require__(108)
	  , setToStringTag = __webpack_require__(42)
	  , getProto       = __webpack_require__(9).getProto
	  , ITERATOR       = __webpack_require__(38)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(9)
	  , descriptor     = __webpack_require__(14)
	  , setToStringTag = __webpack_require__(42)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(38)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $at     = __webpack_require__(105)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(10)
	  , toLength  = __webpack_require__(34)
	  , context   = __webpack_require__(111)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(113)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(112)
	  , defined  = __webpack_require__(29);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(23)
	  , cof      = __webpack_require__(25)
	  , MATCH    = __webpack_require__(38)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(38)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(10)
	  , context  = __webpack_require__(111)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(113)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(116)
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(32)
	  , defined   = __webpack_require__(29);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(10)
	  , toLength    = __webpack_require__(34)
	  , context     = __webpack_require__(111)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(113)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(19)
	  , $export     = __webpack_require__(10)
	  , toObject    = __webpack_require__(28)
	  , call        = __webpack_require__(119)
	  , isArrayIter = __webpack_require__(120)
	  , toLength    = __webpack_require__(34)
	  , getIterFn   = __webpack_require__(121);
	$export($export.S + $export.F * !__webpack_require__(122)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(27);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(107)
	  , ITERATOR   = __webpack_require__(38)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(38)('iterator')
	  , Iterators = __webpack_require__(107);
	module.exports = __webpack_require__(12).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(38)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(16)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(125)
	  , step             = __webpack_require__(126)
	  , Iterators        = __webpack_require__(107)
	  , toIObject        = __webpack_require__(30);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(106)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(38)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128)('Array');

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(11)
	  , $           = __webpack_require__(9)
	  , DESCRIPTORS = __webpack_require__(15)
	  , SPECIES     = __webpack_require__(38)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(10);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(130)});

	__webpack_require__(125)('copyWithin');

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(28)
	  , toIndex  = __webpack_require__(33)
	  , toLength = __webpack_require__(34);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(10);

	$export($export.P, 'Array', {fill: __webpack_require__(132)});

	__webpack_require__(125)('fill');

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(28)
	  , toIndex  = __webpack_require__(33)
	  , toLength = __webpack_require__(34);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(10)
	  , $find   = __webpack_require__(35)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(125)(KEY);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(10)
	  , $find   = __webpack_require__(35)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(125)(KEY);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(9)
	  , global   = __webpack_require__(11)
	  , isRegExp = __webpack_require__(112)
	  , $flags   = __webpack_require__(136)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;

	if(__webpack_require__(15) && (!CORRECT_NEW || __webpack_require__(16)(function(){
	  re2[__webpack_require__(38)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(17)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(128)('RegExp');

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(27);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(9);
	if(__webpack_require__(15) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(136)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(139)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(13)
	  , redefine = __webpack_require__(17)
	  , fails    = __webpack_require__(16)
	  , defined  = __webpack_require__(29)
	  , wks      = __webpack_require__(38);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(139)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(139)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(139)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(9)
	  , LIBRARY    = __webpack_require__(46)
	  , global     = __webpack_require__(11)
	  , ctx        = __webpack_require__(19)
	  , classof    = __webpack_require__(54)
	  , $export    = __webpack_require__(10)
	  , isObject   = __webpack_require__(23)
	  , anObject   = __webpack_require__(27)
	  , aFunction  = __webpack_require__(20)
	  , strictNew  = __webpack_require__(144)
	  , forOf      = __webpack_require__(145)
	  , setProto   = __webpack_require__(52).set
	  , same       = __webpack_require__(50)
	  , SPECIES    = __webpack_require__(38)('species')
	  , speciesConstructor = __webpack_require__(146)
	  , asap       = __webpack_require__(147)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(15)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(149)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(42)(P, PROMISE);
	__webpack_require__(128)(PROMISE);
	Wrapper = __webpack_require__(12)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(122)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(19)
	  , call        = __webpack_require__(119)
	  , isArrayIter = __webpack_require__(120)
	  , anObject    = __webpack_require__(27)
	  , toLength    = __webpack_require__(34)
	  , getIterFn   = __webpack_require__(121);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(27)
	  , aFunction = __webpack_require__(20)
	  , SPECIES   = __webpack_require__(38)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , macrotask = __webpack_require__(148).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(25)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(19)
	  , invoke             = __webpack_require__(26)
	  , html               = __webpack_require__(21)
	  , cel                = __webpack_require__(22)
	  , global             = __webpack_require__(11)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(25)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(17);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(151);

	// 23.1 Map Objects
	__webpack_require__(152)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(9)
	  , hide         = __webpack_require__(13)
	  , redefineAll  = __webpack_require__(149)
	  , ctx          = __webpack_require__(19)
	  , strictNew    = __webpack_require__(144)
	  , defined      = __webpack_require__(29)
	  , forOf        = __webpack_require__(145)
	  , $iterDefine  = __webpack_require__(106)
	  , step         = __webpack_require__(126)
	  , ID           = __webpack_require__(18)('id')
	  , $has         = __webpack_require__(24)
	  , isObject     = __webpack_require__(23)
	  , setSpecies   = __webpack_require__(128)
	  , DESCRIPTORS  = __webpack_require__(15)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(11)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(17)
	  , redefineAll    = __webpack_require__(149)
	  , forOf          = __webpack_require__(145)
	  , strictNew      = __webpack_require__(144)
	  , isObject       = __webpack_require__(23)
	  , fails          = __webpack_require__(16)
	  , $iterDetect    = __webpack_require__(122)
	  , setToStringTag = __webpack_require__(42);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(151);

	// 23.2 Set Objects
	__webpack_require__(152)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(9)
	  , redefine     = __webpack_require__(17)
	  , weak         = __webpack_require__(155)
	  , isObject     = __webpack_require__(23)
	  , has          = __webpack_require__(24)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(152)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(13)
	  , redefineAll       = __webpack_require__(149)
	  , anObject          = __webpack_require__(27)
	  , isObject          = __webpack_require__(23)
	  , strictNew         = __webpack_require__(144)
	  , forOf             = __webpack_require__(145)
	  , createArrayMethod = __webpack_require__(35)
	  , $has              = __webpack_require__(24)
	  , WEAK              = __webpack_require__(18)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(155);

	// 23.4 WeakSet Objects
	__webpack_require__(152)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(10)
	  , _apply  = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(9)
	  , $export   = __webpack_require__(10)
	  , aFunction = __webpack_require__(20)
	  , anObject  = __webpack_require__(27)
	  , isObject  = __webpack_require__(23)
	  , bind      = Function.bind || __webpack_require__(12).Function.prototype.bind;

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(16)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(9)
	  , $export  = __webpack_require__(10)
	  , anObject = __webpack_require__(27);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(16)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(10)
	  , getDesc  = __webpack_require__(9).getDesc
	  , anObject = __webpack_require__(27);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(10)
	  , anObject = __webpack_require__(27);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(108)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(9)
	  , has      = __webpack_require__(24)
	  , $export  = __webpack_require__(10)
	  , isObject = __webpack_require__(23)
	  , anObject = __webpack_require__(27);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(9)
	  , $export  = __webpack_require__(10)
	  , anObject = __webpack_require__(27);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(10)
	  , getProto = __webpack_require__(9).getProto
	  , anObject = __webpack_require__(27);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(10);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(10)
	  , anObject      = __webpack_require__(27)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(10);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(168)});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(9)
	  , anObject = __webpack_require__(27)
	  , Reflect  = __webpack_require__(11).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(10)
	  , anObject           = __webpack_require__(27)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(9)
	  , has        = __webpack_require__(24)
	  , $export    = __webpack_require__(10)
	  , createDesc = __webpack_require__(14)
	  , anObject   = __webpack_require__(27)
	  , isObject   = __webpack_require__(23);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(10)
	  , setProto = __webpack_require__(52);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(10)
	  , $includes = __webpack_require__(40)(true);

	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(125)('includes');

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(10)
	  , $at     = __webpack_require__(105)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $pad    = __webpack_require__(175);

	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(34)
	  , repeat   = __webpack_require__(116)
	  , defined  = __webpack_require__(29);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $pad    = __webpack_require__(175);

	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(70)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(70)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(10)
	  , $re     = __webpack_require__(180)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(9)
	  , $export    = __webpack_require__(10)
	  , ownKeys    = __webpack_require__(168)
	  , toIObject  = __webpack_require__(30)
	  , createDesc = __webpack_require__(14);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(10)
	  , $values = __webpack_require__(183)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(9)
	  , toIObject = __webpack_require__(30)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(10)
	  , $entries = __webpack_require__(183)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(10);

	$export($export.P, 'Map', {toJSON: __webpack_require__(186)('Map')});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(145)
	  , classof = __webpack_require__(54);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(10);

	$export($export.P, 'Set', {toJSON: __webpack_require__(186)('Set')});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(9)
	  , $export = __webpack_require__(10)
	  , $ctx    = __webpack_require__(19)
	  , $Array  = __webpack_require__(12).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(11)
	  , $export    = __webpack_require__(10)
	  , invoke     = __webpack_require__(26)
	  , partial    = __webpack_require__(190)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(191)
	  , invoke    = __webpack_require__(26)
	  , aFunction = __webpack_require__(20);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , $task   = __webpack_require__(148);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(124);
	var global      = __webpack_require__(11)
	  , hide        = __webpack_require__(13)
	  , Iterators   = __webpack_require__(107)
	  , ITERATOR    = __webpack_require__(38)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(195)))

/***/ },
/* 195 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  and: __webpack_require__(197),
	  compose: __webpack_require__(209),
	  copy: __webpack_require__(211),
	  debounce: __webpack_require__(215),
	  findWhere: __webpack_require__(217),
	  get: __webpack_require__(219),
	  isDeepEqual: __webpack_require__(221),
	  isEqual: __webpack_require__(288),
	  literal: __webpack_require__(290),
	  merge: __webpack_require__(292),
	  not: __webpack_require__(294),
	  or: __webpack_require__(296),
	  pop: __webpack_require__(298),
	  push: __webpack_require__(300),
	  set: __webpack_require__(302),
	  shift: __webpack_require__(304),
	  toggle: __webpack_require__(306),
	  unset: __webpack_require__(308),
	  unshift: __webpack_require__(310),
	  when: __webpack_require__(312)
	}


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(198).default


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
	    paths[_key] = arguments[_key];
	  }

	  var getters = paths.map(function (path) {
	    return (0, _get2.default)(path);
	  });

	  var and = function and(args) {
	    return getters.length && getters.every(function (getter) {
	      return (0, _isTruthy2.default)(getter(args));
	    }) ? getters[getters.length - 1](args) : undefined;
	  };

	  and.displayName = 'and(' + paths.map(function (path, index) {
	    return (0, _toDisplayName2.default)(path, getters[index]);
	  }).join(', ') + ')';

	  return and;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _isTruthy = __webpack_require__(207);

	var _isTruthy2 = _interopRequireDefault(_isTruthy);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(200).default


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = compile;

	var _compiler = __webpack_require__(201);

	var _compiler2 = _interopRequireDefault(_compiler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function compile(path) {
	  var fn = arguments.length <= 1 || arguments[1] === undefined ? 'get' : arguments[1];

	  return (0, _compiler2.default)(path, fn, true);
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = compile;

	var _input = __webpack_require__(202);

	var _input2 = _interopRequireDefault(_input);

	var _output = __webpack_require__(204);

	var _output2 = _interopRequireDefault(_output);

	var _state = __webpack_require__(205);

	var _state2 = _interopRequireDefault(_state);

	var _parseUrl = __webpack_require__(206);

	var _parseUrl2 = _interopRequireDefault(_parseUrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function compile(path, fn, isGetter) {
	  if (typeof path === 'string') {
	    // check if the string is a url
	    var url = (0, _parseUrl2.default)(path);
	    if (url) {
	      var urlPath = url.path && url.path.split('.') || [];
	      if (url.scheme === 'input' && fn === 'get') {
	        return (0, _input2.default)(path, url, urlPath);
	      } else if (url.scheme === 'output' && fn === 'set') {
	        return (0, _output2.default)(path, url, urlPath);
	      } else if (url.scheme === 'state') {
	        return (0, _state2.default)(path, url, urlPath, fn, isGetter);
	      } else {
	        return console.error(path + ' : not supported by input, output or state.' + fn);
	      }
	    }
	  } else if (typeof path === 'function') {
	    // for functions simply return them
	    return path;
	  }
	  // other values (probably an array or non-url string) are passed through to state.fn
	  var stateFn = function state(_ref) {
	    var state = _ref.state;

	    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      values[_key - 1] = arguments[_key];
	    }

	    if (isGetter) {
	      return path ? state[fn].apply(state, [path].concat(values)) : state[fn].apply(state, values);
	    } else {
	      if (path) {
	        state[fn].apply(state, [path].concat(values));
	      } else {
	        state[fn].apply(state, values);
	      }
	      return values.length === 1 ? values[0] : values;
	    }
	  };
	  stateFn.displayName = 'state.' + fn;
	  return stateFn;
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _objectPath = __webpack_require__(203);

	exports.default = function (path, url, urlPath) {
	  // get the value from the input object
	  return function input(_ref) {
	    var input = _ref.input;

	    return urlPath ? (0, _objectPath.getPathValue)(input, urlPath) : input;
	  };
	};

/***/ },
/* 203 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPathValue = getPathValue;
	exports.setPathValue = setPathValue;
	function getPathValue(obj, path) {
	  var value = undefined;
	  if (obj && path) {
	    if (Array.isArray(path)) {
	      value = obj;
	      path.forEach(function (key) {
	        if (value) {
	          value = value[key];
	        }
	      });
	    } else {
	      value = obj[path];
	    }
	  }
	  return value;
	}

	function setPathValue(obj, path, value) {
	  if (obj && path) {
	    if (Array.isArray(path)) {
	      (function () {
	        var node = obj;
	        path.forEach(function (key, index) {
	          node = node[key] = index + 1 < path.length ? node[key] || {} : value;
	        });
	      })();
	    } else {
	      obj[path] = value;
	    }
	  }
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _objectPath = __webpack_require__(203);

	exports.default = function (path, url, urlPath) {
	  // add the value to the input object and pass it to output
	  return function output(_ref, value) {
	    var input = _ref.input;
	    var output = _ref.output;

	    var outputValue = value && typeof value.toJS === 'function' ? value.toJS() : value && value.constructor === Object && Object.isFrozen(value) ? JSON.parse(JSON.stringify(value)) : value;
	    if (urlPath) {
	      (0, _objectPath.setPathValue)(input, urlPath, outputValue);
	      output(input);
	    } else {
	      output(outputValue);
	    }
	    return value;
	  };
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var execute = function execute(state, values, urlPath, fn, isGetter) {
	  if (isGetter) {
	    return urlPath ? state[fn].apply(state, [urlPath].concat(_toConsumableArray(values))) : state[fn].apply(state, _toConsumableArray(values));
	  } else {
	    if (urlPath) {
	      state[fn].apply(state, [urlPath].concat(_toConsumableArray(values)));
	    } else {
	      state[fn].apply(state, _toConsumableArray(values));
	    }
	    return values.length === 1 ? values[0] : values;
	  }
	};

	exports.default = function (path, url, urlPath, fn, isGetter) {
	  if (url.host) {
	    // process on the named module
	    var moduleFn = function moduleState(_ref) {
	      var modules = _ref.modules;
	      var state = _ref.state;

	      var module = modules[url.host];
	      if (!module) {
	        return console.error(path + " : module was not found.");
	      }

	      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        values[_key - 1] = arguments[_key];
	      }

	      return execute(state, values, [].concat(_toConsumableArray(module.path), _toConsumableArray(urlPath)), fn, isGetter);
	    };
	    moduleFn.displayName = "module.state." + fn;
	    return moduleFn;
	  } else {
	    // process on the global state
	    var stateFn = function state(_ref2) {
	      var state = _ref2.state;

	      for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        values[_key2 - 1] = arguments[_key2];
	      }

	      return execute(state, values, urlPath, fn, isGetter);
	    };
	    stateFn.displayName = "state." + fn;
	    return stateFn;
	  }
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parseUrl;
	var regex = /^(\w+):(\/\/([^\/]+))?\/([^\/][^\?]*)?(\?(.*))?$/;

	function parseUrl(url) {
	  var match = regex.exec(url);
	  return !match ? null : {
	    scheme: match[1],
	    host: match[3],
	    path: match[4]
	  };
	}

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isTruthy;
	function isTruthy(value) {
	  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0) {
	    return false;
	  } else {
	    return !!value;
	  }
	}

/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path, getter) {
	  return typeof path === 'function' ? getter.displayName || getter.name : JSON.stringify(path);
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(210).default


/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = function (thing) {
	  var compose = function compose(args) {
	    var src = arguments.length <= 1 || arguments[1] === undefined ? thing : arguments[1];

	    var newThing = {};
	    Object.keys(src).forEach(function (key) {
	      switch (_typeof(src[key])) {
	        case 'function':
	          newThing[key] = src[key](args);
	          break;
	        case 'object':
	          newThing[key] = compose(args, src[key]);
	          break;
	        default:
	          newThing[key] = src[key];
	          break;
	      }
	    });
	    return newThing;
	  };

	  compose.displayName = 'compose()';

	  return compose;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(212).default


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (fromPath) {
	  var getValue = (0, _get2.default)(fromPath);

	  for (var _len = arguments.length, toPaths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    toPaths[_key - 1] = arguments[_key];
	  }

	  var setValues = toPaths.map(function (toPath) {
	    return (0, _set2.default)(toPath);
	  });

	  var copyTo = function copyTo(setters, args, value, async) {
	    if (setters.length === 0) {
	      if (async) {
	        args.output.success(value);
	      }
	    } else {
	      var response = setters[0](args, value);
	      if (response && typeof response.then === 'function') {
	        response.then(function (val) {
	          return copyTo(setters.slice(1), args, val, true);
	        }).catch(args.output.error);
	      } else {
	        copyTo(setters.slice(1), args, response, async);
	      }
	    }
	  };

	  var copy = function copyFrom(args) {
	    var value = getValue(args);
	    if (value && typeof value.then === 'function') {
	      value.then(function (val) {
	        return copyTo(setValues, args, val, true);
	      }).catch(args.output.error);
	    } else {
	      copyTo(setValues, args, value);
	    }
	  };

	  copy.displayName = 'addons.copy(' + (0, _toDisplayName2.default)(fromPath, getValue) + ', ' + toPaths.map(function (path, index) {
	    return (0, _toDisplayName2.default)(path, setValues[index]);
	  }).join(', ') + ')';

	  return copy;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _set = __webpack_require__(213);

	var _set2 = _interopRequireDefault(_set);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(214).default


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = compile;

	var _compiler = __webpack_require__(201);

	var _compiler2 = _interopRequireDefault(_compiler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function compile(path) {
	  var fn = arguments.length <= 1 || arguments[1] === undefined ? 'set' : arguments[1];

	  return (0, _compiler2.default)(path, fn, false);
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(216).default


/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (time, continueChain) {
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var _ref$terminateChain = _ref.terminateChain;
	  var terminateChain = _ref$terminateChain === undefined ? [] : _ref$terminateChain;
	  var _ref$immediate = _ref.immediate;
	  var immediate = _ref$immediate === undefined ? true : _ref$immediate;

	  var id = Symbol('id');

	  var timeout = function debounceTimeout() {
	    if (pending[id].continue) {
	      // continue the final signal
	      pending[id].continue();
	      // immediate debounce should wait until time before sending immediate again
	      if (immediate) {
	        pending[id] = {
	          timeout: setTimeout(timeout, time)
	        };
	      } else {
	        delete pending[id];
	      }
	    } else {
	      // no pending signals
	      delete pending[id];
	    }
	  };

	  var debounce = function debounce(_ref2) {
	    var output = _ref2.output;

	    if (pending[id]) {
	      // not first time
	      if (pending[id].terminate) {
	        // terminate the previous signal
	        pending[id].terminate();
	      }
	      // replace previous signal with this one
	      pending[id].continue = output.continue;
	      pending[id].terminate = output.terminate;
	    } else {
	      // first time
	      pending[id] = {
	        timeout: setTimeout(timeout, time)
	      };
	      if (!immediate) {
	        // queue the signal
	        pending[id].continue = output.continue;
	        pending[id].terminate = output.terminate;
	      } else {
	        // continue the signal
	        output.continue();
	      }
	    }
	  };

	  debounce.outputs = ['continue', 'terminate'];

	  debounce.displayName = 'addons.debounce(' + time + ', ...)';

	  return [debounce, {
	    continue: continueChain,
	    terminate: terminateChain
	  }];
	};

	var pending = {};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(218).default


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path, where) {
	  // set compiler is more suited due to the additional param
	  var getter = (0, _get2.default)(path, 'findWhere');
	  var findWhere = function findWhere(args) {
	    return getter(args, where);
	  };

	  findWhere.displayName = 'findWhere(' + (0, _toDisplayName2.default)(path, getter) + ', ' + JSON.stringify(where) + ')';

	  return findWhere;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(220).default


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var get = (0, _get2.default)(path);

	  get.displayName = 'get(' + path + ')';

	  return get;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(222).default


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
	    paths[_key] = arguments[_key];
	  }

	  var getters = paths.map(function (path) {
	    return (0, _get2.default)(path);
	  });
	  var displayName = 'isDeepEqual(' + paths.map(function (path, index) {
	    return (0, _toDisplayName2.default)(path, getters[index]);
	  }).join(', ') + ')';
	  var firstGetter = getters.shift();

	  var isDeepEqual = function isDeepEqual(args) {
	    var firstValue = firstGetter(args);
	    return getters.every(function (getter) {
	      return (0, _isEqual2.default)(firstValue, getter(args));
	    });
	  };

	  isDeepEqual.displayName = displayName;

	  return isDeepEqual;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _isEqual = __webpack_require__(223);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(224);

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	module.exports = isEqual;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(225),
	    isObject = __webpack_require__(244),
	    isObjectLike = __webpack_require__(246);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(226),
	    equalArrays = __webpack_require__(261),
	    equalByTag = __webpack_require__(263),
	    equalObjects = __webpack_require__(268),
	    getTag = __webpack_require__(284),
	    isArray = __webpack_require__(280),
	    isHostObject = __webpack_require__(245),
	    isTypedArray = __webpack_require__(287);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag, equalFunc, customizer, bitmask);
	  }
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	  if (!isPartial) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(227),
	    stackDelete = __webpack_require__(228),
	    stackGet = __webpack_require__(232),
	    stackHas = __webpack_require__(234),
	    stackSet = __webpack_require__(236);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add functions to the `Stack` cache.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 227 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}

	module.exports = stackClear;


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(229);

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(230);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}

	module.exports = assocDelete;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(231);

	/**
	 * Gets the index at which the first occurrence of `key` is found in `array`
	 * of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 231 */
/***/ function(module, exports) {

	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(233);

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocGet(array, key) : data.map.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(230);

	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}

	module.exports = assocGet;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(235);

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocHas(array, key) : data.map.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(230);

	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}

	module.exports = assocHas;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(237),
	    assocSet = __webpack_require__(259);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache object.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;

	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(238),
	    mapDelete = __webpack_require__(251),
	    mapGet = __webpack_require__(255),
	    mapHas = __webpack_require__(257),
	    mapSet = __webpack_require__(258);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add functions to the `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;

	module.exports = MapCache;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(239),
	    Map = __webpack_require__(247);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}

	module.exports = mapClear;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(240);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Creates an hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}

	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

	module.exports = Hash;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(241);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(242);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(243),
	    isHostObject = __webpack_require__(245),
	    isObjectLike = __webpack_require__(246);

	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(funcToString.call(value));
	  }
	  return isObjectLike(value) &&
	    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}

	module.exports = isNative;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(244);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 244 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 245 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 246 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(241),
	    root = __webpack_require__(248);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(250);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(249)(module), (function() { return this; }())))

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 250 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(247),
	    assocDelete = __webpack_require__(229),
	    hashDelete = __webpack_require__(252),
	    isKeyable = __webpack_require__(254);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}

	module.exports = mapDelete;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(253);

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}

	module.exports = hashDelete;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(240);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}

	module.exports = hashHas;


/***/ },
/* 254 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}

	module.exports = isKeyable;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(247),
	    assocGet = __webpack_require__(233),
	    hashGet = __webpack_require__(256),
	    isKeyable = __webpack_require__(254);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}

	module.exports = mapGet;


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(240);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(247),
	    assocHas = __webpack_require__(235),
	    hashHas = __webpack_require__(253),
	    isKeyable = __webpack_require__(254);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}

	module.exports = mapHas;


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(247),
	    assocSet = __webpack_require__(259),
	    hashSet = __webpack_require__(260),
	    isKeyable = __webpack_require__(254);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache object.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}

	module.exports = mapSet;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(230);

	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}

	module.exports = assocSet;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(240);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}

	module.exports = hashSet;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(262);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var index = -1,
	      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isUnordered) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 262 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(264),
	    Uint8Array = __webpack_require__(265),
	    mapToArray = __webpack_require__(266),
	    setToArray = __webpack_require__(267);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = Symbol ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
	  switch (tag) {
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      // Recursively compare objects (susceptible to call stack limits).
	      return (isPartial || object.size == other.size) &&
	        equalFunc(convert(object), convert(other), customizer, bitmask | UNORDERED_COMPARE_FLAG);

	    case symbolTag:
	      return !!Symbol && (symbolValueOf.call(object) == symbolValueOf.call(other));
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(248);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(248);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 266 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 267 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(269),
	    keys = __webpack_require__(270);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 269 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(269),
	    baseKeys = __webpack_require__(271),
	    indexKeys = __webpack_require__(272),
	    isArrayLike = __webpack_require__(276),
	    isIndex = __webpack_require__(282),
	    isPrototype = __webpack_require__(283);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 271 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(273),
	    isArguments = __webpack_require__(274),
	    isArray = __webpack_require__(280),
	    isLength = __webpack_require__(279),
	    isString = __webpack_require__(281);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 273 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(275);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(276),
	    isObjectLike = __webpack_require__(246);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(277),
	    isFunction = __webpack_require__(243),
	    isLength = __webpack_require__(279);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(278);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 278 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 279 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 280 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(280),
	    isObjectLike = __webpack_require__(246);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 282 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(243);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(247),
	    Set = __webpack_require__(285),
	    WeakMap = __webpack_require__(286);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var mapCtorString = Map ? funcToString.call(Map) : '',
	    setCtorString = Set ? funcToString.call(Set) : '',
	    weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for IE 11 providing `toStringTag` values for maps, sets, and weakmaps.
	if ((Map && getTag(new Map) != mapTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : null,
	        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case mapCtorString: return mapTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(241),
	    root = __webpack_require__(248);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(241),
	    root = __webpack_require__(248);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(279),
	    isObjectLike = __webpack_require__(246);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(289).default


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
	    paths[_key] = arguments[_key];
	  }

	  var getters = paths.map(function (path) {
	    return (0, _get2.default)(path);
	  });
	  var displayName = 'isEqual(' + paths.map(function (path, index) {
	    return (0, _toDisplayName2.default)(path, getters[index]);
	  }).join(', ') + ')';
	  var firstGetter = getters.shift();

	  var isEqual = function isEqual(args) {
	    var firstValue = firstGetter(args);
	    return getters.every(function (getter) {
	      return firstValue === getter(args);
	    });
	  };

	  isEqual.displayName = displayName;

	  return isEqual;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(291).default


/***/ },
/* 291 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  var literal = function literal() {
	    return value;
	  };

	  literal.displayName = "literal(" + JSON.stringify(value) + ")";

	  return literal;
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(293).default


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var merge = (0, _set2.default)(path, 'merge');

	  merge.displayName = 'merge(' + (0, _toDisplayName2.default)(path, merge) + ')';

	  return merge;
	};

	var _set = __webpack_require__(213);

	var _set2 = _interopRequireDefault(_set);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(295).default


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var getter = (0, _get2.default)(path);

	  var not = function not(args) {
	    return !(0, _isTruthy2.default)(getter(args));
	  };

	  not.displayName = 'not(' + (0, _toDisplayName2.default)(path, getter) + ')';

	  return not;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _isTruthy = __webpack_require__(207);

	var _isTruthy2 = _interopRequireDefault(_isTruthy);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(297).default


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
	    paths[_key] = arguments[_key];
	  }

	  var getters = paths.map(function (path) {
	    return (0, _get2.default)(path);
	  });

	  var or = function or(args) {
	    var getter = getters.find(function (getter) {
	      return (0, _isTruthy2.default)(getter(args));
	    });
	    return getter ? getter(args) : undefined;
	  };

	  or.displayName = 'or(' + paths.map(function (path, index) {
	    return (0, _toDisplayName2.default)(path, getters[index]);
	  }).join(', ') + ')';

	  return or;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _isTruthy = __webpack_require__(207);

	var _isTruthy2 = _interopRequireDefault(_isTruthy);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(299).default


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var pop = (0, _get2.default)(path, 'pop');

	  pop.displayName = 'pop(' + (0, _toDisplayName2.default)(path, pop) + ')';

	  return pop;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(301).default


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var push = (0, _set2.default)(path, 'push');

	  push.displayName = 'push(' + (0, _toDisplayName2.default)(path, push) + ')';

	  return push;
	};

	var _set = __webpack_require__(213);

	var _set2 = _interopRequireDefault(_set);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(303).default


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path, value) {
	  var setValue = (0, _set2.default)(path);

	  var set = function set(args) {
	    var response = setValue(args, value);
	    if (response && typeof response.then === 'function') {
	      response.then(args.output.success).catch(args.output.error);
	    }
	  };

	  set.displayName = 'addons.set(' + (0, _toDisplayName2.default)(path, setValue) + ', ' + JSON.stringify(value) + ')';

	  return set;
	};

	var _set = __webpack_require__(213);

	var _set2 = _interopRequireDefault(_set);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(305).default


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var shift = (0, _get2.default)(path, 'shift');

	  shift.displayName = 'shift(' + (0, _toDisplayName2.default)(path, shift) + ')';

	  return shift;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(307).default


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var onValue = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	  var offValue = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  var getValue = (0, _get2.default)(path);
	  var setValue = (0, _set2.default)(path);

	  var toggleWrite = function toggleWrite(args, value, async) {
	    var response = setValue(args, value === onValue ? offValue : onValue);
	    if (response && typeof response.then === 'function') {
	      response.then(args.output.success).catch(args.output.error);
	    } else if (async) {
	      args.output.success();
	    }
	  };

	  var toggle = function toggleRead(args) {
	    var value = getValue(args);
	    if (value && typeof value.then === 'function') {
	      value.then(function (val) {
	        return toggleWrite(args, val, true);
	      }).catch(args.output.error);
	    } else {
	      toggleWrite(args, value);
	    }
	  };

	  toggle.displayName = 'addons.toggle(' + (0, _toDisplayName2.default)(path, getValue) + ')';

	  return toggle;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _set = __webpack_require__(213);

	var _set2 = _interopRequireDefault(_set);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(309).default


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var unsetValue = (0, _get2.default)(path, 'unset');

	  var unset = function unset(args) {
	    unsetValue(args);
	  };

	  unset.displayName = 'addons.unset(' + JSON.stringify(path) + ')';

	  return unset;
	};

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(311).default


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (path) {
	  var unshift = (0, _set2.default)(path, 'unshift');

	  unshift.displayName = 'unshift(' + (0, _toDisplayName2.default)(path, unshift) + ')';

	  return unshift;
	};

	var _set = __webpack_require__(213);

	var _set2 = _interopRequireDefault(_set);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(313).default


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _get = __webpack_require__(199);

	var _get2 = _interopRequireDefault(_get);

	var _toDisplayName = __webpack_require__(208);

	var _toDisplayName2 = _interopRequireDefault(_toDisplayName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var truthy = Symbol('truthy');
	var falsy = Symbol('falsy');
	var otherwise = Symbol('otherwise');

	function when(path) {
	  var conditions = arguments.length <= 1 || arguments[1] === undefined ? { 'true': truthy, 'false': otherwise } : arguments[1];

	  var getValue = (0, _get2.default)(path);

	  // prepare the output conditions
	  var otherwisePath = null;
	  var outputConditions = {};
	  if (Array.isArray(conditions)) {
	    conditions.forEach(function (condition) {
	      outputConditions[condition] = condition;
	    });
	  } else {
	    for (var _path in conditions) {
	      outputConditions[_path] = conditions[_path];
	      otherwisePath = otherwisePath || conditions[_path] === otherwise && _path;
	    }
	  }
	  if (!otherwisePath) {
	    outputConditions['otherwise'] = otherwise;
	    otherwisePath = 'otherwise';
	  }

	  // test the getter returned value
	  var whenTest = function whenTest(args, value) {
	    // treat objects with no keys as falsy
	    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0) {
	      value = false;
	    }

	    var outputPath = undefined;

	    for (var _path2 in outputConditions) {
	      var test = outputConditions[_path2];
	      if (test !== otherwise && (test === value || test === truthy && value || test === falsy && !value)) {
	        outputPath = _path2;
	        break;
	      }
	    }

	    args.output[outputPath || otherwisePath]();
	  };

	  // define the action
	  var action = function whenRead(args) {
	    var value = getValue(args);
	    if (value && typeof value.then === 'function') {
	      value.then(function (val) {
	        return whenTest(args, val);
	      }).catch(function (error) {
	        console.error(action.displayName + ' caught an error whilst getting a value to test', error);
	      });
	    } else {
	      whenTest(args, value);
	    }
	  };

	  action.outputs = Object.keys(outputConditions);

	  action.displayName = 'addons.when(' + (0, _toDisplayName2.default)(path, getValue) + ')';

	  return action;
	}

	when.truthy = truthy;
	when.falsy = falsy;
	when.otherwise = otherwise;

	exports.default = when;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _falcorPathUtils = __webpack_require__(315);

	var _falcorPathUtils2 = _interopRequireDefault(_falcorPathUtils);

	var _alias = __webpack_require__(2);

	var _alias2 = _interopRequireDefault(_alias);

	var _lodash = __webpack_require__(330);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	exports.default = function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
	    var input = _ref.input;
	    var modules = _ref.modules;
	    var state = _ref.state;
	    var output = _ref.output;

	    var _input$verbose, verbose, falcorModule, queriesState, allQueries, optimizedQuery, json, results;

	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.prev = 0;
	            _input$verbose = input.verbose;
	            verbose = _input$verbose === undefined ? false : _input$verbose;
	            falcorModule = modules[_alias2.default];
	            queriesState = state.select([].concat(_toConsumableArray(falcorModule.path), ['queries']));
	            allQueries = (0, _lodash.flatten)((0, _lodash.values)(queriesState.get()));
	            optimizedQuery = _falcorPathUtils2.default.collapse(allQueries);
	            json = null;

	            if (!optimizedQuery.length) {
	              _context.next = 15;
	              break;
	            }

	            if (verbose) console.log('Falcor combined query: ' + JSON.stringify(optimizedQuery));
	            _context.next = 12;
	            return falcorModule.services.get(optimizedQuery);

	          case 12:
	            results = _context.sent;

	            json = (0, _lodash.get)(results, 'json', null);
	            if (!json) debugger;

	          case 15:

	            output.success({ json: json, optimizedQuery: optimizedQuery });
	            _context.next = 23;
	            break;

	          case 18:
	            _context.prev = 18;
	            _context.t0 = _context['catch'](0);

	            console.error(_context.t0);
	            debugger;
	            output.error(_context.t0);

	          case 23:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this, [[0, 18]]);
	  }));

	  return function batchQuery(_x) {
	    return ref.apply(this, arguments);
	  };
	}();

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    iterateKeySet: __webpack_require__(316),
	    toTree: __webpack_require__(317),
	    toTreeWithUnion: __webpack_require__(318),
	    pathsComplementFromTree: __webpack_require__(319),
	    pathsComplementFromLengthTree: __webpack_require__(321),
	    hasIntersection: __webpack_require__(320),
	    toPaths: __webpack_require__(322),
	    collapse: __webpack_require__(323),
	    optimizePathSets: __webpack_require__(324)
	};


/***/ },
/* 316 */
/***/ function(module, exports) {

	var isArray = Array.isArray;

	/**
	 * Takes in a keySet and a note attempts to iterate over it.
	 * If the value is a primitive, the key will be returned and the note will
	 * be marked done
	 * If the value is an object, then each value of the range will be returned
	 * and when finished the note will be marked done.
	 * If the value is an array, each value will be iterated over, if any of the
	 * inner values are ranges, those will be iterated over.  When fully done,
	 * the note will be marked done.
	 *
	 * @param {Object|Array|String|Number} keySet -
	 * @param {Object} note - The non filled note
	 * @returns {String|Number|undefined} - The current iteration value.
	 * If undefined, then the keySet is empty
	 * @public
	 */
	module.exports = function iterateKeySet(keySet, note) {
	    if (note.isArray === undefined) {
	        initializeNote(keySet, note);
	    }

	    // Array iteration
	    if (note.isArray) {
	        var nextValue;

	        // Cycle through the array and pluck out the next value.
	        do {
	            if (note.loaded && note.rangeOffset > note.to) {
	                ++note.arrayOffset;
	                note.loaded = false;
	            }

	            var idx = note.arrayOffset, length = keySet.length;
	            if (idx >= length) {
	                note.done = true;
	                break;
	            }

	            var el = keySet[note.arrayOffset];
	            var type = typeof el;

	            // Inner range iteration.
	            if (type === 'object') {
	                if (!note.loaded) {
	                    initializeRange(el, note);
	                }

	                // Empty to/from
	                if (note.empty) {
	                    continue;
	                }

	                nextValue = note.rangeOffset++;
	            }

	            // Primitive iteration in array.
	            else {
	                ++note.arrayOffset;
	                nextValue = el;
	            }
	        } while (nextValue === undefined);

	        return nextValue;
	    }

	    // Range iteration
	    else if (note.isObject) {
	        if (!note.loaded) {
	            initializeRange(keySet, note);
	        }
	        if (note.rangeOffset > note.to) {
	            note.done = true;
	            return undefined;
	        }

	        return note.rangeOffset++;
	    }

	    // Primitive value
	    else {
	        note.done = true;
	        return keySet;
	    }
	};

	function initializeRange(key, memo) {
	    var from = memo.from = key.from || 0;
	    var to = memo.to = key.to ||
	        (typeof key.length === 'number' &&
	        memo.from + key.length - 1 || 0);
	    memo.rangeOffset = memo.from;
	    memo.loaded = true;
	    if (from > to) {
	        memo.empty = true;
	    }
	}

	function initializeNote(key, note) {
	    note.done = false;
	    var isObject = note.isObject = !!(key && typeof key === 'object');
	    note.isArray = isObject && isArray(key);
	    note.arrayOffset = 0;
	}


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var iterateKeySet = __webpack_require__(316);
	var isArray = Array.isArray;

	/**
	 * @param {Array} paths -
	 * @returns {Object} -
	 */
	module.exports = function toTree(paths) {
	    return paths.reduce(function(acc, path) {
	        innerToTree(acc, path, 0);
	        return acc;
	    }, {});
	};

	function innerToTree(seed, path, depth) {

	    var keySet = path[depth];
	    var iteratorNote = {};
	    var key;
	    var nextDepth = depth + 1;

	    key = iterateKeySet(keySet, iteratorNote);

	    do {

	        var next = seed[key];
	        if (!next) {
	            if (nextDepth === path.length) {
	                seed[key] = null;
	            } else {
	                next = seed[key] = {};
	            }
	        }

	        if (nextDepth < path.length) {
	            innerToTree(next, path, nextDepth);
	        }

	        if (!iteratorNote.done) {
	            key = iterateKeySet(keySet, iteratorNote);
	        }
	    } while (!iteratorNote.done);
	}



/***/ },
/* 318 */
/***/ function(module, exports) {

	

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var hasIntersection = __webpack_require__(320);

	/**
	 * Compares the paths passed in with the tree.  Any of the paths that are in
	 * the tree will be stripped from the paths.
	 *
	 * **Does not mutate** the incoming paths object.
	 * **Proper subset** only matching.
	 *
	 * @param {Array} paths - A list of paths (complex or simple) to strip the
	 * intersection
	 * @param {Object} tree -
	 * @public
	 */
	module.exports = function pathsComplementFromTree(paths, tree) {
	    var out = [];
	    var outLength = -1;

	    for (var i = 0, len = paths.length; i < len; ++i) {
	        // If this does not intersect then add it to the output.
	        if (!hasIntersection(tree, paths[i], 0)) {
	            out[++outLength] = paths[i];
	        }
	    }
	    return out;
	};



/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var iterateKeySet = __webpack_require__(316);

	/**
	 * Tests to see if the intersection should be stripped from the
	 * total paths.  The only way this happens currently is if the entirety
	 * of the path is contained in the tree.
	 * @private
	 */
	module.exports = function hasIntersection(tree, path, depth) {
	    var current = tree;
	    var intersects = true;

	    // Continue iteratively going down a path until a complex key is
	    // encountered, then recurse.
	    for (;intersects && depth < path.length; ++depth) {
	        var key = path[depth];
	        var keyType = typeof key;

	        // We have to iterate key set
	        if (key && keyType === 'object') {
	            var note = {};
	            var innerKey = iterateKeySet(key, note);
	            var nextDepth = depth + 1;

	            // Loop through the innerKeys setting the intersects flag
	            // to each result.  Break out on false.
	            do {
	                var next = current[innerKey];
	                intersects = next !== undefined;

	                if (intersects) {
	                    intersects = hasIntersection(next, path, nextDepth);
	                }
	                innerKey = iterateKeySet(key, note);
	            } while (intersects && !note.done);

	            // Since we recursed, we shall not pass any further!
	            break;
	        }

	        // Its a simple key, just move forward with the testing.
	        current = current[key];
	        intersects = current !== undefined;
	    }

	    return intersects;
	};


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var hasIntersection = __webpack_require__(320);

	/**
	 * Compares the paths passed in with the tree.  Any of the paths that are in
	 * the tree will be stripped from the paths.
	 *
	 * **Does not mutate** the incoming paths object.
	 * **Proper subset** only matching.
	 *
	 * @param {Array} paths - A list of paths (complex or simple) to strip the
	 * intersection
	 * @param {Object} tree -
	 * @public
	 */
	module.exports = function pathsComplementFromLengthTree(paths, tree) {
	    var out = [];
	    var outLength = -1;

	    for (var i = 0, len = paths.length; i < len; ++i) {
	        // If this does not intersect then add it to the output.
	        var path = paths[i];
	        if (!hasIntersection(tree[path.length], path, 0)) {
	            out[++outLength] = path;
	        }
	    }
	    return out;
	};



/***/ },
/* 322 */
/***/ function(module, exports) {

	var isArray = Array.isArray;
	var typeOfObject = "object";

	/* jshint forin: false */
	module.exports = function toPaths(lengths) {
	    var pathmap;
	    var allPaths = [];
	    var allPathsLength = 0;
	    for (var length in lengths) {
	        if (isNumber(length) && isObject(pathmap = lengths[length])) {
	            var paths = collapsePathMap(pathmap, 0, parseInt(length, 10)).sets;
	            var pathsIndex = -1;
	            var pathsCount = paths.length;
	            while (++pathsIndex < pathsCount) {
	                allPaths[allPathsLength++] = collapsePathSetIndexes(paths[pathsIndex]);
	            }
	        }
	    }
	    return allPaths;
	};

	function isObject(value) {
	    return value !== null && typeof value === typeOfObject;
	}

	function collapsePathMap(pathmap, depth, length) {

	    var key;
	    var code = getHashCode(String(depth));
	    var subs = Object.create(null);

	    var codes = [];
	    var codesIndex = -1;
	    var codesCount = 0;

	    var pathsets = [];
	    var pathsetsCount = 0;

	    var subPath, subCode,
	        subKeys, subKeysIndex, subKeysCount,
	        subSets, subSetsIndex, subSetsCount,
	        pathset, pathsetIndex, pathsetCount,
	        firstSubKey, pathsetClone;

	    subKeys = [];
	    subKeysIndex = -1;

	    if (depth < length - 1) {

	        subKeysCount = getSortedKeys(pathmap, subKeys);

	        while (++subKeysIndex < subKeysCount) {
	            key = subKeys[subKeysIndex];
	            subPath = collapsePathMap(pathmap[key], depth + 1, length);
	            subCode = subPath.code;
	            if(subs[subCode]) {
	                subPath = subs[subCode];
	            } else {
	                codes[codesCount++] = subCode;
	                subPath = subs[subCode] = {
	                    keys: [],
	                    sets: subPath.sets
	                };
	            }
	            code = getHashCode(code + key + subCode);

	            isNumber(key) &&
	                subPath.keys.push(parseInt(key, 10)) ||
	                subPath.keys.push(key);
	        }

	        while(++codesIndex < codesCount) {

	            key = codes[codesIndex];
	            subPath = subs[key];
	            subKeys = subPath.keys;
	            subKeysCount = subKeys.length;

	            if (subKeysCount > 0) {

	                subSets = subPath.sets;
	                subSetsIndex = -1;
	                subSetsCount = subSets.length;
	                firstSubKey = subKeys[0];

	                while (++subSetsIndex < subSetsCount) {

	                    pathset = subSets[subSetsIndex];
	                    pathsetIndex = -1;
	                    pathsetCount = pathset.length;
	                    pathsetClone = new Array(pathsetCount + 1);
	                    pathsetClone[0] = subKeysCount > 1 && subKeys || firstSubKey;

	                    while (++pathsetIndex < pathsetCount) {
	                        pathsetClone[pathsetIndex + 1] = pathset[pathsetIndex];
	                    }

	                    pathsets[pathsetsCount++] = pathsetClone;
	                }
	            }
	        }
	    } else {
	        subKeysCount = getSortedKeys(pathmap, subKeys);
	        if (subKeysCount > 1) {
	            pathsets[pathsetsCount++] = [subKeys];
	        } else {
	            pathsets[pathsetsCount++] = subKeys;
	        }
	        while (++subKeysIndex < subKeysCount) {
	            code = getHashCode(code + subKeys[subKeysIndex]);
	        }
	    }

	    return {
	        code: code,
	        sets: pathsets
	    };
	}

	function collapsePathSetIndexes(pathset) {

	    var keysetIndex = -1;
	    var keysetCount = pathset.length;

	    while (++keysetIndex < keysetCount) {
	        var keyset = pathset[keysetIndex];
	        if (isArray(keyset)) {
	            pathset[keysetIndex] = collapseIndex(keyset);
	        }
	    }

	    return pathset;
	}

	/**
	 * Collapse range indexers, e.g. when there is a continuous
	 * range in an array, turn it into an object instead:
	 *
	 * [1,2,3,4,5,6] => {"from":1, "to":6}
	 *
	 * @private
	 */
	function collapseIndex(keyset) {

	    // Do we need to dedupe an indexer keyset if they're duplicate consecutive integers?
	    // var hash = {};
	    var keyIndex = -1;
	    var keyCount = keyset.length - 1;
	    var isSparseRange = keyCount > 0;

	    while (++keyIndex <= keyCount) {

	        var key = keyset[keyIndex];

	        if (!isNumber(key) /* || hash[key] === true*/ ) {
	            isSparseRange = false;
	            break;
	        }
	        // hash[key] = true;
	        // Cast number indexes to integers.
	        keyset[keyIndex] = parseInt(key, 10);
	    }

	    if (isSparseRange === true) {

	        keyset.sort(sortListAscending);

	        var from = keyset[0];
	        var to = keyset[keyCount];

	        // If we re-introduce deduped integer indexers, change this comparson to "===".
	        if (to - from <= keyCount) {
	            return {
	                from: from,
	                to: to
	            };
	        }
	    }

	    return keyset;
	}

	function sortListAscending(a, b) {
	    return a - b;
	}

	/* jshint forin: false */
	function getSortedKeys(map, keys, sort) {
	    var len = 0;
	    for (var key in map) {
	        keys[len++] = key;
	    }
	    if (len > 1) {
	        keys.sort(sort);
	    }
	    return len;
	}

	function getHashCode(key) {
	    var code = 5381;
	    var index = -1;
	    var count = key.length;
	    while (++index < count) {
	        code = (code << 5) + code + key.charCodeAt(index);
	    }
	    return String(code);
	}

	/**
	 * Return true if argument is a number or can be cast to a number
	 * @private
	 */
	function isNumber(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}



/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var toPaths = __webpack_require__(322);
	var toTree = __webpack_require__(317);

	module.exports = function collapse(paths) {
	    var collapseMap = paths.
	        reduce(function(acc, path) {
	            var len = path.length;
	            if (!acc[len]) {
	                acc[len] = [];
	            }
	            acc[len].push(path);
	            return acc;
	        }, {});

	    Object.
	        keys(collapseMap).
	        forEach(function(collapseKey) {
	            collapseMap[collapseKey] = toTree(collapseMap[collapseKey]);
	        });

	    return toPaths(collapseMap);
	};


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var iterateKeySet = __webpack_require__(316);
	var cloneArray = __webpack_require__(325);
	var catAndSlice = __webpack_require__(326);
	var $types = __webpack_require__(327);
	var $ref = $types.$ref;
	var followReference = __webpack_require__(328);

	/**
	 * The fastest possible optimize of paths.
	 *
	 * What it does:
	 * - Any atom short-circuit / found value will be removed from the path.
	 * - All paths will be exploded which means that collapse will need to be
	 *   ran afterwords.
	 * - Any missing path will be optimized as much as possible.
	 */
	module.exports = function optimizePathSets(cache, paths, maxRefFollow) {
	    var optimized = [];
	    paths.forEach(function(p) {
	        optimizePathSet(cache, cache, p, 0, optimized, [], maxRefFollow);
	    });

	    return optimized;
	};


	/**
	 * optimizes one pathSet at a time.
	 */
	function optimizePathSet(cache, cacheRoot, pathSet,
	                         depth, out, optimizedPath, maxRefFollow) {

	    // at missing, report optimized path.
	    if (cache === undefined) {
	        out[out.length] = catAndSlice(optimizedPath, pathSet, depth);
	        return;
	    }

	    // all other sentinels are short circuited.
	    // Or we found a primitive (which includes null)
	    if (cache === null || (cache.$type && cache.$type !== $ref) ||
	            (typeof cache !== 'object')) {
	        return;
	    }

	    // If the reference is the last item in the path then do not
	    // continue to search it.
	    if (cache.$type === $ref && depth === pathSet.length) {
	        return;
	    }

	    var keySet = pathSet[depth];
	    var isKeySet = typeof keySet === 'object';
	    var nextDepth = depth + 1;
	    var iteratorNote = false;
	    var key = keySet;
	    if (isKeySet) {
	        iteratorNote = {};
	        key = iterateKeySet(keySet, iteratorNote);
	    }
	    var next, nextOptimized;
	    do {
	        next = cache[key];
	        var optimizedPathLength = optimizedPath.length;
	        if (key !== null) {
	            optimizedPath[optimizedPathLength] = key;
	        }

	        if (next && next.$type === $ref && nextDepth < pathSet.length) {
	            var refResults =
	                followReference(cacheRoot, next.value, maxRefFollow);
	            next = refResults[0];

	            // must clone to avoid the mutation from above destroying the cache.
	            nextOptimized = cloneArray(refResults[1]);
	        } else {
	            nextOptimized = optimizedPath;
	        }

	        optimizePathSet(next, cacheRoot, pathSet, nextDepth,
	                        out, nextOptimized, maxRefFollow);
	        optimizedPath.length = optimizedPathLength;

	        if (iteratorNote && !iteratorNote.done) {
	            key = iterateKeySet(keySet, iteratorNote);
	        }
	    } while (iteratorNote && !iteratorNote.done);
	}




/***/ },
/* 325 */
/***/ function(module, exports) {

	function cloneArray(arr, index) {
	    var a = [];
	    var len = arr.length;
	    for (var i = index || 0; i < len; i++) {
	        a[i] = arr[i];
	    }
	    return a;
	}

	module.exports = cloneArray;



/***/ },
/* 326 */
/***/ function(module, exports) {

	module.exports = function catAndSlice(a, b, slice) {
	    var next = [], i, j, len;
	    for (i = 0, len = a.length; i < len; ++i) {
	        next[i] = a[i];
	    }

	    for (j = slice || 0, len = b.length; j < len; ++j, ++i) {
	        next[i] = b[j];
	    }

	    return next;
	};



/***/ },
/* 327 */
/***/ function(module, exports) {

	module.exports = {
	    $ref: 'ref',
	    $atom: 'atom',
	    $error: 'error'
	};



/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArray = __webpack_require__(325);
	var $ref = __webpack_require__(327).$ref;
	var errors = __webpack_require__(329);

	/**
	 * performs the simplified cache reference follow.  This
	 * differs from get as there is just following and reporting,
	 * not much else.
	 *
	 * @param {Object} cacheRoot
	 * @param {Array} ref
	 */
	module.exports = function followReference(cacheRoot, ref, maxRefFollow) {
	    var current = cacheRoot;
	    var refPath = ref;
	    var depth = -1;
	    var length = refPath.length;
	    var key, next, type;
	    var referenceCount = 0;

	    while (++depth < length) {
	        key = refPath[depth];
	        next = current[key];
	        type = next && next.$type;

	        if (!next || type && type !== $ref) {
	            current = next;
	            break;
	        }

	        // Show stopper exception.  This route is malformed.
	        if (type && type === $ref && depth + 1 < length) {
	            var err = new Error(errors.innerReferences);
	            err.throwToNext = true;
	            throw err;
	        }

	        // potentially follow reference
	        if (depth + 1 === length) {
	            if (type === $ref) {
	                depth = -1;
	                refPath = next.value;
	                length = refPath.length;
	                next = cacheRoot;
	                referenceCount++;
	            }

	            if (referenceCount > maxRefFollow) {
	                throw new Error(errors.circularReference);
	            }
	        }
	        current = next;
	    }

	    return [current, cloneArray(refPath)];
	};



/***/ },
/* 329 */
/***/ function(module, exports) {

	/*eslint-disable*/
	module.exports = {
	    innerReferences: 'References with inner references are not allowed.',
	    circularReference: 'There appears to be a circular reference, maximum reference following exceeded.'
	};



/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';

	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;

	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);

	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;

	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;

	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;

	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }

	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;

	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }

	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }

	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;

	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;

	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;

	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');

	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;

	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }

	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }

	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }

	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }

	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;

	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }

	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	      return result ? 0 : -1;
	    }

	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);

	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;

	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;

	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);

	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;

	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;

	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;

	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }

	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }

	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;

	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);

	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);

	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }

	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;

	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);

	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];

	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;

	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];

	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;

	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;

	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);

	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }

	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;

	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);

	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	      stackA.pop();
	      stackB.pop();

	      return result;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];

	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');

	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);

	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;

	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];

	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }

	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;

	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;

	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];

	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;

	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;

	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }

	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;

	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }

	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);

	      view.set(new Uint8Array(buffer));
	      return result;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);

	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;

	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;

	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;

	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }

	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';

	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }

	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }

	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }

	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }

	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);

	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;

	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }

	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }

	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }

	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }

	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }

	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }

	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }

	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);

	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;

	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);

	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;

	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);

	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;

	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }

	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }

	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }

	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;

	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);

	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;

	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));

	      var index = -1,
	          result = [];

	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }

	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }

	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }

	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];

	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];

	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];

	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;

	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];

	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);

	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;

	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }

	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;

	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }

	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);

	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};

	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;

	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }

	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });

	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;

	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }

	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }

	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }

	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }

	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);

	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }

	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });

	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

	      var index = -1,
	          length = methodNames.length;

	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }

	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }

	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }

	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }

	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }

	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);

	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;

	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });

	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }

	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);

	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }

	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }

	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }

	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }

	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }

	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }

	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;

	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });

	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);

	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);

	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);

	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);

	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;

	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;

	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);

	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });

	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);

	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }

	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });

	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }

	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }

	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;

	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });

	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }

	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);

	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }

	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;

	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);

	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);

	      return result;
	    }

	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

	      return string.lastIndexOf(target, position) == position;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);

	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;

	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];

	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);

	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }

	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);

	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);

	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }

	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }

	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');

	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');

	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);

	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);

	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');

	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }

	    /*------------------------------------------------------------------------*/

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;

	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;

	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;

	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);

	    /*------------------------------------------------------------------------*/

	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;

	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });

	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;

	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);

	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };

	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;

	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });

	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });

	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;

	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(249)(module), (function() { return this; }())))

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _call = __webpack_require__(332);

	var _call2 = _interopRequireDefault(_call);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var call = [_call2.default, {
	  success: [],
	  error: [function (e) {
	    debugger;
	  }]
	}];

	exports.default = call;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alias = __webpack_require__(2);

	var _alias2 = _interopRequireDefault(_alias);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	exports.default = function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref) {
	    var input = _ref.input;
	    var output = _ref.output;
	    var modules = _ref.modules;

	    var falcor, path, args, _falcor$refSuffixes, refSuffixes, _falcor$thisPaths, thisPaths, _falcor$debug, _debug, _falcor$verbose, _verbose, arrayedArgs, fullPath, response;

	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.prev = 0;
	            falcor = input.falcor;
	            path = falcor.path;
	            args = falcor.args;
	            _falcor$refSuffixes = falcor.refSuffixes;
	            refSuffixes = _falcor$refSuffixes === undefined ? [] : _falcor$refSuffixes;
	            _falcor$thisPaths = falcor.thisPaths;
	            thisPaths = _falcor$thisPaths === undefined ? [] : _falcor$thisPaths;
	            _falcor$debug = falcor.debug;
	            _debug = _falcor$debug === undefined ? true : _falcor$debug;
	            _falcor$verbose = falcor.verbose;
	            _verbose = _falcor$verbose === undefined ? true : _falcor$verbose;

	            if (!(!path || !args)) {
	              _context.next = 14;
	              break;
	            }

	            throw new Error('Invalid falcor inputs.');

	          case 14:
	            arrayedArgs = Array.isArray(args) ? args : [args];
	            fullPath = Array.isArray(path) ? path : [path];
	            _context.next = 18;
	            return modules[_alias2.default].services.call(fullPath, arrayedArgs, refSuffixes, thisPaths);

	          case 18:
	            response = _context.sent;


	            //If your is returns just invalidations to the cache there will be a null response
	            if (!response) response = { json: {} };

	            if (output.success) output.success(response.json);else output(response.json);
	            _context.next = 28;
	            break;

	          case 23:
	            _context.prev = 23;
	            _context.t0 = _context['catch'](0);

	            if (verbose) console.error(_context.t0);
	            if (debug) debugger;
	            output.error(_context.t0);

	          case 28:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this, [[0, 23]]);
	  }));

	  return function call(_x) {
	    return ref.apply(this, arguments);
	  };
	}();

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _registerQuery = __webpack_require__(334);

	var _registerQuery2 = _interopRequireDefault(_registerQuery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var registerQuery = [_registerQuery2.default];

	exports.default = registerQuery;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = registerQuery;

	var _falcorPathSyntax = __webpack_require__(335);

	var _falcorPathSyntax2 = _interopRequireDefault(_falcorPathSyntax);

	var _utils = __webpack_require__(345);

	var _alias = __webpack_require__(2);

	var _alias2 = _interopRequireDefault(_alias);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function registerQuery(_ref) {
	  var input = _ref.input;
	  var state = _ref.state;
	  var modules = _ref.modules;
	  var guid = input.guid;
	  var queries = input.queries;


	  if (!Array.isArray(queries)) {
	    throw new Error('input.queries must be an array of falcor query strings.');
	  }

	  var convertedToPathSets = queries.map(_falcorPathSyntax2.default.fromPath);
	  var falcorModule = modules[_alias2.default];
	  var queriesState = state.select([].concat(_toConsumableArray(falcorModule.path), ['queries']));
	  queriesState.set(guid, convertedToPathSets);
	}

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var Tokenizer = __webpack_require__(336);
	var head = __webpack_require__(338);
	var RoutedTokens = __webpack_require__(344);

	var parser = function parser(string, extendedRules) {
	    return head(new Tokenizer(string, extendedRules));
	};

	module.exports = parser;

	// Constructs the paths from paths / pathValues that have strings.
	// If it does not have a string, just moves the value into the return
	// results.
	parser.fromPathsOrPathValues = function(paths, ext) {
	    if (!paths) {
	        return [];
	    }

	    var out = [];
	    for (var i = 0, len = paths.length; i < len; i++) {

	        // Is the path a string
	        if (typeof paths[i] === 'string') {
	            out[i] = parser(paths[i], ext);
	        }

	        // is the path a path value with a string value.
	        else if (typeof paths[i].path === 'string') {
	            out[i] = {
	                path: parser(paths[i].path, ext), value: paths[i].value
	            };
	        }

	        // just copy it over.
	        else {
	            out[i] = paths[i];
	        }
	    }

	    return out;
	};

	// If the argument is a string, this with convert, else just return
	// the path provided.
	parser.fromPath = function(path, ext) {
	    if (!path) {
	        return [];
	    }

	    if (typeof path === 'string') {
	        return parser(path, ext);
	    }

	    return path;
	};

	// Potential routed tokens.
	parser.RoutedTokens = RoutedTokens;


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var TokenTypes = __webpack_require__(337);
	var DOT_SEPARATOR = '.';
	var COMMA_SEPARATOR = ',';
	var OPENING_BRACKET = '[';
	var CLOSING_BRACKET = ']';
	var OPENING_BRACE = '{';
	var CLOSING_BRACE = '}';
	var COLON = ':';
	var ESCAPE = '\\';
	var DOUBLE_OUOTES = '"';
	var SINGE_OUOTES = "'";
	var SPACE = " ";
	var SPECIAL_CHARACTERS = '\\\'"[]., ';
	var EXT_SPECIAL_CHARACTERS = '\\{}\'"[]., :';

	var Tokenizer = module.exports = function(string, ext) {
	    this._string = string;
	    this._idx = -1;
	    this._extended = ext;
	    this.parseString = '';
	};

	Tokenizer.prototype = {
	    /**
	     * grabs the next token either from the peek operation or generates the
	     * next token.
	     */
	    next: function() {
	        var nextToken = this._nextToken ?
	            this._nextToken : getNext(this._string, this._idx, this._extended);

	        this._idx = nextToken.idx;
	        this._nextToken = false;
	        this.parseString += nextToken.token.token;

	        return nextToken.token;
	    },

	    /**
	     * will peak but not increment the tokenizer
	     */
	    peek: function() {
	        var nextToken = this._nextToken ?
	            this._nextToken : getNext(this._string, this._idx, this._extended);
	        this._nextToken = nextToken;

	        return nextToken.token;
	    }
	};

	Tokenizer.toNumber = function toNumber(x) {
	    if (!isNaN(+x)) {
	        return +x;
	    }
	    return NaN;
	};

	function toOutput(token, type, done) {
	    return {
	        token: token,
	        done: done,
	        type: type
	    };
	}

	function getNext(string, idx, ext) {
	    var output = false;
	    var token = '';
	    var specialChars = ext ?
	        EXT_SPECIAL_CHARACTERS : SPECIAL_CHARACTERS;
	    var done;

	    do {

	        done = idx + 1 >= string.length;
	        if (done) {
	            break;
	        }

	        // we have to peek at the next token
	        var character = string[idx + 1];

	        if (character !== undefined &&
	            specialChars.indexOf(character) === -1) {

	            token += character;
	            ++idx;
	            continue;
	        }

	        // The token to delimiting character transition.
	        else if (token.length) {
	            break;
	        }

	        ++idx;
	        var type;
	        switch (character) {
	            case DOT_SEPARATOR:
	                type = TokenTypes.dotSeparator;
	                break;
	            case COMMA_SEPARATOR:
	                type = TokenTypes.commaSeparator;
	                break;
	            case OPENING_BRACKET:
	                type = TokenTypes.openingBracket;
	                break;
	            case CLOSING_BRACKET:
	                type = TokenTypes.closingBracket;
	                break;
	            case OPENING_BRACE:
	                type = TokenTypes.openingBrace;
	                break;
	            case CLOSING_BRACE:
	                type = TokenTypes.closingBrace;
	                break;
	            case SPACE:
	                type = TokenTypes.space;
	                break;
	            case DOUBLE_OUOTES:
	            case SINGE_OUOTES:
	                type = TokenTypes.quote;
	                break;
	            case ESCAPE:
	                type = TokenTypes.escape;
	                break;
	            case COLON:
	                type = TokenTypes.colon;
	                break;
	            default:
	                type = TokenTypes.unknown;
	                break;
	        }
	        output = toOutput(character, type, false);
	        break;
	    } while (!done);

	    if (!output && token.length) {
	        output = toOutput(token, TokenTypes.token, false);
	    }

	    if (!output) {
	        output = {done: true};
	    }

	    return {
	        token: output,
	        idx: idx
	    };
	}




/***/ },
/* 337 */
/***/ function(module, exports) {

	var TokenTypes = {
	    token: 'token',
	    dotSeparator: '.',
	    commaSeparator: ',',
	    openingBracket: '[',
	    closingBracket: ']',
	    openingBrace: '{',
	    closingBrace: '}',
	    escape: '\\',
	    space: ' ',
	    colon: ':',
	    quote: 'quote',
	    unknown: 'unknown'
	};

	module.exports = TokenTypes;


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var TokenTypes = __webpack_require__(337);
	var E = __webpack_require__(339);
	var indexer = __webpack_require__(340);

	/**
	 * The top level of the parse tree.  This returns the generated path
	 * from the tokenizer.
	 */
	module.exports = function head(tokenizer) {
	    var token = tokenizer.next();
	    var state = {};
	    var out = [];

	    while (!token.done) {

	        switch (token.type) {
	            case TokenTypes.token:
	                var first = +token.token[0];
	                if (!isNaN(first)) {
	                    E.throwError(E.invalidIdentifier, tokenizer);
	                }
	                out[out.length] = token.token;
	                break;

	            // dotSeparators at the top level have no meaning
	            case TokenTypes.dotSeparator:
	                if (out.length === 0) {
	                    E.throwError(E.unexpectedToken, tokenizer);
	                }
	                break;

	            // Spaces do nothing.
	            case TokenTypes.space:
	                // NOTE: Spaces at the top level are allowed.
	                // titlesById  .summary is a valid path.
	                break;


	            // Its time to decend the parse tree.
	            case TokenTypes.openingBracket:
	                indexer(tokenizer, token, state, out);
	                break;

	            default:
	                E.throwError(E.unexpectedToken, tokenizer);
	                break;
	        }

	        // Keep cycling through the tokenizer.
	        token = tokenizer.next();
	    }

	    if (out.length === 0) {
	        E.throwError(E.invalidPath, tokenizer);
	    }

	    return out;
	};



/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = {
	    indexer: {
	        nested: 'Indexers cannot be nested.',
	        needQuotes: 'unquoted indexers must be numeric.',
	        empty: 'cannot have empty indexers.',
	        leadingDot: 'Indexers cannot have leading dots.',
	        leadingComma: 'Indexers cannot have leading comma.',
	        requiresComma: 'Indexers require commas between indexer args.',
	        routedTokens: 'Only one token can be used per indexer when specifying routed tokens.'
	    },
	    range: {
	        precedingNaN: 'ranges must be preceded by numbers.',
	        suceedingNaN: 'ranges must be suceeded by numbers.'
	    },
	    routed: {
	        invalid: 'Invalid routed token.  only integers|ranges|keys are supported.'
	    },
	    quote: {
	        empty: 'cannot have empty quoted keys.',
	        illegalEscape: 'Invalid escape character.  Only quotes are escapable.'
	    },
	    unexpectedToken: 'Unexpected token.',
	    invalidIdentifier: 'Invalid Identifier.',
	    invalidPath: 'Please provide a valid path.',
	    throwError: function(err, tokenizer, token) {
	        if (token) {
	            throw err + ' -- ' + tokenizer.parseString + ' with next token: ' + token;
	        }
	        throw err + ' -- ' + tokenizer.parseString;
	    }
	};



/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var TokenTypes = __webpack_require__(337);
	var E = __webpack_require__(339);
	var idxE = E.indexer;
	var range = __webpack_require__(341);
	var quote = __webpack_require__(342);
	var routed = __webpack_require__(343);

	/**
	 * The indexer is all the logic that happens in between
	 * the '[', opening bracket, and ']' closing bracket.
	 */
	module.exports = function indexer(tokenizer, openingToken, state, out) {
	    var token = tokenizer.next();
	    var done = false;
	    var allowedMaxLength = 1;
	    var routedIndexer = false;

	    // State variables
	    state.indexer = [];

	    while (!token.done) {

	        switch (token.type) {
	            case TokenTypes.token:
	            case TokenTypes.quote:

	                // ensures that token adders are properly delimited.
	                if (state.indexer.length === allowedMaxLength) {
	                    E.throwError(idxE.requiresComma, tokenizer);
	                }
	                break;
	        }

	        switch (token.type) {
	            // Extended syntax case
	            case TokenTypes.openingBrace:
	                routedIndexer = true;
	                routed(tokenizer, token, state, out);
	                break;


	            case TokenTypes.token:
	                var t = +token.token;
	                if (isNaN(t)) {
	                    E.throwError(idxE.needQuotes, tokenizer);
	                }
	                state.indexer[state.indexer.length] = t;
	                break;

	            // dotSeparators at the top level have no meaning
	            case TokenTypes.dotSeparator:
	                if (!state.indexer.length) {
	                    E.throwError(idxE.leadingDot, tokenizer);
	                }
	                range(tokenizer, token, state, out);
	                break;

	            // Spaces do nothing.
	            case TokenTypes.space:
	                break;

	            case TokenTypes.closingBracket:
	                done = true;
	                break;


	            // The quotes require their own tree due to what can be in it.
	            case TokenTypes.quote:
	                quote(tokenizer, token, state, out);
	                break;


	            // Its time to decend the parse tree.
	            case TokenTypes.openingBracket:
	                E.throwError(idxE.nested, tokenizer);
	                break;

	            case TokenTypes.commaSeparator:
	                ++allowedMaxLength;
	                break;

	            default:
	                E.throwError(E.unexpectedToken, tokenizer);
	                break;
	        }

	        // If done, leave loop
	        if (done) {
	            break;
	        }

	        // Keep cycling through the tokenizer.
	        token = tokenizer.next();
	    }

	    if (state.indexer.length === 0) {
	        E.throwError(idxE.empty, tokenizer);
	    }

	    if (state.indexer.length > 1 && routedIndexer) {
	        E.throwError(idxE.routedTokens, tokenizer);
	    }

	    // Remember, if an array of 1, keySets will be generated.
	    if (state.indexer.length === 1) {
	        state.indexer = state.indexer[0];
	    }

	    out[out.length] = state.indexer;

	    // Clean state.
	    state.indexer = undefined;
	};



/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var Tokenizer = __webpack_require__(336);
	var TokenTypes = __webpack_require__(337);
	var E = __webpack_require__(339);

	/**
	 * The indexer is all the logic that happens in between
	 * the '[', opening bracket, and ']' closing bracket.
	 */
	module.exports = function range(tokenizer, openingToken, state, out) {
	    var token = tokenizer.peek();
	    var dotCount = 1;
	    var done = false;
	    var inclusive = true;

	    // Grab the last token off the stack.  Must be an integer.
	    var idx = state.indexer.length - 1;
	    var from = Tokenizer.toNumber(state.indexer[idx]);
	    var to;

	    if (isNaN(from)) {
	        E.throwError(E.range.precedingNaN, tokenizer);
	    }

	    // Why is number checking so difficult in javascript.

	    while (!done && !token.done) {

	        switch (token.type) {

	            // dotSeparators at the top level have no meaning
	            case TokenTypes.dotSeparator:
	                if (dotCount === 3) {
	                    E.throwError(E.unexpectedToken, tokenizer);
	                }
	                ++dotCount;

	                if (dotCount === 3) {
	                    inclusive = false;
	                }
	                break;

	            case TokenTypes.token:
	                // move the tokenizer forward and save to.
	                to = Tokenizer.toNumber(tokenizer.next().token);

	                // throw potential error.
	                if (isNaN(to)) {
	                    E.throwError(E.range.suceedingNaN, tokenizer);
	                }

	                done = true;
	                break;

	            default:
	                done = true;
	                break;
	        }

	        // Keep cycling through the tokenizer.  But ranges have to peek
	        // before they go to the next token since there is no 'terminating'
	        // character.
	        if (!done) {
	            tokenizer.next();

	            // go to the next token without consuming.
	            token = tokenizer.peek();
	        }

	        // break and remove state information.
	        else {
	            break;
	        }
	    }

	    state.indexer[idx] = {from: from, to: inclusive ? to : to - 1};
	};



/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var TokenTypes = __webpack_require__(337);
	var E = __webpack_require__(339);
	var quoteE = E.quote;

	/**
	 * quote is all the parse tree in between quotes.  This includes the only
	 * escaping logic.
	 *
	 * parse-tree:
	 * <opening-quote>(.|(<escape><opening-quote>))*<opening-quote>
	 */
	module.exports = function quote(tokenizer, openingToken, state, out) {
	    var token = tokenizer.next();
	    var innerToken = '';
	    var openingQuote = openingToken.token;
	    var escaping = false;
	    var done = false;

	    while (!token.done) {

	        switch (token.type) {
	            case TokenTypes.token:
	            case TokenTypes.space:

	            case TokenTypes.dotSeparator:
	            case TokenTypes.commaSeparator:

	            case TokenTypes.openingBracket:
	            case TokenTypes.closingBracket:
	            case TokenTypes.openingBrace:
	            case TokenTypes.closingBrace:
	                if (escaping) {
	                    E.throwError(quoteE.illegalEscape, tokenizer);
	                }

	                innerToken += token.token;
	                break;


	            case TokenTypes.quote:
	                // the simple case.  We are escaping
	                if (escaping) {
	                    innerToken += token.token;
	                    escaping = false;
	                }

	                // its not a quote that is the opening quote
	                else if (token.token !== openingQuote) {
	                    innerToken += token.token;
	                }

	                // last thing left.  Its a quote that is the opening quote
	                // therefore we must produce the inner token of the indexer.
	                else {
	                    done = true;
	                }

	                break;
	            case TokenTypes.escape:
	                escaping = true;
	                break;

	            default:
	                E.throwError(E.unexpectedToken, tokenizer);
	        }

	        // If done, leave loop
	        if (done) {
	            break;
	        }

	        // Keep cycling through the tokenizer.
	        token = tokenizer.next();
	    }

	    if (innerToken.length === 0) {
	        E.throwError(quoteE.empty, tokenizer);
	    }

	    state.indexer[state.indexer.length] = innerToken;
	};



/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var TokenTypes = __webpack_require__(337);
	var RoutedTokens = __webpack_require__(344);
	var E = __webpack_require__(339);
	var routedE = E.routed;

	/**
	 * The routing logic.
	 *
	 * parse-tree:
	 * <opening-brace><routed-token>(:<token>)<closing-brace>
	 */
	module.exports = function routed(tokenizer, openingToken, state, out) {
	    var routeToken = tokenizer.next();
	    var named = false;
	    var name = '';

	    // ensure the routed token is a valid ident.
	    switch (routeToken.token) {
	        case RoutedTokens.integers:
	        case RoutedTokens.ranges:
	        case RoutedTokens.keys:
	            //valid
	            break;
	        default:
	            E.throwError(routedE.invalid, tokenizer);
	            break;
	    }

	    // Now its time for colon or ending brace.
	    var next = tokenizer.next();

	    // we are parsing a named identifier.
	    if (next.type === TokenTypes.colon) {
	        named = true;

	        // Get the token name.
	        next = tokenizer.next();
	        if (next.type !== TokenTypes.token) {
	            E.throwError(routedE.invalid, tokenizer);
	        }
	        name = next.token;

	        // move to the closing brace.
	        next = tokenizer.next();
	    }

	    // must close with a brace.

	    if (next.type === TokenTypes.closingBrace) {
	        var outputToken = {
	            type: routeToken.token,
	            named: named,
	            name: name
	        };
	        state.indexer[state.indexer.length] = outputToken;
	    }

	    // closing brace expected
	    else {
	        E.throwError(routedE.invalid, tokenizer);
	    }

	};



/***/ },
/* 344 */
/***/ function(module, exports) {

	module.exports = {
	    integers: 'integers',
	    ranges: 'ranges',
	    keys: 'keys'
	};


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateQueryPath = generateQueryPath;

	var _falcorPathSyntax = __webpack_require__(335);

	var _falcorPathSyntax2 = _interopRequireDefault(_falcorPathSyntax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function generateQueryPath(query) {
	  var pathSet = _falcorPathSyntax2.default.fromPath(query);
	  var queryString = JSON.stringify(pathSet);
	  var queryPath = ['queries', queryString];
	  return queryPath;
	}

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _unregisterQuery = __webpack_require__(347);

	var _unregisterQuery2 = _interopRequireDefault(_unregisterQuery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var unregisterQuery = [_unregisterQuery2.default];

	exports.default = unregisterQuery;

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unregisterQuery;

	var _lodash = __webpack_require__(330);

	var _utils = __webpack_require__(345);

	var _alias = __webpack_require__(2);

	var _alias2 = _interopRequireDefault(_alias);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function unregisterQuery(_ref) {
	  var input = _ref.input;
	  var modules = _ref.modules;
	  var state = _ref.state;
	  var guid = input.guid;

	  var falcorModule = modules[_alias2.default];
	  var queriesState = state.select([].concat(_toConsumableArray(falcorModule.path), ['queries']));
	  queriesState.unset(guid);
	}

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _replaceQueries = __webpack_require__(349);

	var _replaceQueries2 = _interopRequireDefault(_replaceQueries);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var replaceQueries = [_replaceQueries2.default];

	exports.default = replaceQueries;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = replaceQueries;

	var _lodash = __webpack_require__(330);

	var _falcorPathSyntax = __webpack_require__(335);

	var _falcorPathSyntax2 = _interopRequireDefault(_falcorPathSyntax);

	var _utils = __webpack_require__(345);

	var _alias = __webpack_require__(2);

	var _alias2 = _interopRequireDefault(_alias);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function replaceQueries(_ref) {
	  var input = _ref.input;
	  var state = _ref.state;
	  var modules = _ref.modules;

	  var falcorModule = modules[_alias2.default];
	  var queriesState = state.select([].concat(_toConsumableArray(falcorModule.path), ['queries']));
	  var oldGuid = input.oldGuid;
	  var nextQueryInfo = input.nextQueryInfo;


	  queriesState.unset(oldGuid);
	  var convertedToPathSets = nextQueryInfo.queries.map(_falcorPathSyntax2.default.fromPath);
	  queriesState.set(nextQueryInfo.guid, convertedToPathSets);
	}

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initializeServices = initializeServices;

	var _falcor = __webpack_require__(351);

	var _falcor2 = _interopRequireDefault(_falcor);

	var _falcorHttpDatasource = __webpack_require__(481);

	var _falcorHttpDatasource2 = _interopRequireDefault(_falcorHttpDatasource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function initializeServices(module, options) {
	  var initialState = options.initialState;
	  var dataSource = options.dataSource;
	  var disableTimeout = options.disableTimeout;


	  var falcorModel = new _falcor2.default.Model({
	    cache: initialState,
	    source: new _falcorHttpDatasource2.default(dataSource, disableTimeout ? { timeout: 0 } : {}),
	    onChange: module.getSignals().batchQuery
	  });

	  var falcorServices = {
	    get: function get(query) {
	      // Falcor's model get api doesn't match the docs.
	      // Its not an Array.<PathSet> but actually (pathSet1,pathSet2,pathSetN)
	      // this total makes sense or not, als;kdfjfas ldfkjasoeifju saleknmncl
	      return falcorModel.get.apply(falcorModel, _toConsumableArray(query));
	    },
	    set: function set(jsonGraph) {
	      return falcorModel.set(jsonGraph);
	    },
	    call: function call(functionPath) {
	      var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	      var refSuffixes = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	      var thisPaths = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

	      // functionPath - {Path}            the path to the function to invoke
	      // args         - {Array.<Object>}  the arguments to pass to the function
	      // refSuffixes  - {Array.<PathSet>} paths to retrieve from the targets of JSONGraph References in the function's response.
	      // thisPaths    - {Array.<PathSet>} paths to retrieve from function's this object after successful function execution
	      return falcorModel.call(functionPath, args, refSuffixes, thisPaths);
	    },
	    getLocal: function getLocal(query) {
	      return falcorModel.getCache.apply(falcorModel, _toConsumableArray(query));
	    },
	    setLocal: function setLocal(jsonGraph) {
	      var model = falcorModel.setCache(jsonGraph);
	      return model;
	    }
	  };

	  return { falcorModel: falcorModel, falcorServices: falcorServices };
	}

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function falcor(opts) {
	    return new falcor.Model(opts);
	}

	/**
	 * A filtering method for keys from a falcor json response.  The only gotcha
	 * to this method is when the incoming json is undefined, then undefined will
	 * be returned.
	 *
	 * @public
	 * @param {Object} json - The json response from a falcor model.
	 * @returns {Array} - the keys that are in the model response minus the deref
	 * _private_ meta data.
	 */
	falcor.keys = function getJSONKeys(json) {
	    if (!json) {
	        return undefined;
	    }

	    return Object.
	        keys(json).
	        filter(function(key) {
	            return key !== "$__path";
	        });
	};

	if (typeof Promise === "function") {
	    falcor.Promise = Promise;
	} else {
	    falcor.Promise = __webpack_require__(352);
	}

	module.exports = falcor;

	falcor.Model = __webpack_require__(361);


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(353)


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(354);
	__webpack_require__(356);
	__webpack_require__(357);
	__webpack_require__(358);
	__webpack_require__(359);


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var asap = __webpack_require__(355);

	function noop() {}

	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable

	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.


	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	module.exports = Promise;

	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._37 = 0;
	  this._12 = null;
	  this._59 = [];
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._99 = noop;

	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};

	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._37 === 3) {
	    self = self._12;
	  }
	  if (self._37 === 0) {
	    self._59.push(deferred);
	    return;
	  }
	  asap(function() {
	    var cb = self._37 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._37 === 1) {
	        resolve(deferred.promise, self._12);
	      } else {
	        reject(deferred.promise, self._12);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._12);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._37 = 3;
	      self._12 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._37 = 1;
	  self._12 = newValue;
	  finale(self);
	}

	function reject(self, newValue) {
	  self._37 = 2;
	  self._12 = newValue;
	  finale(self);
	}
	function finale(self) {
	  for (var i = 0; i < self._59.length; i++) {
	    handle(self, self._59[i]);
	  }
	  self._59 = null;
	}

	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 355 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(354);

	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(354);

	module.exports = Promise;
	Promise.prototype['finally'] = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//This file contains the ES6 extensions to the core Promises/A+ API

	var Promise = __webpack_require__(354);

	module.exports = Promise;

	/* Static Functions */

	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');

	function valuePromise(value) {
	  var p = new Promise(Promise._99);
	  p._37 = 1;
	  p._12 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;

	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;

	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};

	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);

	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._37 === 3) {
	            val = val._12;
	          }
	          if (val._37 === 1) return res(i, val._12);
	          if (val._37 === 2) reject(val._12);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};

	/* Prototype Methods */

	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// This file contains then/promise specific extensions that are only useful
	// for node.js interop

	var Promise = __webpack_require__(354);
	var asap = __webpack_require__(360);

	module.exports = Promise;

	/* Static Functions */

	Promise.denodeify = function (fn, argumentCount) {
	  argumentCount = argumentCount || Infinity;
	  return function () {
	    var self = this;
	    var args = Array.prototype.slice.call(arguments, 0,
	        argumentCount > 0 ? argumentCount : 0);
	    return new Promise(function (resolve, reject) {
	      args.push(function (err, res) {
	        if (err) reject(err);
	        else resolve(res);
	      })
	      var res = fn.apply(self, args);
	      if (res &&
	        (
	          typeof res === 'object' ||
	          typeof res === 'function'
	        ) &&
	        typeof res.then === 'function'
	      ) {
	        resolve(res);
	      }
	    })
	  }
	}
	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback =
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        })
	      }
	    }
	  }
	}

	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;

	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	}


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(355);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var ModelRoot = __webpack_require__(362);
	var ModelDataSourceAdapter = __webpack_require__(367);

	var RequestQueue = __webpack_require__(368);
	var ModelResponse = __webpack_require__(430);
	var CallResponse = __webpack_require__(432);
	var InvalidateResponse = __webpack_require__(433);

	var ASAPScheduler = __webpack_require__(436);
	var TimeoutScheduler = __webpack_require__(437);
	var ImmediateScheduler = __webpack_require__(366);

	var arrayClone = __webpack_require__(438);
	var arraySlice = __webpack_require__(428);

	var collectLru = __webpack_require__(439);
	var pathSyntax = __webpack_require__(335);

	var getSize = __webpack_require__(396);
	var isObject = __webpack_require__(365);
	var isPrimitive = __webpack_require__(381);
	var isJSONEnvelope = __webpack_require__(435);
	var isJSONGraphEnvelope = __webpack_require__(440);

	var setCache = __webpack_require__(441);
	var setJSONGraphs = __webpack_require__(372);
	var jsong = __webpack_require__(442);
	var ID = 0;
	var validateInput = __webpack_require__(443);
	var noOp = function() {};
	var getCache = __webpack_require__(444);
	var get = __webpack_require__(446);
	var GET_VALID_INPUT = __webpack_require__(456);

	module.exports = Model;

	Model.ref = jsong.ref;
	Model.atom = jsong.atom;
	Model.error = jsong.error;
	Model.pathValue = jsong.pathValue;
	/**
	 * This callback is invoked when the Model's cache is changed.
	 * @callback Model~onChange
	 */

	 /**
	 * This function is invoked on every JSONGraph Error retrieved from the DataSource. This function allows Error objects to be transformed before being stored in the Model's cache.
	 * @callback Model~errorSelector
	 * @param {Object} jsonGraphError - the JSONGraph Error object to transform before it is stored in the Model's cache.
	 * @returns {Object} the JSONGraph Error object to store in the Model cache.
	 */

	 /**
	 * This function is invoked every time a value in the Model cache is about to be replaced with a new value. If the function returns true, the existing value is replaced with a new value and the version flag on all of the value's ancestors in the tree are incremented.
	 * @callback Model~comparator
	 * @param {Object} existingValue - the current value in the Model cache.
	 * @param {Object} newValue - the value about to be set into the Model cache.
	 * @returns {Boolean} the Boolean value indicating whether the new value and the existing value are equal.
	 */

	/**
	 * A Model object is used to execute commands against a {@link JSONGraph} object. {@link Model}s can work with a local JSONGraph cache, or it can work with a remote {@link JSONGraph} object through a {@link DataSource}.
	 * @constructor
	 * @param {?Object} options - a set of options to customize behavior
	 * @param {?DataSource} options.source - a data source to retrieve and manage the {@link JSONGraph}
	 * @param {?JSONGraph} options.cache - initial state of the {@link JSONGraph}
	 * @param {?number} options.maxSize - the maximum size of the cache
	 * @param {?number} options.collectRatio - the ratio of the maximum size to collect when the maxSize is exceeded
	 * @param {?Model~errorSelector} options.errorSelector - a function used to translate errors before they are returned
	 * @param {?Model~onChange} options.onChange - a function called whenever the Model's cache is changed
	 * @param {?Model~comparator} options.comparator - a function called whenever a value in the Model's cache is about to be replaced with a new value.
	 */
	function Model(o) {

	    var options = o || {};
	    this._root = options._root || new ModelRoot(options);
	    this._path = options.path || options._path || [];
	    this._scheduler = options.scheduler || options._scheduler || new ImmediateScheduler();
	    this._source = options.source || options._source;
	    this._request = options.request || options._request || new RequestQueue(this, this._scheduler);
	    this._ID = ID++;

	    if (typeof options.maxSize === "number") {
	        this._maxSize = options.maxSize;
	    } else {
	        this._maxSize = options._maxSize || Model.prototype._maxSize;
	    }

	    if (typeof options.collectRatio === "number") {
	        this._collectRatio = options.collectRatio;
	    } else {
	        this._collectRatio = options._collectRatio || Model.prototype._collectRatio;
	    }

	    if (options.boxed || options.hasOwnProperty("_boxed")) {
	        this._boxed = options.boxed || options._boxed;
	    }

	    if (options.materialized || options.hasOwnProperty("_materialized")) {
	        this._materialized = options.materialized || options._materialized;
	    }

	    if (typeof options.treatErrorsAsValues === "boolean") {
	        this._treatErrorsAsValues = options.treatErrorsAsValues;
	    } else if (options.hasOwnProperty("_treatErrorsAsValues")) {
	        this._treatErrorsAsValues = options._treatErrorsAsValues;
	    }

	    this._allowFromWhenceYouCame = options.allowFromWhenceYouCame ||
	        options._allowFromWhenceYouCame || false;

	    if (options.cache) {
	        this.setCache(options.cache);
	    }
	}

	Model.prototype.constructor = Model;

	Model.prototype._materialized = false;
	Model.prototype._boxed = false;
	Model.prototype._progressive = false;
	Model.prototype._treatErrorsAsValues = false;
	Model.prototype._maxSize = Math.pow(2, 53) - 1;
	Model.prototype._collectRatio = 0.75;

	/**
	 * The get method retrieves several {@link Path}s or {@link PathSet}s from a {@link Model}. The get method loads each value into a JSON object and returns in a ModelResponse.
	 * @function
	 * @param {...PathSet} path - the path(s) to retrieve
	 * @return {ModelResponse.<JSONEnvelope>} - the requested data as JSON
	 */
	Model.prototype.get = __webpack_require__(457);

	/**
	 * The get method retrieves several {@link Path}s or {@link PathSet}s from a {@link Model}. The get method loads each value into a JSON object and returns in a ModelResponse.
	 * @function
	 * @private
	 * @param {Array.<PathSet>} paths - the path(s) to retrieve
	 * @return {ModelResponse.<JSONEnvelope>} - the requested data as JSON
	 */
	Model.prototype._getWithPaths = __webpack_require__(463);

	/**
	 * Sets the value at one or more places in the JSONGraph model. The set method accepts one or more {@link PathValue}s, each of which is a combination of a location in the document and the value to place there.  In addition to accepting  {@link PathValue}s, the set method also returns the values after the set operation is complete.
	 * @function
	 * @return {ModelResponse.<JSONEnvelope>} - an {@link Observable} stream containing the values in the JSONGraph model after the set was attempted
	 */
	Model.prototype.set = __webpack_require__(464);

	/**
	 * The preload method retrieves several {@link Path}s or {@link PathSet}s from a {@link Model} and loads them into the Model cache.
	 * @function
	 * @param {...PathSet} path - the path(s) to retrieve
	 * @return {ModelResponse.<JSONEnvelope>} - a ModelResponse that completes when the data has been loaded into the cache.
	 */
	Model.prototype.preload = function preload() {
	    var out = validateInput(arguments, GET_VALID_INPUT, "preload");
	    if (out !== true) {
	        return new ModelResponse(function(o) {
	            o.onError(out);
	        });
	    }
	    var args = Array.prototype.slice.call(arguments);
	    var self = this;
	    return new ModelResponse(function(obs) {
	        return self.get.apply(self, args).subscribe(function() {
	        }, function(err) {
	            obs.onError(err);
	        }, function() {
	            obs.onCompleted();
	        });
	    });
	};

	/**
	 * Invokes a function in the JSON Graph.
	 * @function
	 * @param {Path} functionPath - the path to the function to invoke
	 * @param {Array.<Object>} args - the arguments to pass to the function
	 * @param {Array.<PathSet>} refPaths - the paths to retrieve from the JSON Graph References in the message returned from the function
	 * @param {Array.<PathSet>} thisPaths - the paths to retrieve from function's this object after successful function execution
	 * @return {ModelResponse.<JSONEnvelope> - a JSONEnvelope contains the values returned from the function
	 */
	Model.prototype.call = function call() {
	    var args;
	    var argsIdx = -1;
	    var argsLen = arguments.length;
	    args = new Array(argsLen);
	    while (++argsIdx < argsLen) {
	        var arg = arguments[argsIdx];
	        args[argsIdx] = arg;
	        var argType = typeof arg;
	        if (argsIdx > 1 && !Array.isArray(arg) ||
	            argsIdx === 0 && !Array.isArray(arg) && argType !== "string" ||
	            argsIdx === 1 && !Array.isArray(arg) && !isPrimitive(arg)) {
	            /* eslint-disable no-loop-func */
	            return new ModelResponse(function(o) {
	                o.onError(new Error("Invalid argument"));
	            });
	            /* eslint-enable no-loop-func */
	        }
	    }

	    return new CallResponse(this, args[0], args[1], args[2], args[3]);
	};

	/**
	 * The invalidate method synchronously removes several {@link Path}s or {@link PathSet}s from a {@link Model} cache.
	 * @function
	 * @param {...PathSet} path - the  paths to remove from the {@link Model}'s cache.
	 */
	Model.prototype.invalidate = function invalidate() {
	    var args;
	    var argsIdx = -1;
	    var argsLen = arguments.length;
	    args = [];
	    while (++argsIdx < argsLen) {
	        args[argsIdx] = pathSyntax.fromPath(arguments[argsIdx]);
	        if (!Array.isArray(args[argsIdx])) {
	            throw new Error("Invalid argument");
	        }
	    }

	    // creates the obs, subscribes and will throw the errors if encountered.
	    (new InvalidateResponse(this, args)).
	        subscribe(noOp, function(e) {
	            throw e;
	        });
	};

	/**
	 * Returns a new {@link Model} bound to a location within the {@link
	 * JSONGraph}. The bound location is never a {@link Reference}: any {@link
	 * Reference}s encountered while resolving the bound {@link Path} are always
	 * replaced with the {@link Reference}s target value. For subsequent operations
	 * on the {@link Model}, all paths will be evaluated relative to the bound
	 * path. Deref allows you to:
	 * - Expose only a fragment of the {@link JSONGraph} to components, rather than
	 *   the entire graph
	 * - Hide the location of a {@link JSONGraph} fragment from components
	 * - Optimize for executing multiple operations and path looksup at/below the
	 *   same location in the {@link JSONGraph}
	 * @method
	 * @param {Path} derefPath - the path to the object that the new Model should
	 * refer to
	 * @return {Model} - the dereferenced {@link Model}, or an empty stream if
	 * nothing is found at the path
	 * @example
	var Model = falcor.Model;
	var model = new Model({
	  cache: {
	    users: [
	      Model.ref(["usersById", 32])
	    ],
	    usersById: {
	      32: {
	        name: "Steve",
	        surname: "McGuire"
	      }
	    }
	  }
	});

	model.
	    get(['users', 0, 'name']).
	    subscribe(function(jsonEnv) {
	        var userModel = model.deref(jsonEnv.json.users[0]);
	        console.log(model.getPath());
	        console.log(userModel.getPath());
	   });
	});

	// prints the following:
	// []
	// ["usersById", 32] - because userModel refers to target of reference at ["users", 0]
	 */
	Model.prototype.deref = __webpack_require__(470);

	/**
	 * A dereferenced model can become invalid when the reference from which it was
	 * built has been removed/collected/expired/etc etc.  To fix the issue, a from
	 * the parent request should be made (no parent, then from the root) for a valid
	 * path and re-dereference performed to update what the model is bound too.
	 *
	 * @method
	 * @private
	 * @return {Boolean} - If the currently deref'd model is still considered a
	 * valid deref.
	 */
	Model.prototype._hasValidParentReference = __webpack_require__(472);

	/**
	 * Get data for a single {@link Path}.
	 * @param {Path} path - the path to retrieve
	 * @return {Observable.<*>} - the value for the path
	 * @example
	 var model = new falcor.Model({source: new falcor.HttpDataSource("/model.json") });

	 model.
	     getValue('user.name').
	     subscribe(function(name) {
	         console.log(name);
	     });

	 // The code above prints "Jim" to the console.
	 */
	Model.prototype.getValue = __webpack_require__(473);

	/**
	 * Set value for a single {@link Path}.
	 * @param {Path} path - the path to set
	 * @param {Object} value - the value to set
	 * @return {Observable.<*>} - the value for the path
	 * @example
	 var model = new falcor.Model({source: new falcor.HttpDataSource("/model.json") });

	 model.
	     setValue('user.name', 'Jim').
	     subscribe(function(name) {
	         console.log(name);
	     });

	 // The code above prints "Jim" to the console.
	 */
	Model.prototype.setValue = __webpack_require__(474);

	// TODO: Does not throw if given a PathSet rather than a Path, not sure if it should or not.
	// TODO: Doc not accurate? I was able to invoke directly against the Model, perhaps because I don't have a data source?
	// TODO: Not clear on what it means to "retrieve objects in addition to JSONGraph values"
	/**
	 * Synchronously retrieves a single path from the local {@link Model} only and will not retrieve missing paths from the {@link DataSource}. This method can only be invoked when the {@link Model} does not have a {@link DataSource} or from within a selector function. See {@link Model.prototype.get}. The getValueSync method differs from the asynchronous get methods (ex. get, getValues) in that it can be used to retrieve objects in addition to JSONGraph values.
	 * @method
	 * @private
	 * @arg {Path} path - the path to retrieve
	 * @return {*} - the value for the specified path
	 */
	Model.prototype._getValueSync = __webpack_require__(475);

	/**
	 * @private
	 */
	Model.prototype._setValueSync = __webpack_require__(476);

	/**
	 * @private
	 */
	Model.prototype._derefSync = __webpack_require__(477);

	/**
	 * Set the local cache to a {@link JSONGraph} fragment. This method can be a useful way of mocking a remote document, or restoring the local cache from a previously stored state.
	 * @param {JSONGraph} jsonGraph - the {@link JSONGraph} fragment to use as the local cache
	 */
	Model.prototype.setCache = function modelSetCache(cacheOrJSONGraphEnvelope) {
	    var cache = this._root.cache;
	    if (cacheOrJSONGraphEnvelope !== cache) {
	        var modelRoot = this._root;
	        var boundPath = this._path;
	        this._path = [];
	        this._root.cache = {};
	        if (typeof cache !== "undefined") {
	            collectLru(modelRoot, modelRoot.expired, getSize(cache), 0);
	        }
	        var out;
	        if (isJSONGraphEnvelope(cacheOrJSONGraphEnvelope)) {
	            out = setJSONGraphs(this, [cacheOrJSONGraphEnvelope])[0];
	        } else if (isJSONEnvelope(cacheOrJSONGraphEnvelope)) {
	            out = setCache(this, [cacheOrJSONGraphEnvelope])[0];
	        } else if (isObject(cacheOrJSONGraphEnvelope)) {
	            out = setCache(this, [{ json: cacheOrJSONGraphEnvelope }])[0];
	        }

	        // performs promotion without producing output.
	        if (out) {
	            get.getWithPathsAsPathMap(this, out, []);
	        }
	        this._path = boundPath;
	    } else if (typeof cache === "undefined") {
	        this._root.cache = {};
	    }
	    return this;
	};

	/**
	 * Get the local {@link JSONGraph} cache. This method can be a useful to store the state of the cache.
	 * @param {...Array.<PathSet>} [pathSets] - The path(s) to retrieve. If no paths are specified, the entire {@link JSONGraph} is returned.
	 * @return {JSONGraph} all of the {@link JSONGraph} data in the {@link Model} cache.
	 * @example
	 // Storing the boxshot of the first 10 titles in the first 10 genreLists to local storage.
	 localStorage.setItem('cache', JSON.stringify(model.getCache("genreLists[0...10][0...10].boxshot")));
	 */
	Model.prototype.getCache = function _getCache() {
	    var paths = arraySlice(arguments);
	    if (paths.length === 0) {
	        return getCache(this._root.cache);
	    }

	    var result = [{}];
	    var path = this._path;
	    get.getWithPathsAsJSONGraph(this, paths, result);
	    this._path = path;
	    return result[0].jsonGraph;
	};

	/**
	 * Retrieves a number which is incremented every single time a value is changed underneath the Model or the object at an optionally-provided Path beneath the Model.
	 * @param {Path?} path - a path at which to retrieve the version number
	 * @return {Number} a version number which changes whenever a value is changed underneath the Model or provided Path
	 */
	Model.prototype.getVersion = function getVersion(pathArg) {
	    var path = pathArg && pathSyntax.fromPath(pathArg) || [];
	    if (Array.isArray(path) === false) {
	        throw new Error("Model#getVersion must be called with an Array path.");
	    }
	    if (this._path.length) {
	        path = this._path.concat(path);
	    }
	    return this._getVersion(this, path);
	};

	Model.prototype._syncCheck = function syncCheck(name) {
	    if (Boolean(this._source) && this._root.syncRefCount <= 0 && this._root.unsafeMode === false) {
	        throw new Error("Model#" + name + " may only be called within the context of a request selector.");
	    }
	    return true;
	};

	/* eslint-disable guard-for-in */
	Model.prototype._clone = function cloneModel(opts) {
	    var clone = new Model(this);
	    for (var key in opts) {
	        var value = opts[key];
	        if (value === "delete") {
	            delete clone[key];
	        } else {
	            clone[key] = value;
	        }
	    }
	    clone.setCache = void 0;
	    return clone;
	};
	/* eslint-enable */

	/**
	 * Returns a clone of the {@link Model} that enables batching. Within the configured time period, paths for get operations are collected and sent to the {@link DataSource} in a batch. Batching can be more efficient if the {@link DataSource} access the network, potentially reducing the number of HTTP requests to the server.
	 * @param {?Scheduler|number} schedulerOrDelay - Either a {@link Scheduler} that determines when to send a batch to the {@link DataSource}, or the number in milliseconds to collect a batch before sending to the {@link DataSource}. If this parameter is omitted, then batch collection ends at the end of the next tick.
	 * @return {Model} a Model which schedules a batch of get requests to the DataSource.
	 */
	Model.prototype.batch = function batch(schedulerOrDelayArg) {
	    var schedulerOrDelay = schedulerOrDelayArg;
	    if (typeof schedulerOrDelay === "number") {
	        schedulerOrDelay = new TimeoutScheduler(Math.round(Math.abs(schedulerOrDelay)));
	    } else if (!schedulerOrDelay || !schedulerOrDelay.schedule) {
	        schedulerOrDelay = new ASAPScheduler();
	    }
	    var clone = this._clone();
	    clone._request = new RequestQueue(clone, schedulerOrDelay);

	    return clone;
	};

	/**
	 * Returns a clone of the {@link Model} that disables batching. This is the default mode. Each get operation will be executed on the {@link DataSource} separately.
	 * @name unbatch
	 * @memberof Model.prototype
	 * @function
	 * @return {Model} a {@link Model} that batches requests of the same type and sends them to the data source together
	 */
	Model.prototype.unbatch = function unbatch() {
	    var clone = this._clone();
	    clone._request = new RequestQueue(clone, new ImmediateScheduler());
	    return clone;
	};

	/**
	 * Returns a clone of the {@link Model} that treats errors as values. Errors will be reported in the same callback used to report data. Errors will appear as objects in responses, rather than being sent to the {@link Observable~onErrorCallback} callback of the {@link ModelResponse}.
	 * @return {Model}
	 */
	Model.prototype.treatErrorsAsValues = function treatErrorsAsValues() {
	    return this._clone({
	        _treatErrorsAsValues: true
	    });
	};

	/**
	 * Adapts a Model to the {@link DataSource} interface.
	 * @return {DataSource}
	 * @example
	var model =
	    new falcor.Model({
	        cache: {
	            user: {
	                name: "Steve",
	                surname: "McGuire"
	            }
	        }
	    }),
	    proxyModel = new falcor.Model({ source: model.asDataSource() });

	// Prints "Steve"
	proxyModel.getValue("user.name").
	    then(function(name) {
	        console.log(name);
	    });
	 */
	Model.prototype.asDataSource = function asDataSource() {
	    return new ModelDataSourceAdapter(this);
	};

	Model.prototype._materialize = function materialize() {
	    return this._clone({
	        _materialized: true
	    });
	};

	Model.prototype._dematerialize = function dematerialize() {
	    return this._clone({
	        _materialized: "delete"
	    });
	};

	/**
	 * Returns a clone of the {@link Model} that boxes values returning the wrapper ({@link Atom}, {@link Reference}, or {@link Error}), rather than the value inside it. This allows any metadata attached to the wrapper to be inspected.
	 * @return {Model}
	 */
	Model.prototype.boxValues = function boxValues() {
	    return this._clone({
	        _boxed: true
	    });
	};

	/**
	 * Returns a clone of the {@link Model} that unboxes values, returning the value inside of the wrapper ({@link Atom}, {@link Reference}, or {@link Error}), rather than the wrapper itself. This is the default mode.
	 * @return {Model}
	 */
	Model.prototype.unboxValues = function unboxValues() {
	    return this._clone({
	        _boxed: "delete"
	    });
	};

	/**
	 * Returns a clone of the {@link Model} that only uses the local {@link JSONGraph} and never uses a {@link DataSource} to retrieve missing paths.
	 * @return {Model}
	 */
	Model.prototype.withoutDataSource = function withoutDataSource() {
	    return this._clone({
	        _source: "delete"
	    });
	};

	Model.prototype.toJSON = function toJSON() {
	    return {
	        $type: "ref",
	        value: this._path
	    };
	};

	/**
	 * Returns the {@link Path} to the object within the JSON Graph that this Model references.
	 * @return {Path}
	 * @example
	var Model = falcor.Model;
	var model = new Model({
	  cache: {
	    users: [
	      Model.ref(["usersById", 32])
	    ],
	    usersById: {
	      32: {
	        name: "Steve",
	        surname: "McGuire"
	      }
	    }
	  }
	});

	model.
	    get(['users', 0, 'name']).
	    subscribe(function(jsonEnv) {
	        var userModel = model.deref(jsonEnv.json.users[0]);
	        console.log(model.getPath());
	        console.log(userModel.getPath());
	   });
	});

	// prints the following:
	// []
	// ["usersById", 32] - because userModel refers to target of reference at ["users", 0]
	 */
	Model.prototype.getPath = function getPath() {
	    return arrayClone(this._path);
	};

	/**
	 * This one is actually private.  I would not use this without talking to
	 * jhusain, sdesai, or michaelbpaulson (github).
	 * @private
	 */
	Model.prototype._fromWhenceYouCame = function fromWhenceYouCame(allow) {
	    return this._clone({
	        _allowFromWhenceYouCame: allow === undefined ? true : allow
	    });
	};

	Model.prototype._getBoundValue = __webpack_require__(415);
	Model.prototype._getVersion = __webpack_require__(478);
	Model.prototype._getValueSync = __webpack_require__(416);

	Model.prototype._getPathValuesAsPathMap = get.getWithPathsAsPathMap;
	Model.prototype._getPathValuesAsJSONG = get.getWithPathsAsJSONGraph;

	Model.prototype._setPathValues = __webpack_require__(414);
	Model.prototype._setPathMaps = __webpack_require__(441);
	Model.prototype._setJSONGs = __webpack_require__(372);
	Model.prototype._setCache = __webpack_require__(441);

	Model.prototype._invalidatePathValues = __webpack_require__(479);
	Model.prototype._invalidatePathMaps = __webpack_require__(480);


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(363);
	var hasOwn = __webpack_require__(364);
	var ImmediateScheduler = __webpack_require__(366);

	function ModelRoot(o) {

	    var options = o || {};

	    this.syncRefCount = 0;
	    this.expired = options.expired || [];
	    this.unsafeMode = options.unsafeMode || false;
	    this.collectionScheduler = options.collectionScheduler || new ImmediateScheduler();
	    this.cache = {};

	    if (isFunction(options.comparator)) {
	        this.comparator = options.comparator;
	    }

	    if (isFunction(options.errorSelector)) {
	        this.errorSelector = options.errorSelector;
	    }

	    if (isFunction(options.onChange)) {
	        this.onChange = options.onChange;
	    }
	}

	ModelRoot.prototype.errorSelector = function errorSelector(x, y) {
	    return y;
	};
	ModelRoot.prototype.comparator = function comparator(cacheNode, messageNode) {
	    if (hasOwn(cacheNode, "value") && hasOwn(messageNode, "value")) {
	        // They are the same only if the following fields are the same.
	        return cacheNode.value === messageNode.value &&
	            cacheNode.$type === messageNode.$type &&
	            cacheNode.$expires === messageNode.$expires;
	    }
	    return cacheNode === messageNode;
	};

	module.exports = ModelRoot;


/***/ },
/* 363 */
/***/ function(module, exports) {

	var functionTypeof = "function";

	module.exports = function isFunction(func) {
	    return Boolean(func) && typeof func === functionTypeof;
	};


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(365);
	var hasOwn = Object.prototype.hasOwnProperty;

	module.exports = function(obj, prop) {
	  return isObject(obj) && hasOwn.call(obj, prop);
	};


/***/ },
/* 365 */
/***/ function(module, exports) {

	var objTypeof = "object";
	module.exports = function isObject(value) {
	    return value !== null && typeof value === objTypeof;
	};


/***/ },
/* 366 */
/***/ function(module, exports) {

	var empty = {dispose: function() {}};

	function ImmediateScheduler() {}

	ImmediateScheduler.prototype.schedule = function schedule(action) {
	    action();
	    return empty;
	};

	ImmediateScheduler.prototype.scheduleWithState = function scheduleWithState(state, action) {
	    action(this, state);
	    return empty;
	};

	module.exports = ImmediateScheduler;


/***/ },
/* 367 */
/***/ function(module, exports) {

	function ModelDataSourceAdapter(model) {
	    this._model = model._materialize().boxValues().treatErrorsAsValues();
	}

	ModelDataSourceAdapter.prototype.get = function get(pathSets) {
	    return this._model.get.apply(this._model, pathSets)._toJSONG();
	};

	ModelDataSourceAdapter.prototype.set = function set(jsongResponse) {
	    return this._model.set(jsongResponse)._toJSONG();
	};

	ModelDataSourceAdapter.prototype.call = function call(path, args, suffixes, paths) {
	    var params = [path, args, suffixes].concat(paths);
	    return this._model.call.apply(this._model, params)._toJSONG();
	};

	module.exports = ModelDataSourceAdapter;


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	var RequestTypes = __webpack_require__(369);
	var sendSetRequest = __webpack_require__(370);
	var GetRequest = __webpack_require__(426);
	var falcorPathUtils = __webpack_require__(384);

	/**
	 * The request queue is responsible for queuing the operations to
	 * the model"s dataSource.
	 *
	 * @param {Model} model -
	 * @param {Scheduler} scheduler -
	 */
	function RequestQueueV2(model, scheduler) {
	    this.model = model;
	    this.scheduler = scheduler;
	    this.requests = this._requests = [];
	}

	RequestQueueV2.prototype = {
	    /**
	     * Sets the scheduler, but will not affect any current requests.
	     */
	    setScheduler: function(scheduler) {
	        this.scheduler = scheduler;
	    },

	    /**
	     * performs a set against the dataSource.  Sets, though are not batched
	     * currently could be batched potentially in the future.  Since no batching
	     * is required the setRequest action is simplified significantly.
	     *
	     * @param {JSONGraphEnvelope) jsonGraph -
	     */
	    set: function(jsonGraph, cb) {
	        jsonGraph.paths = falcorPathUtils.collapse(jsonGraph.paths);
	        return sendSetRequest(jsonGraph, this.model, cb);
	    },

	    /**
	     * Creates a get request to the dataSource.  Depending on the current
	     * scheduler is how the getRequest will be flushed.
	     * @param {Array} requestedPaths -
	     * @param {Array} optimizedPaths -
	     * @param {Function} cb -
	     */
	    get: function(requestedPaths, optimizedPaths, cb) {
	        var self = this;
	        var disposables = [];
	        var count = 0;
	        var requests = self._requests;
	        var i, len;
	        var oRemainingPaths = optimizedPaths;
	        var rRemainingPaths = requestedPaths;
	        var disposed = false;
	        var request;

	        for (i = 0, len = requests.length; i < len; ++i) {
	            request = requests[i];
	            if (request.type !== RequestTypes.GetRequest) {
	                continue;
	            }

	            // The request has been sent, attempt to jump on the request
	            // if possible.
	            if (request.sent) {
	                var results = request.add(
	                    rRemainingPaths, oRemainingPaths, refCountCallback);

	                // Checks to see if the results were successfully inserted
	                // into the outgoing results.  Then our paths will be reduced
	                // to the complement.
	                if (results[0]) {
	                    rRemainingPaths = results[1];
	                    oRemainingPaths = results[2];
	                    disposables[disposables.length] = results[3];
	                    ++count;
	                }
	            }

	            // If there is a non sent request, then we can batch and leave.
	            else {
	                request.batch(
	                    rRemainingPaths, oRemainingPaths, refCountCallback);
	                oRemainingPaths = [];
	                rRemainingPaths = [];
	                ++count;
	            }

	            // If there are no more remaining paths then exit the loop.
	            if (!oRemainingPaths.length) {
	                break;
	            }
	        }

	        // After going through all the available requests if there are more
	        // paths to process then a new request must be made.
	        if (oRemainingPaths.length) {
	            request = new GetRequest(self.scheduler, self);
	            requests[requests.length] = request;
	            ++count;
	            var disposable = request.batch(
	                rRemainingPaths, oRemainingPaths, refCountCallback);
	            disposables[disposables.length] = disposable;
	        }

	        // This is a simple refCount callback.
	        function refCountCallback(err) {
	            if (disposed) {
	                return;
	            }

	            --count;

	            // If the count becomes 0, then its time to notify the
	            // listener that the request is done.
	            if (count === 0) {
	                cb(err);
	            }
	        }

	        // When disposing the request all of the outbound requests will be
	        // disposed of.
	        return function() {
	            if (disposed || count === 0) {
	                return;
	            }

	            disposed = true;
	            var length = disposables.length;
	            for (var idx = 0; idx < length; ++idx) {
	                disposables[idx]();
	            }
	        };
	    },

	    /**
	     * Removes the request from the request
	     */
	    removeRequest: function(request) {
	        var requests = this._requests;
	        var i = requests.length;
	        while (--i >= 0) {
	            if (requests[i].id === request.id) {
	                requests.splice(i, 1);
	                break;
	            }
	        }
	    }
	};

	module.exports = RequestQueueV2;


/***/ },
/* 369 */
/***/ function(module, exports) {

	module.exports = {
	    GetRequest: "GET"
	};


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(371);
	var setJSONGraphs = __webpack_require__(372);
	var setPathValues = __webpack_require__(414);
	var InvalidSourceError = __webpack_require__(425);

	var emptyArray = [];
	var emptyDisposable = {dispose: function() {}};

	/**
	 * A set request is not an object like GetRequest.  It simply only needs to
	 * close over a couple values and its never batched together (at least not now).
	 *
	 * @private
	 * @param {JSONGraphEnvelope} jsonGraph -
	 * @param {Model} model -
	 * @param {Function} callback -
	 */
	var sendSetRequest = function(originalJsonGraph, model, callback) {
	    var paths = originalJsonGraph.paths;
	    var modelRoot = model._root;
	    var errorSelector = modelRoot.errorSelector;
	    var comparator = modelRoot.comparator;
	    var boundPath = model._path;
	    var resultingJsonGraphEnvelope;

	    // This is analogous to GetRequest _merge / flushGetRequest
	    // SetRequests are just considerably simplier.
	    var setObservable;
	    try {
	        setObservable = model._source.
	            set(originalJsonGraph);
	    } catch (e) {
	        callback(new InvalidSourceError());
	        return emptyDisposable;
	    }

	    var disposable = setObservable.
	        subscribe(function onNext(jsonGraphEnvelope) {
	            // When disposed, no data is inserted into.  This can sync resolve
	            // and if thats the case then its undefined.
	            if (disposable && disposable.disposed) {
	                return;
	            }

	            // onNext will insert all data into the model then save the json
	            // envelope from the incoming result.
	            model._path = emptyArray;

	            var successfulPaths = setJSONGraphs(model, [{
	                paths: paths,
	                jsonGraph: jsonGraphEnvelope.jsonGraph
	            }], null, errorSelector, comparator);

	            jsonGraphEnvelope.paths = successfulPaths[1];

	            model._path = boundPath;
	            resultingJsonGraphEnvelope = jsonGraphEnvelope;
	        }, function onError(dataSourceError) {
	            if (disposable && disposable.disposed) {
	                return;
	            }
	            model._path = emptyArray;

	            setPathValues(model, arrayMap(paths, function(path) {
	                return {
	                    path: path,
	                    value: dataSourceError
	                };
	            }), null, errorSelector, comparator);

	            model._path = boundPath;

	            callback(dataSourceError);
	        }, function onCompleted() {
	            callback(null, resultingJsonGraphEnvelope);
	        });

	    return disposable;
	};

	module.exports = sendSetRequest;


/***/ },
/* 371 */
/***/ function(module, exports) {

	module.exports = function arrayMap(array, selector) {
	    var i = -1;
	    var n = array.length;
	    var array2 = new Array(n);
	    while (++i < n) {
	        array2[i] = selector(array[i], i, array);
	    }
	    return array2;
	};


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var createHardlink = __webpack_require__(373);
	var $ref = __webpack_require__(376);

	var isExpired = __webpack_require__(377);
	var isFunction = __webpack_require__(363);
	var isPrimitive = __webpack_require__(381);
	var expireNode = __webpack_require__(382);
	var iterateKeySet = __webpack_require__(384).iterateKeySet;
	var incrementVersion = __webpack_require__(393);
	var mergeJSONGraphNode = __webpack_require__(394);
	var NullInPathError = __webpack_require__(413);

	/**
	 * Merges a list of {@link JSONGraphEnvelope}s into a {@link JSONGraph}.
	 * @function
	 * @param {Object} model - the Model for which to merge the {@link JSONGraphEnvelope}s.
	 * @param {Array.<PathValue>} jsonGraphEnvelopes - the {@link JSONGraphEnvelope}s to merge.
	 * @return {Array.<Array.<Path>>} - an Array of Arrays where each inner Array is a list of requested and optimized paths (respectively) for the successfully set values.
	 */

	module.exports = function setJSONGraphs(model, jsonGraphEnvelopes, x, errorSelector, comparator) {

	    var modelRoot = model._root;
	    var lru = modelRoot;
	    var expired = modelRoot.expired;
	    var version = incrementVersion();
	    var cache = modelRoot.cache;
	    var initialVersion = cache.ツversion;

	    var requestedPath = [];
	    var optimizedPath = [];
	    var requestedPaths = [];
	    var optimizedPaths = [];
	    var jsonGraphEnvelopeIndex = -1;
	    var jsonGraphEnvelopeCount = jsonGraphEnvelopes.length;

	    while (++jsonGraphEnvelopeIndex < jsonGraphEnvelopeCount) {

	        var jsonGraphEnvelope = jsonGraphEnvelopes[jsonGraphEnvelopeIndex];
	        var paths = jsonGraphEnvelope.paths;
	        var jsonGraph = jsonGraphEnvelope.jsonGraph;

	        var pathIndex = -1;
	        var pathCount = paths.length;

	        while (++pathIndex < pathCount) {

	            var path = paths[pathIndex];
	            optimizedPath.index = 0;

	            setJSONGraphPathSet(
	                path, 0,
	                cache, cache, cache,
	                jsonGraph, jsonGraph, jsonGraph,
	                requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	                version, expired, lru, comparator, errorSelector
	            );
	        }
	    }

	    var newVersion = cache.ツversion;
	    var rootChangeHandler = modelRoot.onChange;

	    if (isFunction(rootChangeHandler) && initialVersion !== newVersion) {
	        rootChangeHandler();
	    }

	    return [requestedPaths, optimizedPaths];
	};

	/* eslint-disable no-constant-condition */
	function setJSONGraphPathSet(
	    path, depth, root, parent, node,
	    messageRoot, messageParent, message,
	    requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var note = {};
	    var branch = depth < path.length - 1;
	    var keySet = path[depth];
	    var key = iterateKeySet(keySet, note);
	    var optimizedIndex = optimizedPath.index;

	    do {

	        requestedPath.depth = depth;

	        var results = setNode(
	            root, parent, node, messageRoot, messageParent, message,
	            key, branch, false, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector
	        );

	        requestedPath[depth] = key;
	        requestedPath.index = depth;
	        optimizedPath[optimizedPath.index++] = key;
	        var nextNode = results[0];
	        var nextParent = results[1];
	        if (nextNode) {
	            if (branch) {
	                setJSONGraphPathSet(
	                    path, depth + 1, root, nextParent, nextNode,
	                    messageRoot, results[3], results[2],
	                    requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	                    version, expired, lru, comparator, errorSelector
	                );
	            } else {
	                requestedPaths.push(requestedPath.slice(0, requestedPath.index + 1));
	                optimizedPaths.push(optimizedPath.slice(0, optimizedPath.index));
	            }
	        }
	        key = iterateKeySet(keySet, note);
	        if (note.done) {
	            break;
	        }
	        optimizedPath.index = optimizedIndex;
	    } while (true);
	}
	/* eslint-enable */

	function setReference(
	    root, node, messageRoot, message, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var reference = node.value;
	    optimizedPath.splice(0, optimizedPath.length);
	    optimizedPath.push.apply(optimizedPath, reference);

	    if (isExpired(node)) {
	        optimizedPath.index = reference.length;
	        expireNode(node, expired, lru);
	        return [undefined, root, message, messageRoot];
	    }

	    var index = 0;
	    var container = node;
	    var count = reference.length - 1;
	    var parent = node = root;
	    var messageParent = message = messageRoot;

	    do {
	        var key = reference[index];
	        var branch = index < count;
	        optimizedPath.index = index;

	        var results = setNode(
	            root, parent, node, messageRoot, messageParent, message,
	            key, branch, true, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector
	        );
	        node = results[0];
	        if (isPrimitive(node)) {
	            optimizedPath.index = index;
	            return results;
	        }
	        parent = results[1];
	        message = results[2];
	        messageParent = results[3];
	    } while (index++ < count);

	    optimizedPath.index = index;

	    if (container.ツcontext !== node) {
	        createHardlink(container, node);
	    }

	    return [node, parent, message, messageParent];
	}

	function setNode(
	    root, parent, node, messageRoot, messageParent, message,
	    key, branch, reference, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var type = node.$type;

	    while (type === $ref) {

	        var results = setReference(
	            root, node, messageRoot, message, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector
	        );

	        node = results[0];

	        if (isPrimitive(node)) {
	            return results;
	        }

	        parent = results[1];
	        message = results[2];
	        messageParent = results[3];
	        type = node.$type;
	    }

	    if (type !== void 0) {
	        return [node, parent, message, messageParent];
	    }

	    if (key == null) {
	        if (branch) {
	            throw new NullInPathError();
	        } else if (node) {
	            key = node.ツkey;
	        }
	    } else {
	        parent = node;
	        messageParent = message;
	        node = parent[key];
	        message = messageParent && messageParent[key];
	    }

	    node = mergeJSONGraphNode(
	        parent, node, message, key, requestedPath, optimizedPath,
	        version, expired, lru, comparator, errorSelector
	    );

	    return [node, parent, message, messageParent];
	}


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var __ref = __webpack_require__(374);

	module.exports = function createHardlink(from, to) {

	    // create a back reference
	    var backRefs = to.ツrefsLength || 0;
	    to[__ref + backRefs] = from;
	    to.ツrefsLength = backRefs + 1;

	    // create a hard reference
	    from.ツrefIndex = backRefs;
	    from.ツcontext = to;
	};


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(375) + "ref";


/***/ },
/* 375 */
/***/ function(module, exports) {

	module.exports = "ツ";



/***/ },
/* 376 */
/***/ function(module, exports) {

	module.exports = "ref";


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(378);
	var $now = __webpack_require__(379);
	var $never = __webpack_require__(380);

	module.exports = function isAlreadyExpired(node) {
	    var exp = node.$expires;
	    return (exp != null) && (
	        exp !== $never) && (
	        exp !== $now) && (
	        exp < now());
	};


/***/ },
/* 378 */
/***/ function(module, exports) {

	module.exports = Date.now;


/***/ },
/* 379 */
/***/ function(module, exports) {

	module.exports = 0;


/***/ },
/* 380 */
/***/ function(module, exports) {

	module.exports = 1;


/***/ },
/* 381 */
/***/ function(module, exports) {

	var objTypeof = "object";
	module.exports = function isPrimitive(value) {
	    return value == null || typeof value !== objTypeof;
	};


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	var splice = __webpack_require__(383);

	module.exports = function expireNode(node, expired, lru) {
	    if (!node.ツinvalidated) {
	        node.ツinvalidated = true;
	        expired.push(node);
	        splice(lru, node);
	    }
	    return node;
	};


/***/ },
/* 383 */
/***/ function(module, exports) {

	module.exports = function lruSplice(root, object) {

	    // Its in the cache.  Splice out.
	    var prev = object.ツprev;
	    var next = object.ツnext;
	    if (next) {
	        next.ツprev = prev;
	    }
	    if (prev) {
	        prev.ツnext = next;
	    }
	    object.ツprev = object.ツnext = undefined;

	    if (object === root.ツhead) {
	        root.ツhead = next;
	    }
	    if (object === root.ツtail) {
	        root.ツtail = prev;
	    }
	};


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    iterateKeySet: __webpack_require__(385),
	    toTree: __webpack_require__(386),
	    toTreeWithUnion: __webpack_require__(387),
	    pathsComplementFromTree: __webpack_require__(388),
	    pathsComplementFromLengthTree: __webpack_require__(390),
	    hasIntersection: __webpack_require__(389),
	    toPaths: __webpack_require__(391),
	    collapse: __webpack_require__(392)
	};


/***/ },
/* 385 */
/***/ function(module, exports) {

	var isArray = Array.isArray;

	/**
	 * Takes in a keySet and a note attempts to iterate over it.
	 * If the value is a primitive, the key will be returned and the note will
	 * be marked done
	 * If the value is an object, then each value of the range will be returned
	 * and when finished the note will be marked done.
	 * If the value is an array, each value will be iterated over, if any of the
	 * inner values are ranges, those will be iterated over.  When fully done,
	 * the note will be marked done.
	 *
	 * @param {Object|Array|String|Number} keySet -
	 * @param {Object} note - The non filled note
	 * @returns {String|Number|undefined} - The current iteration value.
	 * If undefined, then the keySet is empty
	 * @public
	 */
	module.exports = function iterateKeySet(keySet, note) {
	    if (note.isArray === undefined) {
	        initializeNote(keySet, note);
	    }

	    // Array iteration
	    if (note.isArray) {
	        var nextValue;

	        // Cycle through the array and pluck out the next value.
	        do {
	            if (note.loaded && note.rangeOffset > note.to) {
	                ++note.arrayOffset;
	                note.loaded = false;
	            }

	            var idx = note.arrayOffset, length = keySet.length;
	            if (idx >= length) {
	                note.done = true;
	                break;
	            }

	            var el = keySet[note.arrayOffset];
	            var type = typeof el;

	            // Inner range iteration.
	            if (type === 'object') {
	                if (!note.loaded) {
	                    initializeRange(el, note);
	                }

	                // Empty to/from
	                if (note.empty) {
	                    continue;
	                }

	                nextValue = note.rangeOffset++;
	            }

	            // Primitive iteration in array.
	            else {
	                ++note.arrayOffset;
	                nextValue = el;
	            }
	        } while (nextValue === undefined);

	        return nextValue;
	    }

	    // Range iteration
	    else if (note.isObject) {
	        if (!note.loaded) {
	            initializeRange(keySet, note);
	        }
	        if (note.rangeOffset > note.to) {
	            note.done = true;
	            return undefined;
	        }

	        return note.rangeOffset++;
	    }

	    // Primitive value
	    else {
	        note.done = true;
	        return keySet;
	    }
	};

	function initializeRange(key, memo) {
	    var from = memo.from = key.from || 0;
	    var to = memo.to = key.to ||
	        (typeof key.length === 'number' &&
	        memo.from + key.length - 1 || 0);
	    memo.rangeOffset = memo.from;
	    memo.loaded = true;
	    if (from > to) {
	        memo.empty = true;
	    }
	}

	function initializeNote(key, note) {
	    note.done = false;
	    var isObject = note.isObject = !!(key && typeof key === 'object');
	    note.isArray = isObject && isArray(key);
	    note.arrayOffset = 0;
	}


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	var iterateKeySet = __webpack_require__(385);
	var isArray = Array.isArray;

	/**
	 * @param {Array} paths -
	 * @returns {Object} -
	 */
	module.exports = function toTree(paths) {
	    return paths.reduce(function(acc, path) {
	        innerToTree(acc, path, 0);
	        return acc;
	    }, {});
	};

	function innerToTree(seed, path, depth) {

	    var keySet = path[depth];
	    var iteratorNote = {};
	    var key;
	    var nextDepth = depth + 1;

	    key = iterateKeySet(keySet, iteratorNote);

	    do {

	        var next = seed[key];
	        if (!next) {
	            if (nextDepth === path.length) {
	                seed[key] = null;
	            } else {
	                next = seed[key] = {};
	            }
	        }

	        if (nextDepth < path.length) {
	            innerToTree(next, path, nextDepth);
	        }

	        if (!iteratorNote.done) {
	            key = iterateKeySet(keySet, iteratorNote);
	        }
	    } while (!iteratorNote.done);
	}



/***/ },
/* 387 */
/***/ function(module, exports) {

	

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	var hasIntersection = __webpack_require__(389);

	/**
	 * Compares the paths passed in with the tree.  Any of the paths that are in
	 * the tree will be stripped from the paths.
	 *
	 * **Does not mutate** the incoming paths object.
	 * **Proper subset** only matching.
	 *
	 * @param {Array} paths - A list of paths (complex or simple) to strip the
	 * intersection
	 * @param {Object} tree -
	 * @public
	 */
	module.exports = function pathsComplementFromTree(paths, tree) {
	    var out = [];
	    var outLength = -1;

	    for (var i = 0, len = paths.length; i < len; ++i) {
	        // If this does not intersect then add it to the output.
	        if (!hasIntersection(tree, paths[i], 0)) {
	            out[++outLength] = paths[i];
	        }
	    }
	    return out;
	};



/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var iterateKeySet = __webpack_require__(385);

	/**
	 * Tests to see if the intersection should be stripped from the
	 * total paths.  The only way this happens currently is if the entirety
	 * of the path is contained in the tree.
	 * @private
	 */
	module.exports = function hasIntersection(tree, path, depth) {
	    var current = tree;
	    var intersects = true;

	    // Continue iteratively going down a path until a complex key is
	    // encountered, then recurse.
	    for (;intersects && depth < path.length; ++depth) {
	        var key = path[depth];
	        var keyType = typeof key;

	        // We have to iterate key set
	        if (key && keyType === 'object') {
	            var note = {};
	            var innerKey = iterateKeySet(key, note);
	            var nextDepth = depth + 1;

	            // Loop through the innerKeys setting the intersects flag
	            // to each result.  Break out on false.
	            do {
	                var next = current[innerKey];
	                intersects = next !== undefined;

	                if (intersects) {
	                    intersects = hasIntersection(next, path, nextDepth);
	                }
	                innerKey = iterateKeySet(key, note);
	            } while (intersects && !note.done);

	            // Since we recursed, we shall not pass any further!
	            break;
	        }

	        // Its a simple key, just move forward with the testing.
	        current = current[key];
	        intersects = current !== undefined;
	    }

	    return intersects;
	};


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var hasIntersection = __webpack_require__(389);

	/**
	 * Compares the paths passed in with the tree.  Any of the paths that are in
	 * the tree will be stripped from the paths.
	 *
	 * **Does not mutate** the incoming paths object.
	 * **Proper subset** only matching.
	 *
	 * @param {Array} paths - A list of paths (complex or simple) to strip the
	 * intersection
	 * @param {Object} tree -
	 * @public
	 */
	module.exports = function pathsComplementFromLengthTree(paths, tree) {
	    var out = [];
	    var outLength = -1;

	    for (var i = 0, len = paths.length; i < len; ++i) {
	        // If this does not intersect then add it to the output.
	        var path = paths[i];
	        if (!hasIntersection(tree[path.length], path, 0)) {
	            out[++outLength] = path;
	        }
	    }
	    return out;
	};



/***/ },
/* 391 */
/***/ function(module, exports) {

	var isArray = Array.isArray;
	var typeOfObject = "object";

	/* jshint forin: false */
	module.exports = function toPaths(lengths) {
	    var pathmap;
	    var allPaths = [];
	    var allPathsLength = 0;
	    for (var length in lengths) {
	        if (isNumber(length) && isObject(pathmap = lengths[length])) {
	            var paths = collapsePathMap(pathmap, 0, parseInt(length, 10)).sets;
	            var pathsIndex = -1;
	            var pathsCount = paths.length;
	            while (++pathsIndex < pathsCount) {
	                allPaths[allPathsLength++] = collapsePathSetIndexes(paths[pathsIndex]);
	            }
	        }
	    }
	    return allPaths;
	};

	function isObject(value) {
	    return value !== null && typeof value === typeOfObject;
	}

	function collapsePathMap(pathmap, depth, length) {

	    var key;
	    var code = getHashCode(String(depth));
	    var subs = Object.create(null);

	    var codes = [];
	    var codesIndex = -1;
	    var codesCount = 0;

	    var pathsets = [];
	    var pathsetsCount = 0;

	    var subPath, subCode,
	        subKeys, subKeysIndex, subKeysCount,
	        subSets, subSetsIndex, subSetsCount,
	        pathset, pathsetIndex, pathsetCount,
	        firstSubKey, pathsetClone;

	    subKeys = [];
	    subKeysIndex = -1;

	    if (depth < length - 1) {

	        subKeysCount = getSortedKeys(pathmap, subKeys);

	        while (++subKeysIndex < subKeysCount) {
	            key = subKeys[subKeysIndex];
	            subPath = collapsePathMap(pathmap[key], depth + 1, length);
	            subCode = subPath.code;
	            if(subs[subCode]) {
	                subPath = subs[subCode];
	            } else {
	                codes[codesCount++] = subCode;
	                subPath = subs[subCode] = {
	                    keys: [],
	                    sets: subPath.sets
	                };
	            }
	            code = getHashCode(code + key + subCode);

	            isNumber(key) &&
	                subPath.keys.push(parseInt(key, 10)) ||
	                subPath.keys.push(key);
	        }

	        while(++codesIndex < codesCount) {

	            key = codes[codesIndex];
	            subPath = subs[key];
	            subKeys = subPath.keys;
	            subKeysCount = subKeys.length;

	            if (subKeysCount > 0) {

	                subSets = subPath.sets;
	                subSetsIndex = -1;
	                subSetsCount = subSets.length;
	                firstSubKey = subKeys[0];

	                while (++subSetsIndex < subSetsCount) {

	                    pathset = subSets[subSetsIndex];
	                    pathsetIndex = -1;
	                    pathsetCount = pathset.length;
	                    pathsetClone = new Array(pathsetCount + 1);
	                    pathsetClone[0] = subKeysCount > 1 && subKeys || firstSubKey;

	                    while (++pathsetIndex < pathsetCount) {
	                        pathsetClone[pathsetIndex + 1] = pathset[pathsetIndex];
	                    }

	                    pathsets[pathsetsCount++] = pathsetClone;
	                }
	            }
	        }
	    } else {
	        subKeysCount = getSortedKeys(pathmap, subKeys);
	        if (subKeysCount > 1) {
	            pathsets[pathsetsCount++] = [subKeys];
	        } else {
	            pathsets[pathsetsCount++] = subKeys;
	        }
	        while (++subKeysIndex < subKeysCount) {
	            code = getHashCode(code + subKeys[subKeysIndex]);
	        }
	    }

	    return {
	        code: code,
	        sets: pathsets
	    };
	}

	function collapsePathSetIndexes(pathset) {

	    var keysetIndex = -1;
	    var keysetCount = pathset.length;

	    while (++keysetIndex < keysetCount) {
	        var keyset = pathset[keysetIndex];
	        if (isArray(keyset)) {
	            pathset[keysetIndex] = collapseIndex(keyset);
	        }
	    }

	    return pathset;
	}

	/**
	 * Collapse range indexers, e.g. when there is a continuous
	 * range in an array, turn it into an object instead:
	 *
	 * [1,2,3,4,5,6] => {"from":1, "to":6}
	 *
	 * @private
	 */
	function collapseIndex(keyset) {

	    // Do we need to dedupe an indexer keyset if they're duplicate consecutive integers?
	    // var hash = {};
	    var keyIndex = -1;
	    var keyCount = keyset.length - 1;
	    var isSparseRange = keyCount > 0;

	    while (++keyIndex <= keyCount) {

	        var key = keyset[keyIndex];

	        if (!isNumber(key) /* || hash[key] === true*/ ) {
	            isSparseRange = false;
	            break;
	        }
	        // hash[key] = true;
	        // Cast number indexes to integers.
	        keyset[keyIndex] = parseInt(key, 10);
	    }

	    if (isSparseRange === true) {

	        keyset.sort(sortListAscending);

	        var from = keyset[0];
	        var to = keyset[keyCount];

	        // If we re-introduce deduped integer indexers, change this comparson to "===".
	        if (to - from <= keyCount) {
	            return {
	                from: from,
	                to: to
	            };
	        }
	    }

	    return keyset;
	}

	function sortListAscending(a, b) {
	    return a - b;
	}

	/* jshint forin: false */
	function getSortedKeys(map, keys, sort) {
	    var len = 0;
	    for (var key in map) {
	        keys[len++] = key;
	    }
	    if (len > 1) {
	        keys.sort(sort);
	    }
	    return len;
	}

	function getHashCode(key) {
	    var code = 5381;
	    var index = -1;
	    var count = key.length;
	    while (++index < count) {
	        code = (code << 5) + code + key.charCodeAt(index);
	    }
	    return String(code);
	}

	/**
	 * Return true if argument is a number or can be cast to a number
	 * @private
	 */
	function isNumber(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}



/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var toPaths = __webpack_require__(391);
	var toTree = __webpack_require__(386);

	module.exports = function collapse(paths) {
	    var collapseMap = paths.
	        reduce(function(acc, path) {
	            var len = path.length;
	            if (!acc[len]) {
	                acc[len] = [];
	            }
	            acc[len].push(path);
	            return acc;
	        }, {});

	    Object.
	        keys(collapseMap).
	        forEach(function(collapseKey) {
	            collapseMap[collapseKey] = toTree(collapseMap[collapseKey]);
	        });

	    return toPaths(collapseMap);
	};


/***/ },
/* 393 */
/***/ function(module, exports) {

	var version = 1;
	module.exports = function incrementVersion() {
	    return version++;
	};


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var $ref = __webpack_require__(376);
	var $error = __webpack_require__(395);
	var getSize = __webpack_require__(396);
	var getTimestamp = __webpack_require__(397);
	var isObject = __webpack_require__(365);
	var isExpired = __webpack_require__(398);
	var isFunction = __webpack_require__(363);

	var wrapNode = __webpack_require__(399);
	var insertNode = __webpack_require__(403);
	var expireNode = __webpack_require__(382);
	var replaceNode = __webpack_require__(404);
	var updateNodeAncestors = __webpack_require__(410);
	var reconstructPath = __webpack_require__(412);

	module.exports = function mergeJSONGraphNode(
	    parent, node, message, key, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var sizeOffset;

	    var cType, mType,
	        cIsObject, mIsObject,
	        cTimestamp, mTimestamp;

	    // If the cache and message are the same, we can probably return early:
	    // - If they're both nullsy,
	    //   - If null then the node needs to be wrapped in an atom and inserted.
	    //     This happens from whole branch merging when a leaf is just a null value
	    //     instead of being wrapped in an atom.
	    //   - If undefined then return null (previous behavior).
	    // - If they're both branches, return the branch.
	    // - If they're both edges, continue below.
	    if (node === message) {

	        // There should not be undefined values.  Those should always be
	        // wrapped in an $atom
	        if (message === null) {
	            node = wrapNode(message, undefined, message);
	            parent = updateNodeAncestors(parent, -node.$size, lru, version);
	            node = insertNode(node, parent, key, undefined, optimizedPath);
	            return node;
	        }

	        // The messange and cache are both undefined, therefore return null.
	        else if (message === undefined) {
	            return message;
	        }

	        else {
	            cIsObject = isObject(node);
	            if (cIsObject) {
	                // Is the cache node a branch? If so, return the cache branch.
	                cType = node.$type;
	                if (cType == null) {
	                    // Has the branch been introduced to the cache yet? If not,
	                    // give it a parent, key, and absolute path.
	                    if (node.ツparent == null) {
	                        insertNode(node, parent, key, version, optimizedPath);
	                    }
	                    return node;
	                }
	            }
	        }
	    } else {
	        cIsObject = isObject(node);
	        if (cIsObject) {
	            cType = node.$type;
	        }
	    }

	    // If the cache isn't a reference, we might be able to return early.
	    if (cType !== $ref) {
	        mIsObject = isObject(message);
	        if (mIsObject) {
	            mType = message.$type;
	        }
	        if (cIsObject && !cType) {
	            // If the cache is a branch and the message is empty or
	            // also a branch, continue with the cache branch.
	            if (message == null || (mIsObject && !mType)) {
	                return node;
	            }
	        }
	    }
	    // If the cache is a reference, we might not need to replace it.
	    else {
	        // If the cache is a reference, but the message is empty, leave the cache alone...
	        if (message == null) {
	            // ...unless the cache is an expired reference. In that case, expire
	            // the cache node and return undefined.
	            if (isExpired(node)) {
	                expireNode(node, expired, lru);
	                return void 0;
	            }
	            return node;
	        }
	        mIsObject = isObject(message);
	        if (mIsObject) {
	            mType = message.$type;
	            // If the cache and the message are both references,
	            // check if we need to replace the cache reference.
	            if (mType === $ref) {
	                if (node === message) {
	                    // If the cache and message are the same reference,
	                    // we performed a whole-branch merge of one of the
	                    // grandparents. If we've previously graphed this
	                    // reference, break early. Otherwise, continue to
	                    // leaf insertion below.
	                    if (node.ツparent != null) {
	                        return node;
	                    }
	                } else {

	                    cTimestamp = node.$timestamp;
	                    mTimestamp = message.$timestamp;

	                    // - If either the cache or message reference is expired,
	                    //   replace the cache reference with the message.
	                    // - If neither of the references are expired, compare their
	                    //   timestamps. If either of them don't have a timestamp,
	                    //   or the message's timestamp is newer, replace the cache
	                    //   reference with the message reference.
	                    // - If the message reference is older than the cache
	                    //   reference, short-circuit.
	                    if (!isExpired(node) && !isExpired(message) && mTimestamp < cTimestamp) {
	                        return void 0;
	                    }
	                }
	            }
	        }
	    }

	    // If the cache is a leaf but the message is a branch, merge the branch over the leaf.
	    if (cType && mIsObject && !mType) {
	        return insertNode(replaceNode(node, message, parent, key, lru), parent, key, undefined, optimizedPath);
	    }
	    // If the message is a sentinel or primitive, insert it into the cache.
	    else if (mType || !mIsObject) {
	        // If the cache and the message are the same value, we branch-merged one
	        // of the message's ancestors. If this is the first time we've seen this
	        // leaf, give the message a $size and $type, attach its graph pointers,
	        // and update the cache sizes and versions.

	        if (mType === $error && isFunction(errorSelector)) {
	            message = errorSelector(reconstructPath(requestedPath, key), message);
	        }

	        if (mType && node === message) {
	            if (node.ツparent == null) {
	                node = wrapNode(node, cType, node.value);
	                parent = updateNodeAncestors(parent, -node.$size, lru, version);
	                node = insertNode(node, parent, key, version, optimizedPath);
	            }
	        }
	        // If the cache and message are different, or the message is a
	        // primitive, replace the cache with the message value. If the message
	        // is a sentinel, clone and maintain its type. If the message is a
	        // primitive value, wrap it in an atom.
	        else {
	            var isDistinct = true;
	            // If the cache is a branch, but the message is a leaf, replace the
	            // cache branch with the message leaf.
	            if (cType || !cIsObject) {
	                // Compare the current cache value with the new value. If either of
	                // them don't have a timestamp, or the message's timestamp is newer,
	                // replace the cache value with the message value. If a comparator
	                // is specified, the comparator takes precedence over timestamps.
	                //
	                // Comparing either Number or undefined to undefined always results in false.
	                isDistinct = (getTimestamp(message) < getTimestamp(node)) === false;
	                // If at least one of the cache/message are sentinels, compare them.
	                if ((cType || mType) && isFunction(comparator)) {
	                    isDistinct = !comparator(node, message, optimizedPath.slice(0, optimizedPath.index));
	                }
	            }
	            if (isDistinct) {
	                message = wrapNode(message, mType, mType ? message.value : message);
	                sizeOffset = getSize(node) - getSize(message);
	                node = replaceNode(node, message, parent, key, lru);
	                parent = updateNodeAncestors(parent, sizeOffset, lru, version);
	                node = insertNode(node, parent, key, version, optimizedPath);
	            }
	        }

	        // Promote the message edge in the LRU.
	        if (isExpired(node)) {
	            expireNode(node, expired, lru);
	        }
	    }
	    else if (node == null) {
	        node = insertNode(message, parent, key, undefined, optimizedPath);
	    }

	    return node;
	};


/***/ },
/* 395 */
/***/ function(module, exports) {

	module.exports = "error";


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(365);
	module.exports = function getSize(node) {
	    return isObject(node) && node.$size || 0;
	};


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(365);
	module.exports = function getTimestamp(node) {
	    return isObject(node) && node.$timestamp || undefined;
	};


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(378);
	var $now = __webpack_require__(379);
	var $never = __webpack_require__(380);

	module.exports = function isExpired(node) {
	    var exp = node.$expires;
	    return (exp != null) && (
	        exp !== $never ) && (
	        exp === $now || exp < now());
	};


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(378);
	var expiresNow = __webpack_require__(379);

	var atomSize = 50;

	var clone = __webpack_require__(400);
	var isArray = Array.isArray;
	var getSize = __webpack_require__(396);
	var getExpires = __webpack_require__(401);
	var atomType = __webpack_require__(402);

	module.exports = function wrapNode(nodeArg, typeArg, value) {

	    var size = 0;
	    var node = nodeArg;
	    var type = typeArg;

	    if (type) {
	        var modelCreated = node.ツmodelCreated;
	        node = clone(node);
	        size = getSize(node);
	        node.$type = type;
	        node.ツprev = undefined;
	        node.ツnext = undefined;
	        node.ツmodelCreated = modelCreated || false;
	    } else {
	        node = {
	            $type: atomType,
	            value: value,
	            ツprev: undefined,
	            ツnext: undefined,
	            ツmodelCreated: true
	        };
	    }

	    if (value == null) {
	        size = atomSize + 1;
	    } else if (size == null || size <= 0) {
	        switch (typeof value) {
	            case "object":
	                if (isArray(value)) {
	                    size = atomSize + value.length;
	                } else {
	                    size = atomSize + 1;
	                }
	                break;
	            case "string":
	                size = atomSize + value.length;
	                break;
	            default:
	                size = atomSize + 1;
	                break;
	        }
	    }

	    var expires = getExpires(node);

	    if (typeof expires === "number" && expires < expiresNow) {
	        node.$expires = now() + (expires * -1);
	    }

	    node.$size = size;

	    return node;
	};


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var unicodePrefix = __webpack_require__(375);
	var hasOwn = __webpack_require__(364);
	var isArray = Array.isArray;
	var isObject = __webpack_require__(365);

	module.exports = function clone(value) {
	    var dest = value;
	    if (isObject(dest)) {
	        dest = isArray(value) ? [] : {};
	        var src = value;
	        for (var key in src) {
	            if (key.charAt(0) === unicodePrefix || !hasOwn(src, key)) {
	                continue;
	            }
	            dest[key] = src[key];
	        }
	    }
	    return dest;
	};


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(365);
	module.exports = function getSize(node) {
	    return isObject(node) && node.$expires || undefined;
	};


/***/ },
/* 402 */
/***/ function(module, exports) {

	module.exports = "atom";


/***/ },
/* 403 */
/***/ function(module, exports) {

	module.exports = function insertNode(node, parent, key, version, optimizedPath) {
	    node.ツkey = key;
	    node.ツparent = parent;

	    if (version !== undefined) {
	        node.ツversion = version;
	    }
	    if (!node.ツabsolutePath) {
	        node.ツabsolutePath = optimizedPath.slice(0, optimizedPath.index).concat(key);
	    }

	    parent[key] = node;

	    return node;
	};


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(365);
	var transferBackReferences = __webpack_require__(405);
	var removeNodeAndDescendants = __webpack_require__(406);

	module.exports = function replaceNode(node, replacement, parent, key, lru) {
	    if (node === replacement) {
	        return node;
	    } else if (isObject(node)) {
	        transferBackReferences(node, replacement);
	        removeNodeAndDescendants(node, parent, key, lru);
	    }

	    parent[key] = replacement;
	    return replacement;
	};


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var __ref = __webpack_require__(374);

	module.exports = function transferBackReferences(fromNode, destNode) {
	    var fromNodeRefsLength = fromNode.ツrefsLength || 0,
	        destNodeRefsLength = destNode.ツrefsLength || 0,
	        i = -1;
	    while (++i < fromNodeRefsLength) {
	        var ref = fromNode[__ref + i];
	        if (ref !== void 0) {
	            ref.ツcontext = destNode;
	            destNode[__ref + (destNodeRefsLength + i)] = ref;
	            fromNode[__ref + i] = void 0;
	        }
	    }
	    destNode.ツrefsLength = fromNodeRefsLength + destNodeRefsLength;
	    fromNode.ツrefsLength = void 0;
	    return destNode;
	};


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	var hasOwn = __webpack_require__(364);
	var prefix = __webpack_require__(375);
	var removeNode = __webpack_require__(407);

	module.exports = function removeNodeAndDescendants(node, parent, key, lru) {
	    if (removeNode(node, parent, key, lru)) {
	        if (node.$type == null) {
	            for (var key2 in node) {
	                if (key2[0] !== prefix && key2[0] !== "$" && hasOwn(node, key2)) {
	                    removeNodeAndDescendants(node[key2], node, key2, lru);
	                }
	            }
	        }
	        return true;
	    }
	    return false;
	};


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var $ref = __webpack_require__(376);
	var splice = __webpack_require__(383);
	var isObject = __webpack_require__(365);
	var unlinkBackReferences = __webpack_require__(408);
	var unlinkForwardReference = __webpack_require__(409);

	module.exports = function removeNode(node, parent, key, lru) {
	    if (isObject(node)) {
	        var type = node.$type;
	        if (Boolean(type)) {
	            if (type === $ref) {
	                unlinkForwardReference(node);
	            }
	            splice(lru, node);
	        }
	        unlinkBackReferences(node);
	        parent[key] = node.ツparent = void 0;
	        return true;
	    }
	    return false;
	};


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var __ref = __webpack_require__(374);

	module.exports = function unlinkBackReferences(node) {
	    var i = -1, n = node.ツrefsLength || 0;
	    while (++i < n) {
	        var ref = node[__ref + i];
	        if (ref != null) {
	            ref.ツcontext = ref.ツrefIndex = node[__ref + i] = void 0;
	        }
	    }
	    node.ツrefsLength = void 0;
	    return node;
	};


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var __ref = __webpack_require__(374);

	module.exports = function unlinkForwardReference(reference) {
	    var destination = reference.ツcontext;
	    if (destination) {
	        var i = (reference.ツrefIndex || 0) - 1,
	            n = (destination.ツrefsLength || 0) - 1;
	        while (++i <= n) {
	            destination[__ref + i] = destination[__ref + (i + 1)];
	        }
	        destination.ツrefsLength = n;
	        reference.ツrefIndex = reference.ツcontext = destination = void 0;
	    }
	    return reference;
	};


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var removeNode = __webpack_require__(407);
	var updateBackReferenceVersions = __webpack_require__(411);

	module.exports = function updateNodeAncestors(nodeArg, offset, lru, version) {
	    var child = nodeArg;
	    do {
	        var node = child.ツparent;
	        var size = child.$size = (child.$size || 0) - offset;
	        if (size <= 0 && node != null) {
	            removeNode(child, node, child.ツkey, lru);
	        } else if (child.ツversion !== version) {
	            updateBackReferenceVersions(child, version);
	        }
	        child = node;
	    } while (child);
	    return nodeArg;
	};


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	var __ref = __webpack_require__(374);

	module.exports = function updateBackReferenceVersions(nodeArg, version) {
	    var stack = [nodeArg];
	    var count = 0;
	    do {
	        var node = stack[count];
	        if (node && node.ツversion !== version) {
	            node.ツversion = version;
	            stack[count++] = node.ツparent;
	            var i = -1;
	            var n = node.ツrefsLength || 0;
	            while (++i < n) {
	                stack[count++] = node[__ref + i];
	            }
	        }
	    } while (--count > -1);
	    return nodeArg;
	};


/***/ },
/* 412 */
/***/ function(module, exports) {

	/**
	 * Reconstructs the path for the current key, from currentPath (requestedPath)
	 * state maintained during set/merge walk operations.
	 *
	 * During the walk, since the requestedPath array is updated after we attempt to
	 * merge/insert nodes during a walk (it reflects the inserted node's parent branch)
	 * we need to reconstitute a path from it.
	 *
	 * @param  {Array} currentPath The current requestedPath state, during the walk
	 * @param  {String} key        The current key value, during the walk
	 * @return {Array} A new array, with the path which represents the node we're about
	 * to insert
	 */
	module.exports = function reconstructPath(currentPath, key) {

	    var path = currentPath.slice(0, currentPath.depth);
	    path[path.length] = key;

	    return path;
	};


/***/ },
/* 413 */
/***/ function(module, exports) {

	var NAME = "NullInPathError";
	var MESSAGE = "`null` is not allowed in branch key positions.";

	/**
	 * Does not allow null in path
	 */
	function NullInPathError() {
	    this.message = MESSAGE;
	    this.stack = (new Error()).stack;
	}

	// instanceof will be an error, but stack will be correct because its defined in the constructor.
	NullInPathError.prototype = new Error();
	NullInPathError.prototype.name = NAME;
	NullInPathError.message = MESSAGE;

	module.exports = NullInPathError;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var createHardlink = __webpack_require__(373);
	var $ref = __webpack_require__(376);

	var getBoundValue = __webpack_require__(415);

	var isExpired = __webpack_require__(398);
	var isFunction = __webpack_require__(363);
	var isPrimitive = __webpack_require__(381);
	var expireNode = __webpack_require__(382);
	var iterateKeySet = __webpack_require__(384).iterateKeySet;
	var incrementVersion = __webpack_require__(393);
	var mergeValueOrInsertBranch = __webpack_require__(423);
	var NullInPathError = __webpack_require__(413);

	/**
	 * Sets a list of {@link PathValue}s into a {@link JSONGraph}.
	 * @function
	 * @param {Object} model - the Model for which to insert the {@link PathValue}s.
	 * @param {Array.<PathValue>} pathValues - the list of {@link PathValue}s to set.
	 * @return {Array.<Array.<Path>>} - an Array of Arrays where each inner Array is a list of requested and optimized paths (respectively) for the successfully set values.
	 */

	module.exports = function setPathValues(model, pathValues, x, errorSelector, comparator) {

	    var modelRoot = model._root;
	    var lru = modelRoot;
	    var expired = modelRoot.expired;
	    var version = incrementVersion();
	    var bound = model._path;
	    var cache = modelRoot.cache;
	    var node = bound.length ? getBoundValue(model, bound).value : cache;
	    var parent = node.ツparent || cache;
	    var initialVersion = cache.ツversion;

	    var requestedPath = [];
	    var requestedPaths = [];
	    var optimizedPaths = [];
	    var optimizedIndex = bound.length;
	    var pathValueIndex = -1;
	    var pathValueCount = pathValues.length;

	    while (++pathValueIndex < pathValueCount) {

	        var pathValue = pathValues[pathValueIndex];
	        var path = pathValue.path;
	        var value = pathValue.value;
	        var optimizedPath = bound.slice(0);
	        optimizedPath.index = optimizedIndex;

	        setPathSet(
	            value, path, 0, cache, parent, node,
	            requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector
	        );
	    }

	    var newVersion = cache.ツversion;
	    var rootChangeHandler = modelRoot.onChange;

	    if (isFunction(rootChangeHandler) && initialVersion !== newVersion) {
	        rootChangeHandler();
	    }

	    return [requestedPaths, optimizedPaths];
	};

	/* eslint-disable no-constant-condition */
	function setPathSet(
	    value, path, depth, root, parent, node,
	    requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var note = {};
	    var branch = depth < path.length - 1;
	    var keySet = path[depth];
	    var key = iterateKeySet(keySet, note);
	    var optimizedIndex = optimizedPath.index;

	    do {

	        requestedPath.depth = depth;

	        var results = setNode(
	            root, parent, node, key, value,
	            branch, false, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector
	        );
	        requestedPath[depth] = key;
	        requestedPath.index = depth;
	        optimizedPath[optimizedPath.index++] = key;
	        var nextNode = results[0];
	        var nextParent = results[1];
	        if (nextNode) {
	            if (branch) {
	                setPathSet(
	                    value, path, depth + 1,
	                    root, nextParent, nextNode,
	                    requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	                    version, expired, lru, comparator, errorSelector
	                );
	            } else {
	                requestedPaths.push(requestedPath.slice(0, requestedPath.index + 1));
	                optimizedPaths.push(optimizedPath.slice(0, optimizedPath.index));
	            }
	        }
	        key = iterateKeySet(keySet, note);
	        if (note.done) {
	            break;
	        }
	        optimizedPath.index = optimizedIndex;
	    } while (true);
	}
	/* eslint-enable */

	function setReference(
	    value, root, node, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var reference = node.value;
	    optimizedPath.splice(0, optimizedPath.length);
	    optimizedPath.push.apply(optimizedPath, reference);

	    if (isExpired(node)) {
	        optimizedPath.index = reference.length;
	        expireNode(node, expired, lru);
	        return [undefined, root];
	    }

	    var container = node;
	    var parent = root;

	    node = node.ツcontext;

	    if (node != null) {
	        parent = node.ツparent || root;
	        optimizedPath.index = reference.length;
	    } else {

	        var index = 0;
	        var count = reference.length - 1;

	        parent = node = root;

	        do {
	            var key = reference[index];
	            var branch = index < count;
	            optimizedPath.index = index;

	            var results = setNode(
	                root, parent, node, key, value,
	                branch, true, requestedPath, optimizedPath,
	                version, expired, lru, comparator, errorSelector
	            );
	            node = results[0];
	            if (isPrimitive(node)) {
	                optimizedPath.index = index;
	                return results;
	            }
	            parent = results[1];
	        } while (index++ < count);

	        optimizedPath.index = index;

	        if (container.ツcontext !== node) {
	            createHardlink(container, node);
	        }
	    }

	    return [node, parent];
	}

	function setNode(
	    root, parent, node, key, value,
	    branch, reference, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var type = node.$type;

	    while (type === $ref) {

	        var results = setReference(
	            value, root, node, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector
	        );

	        node = results[0];

	        if (isPrimitive(node)) {
	            return results;
	        }

	        parent = results[1];
	        type = node.$type;
	    }

	    if (type !== void 0) {
	        return [node, parent];
	    }

	    if (key == null) {
	        if (branch) {
	            throw new NullInPathError();
	        } else if (node) {
	            key = node.ツkey;
	        }
	    } else {
	        parent = node;
	        node = parent[key];
	    }

	    node = mergeValueOrInsertBranch(
	        parent, node, key, value,
	        branch, reference, requestedPath, optimizedPath,
	        version, expired, lru, comparator, errorSelector
	    );

	    return [node, parent];
	}


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	var getValueSync = __webpack_require__(416);
	var InvalidModelError = __webpack_require__(422);

	module.exports = function getBoundValue(model, pathArg, materialized) {

	    var path = pathArg;
	    var boundPath = pathArg;
	    var boxed, treatErrorsAsValues,
	        value, shorted, found;

	    boxed = model._boxed;
	    materialized = model._materialized;
	    treatErrorsAsValues = model._treatErrorsAsValues;

	    model._boxed = true;
	    model._materialized = materialized === undefined || materialized;
	    model._treatErrorsAsValues = true;

	    value = getValueSync(model, path.concat(null), true);

	    model._boxed = boxed;
	    model._materialized = materialized;
	    model._treatErrorsAsValues = treatErrorsAsValues;

	    path = value.optimizedPath;
	    shorted = value.shorted;
	    found = value.found;
	    value = value.value;

	    while (path.length && path[path.length - 1] === null) {
	        path.pop();
	    }

	    if (found && shorted) {
	        throw new InvalidModelError(boundPath, path);
	    }

	    return {
	        path: path,
	        value: value,
	        shorted: shorted,
	        found: found
	    };
	};


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	var followReference = __webpack_require__(417);
	var clone = __webpack_require__(420);
	var isExpired = __webpack_require__(421);
	var promote = __webpack_require__(419);
	var $ref = __webpack_require__(376);
	var $atom = __webpack_require__(402);
	var $error = __webpack_require__(395);

	module.exports = function getValueSync(model, simplePath, noClone) {
	    var root = model._root.cache;
	    var len = simplePath.length;
	    var optimizedPath = [];
	    var shorted = false, shouldShort = false;
	    var depth = 0;
	    var key, i, next = root, curr = root, out = root, type, ref, refNode;
	    var found = true;
	    var expired = false;

	    while (next && depth < len) {
	        key = simplePath[depth++];
	        if (key !== null) {
	            next = curr[key];
	            optimizedPath[optimizedPath.length] = key;
	        }

	        if (!next) {
	            out = undefined;
	            shorted = true;
	            found = false;
	            break;
	        }

	        type = next.$type;

	        // A materialized item.  There is nothing to deref to.
	        if (type === $atom && next.value === undefined) {
	            out = undefined;
	            found = false;
	            shorted = depth < len;
	            break;
	        }

	        // Up to the last key we follow references, ensure that they are not
	        // expired either.
	        if (depth < len) {
	            if (type === $ref) {

	                // If the reference is expired then we need to set expired to
	                // true.
	                if (isExpired(next)) {
	                    expired = true;
	                    out = undefined;
	                    break;
	                }

	                ref = followReference(model, root, root, next, next.value);
	                refNode = ref[0];

	                // The next node is also set to undefined because nothing
	                // could be found, this reference points to nothing, so
	                // nothing must be returned.
	                if (!refNode) {
	                    out = void 0;
	                    next = void 0;
	                    found = false;
	                    break;
	                }
	                type = refNode.$type;
	                next = refNode;
	                optimizedPath = ref[1].slice(0);
	            }

	            if (type) {
	                break;
	            }
	        }
	        // If there is a value, then we have great success, else, report an undefined.
	        else {
	            out = next;
	        }
	        curr = next;
	    }

	    if (depth < len && !expired) {
	        // Unfortunately, if all that follows are nulls, then we have not shorted.
	        for (i = depth; i < len; ++i) {
	            if (simplePath[depth] !== null) {
	                shouldShort = true;
	                break;
	            }
	        }
	        // if we should short or report value.  Values are reported on nulls.
	        if (shouldShort) {
	            shorted = true;
	            out = void 0;
	        } else {
	            out = next;
	        }

	        for (i = depth; i < len; ++i) {
	            if (simplePath[i] !== null) {
	                optimizedPath[optimizedPath.length] = simplePath[i];
	            }
	        }
	    }

	    // promotes if not expired
	    if (out && type) {
	        if (isExpired(out)) {
	            out = void 0;
	        } else {
	            promote(model._root, out);
	        }
	    }

	    // if (out && out.$type === $error && !model._treatErrorsAsValues) {
	    if (out && type === $error && !model._treatErrorsAsValues) {
	        throw {
	            path: depth === len ? simplePath : simplePath.slice(0, depth),
	            value: out.value
	        };
	    } else if (out && model._boxed) {
	        out = Boolean(type) && !noClone ? clone(out) : out;
	    } else if (!out && model._materialized) {
	        out = {$type: $atom};
	    } else if (out) {
	        out = out.value;
	    }

	    return {
	        value: out,
	        shorted: shorted,
	        optimizedPath: optimizedPath,
	        found: found
	    };
	};


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	var createHardlink = __webpack_require__(373);
	var onValue = __webpack_require__(418);
	var isExpired = __webpack_require__(421);
	var $ref = __webpack_require__(376);
	var promote = __webpack_require__(419);

	/* eslint-disable no-constant-condition */
	function followReference(model, root, nodeArg, referenceContainerArg,
	                         referenceArg, seed, isJSONG) {

	    var node = nodeArg;
	    var reference = referenceArg;
	    var referenceContainer = referenceContainerArg;
	    var depth = 0;
	    var k, next;

	    while (true) {
	        if (depth === 0 && referenceContainer.ツcontext) {
	            depth = reference.length;
	            next = referenceContainer.ツcontext;
	        } else {
	            k = reference[depth++];
	            next = node[k];
	        }
	        if (next) {
	            var type = next.$type;
	            var value = type && next.value || next;

	            if (depth < reference.length) {
	                if (type) {
	                    node = next;
	                    break;
	                }

	                node = next;
	                continue;
	            }

	            // We need to report a value or follow another reference.
	            else {

	                node = next;

	                if (type && isExpired(next)) {
	                    break;
	                }

	                if (!referenceContainer.ツcontext) {
	                    createHardlink(referenceContainer, next);
	                }

	                // Restart the reference follower.
	                if (type === $ref) {

	                    // Nulls out the depth, outerResults,
	                    if (isJSONG) {
	                        onValue(model, next, seed, null, null, null, null,
	                                reference, reference.length, isJSONG);
	                    } else {
	                        promote(model._root, next);
	                    }

	                    depth = 0;
	                    reference = value;
	                    referenceContainer = next;
	                    node = root;
	                    continue;
	                }

	                break;
	            }
	        } else {
	            node = void 0;
	        }
	        break;
	    }


	    if (depth < reference.length && node !== void 0) {
	        var ref = [];
	        for (var i = 0; i < depth; i++) {
	            ref[i] = reference[i];
	        }
	        reference = ref;
	    }

	    return [node, reference, referenceContainer];
	}
	/* eslint-enable */

	module.exports = followReference;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var promote = __webpack_require__(419);
	var clone = __webpack_require__(420);
	var $ref = __webpack_require__(376);
	var $atom = __webpack_require__(402);
	var $error = __webpack_require__(395);

	module.exports = function onValue(model, node, seed, depth, outerResults,
	                                  branchInfo, requestedPath, optimizedPath,
	                                  optimizedLength, isJSONG) {
	    // Promote first.  Even if no output is produced we should still promote.
	    if (node) {
	        promote(model._root, node);
	    }

	    // Preload
	    if (!seed) {
	        return;
	    }

	    var i, len, k, key, curr, prev = null, prevK;
	    var materialized = false, valueNode;

	    if (!node || node.value === undefined) {
	        materialized = model._materialized;
	    }

	    // materialized
	    if (materialized) {
	        valueNode = {$type: $atom};
	    }

	    // Boxed Mode will clone the node.
	    else if (model._boxed) {
	        valueNode = clone(node);
	    }

	    // JSONG always clones the node.
	    else if (node.$type === $ref || node.$type === $error) {
	        if (isJSONG) {
	            valueNode = clone(node);
	        } else {
	            valueNode = node.value;
	        }
	    }

	    else if (isJSONG) {
	        var isObject = node.value && typeof node.value === "object";
	        var isUserCreatedNode = !node.ツmodelCreated;
	        if (isObject || isUserCreatedNode) {
	            valueNode = clone(node);
	        } else {
	            valueNode = node.value;
	        }
	    }

	    else {
	        valueNode = node.value;
	    }

	    if (outerResults) {
	        outerResults.hasValue = true;
	    }

	    if (isJSONG) {
	        curr = seed.jsonGraph;
	        if (!curr) {
	            curr = seed.jsonGraph = {};
	            seed.paths = [];
	        }
	        for (i = 0, len = optimizedLength - 1; i < len; i++) {
	            key = optimizedPath[i];

	            if (!curr[key]) {
	                curr[key] = {};
	            }
	            curr = curr[key];
	        }

	        // assign the last
	        key = optimizedPath[i];

	        // TODO: Special case? do string comparisons make big difference?
	        curr[key] = materialized ? {$type: $atom} : valueNode;
	        if (requestedPath) {
	            seed.paths.push(requestedPath.slice(0, depth));
	        }
	    }

	    // The output is pathMap and the depth is 0.  It is just a
	    // value report it as the found JSON
	    else if (depth === 0) {
	        seed.json = valueNode;
	    }

	    // The output is pathMap but we need to build the pathMap before
	    // reporting the value.
	    else {
	        curr = seed.json;
	        if (!curr) {
	            curr = seed.json = {};
	        }
	        for (i = 0; i < depth - 1; i++) {
	            k = requestedPath[i];

	            // The branch info is already generated output from the walk algo
	            // with the required __path information on it.
	            if (!curr[k]) {
	                curr[k] = branchInfo[i];
	            }

	            prev = curr;
	            prevK = k;
	            curr = curr[k];
	        }
	        k = requestedPath[i];
	        if (k !== null) {
	            curr[k] = valueNode;
	        } else {
	            prev[prevK] = valueNode;
	        }
	    }
	};


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var EXPIRES_NEVER = __webpack_require__(380);

	// [H] -> Next -> ... -> [T]
	// [T] -> Prev -> ... -> [H]
	module.exports = function lruPromote(root, object) {
	    // Never promote node.$expires === 1.  They cannot expire.
	    if (object.$expires === EXPIRES_NEVER) {
	        return;
	    }

	    var head = root.ツhead;

	    // Nothing is in the cache.
	    if (!head) {
	        root.ツhead = root.ツtail = object;
	        return;
	    }

	    if (head === object) {
	        return;
	    }

	    // The item always exist in the cache since to get anything in the
	    // cache it first must go through set.
	    var prev = object.ツprev;
	    var next = object.ツnext;
	    if (next) {
	        next.ツprev = prev;
	    }
	    if (prev) {
	        prev.ツnext = next;
	    }
	    object.ツprev = undefined;

	    // Insert into head position
	    root.ツhead = object;
	    object.ツnext = head;
	    head.ツprev = object;

	    // If the item we promoted was the tail, then set prev to tail.
	    if (object === root.ツtail) {
	        root.ツtail = prev;
	    }
	};


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	// Copies the node
	var unicodePrefix = __webpack_require__(375);

	module.exports = function clone(node) {
	    var outValue, i, len;
	    var keys = Object.keys(node);
	    outValue = {};
	    for (i = 0, len = keys.length; i < len; i++) {
	        var k = keys[i];
	        var k0 = k.charAt(0);
	        if (k0 === unicodePrefix) {
	            continue;
	        }
	        outValue[k] = node[k];
	    }
	    return outValue;
	};



/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(378);
	module.exports = function isExpired(node) {
	    var $expires = node.$expires === void 0 && -1 || node.$expires;
	    return $expires !== -1 && $expires !== 1 && ($expires === 0 || $expires < now());
	};


/***/ },
/* 422 */
/***/ function(module, exports) {

	var NAME = "InvalidModelError";
	var MESSAGE = "The boundPath of the model is not valid since a value or error was found before the path end.";
	/**
	 * An InvalidModelError can only happen when a user binds, whether sync
	 * or async to shorted value.  See the unit tests for examples.
	 *
	 * @param {String} message
	 * @private
	 */
	function InvalidModelError(boundPath, shortedPath) {
	    this.message = MESSAGE;
	    this.stack = (new Error()).stack;
	    this.boundPath = boundPath;
	    this.shortedPath = shortedPath;
	}

	// instanceof will be an error, but stack will be correct because its defined in the constructor.
	InvalidModelError.prototype = new Error();
	InvalidModelError.prototype.name = NAME;
	InvalidModelError.message = MESSAGE;

	module.exports = InvalidModelError;


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var $ref = __webpack_require__(376);
	var $error = __webpack_require__(395);
	var getType = __webpack_require__(424);
	var getSize = __webpack_require__(396);
	var getTimestamp = __webpack_require__(397);

	var isExpired = __webpack_require__(398);
	var isPrimitive = __webpack_require__(381);
	var isFunction = __webpack_require__(363);

	var wrapNode = __webpack_require__(399);
	var expireNode = __webpack_require__(382);
	var insertNode = __webpack_require__(403);
	var replaceNode = __webpack_require__(404);
	var updateNodeAncestors = __webpack_require__(410);
	var updateBackReferenceVersions = __webpack_require__(411);
	var reconstructPath = __webpack_require__(412);

	module.exports = function mergeValueOrInsertBranch(
	    parent, node, key, value,
	    branch, reference, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var type = getType(node, reference);

	    if (branch || reference) {
	        if (type && isExpired(node)) {
	            type = "expired";
	            expireNode(node, expired, lru);
	        }
	        if ((type && type !== $ref) || isPrimitive(node)) {
	            node = replaceNode(node, {}, parent, key, lru);
	            node = insertNode(node, parent, key, version, optimizedPath);
	            node = updateBackReferenceVersions(node, version);
	        }
	    } else {
	        var message = value;
	        var mType = getType(message);
	        // Compare the current cache value with the new value. If either of
	        // them don't have a timestamp, or the message's timestamp is newer,
	        // replace the cache value with the message value. If a comparator
	        // is specified, the comparator takes precedence over timestamps.
	        //
	        // Comparing either Number or undefined to undefined always results in false.
	        var isDistinct = (getTimestamp(message) < getTimestamp(node)) === false;
	        // If at least one of the cache/message are sentinels, compare them.
	        if ((type || mType) && isFunction(comparator)) {
	            isDistinct = !comparator(node, message, optimizedPath.slice(0, optimizedPath.index));
	        }
	        if (isDistinct) {

	            if (mType === $error && isFunction(errorSelector)) {
	                message = errorSelector(reconstructPath(requestedPath, key), message);
	            }

	            message = wrapNode(message, mType, mType ? message.value : message);

	            var sizeOffset = getSize(node) - getSize(message);

	            node = replaceNode(node, message, parent, key, lru);
	            parent = updateNodeAncestors(parent, sizeOffset, lru, version);
	            node = insertNode(node, parent, key, version, optimizedPath);
	        }
	    }

	    return node;
	};


/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(365);

	module.exports = function getType(node, anyType) {
	    var type = isObject(node) && node.$type || void 0;
	    if (anyType && type) {
	        return "branch";
	    }
	    return type;
	};


/***/ },
/* 425 */
/***/ function(module, exports) {

	var NAME = "InvalidSourceError";
	/**
	 * InvalidSourceError happens when a dataSource syncronously throws
	 * an exception during a get/set/call operation.
	 *
	 * @param {Error} error - The error that was thrown.
	 * @private
	 */
	function InvalidSourceError(error) {
	    this.message = "An exception was thrown when making a request.";
	    this.stack = (new Error()).stack;
	    this.innerError = error;
	}

	// instanceof will be an error, but stack will be correct because its defined
	// in the constructor.
	InvalidSourceError.prototype = new Error();
	InvalidSourceError.prototype.name = NAME;
	InvalidSourceError.is = function(e) {
	    return e && e.name === NAME;
	};

	module.exports = InvalidSourceError;


/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	var complement = __webpack_require__(427);
	var flushGetRequest = __webpack_require__(429);
	var REQUEST_ID = 0;
	var GetRequestType = __webpack_require__(369).GetRequest;
	var setJSONGraphs = __webpack_require__(372);
	var setPathValues = __webpack_require__(414);
	var $error = __webpack_require__(395);
	var emptyArray = [];
	var InvalidSourceError = __webpack_require__(425);

	/**
	 * Creates a new GetRequest.  This GetRequest takes a scheduler and
	 * the request queue.  Once the scheduler fires, all batched requests
	 * will be sent to the server.  Upon request completion, the data is
	 * merged back into the cache and all callbacks are notified.
	 *
	 * @param {Scheduler} scheduler -
	 * @param {RequestQueueV2} requestQueue -
	 */
	var GetRequestV2 = function(scheduler, requestQueue) {
	    this.sent = false;
	    this.scheduled = false;
	    this.requestQueue = requestQueue;
	    this.id = ++REQUEST_ID;
	    this.type = GetRequestType;

	    this._scheduler = scheduler;
	    this._pathMap = {};
	    this._optimizedPaths = [];
	    this._requestedPaths = [];
	    this._callbacks = [];
	    this._count = 0;
	    this._disposable = null;
	    this._collapsed = null;
	    this._disposed = false;
	};

	GetRequestV2.prototype = {
	    /**
	     * batches the paths that are passed in.  Once the request is complete,
	     * all callbacks will be called and the request will be removed from
	     * parent queue.
	     * @param {Array} requestedPaths -
	     * @param {Array} optimizedPaths -
	     * @param {Function} callback -
	     */
	    batch: function(requestedPaths, optimizedPaths, callback) {
	        var self = this;
	        var oPaths = self._optimizedPaths;
	        var rPaths = self._requestedPaths;
	        var callbacks = self._callbacks;
	        var idx = oPaths.length;

	        // If its not sent, simply add it to the requested paths
	        // and callbacks.
	        oPaths[idx] = optimizedPaths;
	        rPaths[idx] = requestedPaths;
	        callbacks[idx] = callback;
	        ++self._count;

	        // If it has not been scheduled, then schedule the action
	        if (!self.scheduled) {
	            self.scheduled = true;

	            var flushedDisposable;
	            var scheduleDisposable = self._scheduler.schedule(function() {
	                flushedDisposable =
	                    flushGetRequest(self, oPaths, function(err, data) {
	                        var i, fn, len;
	                        self.requestQueue.removeRequest(self);
	                        self._disposed = true;

	                        if (err instanceof InvalidSourceError) {
	                            for (i = 0, len = callbacks.length; i < len; ++i) {
	                                fn = callbacks[i];
	                                if (fn) {
	                                    fn(err);
	                                }
	                            }
	                            return;
	                        }

	                        // If there is at least one callback remaining, then
	                        // callback the callbacks.
	                        if (self._count) {
	                            self._merge(rPaths, err, data);

	                            // Call the callbacks.  The first one inserts all
	                            // the data so that the rest do not have consider
	                            // if their data is present or not.
	                            for (i = 0, len = callbacks.length; i < len; ++i) {
	                                fn = callbacks[i];
	                                if (fn) {
	                                    fn(err, data);
	                                }
	                            }
	                        }
	                    });
	            });

	            // There is a race condition here. If the scheduler is sync then it
	            // exposes a condition where the flush request cannot be disposed.
	            // To correct this issue, if there is no flushedDisposable, then the
	            // scheduler is async and should use scheduler disposable, else use
	            // the flushedDisposable.
	            self._disposable = flushedDisposable || scheduleDisposable;
	        }

	        // Disposes this batched request.  This does not mean that the
	        // entire request has been disposed, but just the local one, if all
	        // requests are disposed, then the outer disposable will be removed.
	        return createDisposable(self, idx);
	    },

	    /**
	     * Attempts to add paths to the outgoing request.  If there are added
	     * paths then the request callback will be added to the callback list.
	     *
	     * @returns {Array} - the remaining paths in the request.
	     */
	    add: function(requested, optimized, callback) {
	        // uses the length tree complement calculator.
	        var self = this;
	        var complementTuple = complement(requested, optimized, self._pathMap);
	        var optimizedComplement;
	        var requestedComplement;

	        if (complementTuple) {
	            requestedComplement = complementTuple[2];
	            optimizedComplement = complementTuple[1];
	        } else {
	            requestedComplement = requested;
	            optimizedComplement = optimized;
	        }

	        var inserted = false;
	        var disposable = false;

	        // If the out paths is less than the passed in paths, then there
	        // has been an intersection and the complement has been returned.
	        // Therefore, this can be deduped across requests.
	        if (optimizedComplement.length < optimized.length) {
	            inserted = true;
	            var idx = self._callbacks.length;
	            self._callbacks[idx] = callback;
	            self._requestedPaths[idx] = complementTuple[0];
	            self._optimizedPaths[idx] = [];
	            ++self._count;

	            disposable = createDisposable(self, idx);
	        }

	        return [inserted, requestedComplement, optimizedComplement, disposable];
	    },

	    /**
	     * merges the response into the model"s cache.
	     */
	    _merge: function(requested, err, data) {
	        var self = this;
	        var model = self.requestQueue.model;
	        var modelRoot = model._root;
	        var errorSelector = modelRoot.errorSelector;
	        var comparator = modelRoot.comparator;
	        var boundPath = model._path;

	        model._path = emptyArray;

	        // flatten all the requested paths, adds them to the
	        var nextPaths = flattenRequestedPaths(requested);

	        // Insert errors in every requested position.
	        if (err) {
	            var error = err;

	            // Converts errors to objects, a more friendly storage
	            // of errors.
	            if (error instanceof Error) {
	                error = {
	                    message: error.message
	                };
	            }

	            // Not all errors are value $types.
	            if (!error.$type) {
	                error = {
	                    $type: $error,
	                    value: error
	                };
	            }

	            var pathValues = nextPaths.map(function(x) {
	                return {
	                    path: x,
	                    value: error
	                };
	            });
	            setPathValues(model, pathValues, null, errorSelector, comparator);
	        }

	        // Insert the jsonGraph from the dataSource.
	        else {
	            setJSONGraphs(model, [{
	                paths: nextPaths,
	                jsonGraph: data.jsonGraph
	            }], null, errorSelector, comparator);
	        }

	        // return the model"s boundPath
	        model._path = boundPath;
	    }
	};

	// Creates a more efficient closure of the things that are
	// needed.  So the request and the idx.  Also prevents code
	// duplication.
	function createDisposable(request, idx) {
	    var disposed = false;
	    return function() {
	        if (disposed || request._disposed) {
	            return;
	        }

	        disposed = true;
	        request._callbacks[idx] = null;
	        request._optimizedPaths[idx] = [];
	        request._requestedPaths[idx] = [];

	        // If there are no more requests, then dispose all of the request.
	        var count = --request._count;
	        if (count === 0) {
	            request._disposable.dispose();
	            request.requestQueue.removeRequest(request);
	        }
	    };
	}

	function flattenRequestedPaths(requested) {
	    var out = [];
	    var outLen = -1;
	    for (var i = 0, len = requested.length; i < len; ++i) {
	        var paths = requested[i];
	        for (var j = 0, innerLen = paths.length; j < innerLen; ++j) {
	            out[++outLen] = paths[j];
	        }
	    }
	    return out;
	}

	module.exports = GetRequestV2;


/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	var hasIntersection = __webpack_require__(384).hasIntersection;
	var arraySlice = __webpack_require__(428);

	/**
	 * creates the complement of the requested and optimized paths
	 * based on the provided tree.
	 *
	 * If there is no complement then this is just a glorified
	 * array copy.
	 */
	module.exports = function complement(requested, optimized, tree) {
	    var optimizedComplement = [];
	    var requestedComplement = [];
	    var requestedIntersection = [];
	    var intersectionLength = -1, complementLength = -1;
	    var intersectionFound = false;

	    for (var i = 0, len = optimized.length; i < len; ++i) {
	        // If this does not intersect then add it to the output.
	        var path = optimized[i];
	        var subTree = tree[path.length];

	        // If there is no subtree to look into or there is no intersection.
	        if (!subTree || !hasIntersection(subTree, path, 0)) {

	            if (intersectionFound) {
	                optimizedComplement[++complementLength] = path;
	                requestedComplement[complementLength] = requested[i];
	            }
	        } else {
	            // If there has been no intersection yet and
	            // i is bigger than 0 (meaning we have had only complements)
	            // then we need to update our complements to match the current
	            // reality.
	            if (!intersectionFound && i > 0) {
	                requestedComplement = arraySlice(requested, 0, i);
	                optimizedComplement = arraySlice(optimized, 0, i);
	            }

	            requestedIntersection[++intersectionLength] = requested[i];
	            intersectionFound = true;
	        }
	    }

	    if (!intersectionFound) {
	        return null;
	    }

	    return [requestedIntersection, optimizedComplement, requestedComplement ];
	};


/***/ },
/* 428 */
/***/ function(module, exports) {

	module.exports = function arraySlice(array, indexArg, endArg) {
	    var index = indexArg || 0;
	    var i = -1;
	    var n = array.length - index;

	    if (n < 0) {
	        n = 0;
	    }

	    if (endArg > 0 && n > endArg) {
	        n = endArg;
	    }

	    var array2 = new Array(n);
	    while (++i < n) {
	        array2[i] = array[i + index];
	    }
	    return array2;
	};


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var pathUtils = __webpack_require__(384);
	var toTree = pathUtils.toTree;
	var toPaths = pathUtils.toPaths;
	var InvalidSourceError = __webpack_require__(425);

	/**
	 * Flushes the current set of requests.  This will send the paths to the
	 * dataSource.  * The results of the dataSource will be sent to callback which
	 * should perform the zip of all callbacks.
	 * @param {GetRequest} request -
	 * @param {Array} listOfPaths -
	 * @param {Function} callback -
	 * @private
	 */
	module.exports = function flushGetRequest(request, listOfPaths, callback) {
	    if (request._count === 0) {
	        request.requestQueue.removeRequest(request);
	        return null;
	    }

	    request.sent = true;
	    request.scheduled = false;

	    // TODO: Move this to the collapse algorithm,
	    // TODO: we should have a collapse that returns the paths and
	    // TODO: the trees.

	    // Take all the paths and add them to the pathMap by length.
	    // Since its a list of paths
	    var pathMap = request._pathMap;
	    var listKeys = Object.keys(listOfPaths);
	    var listIdx = 0, listLen = listKeys.length;
	    for (; listIdx < listLen; ++listIdx) {
	        var paths = listOfPaths[listIdx];
	        for (var j = 0, pathLen = paths.length; j < pathLen; ++j) {
	            var pathSet = paths[j];
	            var len = pathSet.length;

	            if (!pathMap[len]) {
	                pathMap[len] = [pathSet];
	            } else {
	                var pathSetsByLength = pathMap[len];
	                pathSetsByLength[pathSetsByLength.length] = pathSet;
	            }
	        }
	    }

	    // now that we have them all by length, convert each to a tree.
	    var pathMapKeys = Object.keys(pathMap);
	    var pathMapIdx = 0, pathMapLen = pathMapKeys.length;
	    for (; pathMapIdx < pathMapLen; ++pathMapIdx) {
	        var pathMapKey = pathMapKeys[pathMapIdx];
	        pathMap[pathMapKey] = toTree(pathMap[pathMapKey]);
	    }

	    // Take the pathMapTree and create the collapsed paths and send those
	    // off to the server.
	    var collapsedPaths = request._collasped = toPaths(pathMap);
	    var jsonGraphData;

	    // Make the request.
	    // You are probably wondering why this is not cancellable.  If a request
	    // goes out, and all the requests are removed, the request should not be
	    // cancelled.  The reasoning is that another request could come in, after
	    // all callbacks have been removed and be deduped.  Might as well keep this
	    // around until it comes back.  If at that point there are no requests then
	    // we cancel at the callback above.
	    var getRequest;
	    try {
	        getRequest = request.
	            requestQueue.
	            model._source.
	            get(collapsedPaths);
	    } catch (e) {
	        callback(new InvalidSourceError());
	        return null;
	    }

	    // Ensures that the disposable is available for the outside to cancel.
	    var disposable = getRequest.
	        subscribe(function(data) {
	            jsonGraphData = data;
	        }, function(err) {
	            callback(err, jsonGraphData);
	        }, function() {
	            callback(null, jsonGraphData);
	        });

	    return disposable;
	};



/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var falcor = __webpack_require__(351);
	var noop = __webpack_require__(431);

	/**
	 * A ModelResponse is a container for the results of a get, set, or call operation performed on a Model. The ModelResponse provides methods which can be used to specify the output format of the data retrieved from a Model, as well as how that data is delivered.
	 * @constructor ModelResponse
	 * @augments Observable
	*/
	function ModelResponse(subscribe) {
	    this._subscribe = subscribe;
	}

	ModelResponse.prototype._toJSONG = function toJSONG() {
	    return this;
	};

	/**
	 * The progressively method breaks the response up into two parts: the data immediately available in the Model cache, and the data in the Model cache after the missing data has been retrieved from the DataSource.
	 * The progressively method creates a ModelResponse that immediately returns the requested data that is available in the Model cache. If any requested paths are not available in the cache, the ModelResponse will send another JSON message with all of the requested data after it has been retrieved from the DataSource.
	 * @name progressively
	 * @memberof ModelResponse.prototype
	 * @function
	 * @return {ModelResponse.<JSONEnvelope>} the values found at the requested paths.
	 * @example
	var dataSource = (new falcor.Model({
	  cache: {
	    user: {
	      name: "Steve",
	      surname: "McGuire",
	      age: 31
	    }
	  }
	})).asDataSource();

	var model = new falcor.Model({
	  source: dataSource,
	  cache: {
	    user: {
	      name: "Steve",
	      surname: "McGuire"
	    }
	  }
	});

	model.
	  get(["user",["name", "surname", "age"]]).
	  progressively().
	  // this callback will be invoked twice, once with the data in the
	  // Model cache, and again with the additional data retrieved from the DataSource.
	  subscribe(function(json){
	    console.log(JSON.stringify(json,null,4));
	  });

	// prints...
	// {
	//     "json": {
	//         "user": {
	//             "name": "Steve",
	//             "surname": "McGuire"
	//         }
	//     }
	// }
	// ...and then prints...
	// {
	//     "json": {
	//         "user": {
	//             "name": "Steve",
	//             "surname": "McGuire",
	//             "age": 31
	//         }
	//     }
	// }
	*/
	ModelResponse.prototype.progressively = function progressively() {
	    return this;
	};

	ModelResponse.prototype.subscribe =
	ModelResponse.prototype.forEach = function subscribe(a, b, c) {
	    var observer = a;
	    if (!observer || typeof observer !== "object") {
	        observer = {
	            onNext: a || noop,
	            onError: b || noop,
	            onCompleted: c || noop
	        };
	    }
	    var subscription = this._subscribe(observer);
	    switch (typeof subscription) {
	        case "function":
	            return { dispose: subscription };
	        case "object":
	            return subscription || { dispose: noop };
	        default:
	            return { dispose: noop };
	    }
	};

	ModelResponse.prototype.then = function then(onNext, onError) {
	    var self = this;
	    return new falcor.Promise(function(resolve, reject) {
	        var rejected = false;
	        var values = [];
	        self.subscribe(
	            function(value) {
	                values[values.length] = value;
	            },
	            function(errors) {
	                rejected = true;
	                reject(errors);
	            },
	            function() {
	                var value = values;
	                if (values.length <= 1) {
	                    value = values[0];
	                }

	                if (rejected === false) {
	                    resolve(value);
	                }
	            }
	        );
	    }).then(onNext, onError);
	};

	module.exports = ModelResponse;


/***/ },
/* 431 */
/***/ function(module, exports) {

	module.exports = function noop() {};


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var ModelResponse = __webpack_require__(430);
	var InvalidSourceError = __webpack_require__(425);

	var pathSyntax = __webpack_require__(335);

	/**
	 * @private
	 * @augments ModelResponse
	 */
	function CallResponse(model, callPath, args, suffix, paths) {
	    this.callPath = pathSyntax.fromPath(callPath);
	    this.args = args;

	    if (paths) {
	        this.paths = paths.map(pathSyntax.fromPath);
	    }
	    if (suffix) {
	        this.suffix = suffix.map(pathSyntax.fromPath);
	    }
	    this.model = model;
	}

	CallResponse.prototype = Object.create(ModelResponse.prototype);
	CallResponse.prototype._subscribe = function _subscribe(observer) {
	    var callPath = this.callPath;
	    var callArgs = this.args;
	    var suffixes = this.suffix;
	    var extraPaths = this.paths;
	    var model = this.model;
	    var rootModel = model._clone({
	        _path: []
	    });
	    var boundPath = model._path;
	    var boundCallPath = boundPath.concat(callPath);

	    /*eslint-disable consistent-return*/
	    // Precisely the same error as the router when a call function does not
	    // exist.
	    if (!model._source) {
	        observer.onError(new Error("function does not exist"));
	        return;
	    }


	    var response, obs;
	    try {
	        obs = model._source.
	            call(boundCallPath, callArgs, suffixes, extraPaths);
	    } catch (e) {
	        observer.onError(new InvalidSourceError(e));
	        return;
	    }

	    return obs.
	        subscribe(function(res) {
	            response = res;
	        }, function(err) {
	            observer.onError(err);
	        }, function() {

	            // Run the invalidations first then the follow up JSONGraph set.
	            var invalidations = response.invalidated;
	            if (invalidations && invalidations.length) {
	                rootModel.invalidate.apply(rootModel, invalidations);
	            }

	            // The set
	            rootModel.
	                withoutDataSource().
	                set(response).subscribe(function(x) {
	                    observer.onNext(x);
	                }, function(err) {
	                    observer.onError(err);
	                }, function() {
	                    observer.onCompleted();
	                });
	        });
	    /*eslint-enable consistent-return*/
	};

	module.exports = CallResponse;


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = Array.isArray;
	var ModelResponse = __webpack_require__(430);
	var isPathValue = __webpack_require__(434);
	var isJSONEnvelope = __webpack_require__(435);
	var empty = {dispose: function() {}};

	function InvalidateResponse(model, args) {
	    // TODO: This should be removed.  There should only be 1 type of arguments
	    // coming in, but we have strayed from documentation.
	    this._model = model;

	    var groups = [];
	    var group, groupType;
	    var argIndex = -1;
	    var argCount = args.length;

	    // Validation of arguments have been moved out of this function.
	    while (++argIndex < argCount) {
	        var arg = args[argIndex];
	        var argType;
	        if (isArray(arg)) {
	            argType = "PathValues";
	        } else if (isPathValue(arg)) {
	            argType = "PathValues";
	        } else if (isJSONEnvelope(arg)) {
	            argType = "PathMaps";
	        } else {
	            throw new Error("Invalid Input");
	        }

	        if (groupType !== argType) {
	            groupType = argType;
	            group = {
	                inputType: argType,
	                arguments: []
	            };
	            groups.push(group);
	        }

	        group.arguments.push(arg);
	    }

	    this._groups = groups;
	}

	InvalidateResponse.prototype = Object.create(ModelResponse.prototype);
	InvalidateResponse.prototype.progressively = function progressively() {
	    return this;
	};
	InvalidateResponse.prototype._toJSONG = function _toJSONG() {
	    return this;
	};

	InvalidateResponse.prototype._subscribe = function _subscribe(observer) {

	    var model = this._model;
	    this._groups.forEach(function(group) {
	        var inputType = group.inputType;
	        var methodArgs = group.arguments;
	        var operationName = "_invalidate" + inputType;
	        var operationFunc = model[operationName];
	        operationFunc(model, methodArgs);
	    });
	    observer.onCompleted();

	    return empty;
	};

	module.exports = InvalidateResponse;


/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = Array.isArray;
	var isObject = __webpack_require__(365);

	module.exports = function isPathValue(pathValue) {
	    return isObject(pathValue) && (
	        isArray(pathValue.path) || (
	            typeof pathValue.path === "string"
	        ));
	};


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(365);

	module.exports = function isJSONEnvelope(envelope) {
	    return isObject(envelope) && ("json" in envelope);
	};


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var asap = __webpack_require__(360);
	var empty = {dispose: function() {}};

	function ASAPScheduler() {}

	ASAPScheduler.prototype.schedule = function schedule(action) {
	    asap(action);
	    return empty;
	};

	ASAPScheduler.prototype.scheduleWithState = function scheduleWithState(state, action) {
	    var self = this;
	    asap(function() {
	        action(self, state);
	    });
	    return empty;
	};

	module.exports = ASAPScheduler;


/***/ },
/* 437 */
/***/ function(module, exports) {

	function TimeoutScheduler(delay) {
	    this.delay = delay;
	}

	var TimerDisposable = function TimerDisposable(id) {
	    this.id = id;
	    this.disposed = false;
	};

	TimeoutScheduler.prototype.schedule = function schedule(action) {
	    var id = setTimeout(action, this.delay);
	    return new TimerDisposable(id);
	};

	TimeoutScheduler.prototype.scheduleWithState = function scheduleWithState(state, action) {
	    var self = this;
	    var id = setTimeout(function() {
	        action(self, state);
	    }, this.delay);
	    return new TimerDisposable(id);
	};

	TimerDisposable.prototype.dispose = function() {
	    if (this.disposed) {
	        return;
	    }

	    clearTimeout(this.id);
	    this.disposed = true;
	};

	module.exports = TimeoutScheduler;


/***/ },
/* 438 */
/***/ function(module, exports) {

	module.exports = function arrayClone(array) {
	    if (!array) {
	        return array;
	    }
	    var i = -1;
	    var n = array.length;
	    var array2 = [];
	    while (++i < n) {
	        array2[i] = array[i];
	    }
	    return array2;
	};


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	var removeNode = __webpack_require__(407);
	var updateNodeAncestors = __webpack_require__(410);

	module.exports = function collect(lru, expired, totalArg, max, ratioArg, version) {

	    var total = totalArg;
	    var ratio = ratioArg;

	    if (typeof ratio !== "number") {
	        ratio = 0.75;
	    }

	    var shouldUpdate = typeof version === "number";
	    var targetSize = max * ratio;
	    var parent, node, size;

	    node = expired.pop();

	    while (node) {
	        size = node.$size || 0;
	        total -= size;
	        if (shouldUpdate === true) {
	            updateNodeAncestors(node, size, lru, version);
	        } else if (parent = node.ツparent) {
	            removeNode(node, parent, node.ツkey, lru);
	        }
	        node = expired.pop();
	    }

	    if (total >= max) {
	        var prev = lru.ツtail;
	        node = prev;
	        while ((total >= targetSize) && node) {
	            prev = prev.ツprev;
	            size = node.$size || 0;
	            total -= size;
	            if (shouldUpdate === true) {
	                updateNodeAncestors(node, size, lru, version);
	            }
	            node = prev;
	        }

	        lru.ツtail = lru.ツprev = node;
	        if (node == null) {
	            lru.ツhead = lru.ツnext = undefined;
	        } else {
	            node.ツnext = undefined;
	        }
	    }
	};


/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = Array.isArray;
	var isObject = __webpack_require__(365);

	module.exports = function isJSONGraphEnvelope(envelope) {
	    return isObject(envelope) && isArray(envelope.paths) && (
	        isObject(envelope.jsonGraph) ||
	        isObject(envelope.jsong) ||
	        isObject(envelope.json) ||
	        isObject(envelope.values) ||
	        isObject(envelope.value)
	    );
	};


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	var createHardlink = __webpack_require__(373);
	var __prefix = __webpack_require__(375);
	var $ref = __webpack_require__(376);

	var getBoundValue = __webpack_require__(415);

	var isArray = Array.isArray;
	var hasOwn = __webpack_require__(364);
	var isObject = __webpack_require__(365);
	var isExpired = __webpack_require__(398);
	var isFunction = __webpack_require__(363);
	var isPrimitive = __webpack_require__(381);
	var expireNode = __webpack_require__(382);
	var incrementVersion = __webpack_require__(393);
	var mergeValueOrInsertBranch = __webpack_require__(423);
	var NullInPathError = __webpack_require__(413);

	/**
	 * Sets a list of {@link PathMapEnvelope}s into a {@link JSONGraph}.
	 * @function
	 * @param {Object} model - the Model for which to insert the PathMaps.
	 * @param {Array.<PathMapEnvelope>} pathMapEnvelopes - the a list of {@link PathMapEnvelope}s to set.
	 * @return {Array.<Array.<Path>>} - an Array of Arrays where each inner Array is a list of requested and optimized paths (respectively) for the successfully set values.
	 */

	module.exports = function setPathMaps(model, pathMapEnvelopes, x, errorSelector, comparator) {

	    var modelRoot = model._root;
	    var lru = modelRoot;
	    var expired = modelRoot.expired;
	    var version = incrementVersion();
	    var bound = model._path;
	    var cache = modelRoot.cache;
	    var node = bound.length ? getBoundValue(model, bound).value : cache;
	    var parent = node.ツparent || cache;
	    var initialVersion = cache.ツversion;

	    var requestedPath = [];
	    var requestedPaths = [];
	    var optimizedPaths = [];
	    var optimizedIndex = bound.length;
	    var pathMapIndex = -1;
	    var pathMapCount = pathMapEnvelopes.length;

	    while (++pathMapIndex < pathMapCount) {

	        var pathMapEnvelope = pathMapEnvelopes[pathMapIndex];
	        var optimizedPath = bound.slice(0);
	        optimizedPath.index = optimizedIndex;

	        setPathMap(
	            pathMapEnvelope.json, 0, cache, parent, node,
	            requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector
	        );
	    }

	    var newVersion = cache.ツversion;
	    var rootChangeHandler = modelRoot.onChange;

	    if (isFunction(rootChangeHandler) && initialVersion !== newVersion) {
	        rootChangeHandler();
	    }

	    return [requestedPaths, optimizedPaths];
	};

	/* eslint-disable no-constant-condition */
	function setPathMap(
	    pathMap, depth, root, parent, node,
	    requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var keys = getKeys(pathMap);

	    if (keys && keys.length) {

	        var keyIndex = 0;
	        var keyCount = keys.length;
	        var optimizedIndex = optimizedPath.index;

	        do {
	            var key = keys[keyIndex];
	            var child = pathMap[key];
	            var branch = isObject(child) && !child.$type;

	            requestedPath.depth = depth;

	            var results = setNode(
	                root, parent, node, key, child,
	                branch, false, requestedPath, optimizedPath,
	                version, expired, lru, comparator, errorSelector
	            );

	            requestedPath[depth] = key;
	            requestedPath.index = depth;

	            optimizedPath[optimizedPath.index++] = key;
	            var nextNode = results[0];
	            var nextParent = results[1];
	            if (nextNode) {
	                if (branch) {
	                    setPathMap(
	                        child, depth + 1,
	                        root, nextParent, nextNode,
	                        requestedPaths, optimizedPaths, requestedPath, optimizedPath,
	                        version, expired, lru, comparator, errorSelector
	                    );
	                } else {
	                    requestedPaths.push(requestedPath.slice(0, requestedPath.index + 1));
	                    optimizedPaths.push(optimizedPath.slice(0, optimizedPath.index));
	                }
	            }
	            if (++keyIndex >= keyCount) {
	                break;
	            }
	            optimizedPath.index = optimizedIndex;
	        } while (true);
	    }
	}
	/* eslint-enable */

	function setReference(
	    value, root, node, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var reference = node.value;
	    optimizedPath.splice(0, optimizedPath.length);
	    optimizedPath.push.apply(optimizedPath, reference);

	    if (isExpired(node)) {
	        optimizedPath.index = reference.length;
	        expireNode(node, expired, lru);
	        return [undefined, root];
	    }

	    var container = node;
	    var parent = root;

	    node = node.ツcontext;

	    if (node != null) {
	        parent = node.ツparent || root;
	        optimizedPath.index = reference.length;
	    } else {

	        var index = 0;
	        var count = reference.length - 1;
	        optimizedPath.index = index;

	        parent = node = root;

	        do {
	            var key = reference[index];
	            var branch = index < count;
	            var results = setNode(
	                root, parent, node, key, value,
	                branch, true, requestedPath, optimizedPath,
	                version, expired, lru, comparator, errorSelector
	            );
	            node = results[0];
	            if (isPrimitive(node)) {
	                optimizedPath.index = index;
	                return results;
	            }
	            parent = results[1];
	        } while (index++ < count);

	        optimizedPath.index = index;

	        if (container.ツcontext !== node) {
	            createHardlink(container, node);
	        }
	    }

	    return [node, parent];
	}

	function setNode(
	    root, parent, node, key, value,
	    branch, reference, requestedPath, optimizedPath,
	    version, expired, lru, comparator, errorSelector) {

	    var type = node.$type;

	    while (type === $ref) {

	        var results = setReference(
	            value, root, node, requestedPath, optimizedPath,
	            version, expired, lru, comparator, errorSelector);

	        node = results[0];

	        if (isPrimitive(node)) {
	            return results;
	        }

	        parent = results[1];
	        type = node && node.$type;
	    }

	    if (type !== void 0) {
	        return [node, parent];
	    }

	    if (key == null) {
	        if (branch) {
	            throw new NullInPathError();
	        } else if (node) {
	            key = node.ツkey;
	        }
	    } else {
	        parent = node;
	        node = parent[key];
	    }

	    node = mergeValueOrInsertBranch(
	        parent, node, key, value,
	        branch, reference, requestedPath, optimizedPath,
	        version, expired, lru, comparator, errorSelector
	    );

	    return [node, parent];
	}

	function getKeys(pathMap) {

	    if (isObject(pathMap) && !pathMap.$type) {
	        var keys = [];
	        var itr = 0;
	        if (isArray(pathMap)) {
	            keys[itr++] = "length";
	        }
	        for (var key in pathMap) {
	            if (key[0] === __prefix || key[0] === "$" || !hasOwn(pathMap, key)) {
	                continue;
	            }
	            keys[itr++] = key;
	        }
	        return keys;
	    }

	    return void 0;
	}


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var pathSyntax = __webpack_require__(335);

	function sentinel(type, value, props) {
	    var copy = Object.create(null);
	    if (props != null) {
	        for(var key in props) {
	            copy[key] = props[key];
	        }
	        
	        copy["$type"] = type;
	        copy.value = value;
	        return copy;
	    }
	    else {
	        return { $type: type, value: value };
	    }    
	}

	module.exports = {
	    ref: function ref(path, props) {
	        return sentinel("ref", pathSyntax.fromPath(path), props);
	    },
	    atom: function atom(value, props) {
	        return sentinel("atom", value, props);        
	    },
	    undefined: function() {
	        return sentinel("atom");
	    },    
	    error: function error(errorValue, props) {
	        return sentinel("error", errorValue, props);        
	    },
	    pathValue: function pathValue(path, value) {
	        return { path: pathSyntax.fromPath(path), value: value };
	    },
	    pathInvalidation: function pathInvalidation(path) {
	        return { path: pathSyntax.fromPath(path), invalidated: true };
	    }    
	};


/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = Array.isArray;
	var isPathValue = __webpack_require__(434);
	var isJSONGraphEnvelope = __webpack_require__(440);
	var isJSONEnvelope = __webpack_require__(435);
	var pathSyntax = __webpack_require__(335);

	/**
	 *
	 * @param {Object} allowedInput - allowedInput is a map of input styles
	 * that are allowed
	 * @private
	 */
	module.exports = function validateInput(args, allowedInput, method) {
	    for (var i = 0, len = args.length; i < len; ++i) {
	        var arg = args[i];
	        var valid = false;

	        // Path
	        if (isArray(arg) && allowedInput.path) {
	            valid = true;
	        }

	        // Path Syntax
	        else if (typeof arg === "string" && allowedInput.pathSyntax) {
	            valid = true;
	        }

	        // Path Value
	        else if (isPathValue(arg) && allowedInput.pathValue) {
	            arg.path = pathSyntax.fromPath(arg.path);
	            valid = true;
	        }

	        // jsonGraph {jsonGraph: { ... }, paths: [ ... ]}
	        else if (isJSONGraphEnvelope(arg) && allowedInput.jsonGraph) {
	            valid = true;
	        }

	        // json env {json: {...}}
	        else if (isJSONEnvelope(arg) && allowedInput.json) {
	            valid = true;
	        }

	        // selector functions
	        else if (typeof arg === "function" &&
	                 i + 1 === len &&
	                 allowedInput.selector) {
	            valid = true;
	        }

	        if (!valid) {
	            return new Error("Unrecognized argument " + (typeof arg) + " [" + String(arg) + "] " + "to Model#" + method + "");
	        }
	    }
	    return true;
	};


/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	var isInternalKey = __webpack_require__(445);

	/**
	 * decends and copies the cache.
	 */
	module.exports = function getCache(cache) {
	    var out = {};
	    _copyCache(cache, out);

	    return out;
	};

	function cloneBoxedValue(boxedValue) {
	    var clonedValue = {};

	    var keys = Object.keys(boxedValue);
	    var key;
	    var i;
	    var l;

	    for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];

	        if (!isInternalKey(key)) {
	            clonedValue[key] = boxedValue[key];
	        }
	    }

	    return clonedValue;
	}

	function _copyCache(node, out, fromKey) {
	    // copy and return

	    Object.
	        keys(node).
	        filter(function(k) {
	            // Its not an internal key and the node has a value.  In the cache
	            // there are 3 possibilities for values.
	            // 1: A branch node.
	            // 2: A $type-value node.
	            // 3: undefined
	            // We will strip out 3
	            return !isInternalKey(k) && node[k] !== undefined;
	        }).
	        forEach(function(key) {
	            var cacheNext = node[key];
	            var outNext = out[key];

	            if (!outNext) {
	                outNext = out[key] = {};
	            }

	            // Paste the node into the out cache.
	            if (cacheNext.$type) {
	                var isObject = cacheNext.value && typeof cacheNext.value === "object";
	                var isUserCreatedcacheNext = !cacheNext.ツmodelCreated;
	                var value;
	                if (isObject || isUserCreatedcacheNext) {
	                    value = cloneBoxedValue(cacheNext);
	                } else {
	                    value = cacheNext.value;
	                }

	                out[key] = value;
	                return;
	            }

	            _copyCache(cacheNext, outNext, key);
	        });
	}


/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var unicodePrefix = __webpack_require__(375);

	/**
	 * Determined if the key passed in is an internal key.
	 *
	 * @param {String} x The key
	 * @private
	 * @returns {Boolean}
	 */
	module.exports = function isInternalKey(x) {
	    return x === "$size" ||
	        x === "$modelCreated" ||
	        x.charAt(0) === unicodePrefix;
	};


/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	var get = __webpack_require__(447);
	var walkPath = __webpack_require__(450);

	var getWithPathsAsPathMap = get(walkPath, false);
	var getWithPathsAsJSONGraph = get(walkPath, true);

	module.exports = {
	    getValueSync: __webpack_require__(416),
	    getBoundValue: __webpack_require__(415),
	    getWithPathsAsPathMap: getWithPathsAsPathMap,
	    getWithPathsAsJSONGraph: getWithPathsAsJSONGraph
	};


/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	var getCachePosition = __webpack_require__(448);
	var InvalidModelError = __webpack_require__(422);
	var BoundJSONGraphModelError = __webpack_require__(449);

	module.exports = function get(walk, isJSONG) {
	    return function innerGet(model, paths, seed) {
	        var valueNode = seed[0];
	        var results = {
	            values: seed,
	            optimizedPaths: []
	        };
	        var cache = model._root.cache;
	        var boundPath = model._path;
	        var currentCachePosition = cache;
	        var optimizedPath, optimizedLength = boundPath.length;
	        var i, len;
	        var requestedPath = [];
	        var derefInfo = [];
	        var referenceContainer;

	        // If the model is bound, then get that cache position.
	        if (optimizedLength) {

	            // JSONGraph output cannot ever be bound or else it will
	            // throw an error.
	            if (isJSONG) {
	                return {
	                    criticalError: new BoundJSONGraphModelError()
	                };
	            }
	            currentCachePosition = getCachePosition(model, boundPath);

	            // If there was a short, then we 'throw an error' to the outside
	            // calling function which will onError the observer.
	            if (currentCachePosition.$type) {
	                return {
	                    criticalError: new InvalidModelError(boundPath, boundPath)
	                };
	            }

	            // We need to get the new cache position and copy the bound
	            // path.
	            optimizedPath = [];
	            for (i = 0; i < optimizedLength; ++i) {
	                optimizedPath[i] = boundPath[i];
	            }
	            referenceContainer = model._referenceContainer;
	        }

	        // Update the optimized path if we
	        else {
	            optimizedPath = [];
	            optimizedLength = 0;
	        }

	        for (i = 0, len = paths.length; i < len; i++) {
	            walk(model, cache, currentCachePosition, paths[i], 0,
	                 valueNode, results, derefInfo, requestedPath, optimizedPath,
	                 optimizedLength, isJSONG, false, referenceContainer);
	        }

	        return results;
	    };
	};


/***/ },
/* 448 */
/***/ function(module, exports) {

	/**
	 * getCachePosition makes a fast walk to the bound value since all bound
	 * paths are the most possible optimized path.
	 *
	 * @param {Model} model -
	 * @param {Array} path -
	 * @returns {Mixed} - undefined if there is nothing in this position.
	 * @private
	 */
	module.exports = function getCachePosition(model, path) {
	    var currentCachePosition = model._root.cache;
	    var depth = -1;
	    var maxDepth = path.length;

	    // The loop is simple now, we follow the current cache position until
	    //
	    while (++depth < maxDepth &&
	           currentCachePosition && !currentCachePosition.$type) {

	        currentCachePosition = currentCachePosition[path[depth]];
	    }

	    return currentCachePosition;
	};


/***/ },
/* 449 */
/***/ function(module, exports) {

	/**
	 * When a bound model attempts to retrieve JSONGraph it should throw an
	 * error.
	 *
	 * @private
	 */
	function BoundJSONGraphModelError() {
	    this.message = BoundJSONGraphModelError.message;
	    this.stack = (new Error()).stack;
	}

	// instanceof will be an error, but stack will be correct because its defined in the constructor.
	BoundJSONGraphModelError.prototype = new Error();
	BoundJSONGraphModelError.prototype.name = "BoundJSONGraphModelError";
	BoundJSONGraphModelError.message =
	    "It is not legal to use the JSON Graph " +
	    "format from a bound Model. JSON Graph format" +
	    " can only be used from a root model.";

	module.exports = BoundJSONGraphModelError;


/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var followReference = __webpack_require__(417);
	var onValueType = __webpack_require__(451);
	var onValue = __webpack_require__(418);
	var isExpired = __webpack_require__(421);
	var iterateKeySet = __webpack_require__(384).iterateKeySet;
	var $ref = __webpack_require__(376);
	var NullInPathError = __webpack_require__(413);
	var promote = __webpack_require__(419);

	module.exports = function walkPath(model, root, curr, path, depth, seed,
	                                   outerResults, branchInfo, requestedPath,
	                                   optimizedPathArg, optimizedLength, isJSONG,
	                                   fromReferenceArg, referenceContainerArg) {

	    var fromReference = fromReferenceArg;
	    var optimizedPath = optimizedPathArg;
	    var referenceContainer = referenceContainerArg;

	    // If there is not a value in the current cache position or its a
	    // value type, then we are at the end of the getWalk.
	    if ((!curr || curr && curr.$type) || depth === path.length) {
	        onValueType(model, curr, path, depth, seed, outerResults, branchInfo,
	                requestedPath, optimizedPath, optimizedLength,
	                isJSONG, fromReference);
	        return;
	    }

	    var keySet, i;
	    keySet = path[depth];

	    var isKeySet = typeof keySet === "object";
	    var nextDepth = depth + 1;
	    var iteratorNote = false;
	    var key = keySet;
	    var allowFromWhenceYouCame = model._allowFromWhenceYouCame;

	    if (isKeySet) {
	        iteratorNote = {};
	        key = iterateKeySet(keySet, iteratorNote);
	    }

	    // The key can be undefined if there is an empty path.  An example of an
	    // empty path is: [lolomo, [], summary].
	    if (key === undefined && iteratorNote.done) {
	        return;
	    }

	    // loop over every key over the keySet
	    var optimizedLengthPlus1 = optimizedLength + 1;
	    var refPath;
	    do {
	        fromReference = false;

	        var next;

	        // There are two cases when it comes to a null key.  In path vs at the
	        // end of a path.
	        if (key === null) {
	            // If the key is null and we are not at the end of a path, then
	            // throw an error.
	            if (depth < path.length) {
	                throw new NullInPathError();
	            }

	            // Else, we are at the end of a path, then just say next is current.
	            else {
	                next = curr;
	            }
	        }

	        // The standard case, do the depth search into the cache.
	        else {
	            next = curr[key];
	            optimizedPath[optimizedLength] = key;
	            requestedPath[depth] = key;
	        }

	        var nextOptimizedPath = optimizedPath;
	        var nextOptimizedLength = optimizedLengthPlus1;

	        // If there is the next position we need to consider references.
	        if (next) {
	            var nType = next.$type;
	            var value = nType && next.value || next;

	            // If next is a reference follow it.  If we are in JSONG mode,
	            // report that value into the seed without passing the requested
	            // path.  If a requested path is passed to onValueType then it
	            // will add that path to the JSONGraph envelope under `paths`
	            if (nextDepth < path.length && nType &&
	                nType === $ref && !isExpired(next)) {

	                // promote the node so that the references don't get cleaned up.
	                promote(model._root, next);

	                if (isJSONG) {
	                    onValue(model, next, seed, nextDepth, outerResults, null,
	                            null, optimizedPath, nextOptimizedLength, isJSONG);
	                }

	                var ref = followReference(model, root, root, next,
	                                          value, seed, isJSONG);
	                fromReference = true;
	                next = ref[0];
	                refPath = ref[1];
	                referenceContainer = ref[2];
	                nextOptimizedPath = [];
	                nextOptimizedLength = refPath.length;
	                for (i = 0; i < nextOptimizedLength; ++i) {
	                    nextOptimizedPath[i] = refPath[i];
	                }
	            }

	            // The next can be set to undefined by following a reference that
	            // does not exist.
	            if (next) {
	                var obj;

	                // There was a reference container.
	                if (referenceContainer && allowFromWhenceYouCame) {
	                    obj = {
	                        $__path: next.ツabsolutePath,
	                        $__refPath: referenceContainer.value,
	                        $__toReference: referenceContainer.ツabsolutePath
	                    };
	                }

	                // There is no reference container meaning this request was
	                // neither from a model and/or the first n (depth) keys do not
	                // contain references.
	                else {
	                    obj = {
	                        $__path: next.ツabsolutePath
	                    };
	                }

	                branchInfo[depth] = obj;
	            }
	        }

	        // Recurse to the next level.
	        walkPath(model, root, next, path, nextDepth, seed, outerResults,
	                 branchInfo, requestedPath, nextOptimizedPath,
	                 nextOptimizedLength, isJSONG,
	                 fromReference, referenceContainer);

	        // If the iteratorNote is not done, get the next key.
	        if (iteratorNote && !iteratorNote.done) {
	            key = iterateKeySet(keySet, iteratorNote);
	        }

	    } while (iteratorNote && !iteratorNote.done);
	};


/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var isExpired = __webpack_require__(421);
	var $error = __webpack_require__(395);
	var onError = __webpack_require__(452);
	var onValue = __webpack_require__(418);
	var onMissing = __webpack_require__(453);
	var isMaterialized = __webpack_require__(455);
	var expireNode = __webpack_require__(382);

	/**
	 * When we land on a valueType (or nothing) then we need to report it out to
	 * the outerResults through errors, missing, or values.
	 *
	 * @private
	 */
	module.exports = function onValueType(
	    model, node, path, depth, seed, outerResults, branchInfo,
	    requestedPath, optimizedPath, optimizedLength, isJSONG, fromReference) {

	    var currType = node && node.$type;
	    var requiresMaterializedToReport = node && node.value === undefined;

	    // There are is nothing here, ether report value, or report the value
	    // that is missing.  If there is no type then report the missing value.
	    if (!node || !currType) {
	        if (isMaterialized(model)) {
	            onValue(model, node, seed, depth, outerResults, branchInfo,
	                    requestedPath, optimizedPath, optimizedLength,
	                    isJSONG);
	        } else {
	            onMissing(model, path, depth,
	                      outerResults, requestedPath,
	                      optimizedPath, optimizedLength);
	        }
	        return;
	    }

	    // If there are expired value, then report it as missing
	    else if (isExpired(node)) {
	        if (!node.ツinvalidated) {
	            expireNode(node, model._root.expired, model._root);
	        }
	        onMissing(model, path, depth,
	                  outerResults, requestedPath,
	                  optimizedPath, optimizedLength);
	    }

	    // If there is an error, then report it as a value if
	    else if (currType === $error) {
	        if (fromReference) {
	            requestedPath[depth] = null;
	        }
	        if (isJSONG || model._treatErrorsAsValues) {
	            onValue(model, node, seed, depth, outerResults, branchInfo,
	                    requestedPath, optimizedPath, optimizedLength,
	                    isJSONG);
	        } else {
	            onError(model, node, depth, requestedPath, outerResults);
	        }
	    }

	    // Report the value
	    else {
	        if (fromReference) {
	            requestedPath[depth] = null;
	        }

	        if (!requiresMaterializedToReport ||
	            requiresMaterializedToReport && model._materialized) {

	            onValue(model, node, seed, depth, outerResults, branchInfo,
	                    requestedPath, optimizedPath, optimizedLength, isJSONG);
	        }
	    }
	};



/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var promote = __webpack_require__(419);
	var clone = __webpack_require__(420);

	module.exports = function onError(model, node, depth,
	                                  requestedPath, outerResults) {
	    var value = node.value;
	    if (!outerResults.errors) {
	        outerResults.errors = [];
	    }

	    if (model._boxed) {
	        value = clone(node);
	    }
	    outerResults.errors.push({
	        path: requestedPath.slice(0, depth + 1),
	        value: value
	    });
	    promote(model._root, node);
	};


/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var support = __webpack_require__(454);
	var fastCopy = support.fastCopy;

	module.exports = function onMissing(model, path, depth,
	                                    outerResults, requestedPath,
	                                    optimizedPath, optimizedLength) {
	    var pathSlice;
	    if (!outerResults.requestedMissingPaths) {
	        outerResults.requestedMissingPaths = [];
	        outerResults.optimizedMissingPaths = [];
	    }

	    if (depth < path.length) {
	        pathSlice = fastCopy(path, depth);
	    } else {
	        pathSlice = [];
	    }

	    concatAndInsertMissing(model, pathSlice, depth, requestedPath,
	                           optimizedPath, optimizedLength, outerResults);
	};

	function concatAndInsertMissing(model, remainingPath, depth, requestedPath,
	                                optimizedPath, optimizedLength, results) {

	    // TODO: Performance.
	    results.requestedMissingPaths.push(
	        requestedPath.
	            slice(0, depth).
	            concat(remainingPath));

	    results.optimizedMissingPaths.push(
	        optimizedPath.slice(0, optimizedLength).concat(remainingPath));
	}


/***/ },
/* 454 */
/***/ function(module, exports) {

	function fastCopy(arr, iArg) {
	    var a = [], len, j, i;
	    for (j = 0, i = iArg || 0, len = arr.length; i < len; j++, i++) {
	        a[j] = arr[i];
	    }
	    return a;
	}


	function fastCat(arr1, arr2) {
	    var a = [], i, len, j;
	    for (i = 0, len = arr1.length; i < len; i++) {
	        a[i] = arr1[i];
	    }
	    for (j = 0, len = arr2.length; j < len; j++) {
	        a[i++] = arr2[j];
	    }
	    return a;
	}



	module.exports = {
	    fastCat: fastCat,
	    fastCopy: fastCopy
	};


/***/ },
/* 455 */
/***/ function(module, exports) {

	module.exports = function isMaterialized(model) {
	    return model._materialized && !model._source;
	};


/***/ },
/* 456 */
/***/ function(module, exports) {

	module.exports = {
	    path: true,
	    pathSyntax: true
	};


/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var pathSyntax = __webpack_require__(335);
	var ModelResponse = __webpack_require__(430);
	var GET_VALID_INPUT = __webpack_require__(456);
	var validateInput = __webpack_require__(443);
	var GetResponse = __webpack_require__(458);

	/**
	 * Performs a get on the cache and if there are missing paths
	 * then the request will be forwarded to the get request cycle.
	 * @private
	 */
	module.exports = function get() {
	    // Validates the input.  If the input is not pathSets or strings then we
	    // will onError.
	    var out = validateInput(arguments, GET_VALID_INPUT, "get");
	    if (out !== true) {
	        return new ModelResponse(function(o) {
	            o.onError(out);
	        });
	    }

	    var paths = pathSyntax.fromPathsOrPathValues(arguments);
	    return new GetResponse(this, paths);
	};


/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var ModelResponse = __webpack_require__(430);
	var checkCacheAndReport = __webpack_require__(459);
	var getRequestCycle = __webpack_require__(460);
	var empty = {dispose: function() {}};
	var collectLru = __webpack_require__(439);
	var getSize = __webpack_require__(396);

	/**
	 * The get response.  It takes in a model and paths and starts
	 * the request cycle.  It has been optimized for cache first requests
	 * and closures.
	 * @param {Model} model -
	 * @param {Array} paths -
	 * @augments ModelResponse
	 * @private
	 */
	var GetResponse = module.exports = function GetResponse(model, paths,
	                                                        isJSONGraph,
	                                                        isProgressive,
	                                                        forceCollect) {
	    this.model = model;
	    this.currentRemainingPaths = paths;
	    this.isJSONGraph = isJSONGraph || false;
	    this.isProgressive = isProgressive || false;
	    this.forceCollect = forceCollect || false;
	};

	GetResponse.prototype = Object.create(ModelResponse.prototype);

	/**
	 * Makes the output of a get response JSONGraph instead of json.
	 * @private
	 */
	GetResponse.prototype._toJSONG = function _toJSONGraph() {
	    return new GetResponse(this.model, this.currentRemainingPaths,
	                           true, this.isProgressive, this.forceCollect);
	};

	/**
	 * Progressively responding to data in the cache instead of once the whole
	 * operation is complete.
	 * @public
	 */
	GetResponse.prototype.progressively = function progressively() {
	    return new GetResponse(this.model, this.currentRemainingPaths,
	                           this.isJSONGraph, true, this.forceCollect);
	};

	/**
	 * purely for the purposes of closure creation other than the initial
	 * prototype created closure.
	 *
	 * @private
	 */
	GetResponse.prototype._subscribe = function _subscribe(observer) {
	    var seed = [{}];
	    var errors = [];
	    var model = this.model;
	    var isJSONG = observer.isJSONG = this.isJSONGraph;
	    var isProgressive = this.isProgressive;
	    var results = checkCacheAndReport(model, this.currentRemainingPaths,
	                                      observer, isProgressive, isJSONG, seed,
	                                      errors);

	    // If there are no results, finish.
	    if (!results) {
	        if (this.forceCollect) {
	            var modelRoot = model._root;
	            var modelCache = modelRoot.cache;
	            var currentVersion = modelCache.ツversion;

	            collectLru(modelRoot, modelRoot.expired, getSize(modelCache),
	                    model._maxSize, model._collectRatio, currentVersion);
	        }
	        return empty;
	    }

	    // Starts the async request cycle.
	    return getRequestCycle(this, model, results,
	                           observer, seed, errors, 1);
	};


/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var gets = __webpack_require__(446);
	var getWithPathsAsJSONGraph = gets.getWithPathsAsJSONGraph;
	var getWithPathsAsPathMap = gets.getWithPathsAsPathMap;

	/**
	 * Checks cache for the paths and reports if in progressive mode.  If
	 * there are missing paths then return the cache hit results.
	 *
	 * @param {Model} model - The model that the request was made with.
	 * @param {Array} requestedMissingPaths -
	 * @param {Boolean} progressive -
	 * @param {Boolean} isJSONG -
	 * @param {Function} onNext -
	 * @param {Function} onError -
	 * @param {Function} onCompleted -
	 * @param {Object} seed - The state of the output
	 * @private
	 */
	module.exports = function checkCacheAndReport(model, requestedPaths, observer,
	                                              progressive, isJSONG, seed,
	                                              errors) {

	    // checks the cache for the data.
	    var results;
	    if (isJSONG) {
	        results = getWithPathsAsJSONGraph(model, requestedPaths, seed);
	    } else {
	        results = getWithPathsAsPathMap(model, requestedPaths, seed);
	    }

	    // We must communicate critical errors from get that are critical
	    // errors such as bound path is broken or this is a JSONGraph request
	    // with a bound path.
	    if (results.criticalError) {
	        observer.onError(results.criticalError);
	        return null;
	    }

	    // We are done when there are no missing paths or the model does not
	    // have a dataSource to continue on fetching from.
	    var hasValues = results.hasValue;
	    var completed = !results.requestedMissingPaths || !model._source;
	    var hasValueOverall = Boolean(seed[0].json || seed[0].jsonGraph);

	    // Copy the errors into the total errors array.
	    if (results.errors) {
	        var errs = results.errors;
	        var errorsLength = errors.length;
	        for (var i = 0, len = errs.length; i < len; ++i, ++errorsLength) {
	            errors[errorsLength] = errs[i];
	        }
	    }

	    // If there are values to report, then report.
	    // Which are under two conditions:
	    // 1.  This request for data yielded at least one value (hasValue) and  the
	    // request is progressive
	    //
	    // 2.  The request if finished and the json key off
	    // the seed has a value.
	    if (hasValues && progressive || hasValueOverall && completed) {
	        try {
	            observer.onNext(seed[0]);
	        } catch(e) {
	            throw e;
	        }
	    }

	    // if there are missing paths, then lets return them.
	    if (completed) {
	        if (errors.length) {
	            observer.onError(errors);
	        } else {
	            observer.onCompleted();
	        }

	        return null;
	    }

	    // Return the results object.
	    return results;
	};


/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var checkCacheAndReport = __webpack_require__(459);
	var MaxRetryExceededError = __webpack_require__(461);
	var fastCat = __webpack_require__(454).fastCat;
	var collectLru = __webpack_require__(439);
	var getSize = __webpack_require__(396);
	var AssignableDisposable = __webpack_require__(462);
	var InvalidSourceError = __webpack_require__(425);

	/**
	 * The get request cycle for checking the cache and reporting
	 * values.  If there are missing paths then the async request cycle to
	 * the data source is performed until all paths are resolved or max
	 * requests are made.
	 * @param {GetResponse} getResponse -
	 * @param {Model} model - The model that the request was made with.
	 * @param {Object} results -
	 * @param {Function} onNext -
	 * @param {Function} onError -
	 * @param {Function} onCompleted -
	 * @param {Object} seedArg - The state of the output
	 * @private
	 */
	module.exports = function getRequestCycle(getResponse, model, results, observer,
	                                          seed, errors, count) {
	    // we have exceeded the maximum retry limit.
	    if (count === 10) {
	        throw new MaxRetryExceededError();
	    }

	    var requestQueue = model._request;
	    var requestedMissingPaths = results.requestedMissingPaths;
	    var optimizedMissingPaths = results.optimizedMissingPaths;
	    var disposable = new AssignableDisposable();

	    // We need to prepend the bound path to all requested missing paths and
	    // pass those into the requestQueue.
	    var boundRequestedMissingPaths = [];
	    var boundPath = model._path;
	    if (boundPath.length) {
	        for (var i = 0, len = requestedMissingPaths.length; i < len; ++i) {
	            boundRequestedMissingPaths[i] =
	                fastCat(boundPath, requestedMissingPaths[i]);
	        }
	    }

	    // No bound path, no array copy and concat.
	    else {
	        boundRequestedMissingPaths = requestedMissingPaths;
	    }

	    var currentRequestDisposable = requestQueue.
	        get(boundRequestedMissingPaths, optimizedMissingPaths, function(err) {

	            if (err instanceof InvalidSourceError) {
	                observer.onError(err);
	                return;
	            }

	            // Once the request queue finishes, check the cache and bail if
	            // we can.
	            var nextResults = checkCacheAndReport(model, requestedMissingPaths,
	                                                  observer,
	                                                  getResponse.isProgressive,
	                                                  getResponse.isJSONGraph,
	                                                  seed, errors);

	            // If there are missing paths coming back form checkCacheAndReport
	            // the its reported from the core cache check method.
	            if (nextResults) {

	                // update the which disposable to use.
	                disposable.currentDisposable =
	                    getRequestCycle(getResponse, model, nextResults, observer,
	                                    seed, errors, count + 1);
	            }

	            // We have finished.  Since we went to the dataSource, we must
	            // collect on the cache.
	            else {

	                var modelRoot = model._root;
	                var modelCache = modelRoot.cache;
	                var currentVersion = modelCache.ツversion;

	                collectLru(modelRoot, modelRoot.expired, getSize(modelCache),
	                        model._maxSize, model._collectRatio, currentVersion);
	            }

	        });
	    disposable.currentDisposable = currentRequestDisposable;
	    return disposable;
	};


/***/ },
/* 461 */
/***/ function(module, exports) {

	var NAME = "MaxRetryExceededError";
	/**
	 * A request can only be retried up to a specified limit.  Once that
	 * limit is exceeded, then an error will be thrown.
	 *
	 * @private
	 */
	function MaxRetryExceededError() {
	    this.message = "The allowed number of retries have been exceeded.";
	    this.stack = (new Error()).stack;
	}

	// instanceof will be an error, but stack will be correct because its defined
	// in the constructor.
	MaxRetryExceededError.prototype = new Error();
	MaxRetryExceededError.prototype.name = NAME;
	MaxRetryExceededError.is = function(e) {
	    return e && e.name === NAME;
	};

	module.exports = MaxRetryExceededError;


/***/ },
/* 462 */
/***/ function(module, exports) {

	/**
	 * Will allow for state tracking of the current disposable.  Also fulfills the
	 * disposable interface.
	 * @private
	 */
	var AssignableDisposable = function AssignableDisposable(disosableCallback) {
	    this.disposed = false;
	    this.currentDisposable = disosableCallback;
	};


	AssignableDisposable.prototype = {

	    /**
	     * Disposes of the current disposable.  This would be the getRequestCycle
	     * disposable.
	     */
	    dispose: function dispose() {
	        if (this.disposed || !this.currentDisposable) {
	            return;
	        }
	        this.disposed = true;

	        // If the current disposable fulfills the disposable interface or just
	        // a disposable function.
	        var currentDisposable = this.currentDisposable;
	        if (currentDisposable.dispose) {
	            currentDisposable.dispose();
	        }

	        else {
	            currentDisposable();
	        }
	    }
	};


	module.exports = AssignableDisposable;


/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var GetResponse = __webpack_require__(458);

	/**
	 * Performs a get on the cache and if there are missing paths
	 * then the request will be forwarded to the get request cycle.
	 * @private
	 */
	module.exports = function getWithPaths(paths) {
	    return new GetResponse(this, paths);
	};


/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var setValidInput = __webpack_require__(465);
	var validateInput = __webpack_require__(443);
	var SetResponse = __webpack_require__(466);
	var ModelResponse = __webpack_require__(430);

	module.exports = function set() {
	    var out = validateInput(arguments, setValidInput, "set");
	    if (out !== true) {
	        return new ModelResponse(function(o) {
	            o.onError(out);
	        });
	    }

	    var argsIdx = -1;
	    var argsLen = arguments.length;
	    var args = [];
	    while (++argsIdx < argsLen) {
	        args[argsIdx] = arguments[argsIdx];
	    }
	    return new SetResponse(this, args);
	};


/***/ },
/* 465 */
/***/ function(module, exports) {

	module.exports = {
	    pathValue: true,
	    pathSyntax: true,
	    json: true,
	    jsonGraph: true
	};



/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var ModelResponse = __webpack_require__(430);
	var pathSyntax = __webpack_require__(335);
	var isArray = Array.isArray;
	var isPathValue = __webpack_require__(434);
	var isJSONGraphEnvelope = __webpack_require__(440);
	var isJSONEnvelope = __webpack_require__(435);
	var setRequestCycle = __webpack_require__(467);

	/**
	 *  The set response is responsible for doing the request loop for the set
	 * operation and subscribing to the follow up get.
	 *
	 * The constructors job is to parse out the arguments and put them in their
	 * groups.  The following subscribe will do the actual cache set and dataSource
	 * operation remoting.
	 *
	 * @param {Model} model -
	 * @param {Array} args - The array of arguments that can be JSONGraph, JSON, or
	 * pathValues.
	 * @param {Boolean} isJSONGraph - if the request is a jsonGraph output format.
	 * @param {Boolean} isProgressive - progressive output.
	 * @augments ModelResponse
	 * @private
	 */
	var SetResponse = module.exports = function SetResponse(model, args,
	                                                        isJSONGraph,
	                                                        isProgressive) {

	    // The response properties.
	    this._model = model;
	    this._isJSONGraph = isJSONGraph || false;
	    this._isProgressive = isProgressive || false;
	    this._initialArgs = args;
	    this._value = [{}];

	    var groups = [];
	    var group, groupType;
	    var argIndex = -1;
	    var argCount = args.length;

	    // Validation of arguments have been moved out of this function.
	    while (++argIndex < argCount) {
	        var arg = args[argIndex];
	        var argType;
	        if (isArray(arg) || typeof arg === "string") {
	            arg = pathSyntax.fromPath(arg);
	            argType = "PathValues";
	        } else if (isPathValue(arg)) {
	            arg.path = pathSyntax.fromPath(arg.path);
	            argType = "PathValues";
	        } else if (isJSONGraphEnvelope(arg)) {
	            argType = "JSONGs";
	        } else if (isJSONEnvelope(arg)) {
	            argType = "PathMaps";
	        }

	        if (groupType !== argType) {
	            groupType = argType;
	            group = {
	                inputType: argType,
	                arguments: []
	            };
	            groups.push(group);
	        }

	        group.arguments.push(arg);
	    }

	    this._groups = groups;
	};

	SetResponse.prototype = Object.create(ModelResponse.prototype);

	/**
	 * The subscribe function will setup the remoting of the operation and cache
	 * setting.
	 *
	 * @private
	 */
	SetResponse.prototype._subscribe = function _subscribe(observer) {
	    var groups = this._groups;
	    var model = this._model;
	    var isJSONGraph = this._isJSONGraph;
	    var isProgressive = this._isProgressive;

	    // Starts the async request cycle.
	    return setRequestCycle(
	        model, observer, groups, isJSONGraph, isProgressive, 0);
	};

	/**
	 * Makes the output of a get response JSONGraph instead of json.
	 * @private
	 */
	SetResponse.prototype._toJSONG = function _toJSONGraph() {
	    return new SetResponse(this._model, this._initialArgs,
	                           true, this._isProgressive);
	};

	/**
	 * Progressively responding to data in the cache instead of once the whole
	 * operation is complete.
	 * @public
	 */
	SetResponse.prototype.progressively = function progressively() {
	    return new SetResponse(this._model, this._initialArgs,
	                           this._isJSONGraph, true);
	};


/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var emptyArray = [];
	var AssignableDisposable = __webpack_require__(462);
	var GetResponse = __webpack_require__(458);
	var setGroupsIntoCache = __webpack_require__(468);
	var getWithPathsAsPathMap = __webpack_require__(446).getWithPathsAsPathMap;
	var InvalidSourceError = __webpack_require__(425);
	var MaxRetryExceededError = __webpack_require__(461);

	/**
	 * The request cycle for set.  This is responsible for requesting to dataSource
	 * and allowing disposing inflight requests.
	 */
	module.exports = function setRequestCycle(model, observer, groups,
	                                          isJSONGraph, isProgressive, count) {
	    // we have exceeded the maximum retry limit.
	    if (count === 10) {
	        throw new MaxRetryExceededError();
	    }

	    var requestedAndOptimizedPaths = setGroupsIntoCache(model, groups);
	    var optimizedPaths = requestedAndOptimizedPaths.optimizedPaths;
	    var requestedPaths = requestedAndOptimizedPaths.requestedPaths;
	    var isMaster = model._source === undefined;

	    // Local set only.  We perform a follow up get.  If performance is ever
	    // a requirement simply requiring in checkCacheAndReport and use get request
	    // internals.  Figured this is more "pure".
	    if (isMaster) {
	        return subscribeToFollowupGet(model, observer, requestedPaths,
	                              isJSONGraph, isProgressive);
	    }


	    // Progressively output the data from the first set.
	    if (isProgressive) {
	        var json = {};
	        getWithPathsAsPathMap(model, requestedPaths, [json]);
	        observer.onNext(json);
	    }

	    var currentJSONGraph = getJSONGraph(model, optimizedPaths);
	    var disposable = new AssignableDisposable();

	    // Sends out the setRequest.  The Queue will call the callback with the
	    // JSONGraph envelope / error.
	    var requestDisposable = model._request.
	        // TODO: There is error handling that has not been addressed yet.

	        // If disposed before this point then the sendSetRequest will not
	        // further any callbacks.  Therefore, if we are at this spot, we are
	        // not disposed yet.
	        set(currentJSONGraph, function(error, jsonGraphEnv) {
	            if (typeof error === InvalidSourceError) {
	                return observer.onError(error);
	            }

	            // TODO: This seems like there are errors with this approach, but
	            // for sanity sake I am going to keep this logic in here until a
	            // rethink can be done.
	            var isCompleted = false;
	            if (error || optimizedPaths.length === jsonGraphEnv.paths.length) {
	                isCompleted = true;
	            }

	            // Happy case.  One request to the dataSource will fulfill the
	            // required paths.
	            if (isCompleted) {
	                disposable.currentDisposable =
	                    subscribeToFollowupGet(model, observer, requestedPaths,
	                                          isJSONGraph, isProgressive);
	            }

	            // TODO: The unhappy case.  I am unsure how this can even be
	            // achieved.
	            else {
	                // We need to restart the setRequestCycle.
	                setRequestCycle(model, observer, groups, isJSONGraph,
	                                isProgressive, count + 1);
	            }
	        });

	    // Sets the current disposable as the requestDisposable.
	    disposable.currentDisposable = requestDisposable;

	    return disposable;
	};

	function getJSONGraph(model, optimizedPaths) {
	    var boundPath = model._path;
	    var envelope = {};
	    model._path = emptyArray;
	    model._getPathValuesAsJSONG(model._materialize().withoutDataSource(), optimizedPaths, [envelope]);
	    model._path = boundPath;

	    return envelope;
	}

	function subscribeToFollowupGet(model, observer, requestedPaths, isJSONGraph,
	                               isProgressive) {

	    // Creates a new response and subscribes to it with the original observer.
	    // Also sets forceCollect to true, incase the operation is synchronous and
	    // exceeds the cache limit size
	    var response = new GetResponse(model, requestedPaths, isJSONGraph,
	                                   isProgressive, true);
	    return response.subscribe(observer);
	}


/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFlatMap = __webpack_require__(469);

	/**
	 * Takes the groups that are created in the SetResponse constructor and sets
	 * them into the cache.
	 */
	module.exports = function setGroupsIntoCache(model, groups) {
	    var modelRoot = model._root;
	    var errorSelector = modelRoot.errorSelector;
	    var groupIndex = -1;
	    var groupCount = groups.length;
	    var requestedPaths = [];
	    var optimizedPaths = [];
	    var returnValue = {
	        requestedPaths: requestedPaths,
	        optimizedPaths: optimizedPaths
	    };

	    // Takes each of the groups and normalizes their input into
	    // requested paths and optimized paths.
	    while (++groupIndex < groupCount) {

	        var group = groups[groupIndex];
	        var inputType = group.inputType;
	        var methodArgs = group.arguments;

	        if (methodArgs.length > 0) {
	            var operationName = "_set" + inputType;
	            var operationFunc = model[operationName];
	            var successfulPaths = operationFunc(model, methodArgs, null, errorSelector);

	            optimizedPaths.push.apply(optimizedPaths, successfulPaths[1]);

	            if (inputType === "PathValues") {
	                requestedPaths.push.apply(requestedPaths, methodArgs.map(pluckPath));
	            } else if (inputType === "JSONGs") {
	                requestedPaths.push.apply(requestedPaths, arrayFlatMap(methodArgs, pluckEnvelopePaths));
	            } else {
	                requestedPaths.push.apply(requestedPaths, successfulPaths[0]);
	            }
	        }
	    }

	    return returnValue;
	};

	function pluckPath(pathValue) {
	    return pathValue.path;
	}

	function pluckEnvelopePaths(jsonGraphEnvelope) {
	    return jsonGraphEnvelope.paths;
	}


/***/ },
/* 469 */
/***/ function(module, exports) {

	module.exports = function arrayFlatMap(array, selector) {
	    var index = -1;
	    var i = -1;
	    var n = array.length;
	    var array2 = [];
	    while (++i < n) {
	        var array3 = selector(array[i], i, array);
	        var j = -1;
	        var k = array3.length;
	        while (++j < k) {
	            array2[++index] = array3[j];
	        }
	    }
	    return array2;
	};


/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var InvalidDerefInputError = __webpack_require__(471);
	var getCachePosition = __webpack_require__(448);
	var CONTAINER_DOES_NOT_EXIST = "e";
	var $ref = __webpack_require__(376);

	module.exports = function deref(boundJSONArg) {

	    var absolutePath = boundJSONArg && boundJSONArg.$__path;
	    var refPath = boundJSONArg && boundJSONArg.$__refPath;
	    var toReference = boundJSONArg && boundJSONArg.$__toReference;
	    var referenceContainer;

	    // We deref and then ensure that the reference container is attached to
	    // the model.
	    if (absolutePath) {
	        var validContainer = CONTAINER_DOES_NOT_EXIST;

	        if (toReference) {
	            validContainer = false;
	            referenceContainer = getCachePosition(this, toReference);

	            // If the reference container is still a sentinel value then compare
	            // the reference value with refPath.  If they are the same, then the
	            // model is still valid.
	            if (refPath && referenceContainer &&
	                referenceContainer.$type === $ref) {

	                var containerPath = referenceContainer.value;
	                var i = 0;
	                var len = refPath.length;

	                validContainer = true;
	                for (; validContainer && i < len; ++i) {
	                    if (containerPath[i] !== refPath[i]) {
	                        validContainer = false;
	                    }
	                }
	            }
	        }

	        // Signal to the deref'd model that it has been disconnected from the
	        // graph or there is no _fromWhenceYouCame
	        if (!validContainer) {
	            referenceContainer = false;
	        }

	        // The container did not exist, therefore there is no reference
	        // container and fromWhenceYouCame should always return true.
	        else if (validContainer === CONTAINER_DOES_NOT_EXIST) {
	            referenceContainer = true;
	        }

	        return this._clone({
	            _path: absolutePath,
	            _referenceContainer: referenceContainer
	        });
	    }

	    throw new InvalidDerefInputError();
	};


/***/ },
/* 471 */
/***/ function(module, exports) {

	var NAME = "InvalidDerefInputError";
	var MESSAGE = "Deref can only be used with a non-primitive object from get, set, or call.";
	/**
	 * An invalid deref input is when deref is used with input that is not generated
	 * from a get, set, or a call.
	 *
	 * @param {String} message
	 * @private
	 */
	function InvalidDerefInputError() {
	    this.message = MESSAGE;
	    this.stack = (new Error()).stack;
	}

	// instanceof will be an error, but stack will be correct because its defined in the constructor.
	InvalidDerefInputError.prototype = new Error();
	InvalidDerefInputError.prototype.name = NAME;
	InvalidDerefInputError.name = NAME;
	InvalidDerefInputError.message = MESSAGE;

	module.exports = InvalidDerefInputError;


/***/ },
/* 472 */
/***/ function(module, exports) {

	module.exports = function fromWhenceYeCame() {
	    var reference = this._referenceContainer;

	    // Always true when this mode is false.
	    if (!this._allowFromWhenceYouCame) {
	        return true;
	    }

	    // If fromWhenceYouCame is true and the first set of keys did not have
	    // a reference, this case can happen.  They are always valid.
	    if (reference === true) {
	        return true;
	    }

	    // was invalid before even derefing.
	    if (reference === false) {
	        return false;
	    }

	    // Its been disconnected (set over or collected) from the graph.
	    if (reference && reference.ツparent === undefined) {
	        return false;
	    }

	    // The reference has expired but has not been collected from the graph.
	    if (reference && reference.ツinvalidated) {
	        return false;
	    }

	    return true;
	};


/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	var ModelResponse = __webpack_require__(430);
	var pathSyntax = __webpack_require__(335);

	module.exports = function getValue(path) {
	    var parsedPath = pathSyntax.fromPath(path);
	    var pathIdx = 0;
	    var pathLen = parsedPath.length;
	    while (++pathIdx < pathLen) {
	        if (typeof parsedPath[pathIdx] === "object") {
	            /* eslint-disable no-loop-func */
	            return new ModelResponse(function(o) {
	                o.onError(new Error("Paths must be simple paths"));
	            });
	            /* eslint-enable no-loop-func */
	        }
	    }

	    var self = this;
	    return new ModelResponse(function(obs) {
	        return self.get(parsedPath).subscribe(function(data) {
	            var curr = data.json;
	            var depth = -1;
	            var length = parsedPath.length;

	            while (curr && ++depth < length) {
	                curr = curr[parsedPath[depth]];
	            }
	            obs.onNext(curr);
	        }, function(err) {
	            obs.onError(err);
	        }, function() {
	            obs.onCompleted();
	        });
	    });
	};


/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	var jsong = __webpack_require__(442);
	var ModelResponse = __webpack_require__(430);
	var isPathValue = __webpack_require__(434);

	module.exports = function setValue(pathArg, valueArg) {
	    var value = isPathValue(pathArg) ? pathArg : jsong.pathValue(pathArg, valueArg);
	    var pathIdx = 0;
	    var path = value.path;
	    var pathLen = path.length;
	    while (++pathIdx < pathLen) {
	        if (typeof path[pathIdx] === "object") {
	            /* eslint-disable no-loop-func */
	            return new ModelResponse(function(o) {
	                o.onError(new Error("Paths must be simple paths"));
	            });
	            /* eslint-enable no-loop-func */
	        }
	    }
	    var self = this;
	    return new ModelResponse(function(obs) {
	        return self.set(value).subscribe(function(data) {
	            var curr = data.json;
	            var depth = -1;
	            var length = path.length;

	            while (curr && ++depth < length) {
	                curr = curr[path[depth]];
	            }
	            obs.onNext(curr);
	        }, function(err) {
	            obs.onError(err);
	        }, function() {
	            obs.onCompleted();
	        });
	    });
	};


/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	var pathSyntax = __webpack_require__(335);

	module.exports = function getValueSync(pathArg) {
	    var path = pathSyntax.fromPath(pathArg);
	    if (Array.isArray(path) === false) {
	        throw new Error("Model#getValueSync must be called with an Array path.");
	    }
	    if (this._path.length) {
	        path = this._path.concat(path);
	    }
	    return this._syncCheck("getValueSync") && this._getValueSync(this, path).value;
	};


/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	var pathSyntax = __webpack_require__(335);
	var isPathValue = __webpack_require__(434);
	var setPathValues = __webpack_require__(414);

	module.exports = function setValueSync(pathArg, valueArg, errorSelectorArg, comparatorArg) {

	    var path = pathSyntax.fromPath(pathArg);
	    var value = valueArg;
	    var errorSelector = errorSelectorArg;
	    var comparator = comparatorArg;

	    if (isPathValue(path)) {
	        comparator = errorSelector;
	        errorSelector = value;
	        value = path;
	    } else {
	        value = {
	            path: path,
	            value: value
	        };
	    }

	    if (isPathValue(value) === false) {
	        throw new Error("Model#setValueSync must be called with an Array path.");
	    }

	    if (typeof errorSelector !== "function") {
	        errorSelector = this._root._errorSelector;
	    }

	    if (typeof comparator !== "function") {
	        comparator = this._root._comparator;
	    }

	    if (this._syncCheck("setValueSync")) {
	        setPathValues(this, [value]);
	        return this._getValueSync(this, value.path).value;
	    }
	};


/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	var pathSyntax = __webpack_require__(335);
	var getBoundValue = __webpack_require__(415);
	var InvalidModelError = __webpack_require__(422);

	module.exports = function derefSync(boundPathArg) {

	    var boundPath = pathSyntax.fromPath(boundPathArg);

	    if (!Array.isArray(boundPath)) {
	        throw new Error("Model#derefSync must be called with an Array path.");
	    }

	    var boundValue = getBoundValue(this, this._path.concat(boundPath), false);

	    var path = boundValue.path;
	    var node = boundValue.value;
	    var found = boundValue.found;

	    // If the node is not found or the node is found but undefined is returned,
	    // this happens when a reference is expired.
	    if (!found || node === undefined) {
	        return undefined;
	    }

	    if (node.$type) {
	        throw new InvalidModelError();
	    }

	    return this._clone({ _path: path });
	};


/***/ },
/* 478 */
/***/ function(module, exports) {

	module.exports = function _getVersion(model, path) {
	    // ultra fast clone for boxed values.
	    var gen = model._getValueSync({
	        _boxed: true,
	        _root: model._root,
	        _treatErrorsAsValues: model._treatErrorsAsValues
	    }, path, true).value;
	    var version = gen && gen.ツversion;
	    return (version == null) ? -1 : version;
	};


/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	var __ref = __webpack_require__(374);

	var $ref = __webpack_require__(376);

	var getBoundValue = __webpack_require__(415);

	var promote = __webpack_require__(419);
	var getSize = __webpack_require__(396);
	var isExpired = __webpack_require__(398);
	var isFunction = __webpack_require__(363);
	var isPrimitive = __webpack_require__(381);
	var expireNode = __webpack_require__(382);
	var iterateKeySet = __webpack_require__(384).iterateKeySet;
	var incrementVersion = __webpack_require__(393);
	var updateNodeAncestors = __webpack_require__(410);
	var removeNodeAndDescendants = __webpack_require__(406);

	/**
	 * Invalidates a list of Paths in a JSON Graph.
	 * @function
	 * @param {Object} model - the Model for which to insert the PathValues.
	 * @param {Array.<PathValue>} paths - the PathValues to set.
	 */

	module.exports = function invalidatePathSets(model, paths) {

	    var modelRoot = model._root;
	    var lru = modelRoot;
	    var expired = modelRoot.expired;
	    var version = incrementVersion();
	    var bound = model._path;
	    var cache = modelRoot.cache;
	    var node = bound.length ? getBoundValue(model, bound).value : cache;
	    var parent = node.ツparent || cache;
	    var initialVersion = cache.ツversion;

	    var pathIndex = -1;
	    var pathCount = paths.length;

	    while (++pathIndex < pathCount) {

	        var path = paths[pathIndex];

	        invalidatePathSet(
	            path, 0, cache, parent, node,
	            version, expired, lru
	        );
	    }

	    var newVersion = cache.ツversion;
	    var rootChangeHandler = modelRoot.onChange;

	    if (isFunction(rootChangeHandler) && initialVersion !== newVersion) {
	        rootChangeHandler();
	    }
	};

	function invalidatePathSet(
	    path, depth, root, parent, node,
	    version, expired, lru) {

	    var note = {};
	    var branch = depth < path.length - 1;
	    var keySet = path[depth];
	    var key = iterateKeySet(keySet, note);

	    do {
	        var results = invalidateNode(
	            root, parent, node,
	            key, branch, false,
	            version, expired, lru
	        );
	        var nextNode = results[0];
	        var nextParent = results[1];
	        if (nextNode) {
	            if (branch) {
	                invalidatePathSet(
	                    path, depth + 1,
	                    root, nextParent, nextNode,
	                    version, expired, lru
	                );
	            } else if (removeNodeAndDescendants(nextNode, nextParent, key, lru)) {
	                updateNodeAncestors(nextParent, getSize(nextNode), lru, version);
	            }
	        }
	        key = iterateKeySet(keySet, note);
	    } while (!note.done);
	}

	function invalidateReference(root, node, version, expired, lru) {

	    if (isExpired(node)) {
	        expireNode(node, expired, lru);
	        return [undefined, root];
	    }

	    promote(lru, node);

	    var container = node;
	    var reference = node.value;
	    var parent = root;

	    node = node.ツcontext;

	    if (node != null) {
	        parent = node.ツparent || root;
	    } else {

	        var index = 0;
	        var count = reference.length - 1;

	        parent = node = root;

	        do {
	            var key = reference[index];
	            var branch = index < count;
	            var results = invalidateNode(
	                root, parent, node,
	                key, branch, true,
	                version, expired, lru
	            );
	            node = results[0];
	            if (isPrimitive(node)) {
	                return results;
	            }
	            parent = results[1];
	        } while (index++ < count);

	        if (container.ツcontext !== node) {
	            var backRefs = node.ツrefsLength || 0;
	            node.ツrefsLength = backRefs + 1;
	            node[__ref + backRefs] = container;
	            container.ツcontext = node;
	            container.ツrefIndex = backRefs;
	        }
	    }

	    return [node, parent];
	}

	function invalidateNode(
	    root, parent, node,
	    key, branch, reference,
	    version, expired, lru) {

	    var type = node.$type;

	    while (type === $ref) {

	        var results = invalidateReference(root, node, version, expired, lru);

	        node = results[0];

	        if (isPrimitive(node)) {
	            return results;
	        }

	        parent = results[1];
	        type = node.$type;
	    }

	    if (type !== void 0) {
	        return [node, parent];
	    }

	    if (key == null) {
	        if (branch) {
	            throw new Error("`null` is not allowed in branch key positions.");
	        } else if (node) {
	            key = node.ツkey;
	        }
	    } else {
	        parent = node;
	        node = parent[key];
	    }

	    return [node, parent];
	}


/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	var createHardlink = __webpack_require__(373);
	var __prefix = __webpack_require__(375);

	var $ref = __webpack_require__(376);

	var getBoundValue = __webpack_require__(415);

	var promote = __webpack_require__(419);
	var getSize = __webpack_require__(396);
	var hasOwn = __webpack_require__(364);
	var isObject = __webpack_require__(365);
	var isExpired = __webpack_require__(398);
	var isFunction = __webpack_require__(363);
	var isPrimitive = __webpack_require__(381);
	var expireNode = __webpack_require__(382);
	var incrementVersion = __webpack_require__(393);
	var updateNodeAncestors = __webpack_require__(410);
	var removeNodeAndDescendants = __webpack_require__(406);

	/**
	 * Sets a list of PathMaps into a JSON Graph.
	 * @function
	 * @param {Object} model - the Model for which to insert the PathMaps.
	 * @param {Array.<PathMapEnvelope>} pathMapEnvelopes - the a list of @PathMapEnvelopes to set.
	 */

	module.exports = function invalidatePathMaps(model, pathMapEnvelopes) {

	    var modelRoot = model._root;
	    var lru = modelRoot;
	    var expired = modelRoot.expired;
	    var version = incrementVersion();
	    var comparator = modelRoot._comparator;
	    var errorSelector = modelRoot._errorSelector;
	    var bound = model._path;
	    var cache = modelRoot.cache;
	    var node = bound.length ? getBoundValue(model, bound).value : cache;
	    var parent = node.ツparent || cache;
	    var initialVersion = cache.ツversion;

	    var pathMapIndex = -1;
	    var pathMapCount = pathMapEnvelopes.length;

	    while (++pathMapIndex < pathMapCount) {

	        var pathMapEnvelope = pathMapEnvelopes[pathMapIndex];

	        invalidatePathMap(
	            pathMapEnvelope.json, 0, cache, parent, node,
	            version, expired, lru, comparator, errorSelector
	        );
	    }

	    var newVersion = cache.ツversion;
	    var rootChangeHandler = modelRoot.onChange;

	    if (isFunction(rootChangeHandler) && initialVersion !== newVersion) {
	        rootChangeHandler();
	    }
	};

	function invalidatePathMap(pathMap, depth, root, parent, node, version, expired, lru, comparator, errorSelector) {

	    if (isPrimitive(pathMap) || pathMap.$type) {
	        return;
	    }

	    for (var key in pathMap) {
	        if (key[0] !== __prefix && key[0] !== "$" && hasOwn(pathMap, key)) {
	            var child = pathMap[key];
	            var branch = isObject(child) && !child.$type;
	            var results = invalidateNode(
	                root, parent, node,
	                key, child, branch, false,
	                version, expired, lru, comparator, errorSelector
	            );
	            var nextNode = results[0];
	            var nextParent = results[1];
	            if (nextNode) {
	                if (branch) {
	                    invalidatePathMap(
	                        child, depth + 1,
	                        root, nextParent, nextNode,
	                        version, expired, lru, comparator, errorSelector
	                    );
	                } else if (removeNodeAndDescendants(nextNode, nextParent, key, lru)) {
	                    updateNodeAncestors(nextParent, getSize(nextNode), lru, version);
	                }
	            }
	        }
	    }
	}

	function invalidateReference(value, root, node, version, expired, lru, comparator, errorSelector) {

	    if (isExpired(node)) {
	        expireNode(node, expired, lru);
	        return [undefined, root];
	    }

	    promote(lru, node);

	    var container = node;
	    var reference = node.value;
	    var parent = root;

	    node = node.ツcontext;

	    if (node != null) {
	        parent = node.ツparent || root;
	    } else {

	        var index = 0;
	        var count = reference.length - 1;

	        parent = node = root;

	        do {
	            var key = reference[index];
	            var branch = index < count;
	            var results = invalidateNode(
	                root, parent, node,
	                key, value, branch, true,
	                version, expired, lru, comparator, errorSelector
	            );
	            node = results[0];
	            if (isPrimitive(node)) {
	                return results;
	            }
	            parent = results[1];
	        } while (index++ < count);

	        if (container.ツcontext !== node) {
	            createHardlink(container, node);
	        }
	    }

	    return [node, parent];
	}

	function invalidateNode(
	    root, parent, node,
	    key, value, branch, reference,
	    version, expired, lru, comparator, errorSelector) {

	    var type = node.$type;

	    while (type === $ref) {

	        var results = invalidateReference(value, root, node, version, expired, lru, comparator, errorSelector);

	        node = results[0];

	        if (isPrimitive(node)) {
	            return results;
	        }

	        parent = results[1];
	        type = node && node.$type;
	    }

	    if (type !== void 0) {
	        return [node, parent];
	    }

	    if (key == null) {
	        if (branch) {
	            throw new Error("`null` is not allowed in branch key positions.");
	        } else if (node) {
	            key = node.ツkey;
	        }
	    } else {
	        parent = node;
	        node = parent[key];
	    }

	    return [node, parent];
	}


/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var request = __webpack_require__(482);
	var buildQueryObject = __webpack_require__(485);
	var isArray = Array.isArray;

	function simpleExtend(obj, obj2) {
	  var prop;
	  for (prop in obj2) {
	    obj[prop] = obj2[prop];
	  }
	  return obj;
	}

	function XMLHttpSource(jsongUrl, config) {
	  this._jsongUrl = jsongUrl;
	  if (typeof config === 'number') {
	    var newConfig = {
	      timeout: config
	    };
	    config = newConfig;
	  }
	  this._config = simpleExtend({
	    timeout: 15000,
	    headers: {}
	  }, config || {});
	}

	XMLHttpSource.prototype = {
	  // because javascript
	  constructor: XMLHttpSource,
	  /**
	   * buildQueryObject helper
	   */
	  buildQueryObject: buildQueryObject,

	  /**
	   * @inheritDoc DataSource#get
	   */
	  get: function httpSourceGet(pathSet) {
	    var method = 'GET';
	    var queryObject = this.buildQueryObject(this._jsongUrl, method, {
	      paths: pathSet,
	      method: 'get'
	    });
	    var config = simpleExtend(queryObject, this._config);
	    // pass context for onBeforeRequest callback
	    var context = this;
	    return request(method, config, context);
	  },

	  /**
	   * @inheritDoc DataSource#set
	   */
	  set: function httpSourceSet(jsongEnv) {
	    var method = 'POST';
	    var queryObject = this.buildQueryObject(this._jsongUrl, method, {
	      jsonGraph: jsongEnv,
	      method: 'set'
	    });
	    var config = simpleExtend(queryObject, this._config);
	    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
	    
	    // pass context for onBeforeRequest callback
	    var context = this;
	    return request(method, config, context);

	  },

	  /**
	   * @inheritDoc DataSource#call
	   */
	  call: function httpSourceCall(callPath, args, pathSuffix, paths) {
	    // arguments defaults
	    args = args || [];
	    pathSuffix = pathSuffix || [];
	    paths = paths || [];

	    var method = 'POST';
	    var queryData = [];
	    queryData.push('method=call');
	    queryData.push('callPath=' + encodeURIComponent(JSON.stringify(callPath)));
	    queryData.push('arguments=' + encodeURIComponent(JSON.stringify(args)));
	    queryData.push('pathSuffixes=' + encodeURIComponent(JSON.stringify(pathSuffix)));
	    queryData.push('paths=' + encodeURIComponent(JSON.stringify(paths)));

	    var queryObject = this.buildQueryObject(this._jsongUrl, method, queryData.join('&'));
	    var config = simpleExtend(queryObject, this._config);
	    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
	    
	    // pass context for onBeforeRequest callback
	    var context = this;
	    return request(method, config, context);
	  }
	};
	// ES6 modules
	XMLHttpSource.XMLHttpSource = XMLHttpSource;
	XMLHttpSource['default'] = XMLHttpSource;
	// commonjs
	module.exports = XMLHttpSource;


/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var getXMLHttpRequest = __webpack_require__(483);
	var getCORSRequest = __webpack_require__(484);
	var hasOwnProp = Object.prototype.hasOwnProperty;

	var noop = function() {};

	function Observable() {}

	Observable.create = function(subscribe) {
	  var o = new Observable();

	  o.subscribe = function(onNext, onError, onCompleted) {

	    var observer;
	    var disposable;

	    if (typeof onNext === 'function') {
	        observer = {
	            onNext: onNext,
	            onError: (onError || noop),
	            onCompleted: (onCompleted || noop)
	        };
	    } else {
	        observer = onNext;
	    }

	    disposable = subscribe(observer);

	    if (typeof disposable === 'function') {
	      return {
	        dispose: disposable
	      };
	    } else {
	      return disposable;
	    }
	  };

	  return o;
	};

	function request(method, options, context) {
	  return Observable.create(function requestObserver(observer) {

	    var config = {
	      method: method || 'GET',
	      crossDomain: false,
	      async: true,
	      headers: {},
	      responseType: 'json'
	    };

	    var xhr,
	      isDone,
	      headers,
	      header,
	      prop;

	    for (prop in options) {
	      if (hasOwnProp.call(options, prop)) {
	        config[prop] = options[prop];
	      }
	    }

	    // Add request with Headers
	    if (!config.crossDomain && !config.headers['X-Requested-With']) {
	      config.headers['X-Requested-With'] = 'XMLHttpRequest';
	    }

	    // allow the user to mutate the config open
	    if (context.onBeforeRequest != null) {
	      context.onBeforeRequest(config);
	    }

	    // create xhr
	    try {
	      xhr = config.crossDomain ? getCORSRequest() : getXMLHttpRequest();
	    } catch (err) {
	      observer.onError(err);
	    }
	    try {
	      // Takes the url and opens the connection
	      if (config.user) {
	        xhr.open(config.method, config.url, config.async, config.user, config.password);
	      } else {
	        xhr.open(config.method, config.url, config.async);
	      }

	      // Sets timeout information
	      xhr.timeout = config.timeout;

	      // Anything but explicit false results in true.
	      xhr.withCredentials = config.withCredentials !== false;

	      // Fills the request headers
	      headers = config.headers;
	      for (header in headers) {
	        if (hasOwnProp.call(headers, header)) {
	          xhr.setRequestHeader(header, headers[header]);
	        }
	      }

	      if (config.responseType) {
	        try {
	          xhr.responseType = config.responseType;
	        } catch (e) {
	          // WebKit added support for the json responseType value on 09/03/2013
	          // https://bugs.webkit.org/show_bug.cgi?id=73648. Versions of Safari prior to 7 are
	          // known to throw when setting the value "json" as the response type. Other older
	          // browsers implementing the responseType
	          //
	          // The json response type can be ignored if not supported, because JSON payloads are
	          // parsed on the client-side regardless.
	          if (config.responseType !== 'json') {
	            throw e;
	          }
	        }
	      }

	      xhr.onreadystatechange = function onreadystatechange(e) {
	        // Complete
	        if (xhr.readyState === 4) {
	          if (!isDone) {
	            isDone = true;
	            onXhrLoad(observer, xhr, e);
	          }
	        }
	      };

	      // Timeout
	      xhr.ontimeout = function ontimeout(e) {
	        if (!isDone) {
	          isDone = true;
	          onXhrError(observer, xhr, 'timeout error', e);
	        }
	      };

	      // Send Request
	      xhr.send(config.data);

	    } catch (e) {
	      observer.onError(e);
	    }
	    // Dispose
	    return function dispose() {
	      // Doesn't work in IE9
	      if (!isDone && xhr.readyState !== 4) {
	        isDone = true;
	        xhr.abort();
	      }
	    };//Dispose
	  });
	}

	/*
	 * General handling of ultimate failure (after appropriate retries)
	 */
	function _handleXhrError(observer, textStatus, errorThrown) {
	  // IE9: cross-domain request may be considered errors
	  if (!errorThrown) {
	    errorThrown = new Error(textStatus);
	  }

	  observer.onError(errorThrown);
	}

	function onXhrLoad(observer, xhr, e) {
	  var responseData,
	    responseObject,
	    responseType;

	  // If there's no observer, the request has been (or is being) cancelled.
	  if (xhr && observer) {
	    responseType = xhr.responseType;
	    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	    // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
	    responseData = ('response' in xhr) ? xhr.response : xhr.responseText;

	    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	    var status = (xhr.status === 1223) ? 204 : xhr.status;

	    if (status >= 200 && status <= 399) {
	      try {
	        if (responseType !== 'json') {
	          responseData = JSON.parse(responseData || '');
	        }
	        if (typeof responseData === 'string') {
	          responseData = JSON.parse(responseData || '');
	        }
	      } catch (e) {
	        _handleXhrError(observer, 'invalid json', e);
	      }
	      observer.onNext(responseData);
	      observer.onCompleted();
	      return;

	    } else if (status === 401 || status === 403 || status === 407) {

	      return _handleXhrError(observer, responseData);

	    } else if (status === 410) {
	      // TODO: Retry ?
	      return _handleXhrError(observer, responseData);

	    } else if (status === 408 || status === 504) {
	      // TODO: Retry ?
	      return _handleXhrError(observer, responseData);

	    } else {

	      return _handleXhrError(observer, responseData || ('Response code ' + status));

	    }//if
	  }//if
	}//onXhrLoad

	function onXhrError(observer, xhr, status, e) {
	  _handleXhrError(observer, status || xhr.statusText || 'request error', e);
	}

	module.exports = request;


/***/ },
/* 483 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	module.exports = function getXMLHttpRequest() {
	  var progId,
	    progIds,
	    i;
	  if (global.XMLHttpRequest) {
	    return new global.XMLHttpRequest();
	  } else {
	    try {
	    progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
	    for (i = 0; i < 3; i++) {
	      try {
	        progId = progIds[i];
	        if (new global.ActiveXObject(progId)) {
	          break;
	        }
	      } catch(e) { }
	    }
	    return new global.ActiveXObject(progId);
	    } catch (e) {
	    throw new Error('XMLHttpRequest is not supported by your browser');
	    }
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 484 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	// Get CORS support even for older IE
	module.exports = function getCORSRequest() {
	    var xhr = new global.XMLHttpRequest();
	    if ('withCredentials' in xhr) {
	        return xhr;
	    } else if (!!global.XDomainRequest) {
	        return new XDomainRequest();
	    } else {
	        throw new Error('CORS is not supported by your browser');
	    }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 485 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function buildQueryObject(url, method, queryData) {
	  var qData = [];
	  var keys;
	  var data = {url: url};
	  var isQueryParamUrl = url.indexOf('?') !== -1;
	  var startUrl = (isQueryParamUrl) ? '&' : '?';

	  if (typeof queryData === 'string') {
	    qData.push(queryData);
	  } else {

	    keys = Object.keys(queryData);
	    keys.forEach(function (k) {
	      var value = (typeof queryData[k] === 'object') ? JSON.stringify(queryData[k]) : queryData[k];
	      qData.push(k + '=' + encodeURIComponent(value));
	    });
	  }

	  if (method === 'GET') {
	    data.url += startUrl + qData.join('&');
	  } else {
	    data.data = qData.join('&');
	  }

	  return data;
	};


/***/ }
/******/ ]);