/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/simpleClientLogger.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js":
/*!******************************************************************************!*\
  !*** ./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * sourcemapped-stacktrace.js
	 * created by James Salter <iteration@gmail.com> (2014)
	 *
	 * https://github.com/novocaine/sourcemapped-stacktrace
	 *
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	/*global define */

	// note we only include source-map-consumer, not the whole source-map library,
	// which includes gear for generating source maps that we don't need
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(source_map_consumer) {

	  var global_mapForUri = {};

	  /**
	   * Re-map entries in a stacktrace using sourcemaps if available.
	   *
	   * @param {Array} stack - Array of strings from the browser's stack
	   *                        representation. Currently only Chrome
	   *                        format is supported.
	   * @param {function} done - Callback invoked with the transformed stacktrace
	   *                          (an Array of Strings) passed as the first
	   *                          argument
	   * @param {Object} [opts] - Optional options object.
	   * @param {Function} [opts.filter] - Filter function applied to each stackTrace line.
	   *                                   Lines which do not pass the filter won't be processesd.
	   * @param {boolean} [opts.cacheGlobally] - Whether to cache sourcemaps globally across multiple calls.
	   * @param {boolean} [opts.sync] - Whether to use synchronous ajax to load the sourcemaps.
	   */
	  var mapStackTrace = function(stack, done, opts) {
	    var lines;
	    var line;
	    var mapForUri = {};
	    var rows = {};
	    var fields;
	    var uri;
	    var expected_fields;
	    var regex;
	    var skip_lines;

	    var fetcher = new Fetcher(opts);

	    if (isChromeOrEdge() || isIE11Plus()) {
	      regex = /^ +at.+\((.*):([0-9]+):([0-9]+)/;
	      expected_fields = 4;
	      // (skip first line containing exception message)
	      skip_lines = 1;
	    } else if (isFirefox() || isSafari()) {
	      regex = /@(.*):([0-9]+):([0-9]+)/;
	      expected_fields = 4;
	      skip_lines = 0;
	    } else {
	      throw new Error("unknown browser :(");
	    }

	    lines = stack.split("\n").slice(skip_lines);

	    for (var i=0; i < lines.length; i++) {
	      line = lines[i];
	      if ( opts && opts.filter && !opts.filter(line) ) continue;
	      
	      fields = line.match(regex);
	      if (fields && fields.length === expected_fields) {
	        rows[i] = fields;
	        uri = fields[1];
	        if (!uri.match(/<anonymous>/)) {
	          fetcher.fetchScript(uri);
	        }
	      }
	    }

	    fetcher.sem.whenReady(function() {
	      var result = processSourceMaps(lines, rows, fetcher.mapForUri);
	      done(result);
	    });
	  };

	  var isChromeOrEdge = function() {
	    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	  };

	  var isFirefox = function() {
	    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	  };  

	  var isSafari = function() {
	    return navigator.userAgent.toLowerCase().indexOf('safari') > -1;
	  };
			
	  var isIE11Plus = function() {
	   	return document.documentMode && document.documentMode >= 11;
	  };


	  var Semaphore = function() {
	    this.count = 0;
	    this.pending = [];
	  };

	  Semaphore.prototype.incr = function() {
	    this.count++;
	  };

	  Semaphore.prototype.decr = function() {
	    this.count--;
	    this.flush();
	  };

	  Semaphore.prototype.whenReady = function(fn) {
	    this.pending.push(fn);
	    this.flush();
	  };

	  Semaphore.prototype.flush = function() {
	    if (this.count === 0) {
	        this.pending.forEach(function(fn) { fn(); });
	        this.pending = [];
	    }
	  };


	  var Fetcher = function(opts) {
	    this.sem = new Semaphore();
	    this.sync = opts && opts.sync;
	    this.mapForUri = opts && opts.cacheGlobally ? global_mapForUri : {};
	  };

	  Fetcher.prototype.ajax = function(uri, callback) {
	    var xhr = createXMLHTTPObject();
	    var that = this;
	    xhr.onreadystatechange = function() {
	      if (xhr.readyState == 4) {
	        callback.call(that, xhr, uri);
	      }
	    };
	    xhr.open("GET", uri, !this.sync);
	    xhr.send();
	  }

	  Fetcher.prototype.fetchScript = function(uri) {
	    if (!(uri in this.mapForUri)) {
	      this.sem.incr();
	      this.mapForUri[uri] = null;
	    } else {
	      return;
	    }

	    this.ajax(uri, this.onScriptLoad);
	  };

	  var absUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

	  Fetcher.prototype.onScriptLoad = function(xhr, uri) {
	    if (xhr.status === 200 || (uri.slice(0, 7) === "file://" && xhr.status === 0)) {
	      // find .map in file.
	      //
	      // attempt to find it at the very end of the file, but tolerate trailing
	      // whitespace inserted by some packers.
	      var match = xhr.responseText.match("//# [s]ourceMappingURL=(.*)[\\s]*$", "m");
	      if (match && match.length === 2) {
	        // get the map
	        var mapUri = match[1];

	        var embeddedSourceMap = mapUri.match("data:application/json;(charset=[^;]+;)?base64,(.*)");

	        if (embeddedSourceMap && embeddedSourceMap[2]) {
	          this.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(atob(embeddedSourceMap[2]));
	          this.sem.decr();
	        } else {
	          if (!absUrlRegex.test(mapUri)) {
	            // relative url; according to sourcemaps spec is 'source origin'
	            var origin;
	            var lastSlash = uri.lastIndexOf('/');
	            if (lastSlash !== -1) {
	              origin = uri.slice(0, lastSlash + 1);
	              mapUri = origin + mapUri;
	              // note if lastSlash === -1, actual script uri has no slash
	              // somehow, so no way to use it as a prefix... we give up and try
	              // as absolute
	            }
	          }

	          this.ajax(mapUri, function(xhr) {
	            if (xhr.status === 200 || (mapUri.slice(0, 7) === "file://" && xhr.status === 0)) {
	              this.mapForUri[uri] = new source_map_consumer.SourceMapConsumer(xhr.responseText);
	            }
	            this.sem.decr();
	          });
	        }
	      } else {
	        // no map
	        this.sem.decr();
	      }
	    } else {
	      // HTTP error fetching uri of the script
	      this.sem.decr();
	    }
	  };

	  var processSourceMaps = function(lines, rows, mapForUri) {
	    var result = [];
	    var map;
	    for (var i=0; i < lines.length; i++) {
	      var row = rows[i];
	      if (row) {
	        var uri = row[1];
	        var line = parseInt(row[2], 10);
	        var column = parseInt(row[3], 10);
	        map = mapForUri[uri];

	        if (map) {
	          // we think we have a map for that uri. call source-map library
	          var origPos = map.originalPositionFor(
	            { line: line, column: column });
	          result.push(formatOriginalPosition(origPos.source,
	            origPos.line, origPos.column, origPos.name || origName(lines[i])));
	        } else {
	          // we can't find a map for that url, but we parsed the row.
	          // reformat unchanged line for consistency with the sourcemapped
	          // lines.
	          result.push(formatOriginalPosition(uri, line, column, origName(lines[i])));
	        }
	      } else {
	        // we weren't able to parse the row, push back what we were given
	        result.push(lines[i]);
	      }
	    }

	    return result;
	  };

	  function origName(origLine) {
	    var match = String(origLine).match((isChromeOrEdge() || isIE11Plus()) ?
	      / +at +([^ ]*).*/ :
	      /([^@]*)@.*/);
	    return match && match[1];
	  }

	  var formatOriginalPosition = function(source, line, column, name) {
	    // mimic chrome's format
	    return "    at " + (name ? name : "(unknown)") +
	      " (" + source + ":" + line + ":" + column + ")";
	  };

	  // xmlhttprequest boilerplate
	  var XMLHttpFactories = [
		function () {return new XMLHttpRequest();},
		function () {return new ActiveXObject("Msxml2.XMLHTTP");},
		function () {return new ActiveXObject("Msxml3.XMLHTTP");},
		function () {return new ActiveXObject("Microsoft.XMLHTTP");}
	  ];

	  function createXMLHTTPObject() {
	      var xmlhttp = false;
	      for (var i=0;i<XMLHttpFactories.length;i++) {
	          try {
	              xmlhttp = XMLHttpFactories[i]();
	          }
	          catch (e) {
	              continue;
	          }
	          break;
	      }
	      return xmlhttp;
	  }

	  return {
	    mapStackTrace: mapStackTrace
	  }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = __webpack_require__(2);
	var binarySearch = __webpack_require__(3);
	var ArraySet = __webpack_require__(4).ArraySet;
	var base64VLQ = __webpack_require__(5);
	var quickSort = __webpack_require__(7).quickSort;

	function SourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  return sourceMap.sections != null
	    ? new IndexedSourceMapConsumer(sourceMap)
	    : new BasicSourceMapConsumer(sourceMap);
	}

	SourceMapConsumer.fromSourceMap = function(aSourceMap) {
	  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
	}

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	SourceMapConsumer.prototype._version = 3;

	// `__generatedMappings` and `__originalMappings` are arrays that hold the
	// parsed mapping coordinates from the source map's "mappings" attribute. They
	// are lazily instantiated, accessed via the `_generatedMappings` and
	// `_originalMappings` getters respectively, and we only parse the mappings
	// and create these arrays once queried for a source location. We jump through
	// these hoops because there can be many thousands of mappings, and parsing
	// them is expensive, so we only want to do it if we must.
	//
	// Each object in the arrays is of the form:
	//
	//     {
	//       generatedLine: The line number in the generated code,
	//       generatedColumn: The column number in the generated code,
	//       source: The path to the original source file that generated this
	//               chunk of code,
	//       originalLine: The line number in the original source that
	//                     corresponds to this chunk of generated code,
	//       originalColumn: The column number in the original source that
	//                       corresponds to this chunk of generated code,
	//       name: The name of the original symbol which generated this chunk of
	//             code.
	//     }
	//
	// All properties except for `generatedLine` and `generatedColumn` can be
	// `null`.
	//
	// `_generatedMappings` is ordered by the generated positions.
	//
	// `_originalMappings` is ordered by the original positions.

	SourceMapConsumer.prototype.__generatedMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
	  get: function () {
	    if (!this.__generatedMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__generatedMappings;
	  }
	});

	SourceMapConsumer.prototype.__originalMappings = null;
	Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
	  get: function () {
	    if (!this.__originalMappings) {
	      this._parseMappings(this._mappings, this.sourceRoot);
	    }

	    return this.__originalMappings;
	  }
	});

	SourceMapConsumer.prototype._charIsMappingSeparator =
	  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
	    var c = aStr.charAt(index);
	    return c === ";" || c === ",";
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	SourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    throw new Error("Subclasses must implement _parseMappings");
	  };

	SourceMapConsumer.GENERATED_ORDER = 1;
	SourceMapConsumer.ORIGINAL_ORDER = 2;

	SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
	SourceMapConsumer.LEAST_UPPER_BOUND = 2;

	/**
	 * Iterate over each mapping between an original source/line/column and a
	 * generated line/column in this source map.
	 *
	 * @param Function aCallback
	 *        The function that is called with each mapping.
	 * @param Object aContext
	 *        Optional. If specified, this object will be the value of `this` every
	 *        time that `aCallback` is called.
	 * @param aOrder
	 *        Either `SourceMapConsumer.GENERATED_ORDER` or
	 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
	 *        iterate over the mappings sorted by the generated file's line/column
	 *        order or the original's source/line/column order, respectively. Defaults to
	 *        `SourceMapConsumer.GENERATED_ORDER`.
	 */
	SourceMapConsumer.prototype.eachMapping =
	  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
	    var context = aContext || null;
	    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

	    var mappings;
	    switch (order) {
	    case SourceMapConsumer.GENERATED_ORDER:
	      mappings = this._generatedMappings;
	      break;
	    case SourceMapConsumer.ORIGINAL_ORDER:
	      mappings = this._originalMappings;
	      break;
	    default:
	      throw new Error("Unknown order of iteration.");
	    }

	    var sourceRoot = this.sourceRoot;
	    mappings.map(function (mapping) {
	      var source = mapping.source === null ? null : this._sources.at(mapping.source);
	      if (source != null && sourceRoot != null) {
	        source = util.join(sourceRoot, source);
	      }
	      return {
	        source: source,
	        generatedLine: mapping.generatedLine,
	        generatedColumn: mapping.generatedColumn,
	        originalLine: mapping.originalLine,
	        originalColumn: mapping.originalColumn,
	        name: mapping.name === null ? null : this._names.at(mapping.name)
	      };
	    }, this).forEach(aCallback, context);
	  };

	/**
	 * Returns all generated line and column information for the original source,
	 * line, and column provided. If no column is provided, returns all mappings
	 * corresponding to a either the line we are searching for or the next
	 * closest line that has any mappings. Otherwise, returns all mappings
	 * corresponding to the given line and either the column we are searching for
	 * or the next closest column that has any offsets.
	 *
	 * The only argument is an object with the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: Optional. the column number in the original source.
	 *
	 * and an array of objects is returned, each with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	SourceMapConsumer.prototype.allGeneratedPositionsFor =
	  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
	    var line = util.getArg(aArgs, 'line');

	    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
	    // returns the index of the closest mapping less than the needle. By
	    // setting needle.originalColumn to 0, we thus find the last mapping for
	    // the given line, provided such a mapping exists.
	    var needle = {
	      source: util.getArg(aArgs, 'source'),
	      originalLine: line,
	      originalColumn: util.getArg(aArgs, 'column', 0)
	    };

	    if (this.sourceRoot != null) {
	      needle.source = util.relative(this.sourceRoot, needle.source);
	    }
	    if (!this._sources.has(needle.source)) {
	      return [];
	    }
	    needle.source = this._sources.indexOf(needle.source);

	    var mappings = [];

	    var index = this._findMapping(needle,
	                                  this._originalMappings,
	                                  "originalLine",
	                                  "originalColumn",
	                                  util.compareByOriginalPositions,
	                                  binarySearch.LEAST_UPPER_BOUND);
	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (aArgs.column === undefined) {
	        var originalLine = mapping.originalLine;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we found. Since
	        // mappings are sorted, this is guaranteed to find all mappings for
	        // the line we found.
	        while (mapping && mapping.originalLine === originalLine) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      } else {
	        var originalColumn = mapping.originalColumn;

	        // Iterate until either we run out of mappings, or we run into
	        // a mapping for a different line than the one we were searching for.
	        // Since mappings are sorted, this is guaranteed to find all mappings for
	        // the line we are searching for.
	        while (mapping &&
	               mapping.originalLine === line &&
	               mapping.originalColumn == originalColumn) {
	          mappings.push({
	            line: util.getArg(mapping, 'generatedLine', null),
	            column: util.getArg(mapping, 'generatedColumn', null),
	            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	          });

	          mapping = this._originalMappings[++index];
	        }
	      }
	    }

	    return mappings;
	  };

	exports.SourceMapConsumer = SourceMapConsumer;

	/**
	 * A BasicSourceMapConsumer instance represents a parsed source map which we can
	 * query for information about the original file positions by giving it a file
	 * position in the generated source.
	 *
	 * The only parameter is the raw source map (either as a JSON string, or
	 * already parsed to an object). According to the spec, source maps have the
	 * following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - sources: An array of URLs to the original source files.
	 *   - names: An array of identifiers which can be referrenced by individual mappings.
	 *   - sourceRoot: Optional. The URL root from which all sources are relative.
	 *   - sourcesContent: Optional. An array of contents of the original source files.
	 *   - mappings: A string of base64 VLQs which contain the actual mappings.
	 *   - file: Optional. The generated file this source map is associated with.
	 *
	 * Here is an example source map, taken from the source map spec[0]:
	 *
	 *     {
	 *       version : 3,
	 *       file: "out.js",
	 *       sourceRoot : "",
	 *       sources: ["foo.js", "bar.js"],
	 *       names: ["src", "maps", "are", "fun"],
	 *       mappings: "AA,AB;;ABCDE;"
	 *     }
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
	 */
	function BasicSourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sources = util.getArg(sourceMap, 'sources');
	  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
	  // requires the array) to play nice here.
	  var names = util.getArg(sourceMap, 'names', []);
	  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
	  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
	  var mappings = util.getArg(sourceMap, 'mappings');
	  var file = util.getArg(sourceMap, 'file', null);

	  // Once again, Sass deviates from the spec and supplies the version as a
	  // string rather than a number, so we use loose equality checking here.
	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  sources = sources
	    .map(String)
	    // Some source maps produce relative source paths like "./foo.js" instead of
	    // "foo.js".  Normalize these first so that future comparisons will succeed.
	    // See bugzil.la/1090768.
	    .map(util.normalize)
	    // Always ensure that absolute sources are internally stored relative to
	    // the source root, if the source root is absolute. Not doing this would
	    // be particularly problematic when the source root is a prefix of the
	    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
	    .map(function (source) {
	      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
	        ? util.relative(sourceRoot, source)
	        : source;
	    });

	  // Pass `true` below to allow duplicate names and sources. While source maps
	  // are intended to be compressed and deduplicated, the TypeScript compiler
	  // sometimes generates source maps with duplicates in them. See Github issue
	  // #72 and bugzil.la/889492.
	  this._names = ArraySet.fromArray(names.map(String), true);
	  this._sources = ArraySet.fromArray(sources, true);

	  this.sourceRoot = sourceRoot;
	  this.sourcesContent = sourcesContent;
	  this._mappings = mappings;
	  this.file = file;
	}

	BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

	/**
	 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
	 *
	 * @param SourceMapGenerator aSourceMap
	 *        The source map that will be consumed.
	 * @returns BasicSourceMapConsumer
	 */
	BasicSourceMapConsumer.fromSourceMap =
	  function SourceMapConsumer_fromSourceMap(aSourceMap) {
	    var smc = Object.create(BasicSourceMapConsumer.prototype);

	    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
	    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
	    smc.sourceRoot = aSourceMap._sourceRoot;
	    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
	                                                            smc.sourceRoot);
	    smc.file = aSourceMap._file;

	    // Because we are modifying the entries (by converting string sources and
	    // names to indices into the sources and names ArraySets), we have to make
	    // a copy of the entry or else bad things happen. Shared mutable state
	    // strikes again! See github issue #191.

	    var generatedMappings = aSourceMap._mappings.toArray().slice();
	    var destGeneratedMappings = smc.__generatedMappings = [];
	    var destOriginalMappings = smc.__originalMappings = [];

	    for (var i = 0, length = generatedMappings.length; i < length; i++) {
	      var srcMapping = generatedMappings[i];
	      var destMapping = new Mapping;
	      destMapping.generatedLine = srcMapping.generatedLine;
	      destMapping.generatedColumn = srcMapping.generatedColumn;

	      if (srcMapping.source) {
	        destMapping.source = sources.indexOf(srcMapping.source);
	        destMapping.originalLine = srcMapping.originalLine;
	        destMapping.originalColumn = srcMapping.originalColumn;

	        if (srcMapping.name) {
	          destMapping.name = names.indexOf(srcMapping.name);
	        }

	        destOriginalMappings.push(destMapping);
	      }

	      destGeneratedMappings.push(destMapping);
	    }

	    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

	    return smc;
	  };

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	BasicSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    return this._sources.toArray().map(function (s) {
	      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
	    }, this);
	  }
	});

	/**
	 * Provide the JIT with a nice shape / hidden class.
	 */
	function Mapping() {
	  this.generatedLine = 0;
	  this.generatedColumn = 0;
	  this.source = null;
	  this.originalLine = null;
	  this.originalColumn = null;
	  this.name = null;
	}

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	BasicSourceMapConsumer.prototype._parseMappings =
	  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    var generatedLine = 1;
	    var previousGeneratedColumn = 0;
	    var previousOriginalLine = 0;
	    var previousOriginalColumn = 0;
	    var previousSource = 0;
	    var previousName = 0;
	    var length = aStr.length;
	    var index = 0;
	    var cachedSegments = {};
	    var temp = {};
	    var originalMappings = [];
	    var generatedMappings = [];
	    var mapping, str, segment, end, value;

	    while (index < length) {
	      if (aStr.charAt(index) === ';') {
	        generatedLine++;
	        index++;
	        previousGeneratedColumn = 0;
	      }
	      else if (aStr.charAt(index) === ',') {
	        index++;
	      }
	      else {
	        mapping = new Mapping();
	        mapping.generatedLine = generatedLine;

	        // Because each offset is encoded relative to the previous one,
	        // many segments often have the same encoding. We can exploit this
	        // fact by caching the parsed variable length fields of each segment,
	        // allowing us to avoid a second parse if we encounter the same
	        // segment again.
	        for (end = index; end < length; end++) {
	          if (this._charIsMappingSeparator(aStr, end)) {
	            break;
	          }
	        }
	        str = aStr.slice(index, end);

	        segment = cachedSegments[str];
	        if (segment) {
	          index += str.length;
	        } else {
	          segment = [];
	          while (index < end) {
	            base64VLQ.decode(aStr, index, temp);
	            value = temp.value;
	            index = temp.rest;
	            segment.push(value);
	          }

	          if (segment.length === 2) {
	            throw new Error('Found a source, but no line and column');
	          }

	          if (segment.length === 3) {
	            throw new Error('Found a source and line, but no column');
	          }

	          cachedSegments[str] = segment;
	        }

	        // Generated column.
	        mapping.generatedColumn = previousGeneratedColumn + segment[0];
	        previousGeneratedColumn = mapping.generatedColumn;

	        if (segment.length > 1) {
	          // Original source.
	          mapping.source = previousSource + segment[1];
	          previousSource += segment[1];

	          // Original line.
	          mapping.originalLine = previousOriginalLine + segment[2];
	          previousOriginalLine = mapping.originalLine;
	          // Lines are stored 0-based
	          mapping.originalLine += 1;

	          // Original column.
	          mapping.originalColumn = previousOriginalColumn + segment[3];
	          previousOriginalColumn = mapping.originalColumn;

	          if (segment.length > 4) {
	            // Original name.
	            mapping.name = previousName + segment[4];
	            previousName += segment[4];
	          }
	        }

	        generatedMappings.push(mapping);
	        if (typeof mapping.originalLine === 'number') {
	          originalMappings.push(mapping);
	        }
	      }
	    }

	    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
	    this.__generatedMappings = generatedMappings;

	    quickSort(originalMappings, util.compareByOriginalPositions);
	    this.__originalMappings = originalMappings;
	  };

	/**
	 * Find the mapping that best matches the hypothetical "needle" mapping that
	 * we are searching for in the given "haystack" of mappings.
	 */
	BasicSourceMapConsumer.prototype._findMapping =
	  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
	                                         aColumnName, aComparator, aBias) {
	    // To return the position we are searching for, we must first find the
	    // mapping for the given position and then return the opposite position it
	    // points to. Because the mappings are sorted, we can use binary search to
	    // find the best mapping.

	    if (aNeedle[aLineName] <= 0) {
	      throw new TypeError('Line must be greater than or equal to 1, got '
	                          + aNeedle[aLineName]);
	    }
	    if (aNeedle[aColumnName] < 0) {
	      throw new TypeError('Column must be greater than or equal to 0, got '
	                          + aNeedle[aColumnName]);
	    }

	    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
	  };

	/**
	 * Compute the last column for each generated mapping. The last column is
	 * inclusive.
	 */
	BasicSourceMapConsumer.prototype.computeColumnSpans =
	  function SourceMapConsumer_computeColumnSpans() {
	    for (var index = 0; index < this._generatedMappings.length; ++index) {
	      var mapping = this._generatedMappings[index];

	      // Mappings do not contain a field for the last generated columnt. We
	      // can come up with an optimistic estimate, however, by assuming that
	      // mappings are contiguous (i.e. given two consecutive mappings, the
	      // first mapping ends where the second one starts).
	      if (index + 1 < this._generatedMappings.length) {
	        var nextMapping = this._generatedMappings[index + 1];

	        if (mapping.generatedLine === nextMapping.generatedLine) {
	          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
	          continue;
	        }
	      }

	      // The last mapping for each line spans the entire line.
	      mapping.lastGeneratedColumn = Infinity;
	    }
	  };

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.
	 *   - column: The column number in the generated source.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.
	 *   - column: The column number in the original source, or null.
	 *   - name: The original identifier, or null.
	 */
	BasicSourceMapConsumer.prototype.originalPositionFor =
	  function SourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._generatedMappings,
	      "generatedLine",
	      "generatedColumn",
	      util.compareByGeneratedPositionsDeflated,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._generatedMappings[index];

	      if (mapping.generatedLine === needle.generatedLine) {
	        var source = util.getArg(mapping, 'source', null);
	        if (source !== null) {
	          source = this._sources.at(source);
	          if (this.sourceRoot != null) {
	            source = util.join(this.sourceRoot, source);
	          }
	        }
	        var name = util.getArg(mapping, 'name', null);
	        if (name !== null) {
	          name = this._names.at(name);
	        }
	        return {
	          source: source,
	          line: util.getArg(mapping, 'originalLine', null),
	          column: util.getArg(mapping, 'originalColumn', null),
	          name: name
	        };
	      }
	    }

	    return {
	      source: null,
	      line: null,
	      column: null,
	      name: null
	    };
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function BasicSourceMapConsumer_hasContentsOfAllSources() {
	    if (!this.sourcesContent) {
	      return false;
	    }
	    return this.sourcesContent.length >= this._sources.size() &&
	      !this.sourcesContent.some(function (sc) { return sc == null; });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	BasicSourceMapConsumer.prototype.sourceContentFor =
	  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    if (!this.sourcesContent) {
	      return null;
	    }

	    if (this.sourceRoot != null) {
	      aSource = util.relative(this.sourceRoot, aSource);
	    }

	    if (this._sources.has(aSource)) {
	      return this.sourcesContent[this._sources.indexOf(aSource)];
	    }

	    var url;
	    if (this.sourceRoot != null
	        && (url = util.urlParse(this.sourceRoot))) {
	      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
	      // many users. We can help them out when they expect file:// URIs to
	      // behave like it would if they were running a local HTTP server. See
	      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
	      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
	      if (url.scheme == "file"
	          && this._sources.has(fileUriAbsPath)) {
	        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
	      }

	      if ((!url.path || url.path == "/")
	          && this._sources.has("/" + aSource)) {
	        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
	      }
	    }

	    // This function is used recursively from
	    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
	    // don't want to throw if we can't find the source - we just want to
	    // return null, so we provide a flag to exit gracefully.
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + aSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: The column number in the original source.
	 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
	 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	BasicSourceMapConsumer.prototype.generatedPositionFor =
	  function SourceMapConsumer_generatedPositionFor(aArgs) {
	    var source = util.getArg(aArgs, 'source');
	    if (this.sourceRoot != null) {
	      source = util.relative(this.sourceRoot, source);
	    }
	    if (!this._sources.has(source)) {
	      return {
	        line: null,
	        column: null,
	        lastColumn: null
	      };
	    }
	    source = this._sources.indexOf(source);

	    var needle = {
	      source: source,
	      originalLine: util.getArg(aArgs, 'line'),
	      originalColumn: util.getArg(aArgs, 'column')
	    };

	    var index = this._findMapping(
	      needle,
	      this._originalMappings,
	      "originalLine",
	      "originalColumn",
	      util.compareByOriginalPositions,
	      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
	    );

	    if (index >= 0) {
	      var mapping = this._originalMappings[index];

	      if (mapping.source === needle.source) {
	        return {
	          line: util.getArg(mapping, 'generatedLine', null),
	          column: util.getArg(mapping, 'generatedColumn', null),
	          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
	        };
	      }
	    }

	    return {
	      line: null,
	      column: null,
	      lastColumn: null
	    };
	  };

	exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

	/**
	 * An IndexedSourceMapConsumer instance represents a parsed source map which
	 * we can query for information. It differs from BasicSourceMapConsumer in
	 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
	 * input.
	 *
	 * The only parameter is a raw source map (either as a JSON string, or already
	 * parsed to an object). According to the spec for indexed source maps, they
	 * have the following attributes:
	 *
	 *   - version: Which version of the source map spec this map is following.
	 *   - file: Optional. The generated file this source map is associated with.
	 *   - sections: A list of section definitions.
	 *
	 * Each value under the "sections" field has two fields:
	 *   - offset: The offset into the original specified at which this section
	 *       begins to apply, defined as an object with a "line" and "column"
	 *       field.
	 *   - map: A source map definition. This source map could also be indexed,
	 *       but doesn't have to be.
	 *
	 * Instead of the "map" field, it's also possible to have a "url" field
	 * specifying a URL to retrieve a source map from, but that's currently
	 * unsupported.
	 *
	 * Here's an example source map, taken from the source map spec[0], but
	 * modified to omit a section which uses the "url" field.
	 *
	 *  {
	 *    version : 3,
	 *    file: "app.js",
	 *    sections: [{
	 *      offset: {line:100, column:10},
	 *      map: {
	 *        version : 3,
	 *        file: "section.js",
	 *        sources: ["foo.js", "bar.js"],
	 *        names: ["src", "maps", "are", "fun"],
	 *        mappings: "AAAA,E;;ABCDE;"
	 *      }
	 *    }],
	 *  }
	 *
	 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
	 */
	function IndexedSourceMapConsumer(aSourceMap) {
	  var sourceMap = aSourceMap;
	  if (typeof aSourceMap === 'string') {
	    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
	  }

	  var version = util.getArg(sourceMap, 'version');
	  var sections = util.getArg(sourceMap, 'sections');

	  if (version != this._version) {
	    throw new Error('Unsupported version: ' + version);
	  }

	  this._sources = new ArraySet();
	  this._names = new ArraySet();

	  var lastOffset = {
	    line: -1,
	    column: 0
	  };
	  this._sections = sections.map(function (s) {
	    if (s.url) {
	      // The url field will require support for asynchronicity.
	      // See https://github.com/mozilla/source-map/issues/16
	      throw new Error('Support for url field in sections not implemented.');
	    }
	    var offset = util.getArg(s, 'offset');
	    var offsetLine = util.getArg(offset, 'line');
	    var offsetColumn = util.getArg(offset, 'column');

	    if (offsetLine < lastOffset.line ||
	        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
	      throw new Error('Section offsets must be ordered and non-overlapping.');
	    }
	    lastOffset = offset;

	    return {
	      generatedOffset: {
	        // The offset fields are 0-based, but we use 1-based indices when
	        // encoding/decoding from VLQ.
	        generatedLine: offsetLine + 1,
	        generatedColumn: offsetColumn + 1
	      },
	      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
	    }
	  });
	}

	IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
	IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

	/**
	 * The version of the source mapping spec that we are consuming.
	 */
	IndexedSourceMapConsumer.prototype._version = 3;

	/**
	 * The list of original sources.
	 */
	Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
	  get: function () {
	    var sources = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
	        sources.push(this._sections[i].consumer.sources[j]);
	      }
	    }
	    return sources;
	  }
	});

	/**
	 * Returns the original source, line, and column information for the generated
	 * source's line and column positions provided. The only argument is an object
	 * with the following properties:
	 *
	 *   - line: The line number in the generated source.
	 *   - column: The column number in the generated source.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - source: The original source file, or null.
	 *   - line: The line number in the original source, or null.
	 *   - column: The column number in the original source, or null.
	 *   - name: The original identifier, or null.
	 */
	IndexedSourceMapConsumer.prototype.originalPositionFor =
	  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
	    var needle = {
	      generatedLine: util.getArg(aArgs, 'line'),
	      generatedColumn: util.getArg(aArgs, 'column')
	    };

	    // Find the section containing the generated position we're trying to map
	    // to an original position.
	    var sectionIndex = binarySearch.search(needle, this._sections,
	      function(needle, section) {
	        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
	        if (cmp) {
	          return cmp;
	        }

	        return (needle.generatedColumn -
	                section.generatedOffset.generatedColumn);
	      });
	    var section = this._sections[sectionIndex];

	    if (!section) {
	      return {
	        source: null,
	        line: null,
	        column: null,
	        name: null
	      };
	    }

	    return section.consumer.originalPositionFor({
	      line: needle.generatedLine -
	        (section.generatedOffset.generatedLine - 1),
	      column: needle.generatedColumn -
	        (section.generatedOffset.generatedLine === needle.generatedLine
	         ? section.generatedOffset.generatedColumn - 1
	         : 0),
	      bias: aArgs.bias
	    });
	  };

	/**
	 * Return true if we have the source content for every source in the source
	 * map, false otherwise.
	 */
	IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
	  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
	    return this._sections.every(function (s) {
	      return s.consumer.hasContentsOfAllSources();
	    });
	  };

	/**
	 * Returns the original source content. The only argument is the url of the
	 * original source file. Returns null if no original source content is
	 * available.
	 */
	IndexedSourceMapConsumer.prototype.sourceContentFor =
	  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      var content = section.consumer.sourceContentFor(aSource, true);
	      if (content) {
	        return content;
	      }
	    }
	    if (nullOnMissing) {
	      return null;
	    }
	    else {
	      throw new Error('"' + aSource + '" is not in the SourceMap.');
	    }
	  };

	/**
	 * Returns the generated line and column information for the original source,
	 * line, and column positions provided. The only argument is an object with
	 * the following properties:
	 *
	 *   - source: The filename of the original source.
	 *   - line: The line number in the original source.
	 *   - column: The column number in the original source.
	 *
	 * and an object is returned with the following properties:
	 *
	 *   - line: The line number in the generated source, or null.
	 *   - column: The column number in the generated source, or null.
	 */
	IndexedSourceMapConsumer.prototype.generatedPositionFor =
	  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];

	      // Only consider this section if the requested source is in the list of
	      // sources of the consumer.
	      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
	        continue;
	      }
	      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
	      if (generatedPosition) {
	        var ret = {
	          line: generatedPosition.line +
	            (section.generatedOffset.generatedLine - 1),
	          column: generatedPosition.column +
	            (section.generatedOffset.generatedLine === generatedPosition.line
	             ? section.generatedOffset.generatedColumn - 1
	             : 0)
	        };
	        return ret;
	      }
	    }

	    return {
	      line: null,
	      column: null
	    };
	  };

	/**
	 * Parse the mappings in a string in to a data structure which we can easily
	 * query (the ordered arrays in the `this.__generatedMappings` and
	 * `this.__originalMappings` properties).
	 */
	IndexedSourceMapConsumer.prototype._parseMappings =
	  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
	    this.__generatedMappings = [];
	    this.__originalMappings = [];
	    for (var i = 0; i < this._sections.length; i++) {
	      var section = this._sections[i];
	      var sectionMappings = section.consumer._generatedMappings;
	      for (var j = 0; j < sectionMappings.length; j++) {
	        var mapping = sectionMappings[j];

	        var source = section.consumer._sources.at(mapping.source);
	        if (section.consumer.sourceRoot !== null) {
	          source = util.join(section.consumer.sourceRoot, source);
	        }
	        this._sources.add(source);
	        source = this._sources.indexOf(source);

	        var name = section.consumer._names.at(mapping.name);
	        this._names.add(name);
	        name = this._names.indexOf(name);

	        // The mappings coming from the consumer for the section have
	        // generated positions relative to the start of the section, so we
	        // need to offset them to be relative to the start of the concatenated
	        // generated file.
	        var adjustedMapping = {
	          source: source,
	          generatedLine: mapping.generatedLine +
	            (section.generatedOffset.generatedLine - 1),
	          generatedColumn: mapping.generatedColumn +
	            (section.generatedOffset.generatedLine === mapping.generatedLine
	            ? section.generatedOffset.generatedColumn - 1
	            : 0),
	          originalLine: mapping.originalLine,
	          originalColumn: mapping.originalColumn,
	          name: name
	        };

	        this.__generatedMappings.push(adjustedMapping);
	        if (typeof adjustedMapping.originalLine === 'number') {
	          this.__originalMappings.push(adjustedMapping);
	        }
	      }
	    }

	    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
	    quickSort(this.__originalMappings, util.compareByOriginalPositions);
	  };

	exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	/**
	 * This is a helper function for getting values from parameter/options
	 * objects.
	 *
	 * @param args The object we are extracting values from
	 * @param name The name of the property we are getting.
	 * @param defaultValue An optional value to return if the property is missing
	 * from the object. If this is not specified and the property is missing, an
	 * error will be thrown.
	 */
	function getArg(aArgs, aName, aDefaultValue) {
	  if (aName in aArgs) {
	    return aArgs[aName];
	  } else if (arguments.length === 3) {
	    return aDefaultValue;
	  } else {
	    throw new Error('"' + aName + '" is a required argument.');
	  }
	}
	exports.getArg = getArg;

	var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
	var dataUrlRegexp = /^data:.+\,.+$/;

	function urlParse(aUrl) {
	  var match = aUrl.match(urlRegexp);
	  if (!match) {
	    return null;
	  }
	  return {
	    scheme: match[1],
	    auth: match[2],
	    host: match[3],
	    port: match[4],
	    path: match[5]
	  };
	}
	exports.urlParse = urlParse;

	function urlGenerate(aParsedUrl) {
	  var url = '';
	  if (aParsedUrl.scheme) {
	    url += aParsedUrl.scheme + ':';
	  }
	  url += '//';
	  if (aParsedUrl.auth) {
	    url += aParsedUrl.auth + '@';
	  }
	  if (aParsedUrl.host) {
	    url += aParsedUrl.host;
	  }
	  if (aParsedUrl.port) {
	    url += ":" + aParsedUrl.port
	  }
	  if (aParsedUrl.path) {
	    url += aParsedUrl.path;
	  }
	  return url;
	}
	exports.urlGenerate = urlGenerate;

	/**
	 * Normalizes a path, or the path portion of a URL:
	 *
	 * - Replaces consecutive slashes with one slash.
	 * - Removes unnecessary '.' parts.
	 * - Removes unnecessary '<dir>/..' parts.
	 *
	 * Based on code in the Node.js 'path' core module.
	 *
	 * @param aPath The path or url to normalize.
	 */
	function normalize(aPath) {
	  var path = aPath;
	  var url = urlParse(aPath);
	  if (url) {
	    if (!url.path) {
	      return aPath;
	    }
	    path = url.path;
	  }
	  var isAbsolute = exports.isAbsolute(path);

	  var parts = path.split(/\/+/);
	  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
	    part = parts[i];
	    if (part === '.') {
	      parts.splice(i, 1);
	    } else if (part === '..') {
	      up++;
	    } else if (up > 0) {
	      if (part === '') {
	        // The first part is blank if the path is absolute. Trying to go
	        // above the root is a no-op. Therefore we can remove all '..' parts
	        // directly after the root.
	        parts.splice(i + 1, up);
	        up = 0;
	      } else {
	        parts.splice(i, 2);
	        up--;
	      }
	    }
	  }
	  path = parts.join('/');

	  if (path === '') {
	    path = isAbsolute ? '/' : '.';
	  }

	  if (url) {
	    url.path = path;
	    return urlGenerate(url);
	  }
	  return path;
	}
	exports.normalize = normalize;

	/**
	 * Joins two paths/URLs.
	 *
	 * @param aRoot The root path or URL.
	 * @param aPath The path or URL to be joined with the root.
	 *
	 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
	 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
	 *   first.
	 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
	 *   is updated with the result and aRoot is returned. Otherwise the result
	 *   is returned.
	 *   - If aPath is absolute, the result is aPath.
	 *   - Otherwise the two paths are joined with a slash.
	 * - Joining for example 'http://' and 'www.example.com' is also supported.
	 */
	function join(aRoot, aPath) {
	  if (aRoot === "") {
	    aRoot = ".";
	  }
	  if (aPath === "") {
	    aPath = ".";
	  }
	  var aPathUrl = urlParse(aPath);
	  var aRootUrl = urlParse(aRoot);
	  if (aRootUrl) {
	    aRoot = aRootUrl.path || '/';
	  }

	  // `join(foo, '//www.example.org')`
	  if (aPathUrl && !aPathUrl.scheme) {
	    if (aRootUrl) {
	      aPathUrl.scheme = aRootUrl.scheme;
	    }
	    return urlGenerate(aPathUrl);
	  }

	  if (aPathUrl || aPath.match(dataUrlRegexp)) {
	    return aPath;
	  }

	  // `join('http://', 'www.example.com')`
	  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
	    aRootUrl.host = aPath;
	    return urlGenerate(aRootUrl);
	  }

	  var joined = aPath.charAt(0) === '/'
	    ? aPath
	    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

	  if (aRootUrl) {
	    aRootUrl.path = joined;
	    return urlGenerate(aRootUrl);
	  }
	  return joined;
	}
	exports.join = join;

	exports.isAbsolute = function (aPath) {
	  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
	};

	/**
	 * Make a path relative to a URL or another path.
	 *
	 * @param aRoot The root path or URL.
	 * @param aPath The path or URL to be made relative to aRoot.
	 */
	function relative(aRoot, aPath) {
	  if (aRoot === "") {
	    aRoot = ".";
	  }

	  aRoot = aRoot.replace(/\/$/, '');

	  // It is possible for the path to be above the root. In this case, simply
	  // checking whether the root is a prefix of the path won't work. Instead, we
	  // need to remove components from the root one by one, until either we find
	  // a prefix that fits, or we run out of components to remove.
	  var level = 0;
	  while (aPath.indexOf(aRoot + '/') !== 0) {
	    var index = aRoot.lastIndexOf("/");
	    if (index < 0) {
	      return aPath;
	    }

	    // If the only part of the root that is left is the scheme (i.e. http://,
	    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
	    // have exhausted all components, so the path is not relative to the root.
	    aRoot = aRoot.slice(0, index);
	    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
	      return aPath;
	    }

	    ++level;
	  }

	  // Make sure we add a "../" for each component we removed from the root.
	  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
	}
	exports.relative = relative;

	var supportsNullProto = (function () {
	  var obj = Object.create(null);
	  return !('__proto__' in obj);
	}());

	function identity (s) {
	  return s;
	}

	/**
	 * Because behavior goes wacky when you set `__proto__` on objects, we
	 * have to prefix all the strings in our set with an arbitrary character.
	 *
	 * See https://github.com/mozilla/source-map/pull/31 and
	 * https://github.com/mozilla/source-map/issues/30
	 *
	 * @param String aStr
	 */
	function toSetString(aStr) {
	  if (isProtoString(aStr)) {
	    return '$' + aStr;
	  }

	  return aStr;
	}
	exports.toSetString = supportsNullProto ? identity : toSetString;

	function fromSetString(aStr) {
	  if (isProtoString(aStr)) {
	    return aStr.slice(1);
	  }

	  return aStr;
	}
	exports.fromSetString = supportsNullProto ? identity : fromSetString;

	function isProtoString(s) {
	  if (!s) {
	    return false;
	  }

	  var length = s.length;

	  if (length < 9 /* "__proto__".length */) {
	    return false;
	  }

	  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
	      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
	      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
	      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
	      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
	      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
	      s.charCodeAt(length - 9) !== 95  /* '_' */) {
	    return false;
	  }

	  for (var i = length - 10; i >= 0; i--) {
	    if (s.charCodeAt(i) !== 36 /* '$' */) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Comparator between two mappings where the original positions are compared.
	 *
	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
	 * mappings with the same original source/line/column, but different generated
	 * line and column the same. Useful when searching for a mapping with a
	 * stubbed out mapping.
	 */
	function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
	  var cmp = mappingA.source - mappingB.source;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0 || onlyCompareOriginal) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return mappingA.name - mappingB.name;
	}
	exports.compareByOriginalPositions = compareByOriginalPositions;

	/**
	 * Comparator between two mappings with deflated source and name indices where
	 * the generated positions are compared.
	 *
	 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
	 * mappings with the same generated line and column, but different
	 * source/name/original line and column the same. Useful when searching for a
	 * mapping with a stubbed out mapping.
	 */
	function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
	  var cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0 || onlyCompareGenerated) {
	    return cmp;
	  }

	  cmp = mappingA.source - mappingB.source;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return mappingA.name - mappingB.name;
	}
	exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

	function strcmp(aStr1, aStr2) {
	  if (aStr1 === aStr2) {
	    return 0;
	  }

	  if (aStr1 > aStr2) {
	    return 1;
	  }

	  return -1;
	}

	/**
	 * Comparator between two mappings with inflated source and name strings where
	 * the generated positions are compared.
	 */
	function compareByGeneratedPositionsInflated(mappingA, mappingB) {
	  var cmp = mappingA.generatedLine - mappingB.generatedLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = strcmp(mappingA.source, mappingB.source);
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalLine - mappingB.originalLine;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  cmp = mappingA.originalColumn - mappingB.originalColumn;
	  if (cmp !== 0) {
	    return cmp;
	  }

	  return strcmp(mappingA.name, mappingB.name);
	}
	exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	exports.GREATEST_LOWER_BOUND = 1;
	exports.LEAST_UPPER_BOUND = 2;

	/**
	 * Recursive implementation of binary search.
	 *
	 * @param aLow Indices here and lower do not contain the needle.
	 * @param aHigh Indices here and higher do not contain the needle.
	 * @param aNeedle The element being searched for.
	 * @param aHaystack The non-empty array being searched.
	 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 */
	function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
	  // This function terminates when one of the following is true:
	  //
	  //   1. We find the exact element we are looking for.
	  //
	  //   2. We did not find the exact element, but we can return the index of
	  //      the next-closest element.
	  //
	  //   3. We did not find the exact element, and there is no next-closest
	  //      element than the one we are searching for, so we return -1.
	  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
	  var cmp = aCompare(aNeedle, aHaystack[mid], true);
	  if (cmp === 0) {
	    // Found the element we are looking for.
	    return mid;
	  }
	  else if (cmp > 0) {
	    // Our needle is greater than aHaystack[mid].
	    if (aHigh - mid > 1) {
	      // The element is in the upper half.
	      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
	    }

	    // The exact needle element was not found in this haystack. Determine if
	    // we are in termination case (3) or (2) and return the appropriate thing.
	    if (aBias == exports.LEAST_UPPER_BOUND) {
	      return aHigh < aHaystack.length ? aHigh : -1;
	    } else {
	      return mid;
	    }
	  }
	  else {
	    // Our needle is less than aHaystack[mid].
	    if (mid - aLow > 1) {
	      // The element is in the lower half.
	      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
	    }

	    // we are in termination case (3) or (2) and return the appropriate thing.
	    if (aBias == exports.LEAST_UPPER_BOUND) {
	      return mid;
	    } else {
	      return aLow < 0 ? -1 : aLow;
	    }
	  }
	}

	/**
	 * This is an implementation of binary search which will always try and return
	 * the index of the closest element if there is no exact hit. This is because
	 * mappings between original and generated line/col pairs are single points,
	 * and there is an implicit region between each of them, so a miss just means
	 * that you aren't on the very start of a region.
	 *
	 * @param aNeedle The element you are looking for.
	 * @param aHaystack The array that is being searched.
	 * @param aCompare A function which takes the needle and an element in the
	 *     array and returns -1, 0, or 1 depending on whether the needle is less
	 *     than, equal to, or greater than the element, respectively.
	 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
	 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
	 *     closest element that is smaller than or greater than the one we are
	 *     searching for, respectively, if the exact element cannot be found.
	 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
	 */
	exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
	  if (aHaystack.length === 0) {
	    return -1;
	  }

	  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
	                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
	  if (index < 0) {
	    return -1;
	  }

	  // We have found either the exact element, or the next-closest element than
	  // the one we are searching for. However, there may be more than one such
	  // element. Make sure we always return the smallest of these.
	  while (index - 1 >= 0) {
	    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
	      break;
	    }
	    --index;
	  }

	  return index;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var util = __webpack_require__(2);
	var has = Object.prototype.hasOwnProperty;

	/**
	 * A data structure which is a combination of an array and a set. Adding a new
	 * member is O(1), testing for membership is O(1), and finding the index of an
	 * element is O(1). Removing elements from the set is not supported. Only
	 * strings are supported for membership.
	 */
	function ArraySet() {
	  this._array = [];
	  this._set = Object.create(null);
	}

	/**
	 * Static method for creating ArraySet instances from an existing array.
	 */
	ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
	  var set = new ArraySet();
	  for (var i = 0, len = aArray.length; i < len; i++) {
	    set.add(aArray[i], aAllowDuplicates);
	  }
	  return set;
	};

	/**
	 * Return how many unique items are in this ArraySet. If duplicates have been
	 * added, than those do not count towards the size.
	 *
	 * @returns Number
	 */
	ArraySet.prototype.size = function ArraySet_size() {
	  return Object.getOwnPropertyNames(this._set).length;
	};

	/**
	 * Add the given string to this set.
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
	  var sStr = util.toSetString(aStr);
	  var isDuplicate = has.call(this._set, sStr);
	  var idx = this._array.length;
	  if (!isDuplicate || aAllowDuplicates) {
	    this._array.push(aStr);
	  }
	  if (!isDuplicate) {
	    this._set[sStr] = idx;
	  }
	};

	/**
	 * Is the given string a member of this set?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.has = function ArraySet_has(aStr) {
	  var sStr = util.toSetString(aStr);
	  return has.call(this._set, sStr);
	};

	/**
	 * What is the index of the given string in the array?
	 *
	 * @param String aStr
	 */
	ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
	  var sStr = util.toSetString(aStr);
	  if (has.call(this._set, sStr)) {
	    return this._set[sStr];
	  }
	  throw new Error('"' + aStr + '" is not in the set.');
	};

	/**
	 * What is the element at the given index?
	 *
	 * @param Number aIdx
	 */
	ArraySet.prototype.at = function ArraySet_at(aIdx) {
	  if (aIdx >= 0 && aIdx < this._array.length) {
	    return this._array[aIdx];
	  }
	  throw new Error('No element indexed by ' + aIdx);
	};

	/**
	 * Returns the array representation of this set (which has the proper indices
	 * indicated by indexOf). Note that this is a copy of the internal array used
	 * for storing the members so that no one can mess with internal state.
	 */
	ArraySet.prototype.toArray = function ArraySet_toArray() {
	  return this._array.slice();
	};

	exports.ArraySet = ArraySet;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 *
	 * Based on the Base 64 VLQ implementation in Closure Compiler:
	 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
	 *
	 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *  * Redistributions of source code must retain the above copyright
	 *    notice, this list of conditions and the following disclaimer.
	 *  * Redistributions in binary form must reproduce the above
	 *    copyright notice, this list of conditions and the following
	 *    disclaimer in the documentation and/or other materials provided
	 *    with the distribution.
	 *  * Neither the name of Google Inc. nor the names of its
	 *    contributors may be used to endorse or promote products derived
	 *    from this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	var base64 = __webpack_require__(6);

	// A single base 64 digit can contain 6 bits of data. For the base 64 variable
	// length quantities we use in the source map spec, the first bit is the sign,
	// the next four bits are the actual value, and the 6th bit is the
	// continuation bit. The continuation bit tells us whether there are more
	// digits in this value following this digit.
	//
	//   Continuation
	//   |    Sign
	//   |    |
	//   V    V
	//   101011

	var VLQ_BASE_SHIFT = 5;

	// binary: 100000
	var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

	// binary: 011111
	var VLQ_BASE_MASK = VLQ_BASE - 1;

	// binary: 100000
	var VLQ_CONTINUATION_BIT = VLQ_BASE;

	/**
	 * Converts from a two-complement value to a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
	 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
	 */
	function toVLQSigned(aValue) {
	  return aValue < 0
	    ? ((-aValue) << 1) + 1
	    : (aValue << 1) + 0;
	}

	/**
	 * Converts to a two-complement value from a value where the sign bit is
	 * placed in the least significant bit.  For example, as decimals:
	 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
	 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
	 */
	function fromVLQSigned(aValue) {
	  var isNegative = (aValue & 1) === 1;
	  var shifted = aValue >> 1;
	  return isNegative
	    ? -shifted
	    : shifted;
	}

	/**
	 * Returns the base 64 VLQ encoded value.
	 */
	exports.encode = function base64VLQ_encode(aValue) {
	  var encoded = "";
	  var digit;

	  var vlq = toVLQSigned(aValue);

	  do {
	    digit = vlq & VLQ_BASE_MASK;
	    vlq >>>= VLQ_BASE_SHIFT;
	    if (vlq > 0) {
	      // There are still more digits in this value, so we must make sure the
	      // continuation bit is marked.
	      digit |= VLQ_CONTINUATION_BIT;
	    }
	    encoded += base64.encode(digit);
	  } while (vlq > 0);

	  return encoded;
	};

	/**
	 * Decodes the next base 64 VLQ value from the given string and returns the
	 * value and the rest of the string via the out parameter.
	 */
	exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
	  var strLen = aStr.length;
	  var result = 0;
	  var shift = 0;
	  var continuation, digit;

	  do {
	    if (aIndex >= strLen) {
	      throw new Error("Expected more digits in base 64 VLQ value.");
	    }

	    digit = base64.decode(aStr.charCodeAt(aIndex++));
	    if (digit === -1) {
	      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
	    }

	    continuation = !!(digit & VLQ_CONTINUATION_BIT);
	    digit &= VLQ_BASE_MASK;
	    result = result + (digit << shift);
	    shift += VLQ_BASE_SHIFT;
	  } while (continuation);

	  aOutParam.value = fromVLQSigned(result);
	  aOutParam.rest = aIndex;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

	/**
	 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
	 */
	exports.encode = function (number) {
	  if (0 <= number && number < intToCharMap.length) {
	    return intToCharMap[number];
	  }
	  throw new TypeError("Must be between 0 and 63: " + number);
	};

	/**
	 * Decode a single base 64 character code digit to an integer. Returns -1 on
	 * failure.
	 */
	exports.decode = function (charCode) {
	  var bigA = 65;     // 'A'
	  var bigZ = 90;     // 'Z'

	  var littleA = 97;  // 'a'
	  var littleZ = 122; // 'z'

	  var zero = 48;     // '0'
	  var nine = 57;     // '9'

	  var plus = 43;     // '+'
	  var slash = 47;    // '/'

	  var littleOffset = 26;
	  var numberOffset = 52;

	  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
	  if (bigA <= charCode && charCode <= bigZ) {
	    return (charCode - bigA);
	  }

	  // 26 - 51: abcdefghijklmnopqrstuvwxyz
	  if (littleA <= charCode && charCode <= littleZ) {
	    return (charCode - littleA + littleOffset);
	  }

	  // 52 - 61: 0123456789
	  if (zero <= charCode && charCode <= nine) {
	    return (charCode - zero + numberOffset);
	  }

	  // 62: +
	  if (charCode == plus) {
	    return 62;
	  }

	  // 63: /
	  if (charCode == slash) {
	    return 63;
	  }

	  // Invalid base64 digit.
	  return -1;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* -*- Mode: js; js-indent-level: 2; -*- */
	/*
	 * Copyright 2011 Mozilla Foundation and contributors
	 * Licensed under the New BSD license. See LICENSE or:
	 * http://opensource.org/licenses/BSD-3-Clause
	 */

	// It turns out that some (most?) JavaScript engines don't self-host
	// `Array.prototype.sort`. This makes sense because C++ will likely remain
	// faster than JS when doing raw CPU-intensive sorting. However, when using a
	// custom comparator function, calling back and forth between the VM's C++ and
	// JIT'd JS is rather slow *and* loses JIT type information, resulting in
	// worse generated code for the comparator function than would be optimal. In
	// fact, when sorting with a comparator, these costs outweigh the benefits of
	// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
	// a ~3500ms mean speed-up in `bench/bench.html`.

	/**
	 * Swap the elements indexed by `x` and `y` in the array `ary`.
	 *
	 * @param {Array} ary
	 *        The array.
	 * @param {Number} x
	 *        The index of the first item.
	 * @param {Number} y
	 *        The index of the second item.
	 */
	function swap(ary, x, y) {
	  var temp = ary[x];
	  ary[x] = ary[y];
	  ary[y] = temp;
	}

	/**
	 * Returns a random integer within the range `low .. high` inclusive.
	 *
	 * @param {Number} low
	 *        The lower bound on the range.
	 * @param {Number} high
	 *        The upper bound on the range.
	 */
	function randomIntInRange(low, high) {
	  return Math.round(low + (Math.random() * (high - low)));
	}

	/**
	 * The Quick Sort algorithm.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 * @param {Number} p
	 *        Start index of the array
	 * @param {Number} r
	 *        End index of the array
	 */
	function doQuickSort(ary, comparator, p, r) {
	  // If our lower bound is less than our upper bound, we (1) partition the
	  // array into two pieces and (2) recurse on each half. If it is not, this is
	  // the empty array and our base case.

	  if (p < r) {
	    // (1) Partitioning.
	    //
	    // The partitioning chooses a pivot between `p` and `r` and moves all
	    // elements that are less than or equal to the pivot to the before it, and
	    // all the elements that are greater than it after it. The effect is that
	    // once partition is done, the pivot is in the exact place it will be when
	    // the array is put in sorted order, and it will not need to be moved
	    // again. This runs in O(n) time.

	    // Always choose a random pivot so that an input array which is reverse
	    // sorted does not cause O(n^2) running time.
	    var pivotIndex = randomIntInRange(p, r);
	    var i = p - 1;

	    swap(ary, pivotIndex, r);
	    var pivot = ary[r];

	    // Immediately after `j` is incremented in this loop, the following hold
	    // true:
	    //
	    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
	    //
	    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
	    for (var j = p; j < r; j++) {
	      if (comparator(ary[j], pivot) <= 0) {
	        i += 1;
	        swap(ary, i, j);
	      }
	    }

	    swap(ary, i + 1, j);
	    var q = i + 1;

	    // (2) Recurse on each half.

	    doQuickSort(ary, comparator, p, q - 1);
	    doQuickSort(ary, comparator, q + 1, r);
	  }
	}

	/**
	 * Sort the given array in-place with the given comparator function.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 */
	exports.quickSort = function (ary, comparator) {
	  doQuickSort(ary, comparator, 0, ary.length - 1);
	};


/***/ }
/******/ ])
});
;

/***/ }),

/***/ "./src/simpleClientLogger.js":
/*!***********************************!*\
  !*** ./src/simpleClientLogger.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sourcemapped_stacktrace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sourcemapped-stacktrace */ "./node_modules/sourcemapped-stacktrace/dist/sourcemapped-stacktrace.js");
/* harmony import */ var sourcemapped_stacktrace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sourcemapped_stacktrace__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var batchSendInterval = 10000;
var defaultOptions = {
  appName: 'Not Specified',
  maxMessagesPerInterval: 3,
  serverCallFunction: null,
  filters: {
    ignoredErrors: []
  }
};

var SimpleClientLogger =
/*#__PURE__*/
function () {
  function SimpleClientLogger(options) {
    _classCallCheck(this, SimpleClientLogger);

    this.options = Object.assign(options, defaultOptions);
    this.errorCache = [];
    this.sendInterval = null;
  }

  _createClass(SimpleClientLogger, [{
    key: "init",
    value: function init() {
      var _this = this;

      this._addGlobalErrorHandler();

      this.sendInterval = setInterval(function () {
        _this._sendBatch();
      }, batchSendInterval);
    }
  }, {
    key: "_sendBatch",
    value: function _sendBatch() {
      if (this.errorCache.length === 0) {
        // eslint-disable-next-line
        console.log("LOGGER: No errors to send.");
        return;
      }

      if (this.options.serverCallFunction) {
        this.options.serverCallFunction.call(this, this.errorCache);
      } else {
        // eslint-disable-next-line
        console.log("LOGGER: ".concat(this.errorCache));
      }

      this.errorCache = [];
    }
  }, {
    key: "_addError",
    value: function _addError(message) {
      if (this.errorCache.length > this.maxMessagesPerInterval) {
        // don't add any more errors to the sending batch
        return;
      }

      this.errorCache.push(message);
    }
  }, {
    key: "_addGlobalErrorHandler",
    value: function _addGlobalErrorHandler() {
      var self = this;

      window.onerror = function (msg, url, lineNo, columnNo, error) {
        var string = msg.toLowerCase();
        var substring = "script error";

        if (string.indexOf(substring) > -1) {// don't report errors getting scripts.  
          // This could be EWN
          //alert('Script Error: See Browser Console for Detail');
        } else {
          sourcemapped_stacktrace__WEBPACK_IMPORTED_MODULE_0___default.a.mapStackTrace(error.stack, function (mappedStack) {
            var messageObject = {
              message: msg,
              url: url,
              lineNo: lineNo,
              columnNo: columnNo,
              error: mappedStack.join('/n'),
              userInfo: {}
            }; // var userInfo = {};
            // if (app && app.stores && app.stores.userProfile) {
            // } else if (appConfig) {
            //     userInfo.ubiNumber = appConfig.ubiNumber;
            // } 
            // messageObject.userInfo = userInfo;

            var message = JSON.stringify(messageObject);

            self._addError.call(self, message);
          });
        }

        return false;
      };
    }
  }]);

  return SimpleClientLogger;
}();

/* harmony default export */ __webpack_exports__["default"] = (SimpleClientLogger);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvdXJjZW1hcHBlZC1zdGFja3RyYWNlL2Rpc3Qvc291cmNlbWFwcGVkLXN0YWNrdHJhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXBsZUNsaWVudExvZ2dlci5qcyJdLCJuYW1lcyI6WyJiYXRjaFNlbmRJbnRlcnZhbCIsImRlZmF1bHRPcHRpb25zIiwiYXBwTmFtZSIsIm1heE1lc3NhZ2VzUGVySW50ZXJ2YWwiLCJzZXJ2ZXJDYWxsRnVuY3Rpb24iLCJmaWx0ZXJzIiwiaWdub3JlZEVycm9ycyIsIlNpbXBsZUNsaWVudExvZ2dlciIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJlcnJvckNhY2hlIiwic2VuZEludGVydmFsIiwiX2FkZEdsb2JhbEVycm9ySGFuZGxlciIsInNldEludGVydmFsIiwiX3NlbmRCYXRjaCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjYWxsIiwibWVzc2FnZSIsInB1c2giLCJzZWxmIiwid2luZG93Iiwib25lcnJvciIsIm1zZyIsInVybCIsImxpbmVObyIsImNvbHVtbk5vIiwiZXJyb3IiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJzbSIsIm1hcFN0YWNrVHJhY2UiLCJzdGFjayIsIm1hcHBlZFN0YWNrIiwibWVzc2FnZU9iamVjdCIsImpvaW4iLCJ1c2VySW5mbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJfYWRkRXJyb3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3VDO0FBQzdDLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxNQUFNLEVBQUU7QUFDcEQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFQUFxRSxZQUFZLEdBQUc7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZCQUE2QjtBQUMzQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUMsZUFBZSw0Q0FBNEM7QUFDM0QsZUFBZSw0Q0FBNEM7QUFDM0QsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGLE9BQU87QUFDUDtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVELFlBQVk7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0NBQXdDO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUJBQW1CLEVBQUU7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQyxzQkFBc0IsK0NBQStDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjs7QUFFakIsb0JBQW9CO0FBQ3BCLHFCQUFxQjs7QUFFckIsaUJBQWlCO0FBQ2pCLGlCQUFpQjs7QUFFakIsaUJBQWlCO0FBQ2pCLGtCQUFrQjs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQjtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQjtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzUyRUE7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxLQUExQjtBQUNBLElBQU1DLGNBQWMsR0FBRztBQUNuQkMsU0FBTyxFQUFFLGVBRFU7QUFFbkJDLHdCQUFzQixFQUFFLENBRkw7QUFHbkJDLG9CQUFrQixFQUFFLElBSEQ7QUFJbkJDLFNBQU8sRUFBRTtBQUNMQyxpQkFBYSxFQUFFO0FBRFY7QUFKVSxDQUF2Qjs7SUFTTUMsa0I7OztBQUNGLDhCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtBLE9BQUwsR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWNGLE9BQWQsRUFBdUJQLGNBQXZCLENBQWY7QUFDQSxTQUFLVSxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNIOzs7OzJCQUVNO0FBQUE7O0FBQ0gsV0FBS0Msc0JBQUw7O0FBQ0EsV0FBS0QsWUFBTCxHQUFvQkUsV0FBVyxDQUFDLFlBQU07QUFDbEMsYUFBSSxDQUFDQyxVQUFMO0FBQ0gsT0FGOEIsRUFFNUJmLGlCQUY0QixDQUEvQjtBQUdIOzs7aUNBRVk7QUFDVCxVQUFJLEtBQUtXLFVBQUwsQ0FBZ0JLLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQzlCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUjtBQUNBO0FBQ0g7O0FBRUQsVUFBSSxLQUFLVixPQUFMLENBQWFKLGtCQUFqQixFQUFxQztBQUNqQyxhQUFLSSxPQUFMLENBQWFKLGtCQUFiLENBQWdDZSxJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQyxLQUFLUixVQUFoRDtBQUNILE9BRkQsTUFFTztBQUNIO0FBQ0FNLGVBQU8sQ0FBQ0MsR0FBUixtQkFBdUIsS0FBS1AsVUFBNUI7QUFDSDs7QUFFRCxXQUFLQSxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7Ozs4QkFFU1MsTyxFQUFTO0FBQ2YsVUFBSSxLQUFLVCxVQUFMLENBQWdCSyxNQUFoQixHQUF5QixLQUFLYixzQkFBbEMsRUFBMEQ7QUFDdEQ7QUFDQTtBQUNIOztBQUVELFdBQUtRLFVBQUwsQ0FBZ0JVLElBQWhCLENBQXFCRCxPQUFyQjtBQUNIOzs7NkNBRXdCO0FBQ3JCLFVBQU1FLElBQUksR0FBRyxJQUFiOztBQUNBQyxZQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxNQUFwQixFQUE0QkMsUUFBNUIsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzFELFlBQU1DLE1BQU0sR0FBR0wsR0FBRyxDQUFDTSxXQUFKLEVBQWY7QUFDQSxZQUFNQyxTQUFTLEdBQUcsY0FBbEI7O0FBQ0EsWUFBSUYsTUFBTSxDQUFDRyxPQUFQLENBQWVELFNBQWYsSUFBNEIsQ0FBQyxDQUFqQyxFQUFvQyxDQUNoQztBQUNBO0FBRUE7QUFDSCxTQUxELE1BS087QUFDSEUsd0VBQUUsQ0FBQ0MsYUFBSCxDQUFpQk4sS0FBSyxDQUFDTyxLQUF2QixFQUE4QixVQUFDQyxXQUFELEVBQWlCO0FBRTNDLGdCQUFNQyxhQUFhLEdBQUc7QUFDbEJsQixxQkFBTyxFQUFFSyxHQURTO0FBRWxCQyxpQkFBRyxFQUFFQSxHQUZhO0FBR2xCQyxvQkFBTSxFQUFFQSxNQUhVO0FBSWxCQyxzQkFBUSxFQUFFQSxRQUpRO0FBS2xCQyxtQkFBSyxFQUFFUSxXQUFXLENBQUNFLElBQVosQ0FBaUIsSUFBakIsQ0FMVztBQU1sQkMsc0JBQVEsRUFBRTtBQU5RLGFBQXRCLENBRjJDLENBVzNDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBTXBCLE9BQU8sR0FBR3FCLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixhQUFmLENBQWhCOztBQUVBaEIsZ0JBQUksQ0FBQ3FCLFNBQUwsQ0FBZXhCLElBQWYsQ0FBb0JHLElBQXBCLEVBQTBCRixPQUExQjtBQUNILFdBdEJEO0FBdUJIOztBQUVELGVBQU8sS0FBUDtBQUNILE9BbkNEO0FBb0NIOzs7Ozs7QUFHVWIsaUZBQWYsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NpbXBsZUNsaWVudExvZ2dlci5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNvdXJjZU1hcHBlZFN0YWNrVHJhY2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic291cmNlTWFwcGVkU3RhY2tUcmFjZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187Lypcblx0ICogc291cmNlbWFwcGVkLXN0YWNrdHJhY2UuanNcblx0ICogY3JlYXRlZCBieSBKYW1lcyBTYWx0ZXIgPGl0ZXJhdGlvbkBnbWFpbC5jb20+ICgyMDE0KVxuXHQgKlxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vbm92b2NhaW5lL3NvdXJjZW1hcHBlZC1zdGFja3RyYWNlXG5cdCAqXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuXHQgKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG5cdCAqL1xuXG5cdC8qZ2xvYmFsIGRlZmluZSAqL1xuXG5cdC8vIG5vdGUgd2Ugb25seSBpbmNsdWRlIHNvdXJjZS1tYXAtY29uc3VtZXIsIG5vdCB0aGUgd2hvbGUgc291cmNlLW1hcCBsaWJyYXJ5LFxuXHQvLyB3aGljaCBpbmNsdWRlcyBnZWFyIGZvciBnZW5lcmF0aW5nIHNvdXJjZSBtYXBzIHRoYXQgd2UgZG9uJ3QgbmVlZFxuXHQhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbX193ZWJwYWNrX3JlcXVpcmVfXygxKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24oc291cmNlX21hcF9jb25zdW1lcikge1xuXG5cdCAgdmFyIGdsb2JhbF9tYXBGb3JVcmkgPSB7fTtcblxuXHQgIC8qKlxuXHQgICAqIFJlLW1hcCBlbnRyaWVzIGluIGEgc3RhY2t0cmFjZSB1c2luZyBzb3VyY2VtYXBzIGlmIGF2YWlsYWJsZS5cblx0ICAgKlxuXHQgICAqIEBwYXJhbSB7QXJyYXl9IHN0YWNrIC0gQXJyYXkgb2Ygc3RyaW5ncyBmcm9tIHRoZSBicm93c2VyJ3Mgc3RhY2tcblx0ICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLiBDdXJyZW50bHkgb25seSBDaHJvbWVcblx0ICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCBpcyBzdXBwb3J0ZWQuXG5cdCAgICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSAtIENhbGxiYWNrIGludm9rZWQgd2l0aCB0aGUgdHJhbnNmb3JtZWQgc3RhY2t0cmFjZVxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAoYW4gQXJyYXkgb2YgU3RyaW5ncykgcGFzc2VkIGFzIHRoZSBmaXJzdFxuXHQgICAqICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudFxuXHQgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gLSBPcHRpb25hbCBvcHRpb25zIG9iamVjdC5cblx0ICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0cy5maWx0ZXJdIC0gRmlsdGVyIGZ1bmN0aW9uIGFwcGxpZWQgdG8gZWFjaCBzdGFja1RyYWNlIGxpbmUuXG5cdCAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmVzIHdoaWNoIGRvIG5vdCBwYXNzIHRoZSBmaWx0ZXIgd29uJ3QgYmUgcHJvY2Vzc2VzZC5cblx0ICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmNhY2hlR2xvYmFsbHldIC0gV2hldGhlciB0byBjYWNoZSBzb3VyY2VtYXBzIGdsb2JhbGx5IGFjcm9zcyBtdWx0aXBsZSBjYWxscy5cblx0ICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN5bmNdIC0gV2hldGhlciB0byB1c2Ugc3luY2hyb25vdXMgYWpheCB0byBsb2FkIHRoZSBzb3VyY2VtYXBzLlxuXHQgICAqL1xuXHQgIHZhciBtYXBTdGFja1RyYWNlID0gZnVuY3Rpb24oc3RhY2ssIGRvbmUsIG9wdHMpIHtcblx0ICAgIHZhciBsaW5lcztcblx0ICAgIHZhciBsaW5lO1xuXHQgICAgdmFyIG1hcEZvclVyaSA9IHt9O1xuXHQgICAgdmFyIHJvd3MgPSB7fTtcblx0ICAgIHZhciBmaWVsZHM7XG5cdCAgICB2YXIgdXJpO1xuXHQgICAgdmFyIGV4cGVjdGVkX2ZpZWxkcztcblx0ICAgIHZhciByZWdleDtcblx0ICAgIHZhciBza2lwX2xpbmVzO1xuXG5cdCAgICB2YXIgZmV0Y2hlciA9IG5ldyBGZXRjaGVyKG9wdHMpO1xuXG5cdCAgICBpZiAoaXNDaHJvbWVPckVkZ2UoKSB8fCBpc0lFMTFQbHVzKCkpIHtcblx0ICAgICAgcmVnZXggPSAvXiArYXQuK1xcKCguKik6KFswLTldKyk6KFswLTldKykvO1xuXHQgICAgICBleHBlY3RlZF9maWVsZHMgPSA0O1xuXHQgICAgICAvLyAoc2tpcCBmaXJzdCBsaW5lIGNvbnRhaW5pbmcgZXhjZXB0aW9uIG1lc3NhZ2UpXG5cdCAgICAgIHNraXBfbGluZXMgPSAxO1xuXHQgICAgfSBlbHNlIGlmIChpc0ZpcmVmb3goKSB8fCBpc1NhZmFyaSgpKSB7XG5cdCAgICAgIHJlZ2V4ID0gL0AoLiopOihbMC05XSspOihbMC05XSspLztcblx0ICAgICAgZXhwZWN0ZWRfZmllbGRzID0gNDtcblx0ICAgICAgc2tpcF9saW5lcyA9IDA7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGJyb3dzZXIgOihcIik7XG5cdCAgICB9XG5cblx0ICAgIGxpbmVzID0gc3RhY2suc3BsaXQoXCJcXG5cIikuc2xpY2Uoc2tpcF9saW5lcyk7XG5cblx0ICAgIGZvciAodmFyIGk9MDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIGxpbmUgPSBsaW5lc1tpXTtcblx0ICAgICAgaWYgKCBvcHRzICYmIG9wdHMuZmlsdGVyICYmICFvcHRzLmZpbHRlcihsaW5lKSApIGNvbnRpbnVlO1xuXHQgICAgICBcblx0ICAgICAgZmllbGRzID0gbGluZS5tYXRjaChyZWdleCk7XG5cdCAgICAgIGlmIChmaWVsZHMgJiYgZmllbGRzLmxlbmd0aCA9PT0gZXhwZWN0ZWRfZmllbGRzKSB7XG5cdCAgICAgICAgcm93c1tpXSA9IGZpZWxkcztcblx0ICAgICAgICB1cmkgPSBmaWVsZHNbMV07XG5cdCAgICAgICAgaWYgKCF1cmkubWF0Y2goLzxhbm9ueW1vdXM+LykpIHtcblx0ICAgICAgICAgIGZldGNoZXIuZmV0Y2hTY3JpcHQodXJpKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgZmV0Y2hlci5zZW0ud2hlblJlYWR5KGZ1bmN0aW9uKCkge1xuXHQgICAgICB2YXIgcmVzdWx0ID0gcHJvY2Vzc1NvdXJjZU1hcHMobGluZXMsIHJvd3MsIGZldGNoZXIubWFwRm9yVXJpKTtcblx0ICAgICAgZG9uZShyZXN1bHQpO1xuXHQgICAgfSk7XG5cdCAgfTtcblxuXHQgIHZhciBpc0Nocm9tZU9yRWRnZSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xO1xuXHQgIH07XG5cblx0ICB2YXIgaXNGaXJlZm94ID0gZnVuY3Rpb24oKSB7XG5cdCAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuXHQgIH07ICBcblxuXHQgIHZhciBpc1NhZmFyaSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmknKSA+IC0xO1xuXHQgIH07XG5cdFx0XHRcblx0ICB2YXIgaXNJRTExUGx1cyA9IGZ1bmN0aW9uKCkge1xuXHQgICBcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudE1vZGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDExO1xuXHQgIH07XG5cblxuXHQgIHZhciBTZW1hcGhvcmUgPSBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMuY291bnQgPSAwO1xuXHQgICAgdGhpcy5wZW5kaW5nID0gW107XG5cdCAgfTtcblxuXHQgIFNlbWFwaG9yZS5wcm90b3R5cGUuaW5jciA9IGZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5jb3VudCsrO1xuXHQgIH07XG5cblx0ICBTZW1hcGhvcmUucHJvdG90eXBlLmRlY3IgPSBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMuY291bnQtLTtcblx0ICAgIHRoaXMuZmx1c2goKTtcblx0ICB9O1xuXG5cdCAgU2VtYXBob3JlLnByb3RvdHlwZS53aGVuUmVhZHkgPSBmdW5jdGlvbihmbikge1xuXHQgICAgdGhpcy5wZW5kaW5nLnB1c2goZm4pO1xuXHQgICAgdGhpcy5mbHVzaCgpO1xuXHQgIH07XG5cblx0ICBTZW1hcGhvcmUucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24oKSB7XG5cdCAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkge1xuXHQgICAgICAgIHRoaXMucGVuZGluZy5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7IGZuKCk7IH0pO1xuXHQgICAgICAgIHRoaXMucGVuZGluZyA9IFtdO1xuXHQgICAgfVxuXHQgIH07XG5cblxuXHQgIHZhciBGZXRjaGVyID0gZnVuY3Rpb24ob3B0cykge1xuXHQgICAgdGhpcy5zZW0gPSBuZXcgU2VtYXBob3JlKCk7XG5cdCAgICB0aGlzLnN5bmMgPSBvcHRzICYmIG9wdHMuc3luYztcblx0ICAgIHRoaXMubWFwRm9yVXJpID0gb3B0cyAmJiBvcHRzLmNhY2hlR2xvYmFsbHkgPyBnbG9iYWxfbWFwRm9yVXJpIDoge307XG5cdCAgfTtcblxuXHQgIEZldGNoZXIucHJvdG90eXBlLmFqYXggPSBmdW5jdGlvbih1cmksIGNhbGxiYWNrKSB7XG5cdCAgICB2YXIgeGhyID0gY3JlYXRlWE1MSFRUUE9iamVjdCgpO1xuXHQgICAgdmFyIHRoYXQgPSB0aGlzO1xuXHQgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuXHQgICAgICAgIGNhbGxiYWNrLmNhbGwodGhhdCwgeGhyLCB1cmkpO1xuXHQgICAgICB9XG5cdCAgICB9O1xuXHQgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJpLCAhdGhpcy5zeW5jKTtcblx0ICAgIHhoci5zZW5kKCk7XG5cdCAgfVxuXG5cdCAgRmV0Y2hlci5wcm90b3R5cGUuZmV0Y2hTY3JpcHQgPSBmdW5jdGlvbih1cmkpIHtcblx0ICAgIGlmICghKHVyaSBpbiB0aGlzLm1hcEZvclVyaSkpIHtcblx0ICAgICAgdGhpcy5zZW0uaW5jcigpO1xuXHQgICAgICB0aGlzLm1hcEZvclVyaVt1cmldID0gbnVsbDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgdGhpcy5hamF4KHVyaSwgdGhpcy5vblNjcmlwdExvYWQpO1xuXHQgIH07XG5cblx0ICB2YXIgYWJzVXJsUmVnZXggPSBuZXcgUmVnRXhwKCdeKD86W2Etel0rOik/Ly8nLCAnaScpO1xuXG5cdCAgRmV0Y2hlci5wcm90b3R5cGUub25TY3JpcHRMb2FkID0gZnVuY3Rpb24oeGhyLCB1cmkpIHtcblx0ICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgKHVyaS5zbGljZSgwLCA3KSA9PT0gXCJmaWxlOi8vXCIgJiYgeGhyLnN0YXR1cyA9PT0gMCkpIHtcblx0ICAgICAgLy8gZmluZCAubWFwIGluIGZpbGUuXG5cdCAgICAgIC8vXG5cdCAgICAgIC8vIGF0dGVtcHQgdG8gZmluZCBpdCBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGZpbGUsIGJ1dCB0b2xlcmF0ZSB0cmFpbGluZ1xuXHQgICAgICAvLyB3aGl0ZXNwYWNlIGluc2VydGVkIGJ5IHNvbWUgcGFja2Vycy5cblx0ICAgICAgdmFyIG1hdGNoID0geGhyLnJlc3BvbnNlVGV4dC5tYXRjaChcIi8vIyBbc11vdXJjZU1hcHBpbmdVUkw9KC4qKVtcXFxcc10qJFwiLCBcIm1cIik7XG5cdCAgICAgIGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPT09IDIpIHtcblx0ICAgICAgICAvLyBnZXQgdGhlIG1hcFxuXHQgICAgICAgIHZhciBtYXBVcmkgPSBtYXRjaFsxXTtcblxuXHQgICAgICAgIHZhciBlbWJlZGRlZFNvdXJjZU1hcCA9IG1hcFVyaS5tYXRjaChcImRhdGE6YXBwbGljYXRpb24vanNvbjsoY2hhcnNldD1bXjtdKzspP2Jhc2U2NCwoLiopXCIpO1xuXG5cdCAgICAgICAgaWYgKGVtYmVkZGVkU291cmNlTWFwICYmIGVtYmVkZGVkU291cmNlTWFwWzJdKSB7XG5cdCAgICAgICAgICB0aGlzLm1hcEZvclVyaVt1cmldID0gbmV3IHNvdXJjZV9tYXBfY29uc3VtZXIuU291cmNlTWFwQ29uc3VtZXIoYXRvYihlbWJlZGRlZFNvdXJjZU1hcFsyXSkpO1xuXHQgICAgICAgICAgdGhpcy5zZW0uZGVjcigpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBpZiAoIWFic1VybFJlZ2V4LnRlc3QobWFwVXJpKSkge1xuXHQgICAgICAgICAgICAvLyByZWxhdGl2ZSB1cmw7IGFjY29yZGluZyB0byBzb3VyY2VtYXBzIHNwZWMgaXMgJ3NvdXJjZSBvcmlnaW4nXG5cdCAgICAgICAgICAgIHZhciBvcmlnaW47XG5cdCAgICAgICAgICAgIHZhciBsYXN0U2xhc2ggPSB1cmkubGFzdEluZGV4T2YoJy8nKTtcblx0ICAgICAgICAgICAgaWYgKGxhc3RTbGFzaCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgICBvcmlnaW4gPSB1cmkuc2xpY2UoMCwgbGFzdFNsYXNoICsgMSk7XG5cdCAgICAgICAgICAgICAgbWFwVXJpID0gb3JpZ2luICsgbWFwVXJpO1xuXHQgICAgICAgICAgICAgIC8vIG5vdGUgaWYgbGFzdFNsYXNoID09PSAtMSwgYWN0dWFsIHNjcmlwdCB1cmkgaGFzIG5vIHNsYXNoXG5cdCAgICAgICAgICAgICAgLy8gc29tZWhvdywgc28gbm8gd2F5IHRvIHVzZSBpdCBhcyBhIHByZWZpeC4uLiB3ZSBnaXZlIHVwIGFuZCB0cnlcblx0ICAgICAgICAgICAgICAvLyBhcyBhYnNvbHV0ZVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cblx0ICAgICAgICAgIHRoaXMuYWpheChtYXBVcmksIGZ1bmN0aW9uKHhocikge1xuXHQgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8IChtYXBVcmkuc2xpY2UoMCwgNykgPT09IFwiZmlsZTovL1wiICYmIHhoci5zdGF0dXMgPT09IDApKSB7XG5cdCAgICAgICAgICAgICAgdGhpcy5tYXBGb3JVcmlbdXJpXSA9IG5ldyBzb3VyY2VfbWFwX2NvbnN1bWVyLlNvdXJjZU1hcENvbnN1bWVyKHhoci5yZXNwb25zZVRleHQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2VtLmRlY3IoKTtcblx0ICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAvLyBubyBtYXBcblx0ICAgICAgICB0aGlzLnNlbS5kZWNyKCk7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIEhUVFAgZXJyb3IgZmV0Y2hpbmcgdXJpIG9mIHRoZSBzY3JpcHRcblx0ICAgICAgdGhpcy5zZW0uZGVjcigpO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICB2YXIgcHJvY2Vzc1NvdXJjZU1hcHMgPSBmdW5jdGlvbihsaW5lcywgcm93cywgbWFwRm9yVXJpKSB7XG5cdCAgICB2YXIgcmVzdWx0ID0gW107XG5cdCAgICB2YXIgbWFwO1xuXHQgICAgZm9yICh2YXIgaT0wOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIHJvdyA9IHJvd3NbaV07XG5cdCAgICAgIGlmIChyb3cpIHtcblx0ICAgICAgICB2YXIgdXJpID0gcm93WzFdO1xuXHQgICAgICAgIHZhciBsaW5lID0gcGFyc2VJbnQocm93WzJdLCAxMCk7XG5cdCAgICAgICAgdmFyIGNvbHVtbiA9IHBhcnNlSW50KHJvd1szXSwgMTApO1xuXHQgICAgICAgIG1hcCA9IG1hcEZvclVyaVt1cmldO1xuXG5cdCAgICAgICAgaWYgKG1hcCkge1xuXHQgICAgICAgICAgLy8gd2UgdGhpbmsgd2UgaGF2ZSBhIG1hcCBmb3IgdGhhdCB1cmkuIGNhbGwgc291cmNlLW1hcCBsaWJyYXJ5XG5cdCAgICAgICAgICB2YXIgb3JpZ1BvcyA9IG1hcC5vcmlnaW5hbFBvc2l0aW9uRm9yKFxuXHQgICAgICAgICAgICB7IGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uIH0pO1xuXHQgICAgICAgICAgcmVzdWx0LnB1c2goZm9ybWF0T3JpZ2luYWxQb3NpdGlvbihvcmlnUG9zLnNvdXJjZSxcblx0ICAgICAgICAgICAgb3JpZ1Bvcy5saW5lLCBvcmlnUG9zLmNvbHVtbiwgb3JpZ1Bvcy5uYW1lIHx8IG9yaWdOYW1lKGxpbmVzW2ldKSkpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyB3ZSBjYW4ndCBmaW5kIGEgbWFwIGZvciB0aGF0IHVybCwgYnV0IHdlIHBhcnNlZCB0aGUgcm93LlxuXHQgICAgICAgICAgLy8gcmVmb3JtYXQgdW5jaGFuZ2VkIGxpbmUgZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIHNvdXJjZW1hcHBlZFxuXHQgICAgICAgICAgLy8gbGluZXMuXG5cdCAgICAgICAgICByZXN1bHQucHVzaChmb3JtYXRPcmlnaW5hbFBvc2l0aW9uKHVyaSwgbGluZSwgY29sdW1uLCBvcmlnTmFtZShsaW5lc1tpXSkpKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgLy8gd2Ugd2VyZW4ndCBhYmxlIHRvIHBhcnNlIHRoZSByb3csIHB1c2ggYmFjayB3aGF0IHdlIHdlcmUgZ2l2ZW5cblx0ICAgICAgICByZXN1bHQucHVzaChsaW5lc1tpXSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHJlc3VsdDtcblx0ICB9O1xuXG5cdCAgZnVuY3Rpb24gb3JpZ05hbWUob3JpZ0xpbmUpIHtcblx0ICAgIHZhciBtYXRjaCA9IFN0cmluZyhvcmlnTGluZSkubWF0Y2goKGlzQ2hyb21lT3JFZGdlKCkgfHwgaXNJRTExUGx1cygpKSA/XG5cdCAgICAgIC8gK2F0ICsoW14gXSopLiovIDpcblx0ICAgICAgLyhbXkBdKilALiovKTtcblx0ICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcblx0ICB9XG5cblx0ICB2YXIgZm9ybWF0T3JpZ2luYWxQb3NpdGlvbiA9IGZ1bmN0aW9uKHNvdXJjZSwgbGluZSwgY29sdW1uLCBuYW1lKSB7XG5cdCAgICAvLyBtaW1pYyBjaHJvbWUncyBmb3JtYXRcblx0ICAgIHJldHVybiBcIiAgICBhdCBcIiArIChuYW1lID8gbmFtZSA6IFwiKHVua25vd24pXCIpICtcblx0ICAgICAgXCIgKFwiICsgc291cmNlICsgXCI6XCIgKyBsaW5lICsgXCI6XCIgKyBjb2x1bW4gKyBcIilcIjtcblx0ICB9O1xuXG5cdCAgLy8geG1saHR0cHJlcXVlc3QgYm9pbGVycGxhdGVcblx0ICB2YXIgWE1MSHR0cEZhY3RvcmllcyA9IFtcblx0XHRmdW5jdGlvbiAoKSB7cmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO30sXG5cdFx0ZnVuY3Rpb24gKCkge3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpO30sXG5cdFx0ZnVuY3Rpb24gKCkge3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMy5YTUxIVFRQXCIpO30sXG5cdFx0ZnVuY3Rpb24gKCkge3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO31cblx0ICBdO1xuXG5cdCAgZnVuY3Rpb24gY3JlYXRlWE1MSFRUUE9iamVjdCgpIHtcblx0ICAgICAgdmFyIHhtbGh0dHAgPSBmYWxzZTtcblx0ICAgICAgZm9yICh2YXIgaT0wO2k8WE1MSHR0cEZhY3Rvcmllcy5sZW5ndGg7aSsrKSB7XG5cdCAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgIHhtbGh0dHAgPSBYTUxIdHRwRmFjdG9yaWVzW2ldKCk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgYnJlYWs7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHhtbGh0dHA7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHtcblx0ICAgIG1hcFN0YWNrVHJhY2U6IG1hcFN0YWNrVHJhY2Vcblx0ICB9XG5cdH0uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyksIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcblxuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuXHQvKlxuXHQgKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcblx0ICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuXHQgKi9cblxuXHR2YXIgdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdHZhciBiaW5hcnlTZWFyY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHR2YXIgQXJyYXlTZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLkFycmF5U2V0O1xuXHR2YXIgYmFzZTY0VkxRID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0dmFyIHF1aWNrU29ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNykucXVpY2tTb3J0O1xuXG5cdGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXApIHtcblx0ICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcblx0ICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG5cdCAgICBzb3VyY2VNYXAgPSBKU09OLnBhcnNlKGFTb3VyY2VNYXAucmVwbGFjZSgvXlxcKVxcXVxcfScvLCAnJykpO1xuXHQgIH1cblxuXHQgIHJldHVybiBzb3VyY2VNYXAuc2VjdGlvbnMgIT0gbnVsbFxuXHQgICAgPyBuZXcgSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcClcblx0ICAgIDogbmV3IEJhc2ljU291cmNlTWFwQ29uc3VtZXIoc291cmNlTWFwKTtcblx0fVxuXG5cdFNvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAgPSBmdW5jdGlvbihhU291cmNlTWFwKSB7XG5cdCAgcmV0dXJuIEJhc2ljU291cmNlTWFwQ29uc3VtZXIuZnJvbVNvdXJjZU1hcChhU291cmNlTWFwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG5cdCAqL1xuXHRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG5cdC8vIGBfX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmQgYF9fb3JpZ2luYWxNYXBwaW5nc2AgYXJlIGFycmF5cyB0aGF0IGhvbGQgdGhlXG5cdC8vIHBhcnNlZCBtYXBwaW5nIGNvb3JkaW5hdGVzIGZyb20gdGhlIHNvdXJjZSBtYXAncyBcIm1hcHBpbmdzXCIgYXR0cmlidXRlLiBUaGV5XG5cdC8vIGFyZSBsYXppbHkgaW5zdGFudGlhdGVkLCBhY2Nlc3NlZCB2aWEgdGhlIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuXHQvLyBgX29yaWdpbmFsTWFwcGluZ3NgIGdldHRlcnMgcmVzcGVjdGl2ZWx5LCBhbmQgd2Ugb25seSBwYXJzZSB0aGUgbWFwcGluZ3Ncblx0Ly8gYW5kIGNyZWF0ZSB0aGVzZSBhcnJheXMgb25jZSBxdWVyaWVkIGZvciBhIHNvdXJjZSBsb2NhdGlvbi4gV2UganVtcCB0aHJvdWdoXG5cdC8vIHRoZXNlIGhvb3BzIGJlY2F1c2UgdGhlcmUgY2FuIGJlIG1hbnkgdGhvdXNhbmRzIG9mIG1hcHBpbmdzLCBhbmQgcGFyc2luZ1xuXHQvLyB0aGVtIGlzIGV4cGVuc2l2ZSwgc28gd2Ugb25seSB3YW50IHRvIGRvIGl0IGlmIHdlIG11c3QuXG5cdC8vXG5cdC8vIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheXMgaXMgb2YgdGhlIGZvcm06XG5cdC8vXG5cdC8vICAgICB7XG5cdC8vICAgICAgIGdlbmVyYXRlZExpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG5cdC8vICAgICAgIGdlbmVyYXRlZENvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBjb2RlLFxuXHQvLyAgICAgICBzb3VyY2U6IFRoZSBwYXRoIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSB0aGF0IGdlbmVyYXRlZCB0aGlzXG5cdC8vICAgICAgICAgICAgICAgY2h1bmsgb2YgY29kZSxcblx0Ly8gICAgICAgb3JpZ2luYWxMaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSB0aGF0XG5cdC8vICAgICAgICAgICAgICAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhpcyBjaHVuayBvZiBnZW5lcmF0ZWQgY29kZSxcblx0Ly8gICAgICAgb3JpZ2luYWxDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuXHQvLyAgICAgICAgICAgICAgICAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhpcyBjaHVuayBvZiBnZW5lcmF0ZWQgY29kZSxcblx0Ly8gICAgICAgbmFtZTogVGhlIG5hbWUgb2YgdGhlIG9yaWdpbmFsIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBjaHVuayBvZlxuXHQvLyAgICAgICAgICAgICBjb2RlLlxuXHQvLyAgICAgfVxuXHQvL1xuXHQvLyBBbGwgcHJvcGVydGllcyBleGNlcHQgZm9yIGBnZW5lcmF0ZWRMaW5lYCBhbmQgYGdlbmVyYXRlZENvbHVtbmAgY2FuIGJlXG5cdC8vIGBudWxsYC5cblx0Ly9cblx0Ly8gYF9nZW5lcmF0ZWRNYXBwaW5nc2AgaXMgb3JkZXJlZCBieSB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucy5cblx0Ly9cblx0Ly8gYF9vcmlnaW5hbE1hcHBpbmdzYCBpcyBvcmRlcmVkIGJ5IHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMuXG5cblx0U291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBudWxsO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnX2dlbmVyYXRlZE1hcHBpbmdzJywge1xuXHQgIGdldDogZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKCF0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MpIHtcblx0ICAgICAgdGhpcy5fcGFyc2VNYXBwaW5ncyh0aGlzLl9tYXBwaW5ncywgdGhpcy5zb3VyY2VSb290KTtcblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncztcblx0ICB9XG5cdH0pO1xuXG5cdFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX29yaWdpbmFsTWFwcGluZ3MgPSBudWxsO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnX29yaWdpbmFsTWFwcGluZ3MnLCB7XG5cdCAgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAoIXRoaXMuX19vcmlnaW5hbE1hcHBpbmdzKSB7XG5cdCAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncztcblx0ICB9XG5cdH0pO1xuXG5cdFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fY2hhcklzTWFwcGluZ1NlcGFyYXRvciA9XG5cdCAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBpbmRleCkge1xuXHQgICAgdmFyIGMgPSBhU3RyLmNoYXJBdChpbmRleCk7XG5cdCAgICByZXR1cm4gYyA9PT0gXCI7XCIgfHwgYyA9PT0gXCIsXCI7XG5cdCAgfTtcblxuXHQvKipcblx0ICogUGFyc2UgdGhlIG1hcHBpbmdzIGluIGEgc3RyaW5nIGluIHRvIGEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggd2UgY2FuIGVhc2lseVxuXHQgKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcblx0ICogYHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzYCBwcm9wZXJ0aWVzKS5cblx0ICovXG5cdFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG5cdCAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ViY2xhc3NlcyBtdXN0IGltcGxlbWVudCBfcGFyc2VNYXBwaW5nc1wiKTtcblx0ICB9O1xuXG5cdFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUiA9IDE7XG5cdFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSID0gMjtcblxuXHRTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCA9IDE7XG5cdFNvdXJjZU1hcENvbnN1bWVyLkxFQVNUX1VQUEVSX0JPVU5EID0gMjtcblxuXHQvKipcblx0ICogSXRlcmF0ZSBvdmVyIGVhY2ggbWFwcGluZyBiZXR3ZWVuIGFuIG9yaWdpbmFsIHNvdXJjZS9saW5lL2NvbHVtbiBhbmQgYVxuXHQgKiBnZW5lcmF0ZWQgbGluZS9jb2x1bW4gaW4gdGhpcyBzb3VyY2UgbWFwLlxuXHQgKlxuXHQgKiBAcGFyYW0gRnVuY3Rpb24gYUNhbGxiYWNrXG5cdCAqICAgICAgICBUaGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBlYWNoIG1hcHBpbmcuXG5cdCAqIEBwYXJhbSBPYmplY3QgYUNvbnRleHRcblx0ICogICAgICAgIE9wdGlvbmFsLiBJZiBzcGVjaWZpZWQsIHRoaXMgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIGB0aGlzYCBldmVyeVxuXHQgKiAgICAgICAgdGltZSB0aGF0IGBhQ2FsbGJhY2tgIGlzIGNhbGxlZC5cblx0ICogQHBhcmFtIGFPcmRlclxuXHQgKiAgICAgICAgRWl0aGVyIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgIG9yXG5cdCAqICAgICAgICBgU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVJgLiBTcGVjaWZpZXMgd2hldGhlciB5b3Ugd2FudCB0b1xuXHQgKiAgICAgICAgaXRlcmF0ZSBvdmVyIHRoZSBtYXBwaW5ncyBzb3J0ZWQgYnkgdGhlIGdlbmVyYXRlZCBmaWxlJ3MgbGluZS9jb2x1bW5cblx0ICogICAgICAgIG9yZGVyIG9yIHRoZSBvcmlnaW5hbCdzIHNvdXJjZS9saW5lL2NvbHVtbiBvcmRlciwgcmVzcGVjdGl2ZWx5LiBEZWZhdWx0cyB0b1xuXHQgKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUmAuXG5cdCAqL1xuXHRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZWFjaE1hcHBpbmcgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2VhY2hNYXBwaW5nKGFDYWxsYmFjaywgYUNvbnRleHQsIGFPcmRlcikge1xuXHQgICAgdmFyIGNvbnRleHQgPSBhQ29udGV4dCB8fCBudWxsO1xuXHQgICAgdmFyIG9yZGVyID0gYU9yZGVyIHx8IFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUjtcblxuXHQgICAgdmFyIG1hcHBpbmdzO1xuXHQgICAgc3dpdGNoIChvcmRlcikge1xuXHQgICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVI6XG5cdCAgICAgIG1hcHBpbmdzID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3M7XG5cdCAgICAgIGJyZWFrO1xuXHQgICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUjpcblx0ICAgICAgbWFwcGluZ3MgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzO1xuXHQgICAgICBicmVhaztcblx0ICAgIGRlZmF1bHQ6XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gb3JkZXIgb2YgaXRlcmF0aW9uLlwiKTtcblx0ICAgIH1cblxuXHQgICAgdmFyIHNvdXJjZVJvb3QgPSB0aGlzLnNvdXJjZVJvb3Q7XG5cdCAgICBtYXBwaW5ncy5tYXAoZnVuY3Rpb24gKG1hcHBpbmcpIHtcblx0ICAgICAgdmFyIHNvdXJjZSA9IG1hcHBpbmcuc291cmNlID09PSBudWxsID8gbnVsbCA6IHRoaXMuX3NvdXJjZXMuYXQobWFwcGluZy5zb3VyY2UpO1xuXHQgICAgICBpZiAoc291cmNlICE9IG51bGwgJiYgc291cmNlUm9vdCAhPSBudWxsKSB7XG5cdCAgICAgICAgc291cmNlID0gdXRpbC5qb2luKHNvdXJjZVJvb3QsIHNvdXJjZSk7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHtcblx0ICAgICAgICBzb3VyY2U6IHNvdXJjZSxcblx0ICAgICAgICBnZW5lcmF0ZWRMaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUsXG5cdCAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbixcblx0ICAgICAgICBvcmlnaW5hbExpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuXHQgICAgICAgIG9yaWdpbmFsQ29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uLFxuXHQgICAgICAgIG5hbWU6IG1hcHBpbmcubmFtZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9uYW1lcy5hdChtYXBwaW5nLm5hbWUpXG5cdCAgICAgIH07XG5cdCAgICB9LCB0aGlzKS5mb3JFYWNoKGFDYWxsYmFjaywgY29udGV4dCk7XG5cdCAgfTtcblxuXHQvKipcblx0ICogUmV0dXJucyBhbGwgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcblx0ICogbGluZSwgYW5kIGNvbHVtbiBwcm92aWRlZC4gSWYgbm8gY29sdW1uIGlzIHByb3ZpZGVkLCByZXR1cm5zIGFsbCBtYXBwaW5nc1xuXHQgKiBjb3JyZXNwb25kaW5nIHRvIGEgZWl0aGVyIHRoZSBsaW5lIHdlIGFyZSBzZWFyY2hpbmcgZm9yIG9yIHRoZSBuZXh0XG5cdCAqIGNsb3Nlc3QgbGluZSB0aGF0IGhhcyBhbnkgbWFwcGluZ3MuIE90aGVyd2lzZSwgcmV0dXJucyBhbGwgbWFwcGluZ3Ncblx0ICogY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gbGluZSBhbmQgZWl0aGVyIHRoZSBjb2x1bW4gd2UgYXJlIHNlYXJjaGluZyBmb3Jcblx0ICogb3IgdGhlIG5leHQgY2xvc2VzdCBjb2x1bW4gdGhhdCBoYXMgYW55IG9mZnNldHMuXG5cdCAqXG5cdCAqIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cblx0ICogICAtIGNvbHVtbjogT3B0aW9uYWwuIHRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG5cdCAqXG5cdCAqIGFuZCBhbiBhcnJheSBvZiBvYmplY3RzIGlzIHJldHVybmVkLCBlYWNoIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuXHQgKlxuXHQgKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuXHQgKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cblx0ICovXG5cdFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2FsbEdlbmVyYXRlZFBvc2l0aW9uc0ZvcihhQXJncykge1xuXHQgICAgdmFyIGxpbmUgPSB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKTtcblxuXHQgICAgLy8gV2hlbiB0aGVyZSBpcyBubyBleGFjdCBtYXRjaCwgQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nXG5cdCAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY2xvc2VzdCBtYXBwaW5nIGxlc3MgdGhhbiB0aGUgbmVlZGxlLiBCeVxuXHQgICAgLy8gc2V0dGluZyBuZWVkbGUub3JpZ2luYWxDb2x1bW4gdG8gMCwgd2UgdGh1cyBmaW5kIHRoZSBsYXN0IG1hcHBpbmcgZm9yXG5cdCAgICAvLyB0aGUgZ2l2ZW4gbGluZSwgcHJvdmlkZWQgc3VjaCBhIG1hcHBpbmcgZXhpc3RzLlxuXHQgICAgdmFyIG5lZWRsZSA9IHtcblx0ICAgICAgc291cmNlOiB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpLFxuXHQgICAgICBvcmlnaW5hbExpbmU6IGxpbmUsXG5cdCAgICAgIG9yaWdpbmFsQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicsIDApXG5cdCAgICB9O1xuXG5cdCAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcblx0ICAgICAgbmVlZGxlLnNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCBuZWVkbGUuc291cmNlKTtcblx0ICAgIH1cblx0ICAgIGlmICghdGhpcy5fc291cmNlcy5oYXMobmVlZGxlLnNvdXJjZSkpIHtcblx0ICAgICAgcmV0dXJuIFtdO1xuXHQgICAgfVxuXHQgICAgbmVlZGxlLnNvdXJjZSA9IHRoaXMuX3NvdXJjZXMuaW5kZXhPZihuZWVkbGUuc291cmNlKTtcblxuXHQgICAgdmFyIG1hcHBpbmdzID0gW107XG5cblx0ICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKG5lZWRsZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbmFsTGluZVwiLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5hbENvbHVtblwiLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCk7XG5cdCAgICBpZiAoaW5kZXggPj0gMCkge1xuXHQgICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG5cdCAgICAgIGlmIChhQXJncy5jb2x1bW4gPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgIHZhciBvcmlnaW5hbExpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZTtcblxuXHQgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgZWl0aGVyIHdlIHJ1biBvdXQgb2YgbWFwcGluZ3MsIG9yIHdlIHJ1biBpbnRvXG5cdCAgICAgICAgLy8gYSBtYXBwaW5nIGZvciBhIGRpZmZlcmVudCBsaW5lIHRoYW4gdGhlIG9uZSB3ZSBmb3VuZC4gU2luY2Vcblx0ICAgICAgICAvLyBtYXBwaW5ncyBhcmUgc29ydGVkLCB0aGlzIGlzIGd1YXJhbnRlZWQgdG8gZmluZCBhbGwgbWFwcGluZ3MgZm9yXG5cdCAgICAgICAgLy8gdGhlIGxpbmUgd2UgZm91bmQuXG5cdCAgICAgICAgd2hpbGUgKG1hcHBpbmcgJiYgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IG9yaWdpbmFsTGluZSkge1xuXHQgICAgICAgICAgbWFwcGluZ3MucHVzaCh7XG5cdCAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG5cdCAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuXHQgICAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG5cdCAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHZhciBvcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cblx0ICAgICAgICAvLyBJdGVyYXRlIHVudGlsIGVpdGhlciB3ZSBydW4gb3V0IG9mIG1hcHBpbmdzLCBvciB3ZSBydW4gaW50b1xuXHQgICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2Ugd2VyZSBzZWFyY2hpbmcgZm9yLlxuXHQgICAgICAgIC8vIFNpbmNlIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHRoaXMgaXMgZ3VhcmFudGVlZCB0byBmaW5kIGFsbCBtYXBwaW5ncyBmb3Jcblx0ICAgICAgICAvLyB0aGUgbGluZSB3ZSBhcmUgc2VhcmNoaW5nIGZvci5cblx0ICAgICAgICB3aGlsZSAobWFwcGluZyAmJlxuXHQgICAgICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gbGluZSAmJlxuXHQgICAgICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uID09IG9yaWdpbmFsQ29sdW1uKSB7XG5cdCAgICAgICAgICBtYXBwaW5ncy5wdXNoKHtcblx0ICAgICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcblx0ICAgICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkQ29sdW1uJywgbnVsbCksXG5cdCAgICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcblx0ICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1srK2luZGV4XTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIG1hcHBpbmdzO1xuXHQgIH07XG5cblx0ZXhwb3J0cy5Tb3VyY2VNYXBDb25zdW1lciA9IFNvdXJjZU1hcENvbnN1bWVyO1xuXG5cdC8qKlxuXHQgKiBBIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgaW5zdGFuY2UgcmVwcmVzZW50cyBhIHBhcnNlZCBzb3VyY2UgbWFwIHdoaWNoIHdlIGNhblxuXHQgKiBxdWVyeSBmb3IgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9yaWdpbmFsIGZpbGUgcG9zaXRpb25zIGJ5IGdpdmluZyBpdCBhIGZpbGVcblx0ICogcG9zaXRpb24gaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG5cdCAqXG5cdCAqIFRoZSBvbmx5IHBhcmFtZXRlciBpcyB0aGUgcmF3IHNvdXJjZSBtYXAgKGVpdGhlciBhcyBhIEpTT04gc3RyaW5nLCBvclxuXHQgKiBhbHJlYWR5IHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNvdXJjZSBtYXBzIGhhdmUgdGhlXG5cdCAqIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuXHQgKlxuXHQgKiAgIC0gdmVyc2lvbjogV2hpY2ggdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcCBzcGVjIHRoaXMgbWFwIGlzIGZvbGxvd2luZy5cblx0ICogICAtIHNvdXJjZXM6IEFuIGFycmF5IG9mIFVSTHMgdG8gdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlcy5cblx0ICogICAtIG5hbWVzOiBBbiBhcnJheSBvZiBpZGVudGlmaWVycyB3aGljaCBjYW4gYmUgcmVmZXJyZW5jZWQgYnkgaW5kaXZpZHVhbCBtYXBwaW5ncy5cblx0ICogICAtIHNvdXJjZVJvb3Q6IE9wdGlvbmFsLiBUaGUgVVJMIHJvb3QgZnJvbSB3aGljaCBhbGwgc291cmNlcyBhcmUgcmVsYXRpdmUuXG5cdCAqICAgLSBzb3VyY2VzQ29udGVudDogT3B0aW9uYWwuIEFuIGFycmF5IG9mIGNvbnRlbnRzIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMuXG5cdCAqICAgLSBtYXBwaW5nczogQSBzdHJpbmcgb2YgYmFzZTY0IFZMUXMgd2hpY2ggY29udGFpbiB0aGUgYWN0dWFsIG1hcHBpbmdzLlxuXHQgKiAgIC0gZmlsZTogT3B0aW9uYWwuIFRoZSBnZW5lcmF0ZWQgZmlsZSB0aGlzIHNvdXJjZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoLlxuXHQgKlxuXHQgKiBIZXJlIGlzIGFuIGV4YW1wbGUgc291cmNlIG1hcCwgdGFrZW4gZnJvbSB0aGUgc291cmNlIG1hcCBzcGVjWzBdOlxuXHQgKlxuXHQgKiAgICAge1xuXHQgKiAgICAgICB2ZXJzaW9uIDogMyxcblx0ICogICAgICAgZmlsZTogXCJvdXQuanNcIixcblx0ICogICAgICAgc291cmNlUm9vdCA6IFwiXCIsXG5cdCAqICAgICAgIHNvdXJjZXM6IFtcImZvby5qc1wiLCBcImJhci5qc1wiXSxcblx0ICogICAgICAgbmFtZXM6IFtcInNyY1wiLCBcIm1hcHNcIiwgXCJhcmVcIiwgXCJmdW5cIl0sXG5cdCAqICAgICAgIG1hcHBpbmdzOiBcIkFBLEFCOztBQkNERTtcIlxuXHQgKiAgICAgfVxuXHQgKlxuXHQgKiBbMF06IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVUxUkdBZWhRd1J5cFVUb3ZGMUtSbHBpT0Z6ZTBiLV8yZ2M2ZkFIMEtZMGsvZWRpdD9wbGk9MSNcblx0ICovXG5cdGZ1bmN0aW9uIEJhc2ljU291cmNlTWFwQ29uc3VtZXIoYVNvdXJjZU1hcCkge1xuXHQgIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuXHQgIGlmICh0eXBlb2YgYVNvdXJjZU1hcCA9PT0gJ3N0cmluZycpIHtcblx0ICAgIHNvdXJjZU1hcCA9IEpTT04ucGFyc2UoYVNvdXJjZU1hcC5yZXBsYWNlKC9eXFwpXFxdXFx9Jy8sICcnKSk7XG5cdCAgfVxuXG5cdCAgdmFyIHZlcnNpb24gPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICd2ZXJzaW9uJyk7XG5cdCAgdmFyIHNvdXJjZXMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VzJyk7XG5cdCAgLy8gU2FzcyAzLjMgbGVhdmVzIG91dCB0aGUgJ25hbWVzJyBhcnJheSwgc28gd2UgZGV2aWF0ZSBmcm9tIHRoZSBzcGVjICh3aGljaFxuXHQgIC8vIHJlcXVpcmVzIHRoZSBhcnJheSkgdG8gcGxheSBuaWNlIGhlcmUuXG5cdCAgdmFyIG5hbWVzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnbmFtZXMnLCBbXSk7XG5cdCAgdmFyIHNvdXJjZVJvb3QgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VSb290JywgbnVsbCk7XG5cdCAgdmFyIHNvdXJjZXNDb250ZW50ID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlc0NvbnRlbnQnLCBudWxsKTtcblx0ICB2YXIgbWFwcGluZ3MgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdtYXBwaW5ncycpO1xuXHQgIHZhciBmaWxlID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnZmlsZScsIG51bGwpO1xuXG5cdCAgLy8gT25jZSBhZ2FpbiwgU2FzcyBkZXZpYXRlcyBmcm9tIHRoZSBzcGVjIGFuZCBzdXBwbGllcyB0aGUgdmVyc2lvbiBhcyBhXG5cdCAgLy8gc3RyaW5nIHJhdGhlciB0aGFuIGEgbnVtYmVyLCBzbyB3ZSB1c2UgbG9vc2UgZXF1YWxpdHkgY2hlY2tpbmcgaGVyZS5cblx0ICBpZiAodmVyc2lvbiAhPSB0aGlzLl92ZXJzaW9uKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblx0ICB9XG5cblx0ICBzb3VyY2VzID0gc291cmNlc1xuXHQgICAgLm1hcChTdHJpbmcpXG5cdCAgICAvLyBTb21lIHNvdXJjZSBtYXBzIHByb2R1Y2UgcmVsYXRpdmUgc291cmNlIHBhdGhzIGxpa2UgXCIuL2Zvby5qc1wiIGluc3RlYWQgb2Zcblx0ICAgIC8vIFwiZm9vLmpzXCIuICBOb3JtYWxpemUgdGhlc2UgZmlyc3Qgc28gdGhhdCBmdXR1cmUgY29tcGFyaXNvbnMgd2lsbCBzdWNjZWVkLlxuXHQgICAgLy8gU2VlIGJ1Z3ppbC5sYS8xMDkwNzY4LlxuXHQgICAgLm1hcCh1dGlsLm5vcm1hbGl6ZSlcblx0ICAgIC8vIEFsd2F5cyBlbnN1cmUgdGhhdCBhYnNvbHV0ZSBzb3VyY2VzIGFyZSBpbnRlcm5hbGx5IHN0b3JlZCByZWxhdGl2ZSB0b1xuXHQgICAgLy8gdGhlIHNvdXJjZSByb290LCBpZiB0aGUgc291cmNlIHJvb3QgaXMgYWJzb2x1dGUuIE5vdCBkb2luZyB0aGlzIHdvdWxkXG5cdCAgICAvLyBiZSBwYXJ0aWN1bGFybHkgcHJvYmxlbWF0aWMgd2hlbiB0aGUgc291cmNlIHJvb3QgaXMgYSBwcmVmaXggb2YgdGhlXG5cdCAgICAvLyBzb3VyY2UgKHZhbGlkLCBidXQgd2h5Pz8pLiBTZWUgZ2l0aHViIGlzc3VlICMxOTkgYW5kIGJ1Z3ppbC5sYS8xMTg4OTgyLlxuXHQgICAgLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdCAgICAgIHJldHVybiBzb3VyY2VSb290ICYmIHV0aWwuaXNBYnNvbHV0ZShzb3VyY2VSb290KSAmJiB1dGlsLmlzQWJzb2x1dGUoc291cmNlKVxuXHQgICAgICAgID8gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2UpXG5cdCAgICAgICAgOiBzb3VyY2U7XG5cdCAgICB9KTtcblxuXHQgIC8vIFBhc3MgYHRydWVgIGJlbG93IHRvIGFsbG93IGR1cGxpY2F0ZSBuYW1lcyBhbmQgc291cmNlcy4gV2hpbGUgc291cmNlIG1hcHNcblx0ICAvLyBhcmUgaW50ZW5kZWQgdG8gYmUgY29tcHJlc3NlZCBhbmQgZGVkdXBsaWNhdGVkLCB0aGUgVHlwZVNjcmlwdCBjb21waWxlclxuXHQgIC8vIHNvbWV0aW1lcyBnZW5lcmF0ZXMgc291cmNlIG1hcHMgd2l0aCBkdXBsaWNhdGVzIGluIHRoZW0uIFNlZSBHaXRodWIgaXNzdWVcblx0ICAvLyAjNzIgYW5kIGJ1Z3ppbC5sYS84ODk0OTIuXG5cdCAgdGhpcy5fbmFtZXMgPSBBcnJheVNldC5mcm9tQXJyYXkobmFtZXMubWFwKFN0cmluZyksIHRydWUpO1xuXHQgIHRoaXMuX3NvdXJjZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoc291cmNlcywgdHJ1ZSk7XG5cblx0ICB0aGlzLnNvdXJjZVJvb3QgPSBzb3VyY2VSb290O1xuXHQgIHRoaXMuc291cmNlc0NvbnRlbnQgPSBzb3VyY2VzQ29udGVudDtcblx0ICB0aGlzLl9tYXBwaW5ncyA9IG1hcHBpbmdzO1xuXHQgIHRoaXMuZmlsZSA9IGZpbGU7XG5cdH1cblxuXHRCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgQmFzaWNTb3VyY2VNYXBDb25zdW1lciBmcm9tIGEgU291cmNlTWFwR2VuZXJhdG9yLlxuXHQgKlxuXHQgKiBAcGFyYW0gU291cmNlTWFwR2VuZXJhdG9yIGFTb3VyY2VNYXBcblx0ICogICAgICAgIFRoZSBzb3VyY2UgbWFwIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cblx0ICogQHJldHVybnMgQmFzaWNTb3VyY2VNYXBDb25zdW1lclxuXHQgKi9cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID1cblx0ICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9mcm9tU291cmNlTWFwKGFTb3VyY2VNYXApIHtcblx0ICAgIHZhciBzbWMgPSBPYmplY3QuY3JlYXRlKEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcblxuXHQgICAgdmFyIG5hbWVzID0gc21jLl9uYW1lcyA9IEFycmF5U2V0LmZyb21BcnJheShhU291cmNlTWFwLl9uYW1lcy50b0FycmF5KCksIHRydWUpO1xuXHQgICAgdmFyIHNvdXJjZXMgPSBzbWMuX3NvdXJjZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoYVNvdXJjZU1hcC5fc291cmNlcy50b0FycmF5KCksIHRydWUpO1xuXHQgICAgc21jLnNvdXJjZVJvb3QgPSBhU291cmNlTWFwLl9zb3VyY2VSb290O1xuXHQgICAgc21jLnNvdXJjZXNDb250ZW50ID0gYVNvdXJjZU1hcC5fZ2VuZXJhdGVTb3VyY2VzQ29udGVudChzbWMuX3NvdXJjZXMudG9BcnJheSgpLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWMuc291cmNlUm9vdCk7XG5cdCAgICBzbWMuZmlsZSA9IGFTb3VyY2VNYXAuX2ZpbGU7XG5cblx0ICAgIC8vIEJlY2F1c2Ugd2UgYXJlIG1vZGlmeWluZyB0aGUgZW50cmllcyAoYnkgY29udmVydGluZyBzdHJpbmcgc291cmNlcyBhbmRcblx0ICAgIC8vIG5hbWVzIHRvIGluZGljZXMgaW50byB0aGUgc291cmNlcyBhbmQgbmFtZXMgQXJyYXlTZXRzKSwgd2UgaGF2ZSB0byBtYWtlXG5cdCAgICAvLyBhIGNvcHkgb2YgdGhlIGVudHJ5IG9yIGVsc2UgYmFkIHRoaW5ncyBoYXBwZW4uIFNoYXJlZCBtdXRhYmxlIHN0YXRlXG5cdCAgICAvLyBzdHJpa2VzIGFnYWluISBTZWUgZ2l0aHViIGlzc3VlICMxOTEuXG5cblx0ICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IGFTb3VyY2VNYXAuX21hcHBpbmdzLnRvQXJyYXkoKS5zbGljZSgpO1xuXHQgICAgdmFyIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncyA9IHNtYy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gW107XG5cdCAgICB2YXIgZGVzdE9yaWdpbmFsTWFwcGluZ3MgPSBzbWMuX19vcmlnaW5hbE1hcHBpbmdzID0gW107XG5cblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIgc3JjTWFwcGluZyA9IGdlbmVyYXRlZE1hcHBpbmdzW2ldO1xuXHQgICAgICB2YXIgZGVzdE1hcHBpbmcgPSBuZXcgTWFwcGluZztcblx0ICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkTGluZTtcblx0ICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uID0gc3JjTWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cblx0ICAgICAgaWYgKHNyY01hcHBpbmcuc291cmNlKSB7XG5cdCAgICAgICAgZGVzdE1hcHBpbmcuc291cmNlID0gc291cmNlcy5pbmRleE9mKHNyY01hcHBpbmcuc291cmNlKTtcblx0ICAgICAgICBkZXN0TWFwcGluZy5vcmlnaW5hbExpbmUgPSBzcmNNYXBwaW5nLm9yaWdpbmFsTGluZTtcblx0ICAgICAgICBkZXN0TWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IHNyY01hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cblx0ICAgICAgICBpZiAoc3JjTWFwcGluZy5uYW1lKSB7XG5cdCAgICAgICAgICBkZXN0TWFwcGluZy5uYW1lID0gbmFtZXMuaW5kZXhPZihzcmNNYXBwaW5nLm5hbWUpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGRlc3RPcmlnaW5hbE1hcHBpbmdzLnB1c2goZGVzdE1hcHBpbmcpO1xuXHQgICAgICB9XG5cblx0ICAgICAgZGVzdEdlbmVyYXRlZE1hcHBpbmdzLnB1c2goZGVzdE1hcHBpbmcpO1xuXHQgICAgfVxuXG5cdCAgICBxdWlja1NvcnQoc21jLl9fb3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG5cblx0ICAgIHJldHVybiBzbWM7XG5cdCAgfTtcblxuXHQvKipcblx0ICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuXHQgKi9cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGlzdCBvZiBvcmlnaW5hbCBzb3VyY2VzLlxuXHQgKi9cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnc291cmNlcycsIHtcblx0ICBnZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB0aGlzLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc291cmNlUm9vdCAhPSBudWxsID8gdXRpbC5qb2luKHRoaXMuc291cmNlUm9vdCwgcykgOiBzO1xuXHQgICAgfSwgdGhpcyk7XG5cdCAgfVxuXHR9KTtcblxuXHQvKipcblx0ICogUHJvdmlkZSB0aGUgSklUIHdpdGggYSBuaWNlIHNoYXBlIC8gaGlkZGVuIGNsYXNzLlxuXHQgKi9cblx0ZnVuY3Rpb24gTWFwcGluZygpIHtcblx0ICB0aGlzLmdlbmVyYXRlZExpbmUgPSAwO1xuXHQgIHRoaXMuZ2VuZXJhdGVkQ29sdW1uID0gMDtcblx0ICB0aGlzLnNvdXJjZSA9IG51bGw7XG5cdCAgdGhpcy5vcmlnaW5hbExpbmUgPSBudWxsO1xuXHQgIHRoaXMub3JpZ2luYWxDb2x1bW4gPSBudWxsO1xuXHQgIHRoaXMubmFtZSA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2UgdGhlIG1hcHBpbmdzIGluIGEgc3RyaW5nIGluIHRvIGEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggd2UgY2FuIGVhc2lseVxuXHQgKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcblx0ICogYHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzYCBwcm9wZXJ0aWVzKS5cblx0ICovXG5cdEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cblx0ICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9wYXJzZU1hcHBpbmdzKGFTdHIsIGFTb3VyY2VSb290KSB7XG5cdCAgICB2YXIgZ2VuZXJhdGVkTGluZSA9IDE7XG5cdCAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuXHQgICAgdmFyIHByZXZpb3VzT3JpZ2luYWxMaW5lID0gMDtcblx0ICAgIHZhciBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gMDtcblx0ICAgIHZhciBwcmV2aW91c1NvdXJjZSA9IDA7XG5cdCAgICB2YXIgcHJldmlvdXNOYW1lID0gMDtcblx0ICAgIHZhciBsZW5ndGggPSBhU3RyLmxlbmd0aDtcblx0ICAgIHZhciBpbmRleCA9IDA7XG5cdCAgICB2YXIgY2FjaGVkU2VnbWVudHMgPSB7fTtcblx0ICAgIHZhciB0ZW1wID0ge307XG5cdCAgICB2YXIgb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuXHQgICAgdmFyIGdlbmVyYXRlZE1hcHBpbmdzID0gW107XG5cdCAgICB2YXIgbWFwcGluZywgc3RyLCBzZWdtZW50LCBlbmQsIHZhbHVlO1xuXG5cdCAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcblx0ICAgICAgaWYgKGFTdHIuY2hhckF0KGluZGV4KSA9PT0gJzsnKSB7XG5cdCAgICAgICAgZ2VuZXJhdGVkTGluZSsrO1xuXHQgICAgICAgIGluZGV4Kys7XG5cdCAgICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuXHQgICAgICB9XG5cdCAgICAgIGVsc2UgaWYgKGFTdHIuY2hhckF0KGluZGV4KSA9PT0gJywnKSB7XG5cdCAgICAgICAgaW5kZXgrKztcblx0ICAgICAgfVxuXHQgICAgICBlbHNlIHtcblx0ICAgICAgICBtYXBwaW5nID0gbmV3IE1hcHBpbmcoKTtcblx0ICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZExpbmUgPSBnZW5lcmF0ZWRMaW5lO1xuXG5cdCAgICAgICAgLy8gQmVjYXVzZSBlYWNoIG9mZnNldCBpcyBlbmNvZGVkIHJlbGF0aXZlIHRvIHRoZSBwcmV2aW91cyBvbmUsXG5cdCAgICAgICAgLy8gbWFueSBzZWdtZW50cyBvZnRlbiBoYXZlIHRoZSBzYW1lIGVuY29kaW5nLiBXZSBjYW4gZXhwbG9pdCB0aGlzXG5cdCAgICAgICAgLy8gZmFjdCBieSBjYWNoaW5nIHRoZSBwYXJzZWQgdmFyaWFibGUgbGVuZ3RoIGZpZWxkcyBvZiBlYWNoIHNlZ21lbnQsXG5cdCAgICAgICAgLy8gYWxsb3dpbmcgdXMgdG8gYXZvaWQgYSBzZWNvbmQgcGFyc2UgaWYgd2UgZW5jb3VudGVyIHRoZSBzYW1lXG5cdCAgICAgICAgLy8gc2VnbWVudCBhZ2Fpbi5cblx0ICAgICAgICBmb3IgKGVuZCA9IGluZGV4OyBlbmQgPCBsZW5ndGg7IGVuZCsrKSB7XG5cdCAgICAgICAgICBpZiAodGhpcy5fY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBlbmQpKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBzdHIgPSBhU3RyLnNsaWNlKGluZGV4LCBlbmQpO1xuXG5cdCAgICAgICAgc2VnbWVudCA9IGNhY2hlZFNlZ21lbnRzW3N0cl07XG5cdCAgICAgICAgaWYgKHNlZ21lbnQpIHtcblx0ICAgICAgICAgIGluZGV4ICs9IHN0ci5sZW5ndGg7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHNlZ21lbnQgPSBbXTtcblx0ICAgICAgICAgIHdoaWxlIChpbmRleCA8IGVuZCkge1xuXHQgICAgICAgICAgICBiYXNlNjRWTFEuZGVjb2RlKGFTdHIsIGluZGV4LCB0ZW1wKTtcblx0ICAgICAgICAgICAgdmFsdWUgPSB0ZW1wLnZhbHVlO1xuXHQgICAgICAgICAgICBpbmRleCA9IHRlbXAucmVzdDtcblx0ICAgICAgICAgICAgc2VnbWVudC5wdXNoKHZhbHVlKTtcblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID09PSAyKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgYSBzb3VyY2UsIGJ1dCBubyBsaW5lIGFuZCBjb2x1bW4nKTtcblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID09PSAzKSB7XG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgYSBzb3VyY2UgYW5kIGxpbmUsIGJ1dCBubyBjb2x1bW4nKTtcblx0ICAgICAgICAgIH1cblxuXHQgICAgICAgICAgY2FjaGVkU2VnbWVudHNbc3RyXSA9IHNlZ21lbnQ7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gR2VuZXJhdGVkIGNvbHVtbi5cblx0ICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiA9IHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uICsgc2VnbWVudFswXTtcblx0ICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG5cdCAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gMSkge1xuXHQgICAgICAgICAgLy8gT3JpZ2luYWwgc291cmNlLlxuXHQgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBwcmV2aW91c1NvdXJjZSArIHNlZ21lbnRbMV07XG5cdCAgICAgICAgICBwcmV2aW91c1NvdXJjZSArPSBzZWdtZW50WzFdO1xuXG5cdCAgICAgICAgICAvLyBPcmlnaW5hbCBsaW5lLlxuXHQgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPSBwcmV2aW91c09yaWdpbmFsTGluZSArIHNlZ21lbnRbMl07XG5cdCAgICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuXHQgICAgICAgICAgLy8gTGluZXMgYXJlIHN0b3JlZCAwLWJhc2VkXG5cdCAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSArPSAxO1xuXG5cdCAgICAgICAgICAvLyBPcmlnaW5hbCBjb2x1bW4uXG5cdCAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uID0gcHJldmlvdXNPcmlnaW5hbENvbHVtbiArIHNlZ21lbnRbM107XG5cdCAgICAgICAgICBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuXHQgICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gNCkge1xuXHQgICAgICAgICAgICAvLyBPcmlnaW5hbCBuYW1lLlxuXHQgICAgICAgICAgICBtYXBwaW5nLm5hbWUgPSBwcmV2aW91c05hbWUgKyBzZWdtZW50WzRdO1xuXHQgICAgICAgICAgICBwcmV2aW91c05hbWUgKz0gc2VnbWVudFs0XTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICBnZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKG1hcHBpbmcpO1xuXHQgICAgICAgIGlmICh0eXBlb2YgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09ICdudW1iZXInKSB7XG5cdCAgICAgICAgICBvcmlnaW5hbE1hcHBpbmdzLnB1c2gobWFwcGluZyk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHF1aWNrU29ydChnZW5lcmF0ZWRNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCk7XG5cdCAgICB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBnZW5lcmF0ZWRNYXBwaW5ncztcblxuXHQgICAgcXVpY2tTb3J0KG9yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuXHQgICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MgPSBvcmlnaW5hbE1hcHBpbmdzO1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIEZpbmQgdGhlIG1hcHBpbmcgdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGh5cG90aGV0aWNhbCBcIm5lZWRsZVwiIG1hcHBpbmcgdGhhdFxuXHQgKiB3ZSBhcmUgc2VhcmNoaW5nIGZvciBpbiB0aGUgZ2l2ZW4gXCJoYXlzdGFja1wiIG9mIG1hcHBpbmdzLlxuXHQgKi9cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nID1cblx0ICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9maW5kTWFwcGluZyhhTmVlZGxlLCBhTWFwcGluZ3MsIGFMaW5lTmFtZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhQ29sdW1uTmFtZSwgYUNvbXBhcmF0b3IsIGFCaWFzKSB7XG5cdCAgICAvLyBUbyByZXR1cm4gdGhlIHBvc2l0aW9uIHdlIGFyZSBzZWFyY2hpbmcgZm9yLCB3ZSBtdXN0IGZpcnN0IGZpbmQgdGhlXG5cdCAgICAvLyBtYXBwaW5nIGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24gYW5kIHRoZW4gcmV0dXJuIHRoZSBvcHBvc2l0ZSBwb3NpdGlvbiBpdFxuXHQgICAgLy8gcG9pbnRzIHRvLiBCZWNhdXNlIHRoZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB3ZSBjYW4gdXNlIGJpbmFyeSBzZWFyY2ggdG9cblx0ICAgIC8vIGZpbmQgdGhlIGJlc3QgbWFwcGluZy5cblxuXHQgICAgaWYgKGFOZWVkbGVbYUxpbmVOYW1lXSA8PSAwKSB7XG5cdCAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xpbmUgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSwgZ290ICdcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUxpbmVOYW1lXSk7XG5cdCAgICB9XG5cdCAgICBpZiAoYU5lZWRsZVthQ29sdW1uTmFtZV0gPCAwKSB7XG5cdCAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbHVtbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLCBnb3QgJ1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICsgYU5lZWRsZVthQ29sdW1uTmFtZV0pO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gYmluYXJ5U2VhcmNoLnNlYXJjaChhTmVlZGxlLCBhTWFwcGluZ3MsIGFDb21wYXJhdG9yLCBhQmlhcyk7XG5cdCAgfTtcblxuXHQvKipcblx0ICogQ29tcHV0ZSB0aGUgbGFzdCBjb2x1bW4gZm9yIGVhY2ggZ2VuZXJhdGVkIG1hcHBpbmcuIFRoZSBsYXN0IGNvbHVtbiBpc1xuXHQgKiBpbmNsdXNpdmUuXG5cdCAqL1xuXHRCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5jb21wdXRlQ29sdW1uU3BhbnMgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2NvbXB1dGVDb2x1bW5TcGFucygpIHtcblx0ICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7ICsraW5kZXgpIHtcblx0ICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleF07XG5cblx0ICAgICAgLy8gTWFwcGluZ3MgZG8gbm90IGNvbnRhaW4gYSBmaWVsZCBmb3IgdGhlIGxhc3QgZ2VuZXJhdGVkIGNvbHVtbnQuIFdlXG5cdCAgICAgIC8vIGNhbiBjb21lIHVwIHdpdGggYW4gb3B0aW1pc3RpYyBlc3RpbWF0ZSwgaG93ZXZlciwgYnkgYXNzdW1pbmcgdGhhdFxuXHQgICAgICAvLyBtYXBwaW5ncyBhcmUgY29udGlndW91cyAoaS5lLiBnaXZlbiB0d28gY29uc2VjdXRpdmUgbWFwcGluZ3MsIHRoZVxuXHQgICAgICAvLyBmaXJzdCBtYXBwaW5nIGVuZHMgd2hlcmUgdGhlIHNlY29uZCBvbmUgc3RhcnRzKS5cblx0ICAgICAgaWYgKGluZGV4ICsgMSA8IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aCkge1xuXHQgICAgICAgIHZhciBuZXh0TWFwcGluZyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzW2luZGV4ICsgMV07XG5cblx0ICAgICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lID09PSBuZXh0TWFwcGluZy5nZW5lcmF0ZWRMaW5lKSB7XG5cdCAgICAgICAgICBtYXBwaW5nLmxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBuZXh0TWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLSAxO1xuXHQgICAgICAgICAgY29udGludWU7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cblx0ICAgICAgLy8gVGhlIGxhc3QgbWFwcGluZyBmb3IgZWFjaCBsaW5lIHNwYW5zIHRoZSBlbnRpcmUgbGluZS5cblx0ICAgICAgbWFwcGluZy5sYXN0R2VuZXJhdGVkQ29sdW1uID0gSW5maW5pdHk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG5cdCAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdFxuXHQgKiB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG5cdCAqICAgLSBiaWFzOiBFaXRoZXIgJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuXHQgKiAgICAgJ1NvdXJjZU1hcENvbnN1bWVyLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuXHQgKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuXHQgKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG5cdCAqICAgICBEZWZhdWx0cyB0byAnU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQnLlxuXHQgKlxuXHQgKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuXHQgKlxuXHQgKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC5cblx0ICogICAtIG5hbWU6IFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLCBvciBudWxsLlxuXHQgKi9cblx0QmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUub3JpZ2luYWxQb3NpdGlvbkZvciA9XG5cdCAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfb3JpZ2luYWxQb3NpdGlvbkZvcihhQXJncykge1xuXHQgICAgdmFyIG5lZWRsZSA9IHtcblx0ICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG5cdCAgICAgIGdlbmVyYXRlZENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuXHQgICAgfTtcblxuXHQgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcoXG5cdCAgICAgIG5lZWRsZSxcblx0ICAgICAgdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3MsXG5cdCAgICAgIFwiZ2VuZXJhdGVkTGluZVwiLFxuXHQgICAgICBcImdlbmVyYXRlZENvbHVtblwiLFxuXHQgICAgICB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkLFxuXHQgICAgICB1dGlsLmdldEFyZyhhQXJncywgJ2JpYXMnLCBTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORClcblx0ICAgICk7XG5cblx0ICAgIGlmIChpbmRleCA+PSAwKSB7XG5cdCAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG5cdCAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lKSB7XG5cdCAgICAgICAgdmFyIHNvdXJjZSA9IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdzb3VyY2UnLCBudWxsKTtcblx0ICAgICAgICBpZiAoc291cmNlICE9PSBudWxsKSB7XG5cdCAgICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmF0KHNvdXJjZSk7XG5cdCAgICAgICAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcblx0ICAgICAgICAgICAgc291cmNlID0gdXRpbC5qb2luKHRoaXMuc291cmNlUm9vdCwgc291cmNlKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIG5hbWUgPSB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbmFtZScsIG51bGwpO1xuXHQgICAgICAgIGlmIChuYW1lICE9PSBudWxsKSB7XG5cdCAgICAgICAgICBuYW1lID0gdGhpcy5fbmFtZXMuYXQobmFtZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcblx0ICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdvcmlnaW5hbExpbmUnLCBudWxsKSxcblx0ICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ29yaWdpbmFsQ29sdW1uJywgbnVsbCksXG5cdCAgICAgICAgICBuYW1lOiBuYW1lXG5cdCAgICAgICAgfTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBzb3VyY2U6IG51bGwsXG5cdCAgICAgIGxpbmU6IG51bGwsXG5cdCAgICAgIGNvbHVtbjogbnVsbCxcblx0ICAgICAgbmFtZTogbnVsbFxuXHQgICAgfTtcblx0ICB9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdHJ1ZSBpZiB3ZSBoYXZlIHRoZSBzb3VyY2UgY29udGVudCBmb3IgZXZlcnkgc291cmNlIGluIHRoZSBzb3VyY2Vcblx0ICogbWFwLCBmYWxzZSBvdGhlcndpc2UuXG5cdCAqL1xuXHRCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG5cdCAgZnVuY3Rpb24gQmFzaWNTb3VyY2VNYXBDb25zdW1lcl9oYXNDb250ZW50c09mQWxsU291cmNlcygpIHtcblx0ICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudC5sZW5ndGggPj0gdGhpcy5fc291cmNlcy5zaXplKCkgJiZcblx0ICAgICAgIXRoaXMuc291cmNlc0NvbnRlbnQuc29tZShmdW5jdGlvbiAoc2MpIHsgcmV0dXJuIHNjID09IG51bGw7IH0pO1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50LiBUaGUgb25seSBhcmd1bWVudCBpcyB0aGUgdXJsIG9mIHRoZVxuXHQgKiBvcmlnaW5hbCBzb3VyY2UgZmlsZS4gUmV0dXJucyBudWxsIGlmIG5vIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IGlzXG5cdCAqIGF2YWlsYWJsZS5cblx0ICovXG5cdEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLnNvdXJjZUNvbnRlbnRGb3IgPVxuXHQgIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgbnVsbE9uTWlzc2luZykge1xuXHQgICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50KSB7XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcblx0ICAgICAgYVNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCBhU291cmNlKTtcblx0ICAgIH1cblxuXHQgICAgaWYgKHRoaXMuX3NvdXJjZXMuaGFzKGFTb3VyY2UpKSB7XG5cdCAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W3RoaXMuX3NvdXJjZXMuaW5kZXhPZihhU291cmNlKV07XG5cdCAgICB9XG5cblx0ICAgIHZhciB1cmw7XG5cdCAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGxcblx0ICAgICAgICAmJiAodXJsID0gdXRpbC51cmxQYXJzZSh0aGlzLnNvdXJjZVJvb3QpKSkge1xuXHQgICAgICAvLyBYWFg6IGZpbGU6Ly8gVVJJcyBhbmQgYWJzb2x1dGUgcGF0aHMgbGVhZCB0byB1bmV4cGVjdGVkIGJlaGF2aW9yIGZvclxuXHQgICAgICAvLyBtYW55IHVzZXJzLiBXZSBjYW4gaGVscCB0aGVtIG91dCB3aGVuIHRoZXkgZXhwZWN0IGZpbGU6Ly8gVVJJcyB0b1xuXHQgICAgICAvLyBiZWhhdmUgbGlrZSBpdCB3b3VsZCBpZiB0aGV5IHdlcmUgcnVubmluZyBhIGxvY2FsIEhUVFAgc2VydmVyLiBTZWVcblx0ICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODg1NTk3LlxuXHQgICAgICB2YXIgZmlsZVVyaUFic1BhdGggPSBhU291cmNlLnJlcGxhY2UoL15maWxlOlxcL1xcLy8sIFwiXCIpO1xuXHQgICAgICBpZiAodXJsLnNjaGVtZSA9PSBcImZpbGVcIlxuXHQgICAgICAgICAgJiYgdGhpcy5fc291cmNlcy5oYXMoZmlsZVVyaUFic1BhdGgpKSB7XG5cdCAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbdGhpcy5fc291cmNlcy5pbmRleE9mKGZpbGVVcmlBYnNQYXRoKV1cblx0ICAgICAgfVxuXG5cdCAgICAgIGlmICgoIXVybC5wYXRoIHx8IHVybC5wYXRoID09IFwiL1wiKVxuXHQgICAgICAgICAgJiYgdGhpcy5fc291cmNlcy5oYXMoXCIvXCIgKyBhU291cmNlKSkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W3RoaXMuX3NvdXJjZXMuaW5kZXhPZihcIi9cIiArIGFTb3VyY2UpXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgcmVjdXJzaXZlbHkgZnJvbVxuXHQgICAgLy8gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yLiBJbiB0aGF0IGNhc2UsIHdlXG5cdCAgICAvLyBkb24ndCB3YW50IHRvIHRocm93IGlmIHdlIGNhbid0IGZpbmQgdGhlIHNvdXJjZSAtIHdlIGp1c3Qgd2FudCB0b1xuXHQgICAgLy8gcmV0dXJuIG51bGwsIHNvIHdlIHByb3ZpZGUgYSBmbGFnIHRvIGV4aXQgZ3JhY2VmdWxseS5cblx0ICAgIGlmIChudWxsT25NaXNzaW5nKSB7XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgYVNvdXJjZSArICdcIiBpcyBub3QgaW4gdGhlIFNvdXJjZU1hcC4nKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuXHQgKiBsaW5lLCBhbmQgY29sdW1uIHBvc2l0aW9ucyBwcm92aWRlZC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0IHdpdGhcblx0ICogdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuXHQgKlxuXHQgKiAgIC0gc291cmNlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZS5cblx0ICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLlxuXHQgKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLlxuXHQgKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3Jcblx0ICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcblx0ICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcblx0ICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuXHQgKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cblx0ICpcblx0ICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqL1xuXHRCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5nZW5lcmF0ZWRQb3NpdGlvbkZvciA9XG5cdCAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcblx0ICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpO1xuXHQgICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsKSB7XG5cdCAgICAgIHNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCBzb3VyY2UpO1xuXHQgICAgfVxuXHQgICAgaWYgKCF0aGlzLl9zb3VyY2VzLmhhcyhzb3VyY2UpKSB7XG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgbGluZTogbnVsbCxcblx0ICAgICAgICBjb2x1bW46IG51bGwsXG5cdCAgICAgICAgbGFzdENvbHVtbjogbnVsbFxuXHQgICAgICB9O1xuXHQgICAgfVxuXHQgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5pbmRleE9mKHNvdXJjZSk7XG5cblx0ICAgIHZhciBuZWVkbGUgPSB7XG5cdCAgICAgIHNvdXJjZTogc291cmNlLFxuXHQgICAgICBvcmlnaW5hbExpbmU6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpLFxuXHQgICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuXHQgICAgfTtcblxuXHQgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcoXG5cdCAgICAgIG5lZWRsZSxcblx0ICAgICAgdGhpcy5fb3JpZ2luYWxNYXBwaW5ncyxcblx0ICAgICAgXCJvcmlnaW5hbExpbmVcIixcblx0ICAgICAgXCJvcmlnaW5hbENvbHVtblwiLFxuXHQgICAgICB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zLFxuXHQgICAgICB1dGlsLmdldEFyZyhhQXJncywgJ2JpYXMnLCBTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORClcblx0ICAgICk7XG5cblx0ICAgIGlmIChpbmRleCA+PSAwKSB7XG5cdCAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1tpbmRleF07XG5cblx0ICAgICAgaWYgKG1hcHBpbmcuc291cmNlID09PSBuZWVkbGUuc291cmNlKSB7XG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG5cdCAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcblx0ICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcblx0ICAgICAgICB9O1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB7XG5cdCAgICAgIGxpbmU6IG51bGwsXG5cdCAgICAgIGNvbHVtbjogbnVsbCxcblx0ICAgICAgbGFzdENvbHVtbjogbnVsbFxuXHQgICAgfTtcblx0ICB9O1xuXG5cdGV4cG9ydHMuQmFzaWNTb3VyY2VNYXBDb25zdW1lciA9IEJhc2ljU291cmNlTWFwQ29uc3VtZXI7XG5cblx0LyoqXG5cdCAqIEFuIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciBpbnN0YW5jZSByZXByZXNlbnRzIGEgcGFyc2VkIHNvdXJjZSBtYXAgd2hpY2hcblx0ICogd2UgY2FuIHF1ZXJ5IGZvciBpbmZvcm1hdGlvbi4gSXQgZGlmZmVycyBmcm9tIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgaW5cblx0ICogdGhhdCBpdCB0YWtlcyBcImluZGV4ZWRcIiBzb3VyY2UgbWFwcyAoaS5lLiBvbmVzIHdpdGggYSBcInNlY3Rpb25zXCIgZmllbGQpIGFzXG5cdCAqIGlucHV0LlxuXHQgKlxuXHQgKiBUaGUgb25seSBwYXJhbWV0ZXIgaXMgYSByYXcgc291cmNlIG1hcCAoZWl0aGVyIGFzIGEgSlNPTiBzdHJpbmcsIG9yIGFscmVhZHlcblx0ICogcGFyc2VkIHRvIGFuIG9iamVjdCkuIEFjY29yZGluZyB0byB0aGUgc3BlYyBmb3IgaW5kZXhlZCBzb3VyY2UgbWFwcywgdGhleVxuXHQgKiBoYXZlIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcblx0ICpcblx0ICogICAtIHZlcnNpb246IFdoaWNoIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXAgc3BlYyB0aGlzIG1hcCBpcyBmb2xsb3dpbmcuXG5cdCAqICAgLSBmaWxlOiBPcHRpb25hbC4gVGhlIGdlbmVyYXRlZCBmaWxlIHRoaXMgc291cmNlIG1hcCBpcyBhc3NvY2lhdGVkIHdpdGguXG5cdCAqICAgLSBzZWN0aW9uczogQSBsaXN0IG9mIHNlY3Rpb24gZGVmaW5pdGlvbnMuXG5cdCAqXG5cdCAqIEVhY2ggdmFsdWUgdW5kZXIgdGhlIFwic2VjdGlvbnNcIiBmaWVsZCBoYXMgdHdvIGZpZWxkczpcblx0ICogICAtIG9mZnNldDogVGhlIG9mZnNldCBpbnRvIHRoZSBvcmlnaW5hbCBzcGVjaWZpZWQgYXQgd2hpY2ggdGhpcyBzZWN0aW9uXG5cdCAqICAgICAgIGJlZ2lucyB0byBhcHBseSwgZGVmaW5lZCBhcyBhbiBvYmplY3Qgd2l0aCBhIFwibGluZVwiIGFuZCBcImNvbHVtblwiXG5cdCAqICAgICAgIGZpZWxkLlxuXHQgKiAgIC0gbWFwOiBBIHNvdXJjZSBtYXAgZGVmaW5pdGlvbi4gVGhpcyBzb3VyY2UgbWFwIGNvdWxkIGFsc28gYmUgaW5kZXhlZCxcblx0ICogICAgICAgYnV0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cblx0ICpcblx0ICogSW5zdGVhZCBvZiB0aGUgXCJtYXBcIiBmaWVsZCwgaXQncyBhbHNvIHBvc3NpYmxlIHRvIGhhdmUgYSBcInVybFwiIGZpZWxkXG5cdCAqIHNwZWNpZnlpbmcgYSBVUkwgdG8gcmV0cmlldmUgYSBzb3VyY2UgbWFwIGZyb20sIGJ1dCB0aGF0J3MgY3VycmVudGx5XG5cdCAqIHVuc3VwcG9ydGVkLlxuXHQgKlxuXHQgKiBIZXJlJ3MgYW4gZXhhbXBsZSBzb3VyY2UgbWFwLCB0YWtlbiBmcm9tIHRoZSBzb3VyY2UgbWFwIHNwZWNbMF0sIGJ1dFxuXHQgKiBtb2RpZmllZCB0byBvbWl0IGEgc2VjdGlvbiB3aGljaCB1c2VzIHRoZSBcInVybFwiIGZpZWxkLlxuXHQgKlxuXHQgKiAge1xuXHQgKiAgICB2ZXJzaW9uIDogMyxcblx0ICogICAgZmlsZTogXCJhcHAuanNcIixcblx0ICogICAgc2VjdGlvbnM6IFt7XG5cdCAqICAgICAgb2Zmc2V0OiB7bGluZToxMDAsIGNvbHVtbjoxMH0sXG5cdCAqICAgICAgbWFwOiB7XG5cdCAqICAgICAgICB2ZXJzaW9uIDogMyxcblx0ICogICAgICAgIGZpbGU6IFwic2VjdGlvbi5qc1wiLFxuXHQgKiAgICAgICAgc291cmNlczogW1wiZm9vLmpzXCIsIFwiYmFyLmpzXCJdLFxuXHQgKiAgICAgICAgbmFtZXM6IFtcInNyY1wiLCBcIm1hcHNcIiwgXCJhcmVcIiwgXCJmdW5cIl0sXG5cdCAqICAgICAgICBtYXBwaW5nczogXCJBQUFBLEU7O0FCQ0RFO1wiXG5cdCAqICAgICAgfVxuXHQgKiAgICB9XSxcblx0ICogIH1cblx0ICpcblx0ICogWzBdOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFVMVJHQWVoUXdSeXBVVG92RjFLUmxwaU9GemUwYi1fMmdjNmZBSDBLWTBrL2VkaXQjaGVhZGluZz1oLjUzNWVzM3hlcHJndFxuXHQgKi9cblx0ZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXApIHtcblx0ICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcblx0ICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG5cdCAgICBzb3VyY2VNYXAgPSBKU09OLnBhcnNlKGFTb3VyY2VNYXAucmVwbGFjZSgvXlxcKVxcXVxcfScvLCAnJykpO1xuXHQgIH1cblxuXHQgIHZhciB2ZXJzaW9uID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAndmVyc2lvbicpO1xuXHQgIHZhciBzZWN0aW9ucyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NlY3Rpb25zJyk7XG5cblx0ICBpZiAodmVyc2lvbiAhPSB0aGlzLl92ZXJzaW9uKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHZlcnNpb246ICcgKyB2ZXJzaW9uKTtcblx0ICB9XG5cblx0ICB0aGlzLl9zb3VyY2VzID0gbmV3IEFycmF5U2V0KCk7XG5cdCAgdGhpcy5fbmFtZXMgPSBuZXcgQXJyYXlTZXQoKTtcblxuXHQgIHZhciBsYXN0T2Zmc2V0ID0ge1xuXHQgICAgbGluZTogLTEsXG5cdCAgICBjb2x1bW46IDBcblx0ICB9O1xuXHQgIHRoaXMuX3NlY3Rpb25zID0gc2VjdGlvbnMubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICBpZiAocy51cmwpIHtcblx0ICAgICAgLy8gVGhlIHVybCBmaWVsZCB3aWxsIHJlcXVpcmUgc3VwcG9ydCBmb3IgYXN5bmNocm9uaWNpdHkuXG5cdCAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zb3VyY2UtbWFwL2lzc3Vlcy8xNlxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1cHBvcnQgZm9yIHVybCBmaWVsZCBpbiBzZWN0aW9ucyBub3QgaW1wbGVtZW50ZWQuJyk7XG5cdCAgICB9XG5cdCAgICB2YXIgb2Zmc2V0ID0gdXRpbC5nZXRBcmcocywgJ29mZnNldCcpO1xuXHQgICAgdmFyIG9mZnNldExpbmUgPSB1dGlsLmdldEFyZyhvZmZzZXQsICdsaW5lJyk7XG5cdCAgICB2YXIgb2Zmc2V0Q29sdW1uID0gdXRpbC5nZXRBcmcob2Zmc2V0LCAnY29sdW1uJyk7XG5cblx0ICAgIGlmIChvZmZzZXRMaW5lIDwgbGFzdE9mZnNldC5saW5lIHx8XG5cdCAgICAgICAgKG9mZnNldExpbmUgPT09IGxhc3RPZmZzZXQubGluZSAmJiBvZmZzZXRDb2x1bW4gPCBsYXN0T2Zmc2V0LmNvbHVtbikpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWN0aW9uIG9mZnNldHMgbXVzdCBiZSBvcmRlcmVkIGFuZCBub24tb3ZlcmxhcHBpbmcuJyk7XG5cdCAgICB9XG5cdCAgICBsYXN0T2Zmc2V0ID0gb2Zmc2V0O1xuXG5cdCAgICByZXR1cm4ge1xuXHQgICAgICBnZW5lcmF0ZWRPZmZzZXQ6IHtcblx0ICAgICAgICAvLyBUaGUgb2Zmc2V0IGZpZWxkcyBhcmUgMC1iYXNlZCwgYnV0IHdlIHVzZSAxLWJhc2VkIGluZGljZXMgd2hlblxuXHQgICAgICAgIC8vIGVuY29kaW5nL2RlY29kaW5nIGZyb20gVkxRLlxuXHQgICAgICAgIGdlbmVyYXRlZExpbmU6IG9mZnNldExpbmUgKyAxLFxuXHQgICAgICAgIGdlbmVyYXRlZENvbHVtbjogb2Zmc2V0Q29sdW1uICsgMVxuXHQgICAgICB9LFxuXHQgICAgICBjb25zdW1lcjogbmV3IFNvdXJjZU1hcENvbnN1bWVyKHV0aWwuZ2V0QXJnKHMsICdtYXAnKSlcblx0ICAgIH1cblx0ICB9KTtcblx0fVxuXG5cdEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSk7XG5cdEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuXHQvKipcblx0ICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuXHQgKi9cblx0SW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fdmVyc2lvbiA9IDM7XG5cblx0LyoqXG5cdCAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG5cdCAqL1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG5cdCAgZ2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgc291cmNlcyA9IFtdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHQgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXMubGVuZ3RoOyBqKyspIHtcblx0ICAgICAgICBzb3VyY2VzLnB1c2godGhpcy5fc2VjdGlvbnNbaV0uY29uc3VtZXIuc291cmNlc1tqXSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiBzb3VyY2VzO1xuXHQgIH1cblx0fSk7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSwgbGluZSwgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIGdlbmVyYXRlZFxuXHQgKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Rcblx0ICogd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdCAqXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG5cdCAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuXHQgKlxuXHQgKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuXHQgKlxuXHQgKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC5cblx0ICogICAtIG5hbWU6IFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLCBvciBudWxsLlxuXHQgKi9cblx0SW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cblx0ICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfb3JpZ2luYWxQb3NpdGlvbkZvcihhQXJncykge1xuXHQgICAgdmFyIG5lZWRsZSA9IHtcblx0ICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG5cdCAgICAgIGdlbmVyYXRlZENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuXHQgICAgfTtcblxuXHQgICAgLy8gRmluZCB0aGUgc2VjdGlvbiBjb250YWluaW5nIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24gd2UncmUgdHJ5aW5nIHRvIG1hcFxuXHQgICAgLy8gdG8gYW4gb3JpZ2luYWwgcG9zaXRpb24uXG5cdCAgICB2YXIgc2VjdGlvbkluZGV4ID0gYmluYXJ5U2VhcmNoLnNlYXJjaChuZWVkbGUsIHRoaXMuX3NlY3Rpb25zLFxuXHQgICAgICBmdW5jdGlvbihuZWVkbGUsIHNlY3Rpb24pIHtcblx0ICAgICAgICB2YXIgY21wID0gbmVlZGxlLmdlbmVyYXRlZExpbmUgLSBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lO1xuXHQgICAgICAgIGlmIChjbXApIHtcblx0ICAgICAgICAgIHJldHVybiBjbXA7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIChuZWVkbGUuZ2VuZXJhdGVkQ29sdW1uIC1cblx0ICAgICAgICAgICAgICAgIHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbik7XG5cdCAgICAgIH0pO1xuXHQgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xuXG5cdCAgICBpZiAoIXNlY3Rpb24pIHtcblx0ICAgICAgcmV0dXJuIHtcblx0ICAgICAgICBzb3VyY2U6IG51bGwsXG5cdCAgICAgICAgbGluZTogbnVsbCxcblx0ICAgICAgICBjb2x1bW46IG51bGwsXG5cdCAgICAgICAgbmFtZTogbnVsbFxuXHQgICAgICB9O1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gc2VjdGlvbi5jb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHtcblx0ICAgICAgbGluZTogbmVlZGxlLmdlbmVyYXRlZExpbmUgLVxuXHQgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lIC0gMSksXG5cdCAgICAgIGNvbHVtbjogbmVlZGxlLmdlbmVyYXRlZENvbHVtbiAtXG5cdCAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lXG5cdCAgICAgICAgID8gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkQ29sdW1uIC0gMVxuXHQgICAgICAgICA6IDApLFxuXHQgICAgICBiaWFzOiBhQXJncy5iaWFzXG5cdCAgICB9KTtcblx0ICB9O1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdHJ1ZSBpZiB3ZSBoYXZlIHRoZSBzb3VyY2UgY29udGVudCBmb3IgZXZlcnkgc291cmNlIGluIHRoZSBzb3VyY2Vcblx0ICogbWFwLCBmYWxzZSBvdGhlcndpc2UuXG5cdCAqL1xuXHRJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzID1cblx0ICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5fc2VjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgcmV0dXJuIHMuY29uc3VtZXIuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKTtcblx0ICAgIH0pO1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50LiBUaGUgb25seSBhcmd1bWVudCBpcyB0aGUgdXJsIG9mIHRoZVxuXHQgKiBvcmlnaW5hbCBzb3VyY2UgZmlsZS4gUmV0dXJucyBudWxsIGlmIG5vIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IGlzXG5cdCAqIGF2YWlsYWJsZS5cblx0ICovXG5cdEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG5cdCAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgbnVsbE9uTWlzc2luZykge1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG5cdCAgICAgIHZhciBjb250ZW50ID0gc2VjdGlvbi5jb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIHRydWUpO1xuXHQgICAgICBpZiAoY29udGVudCkge1xuXHQgICAgICAgIHJldHVybiBjb250ZW50O1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgICBpZiAobnVsbE9uTWlzc2luZykge1xuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFTb3VyY2UgKyAnXCIgaXMgbm90IGluIHRoZSBTb3VyY2VNYXAuJyk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcblx0ICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG5cdCAqIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG5cdCAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cblx0ICpcblx0ICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblx0ICpcblx0ICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cblx0ICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG5cdCAqL1xuXHRJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmdlbmVyYXRlZFBvc2l0aW9uRm9yID1cblx0ICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcblxuXHQgICAgICAvLyBPbmx5IGNvbnNpZGVyIHRoaXMgc2VjdGlvbiBpZiB0aGUgcmVxdWVzdGVkIHNvdXJjZSBpcyBpbiB0aGUgbGlzdCBvZlxuXHQgICAgICAvLyBzb3VyY2VzIG9mIHRoZSBjb25zdW1lci5cblx0ICAgICAgaWYgKHNlY3Rpb24uY29uc3VtZXIuc291cmNlcy5pbmRleE9mKHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJykpID09PSAtMSkge1xuXHQgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciBnZW5lcmF0ZWRQb3NpdGlvbiA9IHNlY3Rpb24uY29uc3VtZXIuZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpO1xuXHQgICAgICBpZiAoZ2VuZXJhdGVkUG9zaXRpb24pIHtcblx0ICAgICAgICB2YXIgcmV0ID0ge1xuXHQgICAgICAgICAgbGluZTogZ2VuZXJhdGVkUG9zaXRpb24ubGluZSArXG5cdCAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lIC0gMSksXG5cdCAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZFBvc2l0aW9uLmNvbHVtbiArXG5cdCAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBnZW5lcmF0ZWRQb3NpdGlvbi5saW5lXG5cdCAgICAgICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcblx0ICAgICAgICAgICAgIDogMClcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgbGluZTogbnVsbCxcblx0ICAgICAgY29sdW1uOiBudWxsXG5cdCAgICB9O1xuXHQgIH07XG5cblx0LyoqXG5cdCAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcblx0ICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG5cdCAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG5cdCAqL1xuXHRJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cblx0ICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuXHQgICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gW107XG5cdCAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXHQgICAgICB2YXIgc2VjdGlvbk1hcHBpbmdzID0gc2VjdGlvbi5jb25zdW1lci5fZ2VuZXJhdGVkTWFwcGluZ3M7XG5cdCAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VjdGlvbk1hcHBpbmdzLmxlbmd0aDsgaisrKSB7XG5cdCAgICAgICAgdmFyIG1hcHBpbmcgPSBzZWN0aW9uTWFwcGluZ3Nbal07XG5cblx0ICAgICAgICB2YXIgc291cmNlID0gc2VjdGlvbi5jb25zdW1lci5fc291cmNlcy5hdChtYXBwaW5nLnNvdXJjZSk7XG5cdCAgICAgICAgaWYgKHNlY3Rpb24uY29uc3VtZXIuc291cmNlUm9vdCAhPT0gbnVsbCkge1xuXHQgICAgICAgICAgc291cmNlID0gdXRpbC5qb2luKHNlY3Rpb24uY29uc3VtZXIuc291cmNlUm9vdCwgc291cmNlKTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdGhpcy5fc291cmNlcy5hZGQoc291cmNlKTtcblx0ICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmluZGV4T2Yoc291cmNlKTtcblxuXHQgICAgICAgIHZhciBuYW1lID0gc2VjdGlvbi5jb25zdW1lci5fbmFtZXMuYXQobWFwcGluZy5uYW1lKTtcblx0ICAgICAgICB0aGlzLl9uYW1lcy5hZGQobmFtZSk7XG5cdCAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG5cblx0ICAgICAgICAvLyBUaGUgbWFwcGluZ3MgY29taW5nIGZyb20gdGhlIGNvbnN1bWVyIGZvciB0aGUgc2VjdGlvbiBoYXZlXG5cdCAgICAgICAgLy8gZ2VuZXJhdGVkIHBvc2l0aW9ucyByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIHNlY3Rpb24sIHNvIHdlXG5cdCAgICAgICAgLy8gbmVlZCB0byBvZmZzZXQgdGhlbSB0byBiZSByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGNvbmNhdGVuYXRlZFxuXHQgICAgICAgIC8vIGdlbmVyYXRlZCBmaWxlLlxuXHQgICAgICAgIHZhciBhZGp1c3RlZE1hcHBpbmcgPSB7XG5cdCAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcblx0ICAgICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSArXG5cdCAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lIC0gMSksXG5cdCAgICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uICtcblx0ICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG1hcHBpbmcuZ2VuZXJhdGVkTGluZVxuXHQgICAgICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcblx0ICAgICAgICAgICAgOiAwKSxcblx0ICAgICAgICAgIG9yaWdpbmFsTGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG5cdCAgICAgICAgICBvcmlnaW5hbENvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtbixcblx0ICAgICAgICAgIG5hbWU6IG5hbWVcblx0ICAgICAgICB9O1xuXG5cdCAgICAgICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzLnB1c2goYWRqdXN0ZWRNYXBwaW5nKTtcblx0ICAgICAgICBpZiAodHlwZW9mIGFkanVzdGVkTWFwcGluZy5vcmlnaW5hbExpbmUgPT09ICdudW1iZXInKSB7XG5cdCAgICAgICAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHF1aWNrU29ydCh0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQpO1xuXHQgICAgcXVpY2tTb3J0KHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKTtcblx0ICB9O1xuXG5cdGV4cG9ydHMuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyID0gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyO1xuXG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG5cdC8qXG5cdCAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuXHQgKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG5cdCAqL1xuXG5cdC8qKlxuXHQgKiBUaGlzIGlzIGEgaGVscGVyIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHZhbHVlcyBmcm9tIHBhcmFtZXRlci9vcHRpb25zXG5cdCAqIG9iamVjdHMuXG5cdCAqXG5cdCAqIEBwYXJhbSBhcmdzIFRoZSBvYmplY3Qgd2UgYXJlIGV4dHJhY3RpbmcgdmFsdWVzIGZyb21cblx0ICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdlIGFyZSBnZXR0aW5nLlxuXHQgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBpZiB0aGUgcHJvcGVydHkgaXMgbWlzc2luZ1xuXHQgKiBmcm9tIHRoZSBvYmplY3QuIElmIHRoaXMgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIHByb3BlcnR5IGlzIG1pc3NpbmcsIGFuXG5cdCAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0QXJnKGFBcmdzLCBhTmFtZSwgYURlZmF1bHRWYWx1ZSkge1xuXHQgIGlmIChhTmFtZSBpbiBhQXJncykge1xuXHQgICAgcmV0dXJuIGFBcmdzW2FOYW1lXTtcblx0ICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0ICAgIHJldHVybiBhRGVmYXVsdFZhbHVlO1xuXHQgIH0gZWxzZSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFOYW1lICsgJ1wiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQuJyk7XG5cdCAgfVxuXHR9XG5cdGV4cG9ydHMuZ2V0QXJnID0gZ2V0QXJnO1xuXG5cdHZhciB1cmxSZWdleHAgPSAvXig/OihbXFx3K1xcLS5dKyk6KT9cXC9cXC8oPzooXFx3KzpcXHcrKUApPyhbXFx3Ll0qKSg/OjooXFxkKykpPyhcXFMqKSQvO1xuXHR2YXIgZGF0YVVybFJlZ2V4cCA9IC9eZGF0YTouK1xcLC4rJC87XG5cblx0ZnVuY3Rpb24gdXJsUGFyc2UoYVVybCkge1xuXHQgIHZhciBtYXRjaCA9IGFVcmwubWF0Y2godXJsUmVnZXhwKTtcblx0ICBpZiAoIW1hdGNoKSB7XG5cdCAgICByZXR1cm4gbnVsbDtcblx0ICB9XG5cdCAgcmV0dXJuIHtcblx0ICAgIHNjaGVtZTogbWF0Y2hbMV0sXG5cdCAgICBhdXRoOiBtYXRjaFsyXSxcblx0ICAgIGhvc3Q6IG1hdGNoWzNdLFxuXHQgICAgcG9ydDogbWF0Y2hbNF0sXG5cdCAgICBwYXRoOiBtYXRjaFs1XVxuXHQgIH07XG5cdH1cblx0ZXhwb3J0cy51cmxQYXJzZSA9IHVybFBhcnNlO1xuXG5cdGZ1bmN0aW9uIHVybEdlbmVyYXRlKGFQYXJzZWRVcmwpIHtcblx0ICB2YXIgdXJsID0gJyc7XG5cdCAgaWYgKGFQYXJzZWRVcmwuc2NoZW1lKSB7XG5cdCAgICB1cmwgKz0gYVBhcnNlZFVybC5zY2hlbWUgKyAnOic7XG5cdCAgfVxuXHQgIHVybCArPSAnLy8nO1xuXHQgIGlmIChhUGFyc2VkVXJsLmF1dGgpIHtcblx0ICAgIHVybCArPSBhUGFyc2VkVXJsLmF1dGggKyAnQCc7XG5cdCAgfVxuXHQgIGlmIChhUGFyc2VkVXJsLmhvc3QpIHtcblx0ICAgIHVybCArPSBhUGFyc2VkVXJsLmhvc3Q7XG5cdCAgfVxuXHQgIGlmIChhUGFyc2VkVXJsLnBvcnQpIHtcblx0ICAgIHVybCArPSBcIjpcIiArIGFQYXJzZWRVcmwucG9ydFxuXHQgIH1cblx0ICBpZiAoYVBhcnNlZFVybC5wYXRoKSB7XG5cdCAgICB1cmwgKz0gYVBhcnNlZFVybC5wYXRoO1xuXHQgIH1cblx0ICByZXR1cm4gdXJsO1xuXHR9XG5cdGV4cG9ydHMudXJsR2VuZXJhdGUgPSB1cmxHZW5lcmF0ZTtcblxuXHQvKipcblx0ICogTm9ybWFsaXplcyBhIHBhdGgsIG9yIHRoZSBwYXRoIHBvcnRpb24gb2YgYSBVUkw6XG5cdCAqXG5cdCAqIC0gUmVwbGFjZXMgY29uc2VjdXRpdmUgc2xhc2hlcyB3aXRoIG9uZSBzbGFzaC5cblx0ICogLSBSZW1vdmVzIHVubmVjZXNzYXJ5ICcuJyBwYXJ0cy5cblx0ICogLSBSZW1vdmVzIHVubmVjZXNzYXJ5ICc8ZGlyPi8uLicgcGFydHMuXG5cdCAqXG5cdCAqIEJhc2VkIG9uIGNvZGUgaW4gdGhlIE5vZGUuanMgJ3BhdGgnIGNvcmUgbW9kdWxlLlxuXHQgKlxuXHQgKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgdXJsIHRvIG5vcm1hbGl6ZS5cblx0ICovXG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZShhUGF0aCkge1xuXHQgIHZhciBwYXRoID0gYVBhdGg7XG5cdCAgdmFyIHVybCA9IHVybFBhcnNlKGFQYXRoKTtcblx0ICBpZiAodXJsKSB7XG5cdCAgICBpZiAoIXVybC5wYXRoKSB7XG5cdCAgICAgIHJldHVybiBhUGF0aDtcblx0ICAgIH1cblx0ICAgIHBhdGggPSB1cmwucGF0aDtcblx0ICB9XG5cdCAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCk7XG5cblx0ICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KC9cXC8rLyk7XG5cdCAgZm9yICh2YXIgcGFydCwgdXAgPSAwLCBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0ICAgIHBhcnQgPSBwYXJ0c1tpXTtcblx0ICAgIGlmIChwYXJ0ID09PSAnLicpIHtcblx0ICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuXHQgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG5cdCAgICAgIHVwKys7XG5cdCAgICB9IGVsc2UgaWYgKHVwID4gMCkge1xuXHQgICAgICBpZiAocGFydCA9PT0gJycpIHtcblx0ICAgICAgICAvLyBUaGUgZmlyc3QgcGFydCBpcyBibGFuayBpZiB0aGUgcGF0aCBpcyBhYnNvbHV0ZS4gVHJ5aW5nIHRvIGdvXG5cdCAgICAgICAgLy8gYWJvdmUgdGhlIHJvb3QgaXMgYSBuby1vcC4gVGhlcmVmb3JlIHdlIGNhbiByZW1vdmUgYWxsICcuLicgcGFydHNcblx0ICAgICAgICAvLyBkaXJlY3RseSBhZnRlciB0aGUgcm9vdC5cblx0ICAgICAgICBwYXJ0cy5zcGxpY2UoaSArIDEsIHVwKTtcblx0ICAgICAgICB1cCA9IDA7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcGFydHMuc3BsaWNlKGksIDIpO1xuXHQgICAgICAgIHVwLS07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdCAgcGF0aCA9IHBhcnRzLmpvaW4oJy8nKTtcblxuXHQgIGlmIChwYXRoID09PSAnJykge1xuXHQgICAgcGF0aCA9IGlzQWJzb2x1dGUgPyAnLycgOiAnLic7XG5cdCAgfVxuXG5cdCAgaWYgKHVybCkge1xuXHQgICAgdXJsLnBhdGggPSBwYXRoO1xuXHQgICAgcmV0dXJuIHVybEdlbmVyYXRlKHVybCk7XG5cdCAgfVxuXHQgIHJldHVybiBwYXRoO1xuXHR9XG5cdGV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplO1xuXG5cdC8qKlxuXHQgKiBKb2lucyB0d28gcGF0aHMvVVJMcy5cblx0ICpcblx0ICogQHBhcmFtIGFSb290IFRoZSByb290IHBhdGggb3IgVVJMLlxuXHQgKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgVVJMIHRvIGJlIGpvaW5lZCB3aXRoIHRoZSByb290LlxuXHQgKlxuXHQgKiAtIElmIGFQYXRoIGlzIGEgVVJMIG9yIGEgZGF0YSBVUkksIGFQYXRoIGlzIHJldHVybmVkLCB1bmxlc3MgYVBhdGggaXMgYVxuXHQgKiAgIHNjaGVtZS1yZWxhdGl2ZSBVUkw6IFRoZW4gdGhlIHNjaGVtZSBvZiBhUm9vdCwgaWYgYW55LCBpcyBwcmVwZW5kZWRcblx0ICogICBmaXJzdC5cblx0ICogLSBPdGhlcndpc2UgYVBhdGggaXMgYSBwYXRoLiBJZiBhUm9vdCBpcyBhIFVSTCwgdGhlbiBpdHMgcGF0aCBwb3J0aW9uXG5cdCAqICAgaXMgdXBkYXRlZCB3aXRoIHRoZSByZXN1bHQgYW5kIGFSb290IGlzIHJldHVybmVkLiBPdGhlcndpc2UgdGhlIHJlc3VsdFxuXHQgKiAgIGlzIHJldHVybmVkLlxuXHQgKiAgIC0gSWYgYVBhdGggaXMgYWJzb2x1dGUsIHRoZSByZXN1bHQgaXMgYVBhdGguXG5cdCAqICAgLSBPdGhlcndpc2UgdGhlIHR3byBwYXRocyBhcmUgam9pbmVkIHdpdGggYSBzbGFzaC5cblx0ICogLSBKb2luaW5nIGZvciBleGFtcGxlICdodHRwOi8vJyBhbmQgJ3d3dy5leGFtcGxlLmNvbScgaXMgYWxzbyBzdXBwb3J0ZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBqb2luKGFSb290LCBhUGF0aCkge1xuXHQgIGlmIChhUm9vdCA9PT0gXCJcIikge1xuXHQgICAgYVJvb3QgPSBcIi5cIjtcblx0ICB9XG5cdCAgaWYgKGFQYXRoID09PSBcIlwiKSB7XG5cdCAgICBhUGF0aCA9IFwiLlwiO1xuXHQgIH1cblx0ICB2YXIgYVBhdGhVcmwgPSB1cmxQYXJzZShhUGF0aCk7XG5cdCAgdmFyIGFSb290VXJsID0gdXJsUGFyc2UoYVJvb3QpO1xuXHQgIGlmIChhUm9vdFVybCkge1xuXHQgICAgYVJvb3QgPSBhUm9vdFVybC5wYXRoIHx8ICcvJztcblx0ICB9XG5cblx0ICAvLyBgam9pbihmb28sICcvL3d3dy5leGFtcGxlLm9yZycpYFxuXHQgIGlmIChhUGF0aFVybCAmJiAhYVBhdGhVcmwuc2NoZW1lKSB7XG5cdCAgICBpZiAoYVJvb3RVcmwpIHtcblx0ICAgICAgYVBhdGhVcmwuc2NoZW1lID0gYVJvb3RVcmwuc2NoZW1lO1xuXHQgICAgfVxuXHQgICAgcmV0dXJuIHVybEdlbmVyYXRlKGFQYXRoVXJsKTtcblx0ICB9XG5cblx0ICBpZiAoYVBhdGhVcmwgfHwgYVBhdGgubWF0Y2goZGF0YVVybFJlZ2V4cCkpIHtcblx0ICAgIHJldHVybiBhUGF0aDtcblx0ICB9XG5cblx0ICAvLyBgam9pbignaHR0cDovLycsICd3d3cuZXhhbXBsZS5jb20nKWBcblx0ICBpZiAoYVJvb3RVcmwgJiYgIWFSb290VXJsLmhvc3QgJiYgIWFSb290VXJsLnBhdGgpIHtcblx0ICAgIGFSb290VXJsLmhvc3QgPSBhUGF0aDtcblx0ICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUm9vdFVybCk7XG5cdCAgfVxuXG5cdCAgdmFyIGpvaW5lZCA9IGFQYXRoLmNoYXJBdCgwKSA9PT0gJy8nXG5cdCAgICA/IGFQYXRoXG5cdCAgICA6IG5vcm1hbGl6ZShhUm9vdC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIGFQYXRoKTtcblxuXHQgIGlmIChhUm9vdFVybCkge1xuXHQgICAgYVJvb3RVcmwucGF0aCA9IGpvaW5lZDtcblx0ICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUm9vdFVybCk7XG5cdCAgfVxuXHQgIHJldHVybiBqb2luZWQ7XG5cdH1cblx0ZXhwb3J0cy5qb2luID0gam9pbjtcblxuXHRleHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbiAoYVBhdGgpIHtcblx0ICByZXR1cm4gYVBhdGguY2hhckF0KDApID09PSAnLycgfHwgISFhUGF0aC5tYXRjaCh1cmxSZWdleHApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBNYWtlIGEgcGF0aCByZWxhdGl2ZSB0byBhIFVSTCBvciBhbm90aGVyIHBhdGguXG5cdCAqXG5cdCAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cblx0ICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIFVSTCB0byBiZSBtYWRlIHJlbGF0aXZlIHRvIGFSb290LlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVsYXRpdmUoYVJvb3QsIGFQYXRoKSB7XG5cdCAgaWYgKGFSb290ID09PSBcIlwiKSB7XG5cdCAgICBhUm9vdCA9IFwiLlwiO1xuXHQgIH1cblxuXHQgIGFSb290ID0gYVJvb3QucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuXHQgIC8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgcGF0aCB0byBiZSBhYm92ZSB0aGUgcm9vdC4gSW4gdGhpcyBjYXNlLCBzaW1wbHlcblx0ICAvLyBjaGVja2luZyB3aGV0aGVyIHRoZSByb290IGlzIGEgcHJlZml4IG9mIHRoZSBwYXRoIHdvbid0IHdvcmsuIEluc3RlYWQsIHdlXG5cdCAgLy8gbmVlZCB0byByZW1vdmUgY29tcG9uZW50cyBmcm9tIHRoZSByb290IG9uZSBieSBvbmUsIHVudGlsIGVpdGhlciB3ZSBmaW5kXG5cdCAgLy8gYSBwcmVmaXggdGhhdCBmaXRzLCBvciB3ZSBydW4gb3V0IG9mIGNvbXBvbmVudHMgdG8gcmVtb3ZlLlxuXHQgIHZhciBsZXZlbCA9IDA7XG5cdCAgd2hpbGUgKGFQYXRoLmluZGV4T2YoYVJvb3QgKyAnLycpICE9PSAwKSB7XG5cdCAgICB2YXIgaW5kZXggPSBhUm9vdC5sYXN0SW5kZXhPZihcIi9cIik7XG5cdCAgICBpZiAoaW5kZXggPCAwKSB7XG5cdCAgICAgIHJldHVybiBhUGF0aDtcblx0ICAgIH1cblxuXHQgICAgLy8gSWYgdGhlIG9ubHkgcGFydCBvZiB0aGUgcm9vdCB0aGF0IGlzIGxlZnQgaXMgdGhlIHNjaGVtZSAoaS5lLiBodHRwOi8vLFxuXHQgICAgLy8gZmlsZTovLy8sIGV0Yy4pLCBvbmUgb3IgbW9yZSBzbGFzaGVzICgvKSwgb3Igc2ltcGx5IG5vdGhpbmcgYXQgYWxsLCB3ZVxuXHQgICAgLy8gaGF2ZSBleGhhdXN0ZWQgYWxsIGNvbXBvbmVudHMsIHNvIHRoZSBwYXRoIGlzIG5vdCByZWxhdGl2ZSB0byB0aGUgcm9vdC5cblx0ICAgIGFSb290ID0gYVJvb3Quc2xpY2UoMCwgaW5kZXgpO1xuXHQgICAgaWYgKGFSb290Lm1hdGNoKC9eKFteXFwvXSs6XFwvKT9cXC8qJC8pKSB7XG5cdCAgICAgIHJldHVybiBhUGF0aDtcblx0ICAgIH1cblxuXHQgICAgKytsZXZlbDtcblx0ICB9XG5cblx0ICAvLyBNYWtlIHN1cmUgd2UgYWRkIGEgXCIuLi9cIiBmb3IgZWFjaCBjb21wb25lbnQgd2UgcmVtb3ZlZCBmcm9tIHRoZSByb290LlxuXHQgIHJldHVybiBBcnJheShsZXZlbCArIDEpLmpvaW4oXCIuLi9cIikgKyBhUGF0aC5zdWJzdHIoYVJvb3QubGVuZ3RoICsgMSk7XG5cdH1cblx0ZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlO1xuXG5cdHZhciBzdXBwb3J0c051bGxQcm90byA9IChmdW5jdGlvbiAoKSB7XG5cdCAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdCAgcmV0dXJuICEoJ19fcHJvdG9fXycgaW4gb2JqKTtcblx0fSgpKTtcblxuXHRmdW5jdGlvbiBpZGVudGl0eSAocykge1xuXHQgIHJldHVybiBzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJlY2F1c2UgYmVoYXZpb3IgZ29lcyB3YWNreSB3aGVuIHlvdSBzZXQgYF9fcHJvdG9fX2Agb24gb2JqZWN0cywgd2Vcblx0ICogaGF2ZSB0byBwcmVmaXggYWxsIHRoZSBzdHJpbmdzIGluIG91ciBzZXQgd2l0aCBhbiBhcmJpdHJhcnkgY2hhcmFjdGVyLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9wdWxsLzMxIGFuZFxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zb3VyY2UtbWFwL2lzc3Vlcy8zMFxuXHQgKlxuXHQgKiBAcGFyYW0gU3RyaW5nIGFTdHJcblx0ICovXG5cdGZ1bmN0aW9uIHRvU2V0U3RyaW5nKGFTdHIpIHtcblx0ICBpZiAoaXNQcm90b1N0cmluZyhhU3RyKSkge1xuXHQgICAgcmV0dXJuICckJyArIGFTdHI7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGFTdHI7XG5cdH1cblx0ZXhwb3J0cy50b1NldFN0cmluZyA9IHN1cHBvcnRzTnVsbFByb3RvID8gaWRlbnRpdHkgOiB0b1NldFN0cmluZztcblxuXHRmdW5jdGlvbiBmcm9tU2V0U3RyaW5nKGFTdHIpIHtcblx0ICBpZiAoaXNQcm90b1N0cmluZyhhU3RyKSkge1xuXHQgICAgcmV0dXJuIGFTdHIuc2xpY2UoMSk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGFTdHI7XG5cdH1cblx0ZXhwb3J0cy5mcm9tU2V0U3RyaW5nID0gc3VwcG9ydHNOdWxsUHJvdG8gPyBpZGVudGl0eSA6IGZyb21TZXRTdHJpbmc7XG5cblx0ZnVuY3Rpb24gaXNQcm90b1N0cmluZyhzKSB7XG5cdCAgaWYgKCFzKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXG5cdCAgdmFyIGxlbmd0aCA9IHMubGVuZ3RoO1xuXG5cdCAgaWYgKGxlbmd0aCA8IDkgLyogXCJfX3Byb3RvX19cIi5sZW5ndGggKi8pIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cblx0ICBpZiAocy5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpICE9PSA5NSAgLyogJ18nICovIHx8XG5cdCAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSAyKSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuXHQgICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMykgIT09IDExMSAvKiAnbycgKi8gfHxcblx0ICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDQpICE9PSAxMTYgLyogJ3QnICovIHx8XG5cdCAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA1KSAhPT0gMTExIC8qICdvJyAqLyB8fFxuXHQgICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNikgIT09IDExNCAvKiAncicgKi8gfHxcblx0ICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDcpICE9PSAxMTIgLyogJ3AnICovIHx8XG5cdCAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA4KSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuXHQgICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gOSkgIT09IDk1ICAvKiAnXycgKi8pIHtcblx0ICAgIHJldHVybiBmYWxzZTtcblx0ICB9XG5cblx0ICBmb3IgKHZhciBpID0gbGVuZ3RoIC0gMTA7IGkgPj0gMDsgaS0tKSB7XG5cdCAgICBpZiAocy5jaGFyQ29kZUF0KGkpICE9PSAzNiAvKiAnJCcgKi8pIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2hlcmUgdGhlIG9yaWdpbmFsIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG5cdCAqXG5cdCAqIE9wdGlvbmFsbHkgcGFzcyBpbiBgdHJ1ZWAgYXMgYG9ubHlDb21wYXJlR2VuZXJhdGVkYCB0byBjb25zaWRlciB0d29cblx0ICogbWFwcGluZ3Mgd2l0aCB0aGUgc2FtZSBvcmlnaW5hbCBzb3VyY2UvbGluZS9jb2x1bW4sIGJ1dCBkaWZmZXJlbnQgZ2VuZXJhdGVkXG5cdCAqIGxpbmUgYW5kIGNvbHVtbiB0aGUgc2FtZS4gVXNlZnVsIHdoZW4gc2VhcmNoaW5nIGZvciBhIG1hcHBpbmcgd2l0aCBhXG5cdCAqIHN0dWJiZWQgb3V0IG1hcHBpbmcuXG5cdCAqL1xuXHRmdW5jdGlvbiBjb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyhtYXBwaW5nQSwgbWFwcGluZ0IsIG9ubHlDb21wYXJlT3JpZ2luYWwpIHtcblx0ICB2YXIgY21wID0gbWFwcGluZ0Euc291cmNlIC0gbWFwcGluZ0Iuc291cmNlO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcblx0ICBpZiAoY21wICE9PSAwIHx8IG9ubHlDb21wYXJlT3JpZ2luYWwpIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICByZXR1cm4gbWFwcGluZ0EubmFtZSAtIG1hcHBpbmdCLm5hbWU7XG5cdH1cblx0ZXhwb3J0cy5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyA9IGNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zO1xuXG5cdC8qKlxuXHQgKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdpdGggZGVmbGF0ZWQgc291cmNlIGFuZCBuYW1lIGluZGljZXMgd2hlcmVcblx0ICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuXHQgKlxuXHQgKiBPcHRpb25hbGx5IHBhc3MgaW4gYHRydWVgIGFzIGBvbmx5Q29tcGFyZUdlbmVyYXRlZGAgdG8gY29uc2lkZXIgdHdvXG5cdCAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiwgYnV0IGRpZmZlcmVudFxuXHQgKiBzb3VyY2UvbmFtZS9vcmlnaW5hbCBsaW5lIGFuZCBjb2x1bW4gdGhlIHNhbWUuIFVzZWZ1bCB3aGVuIHNlYXJjaGluZyBmb3IgYVxuXHQgKiBtYXBwaW5nIHdpdGggYSBzdHViYmVkIG91dCBtYXBwaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCLCBvbmx5Q29tcGFyZUdlbmVyYXRlZCkge1xuXHQgIHZhciBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcblx0ICBpZiAoY21wICE9PSAwIHx8IG9ubHlDb21wYXJlR2VuZXJhdGVkKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLnNvdXJjZSAtIG1hcHBpbmdCLnNvdXJjZTtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICByZXR1cm4gbWFwcGluZ0EubmFtZSAtIG1hcHBpbmdCLm5hbWU7XG5cdH1cblx0ZXhwb3J0cy5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCA9IGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkO1xuXG5cdGZ1bmN0aW9uIHN0cmNtcChhU3RyMSwgYVN0cjIpIHtcblx0ICBpZiAoYVN0cjEgPT09IGFTdHIyKSB7XG5cdCAgICByZXR1cm4gMDtcblx0ICB9XG5cblx0ICBpZiAoYVN0cjEgPiBhU3RyMikge1xuXHQgICAgcmV0dXJuIDE7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIC0xO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2l0aCBpbmZsYXRlZCBzb3VyY2UgYW5kIG5hbWUgc3RyaW5ncyB3aGVyZVxuXHQgKiB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZChtYXBwaW5nQSwgbWFwcGluZ0IpIHtcblx0ICB2YXIgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG5cdCAgaWYgKGNtcCAhPT0gMCkge1xuXHQgICAgcmV0dXJuIGNtcDtcblx0ICB9XG5cblx0ICBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuXHQgIGlmIChjbXAgIT09IDApIHtcblx0ICAgIHJldHVybiBjbXA7XG5cdCAgfVxuXG5cdCAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcblx0ICBpZiAoY21wICE9PSAwKSB7XG5cdCAgICByZXR1cm4gY21wO1xuXHQgIH1cblxuXHQgIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG5cdH1cblx0ZXhwb3J0cy5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZCA9IGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkO1xuXG5cbi8qKiovIH0sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG5cdC8qXG5cdCAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuXHQgKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG5cdCAqL1xuXG5cdGV4cG9ydHMuR1JFQVRFU1RfTE9XRVJfQk9VTkQgPSAxO1xuXHRleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EID0gMjtcblxuXHQvKipcblx0ICogUmVjdXJzaXZlIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2guXG5cdCAqXG5cdCAqIEBwYXJhbSBhTG93IEluZGljZXMgaGVyZSBhbmQgbG93ZXIgZG8gbm90IGNvbnRhaW4gdGhlIG5lZWRsZS5cblx0ICogQHBhcmFtIGFIaWdoIEluZGljZXMgaGVyZSBhbmQgaGlnaGVyIGRvIG5vdCBjb250YWluIHRoZSBuZWVkbGUuXG5cdCAqIEBwYXJhbSBhTmVlZGxlIFRoZSBlbGVtZW50IGJlaW5nIHNlYXJjaGVkIGZvci5cblx0ICogQHBhcmFtIGFIYXlzdGFjayBUaGUgbm9uLWVtcHR5IGFycmF5IGJlaW5nIHNlYXJjaGVkLlxuXHQgKiBAcGFyYW0gYUNvbXBhcmUgRnVuY3Rpb24gd2hpY2ggdGFrZXMgdHdvIGVsZW1lbnRzIGFuZCByZXR1cm5zIC0xLCAwLCBvciAxLlxuXHQgKiBAcGFyYW0gYUJpYXMgRWl0aGVyICdiaW5hcnlTZWFyY2guR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG5cdCAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuXHQgKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuXHQgKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG5cdCAqL1xuXHRmdW5jdGlvbiByZWN1cnNpdmVTZWFyY2goYUxvdywgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG5cdCAgLy8gVGhpcyBmdW5jdGlvbiB0ZXJtaW5hdGVzIHdoZW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcblx0ICAvL1xuXHQgIC8vICAgMS4gV2UgZmluZCB0aGUgZXhhY3QgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG5cdCAgLy9cblx0ICAvLyAgIDIuIFdlIGRpZCBub3QgZmluZCB0aGUgZXhhY3QgZWxlbWVudCwgYnV0IHdlIGNhbiByZXR1cm4gdGhlIGluZGV4IG9mXG5cdCAgLy8gICAgICB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQuXG5cdCAgLy9cblx0ICAvLyAgIDMuIFdlIGRpZCBub3QgZmluZCB0aGUgZXhhY3QgZWxlbWVudCwgYW5kIHRoZXJlIGlzIG5vIG5leHQtY2xvc2VzdFxuXHQgIC8vICAgICAgZWxlbWVudCB0aGFuIHRoZSBvbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IsIHNvIHdlIHJldHVybiAtMS5cblx0ICB2YXIgbWlkID0gTWF0aC5mbG9vcigoYUhpZ2ggLSBhTG93KSAvIDIpICsgYUxvdztcblx0ICB2YXIgY21wID0gYUNvbXBhcmUoYU5lZWRsZSwgYUhheXN0YWNrW21pZF0sIHRydWUpO1xuXHQgIGlmIChjbXAgPT09IDApIHtcblx0ICAgIC8vIEZvdW5kIHRoZSBlbGVtZW50IHdlIGFyZSBsb29raW5nIGZvci5cblx0ICAgIHJldHVybiBtaWQ7XG5cdCAgfVxuXHQgIGVsc2UgaWYgKGNtcCA+IDApIHtcblx0ICAgIC8vIE91ciBuZWVkbGUgaXMgZ3JlYXRlciB0aGFuIGFIYXlzdGFja1ttaWRdLlxuXHQgICAgaWYgKGFIaWdoIC0gbWlkID4gMSkge1xuXHQgICAgICAvLyBUaGUgZWxlbWVudCBpcyBpbiB0aGUgdXBwZXIgaGFsZi5cblx0ICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChtaWQsIGFIaWdoLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIFRoZSBleGFjdCBuZWVkbGUgZWxlbWVudCB3YXMgbm90IGZvdW5kIGluIHRoaXMgaGF5c3RhY2suIERldGVybWluZSBpZlxuXHQgICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cblx0ICAgIGlmIChhQmlhcyA9PSBleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EKSB7XG5cdCAgICAgIHJldHVybiBhSGlnaCA8IGFIYXlzdGFjay5sZW5ndGggPyBhSGlnaCA6IC0xO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIG1pZDtcblx0ICAgIH1cblx0ICB9XG5cdCAgZWxzZSB7XG5cdCAgICAvLyBPdXIgbmVlZGxlIGlzIGxlc3MgdGhhbiBhSGF5c3RhY2tbbWlkXS5cblx0ICAgIGlmIChtaWQgLSBhTG93ID4gMSkge1xuXHQgICAgICAvLyBUaGUgZWxlbWVudCBpcyBpbiB0aGUgbG93ZXIgaGFsZi5cblx0ICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChhTG93LCBtaWQsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKTtcblx0ICAgIH1cblxuXHQgICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cblx0ICAgIGlmIChhQmlhcyA9PSBleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EKSB7XG5cdCAgICAgIHJldHVybiBtaWQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICByZXR1cm4gYUxvdyA8IDAgPyAtMSA6IGFMb3c7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYmluYXJ5IHNlYXJjaCB3aGljaCB3aWxsIGFsd2F5cyB0cnkgYW5kIHJldHVyblxuXHQgKiB0aGUgaW5kZXggb2YgdGhlIGNsb3Nlc3QgZWxlbWVudCBpZiB0aGVyZSBpcyBubyBleGFjdCBoaXQuIFRoaXMgaXMgYmVjYXVzZVxuXHQgKiBtYXBwaW5ncyBiZXR3ZWVuIG9yaWdpbmFsIGFuZCBnZW5lcmF0ZWQgbGluZS9jb2wgcGFpcnMgYXJlIHNpbmdsZSBwb2ludHMsXG5cdCAqIGFuZCB0aGVyZSBpcyBhbiBpbXBsaWNpdCByZWdpb24gYmV0d2VlbiBlYWNoIG9mIHRoZW0sIHNvIGEgbWlzcyBqdXN0IG1lYW5zXG5cdCAqIHRoYXQgeW91IGFyZW4ndCBvbiB0aGUgdmVyeSBzdGFydCBvZiBhIHJlZ2lvbi5cblx0ICpcblx0ICogQHBhcmFtIGFOZWVkbGUgVGhlIGVsZW1lbnQgeW91IGFyZSBsb29raW5nIGZvci5cblx0ICogQHBhcmFtIGFIYXlzdGFjayBUaGUgYXJyYXkgdGhhdCBpcyBiZWluZyBzZWFyY2hlZC5cblx0ICogQHBhcmFtIGFDb21wYXJlIEEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIG5lZWRsZSBhbmQgYW4gZWxlbWVudCBpbiB0aGVcblx0ICogICAgIGFycmF5IGFuZCByZXR1cm5zIC0xLCAwLCBvciAxIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBuZWVkbGUgaXMgbGVzc1xuXHQgKiAgICAgdGhhbiwgZXF1YWwgdG8sIG9yIGdyZWF0ZXIgdGhhbiB0aGUgZWxlbWVudCwgcmVzcGVjdGl2ZWx5LlxuXHQgKiBAcGFyYW0gYUJpYXMgRWl0aGVyICdiaW5hcnlTZWFyY2guR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG5cdCAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuXHQgKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuXHQgKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG5cdCAqICAgICBEZWZhdWx0cyB0byAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cblx0ICovXG5cdGV4cG9ydHMuc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG5cdCAgaWYgKGFIYXlzdGFjay5sZW5ndGggPT09IDApIHtcblx0ICAgIHJldHVybiAtMTtcblx0ICB9XG5cblx0ICB2YXIgaW5kZXggPSByZWN1cnNpdmVTZWFyY2goLTEsIGFIYXlzdGFjay5sZW5ndGgsIGFOZWVkbGUsIGFIYXlzdGFjayxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYUNvbXBhcmUsIGFCaWFzIHx8IGV4cG9ydHMuR1JFQVRFU1RfTE9XRVJfQk9VTkQpO1xuXHQgIGlmIChpbmRleCA8IDApIHtcblx0ICAgIHJldHVybiAtMTtcblx0ICB9XG5cblx0ICAvLyBXZSBoYXZlIGZvdW5kIGVpdGhlciB0aGUgZXhhY3QgZWxlbWVudCwgb3IgdGhlIG5leHQtY2xvc2VzdCBlbGVtZW50IHRoYW5cblx0ICAvLyB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLiBIb3dldmVyLCB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSBzdWNoXG5cdCAgLy8gZWxlbWVudC4gTWFrZSBzdXJlIHdlIGFsd2F5cyByZXR1cm4gdGhlIHNtYWxsZXN0IG9mIHRoZXNlLlxuXHQgIHdoaWxlIChpbmRleCAtIDEgPj0gMCkge1xuXHQgICAgaWYgKGFDb21wYXJlKGFIYXlzdGFja1tpbmRleF0sIGFIYXlzdGFja1tpbmRleCAtIDFdLCB0cnVlKSAhPT0gMCkge1xuXHQgICAgICBicmVhaztcblx0ICAgIH1cblx0ICAgIC0taW5kZXg7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGluZGV4O1xuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG5cdC8qXG5cdCAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG5cdCAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuXHQgKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG5cdCAqL1xuXG5cdHZhciB1dGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cblx0LyoqXG5cdCAqIEEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggaXMgYSBjb21iaW5hdGlvbiBvZiBhbiBhcnJheSBhbmQgYSBzZXQuIEFkZGluZyBhIG5ld1xuXHQgKiBtZW1iZXIgaXMgTygxKSwgdGVzdGluZyBmb3IgbWVtYmVyc2hpcCBpcyBPKDEpLCBhbmQgZmluZGluZyB0aGUgaW5kZXggb2YgYW5cblx0ICogZWxlbWVudCBpcyBPKDEpLiBSZW1vdmluZyBlbGVtZW50cyBmcm9tIHRoZSBzZXQgaXMgbm90IHN1cHBvcnRlZC4gT25seVxuXHQgKiBzdHJpbmdzIGFyZSBzdXBwb3J0ZWQgZm9yIG1lbWJlcnNoaXAuXG5cdCAqL1xuXHRmdW5jdGlvbiBBcnJheVNldCgpIHtcblx0ICB0aGlzLl9hcnJheSA9IFtdO1xuXHQgIHRoaXMuX3NldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGljIG1ldGhvZCBmb3IgY3JlYXRpbmcgQXJyYXlTZXQgaW5zdGFuY2VzIGZyb20gYW4gZXhpc3RpbmcgYXJyYXkuXG5cdCAqL1xuXHRBcnJheVNldC5mcm9tQXJyYXkgPSBmdW5jdGlvbiBBcnJheVNldF9mcm9tQXJyYXkoYUFycmF5LCBhQWxsb3dEdXBsaWNhdGVzKSB7XG5cdCAgdmFyIHNldCA9IG5ldyBBcnJheVNldCgpO1xuXHQgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhQXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgIHNldC5hZGQoYUFycmF5W2ldLCBhQWxsb3dEdXBsaWNhdGVzKTtcblx0ICB9XG5cdCAgcmV0dXJuIHNldDtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJuIGhvdyBtYW55IHVuaXF1ZSBpdGVtcyBhcmUgaW4gdGhpcyBBcnJheVNldC4gSWYgZHVwbGljYXRlcyBoYXZlIGJlZW5cblx0ICogYWRkZWQsIHRoYW4gdGhvc2UgZG8gbm90IGNvdW50IHRvd2FyZHMgdGhlIHNpemUuXG5cdCAqXG5cdCAqIEByZXR1cm5zIE51bWJlclxuXHQgKi9cblx0QXJyYXlTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiBBcnJheVNldF9zaXplKCkge1xuXHQgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9zZXQpLmxlbmd0aDtcblx0fTtcblxuXHQvKipcblx0ICogQWRkIHRoZSBnaXZlbiBzdHJpbmcgdG8gdGhpcyBzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBTdHJpbmcgYVN0clxuXHQgKi9cblx0QXJyYXlTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIEFycmF5U2V0X2FkZChhU3RyLCBhQWxsb3dEdXBsaWNhdGVzKSB7XG5cdCAgdmFyIHNTdHIgPSB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuXHQgIHZhciBpc0R1cGxpY2F0ZSA9IGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cik7XG5cdCAgdmFyIGlkeCA9IHRoaXMuX2FycmF5Lmxlbmd0aDtcblx0ICBpZiAoIWlzRHVwbGljYXRlIHx8IGFBbGxvd0R1cGxpY2F0ZXMpIHtcblx0ICAgIHRoaXMuX2FycmF5LnB1c2goYVN0cik7XG5cdCAgfVxuXHQgIGlmICghaXNEdXBsaWNhdGUpIHtcblx0ICAgIHRoaXMuX3NldFtzU3RyXSA9IGlkeDtcblx0ICB9XG5cdH07XG5cblx0LyoqXG5cdCAqIElzIHRoZSBnaXZlbiBzdHJpbmcgYSBtZW1iZXIgb2YgdGhpcyBzZXQ/XG5cdCAqXG5cdCAqIEBwYXJhbSBTdHJpbmcgYVN0clxuXHQgKi9cblx0QXJyYXlTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIEFycmF5U2V0X2hhcyhhU3RyKSB7XG5cdCAgdmFyIHNTdHIgPSB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuXHQgIHJldHVybiBoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBXaGF0IGlzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gc3RyaW5nIGluIHRoZSBhcnJheT9cblx0ICpcblx0ICogQHBhcmFtIFN0cmluZyBhU3RyXG5cdCAqL1xuXHRBcnJheVNldC5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIEFycmF5U2V0X2luZGV4T2YoYVN0cikge1xuXHQgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcblx0ICBpZiAoaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKSkge1xuXHQgICAgcmV0dXJuIHRoaXMuX3NldFtzU3RyXTtcblx0ICB9XG5cdCAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU3RyICsgJ1wiIGlzIG5vdCBpbiB0aGUgc2V0LicpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBXaGF0IGlzIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleD9cblx0ICpcblx0ICogQHBhcmFtIE51bWJlciBhSWR4XG5cdCAqL1xuXHRBcnJheVNldC5wcm90b3R5cGUuYXQgPSBmdW5jdGlvbiBBcnJheVNldF9hdChhSWR4KSB7XG5cdCAgaWYgKGFJZHggPj0gMCAmJiBhSWR4IDwgdGhpcy5fYXJyYXkubGVuZ3RoKSB7XG5cdCAgICByZXR1cm4gdGhpcy5fYXJyYXlbYUlkeF07XG5cdCAgfVxuXHQgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBpbmRleGVkIGJ5ICcgKyBhSWR4KTtcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzZXQgKHdoaWNoIGhhcyB0aGUgcHJvcGVyIGluZGljZXNcblx0ICogaW5kaWNhdGVkIGJ5IGluZGV4T2YpLiBOb3RlIHRoYXQgdGhpcyBpcyBhIGNvcHkgb2YgdGhlIGludGVybmFsIGFycmF5IHVzZWRcblx0ICogZm9yIHN0b3JpbmcgdGhlIG1lbWJlcnMgc28gdGhhdCBubyBvbmUgY2FuIG1lc3Mgd2l0aCBpbnRlcm5hbCBzdGF0ZS5cblx0ICovXG5cdEFycmF5U2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gQXJyYXlTZXRfdG9BcnJheSgpIHtcblx0ICByZXR1cm4gdGhpcy5fYXJyYXkuc2xpY2UoKTtcblx0fTtcblxuXHRleHBvcnRzLkFycmF5U2V0ID0gQXJyYXlTZXQ7XG5cblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cblx0Lypcblx0ICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG5cdCAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2Vcblx0ICpcblx0ICogQmFzZWQgb24gdGhlIEJhc2UgNjQgVkxRIGltcGxlbWVudGF0aW9uIGluIENsb3N1cmUgQ29tcGlsZXI6XG5cdCAqIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2xvc3VyZS1jb21waWxlci9zb3VyY2UvYnJvd3NlL3RydW5rL3NyYy9jb20vZ29vZ2xlL2RlYnVnZ2luZy9zb3VyY2VtYXAvQmFzZTY0VkxRLmphdmFcblx0ICpcblx0ICogQ29weXJpZ2h0IDIwMTEgVGhlIENsb3N1cmUgQ29tcGlsZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblx0ICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG5cdCAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcblx0ICogbWV0OlxuXHQgKlxuXHQgKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuXHQgKiAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cdCAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcblx0ICogICAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcblx0ICogICAgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkXG5cdCAqICAgIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblx0ICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuXHQgKiAgICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWRcblx0ICogICAgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXHQgKlxuXHQgKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG5cdCAqIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcblx0ICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG5cdCAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG5cdCAqIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuXHQgKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG5cdCAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuXHQgKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcblx0ICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuXHQgKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcblx0ICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblx0ICovXG5cblx0dmFyIGJhc2U2NCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cblx0Ly8gQSBzaW5nbGUgYmFzZSA2NCBkaWdpdCBjYW4gY29udGFpbiA2IGJpdHMgb2YgZGF0YS4gRm9yIHRoZSBiYXNlIDY0IHZhcmlhYmxlXG5cdC8vIGxlbmd0aCBxdWFudGl0aWVzIHdlIHVzZSBpbiB0aGUgc291cmNlIG1hcCBzcGVjLCB0aGUgZmlyc3QgYml0IGlzIHRoZSBzaWduLFxuXHQvLyB0aGUgbmV4dCBmb3VyIGJpdHMgYXJlIHRoZSBhY3R1YWwgdmFsdWUsIGFuZCB0aGUgNnRoIGJpdCBpcyB0aGVcblx0Ly8gY29udGludWF0aW9uIGJpdC4gVGhlIGNvbnRpbnVhdGlvbiBiaXQgdGVsbHMgdXMgd2hldGhlciB0aGVyZSBhcmUgbW9yZVxuXHQvLyBkaWdpdHMgaW4gdGhpcyB2YWx1ZSBmb2xsb3dpbmcgdGhpcyBkaWdpdC5cblx0Ly9cblx0Ly8gICBDb250aW51YXRpb25cblx0Ly8gICB8ICAgIFNpZ25cblx0Ly8gICB8ICAgIHxcblx0Ly8gICBWICAgIFZcblx0Ly8gICAxMDEwMTFcblxuXHR2YXIgVkxRX0JBU0VfU0hJRlQgPSA1O1xuXG5cdC8vIGJpbmFyeTogMTAwMDAwXG5cdHZhciBWTFFfQkFTRSA9IDEgPDwgVkxRX0JBU0VfU0hJRlQ7XG5cblx0Ly8gYmluYXJ5OiAwMTExMTFcblx0dmFyIFZMUV9CQVNFX01BU0sgPSBWTFFfQkFTRSAtIDE7XG5cblx0Ly8gYmluYXJ5OiAxMDAwMDBcblx0dmFyIFZMUV9DT05USU5VQVRJT05fQklUID0gVkxRX0JBU0U7XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGZyb20gYSB0d28tY29tcGxlbWVudCB2YWx1ZSB0byBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuXHQgKiBwbGFjZWQgaW4gdGhlIGxlYXN0IHNpZ25pZmljYW50IGJpdC4gIEZvciBleGFtcGxlLCBhcyBkZWNpbWFsczpcblx0ICogICAxIGJlY29tZXMgMiAoMTAgYmluYXJ5KSwgLTEgYmVjb21lcyAzICgxMSBiaW5hcnkpXG5cdCAqICAgMiBiZWNvbWVzIDQgKDEwMCBiaW5hcnkpLCAtMiBiZWNvbWVzIDUgKDEwMSBiaW5hcnkpXG5cdCAqL1xuXHRmdW5jdGlvbiB0b1ZMUVNpZ25lZChhVmFsdWUpIHtcblx0ICByZXR1cm4gYVZhbHVlIDwgMFxuXHQgICAgPyAoKC1hVmFsdWUpIDw8IDEpICsgMVxuXHQgICAgOiAoYVZhbHVlIDw8IDEpICsgMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB0byBhIHR3by1jb21wbGVtZW50IHZhbHVlIGZyb20gYSB2YWx1ZSB3aGVyZSB0aGUgc2lnbiBiaXQgaXNcblx0ICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG5cdCAqICAgMiAoMTAgYmluYXJ5KSBiZWNvbWVzIDEsIDMgKDExIGJpbmFyeSkgYmVjb21lcyAtMVxuXHQgKiAgIDQgKDEwMCBiaW5hcnkpIGJlY29tZXMgMiwgNSAoMTAxIGJpbmFyeSkgYmVjb21lcyAtMlxuXHQgKi9cblx0ZnVuY3Rpb24gZnJvbVZMUVNpZ25lZChhVmFsdWUpIHtcblx0ICB2YXIgaXNOZWdhdGl2ZSA9IChhVmFsdWUgJiAxKSA9PT0gMTtcblx0ICB2YXIgc2hpZnRlZCA9IGFWYWx1ZSA+PiAxO1xuXHQgIHJldHVybiBpc05lZ2F0aXZlXG5cdCAgICA/IC1zaGlmdGVkXG5cdCAgICA6IHNoaWZ0ZWQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYmFzZSA2NCBWTFEgZW5jb2RlZCB2YWx1ZS5cblx0ICovXG5cdGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gYmFzZTY0VkxRX2VuY29kZShhVmFsdWUpIHtcblx0ICB2YXIgZW5jb2RlZCA9IFwiXCI7XG5cdCAgdmFyIGRpZ2l0O1xuXG5cdCAgdmFyIHZscSA9IHRvVkxRU2lnbmVkKGFWYWx1ZSk7XG5cblx0ICBkbyB7XG5cdCAgICBkaWdpdCA9IHZscSAmIFZMUV9CQVNFX01BU0s7XG5cdCAgICB2bHEgPj4+PSBWTFFfQkFTRV9TSElGVDtcblx0ICAgIGlmICh2bHEgPiAwKSB7XG5cdCAgICAgIC8vIFRoZXJlIGFyZSBzdGlsbCBtb3JlIGRpZ2l0cyBpbiB0aGlzIHZhbHVlLCBzbyB3ZSBtdXN0IG1ha2Ugc3VyZSB0aGVcblx0ICAgICAgLy8gY29udGludWF0aW9uIGJpdCBpcyBtYXJrZWQuXG5cdCAgICAgIGRpZ2l0IHw9IFZMUV9DT05USU5VQVRJT05fQklUO1xuXHQgICAgfVxuXHQgICAgZW5jb2RlZCArPSBiYXNlNjQuZW5jb2RlKGRpZ2l0KTtcblx0ICB9IHdoaWxlICh2bHEgPiAwKTtcblxuXHQgIHJldHVybiBlbmNvZGVkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWNvZGVzIHRoZSBuZXh0IGJhc2UgNjQgVkxRIHZhbHVlIGZyb20gdGhlIGdpdmVuIHN0cmluZyBhbmQgcmV0dXJucyB0aGVcblx0ICogdmFsdWUgYW5kIHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdmlhIHRoZSBvdXQgcGFyYW1ldGVyLlxuXHQgKi9cblx0ZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiBiYXNlNjRWTFFfZGVjb2RlKGFTdHIsIGFJbmRleCwgYU91dFBhcmFtKSB7XG5cdCAgdmFyIHN0ckxlbiA9IGFTdHIubGVuZ3RoO1xuXHQgIHZhciByZXN1bHQgPSAwO1xuXHQgIHZhciBzaGlmdCA9IDA7XG5cdCAgdmFyIGNvbnRpbnVhdGlvbiwgZGlnaXQ7XG5cblx0ICBkbyB7XG5cdCAgICBpZiAoYUluZGV4ID49IHN0ckxlbikge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBtb3JlIGRpZ2l0cyBpbiBiYXNlIDY0IFZMUSB2YWx1ZS5cIik7XG5cdCAgICB9XG5cblx0ICAgIGRpZ2l0ID0gYmFzZTY0LmRlY29kZShhU3RyLmNoYXJDb2RlQXQoYUluZGV4KyspKTtcblx0ICAgIGlmIChkaWdpdCA9PT0gLTEpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgZGlnaXQ6IFwiICsgYVN0ci5jaGFyQXQoYUluZGV4IC0gMSkpO1xuXHQgICAgfVxuXG5cdCAgICBjb250aW51YXRpb24gPSAhIShkaWdpdCAmIFZMUV9DT05USU5VQVRJT05fQklUKTtcblx0ICAgIGRpZ2l0ICY9IFZMUV9CQVNFX01BU0s7XG5cdCAgICByZXN1bHQgPSByZXN1bHQgKyAoZGlnaXQgPDwgc2hpZnQpO1xuXHQgICAgc2hpZnQgKz0gVkxRX0JBU0VfU0hJRlQ7XG5cdCAgfSB3aGlsZSAoY29udGludWF0aW9uKTtcblxuXHQgIGFPdXRQYXJhbS52YWx1ZSA9IGZyb21WTFFTaWduZWQocmVzdWx0KTtcblx0ICBhT3V0UGFyYW0ucmVzdCA9IGFJbmRleDtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuXHQvKlxuXHQgKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuXHQgKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcblx0ICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuXHQgKi9cblxuXHR2YXIgaW50VG9DaGFyTWFwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nLnNwbGl0KCcnKTtcblxuXHQvKipcblx0ICogRW5jb2RlIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIDAgdG8gNjMgdG8gYSBzaW5nbGUgYmFzZSA2NCBkaWdpdC5cblx0ICovXG5cdGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG51bWJlcikge1xuXHQgIGlmICgwIDw9IG51bWJlciAmJiBudW1iZXIgPCBpbnRUb0NoYXJNYXAubGVuZ3RoKSB7XG5cdCAgICByZXR1cm4gaW50VG9DaGFyTWFwW251bWJlcl07XG5cdCAgfVxuXHQgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNdXN0IGJlIGJldHdlZW4gMCBhbmQgNjM6IFwiICsgbnVtYmVyKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVjb2RlIGEgc2luZ2xlIGJhc2UgNjQgY2hhcmFjdGVyIGNvZGUgZGlnaXQgdG8gYW4gaW50ZWdlci4gUmV0dXJucyAtMSBvblxuXHQgKiBmYWlsdXJlLlxuXHQgKi9cblx0ZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcblx0ICB2YXIgYmlnQSA9IDY1OyAgICAgLy8gJ0EnXG5cdCAgdmFyIGJpZ1ogPSA5MDsgICAgIC8vICdaJ1xuXG5cdCAgdmFyIGxpdHRsZUEgPSA5NzsgIC8vICdhJ1xuXHQgIHZhciBsaXR0bGVaID0gMTIyOyAvLyAneidcblxuXHQgIHZhciB6ZXJvID0gNDg7ICAgICAvLyAnMCdcblx0ICB2YXIgbmluZSA9IDU3OyAgICAgLy8gJzknXG5cblx0ICB2YXIgcGx1cyA9IDQzOyAgICAgLy8gJysnXG5cdCAgdmFyIHNsYXNoID0gNDc7ICAgIC8vICcvJ1xuXG5cdCAgdmFyIGxpdHRsZU9mZnNldCA9IDI2O1xuXHQgIHZhciBudW1iZXJPZmZzZXQgPSA1MjtcblxuXHQgIC8vIDAgLSAyNTogQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcblx0ICBpZiAoYmlnQSA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBiaWdaKSB7XG5cdCAgICByZXR1cm4gKGNoYXJDb2RlIC0gYmlnQSk7XG5cdCAgfVxuXG5cdCAgLy8gMjYgLSA1MTogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcblx0ICBpZiAobGl0dGxlQSA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBsaXR0bGVaKSB7XG5cdCAgICByZXR1cm4gKGNoYXJDb2RlIC0gbGl0dGxlQSArIGxpdHRsZU9mZnNldCk7XG5cdCAgfVxuXG5cdCAgLy8gNTIgLSA2MTogMDEyMzQ1Njc4OVxuXHQgIGlmICh6ZXJvIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IG5pbmUpIHtcblx0ICAgIHJldHVybiAoY2hhckNvZGUgLSB6ZXJvICsgbnVtYmVyT2Zmc2V0KTtcblx0ICB9XG5cblx0ICAvLyA2MjogK1xuXHQgIGlmIChjaGFyQ29kZSA9PSBwbHVzKSB7XG5cdCAgICByZXR1cm4gNjI7XG5cdCAgfVxuXG5cdCAgLy8gNjM6IC9cblx0ICBpZiAoY2hhckNvZGUgPT0gc2xhc2gpIHtcblx0ICAgIHJldHVybiA2Mztcblx0ICB9XG5cblx0ICAvLyBJbnZhbGlkIGJhc2U2NCBkaWdpdC5cblx0ICByZXR1cm4gLTE7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cblx0Lypcblx0ICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcblx0ICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG5cdCAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2Vcblx0ICovXG5cblx0Ly8gSXQgdHVybnMgb3V0IHRoYXQgc29tZSAobW9zdD8pIEphdmFTY3JpcHQgZW5naW5lcyBkb24ndCBzZWxmLWhvc3Rcblx0Ly8gYEFycmF5LnByb3RvdHlwZS5zb3J0YC4gVGhpcyBtYWtlcyBzZW5zZSBiZWNhdXNlIEMrKyB3aWxsIGxpa2VseSByZW1haW5cblx0Ly8gZmFzdGVyIHRoYW4gSlMgd2hlbiBkb2luZyByYXcgQ1BVLWludGVuc2l2ZSBzb3J0aW5nLiBIb3dldmVyLCB3aGVuIHVzaW5nIGFcblx0Ly8gY3VzdG9tIGNvbXBhcmF0b3IgZnVuY3Rpb24sIGNhbGxpbmcgYmFjayBhbmQgZm9ydGggYmV0d2VlbiB0aGUgVk0ncyBDKysgYW5kXG5cdC8vIEpJVCdkIEpTIGlzIHJhdGhlciBzbG93ICphbmQqIGxvc2VzIEpJVCB0eXBlIGluZm9ybWF0aW9uLCByZXN1bHRpbmcgaW5cblx0Ly8gd29yc2UgZ2VuZXJhdGVkIGNvZGUgZm9yIHRoZSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRoYW4gd291bGQgYmUgb3B0aW1hbC4gSW5cblx0Ly8gZmFjdCwgd2hlbiBzb3J0aW5nIHdpdGggYSBjb21wYXJhdG9yLCB0aGVzZSBjb3N0cyBvdXR3ZWlnaCB0aGUgYmVuZWZpdHMgb2Zcblx0Ly8gc29ydGluZyBpbiBDKysuIEJ5IHVzaW5nIG91ciBvd24gSlMtaW1wbGVtZW50ZWQgUXVpY2sgU29ydCAoYmVsb3cpLCB3ZSBnZXRcblx0Ly8gYSB+MzUwMG1zIG1lYW4gc3BlZWQtdXAgaW4gYGJlbmNoL2JlbmNoLmh0bWxgLlxuXG5cdC8qKlxuXHQgKiBTd2FwIHRoZSBlbGVtZW50cyBpbmRleGVkIGJ5IGB4YCBhbmQgYHlgIGluIHRoZSBhcnJheSBgYXJ5YC5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gYXJ5XG5cdCAqICAgICAgICBUaGUgYXJyYXkuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB4XG5cdCAqICAgICAgICBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB5XG5cdCAqICAgICAgICBUaGUgaW5kZXggb2YgdGhlIHNlY29uZCBpdGVtLlxuXHQgKi9cblx0ZnVuY3Rpb24gc3dhcChhcnksIHgsIHkpIHtcblx0ICB2YXIgdGVtcCA9IGFyeVt4XTtcblx0ICBhcnlbeF0gPSBhcnlbeV07XG5cdCAgYXJ5W3ldID0gdGVtcDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZSBgbG93IC4uIGhpZ2hgIGluY2x1c2l2ZS5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGxvd1xuXHQgKiAgICAgICAgVGhlIGxvd2VyIGJvdW5kIG9uIHRoZSByYW5nZS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IGhpZ2hcblx0ICogICAgICAgIFRoZSB1cHBlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG5cdCAqL1xuXHRmdW5jdGlvbiByYW5kb21JbnRJblJhbmdlKGxvdywgaGlnaCkge1xuXHQgIHJldHVybiBNYXRoLnJvdW5kKGxvdyArIChNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpKSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIFF1aWNrIFNvcnQgYWxnb3JpdGhtLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnlcblx0ICogICAgICAgIEFuIGFycmF5IHRvIHNvcnQuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3Jcblx0ICogICAgICAgIEZ1bmN0aW9uIHRvIHVzZSB0byBjb21wYXJlIHR3byBpdGVtcy5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBcblx0ICogICAgICAgIFN0YXJ0IGluZGV4IG9mIHRoZSBhcnJheVxuXHQgKiBAcGFyYW0ge051bWJlcn0gclxuXHQgKiAgICAgICAgRW5kIGluZGV4IG9mIHRoZSBhcnJheVxuXHQgKi9cblx0ZnVuY3Rpb24gZG9RdWlja1NvcnQoYXJ5LCBjb21wYXJhdG9yLCBwLCByKSB7XG5cdCAgLy8gSWYgb3VyIGxvd2VyIGJvdW5kIGlzIGxlc3MgdGhhbiBvdXIgdXBwZXIgYm91bmQsIHdlICgxKSBwYXJ0aXRpb24gdGhlXG5cdCAgLy8gYXJyYXkgaW50byB0d28gcGllY2VzIGFuZCAoMikgcmVjdXJzZSBvbiBlYWNoIGhhbGYuIElmIGl0IGlzIG5vdCwgdGhpcyBpc1xuXHQgIC8vIHRoZSBlbXB0eSBhcnJheSBhbmQgb3VyIGJhc2UgY2FzZS5cblxuXHQgIGlmIChwIDwgcikge1xuXHQgICAgLy8gKDEpIFBhcnRpdGlvbmluZy5cblx0ICAgIC8vXG5cdCAgICAvLyBUaGUgcGFydGl0aW9uaW5nIGNob29zZXMgYSBwaXZvdCBiZXR3ZWVuIGBwYCBhbmQgYHJgIGFuZCBtb3ZlcyBhbGxcblx0ICAgIC8vIGVsZW1lbnRzIHRoYXQgYXJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcGl2b3QgdG8gdGhlIGJlZm9yZSBpdCwgYW5kXG5cdCAgICAvLyBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgYXJlIGdyZWF0ZXIgdGhhbiBpdCBhZnRlciBpdC4gVGhlIGVmZmVjdCBpcyB0aGF0XG5cdCAgICAvLyBvbmNlIHBhcnRpdGlvbiBpcyBkb25lLCB0aGUgcGl2b3QgaXMgaW4gdGhlIGV4YWN0IHBsYWNlIGl0IHdpbGwgYmUgd2hlblxuXHQgICAgLy8gdGhlIGFycmF5IGlzIHB1dCBpbiBzb3J0ZWQgb3JkZXIsIGFuZCBpdCB3aWxsIG5vdCBuZWVkIHRvIGJlIG1vdmVkXG5cdCAgICAvLyBhZ2Fpbi4gVGhpcyBydW5zIGluIE8obikgdGltZS5cblxuXHQgICAgLy8gQWx3YXlzIGNob29zZSBhIHJhbmRvbSBwaXZvdCBzbyB0aGF0IGFuIGlucHV0IGFycmF5IHdoaWNoIGlzIHJldmVyc2Vcblx0ICAgIC8vIHNvcnRlZCBkb2VzIG5vdCBjYXVzZSBPKG5eMikgcnVubmluZyB0aW1lLlxuXHQgICAgdmFyIHBpdm90SW5kZXggPSByYW5kb21JbnRJblJhbmdlKHAsIHIpO1xuXHQgICAgdmFyIGkgPSBwIC0gMTtcblxuXHQgICAgc3dhcChhcnksIHBpdm90SW5kZXgsIHIpO1xuXHQgICAgdmFyIHBpdm90ID0gYXJ5W3JdO1xuXG5cdCAgICAvLyBJbW1lZGlhdGVseSBhZnRlciBgamAgaXMgaW5jcmVtZW50ZWQgaW4gdGhpcyBsb29wLCB0aGUgZm9sbG93aW5nIGhvbGRcblx0ICAgIC8vIHRydWU6XG5cdCAgICAvL1xuXHQgICAgLy8gICAqIEV2ZXJ5IGVsZW1lbnQgaW4gYGFyeVtwIC4uIGldYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90LlxuXHQgICAgLy9cblx0ICAgIC8vICAgKiBFdmVyeSBlbGVtZW50IGluIGBhcnlbaSsxIC4uIGotMV1gIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGl2b3QuXG5cdCAgICBmb3IgKHZhciBqID0gcDsgaiA8IHI7IGorKykge1xuXHQgICAgICBpZiAoY29tcGFyYXRvcihhcnlbal0sIHBpdm90KSA8PSAwKSB7XG5cdCAgICAgICAgaSArPSAxO1xuXHQgICAgICAgIHN3YXAoYXJ5LCBpLCBqKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBzd2FwKGFyeSwgaSArIDEsIGopO1xuXHQgICAgdmFyIHEgPSBpICsgMTtcblxuXHQgICAgLy8gKDIpIFJlY3Vyc2Ugb24gZWFjaCBoYWxmLlxuXG5cdCAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHAsIHEgLSAxKTtcblx0ICAgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcSArIDEsIHIpO1xuXHQgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTb3J0IHRoZSBnaXZlbiBhcnJheSBpbi1wbGFjZSB3aXRoIHRoZSBnaXZlbiBjb21wYXJhdG9yIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnlcblx0ICogICAgICAgIEFuIGFycmF5IHRvIHNvcnQuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3Jcblx0ICogICAgICAgIEZ1bmN0aW9uIHRvIHVzZSB0byBjb21wYXJlIHR3byBpdGVtcy5cblx0ICovXG5cdGV4cG9ydHMucXVpY2tTb3J0ID0gZnVuY3Rpb24gKGFyeSwgY29tcGFyYXRvcikge1xuXHQgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgMCwgYXJ5Lmxlbmd0aCAtIDEpO1xuXHR9O1xuXG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjsiLCJpbXBvcnQgc20gZnJvbSAnc291cmNlbWFwcGVkLXN0YWNrdHJhY2UnO1xyXG5cclxuY29uc3QgYmF0Y2hTZW5kSW50ZXJ2YWwgPSAxMDAwMDtcclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBhcHBOYW1lOiAnTm90IFNwZWNpZmllZCcsXHJcbiAgICBtYXhNZXNzYWdlc1BlckludGVydmFsOiAzLFxyXG4gICAgc2VydmVyQ2FsbEZ1bmN0aW9uOiBudWxsLFxyXG4gICAgZmlsdGVyczoge1xyXG4gICAgICAgIGlnbm9yZWRFcnJvcnM6IFtdXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNpbXBsZUNsaWVudExvZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lcnJvckNhY2hlID0gW107XHJcbiAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkR2xvYmFsRXJyb3JIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRCYXRjaCgpO1xyXG4gICAgICAgIH0sIGJhdGNoU2VuZEludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2VuZEJhdGNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVycm9yQ2FjaGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTE9HR0VSOiBObyBlcnJvcnMgdG8gc2VuZC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZXJ2ZXJDYWxsRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZlckNhbGxGdW5jdGlvbi5jYWxsKHRoaXMsIHRoaXMuZXJyb3JDYWNoZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMT0dHRVI6ICR7dGhpcy5lcnJvckNhY2hlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lcnJvckNhY2hlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZEVycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5lcnJvckNhY2hlLmxlbmd0aCA+IHRoaXMubWF4TWVzc2FnZXNQZXJJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAvLyBkb24ndCBhZGQgYW55IG1vcmUgZXJyb3JzIHRvIHRoZSBzZW5kaW5nIGJhdGNoXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JDYWNoZS5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9hZGRHbG9iYWxFcnJvckhhbmRsZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93Lm9uZXJyb3IgPSBmdW5jdGlvbiAobXNnLCB1cmwsIGxpbmVObywgY29sdW1uTm8sIGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9IG1zZy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJzdHJpbmcgPSBcInNjcmlwdCBlcnJvclwiO1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nLmluZGV4T2Yoc3Vic3RyaW5nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCByZXBvcnQgZXJyb3JzIGdldHRpbmcgc2NyaXB0cy4gIFxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBjb3VsZCBiZSBFV05cclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdTY3JpcHQgRXJyb3I6IFNlZSBCcm93c2VyIENvbnNvbGUgZm9yIERldGFpbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc20ubWFwU3RhY2tUcmFjZShlcnJvci5zdGFjaywgKG1hcHBlZFN0YWNrKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVObzogbGluZU5vLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5ObzogY29sdW1uTm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBtYXBwZWRTdGFjay5qb2luKCcvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzoge31cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgdXNlckluZm8gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYXBwICYmIGFwcC5zdG9yZXMgJiYgYXBwLnN0b3Jlcy51c2VyUHJvZmlsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGFwcENvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB1c2VySW5mby51YmlOdW1iZXIgPSBhcHBDb25maWcudWJpTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVzc2FnZU9iamVjdC51c2VySW5mbyA9IHVzZXJJbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2FkZEVycm9yLmNhbGwoc2VsZiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbXBsZUNsaWVudExvZ2dlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==