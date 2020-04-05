import e, { useState as t, useEffect as n } from 'react';
import {
  createUseStyles as r,
  useTheme as o,
  JssProvider as a,
  jss as c,
  ThemeProvider as i,
} from 'react-jss';
function l(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function u(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = (function(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++)
        (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
!(function(e, t) {
  void 0 === t && (t = {});
  var n = t.insertAt;
  if (e && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
    (o.type = 'text/css'),
      'top' === n && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
})(
  '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5jc3MifQ== */'
);
var f = {
  backgroundHover: 'rgba(0, 0, 0, 0.15)',
  color: '#000000',
  progressRadius: 2,
  progressSize: 5,
  taskRadius: 4,
  titleFontSize: 20,
};
function p(e, t) {
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
var d = 'function' == typeof Symbol && Symbol.for,
  m = d ? Symbol.for('react.element') : 60103,
  y = d ? Symbol.for('react.portal') : 60106,
  h = d ? Symbol.for('react.fragment') : 60107,
  b = d ? Symbol.for('react.strict_mode') : 60108,
  v = d ? Symbol.for('react.profiler') : 60114,
  g = d ? Symbol.for('react.provider') : 60109,
  w = d ? Symbol.for('react.context') : 60110,
  E = d ? Symbol.for('react.async_mode') : 60111,
  O = d ? Symbol.for('react.concurrent_mode') : 60111,
  S = d ? Symbol.for('react.forward_ref') : 60112,
  x = d ? Symbol.for('react.suspense') : 60113,
  k = d ? Symbol.for('react.suspense_list') : 60120,
  C = d ? Symbol.for('react.memo') : 60115,
  j = d ? Symbol.for('react.lazy') : 60116,
  P = d ? Symbol.for('react.block') : 60121,
  N = d ? Symbol.for('react.fundamental') : 60117,
  I = d ? Symbol.for('react.responder') : 60118,
  T = d ? Symbol.for('react.scope') : 60119;
function $(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case m:
        switch ((e = e.type)) {
          case E:
          case O:
          case h:
          case v:
          case b:
          case x:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case w:
              case S:
              case j:
              case C:
              case g:
                return e;
              default:
                return t;
            }
        }
      case y:
        return t;
    }
  }
}
function R(e) {
  return $(e) === O;
}
var M = {
    AsyncMode: E,
    ConcurrentMode: O,
    ContextConsumer: w,
    ContextProvider: g,
    Element: m,
    ForwardRef: S,
    Fragment: h,
    Lazy: j,
    Memo: C,
    Portal: y,
    Profiler: v,
    StrictMode: b,
    Suspense: x,
    isAsyncMode: function(e) {
      return R(e) || $(e) === E;
    },
    isConcurrentMode: R,
    isContextConsumer: function(e) {
      return $(e) === w;
    },
    isContextProvider: function(e) {
      return $(e) === g;
    },
    isElement: function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === m;
    },
    isForwardRef: function(e) {
      return $(e) === S;
    },
    isFragment: function(e) {
      return $(e) === h;
    },
    isLazy: function(e) {
      return $(e) === j;
    },
    isMemo: function(e) {
      return $(e) === C;
    },
    isPortal: function(e) {
      return $(e) === y;
    },
    isProfiler: function(e) {
      return $(e) === v;
    },
    isStrictMode: function(e) {
      return $(e) === b;
    },
    isSuspense: function(e) {
      return $(e) === x;
    },
    isValidElementType: function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === h ||
        e === O ||
        e === v ||
        e === b ||
        e === x ||
        e === k ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === j ||
            e.$$typeof === C ||
            e.$$typeof === g ||
            e.$$typeof === w ||
            e.$$typeof === S ||
            e.$$typeof === N ||
            e.$$typeof === I ||
            e.$$typeof === T ||
            e.$$typeof === P))
      );
    },
    typeOf: $,
  },
  z = p(function(e, t) {
    'production' !== process.env.NODE_ENV &&
      (function() {
        var e = 'function' == typeof Symbol && Symbol.for,
          n = e ? Symbol.for('react.element') : 60103,
          r = e ? Symbol.for('react.portal') : 60106,
          o = e ? Symbol.for('react.fragment') : 60107,
          a = e ? Symbol.for('react.strict_mode') : 60108,
          c = e ? Symbol.for('react.profiler') : 60114,
          i = e ? Symbol.for('react.provider') : 60109,
          l = e ? Symbol.for('react.context') : 60110,
          s = e ? Symbol.for('react.async_mode') : 60111,
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
              case n:
                var d = e.type;
                switch (d) {
                  case s:
                  case u:
                  case o:
                  case c:
                  case a:
                  case p:
                    return d;
                  default:
                    var h = d && d.$$typeof;
                    switch (h) {
                      case l:
                      case f:
                      case y:
                      case m:
                      case i:
                        return h;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
        var E = s,
          O = u,
          S = l,
          x = i,
          k = n,
          C = f,
          j = o,
          P = y,
          N = m,
          I = r,
          T = c,
          $ = a,
          R = p,
          M = !1;
        function z(e) {
          return w(e) === u;
        }
        (t.AsyncMode = E),
          (t.ConcurrentMode = O),
          (t.ContextConsumer = S),
          (t.ContextProvider = x),
          (t.Element = k),
          (t.ForwardRef = C),
          (t.Fragment = j),
          (t.Lazy = P),
          (t.Memo = N),
          (t.Portal = I),
          (t.Profiler = T),
          (t.StrictMode = $),
          (t.Suspense = R),
          (t.isAsyncMode = function(e) {
            return (
              M ||
                ((M = !0),
                console.warn(
                  'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                )),
              z(e) || w(e) === s
            );
          }),
          (t.isConcurrentMode = z),
          (t.isContextConsumer = function(e) {
            return w(e) === l;
          }),
          (t.isContextProvider = function(e) {
            return w(e) === i;
          }),
          (t.isElement = function(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === n;
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
            return w(e) === r;
          }),
          (t.isProfiler = function(e) {
            return w(e) === c;
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
              e === c ||
              e === a ||
              e === p ||
              e === d ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === y ||
                  e.$$typeof === m ||
                  e.$$typeof === i ||
                  e.$$typeof === l ||
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
  A =
    (z.AsyncMode,
    z.ConcurrentMode,
    z.ContextConsumer,
    z.ContextProvider,
    z.Element,
    z.ForwardRef,
    z.Fragment,
    z.Lazy,
    z.Memo,
    z.Portal,
    z.Profiler,
    z.StrictMode,
    z.Suspense,
    z.isAsyncMode,
    z.isConcurrentMode,
    z.isContextConsumer,
    z.isContextProvider,
    z.isElement,
    z.isForwardRef,
    z.isFragment,
    z.isLazy,
    z.isMemo,
    z.isPortal,
    z.isProfiler,
    z.isStrictMode,
    z.isSuspense,
    z.isValidElementType,
    z.typeOf,
    p(function(e) {
      'production' === process.env.NODE_ENV ? (e.exports = M) : (e.exports = z);
    })),
  D = Object.getOwnPropertySymbols,
  _ = Object.prototype.hasOwnProperty,
  V = Object.prototype.propertyIsEnumerable;
function L(e) {
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
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function(e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var r = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
          r[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function(e, t) {
        for (var n, r, o = L(e), a = 1; a < arguments.length; a++) {
          for (var c in (n = Object(arguments[a])))
            _.call(n, c) && (o[c] = n[c]);
          if (D) {
            r = D(n);
            for (var i = 0; i < r.length; i++)
              V.call(n, r[i]) && (o[r[i]] = n[r[i]]);
          }
        }
        return o;
      },
  H = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  W = function() {};
if ('production' !== process.env.NODE_ENV) {
  var B = H,
    q = {},
    U = Function.call.bind(Object.prototype.hasOwnProperty);
  W = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  };
}
function J(e, t, n, r, o) {
  if ('production' !== process.env.NODE_ENV)
    for (var a in e)
      if (U(e, a)) {
        var c;
        try {
          if ('function' != typeof e[a]) {
            var i = Error(
              (r || 'React class') +
                ': ' +
                n +
                ' type `' +
                a +
                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                typeof e[a] +
                '`.'
            );
            throw ((i.name = 'Invariant Violation'), i);
          }
          c = e[a](t, a, r, n, null, B);
        } catch (e) {
          c = e;
        }
        if (
          (!c ||
            c instanceof Error ||
            W(
              (r || 'React class') +
                ': type specification of ' +
                n +
                ' `' +
                a +
                '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                typeof c +
                '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
            ),
          c instanceof Error && !(c.message in q))
        ) {
          q[c.message] = !0;
          var l = o ? o() : '';
          W('Failed ' + n + ' type: ' + c.message + (null != l ? l : ''));
        }
      }
}
J.resetWarningCache = function() {
  'production' !== process.env.NODE_ENV && (q = {});
};
var Y = J,
  X = Function.call.bind(Object.prototype.hasOwnProperty),
  Z = function() {};
function G() {
  return null;
}
'production' !== process.env.NODE_ENV &&
  (Z = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  });
var Q = function(e, t) {
  var n = 'function' == typeof Symbol && Symbol.iterator;
  var r = {
    array: i('array'),
    bool: i('boolean'),
    func: i('function'),
    number: i('number'),
    object: i('object'),
    string: i('string'),
    symbol: i('symbol'),
    any: c(G),
    arrayOf: function(e) {
      return c(function(t, n, r, o, c) {
        if ('function' != typeof e)
          return new a(
            'Property `' +
              c +
              '` of component `' +
              r +
              '` has invalid PropType notation inside arrayOf.'
          );
        var i = t[n];
        if (!Array.isArray(i))
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              s(i) +
              '` supplied to `' +
              r +
              '`, expected an array.'
          );
        for (var l = 0; l < i.length; l++) {
          var u = e(i, l, r, o, c + '[' + l + ']', H);
          if (u instanceof Error) return u;
        }
        return null;
      });
    },
    element: c(function(t, n, r, o, c) {
      var i = t[n];
      return e(i)
        ? null
        : new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              s(i) +
              '` supplied to `' +
              r +
              '`, expected a single ReactElement.'
          );
    }),
    elementType: c(function(e, t, n, r, o) {
      var c = e[t];
      return A.isValidElementType(c)
        ? null
        : new a(
            'Invalid ' +
              r +
              ' `' +
              o +
              '` of type `' +
              s(c) +
              '` supplied to `' +
              n +
              '`, expected a single ReactElement type.'
          );
    }),
    instanceOf: function(e) {
      return c(function(t, n, r, o, c) {
        if (!(t[n] instanceof e)) {
          var i = e.name || '<<anonymous>>';
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              (function(e) {
                if (!e.constructor || !e.constructor.name)
                  return '<<anonymous>>';
                return e.constructor.name;
              })(t[n]) +
              '` supplied to `' +
              r +
              '`, expected instance of `' +
              i +
              '`.'
          );
        }
        return null;
      });
    },
    node: c(function(e, t, n, r, o) {
      return l(e[t])
        ? null
        : new a(
            'Invalid ' +
              r +
              ' `' +
              o +
              '` supplied to `' +
              n +
              '`, expected a ReactNode.'
          );
    }),
    objectOf: function(e) {
      return c(function(t, n, r, o, c) {
        if ('function' != typeof e)
          return new a(
            'Property `' +
              c +
              '` of component `' +
              r +
              '` has invalid PropType notation inside objectOf.'
          );
        var i = t[n],
          l = s(i);
        if ('object' !== l)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              l +
              '` supplied to `' +
              r +
              '`, expected an object.'
          );
        for (var u in i)
          if (X(i, u)) {
            var f = e(i, u, r, o, c + '.' + u, H);
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
              ? Z(
                  'Invalid arguments supplied to oneOf, expected an array, got ' +
                    arguments.length +
                    ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                )
              : Z('Invalid argument supplied to oneOf, expected an array.')),
          G
        );
      function t(t, n, r, c, i) {
        for (var l = t[n], s = 0; s < e.length; s++)
          if (o(l, e[s])) return null;
        var f = JSON.stringify(e, function(e, t) {
          return 'symbol' === u(t) ? String(t) : t;
        });
        return new a(
          'Invalid ' +
            c +
            ' `' +
            i +
            '` of value `' +
            String(l) +
            '` supplied to `' +
            r +
            '`, expected one of ' +
            f +
            '.'
        );
      }
      return c(t);
    },
    oneOfType: function(e) {
      if (!Array.isArray(e))
        return (
          'production' !== process.env.NODE_ENV &&
            Z(
              'Invalid argument supplied to oneOfType, expected an instance of array.'
            ),
          G
        );
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if ('function' != typeof n)
          return (
            Z(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                f(n) +
                ' at index ' +
                t +
                '.'
            ),
            G
          );
      }
      return c(function(t, n, r, o, c) {
        for (var i = 0; i < e.length; i++) {
          if (null == (0, e[i])(t, n, r, o, c, H)) return null;
        }
        return new a('Invalid ' + o + ' `' + c + '` supplied to `' + r + '`.');
      });
    },
    shape: function(e) {
      return c(function(t, n, r, o, c) {
        var i = t[n],
          l = s(i);
        if ('object' !== l)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              l +
              '` supplied to `' +
              r +
              '`, expected `object`.'
          );
        for (var u in e) {
          var f = e[u];
          if (f) {
            var p = f(i, u, r, o, c + '.' + u, H);
            if (p) return p;
          }
        }
        return null;
      });
    },
    exact: function(e) {
      return c(function(t, n, r, o, c) {
        var i = t[n],
          l = s(i);
        if ('object' !== l)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              l +
              '` supplied to `' +
              r +
              '`, expected `object`.'
          );
        var u = F({}, t[n], e);
        for (var f in u) {
          var p = e[f];
          if (!p)
            return new a(
              'Invalid ' +
                o +
                ' `' +
                c +
                '` key `' +
                f +
                '` supplied to `' +
                r +
                '`.\nBad object: ' +
                JSON.stringify(t[n], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(e), null, '  ')
            );
          var d = p(i, f, r, o, c + '.' + f, H);
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
  function c(e) {
    if ('production' !== process.env.NODE_ENV)
      var n = {},
        r = 0;
    function o(o, c, i, l, s, u, f) {
      if (((l = l || '<<anonymous>>'), (u = u || i), f !== H)) {
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
          var d = l + ':' + i;
          !n[d] &&
            r < 3 &&
            (Z(
              'You are manually calling a React.PropTypes validation function for the `' +
                u +
                '` prop on `' +
                l +
                '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
            ),
            (n[d] = !0),
            r++);
        }
      }
      return null == c[i]
        ? o
          ? null === c[i]
            ? new a(
                'The ' +
                  s +
                  ' `' +
                  u +
                  '` is marked as required in `' +
                  l +
                  '`, but its value is `null`.'
              )
            : new a(
                'The ' +
                  s +
                  ' `' +
                  u +
                  '` is marked as required in `' +
                  l +
                  '`, but its value is `undefined`.'
              )
          : null
        : e(c, i, l, s, u);
    }
    var c = o.bind(null, !1);
    return (c.isRequired = o.bind(null, !0)), c;
  }
  function i(e) {
    return c(function(t, n, r, o, c, i) {
      var l = t[n];
      return s(l) !== e
        ? new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              u(l) +
              '` supplied to `' +
              r +
              '`, expected `' +
              e +
              '`.'
          )
        : null;
    });
  }
  function l(t) {
    switch (typeof t) {
      case 'number':
      case 'string':
      case 'undefined':
        return !0;
      case 'boolean':
        return !t;
      case 'object':
        if (Array.isArray(t)) return t.every(l);
        if (null === t || e(t)) return !0;
        var r = (function(e) {
          var t = e && ((n && e[n]) || e['@@iterator']);
          if ('function' == typeof t) return t;
        })(t);
        if (!r) return !1;
        var o,
          a = r.call(t);
        if (r !== t.entries) {
          for (; !(o = a.next()).done; ) if (!l(o.value)) return !1;
        } else
          for (; !(o = a.next()).done; ) {
            var c = o.value;
            if (c && !l(c[1])) return !1;
          }
        return !0;
      default:
        return !1;
    }
  }
  function s(e) {
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
    var t = s(e);
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
    (r.checkPropTypes = Y),
    (r.resetWarningCache = Y.resetWarningCache),
    (r.PropTypes = r),
    r
  );
};
function K() {}
function ee() {}
ee.resetWarningCache = K;
var te = p(function(e) {
    if ('production' !== process.env.NODE_ENV) {
      var t = A;
      e.exports = Q(t.isElement, !0);
    } else
      e.exports = (function() {
        function e(e, t, n, r, o, a) {
          if (a !== H) {
            var c = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((c.name = 'Invariant Violation'), c);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
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
          checkPropTypes: ee,
          resetWarningCache: K,
        };
        return (n.PropTypes = n), n;
      })();
  }),
  ne =
    (te.oneOf(['top', 'bottom', 'both']),
    te.shape({
      color: te.string,
      progressRadius: te.oneOfType([te.number, te.string]),
      progressSize: te.oneOfType([te.number, te.string]),
      titleFontSize: te.oneOfType([te.number, te.string]),
    }),
    te.oneOfType([te.string, te.bool]),
    te.shape({ Checked: te.node.isRequired, Unchecked: te.node.isRequired }),
    te.shape({
      checked: te.bool.isRequired,
      id: te.oneOfType([te.string, te.bool]).isRequired,
      label: te.string.isRequired,
    })),
  re =
    (te.arrayOf(ne),
    function(e) {
      return e;
    });
function oe(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ae(e, t) {
  if (e) {
    if ('string' == typeof e) return oe(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(n)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? oe(e, t)
        : void 0
    );
  }
}
function ce(e) {
  return (
    (function(e) {
      if (Array.isArray(e)) return oe(e);
    })(e) ||
    (function(e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    ae(e) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var ie = function(e) {
    var t = e.filter(function(e) {
        return e.checked;
      }),
      n = e.filter(function(e) {
        return !e.checked;
      });
    return [].concat(ce(n), ce(t));
  },
  le = function(e) {
    return e.filter(function(e) {
      return !e.checked;
    });
  };
function se(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
          r = !0,
          o = !1,
          a = void 0;
        try {
          for (
            var c, i = e[Symbol.iterator]();
            !(r = (c = i.next()).done) &&
            (n.push(c.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          (o = !0), (a = e);
        } finally {
          try {
            r || null == i.return || i.return();
          } finally {
            if (o) throw a;
          }
        }
        return n;
      }
    })(e, t) ||
    ae(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var ue = ''.concat('napper-todolist', '-checker'),
  fe = r({
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
  pe = function(r) {
    var a = r.allChecked,
      c = r.onChange,
      i = o(),
      l = fe({ theme: i }),
      s = se(t(!1), 2),
      u = s[0],
      f = s[1];
    return (
      n(
        function() {
          a !== u && f(a);
        },
        [a, u]
      ),
      e.createElement(
        'div',
        { className: ''.concat(ue, ' ').concat(l.container) },
        e.createElement(
          'button',
          {
            className: ''.concat(ue, '-btn ').concat(l.btn),
            type: 'button',
            onClick: function() {
              var e = !u;
              f(e), c(e);
            },
          },
          e.createElement(
            'div',
            { className: ''.concat(ue, '-lbl ').concat(l.lbl) },
            !u && e.createElement('span', null, 'Check all'),
            u && e.createElement('span', null, 'Uncheck all')
          )
        )
      )
    );
  },
  de = ''.concat('napper-todolist', '-counter'),
  me = r({
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
  ye = e.memo(function(t) {
    var n = t.tasks,
      r = o(),
      a = me({ theme: r }),
      c = (n && n.length) || 0,
      i =
        (n &&
          n.filter(function(e) {
            return e.checked;
          }).length) ||
        0;
    return e.createElement(
      'div',
      { className: ''.concat(de, ' ').concat(a.container) },
      e.createElement('span', { className: ''.concat(de, '-cpt') }, i),
      e.createElement('span', { className: ''.concat(de, '-spl') }, '/'),
      e.createElement('span', { className: ''.concat(de, '-ttl') }, c)
    );
  }),
  he = ''.concat('napper-todolist', '-progress'),
  be = r({
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
  ve = e.memo(function(t) {
    var n = t.tasks,
      r = o(),
      a = be({ theme: r }),
      c = (n && n.length) || 0,
      i =
        (100 *
          ((n &&
            n.filter(function(e) {
              return e.checked;
            }).length) ||
            0)) /
        c,
      l = i > 0 ? '0 2px 2px 0' : 2;
    return e.createElement(
      'div',
      { className: ''.concat(he, ' ').concat(a.container) },
      e.createElement(
        'div',
        { className: ''.concat(he, '-bar ').concat(a.bar) },
        e.createElement('div', {
          className: ''.concat(he, '-trk ').concat(a.trk),
          style: { borderRadius: l, left: ''.concat(i, '%') },
        }),
        e.createElement('div', {
          className: ''.concat(he, '-tmb ').concat(a.tmb),
          style: { width: ''.concat(i, '%') },
        })
      )
    );
  });
ve.defaultProps = {};
var ge = ''.concat('napper-todolist', '-footer'),
  we = r({
    container: { display: 'flex', flex: '0 1', paddingTop: 12 },
    wrp: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  }),
  Ee = e.memo(function(t) {
    var n = t.showCounter,
      r = t.showProgress,
      o = t.tasks,
      a = we();
    return e.createElement(
      'div',
      { className: ''.concat(ge, ' ').concat(a.container) },
      e.createElement(
        'div',
        { className: ''.concat(ge, '-wrp ').concat(a.wrp) },
        r && e.createElement(ve, { tasks: o }),
        n && e.createElement(ye, { tasks: o })
      )
    );
  }),
  Oe = e.memo(function() {
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
  Se = e.memo(function() {
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
  xe = e.memo(function() {
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
  ke = e.memo(function() {
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
  Ce = ''.concat('napper-todolist', '-header'),
  je = r({
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
  Pe = e.memo(function(t) {
    var n = t.createHandler,
      r = t.parentId,
      a = t.showCounter,
      c = t.showProgress,
      i = t.tasks,
      l = t.title,
      s = o(),
      u = je({ theme: s });
    return e.createElement(
      'div',
      { className: ''.concat(Ce, ' ').concat(u.container) },
      e.createElement(
        'div',
        { className: ''.concat(Ce, '-wrp ').concat(u.wrp) },
        n &&
          e.createElement(
            'button',
            {
              type: 'button',
              onClick: function() {
                return n(r);
              },
            },
            e.createElement(Oe, null)
          ),
        l &&
          e.createElement(
            'span',
            { className: ''.concat(Ce, '-tit ').concat(u.tit) },
            l
          ),
        a && e.createElement(ye, { tasks: i })
      ),
      c &&
        e.createElement(
          'div',
          { className: ''.concat(Ce, '-btm ').concat(u.btm) },
          e.createElement(ve, { tasks: i })
        )
    );
  });
Pe.defaultProps = { createHandler: null, parentId: null };
var Ne = ''.concat('napper-todolist', '-task'),
  Ie = r({
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
  Te = function(n) {
    var r = n.Icons,
      a = n.checked,
      c = n.id,
      i = n.label,
      l = n.onChange,
      s = n.onDelete,
      u = o(),
      f = Ie({ theme: u }),
      p = se(t(!1), 2),
      d = p[0],
      m = p[1],
      y = d && s;
    return e.createElement(
      'div',
      {
        className: ''.concat(Ne, ' ').concat(f.task),
        'data-id': 'napper-todolist-task-'.concat(c),
        onMouseEnter: function() {
          return m(!0);
        },
        onMouseLeave: function() {
          return m(!1);
        },
      },
      e.createElement(
        'button',
        {
          className: ''.concat(Ne, '-btn ').concat(f.btn),
          type: 'button',
          onClick: function() {
            return l(c, !a);
          },
        },
        e.createElement(
          'div',
          { className: ''.concat(Ne, '-ckb ').concat(f.ckb) },
          a && r.Checked,
          !a && r.Unchecked
        ),
        e.createElement(
          'div',
          { className: ''.concat(Ne, '-lbl ').concat(f.lbl) },
          e.createElement('span', null, i)
        )
      ),
      y &&
        e.createElement(
          'button',
          {
            className: ''.concat(Ne, '-dlt ').concat(f.dlt),
            type: 'button',
            onClick: function() {
              return s(c);
            },
          },
          e.createElement(Se, null)
        )
    );
  };
Te.defaultProps = {
  Icons: {
    Checked: e.createElement(xe, null),
    Unchecked: e.createElement(ke, null),
  },
};
var $e = ''.concat('napper-todolist', '-tasks'),
  Re = r({
    container: { display: 'flex', flex: 1, position: 'relative' },
    wrp: {
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      left: 0,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'absolute',
      right: 0,
      top: 0,
    },
  }),
  Me = function(t) {
    var n = t.onChange,
      r = t.onDelete,
      o = t.render,
      a = t.tasks,
      c = Re();
    return e.createElement(
      'div',
      { className: ''.concat($e, ' ').concat(c.container) },
      e.createElement(
        'div',
        { className: ''.concat($e, '-wrp ').concat(c.wrp) },
        a.map(function(e) {
          return o(e, n, r);
        })
      )
    );
  };
Me.defaultProps = {
  render: e.memo(function(t, n, r) {
    return e.createElement(Te, {
      key: t.id,
      checked: t.checked,
      id: t.id,
      label: t.label,
      onChange: n,
      onDelete: r,
    });
  }),
};
var ze = ''.concat('napper-todolist', '-container'),
  Ae = r({
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
  De = e.memo(function(t) {
    var n,
      r = t.completedAtBottom,
      o = t.counterPosition,
      a = t.id,
      c = t.onChange,
      i = t.onCreateClick,
      l = t.onDelete,
      s = t.onToggleAll,
      u = t.order,
      f = t.orderBy,
      p = t.showCompleted,
      d = t.showCounter,
      m = t.showProgress,
      y = t.tasks,
      h = t.title,
      b = Ae(),
      v = (function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function(e) {
          return t.reduceRight(function(e, t) {
            return t(e);
          }, e);
        };
      })(
        (!p && le) || re,
        (r && ie) || re,
        (u &&
          (function(e, t) {
            return function(n) {
              var r = ce(n);
              return (
                r.sort(function(t, n) {
                  var r = t[e],
                    o = n[e];
                  return r && o
                    ? (r = r.toString().toLocaleLowerCase()) >
                      (o = o.toString().toLocaleLowerCase())
                      ? 1
                      : r < o
                      ? -1
                      : 0
                    : 0;
                }),
                'desc' === t && r.reverse(),
                r
              );
            };
          })(f, u)) ||
          re
      )(y),
      g = (function(e) {
        return (
          e.filter(function(e) {
            return e.checked;
          }).length >= e.length
        );
      })(y),
      w = ((n = o), d && ('top' === n || 'both' === n)),
      E = (function(e, t) {
        return t && ('top' === e || 'both' === e);
      })(o, m),
      O = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, d),
      S = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, m),
      x = {};
    return (
      a && (x.id = a),
      e.createElement(
        'div',
        Object.assign({}, x, {
          className: ''.concat(ze, ' ').concat(b.container),
        }),
        e.createElement(
          'div',
          { className: ''.concat(ze, '-wrp ').concat(b.wrp) },
          e.createElement(Pe, {
            parentId: a,
            showCounter: w,
            createHandler: i || null,
            showProgress: E,
            tasks: y,
            title: h,
          }),
          s && e.createElement(pe, { allChecked: g, onChange: s }),
          e.createElement(Me, { tasks: v, onChange: c, onDelete: l }),
          e.createElement(Ee, { showCounter: O, showProgress: S, tasks: y })
        )
      )
    );
  });
De.defaultProps = {
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
};
var _e = ''.concat('napper-todolist', '-'),
  Ve = function(t) {
    var n = t.jssMinifyId,
      r = t.theme,
      o = u(t, ['jssMinifyId', 'theme']),
      p = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function(t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      })({}, f, {}, r);
    return e.createElement(
      a,
      { classNamePrefix: _e, id: { minify: n }, jss: c },
      e.createElement(i, { theme: p }, e.createElement(De, o))
    );
  };
Ve.defaultProps = { jssMinifyId: !0, theme: {} };
export default Ve;