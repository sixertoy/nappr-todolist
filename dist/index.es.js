import e, { useState as t, useEffect as n } from 'react';
import {
  createUseStyles as r,
  useTheme as o,
  JssProvider as c,
  jss as a,
  ThemeProvider as i,
} from 'react-jss';
import l from 'prop-types';
function s(e, t, n) {
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
function u(e, t) {
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
function m(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = (function(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        c = Object.keys(e);
      for (r = 0; r < c.length; r++)
        (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (r = 0; r < c.length; r++)
      (n = c[r]),
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
var d = {
    backgroundHover: 'rgba(0, 0, 0, 0.15)',
    color: '#000000',
    progressRadius: 2,
    progressSize: 5,
    taskRadius: 4,
    titleFontSize: 20,
  },
  f =
    (l.oneOf(['top', 'bottom', 'both']),
    l.shape({
      color: l.string,
      progressRadius: l.oneOfType([l.number, l.string]),
      progressSize: l.oneOfType([l.number, l.string]),
      titleFontSize: l.oneOfType([l.number, l.string]),
    }),
    l.oneOfType([l.string, l.bool]),
    l.shape({ Checked: l.node.isRequired, Unchecked: l.node.isRequired }),
    l.shape({
      checked: l.bool.isRequired,
      id: l.oneOfType([l.string, l.bool]).isRequired,
      label: l.string.isRequired,
    })),
  p =
    (l.arrayOf(f),
    function(e) {
      return e;
    });
function h(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function b(e, t) {
  if (e) {
    if ('string' == typeof e) return h(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(n)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? h(e, t)
        : void 0
    );
  }
}
function g(e) {
  return (
    (function(e) {
      if (Array.isArray(e)) return h(e);
    })(e) ||
    (function(e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    b(e) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var v = function(e) {
    var t = e.filter(function(e) {
        return e.checked;
      }),
      n = e.filter(function(e) {
        return !e.checked;
      });
    return [].concat(g(n), g(t));
  },
  y = function(e) {
    return e.filter(function(e) {
      return !e.checked;
    });
  };
function w(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
          r = !0,
          o = !1,
          c = void 0;
        try {
          for (
            var a, i = e[Symbol.iterator]();
            !(r = (a = i.next()).done) &&
            (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          (o = !0), (c = e);
        } finally {
          try {
            r || null == i.return || i.return();
          } finally {
            if (o) throw c;
          }
        }
        return n;
      }
    })(e, t) ||
    b(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var k = ''.concat('napper-todolist', '-checker'),
  E = r({
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
  x = function(r) {
    var c = r.allChecked,
      a = r.onChange,
      i = o(),
      l = E({ theme: i }),
      s = w(t(!1), 2),
      u = s[0],
      m = s[1];
    return (
      n(
        function() {
          c !== u && m(c);
        },
        [c, u]
      ),
      e.createElement(
        'div',
        { className: ''.concat(k, ' ').concat(l.container) },
        e.createElement(
          'button',
          {
            className: ''.concat(k, '-btn ').concat(l.btn),
            type: 'button',
            onClick: function() {
              var e = !u;
              m(e), a(e);
            },
          },
          e.createElement(
            'div',
            { className: ''.concat(k, '-lbl ').concat(l.lbl) },
            !u && e.createElement('span', null, 'Check all'),
            u && e.createElement('span', null, 'Uncheck all')
          )
        )
      )
    );
  },
  C = ''.concat('napper-todolist', '-counter'),
  O = r({
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
  j = e.memo(function(t) {
    var n = t.tasks,
      r = o(),
      c = O({ theme: r }),
      a = (n && n.length) || 0,
      i =
        (n &&
          n.filter(function(e) {
            return e.checked;
          }).length) ||
        0;
    return e.createElement(
      'div',
      { className: ''.concat(C, ' ').concat(c.container) },
      e.createElement('span', { className: ''.concat(C, '-cpt') }, i),
      e.createElement('span', { className: ''.concat(C, '-spl') }, '/'),
      e.createElement('span', { className: ''.concat(C, '-ttl') }, a)
    );
  }),
  S = ''.concat('napper-todolist', '-progress'),
  N = r({
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
  z = e.memo(function(t) {
    var n = t.tasks,
      r = o(),
      c = N({ theme: r }),
      a = (n && n.length) || 0,
      i =
        (100 *
          ((n &&
            n.filter(function(e) {
              return e.checked;
            }).length) ||
            0)) /
        a,
      l = i > 0 ? '0 2px 2px 0' : 2;
    return e.createElement(
      'div',
      { className: ''.concat(S, ' ').concat(c.container) },
      e.createElement(
        'div',
        { className: ''.concat(S, '-bar ').concat(c.bar) },
        e.createElement('div', {
          className: ''.concat(S, '-trk ').concat(c.trk),
          style: { borderRadius: l, left: ''.concat(i, '%') },
        }),
        e.createElement('div', {
          className: ''.concat(S, '-tmb ').concat(c.tmb),
          style: { width: ''.concat(i, '%') },
        })
      )
    );
  });
z.defaultProps = {};
var P = ''.concat('napper-todolist', '-footer'),
  I = r({
    container: { display: 'flex', flex: '0 1', paddingTop: 12 },
    wrp: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  }),
  H = e.memo(function(t) {
    var n = t.showCounter,
      r = t.showProgress,
      o = t.tasks,
      c = I();
    return e.createElement(
      'div',
      { className: ''.concat(P, ' ').concat(c.container) },
      e.createElement(
        'div',
        { className: ''.concat(P, '-wrp ').concat(c.wrp) },
        r && e.createElement(z, { tasks: o }),
        n && e.createElement(j, { tasks: o })
      )
    );
  }),
  D = e.memo(function() {
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
  R = e.memo(function() {
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
  T = e.memo(function() {
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
  A = e.memo(function() {
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
  M = ''.concat('napper-todolist', '-header'),
  B = r({
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
  L = e.memo(function(t) {
    var n = t.createHandler,
      r = t.parentId,
      c = t.showCounter,
      a = t.showProgress,
      i = t.tasks,
      l = t.title,
      s = o(),
      u = B({ theme: s });
    return e.createElement(
      'div',
      { className: ''.concat(M, ' ').concat(u.container) },
      e.createElement(
        'div',
        { className: ''.concat(M, '-wrp ').concat(u.wrp) },
        n &&
          e.createElement(
            'button',
            {
              type: 'button',
              onClick: function() {
                return n(r);
              },
            },
            e.createElement(D, null)
          ),
        l &&
          e.createElement(
            'span',
            { className: ''.concat(M, '-tit ').concat(u.tit) },
            l
          ),
        c && e.createElement(j, { tasks: i })
      ),
      a &&
        e.createElement(
          'div',
          { className: ''.concat(M, '-btm ').concat(u.btm) },
          e.createElement(z, { tasks: i })
        )
    );
  });
L.defaultProps = { createHandler: null, parentId: null };
var W = ''.concat('napper-todolist', '-task'),
  V = r({
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
  U = function(n) {
    var r = n.Icons,
      c = n.checked,
      a = n.id,
      i = n.label,
      l = n.onChange,
      s = n.onDelete,
      u = o(),
      m = V({ theme: u }),
      d = w(t(!1), 2),
      f = d[0],
      p = d[1],
      h = f && s;
    return e.createElement(
      'div',
      {
        className: ''.concat(W, ' ').concat(m.task),
        'data-id': 'napper-todolist-task-'.concat(a),
        onMouseEnter: function() {
          return p(!0);
        },
        onMouseLeave: function() {
          return p(!1);
        },
      },
      e.createElement(
        'button',
        {
          className: ''.concat(W, '-btn ').concat(m.btn),
          type: 'button',
          onClick: function() {
            return l(a, !c);
          },
        },
        e.createElement(
          'div',
          { className: ''.concat(W, '-ckb ').concat(m.ckb) },
          c && r.Checked,
          !c && r.Unchecked
        ),
        e.createElement(
          'div',
          { className: ''.concat(W, '-lbl ').concat(m.lbl) },
          e.createElement('span', null, i)
        )
      ),
      h &&
        e.createElement(
          'button',
          {
            className: ''.concat(W, '-dlt ').concat(m.dlt),
            type: 'button',
            onClick: function() {
              return s(a);
            },
          },
          e.createElement(R, null)
        )
    );
  };
U.defaultProps = {
  Icons: {
    Checked: e.createElement(T, null),
    Unchecked: e.createElement(A, null),
  },
};
var q = ''.concat('napper-todolist', '-tasks'),
  J = r({
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
  X = function(t) {
    var n = t.onChange,
      r = t.onDelete,
      o = t.render,
      c = t.tasks,
      a = J();
    return e.createElement(
      'div',
      { className: ''.concat(q, ' ').concat(a.container) },
      e.createElement(
        'div',
        { className: ''.concat(q, '-wrp ').concat(a.wrp) },
        c.map(function(e) {
          return o(e, n, r);
        })
      )
    );
  };
X.defaultProps = {
  render: e.memo(function(t, n, r) {
    return e.createElement(U, {
      key: t.id,
      checked: t.checked,
      id: t.id,
      label: t.label,
      onChange: n,
      onDelete: r,
    });
  }),
};
var F = ''.concat('napper-todolist', '-container'),
  Y = r({
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
  Z = e.memo(function(t) {
    var n,
      r = t.completedAtBottom,
      o = t.counterPosition,
      c = t.id,
      a = t.onChange,
      i = t.onCreateClick,
      l = t.onDelete,
      s = t.onToggleAll,
      u = t.order,
      m = t.orderBy,
      d = t.showCompleted,
      f = t.showCounter,
      h = t.showProgress,
      b = t.tasks,
      w = t.title,
      k = Y(),
      E = (function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function(e) {
          return t.reduceRight(function(e, t) {
            return t(e);
          }, e);
        };
      })(
        (!d && y) || p,
        (r && v) || p,
        (u &&
          (function(e, t) {
            return function(n) {
              var r = g(n);
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
          })(m, u)) ||
          p
      )(b),
      C = (function(e) {
        return (
          e.filter(function(e) {
            return e.checked;
          }).length >= e.length
        );
      })(b),
      O = ((n = o), f && ('top' === n || 'both' === n)),
      j = (function(e, t) {
        return t && ('top' === e || 'both' === e);
      })(o, h),
      S = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, f),
      N = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, h),
      z = {};
    return (
      c && (z.id = c),
      e.createElement(
        'div',
        Object.assign({}, z, {
          className: ''.concat(F, ' ').concat(k.container),
        }),
        e.createElement(
          'div',
          { className: ''.concat(F, '-wrp ').concat(k.wrp) },
          e.createElement(L, {
            parentId: c,
            showCounter: O,
            createHandler: i || null,
            showProgress: j,
            tasks: b,
            title: w,
          }),
          s && e.createElement(x, { allChecked: C, onChange: s }),
          e.createElement(X, { tasks: E, onChange: a, onDelete: l }),
          e.createElement(H, { showCounter: S, showProgress: N, tasks: b })
        )
      )
    );
  });
Z.defaultProps = {
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
var G = ''.concat('napper-todolist', '-'),
  Q = function(t) {
    var n = t.jssMinifyId,
      r = t.theme,
      o = m(t, ['jssMinifyId', 'theme']),
      l = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function(t) {
                s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      })({}, d, {}, r);
    return e.createElement(
      c,
      { classNamePrefix: G, id: { minify: n }, jss: a },
      e.createElement(i, { theme: l }, e.createElement(Z, o))
    );
  };
Q.defaultProps = { jssMinifyId: !0, theme: {} };
export default Q;
