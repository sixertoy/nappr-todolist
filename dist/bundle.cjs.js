'use strict';
function e(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(exports, '__esModule', { value: !0 });
var t = require('react'),
  r = e(t),
  n = require('react-jss'),
  o = e(require('classnames'));
function a(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function i() {
  return (i =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function c(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function s(e, t) {
  if (null == e) return {};
  var r,
    n,
    o = (function(e, t) {
      if (null == e) return {};
      var r,
        n,
        o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      (r = a[n]),
        t.indexOf(r) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function l(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
        return;
      var r = [],
        n = !0,
        o = !1,
        a = void 0;
      try {
        for (
          var i, c = e[Symbol.iterator]();
          !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t);
          n = !0
        );
      } catch (e) {
        (o = !0), (a = e);
      } finally {
        try {
          n || null == c.return || c.return();
        } finally {
          if (o) throw a;
        }
      }
      return r;
    })(e, t) ||
    f(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function u(e) {
  return (
    (function(e) {
      if (Array.isArray(e)) return p(e);
    })(e) ||
    (function(e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    f(e) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function f(e, t) {
  if (e) {
    if ('string' == typeof e) return p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === r && e.constructor && (r = e.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(r)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? p(e, t)
        : void 0
    );
  }
}
function p(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function d(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
}
var m = 'function' == typeof Symbol && Symbol.for,
  y = m ? Symbol.for('react.element') : 60103,
  h = m ? Symbol.for('react.portal') : 60106,
  b = m ? Symbol.for('react.fragment') : 60107,
  v = m ? Symbol.for('react.strict_mode') : 60108,
  g = m ? Symbol.for('react.profiler') : 60114,
  w = m ? Symbol.for('react.provider') : 60109,
  E = m ? Symbol.for('react.context') : 60110,
  O = m ? Symbol.for('react.async_mode') : 60111,
  S = m ? Symbol.for('react.concurrent_mode') : 60111,
  k = m ? Symbol.for('react.forward_ref') : 60112,
  x = m ? Symbol.for('react.suspense') : 60113,
  C = m ? Symbol.for('react.suspense_list') : 60120,
  j = m ? Symbol.for('react.memo') : 60115,
  P = m ? Symbol.for('react.lazy') : 60116,
  T = m ? Symbol.for('react.block') : 60121,
  R = m ? Symbol.for('react.fundamental') : 60117,
  N = m ? Symbol.for('react.responder') : 60118,
  $ = m ? Symbol.for('react.scope') : 60119;
function I(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case y:
        switch ((e = e.type)) {
          case O:
          case S:
          case b:
          case g:
          case v:
          case x:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case E:
              case k:
              case P:
              case j:
              case w:
                return e;
              default:
                return t;
            }
        }
      case h:
        return t;
    }
  }
}
function M(e) {
  return I(e) === S;
}
var q = {
    AsyncMode: O,
    ConcurrentMode: S,
    ContextConsumer: E,
    ContextProvider: w,
    Element: y,
    ForwardRef: k,
    Fragment: b,
    Lazy: P,
    Memo: j,
    Portal: h,
    Profiler: g,
    StrictMode: v,
    Suspense: x,
    isAsyncMode: function(e) {
      return M(e) || I(e) === O;
    },
    isConcurrentMode: M,
    isContextConsumer: function(e) {
      return I(e) === E;
    },
    isContextProvider: function(e) {
      return I(e) === w;
    },
    isElement: function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === y;
    },
    isForwardRef: function(e) {
      return I(e) === k;
    },
    isFragment: function(e) {
      return I(e) === b;
    },
    isLazy: function(e) {
      return I(e) === P;
    },
    isMemo: function(e) {
      return I(e) === j;
    },
    isPortal: function(e) {
      return I(e) === h;
    },
    isProfiler: function(e) {
      return I(e) === g;
    },
    isStrictMode: function(e) {
      return I(e) === v;
    },
    isSuspense: function(e) {
      return I(e) === x;
    },
    isValidElementType: function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === b ||
        e === S ||
        e === g ||
        e === v ||
        e === x ||
        e === C ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === P ||
            e.$$typeof === j ||
            e.$$typeof === w ||
            e.$$typeof === E ||
            e.$$typeof === k ||
            e.$$typeof === R ||
            e.$$typeof === N ||
            e.$$typeof === $ ||
            e.$$typeof === T))
      );
    },
    typeOf: I,
  },
  A = d(function(e, t) {
    'production' !== process.env.NODE_ENV &&
      (function() {
        var e = 'function' == typeof Symbol && Symbol.for,
          r = e ? Symbol.for('react.element') : 60103,
          n = e ? Symbol.for('react.portal') : 60106,
          o = e ? Symbol.for('react.fragment') : 60107,
          a = e ? Symbol.for('react.strict_mode') : 60108,
          i = e ? Symbol.for('react.profiler') : 60114,
          c = e ? Symbol.for('react.provider') : 60109,
          s = e ? Symbol.for('react.context') : 60110,
          l = e ? Symbol.for('react.async_mode') : 60111,
          u = e ? Symbol.for('react.concurrent_mode') : 60111,
          f = e ? Symbol.for('react.forward_ref') : 60112,
          p = e ? Symbol.for('react.suspense') : 60113,
          d = e ? Symbol.for('react.suspense_list') : 60120,
          m = e ? Symbol.for('react.memo') : 60115,
          y = e ? Symbol.for('react.lazy') : 60116,
          h = e ? Symbol.for('react.block') : 60121,
          b = e ? Symbol.for('react.fundamental') : 60117,
          v = e ? Symbol.for('react.responder') : 60118,
          g = e ? Symbol.for('react.scope') : 60119;
        function w(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                var d = e.type;
                switch (d) {
                  case l:
                  case u:
                  case o:
                  case i:
                  case a:
                  case p:
                    return d;
                  default:
                    var h = d && d.$$typeof;
                    switch (h) {
                      case s:
                      case f:
                      case y:
                      case m:
                      case c:
                        return h;
                      default:
                        return t;
                    }
                }
              case n:
                return t;
            }
          }
        }
        var E = l,
          O = u,
          S = s,
          k = c,
          x = r,
          C = f,
          j = o,
          P = y,
          T = m,
          R = n,
          N = i,
          $ = a,
          I = p,
          M = !1;
        function q(e) {
          return w(e) === u;
        }
        (t.AsyncMode = E),
          (t.ConcurrentMode = O),
          (t.ContextConsumer = S),
          (t.ContextProvider = k),
          (t.Element = x),
          (t.ForwardRef = C),
          (t.Fragment = j),
          (t.Lazy = P),
          (t.Memo = T),
          (t.Portal = R),
          (t.Profiler = N),
          (t.StrictMode = $),
          (t.Suspense = I),
          (t.isAsyncMode = function(e) {
            return (
              M ||
                ((M = !0),
                console.warn(
                  'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                )),
              q(e) || w(e) === l
            );
          }),
          (t.isConcurrentMode = q),
          (t.isContextConsumer = function(e) {
            return w(e) === s;
          }),
          (t.isContextProvider = function(e) {
            return w(e) === c;
          }),
          (t.isElement = function(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function(e) {
            return w(e) === f;
          }),
          (t.isFragment = function(e) {
            return w(e) === o;
          }),
          (t.isLazy = function(e) {
            return w(e) === y;
          }),
          (t.isMemo = function(e) {
            return w(e) === m;
          }),
          (t.isPortal = function(e) {
            return w(e) === n;
          }),
          (t.isProfiler = function(e) {
            return w(e) === i;
          }),
          (t.isStrictMode = function(e) {
            return w(e) === a;
          }),
          (t.isSuspense = function(e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function(e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === o ||
              e === u ||
              e === i ||
              e === a ||
              e === p ||
              e === d ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === y ||
                  e.$$typeof === m ||
                  e.$$typeof === c ||
                  e.$$typeof === s ||
                  e.$$typeof === f ||
                  e.$$typeof === b ||
                  e.$$typeof === v ||
                  e.$$typeof === g ||
                  e.$$typeof === h))
            );
          }),
          (t.typeOf = w);
      })();
  }),
  z =
    (A.AsyncMode,
    A.ConcurrentMode,
    A.ContextConsumer,
    A.ContextProvider,
    A.Element,
    A.ForwardRef,
    A.Fragment,
    A.Lazy,
    A.Memo,
    A.Portal,
    A.Profiler,
    A.StrictMode,
    A.Suspense,
    A.isAsyncMode,
    A.isConcurrentMode,
    A.isContextConsumer,
    A.isContextProvider,
    A.isElement,
    A.isForwardRef,
    A.isFragment,
    A.isLazy,
    A.isMemo,
    A.isPortal,
    A.isProfiler,
    A.isStrictMode,
    A.isSuspense,
    A.isValidElementType,
    A.typeOf,
    d(function(e) {
      'production' === process.env.NODE_ENV ? (e.exports = q) : (e.exports = A);
    })),
  D = Object.getOwnPropertySymbols,
  _ = Object.prototype.hasOwnProperty,
  V = Object.prototype.propertyIsEnumerable;
function H(e) {
  if (null == e)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined'
    );
  return Object(e);
}
var F = (function() {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function(e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var n = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
          n[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function(e, t) {
        for (var r, n, o = H(e), a = 1; a < arguments.length; a++) {
          for (var i in (r = Object(arguments[a])))
            _.call(r, i) && (o[i] = r[i]);
          if (D) {
            n = D(r);
            for (var c = 0; c < n.length; c++)
              V.call(r, n[c]) && (o[n[c]] = r[n[c]]);
          }
        }
        return o;
      },
  L = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  W = function() {};
if ('production' !== process.env.NODE_ENV) {
  var U = L,
    B = {},
    Y = Function.call.bind(Object.prototype.hasOwnProperty);
  W = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  };
}
function J(e, t, r, n, o) {
  if ('production' !== process.env.NODE_ENV)
    for (var a in e)
      if (Y(e, a)) {
        var i;
        try {
          if ('function' != typeof e[a]) {
            var c = Error(
              (n || 'React class') +
                ': ' +
                r +
                ' type `' +
                a +
                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                typeof e[a] +
                '`.'
            );
            throw ((c.name = 'Invariant Violation'), c);
          }
          i = e[a](t, a, n, r, null, U);
        } catch (e) {
          i = e;
        }
        if (
          (!i ||
            i instanceof Error ||
            W(
              (n || 'React class') +
                ': type specification of ' +
                r +
                ' `' +
                a +
                '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                typeof i +
                '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
            ),
          i instanceof Error && !(i.message in B))
        ) {
          B[i.message] = !0;
          var s = o ? o() : '';
          W('Failed ' + r + ' type: ' + i.message + (null != s ? s : ''));
        }
      }
}
J.resetWarningCache = function() {
  'production' !== process.env.NODE_ENV && (B = {});
};
var X = J,
  G = Function.call.bind(Object.prototype.hasOwnProperty),
  K = function() {};
function Q() {
  return null;
}
'production' !== process.env.NODE_ENV &&
  (K = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  });
var Z = function(e, t) {
  var r = 'function' == typeof Symbol && Symbol.iterator;
  var n = {
    array: c('array'),
    bool: c('boolean'),
    func: c('function'),
    number: c('number'),
    object: c('object'),
    string: c('string'),
    symbol: c('symbol'),
    any: i(Q),
    arrayOf: function(e) {
      return i(function(t, r, n, o, i) {
        if ('function' != typeof e)
          return new a(
            'Property `' +
              i +
              '` of component `' +
              n +
              '` has invalid PropType notation inside arrayOf.'
          );
        var c = t[r];
        if (!Array.isArray(c))
          return new a(
            'Invalid ' +
              o +
              ' `' +
              i +
              '` of type `' +
              l(c) +
              '` supplied to `' +
              n +
              '`, expected an array.'
          );
        for (var s = 0; s < c.length; s++) {
          var u = e(c, s, n, o, i + '[' + s + ']', L);
          if (u instanceof Error) return u;
        }
        return null;
      });
    },
    element: i(function(t, r, n, o, i) {
      var c = t[r];
      return e(c)
        ? null
        : new a(
            'Invalid ' +
              o +
              ' `' +
              i +
              '` of type `' +
              l(c) +
              '` supplied to `' +
              n +
              '`, expected a single ReactElement.'
          );
    }),
    elementType: i(function(e, t, r, n, o) {
      var i = e[t];
      return z.isValidElementType(i)
        ? null
        : new a(
            'Invalid ' +
              n +
              ' `' +
              o +
              '` of type `' +
              l(i) +
              '` supplied to `' +
              r +
              '`, expected a single ReactElement type.'
          );
    }),
    instanceOf: function(e) {
      return i(function(t, r, n, o, i) {
        if (!(t[r] instanceof e)) {
          var c = e.name || '<<anonymous>>';
          return new a(
            'Invalid ' +
              o +
              ' `' +
              i +
              '` of type `' +
              (function(e) {
                if (!e.constructor || !e.constructor.name)
                  return '<<anonymous>>';
                return e.constructor.name;
              })(t[r]) +
              '` supplied to `' +
              n +
              '`, expected instance of `' +
              c +
              '`.'
          );
        }
        return null;
      });
    },
    node: i(function(e, t, r, n, o) {
      return s(e[t])
        ? null
        : new a(
            'Invalid ' +
              n +
              ' `' +
              o +
              '` supplied to `' +
              r +
              '`, expected a ReactNode.'
          );
    }),
    objectOf: function(e) {
      return i(function(t, r, n, o, i) {
        if ('function' != typeof e)
          return new a(
            'Property `' +
              i +
              '` of component `' +
              n +
              '` has invalid PropType notation inside objectOf.'
          );
        var c = t[r],
          s = l(c);
        if ('object' !== s)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              i +
              '` of type `' +
              s +
              '` supplied to `' +
              n +
              '`, expected an object.'
          );
        for (var u in c)
          if (G(c, u)) {
            var f = e(c, u, n, o, i + '.' + u, L);
            if (f instanceof Error) return f;
          }
        return null;
      });
    },
    oneOf: function(e) {
      if (!Array.isArray(e))
        return (
          'production' !== process.env.NODE_ENV &&
            (arguments.length > 1
              ? K(
                  'Invalid arguments supplied to oneOf, expected an array, got ' +
                    arguments.length +
                    ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                )
              : K('Invalid argument supplied to oneOf, expected an array.')),
          Q
        );
      function t(t, r, n, i, c) {
        for (var s = t[r], l = 0; l < e.length; l++)
          if (o(s, e[l])) return null;
        var f = JSON.stringify(e, function(e, t) {
          return 'symbol' === u(t) ? String(t) : t;
        });
        return new a(
          'Invalid ' +
            i +
            ' `' +
            c +
            '` of value `' +
            String(s) +
            '` supplied to `' +
            n +
            '`, expected one of ' +
            f +
            '.'
        );
      }
      return i(t);
    },
    oneOfType: function(e) {
      if (!Array.isArray(e))
        return (
          'production' !== process.env.NODE_ENV &&
            K(
              'Invalid argument supplied to oneOfType, expected an instance of array.'
            ),
          Q
        );
      for (var t = 0; t < e.length; t++) {
        var r = e[t];
        if ('function' != typeof r)
          return (
            K(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                f(r) +
                ' at index ' +
                t +
                '.'
            ),
            Q
          );
      }
      return i(function(t, r, n, o, i) {
        for (var c = 0; c < e.length; c++) {
          if (null == (0, e[c])(t, r, n, o, i, L)) return null;
        }
        return new a('Invalid ' + o + ' `' + i + '` supplied to `' + n + '`.');
      });
    },
    shape: function(e) {
      return i(function(t, r, n, o, i) {
        var c = t[r],
          s = l(c);
        if ('object' !== s)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              i +
              '` of type `' +
              s +
              '` supplied to `' +
              n +
              '`, expected `object`.'
          );
        for (var u in e) {
          var f = e[u];
          if (f) {
            var p = f(c, u, n, o, i + '.' + u, L);
            if (p) return p;
          }
        }
        return null;
      });
    },
    exact: function(e) {
      return i(function(t, r, n, o, i) {
        var c = t[r],
          s = l(c);
        if ('object' !== s)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              i +
              '` of type `' +
              s +
              '` supplied to `' +
              n +
              '`, expected `object`.'
          );
        var u = F({}, t[r], e);
        for (var f in u) {
          var p = e[f];
          if (!p)
            return new a(
              'Invalid ' +
                o +
                ' `' +
                i +
                '` key `' +
                f +
                '` supplied to `' +
                n +
                '`.\nBad object: ' +
                JSON.stringify(t[r], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(e), null, '  ')
            );
          var d = p(c, f, n, o, i + '.' + f, L);
          if (d) return d;
        }
        return null;
      });
    },
  };
  function o(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  }
  function a(e) {
    (this.message = e), (this.stack = '');
  }
  function i(e) {
    if ('production' !== process.env.NODE_ENV)
      var r = {},
        n = 0;
    function o(o, i, c, s, l, u, f) {
      if (((s = s || '<<anonymous>>'), (u = u || c), f !== L)) {
        if (t) {
          var p = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((p.name = 'Invariant Violation'), p);
        }
        if (
          'production' !== process.env.NODE_ENV &&
          'undefined' != typeof console
        ) {
          var d = s + ':' + c;
          !r[d] &&
            n < 3 &&
            (K(
              'You are manually calling a React.PropTypes validation function for the `' +
                u +
                '` prop on `' +
                s +
                '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
            ),
            (r[d] = !0),
            n++);
        }
      }
      return null == i[c]
        ? o
          ? null === i[c]
            ? new a(
                'The ' +
                  l +
                  ' `' +
                  u +
                  '` is marked as required in `' +
                  s +
                  '`, but its value is `null`.'
              )
            : new a(
                'The ' +
                  l +
                  ' `' +
                  u +
                  '` is marked as required in `' +
                  s +
                  '`, but its value is `undefined`.'
              )
          : null
        : e(i, c, s, l, u);
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  function c(e) {
    return i(function(t, r, n, o, i, c) {
      var s = t[r];
      return l(s) !== e
        ? new a(
            'Invalid ' +
              o +
              ' `' +
              i +
              '` of type `' +
              u(s) +
              '` supplied to `' +
              n +
              '`, expected `' +
              e +
              '`.'
          )
        : null;
    });
  }
  function s(t) {
    switch (typeof t) {
      case 'number':
      case 'string':
      case 'undefined':
        return !0;
      case 'boolean':
        return !t;
      case 'object':
        if (Array.isArray(t)) return t.every(s);
        if (null === t || e(t)) return !0;
        var n = (function(e) {
          var t = e && ((r && e[r]) || e['@@iterator']);
          if ('function' == typeof t) return t;
        })(t);
        if (!n) return !1;
        var o,
          a = n.call(t);
        if (n !== t.entries) {
          for (; !(o = a.next()).done; ) if (!s(o.value)) return !1;
        } else
          for (; !(o = a.next()).done; ) {
            var i = o.value;
            if (i && !s(i[1])) return !1;
          }
        return !0;
      default:
        return !1;
    }
  }
  function l(e) {
    var t = typeof e;
    return Array.isArray(e)
      ? 'array'
      : e instanceof RegExp
      ? 'object'
      : (function(e, t) {
          return (
            'symbol' === e ||
            (!!t &&
              ('Symbol' === t['@@toStringTag'] ||
                ('function' == typeof Symbol && t instanceof Symbol)))
          );
        })(t, e)
      ? 'symbol'
      : t;
  }
  function u(e) {
    if (null == e) return '' + e;
    var t = l(e);
    if ('object' === t) {
      if (e instanceof Date) return 'date';
      if (e instanceof RegExp) return 'regexp';
    }
    return t;
  }
  function f(e) {
    var t = u(e);
    switch (t) {
      case 'array':
      case 'object':
        return 'an ' + t;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + t;
      default:
        return t;
    }
  }
  return (
    (a.prototype = Error.prototype),
    (n.checkPropTypes = X),
    (n.resetWarningCache = X.resetWarningCache),
    (n.PropTypes = n),
    n
  );
};
function ee() {}
function te() {}
te.resetWarningCache = ee;
var re = d(function(e) {
    if ('production' !== process.env.NODE_ENV) {
      var t = z;
      e.exports = Z(t.isElement, !0);
    } else
      e.exports = (function() {
        function e(e, t, r, n, o, a) {
          if (a !== L) {
            var i = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((i.name = 'Invariant Violation'), i);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var r = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: te,
          resetWarningCache: ee,
        };
        return (r.PropTypes = r), r;
      })();
  }),
  ne = {
    backgroundHover: 'rgba(0, 0, 0, 0.15)',
    color: '#000000',
    progressRadius: 2,
    progressSize: 5,
    taskRadius: 4,
    titleFontSize: 20,
  },
  oe = re.oneOf(['top', 'bottom', 'both']),
  ae = re.shape({
    color: re.string,
    progressRadius: re.oneOfType([re.number, re.string]),
    progressSize: re.oneOfType([re.number, re.string]),
    titleFontSize: re.oneOfType([re.number, re.string]),
  }),
  ie = re.oneOfType([re.string, re.bool]),
  ce = re.shape({ Checked: re.node.isRequired, Unchecked: re.node.isRequired }),
  se = re.shape({
    checked: re.bool.isRequired,
    id: re.oneOfType([re.string, re.bool]).isRequired,
    label: re.string.isRequired,
  }),
  le = re.arrayOf(se),
  ue = function(e) {
    return e;
  },
  fe = function(e) {
    var t = e.filter(function(e) {
        return e.checked;
      }),
      r = e.filter(function(e) {
        return !e.checked;
      });
    return [].concat(u(r), u(t));
  },
  pe = function(e) {
    return e.filter(function(e) {
      return !e.checked;
    });
  },
  de = ''.concat('napper-todolist', '-checker'),
  me = n.createUseStyles({
    btn: function(e) {
      return {
        alignItems: 'flex-start',
        color: e.theme.color,
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1rem',
      };
    },
    container: { marginBottom: 12 },
    lbl: {},
  }),
  ye = function(e) {
    var a = e.allChecked,
      i = e.onChange,
      c = n.useTheme(),
      s = me({ theme: c }),
      u = l(t.useState(!1), 2),
      f = u[0],
      p = u[1];
    return (
      t.useEffect(
        function() {
          a !== f && p(a);
        },
        [a, f]
      ),
      r.createElement(
        'div',
        { className: o(de, s.container) },
        r.createElement(
          'button',
          {
            className: o(''.concat(de, '-btn'), s.btn),
            type: 'button',
            onClick: function() {
              var e = !f;
              p(e), i(e);
            },
          },
          r.createElement(
            'div',
            { className: o(''.concat(de, '-lbl'), s.lbl) },
            !f && r.createElement('span', null, 'Check all'),
            f && r.createElement('span', null, 'Uncheck all')
          )
        )
      )
    );
  };
ye.propTypes = { allChecked: re.bool.isRequired, onChange: re.func.isRequired };
var he = ''.concat('napper-todolist', '-counter'),
  be = n.createUseStyles({
    container: function(e) {
      return {
        color: e.theme.color,
        display: 'flex',
        flex: '0 1',
        marginLeft: 12,
      };
    },
    cpt: {},
    spl: {},
    ttl: {},
  }),
  ve = r.memo(function(e) {
    var t = e.tasks,
      a = n.useTheme(),
      i = be({ theme: a }),
      c = (t && t.length) || 0,
      s =
        (t &&
          t.filter(function(e) {
            return e.checked;
          }).length) ||
        0;
    return r.createElement(
      'div',
      { className: o(he, i.container) },
      r.createElement('span', { className: o(''.concat(he, '-cpt')) }, s),
      r.createElement('span', { className: o(''.concat(he, '-spl')) }, '/'),
      r.createElement('span', { className: o(''.concat(he, '-ttl')) }, c)
    );
  });
ve.propTypes = { tasks: le.isRequired };
var ge = ''.concat('napper-todolist', '-progress'),
  we = n.createUseStyles({
    bar: function(e) {
      var t = e.theme;
      return {
        height: t.progressSize,
        maxHeight: t.progressSize,
        maxWidth: '100%',
        minHeight: t.progressSize,
        minWidth: '100%',
        position: 'relative',
        width: '100%',
      };
    },
    container: { display: 'flex', flex: 1 },
    tmb: function(e) {
      return {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: e.theme.progressRadius,
        bottom: 0,
        left: 0,
        position: 'absolute',
        top: 0,
        transition: 'width 0.5s',
        width: 0,
      };
    },
    trk: {
      backgroundColor: 'hsla(0, 0%, 100%, 0.4)',
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      transition: 'left 0.5s',
    },
  }),
  Ee = r.memo(function(e) {
    var t = e.tasks,
      a = n.useTheme(),
      i = we({ theme: a }),
      c = (t && t.length) || 0,
      s =
        (100 *
          ((t &&
            t.filter(function(e) {
              return e.checked;
            }).length) ||
            0)) /
        c,
      l = s > 0 ? '0 2px 2px 0' : 2;
    return r.createElement(
      'div',
      { className: o(ge, i.container) },
      r.createElement(
        'div',
        { className: o(''.concat(ge, '-bar'), i.bar) },
        r.createElement('div', {
          className: o(''.concat(ge, '-trk'), i.trk),
          style: { borderRadius: l, left: ''.concat(s, '%') },
        }),
        r.createElement('div', {
          className: o(''.concat(ge, '-tmb'), i.tmb),
          style: { width: ''.concat(s, '%') },
        })
      )
    );
  });
(Ee.defaultProps = {}), (Ee.propTypes = { tasks: le.isRequired });
var Oe = ''.concat('napper-todolist', '-footer'),
  Se = n.createUseStyles({
    container: { display: 'flex', flex: '0 1', paddingTop: 12 },
    wrp: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  }),
  ke = r.memo(function(e) {
    var t = e.showCounter,
      n = e.showProgress,
      a = e.tasks,
      i = Se();
    return r.createElement(
      'div',
      { className: o(Oe, i.container) },
      r.createElement(
        'div',
        { className: o(''.concat(Oe, '-wrp'), i.wrp) },
        n && r.createElement(Ee, { tasks: a }),
        t && r.createElement(ve, { tasks: a })
      )
    );
  });
ke.propTypes = {
  showCounter: re.bool.isRequired,
  showProgress: re.bool.isRequired,
  tasks: le.isRequired,
};
var xe = r.memo(function() {
    return r.createElement(
      'svg',
      {
        stroke: 'currentColor',
        fill: 'currentColor',
        strokeWidth: '0',
        viewBox: '0 0 24 24',
        height: '1em',
        width: '1em',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      r.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
    );
  }),
  Ce = r.memo(function() {
    return r.createElement(
      'svg',
      {
        fill: 'currentColor',
        height: '1em',
        stroke: 'currentColor',
        strokeWidth: '0',
        viewBox: '0 0 512 512',
        width: '1em',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      r.createElement('path', {
        d:
          'M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z',
      })
    );
  }),
  je = r.memo(function() {
    return r.createElement(
      'svg',
      {
        fill: 'currentColor',
        height: '1em',
        stroke: 'currentColor',
        strokeWidth: '0',
        viewBox: '0 0 512 512',
        width: '1em',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      r.createElement('path', {
        d:
          'M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z',
      }),
      r.createElement('path', {
        d:
          'M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z',
      })
    );
  }),
  Pe = r.memo(function() {
    return r.createElement(
      'svg',
      {
        fill: 'currentColor',
        height: '1em',
        stroke: 'currentColor',
        strokeWidth: '0',
        viewBox: '0 0 512 512',
        width: '1em',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      r.createElement('path', {
        d:
          'M388 96H124c-15.4 0-28 12.6-28 28v264c0 15.4 12.6 28 28 28h264c15.4 0 28-12.6 28-28V124c0-15.4-12.6-28-28-28zm0 284c0 4.4-3.6 8-8 8H132c-4.4 0-8-3.6-8-8V132c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v248z',
      })
    );
  }),
  Te = ''.concat('napper-todolist', '-header'),
  Re = n.createUseStyles({
    btm: {},
    container: {
      display: 'flex',
      flex: '0 1',
      flexDirection: 'column',
      paddingBottom: 12,
    },
    tit: function(e) {
      var t = e.theme;
      return { color: t.color, fontSize: t.titleFontSize };
    },
    wrp: {
      '& + div': { marginTop: 5 },
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
  Ne = r.memo(function(e) {
    var t = e.createHandler,
      a = e.showCounter,
      i = e.showProgress,
      c = e.tasks,
      s = e.title,
      l = n.useTheme(),
      u = Re({ theme: l });
    return r.createElement(
      'div',
      { className: o(Te, u.container) },
      r.createElement(
        'div',
        { className: o(''.concat(Te, '-wrp'), u.wrp) },
        t &&
          r.createElement(
            'button',
            { type: 'button', onClick: t },
            r.createElement(xe, null)
          ),
        s &&
          r.createElement(
            'span',
            { className: o(''.concat(Te, '-tit'), u.tit) },
            s
          ),
        a && r.createElement(ve, { tasks: c })
      ),
      i &&
        r.createElement(
          'div',
          { className: o(''.concat(Te, '-btm'), u.btm) },
          r.createElement(Ee, { tasks: c })
        )
    );
  });
(Ne.defaultProps = { createHandler: null }),
  (Ne.propTypes = {
    createHandler: re.func,
    showCounter: re.bool.isRequired,
    showProgress: re.bool.isRequired,
    tasks: le.isRequired,
    title: ie.isRequired,
  });
var $e = ''.concat('napper-todolist', '-task'),
  Ie = n.createUseStyles({
    btn: function(e) {
      return {
        alignItems: 'flex-start',
        color: e.theme.color,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        fontSize: '1rem',
      };
    },
    ckb: { marginRight: 3, paddingTop: '0.2rem' },
    dlt: { flex: '0 1', fontSize: '1.2rem', marginLeft: 6, marginRight: 12 },
    lbl: { fontSize: '1rem', lineHeight: '1.3rem' },
    task: function(e) {
      var t = e.theme;
      return {
        '&:hover': { backgroundColor: t.backgroundHover },
        alignItems: 'center',
        borderRadius: t.taskRadius,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 6,
        paddingTop: 6,
      };
    },
  }),
  Me = function(e) {
    var a = e.Icons,
      i = e.checked,
      c = e.id,
      s = e.label,
      u = e.onChange,
      f = e.onDelete,
      p = n.useTheme(),
      d = Ie({ theme: p }),
      m = l(t.useState(!1), 2),
      y = m[0],
      h = m[1],
      b = y && f;
    return r.createElement(
      'div',
      {
        className: o($e, d.task),
        'data-id': 'napper-todolist-task-'.concat(c),
        onMouseEnter: function() {
          return h(!0);
        },
        onMouseLeave: function() {
          return h(!1);
        },
      },
      r.createElement(
        'button',
        {
          className: o(''.concat($e, '-btn'), d.btn),
          type: 'button',
          onClick: function() {
            return u(c, !i);
          },
        },
        r.createElement(
          'div',
          { className: o(''.concat($e, '-ckb'), d.ckb) },
          i && a.Checked,
          !i && a.Unchecked
        ),
        r.createElement(
          'div',
          { className: o(''.concat($e, '-lbl'), d.lbl) },
          r.createElement('span', null, s)
        )
      ),
      b &&
        r.createElement(
          'button',
          {
            className: o(''.concat($e, '-dlt'), d.dlt),
            type: 'button',
            onClick: function() {
              return f(c);
            },
          },
          r.createElement(Ce, null)
        )
    );
  };
(Me.defaultProps = {
  Icons: {
    Checked: r.createElement(je, null),
    Unchecked: r.createElement(Pe, null),
  },
}),
  (Me.propTypes = {
    Icons: ce,
    checked: re.bool.isRequired,
    id: re.string.isRequired,
    label: re.string.isRequired,
    onChange: re.func.isRequired,
    onDelete: re.oneOfType([re.bool, re.func]).isRequired,
  });
var qe = ''.concat('napper-todolist', '-tasks'),
  Ae = n.createUseStyles({
    container: { display: 'flex', flex: 1, position: 'relative' },
    wrp: {
      bottom: 0,
      left: 0,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'absolute',
      right: 0,
      top: 0,
    },
  });
var ze = function(e) {
  var t = e.onChange,
    n = e.onDelete,
    a = e.render,
    i = e.tasks,
    c = Ae();
  return r.createElement(
    'div',
    { className: o(qe, c.container) },
    r.createElement(
      'div',
      { className: o(''.concat(qe, '-wrp'), c.wrp) },
      i.map(function(e) {
        return a(e, t, n);
      })
    )
  );
};
(ze.defaultProps = {
  render: function(e, t, n) {
    return r.createElement(Me, {
      key: e.id,
      checked: e.checked,
      id: e.id,
      label: e.label,
      onChange: t,
      onDelete: n,
    });
  },
}),
  (ze.propTypes = {
    onChange: re.func.isRequired,
    onDelete: re.oneOfType([re.bool, re.func]).isRequired,
    render: re.func,
    tasks: le.isRequired,
  });
var De = ''.concat('napper-todolist', '-container'),
  _e = n.createUseStyles({
    container: {
      height: '100%',
      maxHeight: '100%',
      maxWidth: '100%',
      minHeight: '100%',
      minWidth: '100%',
      width: '100%',
    },
    wrp: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'flex-start',
      maxHeight: '100%',
      maxWidth: '100%',
      minHeight: '100%',
      minWidth: '100%',
      width: '100%',
    },
  }),
  Ve = r.memo(function(e) {
    var t,
      n = e.completedAtBottom,
      a = e.counterPosition,
      c = e.id,
      s = e.onChange,
      l = e.onCreateClick,
      f = e.onDelete,
      p = e.onToggleAll,
      d = e.order,
      m = e.orderBy,
      y = e.showCompleted,
      h = e.showCounter,
      b = e.showProgress,
      v = e.tasks,
      g = e.title,
      w = _e(),
      E = (function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return function(e) {
          return t.reduceRight(function(e, t) {
            return t(e);
          }, e);
        };
      })(
        (!y && pe) || ue,
        (n && fe) || ue,
        (d &&
          (function(e, t) {
            return function(r) {
              var n = u(r);
              return (
                n.sort(function(t, r) {
                  var n = t[e],
                    o = r[e];
                  return n && o
                    ? (n = n.toString().toLocaleLowerCase()) >
                      (o = o.toString().toLocaleLowerCase())
                      ? 1
                      : n < o
                      ? -1
                      : 0
                    : 0;
                }),
                'desc' === t && n.reverse(),
                n
              );
            };
          })(m, d)) ||
          ue
      )(v),
      O = (function(e) {
        return (
          e.filter(function(e) {
            return e.checked;
          }).length >= e.length
        );
      })(v),
      S = ((t = a), h && ('top' === t || 'both' === t)),
      k = (function(e, t) {
        return t && ('top' === e || 'both' === e);
      })(a, b),
      x = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(a, h),
      C = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(a, b),
      j = {};
    return (
      c && (j.id = c),
      r.createElement(
        'div',
        i({}, j, { className: o(De, w.container) }),
        r.createElement(
          'div',
          { className: o(''.concat(De, '-wrp'), w.wrp) },
          r.createElement(Ne, {
            showCounter: S,
            createHandler: function() {
              return l(c);
            },
            showProgress: k,
            tasks: v,
            title: g,
          }),
          p && r.createElement(ye, { allChecked: O, onChange: p }),
          r.createElement(ze, { tasks: E, onChange: s, onDelete: f }),
          r.createElement(ke, { showCounter: x, showProgress: C, tasks: v })
        )
      )
    );
  });
(Ve.defaultProps = {
  completedAtBottom: !0,
  counterPosition: 'bottom',
  id: !1,
  onDelete: !1,
  onToggleAll: !1,
  order: !1,
  orderBy: 'label',
  showCompleted: !1,
  showCounter: !1,
  showProgress: !1,
  tasks: [],
  title: !1,
}),
  (Ve.propTypes = {
    completedAtBottom: re.bool,
    counterPosition: oe,
    id: re.oneOfType([re.bool, re.string]),
    onChange: re.func.isRequired,
    onCreateClick: re.func.isRequired,
    onDelete: re.oneOfType([re.bool, re.func]),
    onToggleAll: re.oneOfType([re.bool, re.func]),
    order: re.oneOf([!1, 'desc', 'asc']),
    orderBy: re.oneOf(['label', 'id', 'mtime', 'ctime']),
    showCompleted: re.bool,
    showCounter: re.bool,
    showProgress: re.bool,
    tasks: le,
    title: ie,
  });
var He = ''.concat('napper-todolist', '-'),
  Fe = function(e) {
    var t = e.jssMinifyId,
      o = e.theme,
      i = s(e, ['jssMinifyId', 'theme']),
      l = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function(t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      })({}, ne, {}, o);
    return r.createElement(
      n.JssProvider,
      { classNamePrefix: He, id: { minify: t }, jss: n.jss },
      r.createElement(n.ThemeProvider, { theme: l }, r.createElement(Ve, i))
    );
  };
(Fe.defaultProps = { jssMinifyId: !0, theme: {} }),
  (Fe.propTypes = { jssMinifyId: re.bool, theme: ae }),
  (exports.default = Fe);
