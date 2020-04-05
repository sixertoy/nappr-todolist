'use strict';
var e,
  t = require('react'),
  n = (e = t) && 'object' == typeof e && 'default' in e ? e.default : e,
  r = require('react-jss');
function o(e, t, n) {
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
function a(e, t) {
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
function c(e, t) {
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
var i = {
  backgroundHover: 'rgba(0, 0, 0, 0.15)',
  color: '#000000',
  progressRadius: 2,
  progressSize: 5,
  taskRadius: 4,
  titleFontSize: 20,
};
function s(e, t) {
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
var l = 'function' == typeof Symbol && Symbol.for,
  u = l ? Symbol.for('react.element') : 60103,
  f = l ? Symbol.for('react.portal') : 60106,
  p = l ? Symbol.for('react.fragment') : 60107,
  d = l ? Symbol.for('react.strict_mode') : 60108,
  m = l ? Symbol.for('react.profiler') : 60114,
  y = l ? Symbol.for('react.provider') : 60109,
  h = l ? Symbol.for('react.context') : 60110,
  b = l ? Symbol.for('react.async_mode') : 60111,
  v = l ? Symbol.for('react.concurrent_mode') : 60111,
  g = l ? Symbol.for('react.forward_ref') : 60112,
  w = l ? Symbol.for('react.suspense') : 60113,
  E = l ? Symbol.for('react.suspense_list') : 60120,
  S = l ? Symbol.for('react.memo') : 60115,
  O = l ? Symbol.for('react.lazy') : 60116,
  x = l ? Symbol.for('react.block') : 60121,
  k = l ? Symbol.for('react.fundamental') : 60117,
  C = l ? Symbol.for('react.responder') : 60118,
  j = l ? Symbol.for('react.scope') : 60119;
function P(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case u:
        switch ((e = e.type)) {
          case b:
          case v:
          case p:
          case m:
          case d:
          case w:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case h:
              case g:
              case O:
              case S:
              case y:
                return e;
              default:
                return t;
            }
        }
      case f:
        return t;
    }
  }
}
function N(e) {
  return P(e) === v;
}
var T = {
    AsyncMode: b,
    ConcurrentMode: v,
    ContextConsumer: h,
    ContextProvider: y,
    Element: u,
    ForwardRef: g,
    Fragment: p,
    Lazy: O,
    Memo: S,
    Portal: f,
    Profiler: m,
    StrictMode: d,
    Suspense: w,
    isAsyncMode: function(e) {
      return N(e) || P(e) === b;
    },
    isConcurrentMode: N,
    isContextConsumer: function(e) {
      return P(e) === h;
    },
    isContextProvider: function(e) {
      return P(e) === y;
    },
    isElement: function(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === u;
    },
    isForwardRef: function(e) {
      return P(e) === g;
    },
    isFragment: function(e) {
      return P(e) === p;
    },
    isLazy: function(e) {
      return P(e) === O;
    },
    isMemo: function(e) {
      return P(e) === S;
    },
    isPortal: function(e) {
      return P(e) === f;
    },
    isProfiler: function(e) {
      return P(e) === m;
    },
    isStrictMode: function(e) {
      return P(e) === d;
    },
    isSuspense: function(e) {
      return P(e) === w;
    },
    isValidElementType: function(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === p ||
        e === v ||
        e === m ||
        e === d ||
        e === w ||
        e === E ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === O ||
            e.$$typeof === S ||
            e.$$typeof === y ||
            e.$$typeof === h ||
            e.$$typeof === g ||
            e.$$typeof === k ||
            e.$$typeof === C ||
            e.$$typeof === j ||
            e.$$typeof === x))
      );
    },
    typeOf: P,
  },
  I = s(function(e, t) {
    'production' !== process.env.NODE_ENV &&
      (function() {
        var e = 'function' == typeof Symbol && Symbol.for,
          n = e ? Symbol.for('react.element') : 60103,
          r = e ? Symbol.for('react.portal') : 60106,
          o = e ? Symbol.for('react.fragment') : 60107,
          a = e ? Symbol.for('react.strict_mode') : 60108,
          c = e ? Symbol.for('react.profiler') : 60114,
          i = e ? Symbol.for('react.provider') : 60109,
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
              case n:
                var d = e.type;
                switch (d) {
                  case l:
                  case u:
                  case o:
                  case c:
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
        var E = l,
          S = u,
          O = s,
          x = i,
          k = n,
          C = f,
          j = o,
          P = y,
          N = m,
          T = r,
          I = c,
          $ = a,
          R = p,
          M = !1;
        function z(e) {
          return w(e) === u;
        }
        (t.AsyncMode = E),
          (t.ConcurrentMode = S),
          (t.ContextConsumer = O),
          (t.ContextProvider = x),
          (t.Element = k),
          (t.ForwardRef = C),
          (t.Fragment = j),
          (t.Lazy = P),
          (t.Memo = N),
          (t.Portal = T),
          (t.Profiler = I),
          (t.StrictMode = $),
          (t.Suspense = R),
          (t.isAsyncMode = function(e) {
            return (
              M ||
                ((M = !0),
                console.warn(
                  'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                )),
              z(e) || w(e) === l
            );
          }),
          (t.isConcurrentMode = z),
          (t.isContextConsumer = function(e) {
            return w(e) === s;
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
  $ =
    (I.AsyncMode,
    I.ConcurrentMode,
    I.ContextConsumer,
    I.ContextProvider,
    I.Element,
    I.ForwardRef,
    I.Fragment,
    I.Lazy,
    I.Memo,
    I.Portal,
    I.Profiler,
    I.StrictMode,
    I.Suspense,
    I.isAsyncMode,
    I.isConcurrentMode,
    I.isContextConsumer,
    I.isContextProvider,
    I.isElement,
    I.isForwardRef,
    I.isFragment,
    I.isLazy,
    I.isMemo,
    I.isPortal,
    I.isProfiler,
    I.isStrictMode,
    I.isSuspense,
    I.isValidElementType,
    I.typeOf,
    s(function(e) {
      'production' === process.env.NODE_ENV ? (e.exports = T) : (e.exports = I);
    })),
  R = Object.getOwnPropertySymbols,
  M = Object.prototype.hasOwnProperty,
  z = Object.prototype.propertyIsEnumerable;
function A(e) {
  if (null == e)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined'
    );
  return Object(e);
}
var D = (function() {
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
        for (var n, r, o = A(e), a = 1; a < arguments.length; a++) {
          for (var c in (n = Object(arguments[a])))
            M.call(n, c) && (o[c] = n[c]);
          if (R) {
            r = R(n);
            for (var i = 0; i < r.length; i++)
              z.call(n, r[i]) && (o[r[i]] = n[r[i]]);
          }
        }
        return o;
      },
  _ = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  V = function() {};
if ('production' !== process.env.NODE_ENV) {
  var L = _,
    F = {},
    H = Function.call.bind(Object.prototype.hasOwnProperty);
  V = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  };
}
function W(e, t, n, r, o) {
  if ('production' !== process.env.NODE_ENV)
    for (var a in e)
      if (H(e, a)) {
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
          c = e[a](t, a, r, n, null, L);
        } catch (e) {
          c = e;
        }
        if (
          (!c ||
            c instanceof Error ||
            V(
              (r || 'React class') +
                ': type specification of ' +
                n +
                ' `' +
                a +
                '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                typeof c +
                '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
            ),
          c instanceof Error && !(c.message in F))
        ) {
          F[c.message] = !0;
          var s = o ? o() : '';
          V('Failed ' + n + ' type: ' + c.message + (null != s ? s : ''));
        }
      }
}
W.resetWarningCache = function() {
  'production' !== process.env.NODE_ENV && (F = {});
};
var U = W,
  B = Function.call.bind(Object.prototype.hasOwnProperty),
  q = function() {};
function J() {
  return null;
}
'production' !== process.env.NODE_ENV &&
  (q = function(e) {
    var t = 'Warning: ' + e;
    'undefined' != typeof console && console.error(t);
    try {
      throw new Error(t);
    } catch (e) {}
  });
var Y = function(e, t) {
  var n = 'function' == typeof Symbol && Symbol.iterator;
  var r = {
    array: i('array'),
    bool: i('boolean'),
    func: i('function'),
    number: i('number'),
    object: i('object'),
    string: i('string'),
    symbol: i('symbol'),
    any: c(J),
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
              l(i) +
              '` supplied to `' +
              r +
              '`, expected an array.'
          );
        for (var s = 0; s < i.length; s++) {
          var u = e(i, s, r, o, c + '[' + s + ']', _);
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
              l(i) +
              '` supplied to `' +
              r +
              '`, expected a single ReactElement.'
          );
    }),
    elementType: c(function(e, t, n, r, o) {
      var c = e[t];
      return $.isValidElementType(c)
        ? null
        : new a(
            'Invalid ' +
              r +
              ' `' +
              o +
              '` of type `' +
              l(c) +
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
      return s(e[t])
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
          s = l(i);
        if ('object' !== s)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              s +
              '` supplied to `' +
              r +
              '`, expected an object.'
          );
        for (var u in i)
          if (B(i, u)) {
            var f = e(i, u, r, o, c + '.' + u, _);
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
              ? q(
                  'Invalid arguments supplied to oneOf, expected an array, got ' +
                    arguments.length +
                    ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                )
              : q('Invalid argument supplied to oneOf, expected an array.')),
          J
        );
      function t(t, n, r, c, i) {
        for (var s = t[n], l = 0; l < e.length; l++)
          if (o(s, e[l])) return null;
        var f = JSON.stringify(e, function(e, t) {
          return 'symbol' === u(t) ? String(t) : t;
        });
        return new a(
          'Invalid ' +
            c +
            ' `' +
            i +
            '` of value `' +
            String(s) +
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
            q(
              'Invalid argument supplied to oneOfType, expected an instance of array.'
            ),
          J
        );
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if ('function' != typeof n)
          return (
            q(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                f(n) +
                ' at index ' +
                t +
                '.'
            ),
            J
          );
      }
      return c(function(t, n, r, o, c) {
        for (var i = 0; i < e.length; i++) {
          if (null == (0, e[i])(t, n, r, o, c, _)) return null;
        }
        return new a('Invalid ' + o + ' `' + c + '` supplied to `' + r + '`.');
      });
    },
    shape: function(e) {
      return c(function(t, n, r, o, c) {
        var i = t[n],
          s = l(i);
        if ('object' !== s)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              s +
              '` supplied to `' +
              r +
              '`, expected `object`.'
          );
        for (var u in e) {
          var f = e[u];
          if (f) {
            var p = f(i, u, r, o, c + '.' + u, _);
            if (p) return p;
          }
        }
        return null;
      });
    },
    exact: function(e) {
      return c(function(t, n, r, o, c) {
        var i = t[n],
          s = l(i);
        if ('object' !== s)
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              s +
              '` supplied to `' +
              r +
              '`, expected `object`.'
          );
        var u = D({}, t[n], e);
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
          var d = p(i, f, r, o, c + '.' + f, _);
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
    function o(o, c, i, s, l, u, f) {
      if (((s = s || '<<anonymous>>'), (u = u || i), f !== _)) {
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
          var d = s + ':' + i;
          !n[d] &&
            r < 3 &&
            (q(
              'You are manually calling a React.PropTypes validation function for the `' +
                u +
                '` prop on `' +
                s +
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
        : e(c, i, s, l, u);
    }
    var c = o.bind(null, !1);
    return (c.isRequired = o.bind(null, !0)), c;
  }
  function i(e) {
    return c(function(t, n, r, o, c, i) {
      var s = t[n];
      return l(s) !== e
        ? new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              u(s) +
              '` supplied to `' +
              r +
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
        var r = (function(e) {
          var t = e && ((n && e[n]) || e['@@iterator']);
          if ('function' == typeof t) return t;
        })(t);
        if (!r) return !1;
        var o,
          a = r.call(t);
        if (r !== t.entries) {
          for (; !(o = a.next()).done; ) if (!s(o.value)) return !1;
        } else
          for (; !(o = a.next()).done; ) {
            var c = o.value;
            if (c && !s(c[1])) return !1;
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
    (r.checkPropTypes = U),
    (r.resetWarningCache = U.resetWarningCache),
    (r.PropTypes = r),
    r
  );
};
function X() {}
function Z() {}
Z.resetWarningCache = X;
var G = s(function(e) {
    if ('production' !== process.env.NODE_ENV) {
      var t = $;
      e.exports = Y(t.isElement, !0);
    } else
      e.exports = (function() {
        function e(e, t, n, r, o, a) {
          if (a !== _) {
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
          checkPropTypes: Z,
          resetWarningCache: X,
        };
        return (n.PropTypes = n), n;
      })();
  }),
  Q =
    (G.oneOf(['top', 'bottom', 'both']),
    G.shape({
      color: G.string,
      progressRadius: G.oneOfType([G.number, G.string]),
      progressSize: G.oneOfType([G.number, G.string]),
      titleFontSize: G.oneOfType([G.number, G.string]),
    }),
    G.oneOfType([G.string, G.bool]),
    G.shape({ Checked: G.node.isRequired, Unchecked: G.node.isRequired }),
    G.shape({
      checked: G.bool.isRequired,
      id: G.oneOfType([G.string, G.bool]).isRequired,
      label: G.string.isRequired,
    })),
  K =
    (G.arrayOf(Q),
    function(e) {
      return e;
    });
function ee(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function te(e, t) {
  if (e) {
    if ('string' == typeof e) return ee(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(n)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? ee(e, t)
        : void 0
    );
  }
}
function ne(e) {
  return (
    (function(e) {
      if (Array.isArray(e)) return ee(e);
    })(e) ||
    (function(e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    te(e) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var re = function(e) {
    var t = e.filter(function(e) {
        return e.checked;
      }),
      n = e.filter(function(e) {
        return !e.checked;
      });
    return [].concat(ne(n), ne(t));
  },
  oe = function(e) {
    return e.filter(function(e) {
      return !e.checked;
    });
  };
function ae(e, t) {
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
    te(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var ce = ''.concat('napper-todolist', '-checker'),
  ie = r.createUseStyles({
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
  se = function(e) {
    var o = e.allChecked,
      a = e.onChange,
      c = r.useTheme(),
      i = ie({ theme: c }),
      s = ae(t.useState(!1), 2),
      l = s[0],
      u = s[1];
    return (
      t.useEffect(
        function() {
          o !== l && u(o);
        },
        [o, l]
      ),
      n.createElement(
        'div',
        { className: ''.concat(ce, ' ').concat(i.container) },
        n.createElement(
          'button',
          {
            className: ''.concat(ce, '-btn ').concat(i.btn),
            type: 'button',
            onClick: function() {
              var e = !l;
              u(e), a(e);
            },
          },
          n.createElement(
            'div',
            { className: ''.concat(ce, '-lbl ').concat(i.lbl) },
            !l && n.createElement('span', null, 'Check all'),
            l && n.createElement('span', null, 'Uncheck all')
          )
        )
      )
    );
  },
  le = ''.concat('napper-todolist', '-counter'),
  ue = r.createUseStyles({
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
  fe = n.memo(function(e) {
    var t = e.tasks,
      o = r.useTheme(),
      a = ue({ theme: o }),
      c = (t && t.length) || 0,
      i =
        (t &&
          t.filter(function(e) {
            return e.checked;
          }).length) ||
        0;
    return n.createElement(
      'div',
      { className: ''.concat(le, ' ').concat(a.container) },
      n.createElement('span', { className: ''.concat(le, '-cpt') }, i),
      n.createElement('span', { className: ''.concat(le, '-spl') }, '/'),
      n.createElement('span', { className: ''.concat(le, '-ttl') }, c)
    );
  }),
  pe = ''.concat('napper-todolist', '-progress'),
  de = r.createUseStyles({
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
  me = n.memo(function(e) {
    var t = e.tasks,
      o = r.useTheme(),
      a = de({ theme: o }),
      c = (t && t.length) || 0,
      i =
        (100 *
          ((t &&
            t.filter(function(e) {
              return e.checked;
            }).length) ||
            0)) /
        c,
      s = i > 0 ? '0 2px 2px 0' : 2;
    return n.createElement(
      'div',
      { className: ''.concat(pe, ' ').concat(a.container) },
      n.createElement(
        'div',
        { className: ''.concat(pe, '-bar ').concat(a.bar) },
        n.createElement('div', {
          className: ''.concat(pe, '-trk ').concat(a.trk),
          style: { borderRadius: s, left: ''.concat(i, '%') },
        }),
        n.createElement('div', {
          className: ''.concat(pe, '-tmb ').concat(a.tmb),
          style: { width: ''.concat(i, '%') },
        })
      )
    );
  });
me.defaultProps = {};
var ye = ''.concat('napper-todolist', '-footer'),
  he = r.createUseStyles({
    container: { display: 'flex', flex: '0 1', paddingTop: 12 },
    wrp: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  }),
  be = n.memo(function(e) {
    var t = e.showCounter,
      r = e.showProgress,
      o = e.tasks,
      a = he();
    return n.createElement(
      'div',
      { className: ''.concat(ye, ' ').concat(a.container) },
      n.createElement(
        'div',
        { className: ''.concat(ye, '-wrp ').concat(a.wrp) },
        r && n.createElement(me, { tasks: o }),
        t && n.createElement(fe, { tasks: o })
      )
    );
  }),
  ve = n.memo(function() {
    return n.createElement(
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
      n.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
    );
  }),
  ge = n.memo(function() {
    return n.createElement(
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
      n.createElement('path', {
        d:
          'M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z',
      })
    );
  }),
  we = n.memo(function() {
    return n.createElement(
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
      n.createElement('path', {
        d:
          'M416 64H96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm4 348c0 4.4-3.6 8-8 8H100c-4.4 0-8-3.6-8-8V100c0-4.4 3.6-8 8-8h312c4.4 0 8 3.6 8 8v312z',
      }),
      n.createElement('path', {
        d:
          'M363.6 192.9L346 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z',
      })
    );
  }),
  Ee = n.memo(function() {
    return n.createElement(
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
      n.createElement('path', {
        d:
          'M388 96H124c-15.4 0-28 12.6-28 28v264c0 15.4 12.6 28 28 28h264c15.4 0 28-12.6 28-28V124c0-15.4-12.6-28-28-28zm0 284c0 4.4-3.6 8-8 8H132c-4.4 0-8-3.6-8-8V132c0-4.4 3.6-8 8-8h248c4.4 0 8 3.6 8 8v248z',
      })
    );
  }),
  Se = ''.concat('napper-todolist', '-header'),
  Oe = r.createUseStyles({
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
  xe = n.memo(function(e) {
    var t = e.createHandler,
      o = e.parentId,
      a = e.showCounter,
      c = e.showProgress,
      i = e.tasks,
      s = e.title,
      l = r.useTheme(),
      u = Oe({ theme: l });
    return n.createElement(
      'div',
      { className: ''.concat(Se, ' ').concat(u.container) },
      n.createElement(
        'div',
        { className: ''.concat(Se, '-wrp ').concat(u.wrp) },
        t &&
          n.createElement(
            'button',
            {
              type: 'button',
              onClick: function() {
                return t(o);
              },
            },
            n.createElement(ve, null)
          ),
        s &&
          n.createElement(
            'span',
            { className: ''.concat(Se, '-tit ').concat(u.tit) },
            s
          ),
        a && n.createElement(fe, { tasks: i })
      ),
      c &&
        n.createElement(
          'div',
          { className: ''.concat(Se, '-btm ').concat(u.btm) },
          n.createElement(me, { tasks: i })
        )
    );
  });
xe.defaultProps = { createHandler: null, parentId: null };
var ke = ''.concat('napper-todolist', '-task'),
  Ce = r.createUseStyles({
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
  je = function(e) {
    var o = e.Icons,
      a = e.checked,
      c = e.id,
      i = e.label,
      s = e.onChange,
      l = e.onDelete,
      u = r.useTheme(),
      f = Ce({ theme: u }),
      p = ae(t.useState(!1), 2),
      d = p[0],
      m = p[1],
      y = d && l;
    return n.createElement(
      'div',
      {
        className: ''.concat(ke, ' ').concat(f.task),
        'data-id': 'napper-todolist-task-'.concat(c),
        onMouseEnter: function() {
          return m(!0);
        },
        onMouseLeave: function() {
          return m(!1);
        },
      },
      n.createElement(
        'button',
        {
          className: ''.concat(ke, '-btn ').concat(f.btn),
          type: 'button',
          onClick: function() {
            return s(c, !a);
          },
        },
        n.createElement(
          'div',
          { className: ''.concat(ke, '-ckb ').concat(f.ckb) },
          a && o.Checked,
          !a && o.Unchecked
        ),
        n.createElement(
          'div',
          { className: ''.concat(ke, '-lbl ').concat(f.lbl) },
          n.createElement('span', null, i)
        )
      ),
      y &&
        n.createElement(
          'button',
          {
            className: ''.concat(ke, '-dlt ').concat(f.dlt),
            type: 'button',
            onClick: function() {
              return l(c);
            },
          },
          n.createElement(ge, null)
        )
    );
  };
je.defaultProps = {
  Icons: {
    Checked: n.createElement(we, null),
    Unchecked: n.createElement(Ee, null),
  },
};
var Pe = ''.concat('napper-todolist', '-tasks'),
  Ne = r.createUseStyles({
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
  Te = function(e) {
    var t = e.onChange,
      r = e.onDelete,
      o = e.render,
      a = e.tasks,
      c = Ne();
    return n.createElement(
      'div',
      { className: ''.concat(Pe, ' ').concat(c.container) },
      n.createElement(
        'div',
        { className: ''.concat(Pe, '-wrp ').concat(c.wrp) },
        a.map(function(e) {
          return o(e, t, r);
        })
      )
    );
  };
Te.defaultProps = {
  render: n.memo(function(e, t, r) {
    return n.createElement(je, {
      key: e.id,
      checked: e.checked,
      id: e.id,
      label: e.label,
      onChange: t,
      onDelete: r,
    });
  }),
};
var Ie = ''.concat('napper-todolist', '-container'),
  $e = r.createUseStyles({
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
  Re = n.memo(function(e) {
    var t,
      r = e.completedAtBottom,
      o = e.counterPosition,
      a = e.id,
      c = e.onChange,
      i = e.onCreateClick,
      s = e.onDelete,
      l = e.onToggleAll,
      u = e.order,
      f = e.orderBy,
      p = e.showCompleted,
      d = e.showCounter,
      m = e.showProgress,
      y = e.tasks,
      h = e.title,
      b = $e(),
      v = (function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function(e) {
          return t.reduceRight(function(e, t) {
            return t(e);
          }, e);
        };
      })(
        (!p && oe) || K,
        (r && re) || K,
        (u &&
          (function(e, t) {
            return function(n) {
              var r = ne(n);
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
          K
      )(y),
      g = (function(e) {
        return (
          e.filter(function(e) {
            return e.checked;
          }).length >= e.length
        );
      })(y),
      w = ((t = o), d && ('top' === t || 'both' === t)),
      E = (function(e, t) {
        return t && ('top' === e || 'both' === e);
      })(o, m),
      S = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, d),
      O = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, m),
      x = {};
    return (
      a && (x.id = a),
      n.createElement(
        'div',
        Object.assign({}, x, {
          className: ''.concat(Ie, ' ').concat(b.container),
        }),
        n.createElement(
          'div',
          { className: ''.concat(Ie, '-wrp ').concat(b.wrp) },
          n.createElement(xe, {
            parentId: a,
            showCounter: w,
            createHandler: i || null,
            showProgress: E,
            tasks: y,
            title: h,
          }),
          l && n.createElement(se, { allChecked: g, onChange: l }),
          n.createElement(Te, { tasks: v, onChange: c, onDelete: s }),
          n.createElement(be, { showCounter: S, showProgress: O, tasks: y })
        )
      )
    );
  });
Re.defaultProps = {
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
var Me = ''.concat('napper-todolist', '-'),
  ze = function(e) {
    var t = e.jssMinifyId,
      s = e.theme,
      l = c(e, ['jssMinifyId', 'theme']),
      u = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function(t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      })({}, i, {}, s);
    return n.createElement(
      r.JssProvider,
      { classNamePrefix: Me, id: { minify: t }, jss: r.jss },
      n.createElement(r.ThemeProvider, { theme: u }, n.createElement(Re, l))
    );
  };
(ze.defaultProps = { jssMinifyId: !0, theme: {} }), (module.exports = ze);
