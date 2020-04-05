'use strict';
function e(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
var t = require('react'),
  n = e(t),
  r = require('react-jss'),
  o = e(require('prop-types'));
function c(e, t, n) {
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
function i(e, t) {
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
var l = {
    backgroundHover: 'rgba(0, 0, 0, 0.15)',
    color: '#000000',
    progressRadius: 2,
    progressSize: 5,
    taskRadius: 4,
    titleFontSize: 20,
  },
  s =
    (o.oneOf(['top', 'bottom', 'both']),
    o.shape({
      color: o.string,
      progressRadius: o.oneOfType([o.number, o.string]),
      progressSize: o.oneOfType([o.number, o.string]),
      titleFontSize: o.oneOfType([o.number, o.string]),
    }),
    o.oneOfType([o.string, o.bool]),
    o.shape({ Checked: o.node.isRequired, Unchecked: o.node.isRequired }),
    o.shape({
      checked: o.bool.isRequired,
      id: o.oneOfType([o.string, o.bool]).isRequired,
      label: o.string.isRequired,
    })),
  u =
    (o.arrayOf(s),
    function(e) {
      return e;
    });
function m(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function d(e, t) {
  if (e) {
    if ('string' == typeof e) return m(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(n)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? m(e, t)
        : void 0
    );
  }
}
function f(e) {
  return (
    (function(e) {
      if (Array.isArray(e)) return m(e);
    })(e) ||
    (function(e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    d(e) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var h = function(e) {
    var t = e.filter(function(e) {
        return e.checked;
      }),
      n = e.filter(function(e) {
        return !e.checked;
      });
    return [].concat(f(n), f(t));
  },
  p = function(e) {
    return e.filter(function(e) {
      return !e.checked;
    });
  };
function b(e, t) {
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
    d(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
var g = ''.concat('napper-todolist', '-checker'),
  v = r.createUseStyles({
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
  y = function(e) {
    var o = e.allChecked,
      c = e.onChange,
      a = r.useTheme(),
      i = v({ theme: a }),
      l = b(t.useState(!1), 2),
      s = l[0],
      u = l[1];
    return (
      t.useEffect(
        function() {
          o !== s && u(o);
        },
        [o, s]
      ),
      n.createElement(
        'div',
        { className: ''.concat(g, ' ').concat(i.container) },
        n.createElement(
          'button',
          {
            className: ''.concat(g, '-btn ').concat(i.btn),
            type: 'button',
            onClick: function() {
              var e = !s;
              u(e), c(e);
            },
          },
          n.createElement(
            'div',
            { className: ''.concat(g, '-lbl ').concat(i.lbl) },
            !s && n.createElement('span', null, 'Check all'),
            s && n.createElement('span', null, 'Uncheck all')
          )
        )
      )
    );
  },
  w = ''.concat('napper-todolist', '-counter'),
  k = r.createUseStyles({
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
  E = n.memo(function(e) {
    var t = e.tasks,
      o = r.useTheme(),
      c = k({ theme: o }),
      a = (t && t.length) || 0,
      i =
        (t &&
          t.filter(function(e) {
            return e.checked;
          }).length) ||
        0;
    return n.createElement(
      'div',
      { className: ''.concat(w, ' ').concat(c.container) },
      n.createElement('span', { className: ''.concat(w, '-cpt') }, i),
      n.createElement('span', { className: ''.concat(w, '-spl') }, '/'),
      n.createElement('span', { className: ''.concat(w, '-ttl') }, a)
    );
  }),
  x = ''.concat('napper-todolist', '-progress'),
  C = r.createUseStyles({
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
  S = n.memo(function(e) {
    var t = e.tasks,
      o = r.useTheme(),
      c = C({ theme: o }),
      a = (t && t.length) || 0,
      i =
        (100 *
          ((t &&
            t.filter(function(e) {
              return e.checked;
            }).length) ||
            0)) /
        a,
      l = i > 0 ? '0 2px 2px 0' : 2;
    return n.createElement(
      'div',
      { className: ''.concat(x, ' ').concat(c.container) },
      n.createElement(
        'div',
        { className: ''.concat(x, '-bar ').concat(c.bar) },
        n.createElement('div', {
          className: ''.concat(x, '-trk ').concat(c.trk),
          style: { borderRadius: l, left: ''.concat(i, '%') },
        }),
        n.createElement('div', {
          className: ''.concat(x, '-tmb ').concat(c.tmb),
          style: { width: ''.concat(i, '%') },
        })
      )
    );
  });
S.defaultProps = {};
var O = ''.concat('napper-todolist', '-footer'),
  j = r.createUseStyles({
    container: { display: 'flex', flex: '0 1', paddingTop: 12 },
    wrp: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  }),
  N = n.memo(function(e) {
    var t = e.showCounter,
      r = e.showProgress,
      o = e.tasks,
      c = j();
    return n.createElement(
      'div',
      { className: ''.concat(O, ' ').concat(c.container) },
      n.createElement(
        'div',
        { className: ''.concat(O, '-wrp ').concat(c.wrp) },
        r && n.createElement(S, { tasks: o }),
        t && n.createElement(E, { tasks: o })
      )
    );
  }),
  z = n.memo(function() {
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
  P = n.memo(function() {
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
  I = n.memo(function() {
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
  T = n.memo(function() {
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
  H = ''.concat('napper-todolist', '-header'),
  D = r.createUseStyles({
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
  R = n.memo(function(e) {
    var t = e.createHandler,
      o = e.parentId,
      c = e.showCounter,
      a = e.showProgress,
      i = e.tasks,
      l = e.title,
      s = r.useTheme(),
      u = D({ theme: s });
    return n.createElement(
      'div',
      { className: ''.concat(H, ' ').concat(u.container) },
      n.createElement(
        'div',
        { className: ''.concat(H, '-wrp ').concat(u.wrp) },
        t &&
          n.createElement(
            'button',
            {
              type: 'button',
              onClick: function() {
                return t(o);
              },
            },
            n.createElement(z, null)
          ),
        l &&
          n.createElement(
            'span',
            { className: ''.concat(H, '-tit ').concat(u.tit) },
            l
          ),
        c && n.createElement(E, { tasks: i })
      ),
      a &&
        n.createElement(
          'div',
          { className: ''.concat(H, '-btm ').concat(u.btm) },
          n.createElement(S, { tasks: i })
        )
    );
  });
R.defaultProps = { createHandler: null, parentId: null };
var A = ''.concat('napper-todolist', '-task'),
  M = r.createUseStyles({
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
  U = function(e) {
    var o = e.Icons,
      c = e.checked,
      a = e.id,
      i = e.label,
      l = e.onChange,
      s = e.onDelete,
      u = r.useTheme(),
      m = M({ theme: u }),
      d = b(t.useState(!1), 2),
      f = d[0],
      h = d[1],
      p = f && s;
    return n.createElement(
      'div',
      {
        className: ''.concat(A, ' ').concat(m.task),
        'data-id': 'napper-todolist-task-'.concat(a),
        onMouseEnter: function() {
          return h(!0);
        },
        onMouseLeave: function() {
          return h(!1);
        },
      },
      n.createElement(
        'button',
        {
          className: ''.concat(A, '-btn ').concat(m.btn),
          type: 'button',
          onClick: function() {
            return l(a, !c);
          },
        },
        n.createElement(
          'div',
          { className: ''.concat(A, '-ckb ').concat(m.ckb) },
          c && o.Checked,
          !c && o.Unchecked
        ),
        n.createElement(
          'div',
          { className: ''.concat(A, '-lbl ').concat(m.lbl) },
          n.createElement('span', null, i)
        )
      ),
      p &&
        n.createElement(
          'button',
          {
            className: ''.concat(A, '-dlt ').concat(m.dlt),
            type: 'button',
            onClick: function() {
              return s(a);
            },
          },
          n.createElement(P, null)
        )
    );
  };
U.defaultProps = {
  Icons: {
    Checked: n.createElement(I, null),
    Unchecked: n.createElement(T, null),
  },
};
var B = ''.concat('napper-todolist', '-tasks'),
  L = r.createUseStyles({
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
  W = function(e) {
    var t = e.onChange,
      r = e.onDelete,
      o = e.render,
      c = e.tasks,
      a = L();
    return n.createElement(
      'div',
      { className: ''.concat(B, ' ').concat(a.container) },
      n.createElement(
        'div',
        { className: ''.concat(B, '-wrp ').concat(a.wrp) },
        c.map(function(e) {
          return o(e, t, r);
        })
      )
    );
  };
W.defaultProps = {
  render: n.memo(function(e, t, r) {
    return n.createElement(U, {
      key: e.id,
      checked: e.checked,
      id: e.id,
      label: e.label,
      onChange: t,
      onDelete: r,
    });
  }),
};
var q = ''.concat('napper-todolist', '-container'),
  V = r.createUseStyles({
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
  J = n.memo(function(e) {
    var t,
      r = e.completedAtBottom,
      o = e.counterPosition,
      c = e.id,
      a = e.onChange,
      i = e.onCreateClick,
      l = e.onDelete,
      s = e.onToggleAll,
      m = e.order,
      d = e.orderBy,
      b = e.showCompleted,
      g = e.showCounter,
      v = e.showProgress,
      w = e.tasks,
      k = e.title,
      E = V(),
      x = (function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function(e) {
          return t.reduceRight(function(e, t) {
            return t(e);
          }, e);
        };
      })(
        (!b && p) || u,
        (r && h) || u,
        (m &&
          (function(e, t) {
            return function(n) {
              var r = f(n);
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
          })(d, m)) ||
          u
      )(w),
      C = (function(e) {
        return (
          e.filter(function(e) {
            return e.checked;
          }).length >= e.length
        );
      })(w),
      S = ((t = o), g && ('top' === t || 'both' === t)),
      O = (function(e, t) {
        return t && ('top' === e || 'both' === e);
      })(o, v),
      j = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, g),
      z = (function(e, t) {
        return t && ('bottom' === e || 'both' === e);
      })(o, v),
      P = {};
    return (
      c && (P.id = c),
      n.createElement(
        'div',
        Object.assign({}, P, {
          className: ''.concat(q, ' ').concat(E.container),
        }),
        n.createElement(
          'div',
          { className: ''.concat(q, '-wrp ').concat(E.wrp) },
          n.createElement(R, {
            parentId: c,
            showCounter: S,
            createHandler: i || null,
            showProgress: O,
            tasks: w,
            title: k,
          }),
          s && n.createElement(y, { allChecked: C, onChange: s }),
          n.createElement(W, { tasks: x, onChange: a, onDelete: l }),
          n.createElement(N, { showCounter: j, showProgress: z, tasks: w })
        )
      )
    );
  });
J.defaultProps = {
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
var X = ''.concat('napper-todolist', '-'),
  F = function(e) {
    var t = e.jssMinifyId,
      o = e.theme,
      s = i(e, ['jssMinifyId', 'theme']),
      u = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function(t) {
                c(e, t, n[t]);
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
      })({}, l, {}, o);
    return n.createElement(
      r.JssProvider,
      { classNamePrefix: X, id: { minify: t }, jss: r.jss },
      n.createElement(r.ThemeProvider, { theme: u }, n.createElement(J, s))
    );
  };
(F.defaultProps = { jssMinifyId: !0, theme: {} }), (module.exports = F);
