var foobar = (function (exports) {
  'use strict';

  function foo() {
      console.log("foo");
  }
  function bar() {
      console.log("bar");
  }

  var FoobarUtil = {
    __proto__: null,
    foo: foo,
    bar: bar
  };

  exports.FoobarUtil = FoobarUtil;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
