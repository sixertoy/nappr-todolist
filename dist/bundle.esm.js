import e, { useState as t, useEffect as r } from 'react';
import {
  createUseStyles as n,
  useTheme as o,
  JssProvider as a,
  jss as i,
  ThemeProvider as c,
} from 'react-jss';
import s from 'classnames';
function l(e, t, r) {
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
function u() {
  return (u =
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
function f(e, t) {
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
function p(e, t) {
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
function d(e, t) {
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
    y(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function m(e) {
  return (
    (function(e) {
      if (Array.isArray(e)) return h(e);
    })(e) ||
    (function(e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    y(e) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function y(e, t) {
  if (e) {
    if ('string' == typeof e) return h(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === r && e.constructor && (r = e.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(r)
        : 'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? h(e, t)
        : void 0
    );
  }
}
function h(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function b(e, t) {
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
var v = 'function' == typeof Symbol && Symbol.for,
  g = v ? Symbol.for('react.element') : 60103,
  w = v ? Symbol.for('react.portal') : 60106,
  E = v ? Symbol.for('react.fragment') : 60107,
  O = v ? Symbol.for('react.strict_mode') : 60108,
  k = v ? Symbol.for('react.profiler') : 60114,
  S = v ? Symbol.for('react.provider') : 60109,
  x = v ? Symbol.for('react.context') : 60110,
  C = v ? Symbol.for('react.async_mode') : 60111,
  j = v ? Symbol.for('react.concurrent_mode') : 60111,
  P = v ? Symbol.for('react.forward_ref') : 60112,
  T = v ? Symbol.for('react.suspense') : 60113,
  R = v ? Symbol.for('react.suspense_list') : 60120,
  N = v ? Symbol.for('react.memo') : 60115,
  $ = v ? Symbol.for('react.lazy') : 60116,
  I = v ? Symbol.for('react.block') : 60121,
  M = v ? Symbol.for('react.fundamental') : 60117,
  A = v ? Symbol.for('react.responder') : 60118,
  z = v ? Symbol.for('react.scope') : 60119;
function D(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case g:
        switch ((e = e.type)) {
          case C:
          case j:
          case E:
          case k:
          case O:
          case T:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case x:
              case P:
              case $:
              case N:
              case S:
                return e;
              default:
                return t;
            }
        }
      case w:
        return t;
    }
  }
}
function q(e) {
  return D(e) === j;
}
var _ = {
    AsyncMode: C,
    ConcurrentMode: j,
    ContextConsumer: x,
    ContextProvider: S,
    Element: g,
    ForwardRef: P,
    Fragment: E,
    Lazy: $,
    Memo: N,
    Portal: w,
    Profiler: k,
    StrictMode: O,
    Suspense: T,
    isAsyncMode: function(e) {
      return q(e) || D(e) === C;
    },
    isConcurrentMode: q,
    isContextConsumer: function(e) {
      return D(e) === x;
    },
    isContextProvider: function(e) {
      return D(e) === S;
    },
    isElement: function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === g;
    },
    isForwardRef: function(e) {
      return D(e) === P;
    },
    isFragment: function(e) {
      return D(e) === E;
    },
    isLazy: function(e) {
      return D(e) === $;
    },
    isMemo: function(e) {
      return D(e) === N;
    },
    isPortal: function(e) {
      return D(e) === w;
    },
    isProfiler: function(e) {
      return D(e) === k;
    },
    isStrictMode: function(e) {
      return D(e) === O;
    },
    isSuspense: function(e) {
      return D(e) === T;
    },
    isValidElementType: function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === E ||
        e === j ||
        e === k ||
        e === O ||
        e === T ||
        e === R ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === $ ||
            e.$$typeof === N ||
            e.$$typeof === S ||
            e.$$typeof === x ||
            e.$$typeof === P ||
            e.$$typeof === M ||
            e.$$typeof === A ||
            e.$$typeof === z ||
            e.$$typeof === I))
      );
    },
    typeOf: D,
  },
  V = b(function(e, t) {
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
          k = s,
          S = c,
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
        function A(e) {
          return w(e) === u;
        }
        (t.AsyncMode = E),
          (t.ConcurrentMode = O),
          (t.ContextConsumer = k),
          (t.ContextProvider = S),
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
              A(e) || w(e) === l
            );
          }),
          (t.isConcurrentMode = A),
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
  H =
    (V.AsyncMode,
    V.ConcurrentMode,
    V.ContextConsumer,
    V.ContextProvider,
    V.Element,
    V.ForwardRef,
    V.Fragment,
    V.Lazy,
    V.Memo,
    V.Portal,
    V.Profiler,
    V.StrictMode,
    V.Suspense,
    V.isAsyncMode,
    V.isConcurrentMode,
    V.isContextConsumer,
    V.isContextProvider,
    V.isElement,
    V.isForwardRef,
    V.isFragment,
    V.isLazy,
    V.isMemo,
    V.isPortal,
    V.isProfiler,
    V.isStrictMode,
    V.isSuspense,
    V.isValidElementType,
    V.typeOf,
    b(function(e) {
      'production' === process.env.NODE_ENV ? (e.exports = _) : (e.exports = V);
    })),
  F = Object.getOwnPropertySymbols,
  L = Object.prototype.hasOwnProperty,
  W = Object.prototype.propertyIsEnumerable;
function B(e) {
  if (null == e)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined'
    );
  return Object(e);
}
var U = (function() {
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
        for (var r, n, o = B(e), a = 1; a < arguments.length; a++) {
          for (var i in (r = Object(arguments[a])))
            L.call(r, i) && (o[i] = r[i]);
          if (F) {
            n = F(r);
            for (var c = 0; c < n.length; c++)
              W.call(r, n[c]) && (o[n[c]] = r[n[c]]);
          }
        }
        return o;
      },
  Y = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  J = function() {};
if ('production' !== process.env.NODE_ENV) {
  var X = Y,
    G = {},
    K = Function.call.bind(Object.prototype.hasOwnProperty);
  J = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  };
}
function Q(e, t, r, n, o) {
  if ('production' !== process.env.NODE_ENV)
    for (var a in e)
      if (K(e, a)) {
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
          i = e[a](t, a, n, r, null, X);
        } catch (e) {
          i = e;
        }
        if (
          (!i ||
            i instanceof Error ||
            J(
              (n || 'React class') +
                ': type specification of ' +
                r +
                ' `' +
                a +
                '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                typeof i +
                '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
            ),
          i instanceof Error && !(i.message in G))
        ) {
          G[i.message] = !0;
          var s = o ? o() : '';
          J('Failed ' + r + ' type: ' + i.message + (null != s ? s : ''));
        }
      }
}
Q.resetWarningCache = function() {
  'production' !== process.env.NODE_ENV && (G = {});
};
var Z = Q,
  ee = Function.call.bind(Object.prototype.hasOwnProperty),
  te = function() {};
function re() {
  return null;
}
'production' !== process.env.NODE_ENV &&
  (te = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  });
var ne = function(e, t) {
  var r = 'function' == typeof Symbol && Symbol.iterator;
  var n = {
    array: c('array'),
    bool: c('boolean'),
    func: c('function'),
    number: c('number'),
    object: c('object'),
    string: c('string'),
    symbol: c('symbol'),
    any: i(re),
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
          var u = e(c, s, n, o, i + '[' + s + ']', Y);
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
      return H.isValidElementType(i)
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
          if (ee(c, u)) {
            var f = e(c, u, n, o, i + '.' + u, Y);
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
              ? te(
                  'Invalid arguments supplied to oneOf, expected an array, got ' +
                    arguments.length +
                    ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                )
              : te('Invalid argument supplied to oneOf, expected an array.')),
          re
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
            te(
              'Invalid argument supplied to oneOfType, expected an instance of array.'
            ),
          re
        );
      for (var t = 0; t < e.length; t++) {
        var r = e[t];
        if ('function' != typeof r)
          return (
            te(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                f(r) +
                ' at index ' +
                t +
                '.'
            ),
            re
          );
      }
      return i(function(t, r, n, o, i) {
        for (var c = 0; c < e.length; c++) {
          if (null == (0, e[c])(t, r, n, o, i, Y)) return null;
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
            var p = f(c, u, n, o, i + '.' + u, Y);
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
        var u = U({}, t[r], e);
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
          var d = p(c, f, n, o, i + '.' + f, Y);
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
      if (((s = s || '<<anonymous>>'), (u = u || c), f !== Y)) {
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
            (te(
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
    (n.checkPropTypes = Z),
    (n.resetWarningCache = Z.resetWarningCache),
    (n.PropTypes = n),
    n
  );
};
function oe() {}
function ae() {}
ae.resetWarningCache = oe;
var ie = b(function(e) {
    if ('production' !== process.env.NODE_ENV) {
      var t = H;
      e.exports = ne(t.isElement, !0);
    } else
      e.exports = (function() {
        function e(e, t, r, n, o, a) {
          if (a !== Y) {
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
          checkPropTypes: ae,
          resetWarningCache: oe,
        };
        return (r.PropTypes = r), r;
      })();
  }),
  ce = {
    backgroundHover: 'rgba(0, 0, 0, 0.15)',
    color: '#000000',
    progressRadius: 2,
    progressSize: 5,
    taskRadius: 4,
    titleFontSize: 20,
  },
  se = ie.oneOf(['top', 'bottom', 'both']),
  le = ie.shape({
    color: ie.string,
    progressRadius: ie.oneOfType([ie.number, ie.string]),
    progressSize: ie.oneOfType([ie.number, ie.string]),
    titleFontSize: ie.oneOfType([ie.number, ie.string]),
  }),
  ue = ie.oneOfType([ie.string, ie.bool]),
  fe = ie.shape({ Checked: ie.node.isRequired, Unchecked: ie.node.isRequired }),
  pe = ie.shape({
    checked: ie.bool.isRequired,
    id: ie.oneOfType([ie.string, ie.bool]).isRequired,
    label: ie.string.isRequired,
  }),
  de = ie.arrayOf(pe),
  me = function(e) {
    return e;
  },
  ye = function(e) {
    var t = e.filter(function(e) {
        return e.checked;
      }),
      r = e.filter(function(e) {
        return !e.checked;
      });
    return [].concat(m(r), m(t));
  },
  he = function(e) {
    return e.filter(function(e) {
      return !e.checked;
    });
  },
  be = ''.concat('napper-todolist', '-checker'),
  ve = n({
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
  ge = function(n) {
    var a = n.allChecked,
      i = n.onChange,
      c = o(),
      l = ve({ theme: c }),
      u = d(t(!1), 2),
      f = u[0],
      p = u[1];
    return (
      r(
        function() {
          a !== f && p(a);
        },
        [a, f]
      ),
      e.createElement(
        'div',
        { className: s(be, l.container) },
        e.createElement(
          'button',
          {
            className: s(''.concat(be, '-btn'), l.btn),
            type: 'button',
            onClick: function() {
              var e = !f;
              p(e), i(e);
            },
          },
          e.createElement(
            'div',
            { className: s(''.concat(be, '-lbl'), l.lbl) },
            !f && e.createElement('span', null, 'Check all'),
            f && e.createElement('span', null, 'Uncheck all')
          )
        )
      )
    );
  };
ge.propTypes = { allChecked: ie.bool.isRequired, onChange: ie.func.isRequired };
var we = ''.concat('napper-todolist', '-counter'),
  Ee = n({
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
  Oe = e.memo(function(t) {
    var r = t.tasks,
      n = o(),
      a = Ee({ theme: n }),
      i = (r && r.length) || 0,
      c =
        (r &&
          r.filter(function(e) {
            return e.checked;
          }).length) ||
        0;
    return e.createElement(
      'div',
      { className: s(we, a.container) },
      e.createElement('span', { className: s(''.concat(we, '-cpt')) }, c),
      e.createElement('span', { className: s(''.concat(we, '-spl')) }, '/'),
      e.createElement('span', { className: s(''.concat(we, '-ttl')) }, i)
    );
  });
Oe.propTypes = { tasks: de.isRequired };
var ke = ''.concat('napper-todolist', '-progress'),
  Se = n({
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
  xe = e.memo(function(t) {
    var r = t.tasks,
      n = o(),
      a = Se({ theme: n }),
      i = (r && r.length) || 0,
      c =
        (100 *
          ((r &&
            r.filter(function(e) {
              return e.checked;
            }).length) ||
            0)) /
        i,
      l = c > 0 ? '0 2px 2px 0' : 2;
    return e.createElement(
      'div',
      { className: s(ke, a.container) },
      e.createElement(
        'div',
        { className: s(''.concat(ke, '-bar'), a.bar) },
        e.createElement('div', {
          className: s(''.concat(ke, '-trk'), a.trk),
          style: { borderRadius: l, left: ''.concat(c, '%') },
        }),
        e.createElement('div', {
          className: s(''.concat(ke, '-tmb'), a.tmb),
          style: { width: ''.concat(c, '%') },
        })
      )
    );
  });
(xe.defaultProps = {}), (xe.propTypes = { tasks: de.isRequired });
var Ce = ''.concat('napper-todolist', '-footer'),
  je = n({
    container: { display: 'flex', flex: '0 1', paddingTop: 12 },
    wrp: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  }),
  Pe = e.memo(function(t) {
    var r = t.showCounter,
      n = t.showProgress,
      o = t.tasks,
      a = je();
    return e.createElement(
      'div',
      { className: s(Ce, a.container) },
      e.createElement(
        'div',
        { className: s(''.concat(Ce, '-wrp'), a.wrp) },
        n && e.createElement(xe, { tasks: o }),
        r && e.createElement(Oe, { tasks: o })
      )
    );
  });
Pe.propTypes = {
  showCounter: ie.bool.isRequired,
  showProgress: ie.bool.isRequired,
  tasks: de.isRequired,
};
var Te = e.memo(function() {
    return e.createElement(
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
      e.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
    );
  }),
  Re = e.memo(function() {
    return e.createElement(
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
      e.createElement('path', {
        d:
          'M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z',
      })
    );
  }),
  Ne = e.memo(function() {
    return e.createElement(
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
      e.createElement('path', {
        d:
          'M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z',
      }),
      e.createElement('path', {
        d:
          'M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z',
      })
    );
  }),
  $e = e.memo(function() {
    return e.createElement(
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
      e.createElement('path', {
        d:
          'M388 96H124c-15.4 0-28 12.6-28 28v264c0 15.4 12.6 28 28 28h264c15.4 0 28-12.6 28-28V124c0-15.4-12.6-28-28-28zm0 284c0 4.4-3.6 8-8 8H132c-4.4 0-8-3.6-8-8V132c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v248z',
      })
    );
  }),
  Ie = ''.concat('napper-todolist', '-header'),
  Me = n({
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
  Ae = e.memo(function(t) {
    var r = t.createHandler,
      n = t.showCounter,
      a = t.showProgress,
      i = t.tasks,
      c = t.title,
      l = o(),
      u = Me({ theme: l });
    return e.createElement(
      'div',
      { className: s(Ie, u.container) },
      e.createElement(
        'div',
        { className: s(''.concat(Ie, '-wrp'), u.wrp) },
        r &&
          e.createElement(
            'button',
            { type: 'button', onClick: r },
            e.createElement(Te, null)
          ),
        c &&
          e.createElement(
            'span',
            { className: s(''.concat(Ie, '-tit'), u.tit) },
            c
          ),
        n && e.createElement(Oe, { tasks: i })
      ),
      a &&
        e.createElement(
          'div',
          { className: s(''.concat(Ie, '-btm'), u.btm) },
          e.createElement(xe, { tasks: i })
        )
    );
  });
(Ae.defaultProps = { createHandler: null }),
  (Ae.propTypes = {
    createHandler: ie.func,
    showCounter: ie.bool.isRequired,
    showProgress: ie.bool.isRequired,
    tasks: de.isRequired,
    title: ue.isRequired,
  });
var ze = ''.concat('napper-todolist', '-task'),
  De = n({
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
  qe = function(r) {
    var n = r.Icons,
      a = r.checked,
      i = r.id,
      c = r.label,
      l = r.onChange,
      u = r.onDelete,
      f = o(),
      p = De({ theme: f }),
      m = d(t(!1), 2),
      y = m[0],
      h = m[1],
      b = y && u;
    return e.createElement(
      'div',
      {
        className: s(ze, p.task),
        'data-id': 'napper-todolist-task-'.concat(i),
        onMouseEnter: function() {
          return h(!0);
        },
        onMouseLeave: function() {
          return h(!1);
        },
      },
      e.createElement(
        'button',
        {
          className: s(''.concat(ze, '-btn'), p.btn),
          type: 'button',
          onClick: function() {
            return l(i, !a);
          },
        },
        e.createElement(
          'div',
          { className: s(''.concat(ze, '-ckb'), p.ckb) },
          a && n.Checked,
          !a && n.Unchecked
        ),
        e.createElement(
          'div',
          { className: s(''.concat(ze, '-lbl'), p.lbl) },
          e.createElement('span', null, c)
        )
      ),
      b &&
        e.createElement(
          'button',
          {
            className: s(''.concat(ze, '-dlt'), p.dlt),
            type: 'button',
            onClick: function() {
              return u(i);
            },
          },
          e.createElement(Re, null)
        )
    );
  };
(qe.defaultProps = {
  Icons: {
    Checked: e.createElement(Ne, null),
    Unchecked: e.createElement($e, null),
  },
}),
  (qe.propTypes = {
    Icons: fe,
    checked: ie.bool.isRequired,
    id: ie.string.isRequired,
    label: ie.string.isRequired,
    onChange: ie.func.isRequired,
    onDelete: ie.oneOfType([ie.bool, ie.func]).isRequired,
  });
var _e = ''.concat('napper-todolist', '-tasks'),
  Ve = n({
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
var He = function(t) {
  var r = t.onChange,
    n = t.onDelete,
    o = t.render,
    a = t.tasks,
    i = Ve();
  return e.createElement(
    'div',
    { className: s(_e, i.container) },
    e.createElement(
      'div',
      { className: s(''.concat(_e, '-wrp'), i.wrp) },
      a.map(function(e) {
        return o(e, r, n);
      })
    )
  );
};
(He.defaultProps = {
  render: function(t, r, n) {
    return e.createElement(qe, {
      key: t.id,
      checked: t.checked,
      id: t.id,
      label: t.label,
      onChange: r,
      onDelete: n,
    });
  },
}),
  (He.propTypes = {
    onChange: ie.func.isRequired,
    onDelete: ie.oneOfType([ie.bool, ie.func]).isRequired,
    render: ie.func,
    tasks: de.isRequired,
  });
var Fe = ''.concat('napper-todolist', '-container'),
  Le = n({
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
  We = e.memo(function(t) {
    var r,
      n = t.completedAtBottom,
      o = t.counterPosition,
      a = t.id,
      i = t.onChange,
      c = t.onCreateClick,
      l = t.onDelete,
      f = t.onToggleAll,
      p = t.order,
      d = t.orderBy,
      y = t.showCompleted,
      h = t.showCounter,
      b = t.showProgress,
      v = t.tasks,
      g = t.title,
      w = Le(),
      E = (function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return function(e) {
          return t.reduceRight(function(e, t) {
            return t(e);
          }, e);
        };
      })(
        (!y && he) || me,
        (n && ye) || me,
        (p &&
          (function(e, t) {
            return function(r) {
              var n = m(r);
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
          })(d, p)) ||
          me
      )(v),
      O = (function(e) {
        return (
          e.filter(function(e) {
            return e.checked;
          }).length >= e.length
        );
      })(v),
      k = ((r = o), h && ('top' === r || 'both' === r)),
      S = (function(e, t) {
        return t && ('top' === e || 'both' === e);
      })(o, b),
      x = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, h),
      C = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, b),
      j = {};
    return (
      a && (j.id = a),
      e.createElement(
        'div',
        u({}, j, { className: s(Fe, w.container) }),
        e.createElement(
          'div',
          { className: s(''.concat(Fe, '-wrp'), w.wrp) },
          e.createElement(Ae, {
            showCounter: k,
            createHandler: function() {
              return c(a);
            },
            showProgress: S,
            tasks: v,
            title: g,
          }),
          f && e.createElement(ge, { allChecked: O, onChange: f }),
          e.createElement(He, { tasks: E, onChange: i, onDelete: l }),
          e.createElement(Pe, { showCounter: x, showProgress: C, tasks: v })
        )
      )
    );
  });
(We.defaultProps = {
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
  (We.propTypes = {
    completedAtBottom: ie.bool,
    counterPosition: se,
    id: ie.oneOfType([ie.bool, ie.string]),
    onChange: ie.func.isRequired,
    onCreateClick: ie.func.isRequired,
    onDelete: ie.oneOfType([ie.bool, ie.func]),
    onToggleAll: ie.oneOfType([ie.bool, ie.func]),
    order: ie.oneOf([!1, 'desc', 'asc']),
    orderBy: ie.oneOf(['label', 'id', 'mtime', 'ctime']),
    showCompleted: ie.bool,
    showCounter: ie.bool,
    showProgress: ie.bool,
    tasks: de,
    title: ue,
  });
var Be = ''.concat('napper-todolist', '-'),
  Ue = function(t) {
    var r = t.jssMinifyId,
      n = t.theme,
      o = p(t, ['jssMinifyId', 'theme']),
      s = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function(t) {
                l(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      })({}, ce, {}, n);
    return e.createElement(
      a,
      { classNamePrefix: Be, id: { minify: r }, jss: i },
      e.createElement(c, { theme: s }, e.createElement(We, o))
    );
  };
(Ue.defaultProps = { jssMinifyId: !0, theme: {} }),
  (Ue.propTypes = { jssMinifyId: ie.bool, theme: le });
export default Ue;
