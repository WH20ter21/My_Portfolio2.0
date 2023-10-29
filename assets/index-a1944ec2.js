(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver((i) => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const o = {};
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : i.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o);
    }
})();
function Cm(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var zf = { exports: {} },
    jo = {},
    Bf = { exports: {} },
    F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
    Tm = Symbol.for("react.portal"),
    Em = Symbol.for("react.fragment"),
    Lm = Symbol.for("react.strict_mode"),
    Vm = Symbol.for("react.profiler"),
    jm = Symbol.for("react.provider"),
    Mm = Symbol.for("react.context"),
    Am = Symbol.for("react.forward_ref"),
    Dm = Symbol.for("react.suspense"),
    Rm = Symbol.for("react.memo"),
    Nm = Symbol.for("react.lazy"),
    mu = Symbol.iterator;
function _m(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (mu && e[mu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Uf = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Hf = Object.assign,
    Wf = {};
function tr(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Wf),
        (this.updater = n || Uf);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $f() {}
$f.prototype = tr.prototype;
function Jl(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Wf),
        (this.updater = n || Uf);
}
var ql = (Jl.prototype = new $f());
ql.constructor = Jl;
Hf(ql, tr.prototype);
ql.isPureReactComponent = !0;
var gu = Array.isArray,
    Gf = Object.prototype.hasOwnProperty,
    bl = { current: null },
    Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qf(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
            Gf.call(t, r) && !Kf.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        i.children = a;
    }
    if (e && e.defaultProps)
        for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: ni,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: bl.current,
    };
}
function Om(e, t) {
    return {
        $$typeof: ni,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function ea(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function Fm(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var yu = /\/+/g;
function is(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Fm("" + e.key)
        : t.toString(36);
}
function _i(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (o) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case ni:
                    case Tm:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (i = i(s)),
            (e = r === "" ? "." + is(s, 0) : r),
            gu(i)
                ? ((n = ""),
                  e != null && (n = e.replace(yu, "$&/") + "/"),
                  _i(i, t, n, "", function (u) {
                      return u;
                  }))
                : i != null &&
                  (ea(i) &&
                      (i = Om(
                          i,
                          n +
                              (!i.key || (s && s.key === i.key)
                                  ? ""
                                  : ("" + i.key).replace(yu, "$&/") + "/") +
                              e
                      )),
                  t.push(i)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), gu(e)))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + is(o, l);
            s += _i(o, t, n, a, i);
        }
    else if (((a = _m(e)), typeof a == "function"))
        for (e = a.call(e), l = 0; !(o = e.next()).done; )
            (o = o.value), (a = r + is(o, l++)), (s += _i(o, t, n, a, i));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function di(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        _i(e, r, "", "", function (o) {
            return t.call(n, o, i++);
        }),
        r
    );
}
function Im(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var we = { current: null },
    Oi = { transition: null },
    zm = {
        ReactCurrentDispatcher: we,
        ReactCurrentBatchConfig: Oi,
        ReactCurrentOwner: bl,
    };
F.Children = {
    map: di,
    forEach: function (e, t, n) {
        di(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            di(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            di(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!ea(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
F.Component = tr;
F.Fragment = Em;
F.Profiler = Vm;
F.PureComponent = Jl;
F.StrictMode = Lm;
F.Suspense = Dm;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zm;
F.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Hf({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (s = bl.current)),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var l = e.type.defaultProps;
        for (a in t)
            Gf.call(t, a) &&
                !Kf.hasOwnProperty(a) &&
                (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l;
    }
    return { $$typeof: ni, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
    return (
        (e = {
            $$typeof: Mm,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: jm, _context: e }),
        (e.Consumer = e)
    );
};
F.createElement = Qf;
F.createFactory = function (e) {
    var t = Qf.bind(null, e);
    return (t.type = e), t;
};
F.createRef = function () {
    return { current: null };
};
F.forwardRef = function (e) {
    return { $$typeof: Am, render: e };
};
F.isValidElement = ea;
F.lazy = function (e) {
    return { $$typeof: Nm, _payload: { _status: -1, _result: e }, _init: Im };
};
F.memo = function (e, t) {
    return { $$typeof: Rm, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
    var t = Oi.transition;
    Oi.transition = {};
    try {
        e();
    } finally {
        Oi.transition = t;
    }
};
F.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
    return we.current.useCallback(e, t);
};
F.useContext = function (e) {
    return we.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
    return we.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
    return we.current.useEffect(e, t);
};
F.useId = function () {
    return we.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
    return we.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
    return we.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
    return we.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
    return we.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
    return we.current.useReducer(e, t, n);
};
F.useRef = function (e) {
    return we.current.useRef(e);
};
F.useState = function (e) {
    return we.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
    return we.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
    return we.current.useTransition();
};
F.version = "18.2.0";
Bf.exports = F;
var j = Bf.exports;
const ta = Cm(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm = j,
    Um = Symbol.for("react.element"),
    Hm = Symbol.for("react.fragment"),
    Wm = Object.prototype.hasOwnProperty,
    $m =
        Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yf(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t) Wm.call(t, r) && !Gm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Um,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: $m.current,
    };
}
jo.Fragment = Hm;
jo.jsx = Yf;
jo.jsxs = Yf;
zf.exports = jo;
var v = zf.exports,
    Ws = {},
    Xf = { exports: {} },
    _e = {},
    Zf = { exports: {} },
    Jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(L, _) {
        var O = L.length;
        L.push(_);
        e: for (; 0 < O; ) {
            var R = (O - 1) >>> 1,
                $ = L[R];
            if (0 < i($, _)) (L[R] = _), (L[O] = $), (O = R);
            else break e;
        }
    }
    function n(L) {
        return L.length === 0 ? null : L[0];
    }
    function r(L) {
        if (L.length === 0) return null;
        var _ = L[0],
            O = L.pop();
        if (O !== _) {
            L[0] = O;
            e: for (var R = 0, $ = L.length, Jt = $ >>> 1; R < Jt; ) {
                var tt = 2 * (R + 1) - 1,
                    Sn = L[tt],
                    je = tt + 1,
                    qt = L[je];
                if (0 > i(Sn, O))
                    je < $ && 0 > i(qt, Sn)
                        ? ((L[R] = qt), (L[je] = O), (R = je))
                        : ((L[R] = Sn), (L[tt] = O), (R = tt));
                else if (je < $ && 0 > i(qt, O))
                    (L[R] = qt), (L[je] = O), (R = je);
                else break e;
            }
        }
        return _;
    }
    function i(L, _) {
        var O = L.sortIndex - _.sortIndex;
        return O !== 0 ? O : L.id - _.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function () {
            return s.now() - l;
        };
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        m = !1,
        y = !1,
        x = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(L) {
        for (var _ = n(u); _ !== null; ) {
            if (_.callback === null) r(u);
            else if (_.startTime <= L)
                r(u), (_.sortIndex = _.expirationTime), t(a, _);
            else break;
            _ = n(u);
        }
    }
    function w(L) {
        if (((x = !1), p(L), !y))
            if (n(a) !== null) (y = !0), Fe(S);
            else {
                var _ = n(u);
                _ !== null && et(w, _.startTime - L);
            }
    }
    function S(L, _) {
        (y = !1), x && ((x = !1), g(P), (P = -1)), (m = !0);
        var O = d;
        try {
            for (
                p(_), f = n(a);
                f !== null && (!(f.expirationTime > _) || (L && !q()));

            ) {
                var R = f.callback;
                if (typeof R == "function") {
                    (f.callback = null), (d = f.priorityLevel);
                    var $ = R(f.expirationTime <= _);
                    (_ = e.unstable_now()),
                        typeof $ == "function"
                            ? (f.callback = $)
                            : f === n(a) && r(a),
                        p(_);
                } else r(a);
                f = n(a);
            }
            if (f !== null) var Jt = !0;
            else {
                var tt = n(u);
                tt !== null && et(w, tt.startTime - _), (Jt = !1);
            }
            return Jt;
        } finally {
            (f = null), (d = O), (m = !1);
        }
    }
    var T = !1,
        C = null,
        P = -1,
        N = 5,
        D = -1;
    function q() {
        return !(e.unstable_now() - D < N);
    }
    function ke() {
        if (C !== null) {
            var L = e.unstable_now();
            D = L;
            var _ = !0;
            try {
                _ = C(!0, L);
            } finally {
                _ ? Pe() : ((T = !1), (C = null));
            }
        } else T = !1;
    }
    var Pe;
    if (typeof h == "function")
        Pe = function () {
            h(ke);
        };
    else if (typeof MessageChannel < "u") {
        var b = new MessageChannel(),
            ee = b.port2;
        (b.port1.onmessage = ke),
            (Pe = function () {
                ee.postMessage(null);
            });
    } else
        Pe = function () {
            E(ke, 0);
        };
    function Fe(L) {
        (C = L), T || ((T = !0), Pe());
    }
    function et(L, _) {
        P = E(function () {
            L(e.unstable_now());
        }, _);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (L) {
            L.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || m || ((y = !0), Fe(S));
        }),
        (e.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (N = 0 < L ? Math.floor(1e3 / L) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (e.unstable_next = function (L) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var _ = 3;
                    break;
                default:
                    _ = d;
            }
            var O = d;
            d = _;
            try {
                return L();
            } finally {
                d = O;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (L, _) {
            switch (L) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    L = 3;
            }
            var O = d;
            d = L;
            try {
                return _();
            } finally {
                d = O;
            }
        }),
        (e.unstable_scheduleCallback = function (L, _, O) {
            var R = e.unstable_now();
            switch (
                (typeof O == "object" && O !== null
                    ? ((O = O.delay),
                      (O = typeof O == "number" && 0 < O ? R + O : R))
                    : (O = R),
                L)
            ) {
                case 1:
                    var $ = -1;
                    break;
                case 2:
                    $ = 250;
                    break;
                case 5:
                    $ = 1073741823;
                    break;
                case 4:
                    $ = 1e4;
                    break;
                default:
                    $ = 5e3;
            }
            return (
                ($ = O + $),
                (L = {
                    id: c++,
                    callback: _,
                    priorityLevel: L,
                    startTime: O,
                    expirationTime: $,
                    sortIndex: -1,
                }),
                O > R
                    ? ((L.sortIndex = O),
                      t(u, L),
                      n(a) === null &&
                          L === n(u) &&
                          (x ? (g(P), (P = -1)) : (x = !0), et(w, O - R)))
                    : ((L.sortIndex = $), t(a, L), y || m || ((y = !0), Fe(S))),
                L
            );
        }),
        (e.unstable_shouldYield = q),
        (e.unstable_wrapCallback = function (L) {
            var _ = d;
            return function () {
                var O = d;
                d = _;
                try {
                    return L.apply(this, arguments);
                } finally {
                    d = O;
                }
            };
        });
})(Jf);
Zf.exports = Jf;
var Km = Zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qf = j,
    Re = Km;
function k(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var bf = new Set(),
    _r = {};
function yn(e, t) {
    Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
    for (_r[e] = t, e = 0; e < t.length; e++) bf.add(t[e]);
}
var vt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    $s = Object.prototype.hasOwnProperty,
    Qm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    vu = {},
    xu = {};
function Ym(e) {
    return $s.call(xu, e)
        ? !0
        : $s.call(vu, e)
        ? !1
        : Qm.test(e)
        ? (xu[e] = !0)
        : ((vu[e] = !0), !1);
}
function Xm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Zm(e, t, n, r) {
    if (t === null || typeof t > "u" || Xm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Se(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = s);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        fe[e] = new Se(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var na = /[\-:]([a-z])/g;
function ra(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(na, ra);
        fe[t] = new Se(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(na, ra);
        fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(na, ra);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ia(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null
        ? i.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Zm(t, n, i, r) && (n = null),
        r || i === null
            ? Ym(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    hi = Symbol.for("react.element"),
    Cn = Symbol.for("react.portal"),
    Tn = Symbol.for("react.fragment"),
    oa = Symbol.for("react.strict_mode"),
    Gs = Symbol.for("react.profiler"),
    ed = Symbol.for("react.provider"),
    td = Symbol.for("react.context"),
    sa = Symbol.for("react.forward_ref"),
    Ks = Symbol.for("react.suspense"),
    Qs = Symbol.for("react.suspense_list"),
    la = Symbol.for("react.memo"),
    Et = Symbol.for("react.lazy"),
    nd = Symbol.for("react.offscreen"),
    wu = Symbol.iterator;
function ir(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (wu && e[wu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var X = Object.assign,
    os;
function mr(e) {
    if (os === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            os = (t && t[1]) || "";
        }
    return (
        `
` +
        os +
        e
    );
}
var ss = !1;
function ls(e, t) {
    if (!e || ss) return "";
    ss = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var i = u.stack.split(`
`),
                    o = r.stack.split(`
`),
                    s = i.length - 1,
                    l = o.length - 1;
                1 <= s && 0 <= l && i[s] !== o[l];

            )
                l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if ((s--, l--, 0 > l || i[s] !== o[l])) {
                                var a =
                                    `
` + i[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        a.includes("<anonymous>") &&
                                        (a = a.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    a
                                );
                            }
                        while (1 <= s && 0 <= l);
                    break;
                }
        }
    } finally {
        (ss = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function Jm(e) {
    switch (e.tag) {
        case 5:
            return mr(e.type);
        case 16:
            return mr("Lazy");
        case 13:
            return mr("Suspense");
        case 19:
            return mr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ls(e.type, !1)), e;
        case 11:
            return (e = ls(e.type.render, !1)), e;
        case 1:
            return (e = ls(e.type, !0)), e;
        default:
            return "";
    }
}
function Ys(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Tn:
            return "Fragment";
        case Cn:
            return "Portal";
        case Gs:
            return "Profiler";
        case oa:
            return "StrictMode";
        case Ks:
            return "Suspense";
        case Qs:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case td:
                return (e.displayName || "Context") + ".Consumer";
            case ed:
                return (e._context.displayName || "Context") + ".Provider";
            case sa:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case la:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Ys(e.type) || "Memo"
                );
            case Et:
                (t = e._payload), (e = e._init);
                try {
                    return Ys(e(t));
                } catch {}
        }
    return null;
}
function qm(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ys(t);
        case 8:
            return t === oa ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Wt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function rd(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function bm(e) {
    var t = rd(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var i = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (r = "" + s), o.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function pi(e) {
    e._valueTracker || (e._valueTracker = bm(e));
}
function id(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = rd(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Ji(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Xs(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Su(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Wt(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function od(e, t) {
    (t = t.checked), t != null && ia(e, "checked", t, !1);
}
function Zs(e, t) {
    od(e, t);
    var n = Wt(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Js(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Js(e, t.type, Wt(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function ku(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Js(e, t, n) {
    (t !== "number" || Ji(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Bn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function qs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Pu(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(k(92));
            if (gr(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Wt(n) };
}
function sd(e, t) {
    var n = Wt(t.value),
        r = Wt(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Cu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function ld(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function bs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ld(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var mi,
    ad = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                mi = mi || document.createElement("div"),
                    mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = mi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Or(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var wr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    eg = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function (e) {
    eg.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
    });
});
function ud(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (wr.hasOwnProperty(e) && wr[e])
        ? ("" + t).trim()
        : t + "px";
}
function cd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = ud(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var tg = X(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function el(e, t) {
    if (t) {
        if (tg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(k(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62));
    }
}
function tl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var nl = null;
function aa(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var rl = null,
    Un = null,
    Hn = null;
function Tu(e) {
    if ((e = oi(e))) {
        if (typeof rl != "function") throw Error(k(280));
        var t = e.stateNode;
        t && ((t = No(t)), rl(e.stateNode, e.type, t));
    }
}
function fd(e) {
    Un ? (Hn ? Hn.push(e) : (Hn = [e])) : (Un = e);
}
function dd() {
    if (Un) {
        var e = Un,
            t = Hn;
        if (((Hn = Un = null), Tu(e), t))
            for (e = 0; e < t.length; e++) Tu(t[e]);
    }
}
function hd(e, t) {
    return e(t);
}
function pd() {}
var as = !1;
function md(e, t, n) {
    if (as) return e(t, n);
    as = !0;
    try {
        return hd(e, t, n);
    } finally {
        (as = !1), (Un !== null || Hn !== null) && (pd(), dd());
    }
}
function Fr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = No(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n;
}
var il = !1;
if (vt)
    try {
        var or = {};
        Object.defineProperty(or, "passive", {
            get: function () {
                il = !0;
            },
        }),
            window.addEventListener("test", or, or),
            window.removeEventListener("test", or, or);
    } catch {
        il = !1;
    }
function ng(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Sr = !1,
    qi = null,
    bi = !1,
    ol = null,
    rg = {
        onError: function (e) {
            (Sr = !0), (qi = e);
        },
    };
function ig(e, t, n, r, i, o, s, l, a) {
    (Sr = !1), (qi = null), ng.apply(rg, arguments);
}
function og(e, t, n, r, i, o, s, l, a) {
    if ((ig.apply(this, arguments), Sr)) {
        if (Sr) {
            var u = qi;
            (Sr = !1), (qi = null);
        } else throw Error(k(198));
        bi || ((bi = !0), (ol = u));
    }
}
function vn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function gd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Eu(e) {
    if (vn(e) !== e) throw Error(k(188));
}
function sg(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = vn(e)), t === null)) throw Error(k(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return Eu(i), e;
                if (o === r) return Eu(i), t;
                o = o.sibling;
            }
            throw Error(k(188));
        }
        if (n.return !== r.return) (n = i), (r = o);
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                }
                if (l === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                }
                l = l.sibling;
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                    }
                    if (l === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                    }
                    l = l.sibling;
                }
                if (!s) throw Error(k(189));
            }
        }
        if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
}
function yd(e) {
    return (e = sg(e)), e !== null ? vd(e) : null;
}
function vd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = vd(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var xd = Re.unstable_scheduleCallback,
    Lu = Re.unstable_cancelCallback,
    lg = Re.unstable_shouldYield,
    ag = Re.unstable_requestPaint,
    ne = Re.unstable_now,
    ug = Re.unstable_getCurrentPriorityLevel,
    ua = Re.unstable_ImmediatePriority,
    wd = Re.unstable_UserBlockingPriority,
    eo = Re.unstable_NormalPriority,
    cg = Re.unstable_LowPriority,
    Sd = Re.unstable_IdlePriority,
    Mo = null,
    lt = null;
function fg(e) {
    if (lt && typeof lt.onCommitFiberRoot == "function")
        try {
            lt.onCommitFiberRoot(
                Mo,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : pg,
    dg = Math.log,
    hg = Math.LN2;
function pg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((dg(e) / hg) | 0)) | 0;
}
var gi = 64,
    yi = 4194304;
function yr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? (r = yr(l)) : ((o &= s), o !== 0 && (r = yr(o)));
    } else (s = n & ~i), s !== 0 ? (r = yr(s)) : o !== 0 && (r = yr(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & i) &&
        ((i = r & -r),
        (o = t & -t),
        i >= o || (i === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function mg(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function gg(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            i = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var s = 31 - Ze(o),
            l = 1 << s,
            a = i[s];
        a === -1
            ? (!(l & n) || l & r) && (i[s] = mg(l, t))
            : a <= t && (e.expiredLanes |= l),
            (o &= ~l);
    }
}
function sl(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function kd() {
    var e = gi;
    return (gi <<= 1), !(gi & 4194240) && (gi = 64), e;
}
function us(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function ri(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ze(t)),
        (e[t] = n);
}
function yg(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ze(n),
            o = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
}
function ca(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ze(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var B = 0;
function Pd(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Cd,
    fa,
    Td,
    Ed,
    Ld,
    ll = !1,
    vi = [],
    Rt = null,
    Nt = null,
    _t = null,
    Ir = new Map(),
    zr = new Map(),
    jt = [],
    vg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
    );
function Vu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Rt = null;
            break;
        case "dragenter":
        case "dragleave":
            Nt = null;
            break;
        case "mouseover":
        case "mouseout":
            _t = null;
            break;
        case "pointerover":
        case "pointerout":
            Ir.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            zr.delete(t.pointerId);
    }
}
function sr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [i],
          }),
          t !== null && ((t = oi(t)), t !== null && fa(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
}
function xg(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (Rt = sr(Rt, e, t, n, r, i)), !0;
        case "dragenter":
            return (Nt = sr(Nt, e, t, n, r, i)), !0;
        case "mouseover":
            return (_t = sr(_t, e, t, n, r, i)), !0;
        case "pointerover":
            var o = i.pointerId;
            return Ir.set(o, sr(Ir.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (
                (o = i.pointerId),
                zr.set(o, sr(zr.get(o) || null, e, t, n, r, i)),
                !0
            );
    }
    return !1;
}
function Vd(e) {
    var t = sn(e.target);
    if (t !== null) {
        var n = vn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = gd(n)), t !== null)) {
                    (e.blockedOn = t),
                        Ld(e.priority, function () {
                            Td(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Fi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (nl = r), n.target.dispatchEvent(r), (nl = null);
        } else return (t = oi(n)), t !== null && fa(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function ju(e, t, n) {
    Fi(e) && n.delete(t);
}
function wg() {
    (ll = !1),
        Rt !== null && Fi(Rt) && (Rt = null),
        Nt !== null && Fi(Nt) && (Nt = null),
        _t !== null && Fi(_t) && (_t = null),
        Ir.forEach(ju),
        zr.forEach(ju);
}
function lr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        ll ||
            ((ll = !0),
            Re.unstable_scheduleCallback(Re.unstable_NormalPriority, wg)));
}
function Br(e) {
    function t(i) {
        return lr(i, e);
    }
    if (0 < vi.length) {
        lr(vi[0], e);
        for (var n = 1; n < vi.length; n++) {
            var r = vi[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Rt !== null && lr(Rt, e),
            Nt !== null && lr(Nt, e),
            _t !== null && lr(_t, e),
            Ir.forEach(t),
            zr.forEach(t),
            n = 0;
        n < jt.length;
        n++
    )
        (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
        Vd(n), n.blockedOn === null && jt.shift();
}
var Wn = kt.ReactCurrentBatchConfig,
    no = !0;
function Sg(e, t, n, r) {
    var i = B,
        o = Wn.transition;
    Wn.transition = null;
    try {
        (B = 1), da(e, t, n, r);
    } finally {
        (B = i), (Wn.transition = o);
    }
}
function kg(e, t, n, r) {
    var i = B,
        o = Wn.transition;
    Wn.transition = null;
    try {
        (B = 4), da(e, t, n, r);
    } finally {
        (B = i), (Wn.transition = o);
    }
}
function da(e, t, n, r) {
    if (no) {
        var i = al(e, t, n, r);
        if (i === null) xs(e, t, r, ro, n), Vu(e, r);
        else if (xg(i, e, t, n, r)) r.stopPropagation();
        else if ((Vu(e, r), t & 4 && -1 < vg.indexOf(e))) {
            for (; i !== null; ) {
                var o = oi(i);
                if (
                    (o !== null && Cd(o),
                    (o = al(e, t, n, r)),
                    o === null && xs(e, t, r, ro, n),
                    o === i)
                )
                    break;
                i = o;
            }
            i !== null && r.stopPropagation();
        } else xs(e, t, r, null, n);
    }
}
var ro = null;
function al(e, t, n, r) {
    if (((ro = null), (e = aa(r)), (e = sn(e)), e !== null))
        if (((t = vn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = gd(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (ro = e), null;
}
function jd(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (ug()) {
                case ua:
                    return 1;
                case wd:
                    return 4;
                case eo:
                case cg:
                    return 16;
                case Sd:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var At = null,
    ha = null,
    Ii = null;
function Md() {
    if (Ii) return Ii;
    var e,
        t = ha,
        n = t.length,
        r,
        i = "value" in At ? At.value : At.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (Ii = i.slice(e, 1 < r ? 1 - r : void 0));
}
function zi(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function xi() {
    return !0;
}
function Mu() {
    return !1;
}
function Oe(e) {
    function t(n, r, i, o, s) {
        (this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = s),
            (this.currentTarget = null);
        for (var l in e)
            e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? xi
                : Mu),
            (this.isPropagationStopped = Mu),
            this
        );
    }
    return (
        X(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = xi));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = xi));
            },
            persist: function () {},
            isPersistent: xi,
        }),
        t
    );
}
var nr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    pa = Oe(nr),
    ii = X({}, nr, { view: 0, detail: 0 }),
    Pg = Oe(ii),
    cs,
    fs,
    ar,
    Ao = X({}, ii, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ma,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== ar &&
                      (ar && e.type === "mousemove"
                          ? ((cs = e.screenX - ar.screenX),
                            (fs = e.screenY - ar.screenY))
                          : (fs = cs = 0),
                      (ar = e)),
                  cs);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : fs;
        },
    }),
    Au = Oe(Ao),
    Cg = X({}, Ao, { dataTransfer: 0 }),
    Tg = Oe(Cg),
    Eg = X({}, ii, { relatedTarget: 0 }),
    ds = Oe(Eg),
    Lg = X({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vg = Oe(Lg),
    jg = X({}, nr, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Mg = Oe(jg),
    Ag = X({}, nr, { data: 0 }),
    Du = Oe(Ag),
    Dg = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Rg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Ng = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function _g(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Ng[e])
        ? !!t[e]
        : !1;
}
function ma() {
    return _g;
}
var Og = X({}, ii, {
        key: function (e) {
            if (e.key) {
                var t = Dg[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = zi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Rg[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ma,
        charCode: function (e) {
            return e.type === "keypress" ? zi(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? zi(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    Fg = Oe(Og),
    Ig = X({}, Ao, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Ru = Oe(Ig),
    zg = X({}, ii, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ma,
    }),
    Bg = Oe(zg),
    Ug = X({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hg = Oe(Ug),
    Wg = X({}, Ao, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    $g = Oe(Wg),
    Gg = [9, 13, 27, 32],
    ga = vt && "CompositionEvent" in window,
    kr = null;
vt && "documentMode" in document && (kr = document.documentMode);
var Kg = vt && "TextEvent" in window && !kr,
    Ad = vt && (!ga || (kr && 8 < kr && 11 >= kr)),
    Nu = String.fromCharCode(32),
    _u = !1;
function Dd(e, t) {
    switch (e) {
        case "keyup":
            return Gg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Rd(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function Qg(e, t) {
    switch (e) {
        case "compositionend":
            return Rd(t);
        case "keypress":
            return t.which !== 32 ? null : ((_u = !0), Nu);
        case "textInput":
            return (e = t.data), e === Nu && _u ? null : e;
        default:
            return null;
    }
}
function Yg(e, t) {
    if (En)
        return e === "compositionend" || (!ga && Dd(e, t))
            ? ((e = Md()), (Ii = ha = At = null), (En = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Ad && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Xg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xg[e.type] : t === "textarea";
}
function Nd(e, t, n, r) {
    fd(r),
        (t = io(t, "onChange")),
        0 < t.length &&
            ((n = new pa("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Pr = null,
    Ur = null;
function Zg(e) {
    Gd(e, 0);
}
function Do(e) {
    var t = jn(e);
    if (id(t)) return e;
}
function Jg(e, t) {
    if (e === "change") return t;
}
var _d = !1;
if (vt) {
    var hs;
    if (vt) {
        var ps = "oninput" in document;
        if (!ps) {
            var Fu = document.createElement("div");
            Fu.setAttribute("oninput", "return;"),
                (ps = typeof Fu.oninput == "function");
        }
        hs = ps;
    } else hs = !1;
    _d = hs && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
    Pr && (Pr.detachEvent("onpropertychange", Od), (Ur = Pr = null));
}
function Od(e) {
    if (e.propertyName === "value" && Do(Ur)) {
        var t = [];
        Nd(t, Ur, e, aa(e)), md(Zg, t);
    }
}
function qg(e, t, n) {
    e === "focusin"
        ? (Iu(), (Pr = t), (Ur = n), Pr.attachEvent("onpropertychange", Od))
        : e === "focusout" && Iu();
}
function bg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Do(Ur);
}
function e0(e, t) {
    if (e === "click") return Do(t);
}
function t0(e, t) {
    if (e === "input" || e === "change") return Do(t);
}
function n0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : n0;
function Hr(e, t) {
    if (qe(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!$s.call(t, i) || !qe(e[i], t[i])) return !1;
    }
    return !0;
}
function zu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Bu(e, t) {
    var n = zu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = zu(n);
    }
}
function Fd(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Fd(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Id() {
    for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ji(e.document);
    }
    return t;
}
function ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function r0(e) {
    var t = Id(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Fd(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && ya(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                (r = r.end === void 0 ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = Bu(n, o));
                var s = Bu(n, r);
                i &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var i0 = vt && "documentMode" in document && 11 >= document.documentMode,
    Ln = null,
    ul = null,
    Cr = null,
    cl = !1;
function Uu(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cl ||
        Ln == null ||
        Ln !== Ji(r) ||
        ((r = Ln),
        "selectionStart" in r && ya(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Cr && Hr(Cr, r)) ||
            ((Cr = r),
            (r = io(ul, "onSelect")),
            0 < r.length &&
                ((t = new pa("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Ln))));
}
function wi(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Vn = {
        animationend: wi("Animation", "AnimationEnd"),
        animationiteration: wi("Animation", "AnimationIteration"),
        animationstart: wi("Animation", "AnimationStart"),
        transitionend: wi("Transition", "TransitionEnd"),
    },
    ms = {},
    zd = {};
vt &&
    ((zd = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Vn.animationend.animation,
        delete Vn.animationiteration.animation,
        delete Vn.animationstart.animation),
    "TransitionEvent" in window || delete Vn.transitionend.transition);
function Ro(e) {
    if (ms[e]) return ms[e];
    if (!Vn[e]) return e;
    var t = Vn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in zd) return (ms[e] = t[n]);
    return e;
}
var Bd = Ro("animationend"),
    Ud = Ro("animationiteration"),
    Hd = Ro("animationstart"),
    Wd = Ro("transitionend"),
    $d = new Map(),
    Hu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
    );
function Qt(e, t) {
    $d.set(e, t), yn(t, [e]);
}
for (var gs = 0; gs < Hu.length; gs++) {
    var ys = Hu[gs],
        o0 = ys.toLowerCase(),
        s0 = ys[0].toUpperCase() + ys.slice(1);
    Qt(o0, "on" + s0);
}
Qt(Bd, "onAnimationEnd");
Qt(Ud, "onAnimationIteration");
Qt(Hd, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Wd, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
yn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
yn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    l0 = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(vr)
    );
function Wu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), og(r, t, void 0, e), (e.currentTarget = null);
}
function Gd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), a !== o && i.isPropagationStopped()))
                        break e;
                    Wu(i, l, u), (o = a);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((l = r[s]),
                        (a = l.instance),
                        (u = l.currentTarget),
                        (l = l.listener),
                        a !== o && i.isPropagationStopped())
                    )
                        break e;
                    Wu(i, l, u), (o = a);
                }
        }
    }
    if (bi) throw ((e = ol), (bi = !1), (ol = null), e);
}
function H(e, t) {
    var n = t[ml];
    n === void 0 && (n = t[ml] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Kd(t, e, 2, !1), n.add(r));
}
function vs(e, t, n) {
    var r = 0;
    t && (r |= 4), Kd(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
    if (!e[Si]) {
        (e[Si] = !0),
            bf.forEach(function (n) {
                n !== "selectionchange" &&
                    (l0.has(n) || vs(n, !1, e), vs(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Si] || ((t[Si] = !0), vs("selectionchange", !1, t));
    }
}
function Kd(e, t, n, r) {
    switch (jd(t)) {
        case 1:
            var i = Sg;
            break;
        case 4:
            i = kg;
            break;
        default:
            i = da;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !il ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
}
function xs(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if (
                            (a === 3 || a === 4) &&
                            ((a = s.stateNode.containerInfo),
                            a === i || (a.nodeType === 8 && a.parentNode === i))
                        )
                            return;
                        s = s.return;
                    }
                for (; l !== null; ) {
                    if (((s = sn(l)), s === null)) return;
                    if (((a = s.tag), a === 5 || a === 6)) {
                        r = o = s;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    md(function () {
        var u = o,
            c = aa(n),
            f = [];
        e: {
            var d = $d.get(e);
            if (d !== void 0) {
                var m = pa,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (zi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = Fg;
                        break;
                    case "focusin":
                        (y = "focus"), (m = ds);
                        break;
                    case "focusout":
                        (y = "blur"), (m = ds);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = ds;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = Au;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = Tg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = Bg;
                        break;
                    case Bd:
                    case Ud:
                    case Hd:
                        m = Vg;
                        break;
                    case Wd:
                        m = Hg;
                        break;
                    case "scroll":
                        m = Pg;
                        break;
                    case "wheel":
                        m = $g;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = Mg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = Ru;
                }
                var x = (t & 4) !== 0,
                    E = !x && e === "scroll",
                    g = x ? (d !== null ? d + "Capture" : null) : d;
                x = [];
                for (var h = u, p; h !== null; ) {
                    p = h;
                    var w = p.stateNode;
                    if (
                        (p.tag === 5 &&
                            w !== null &&
                            ((p = w),
                            g !== null &&
                                ((w = Fr(h, g)),
                                w != null && x.push($r(h, w, p)))),
                        E)
                    )
                        break;
                    h = h.return;
                }
                0 < x.length &&
                    ((d = new m(d, y, null, n, c)),
                    f.push({ event: d, listeners: x }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((d = e === "mouseover" || e === "pointerover"),
                    (m = e === "mouseout" || e === "pointerout"),
                    d &&
                        n !== nl &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (sn(y) || y[xt]))
                )
                    break e;
                if (
                    (m || d) &&
                    ((d =
                        c.window === c
                            ? c
                            : (d = c.ownerDocument)
                            ? d.defaultView || d.parentWindow
                            : window),
                    m
                        ? ((y = n.relatedTarget || n.toElement),
                          (m = u),
                          (y = y ? sn(y) : null),
                          y !== null &&
                              ((E = vn(y)),
                              y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((m = null), (y = u)),
                    m !== y)
                ) {
                    if (
                        ((x = Au),
                        (w = "onMouseLeave"),
                        (g = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((x = Ru),
                            (w = "onPointerLeave"),
                            (g = "onPointerEnter"),
                            (h = "pointer")),
                        (E = m == null ? d : jn(m)),
                        (p = y == null ? d : jn(y)),
                        (d = new x(w, h + "leave", m, n, c)),
                        (d.target = E),
                        (d.relatedTarget = p),
                        (w = null),
                        sn(c) === u &&
                            ((x = new x(g, h + "enter", y, n, c)),
                            (x.target = p),
                            (x.relatedTarget = E),
                            (w = x)),
                        (E = w),
                        m && y)
                    )
                        t: {
                            for (x = m, g = y, h = 0, p = x; p; p = kn(p)) h++;
                            for (p = 0, w = g; w; w = kn(w)) p++;
                            for (; 0 < h - p; ) (x = kn(x)), h--;
                            for (; 0 < p - h; ) (g = kn(g)), p--;
                            for (; h--; ) {
                                if (
                                    x === g ||
                                    (g !== null && x === g.alternate)
                                )
                                    break t;
                                (x = kn(x)), (g = kn(g));
                            }
                            x = null;
                        }
                    else x = null;
                    m !== null && $u(f, d, m, x, !1),
                        y !== null && E !== null && $u(f, E, y, x, !0);
                }
            }
            e: {
                if (
                    ((d = u ? jn(u) : window),
                    (m = d.nodeName && d.nodeName.toLowerCase()),
                    m === "select" || (m === "input" && d.type === "file"))
                )
                    var S = Jg;
                else if (Ou(d))
                    if (_d) S = t0;
                    else {
                        S = bg;
                        var T = qg;
                    }
                else
                    (m = d.nodeName) &&
                        m.toLowerCase() === "input" &&
                        (d.type === "checkbox" || d.type === "radio") &&
                        (S = e0);
                if (S && (S = S(e, u))) {
                    Nd(f, S, n, c);
                    break e;
                }
                T && T(e, d, u),
                    e === "focusout" &&
                        (T = d._wrapperState) &&
                        T.controlled &&
                        d.type === "number" &&
                        Js(d, "number", d.value);
            }
            switch (((T = u ? jn(u) : window), e)) {
                case "focusin":
                    (Ou(T) || T.contentEditable === "true") &&
                        ((Ln = T), (ul = u), (Cr = null));
                    break;
                case "focusout":
                    Cr = ul = Ln = null;
                    break;
                case "mousedown":
                    cl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (cl = !1), Uu(f, n, c);
                    break;
                case "selectionchange":
                    if (i0) break;
                case "keydown":
                case "keyup":
                    Uu(f, n, c);
            }
            var C;
            if (ga)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e;
                    }
                    P = void 0;
                }
            else
                En
                    ? Dd(e, n) && (P = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (P = "onCompositionStart");
            P &&
                (Ad &&
                    n.locale !== "ko" &&
                    (En || P !== "onCompositionStart"
                        ? P === "onCompositionEnd" && En && (C = Md())
                        : ((At = c),
                          (ha = "value" in At ? At.value : At.textContent),
                          (En = !0))),
                (T = io(u, P)),
                0 < T.length &&
                    ((P = new Du(P, e, null, n, c)),
                    f.push({ event: P, listeners: T }),
                    C
                        ? (P.data = C)
                        : ((C = Rd(n)), C !== null && (P.data = C)))),
                (C = Kg ? Qg(e, n) : Yg(e, n)) &&
                    ((u = io(u, "onBeforeInput")),
                    0 < u.length &&
                        ((c = new Du(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            c
                        )),
                        f.push({ event: c, listeners: u }),
                        (c.data = C)));
        }
        Gd(f, t);
    });
}
function $r(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function io(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 &&
            o !== null &&
            ((i = o),
            (o = Fr(e, n)),
            o != null && r.unshift($r(e, o, i)),
            (o = Fr(e, t)),
            o != null && r.push($r(e, o, i))),
            (e = e.return);
    }
    return r;
}
function kn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function $u(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 &&
            u !== null &&
            ((l = u),
            i
                ? ((a = Fr(n, o)), a != null && s.unshift($r(n, a, l)))
                : i || ((a = Fr(n, o)), a != null && s.push($r(n, a, l)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var a0 = /\r\n?/g,
    u0 = /\u0000|\uFFFD/g;
function Gu(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            a0,
            `
`
        )
        .replace(u0, "");
}
function ki(e, t, n) {
    if (((t = Gu(t)), Gu(e) !== t && n)) throw Error(k(425));
}
function oo() {}
var fl = null,
    dl = null;
function hl(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var pl = typeof setTimeout == "function" ? setTimeout : void 0,
    c0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ku = typeof Promise == "function" ? Promise : void 0,
    f0 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Ku < "u"
            ? function (e) {
                  return Ku.resolve(null).then(e).catch(d0);
              }
            : pl;
function d0(e) {
    setTimeout(function () {
        throw e;
    });
}
function ws(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), Br(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    Br(t);
}
function Ot(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Qu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var rr = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + rr,
    Gr = "__reactProps$" + rr,
    xt = "__reactContainer$" + rr,
    ml = "__reactEvents$" + rr,
    h0 = "__reactListeners$" + rr,
    p0 = "__reactHandles$" + rr;
function sn(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[xt] || n[st])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Qu(e); e !== null; ) {
                    if ((n = e[st])) return n;
                    e = Qu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function oi(e) {
    return (
        (e = e[st] || e[xt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
}
function No(e) {
    return e[Gr] || null;
}
var gl = [],
    Mn = -1;
function Yt(e) {
    return { current: e };
}
function W(e) {
    0 > Mn || ((e.current = gl[Mn]), (gl[Mn] = null), Mn--);
}
function U(e, t) {
    Mn++, (gl[Mn] = e.current), (e.current = t);
}
var $t = {},
    me = Yt($t),
    Ee = Yt(!1),
    dn = $t;
function Qn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function Le(e) {
    return (e = e.childContextTypes), e != null;
}
function so() {
    W(Ee), W(me);
}
function Yu(e, t, n) {
    if (me.current !== $t) throw Error(k(168));
    U(me, t), U(Ee, n);
}
function Qd(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(k(108, qm(e) || "Unknown", i));
    return X({}, n, r);
}
function lo(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            $t),
        (dn = me.current),
        U(me, e),
        U(Ee, Ee.current),
        !0
    );
}
function Xu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
        ? ((e = Qd(e, t, dn)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          W(Ee),
          W(me),
          U(me, e))
        : W(Ee),
        U(Ee, n);
}
var dt = null,
    _o = !1,
    Ss = !1;
function Yd(e) {
    dt === null ? (dt = [e]) : dt.push(e);
}
function m0(e) {
    (_o = !0), Yd(e);
}
function Xt() {
    if (!Ss && dt !== null) {
        Ss = !0;
        var e = 0,
            t = B;
        try {
            var n = dt;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (dt = null), (_o = !1);
        } catch (i) {
            throw (dt !== null && (dt = dt.slice(e + 1)), xd(ua, Xt), i);
        } finally {
            (B = t), (Ss = !1);
        }
    }
    return null;
}
var An = [],
    Dn = 0,
    ao = null,
    uo = 0,
    ze = [],
    Be = 0,
    hn = null,
    ht = 1,
    pt = "";
function tn(e, t) {
    (An[Dn++] = uo), (An[Dn++] = ao), (ao = e), (uo = t);
}
function Xd(e, t, n) {
    (ze[Be++] = ht), (ze[Be++] = pt), (ze[Be++] = hn), (hn = e);
    var r = ht;
    e = pt;
    var i = 32 - Ze(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - Ze(t) + i;
    if (30 < o) {
        var s = i - (i % 5);
        (o = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (i -= s),
            (ht = (1 << (32 - Ze(t) + i)) | (n << i) | r),
            (pt = o + e);
    } else (ht = (1 << o) | (n << i) | r), (pt = e);
}
function va(e) {
    e.return !== null && (tn(e, 1), Xd(e, 1, 0));
}
function xa(e) {
    for (; e === ao; )
        (ao = An[--Dn]), (An[Dn] = null), (uo = An[--Dn]), (An[Dn] = null);
    for (; e === hn; )
        (hn = ze[--Be]),
            (ze[Be] = null),
            (pt = ze[--Be]),
            (ze[Be] = null),
            (ht = ze[--Be]),
            (ze[Be] = null);
}
var De = null,
    Ae = null,
    G = !1,
    Ye = null;
function Zd(e, t) {
    var n = Ue(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (De = e), (Ae = Ot(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (De = e), (Ae = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = hn !== null ? { id: ht, overflow: pt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ue(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (De = e),
                      (Ae = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vl(e) {
    if (G) {
        var t = Ae;
        if (t) {
            var n = t;
            if (!Zu(e, t)) {
                if (yl(e)) throw Error(k(418));
                t = Ot(n.nextSibling);
                var r = De;
                t && Zu(e, t)
                    ? Zd(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (G = !1), (De = e));
            }
        } else {
            if (yl(e)) throw Error(k(418));
            (e.flags = (e.flags & -4097) | 2), (G = !1), (De = e);
        }
    }
}
function Ju(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    De = e;
}
function Pi(e) {
    if (e !== De) return !1;
    if (!G) return Ju(e), (G = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps))),
        t && (t = Ae))
    ) {
        if (yl(e)) throw (Jd(), Error(k(418)));
        for (; t; ) Zd(e, t), (t = Ot(t.nextSibling));
    }
    if ((Ju(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ae = Ot(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ae = null;
        }
    } else Ae = De ? Ot(e.stateNode.nextSibling) : null;
    return !0;
}
function Jd() {
    for (var e = Ae; e; ) e = Ot(e.nextSibling);
}
function Yn() {
    (Ae = De = null), (G = !1);
}
function wa(e) {
    Ye === null ? (Ye = [e]) : Ye.push(e);
}
var g0 = kt.ReactCurrentBatchConfig;
function Ke(e, t) {
    if (e && e.defaultProps) {
        (t = X({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var co = Yt(null),
    fo = null,
    Rn = null,
    Sa = null;
function ka() {
    Sa = Rn = fo = null;
}
function Pa(e) {
    var t = co.current;
    W(co), (e._currentValue = t);
}
function xl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function $n(e, t) {
    (fo = e),
        (Sa = Rn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function We(e) {
    var t = e._currentValue;
    if (Sa !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
            if (fo === null) throw Error(k(308));
            (Rn = e), (fo.dependencies = { lanes: 0, firstContext: e });
        } else Rn = Rn.next = e;
    return t;
}
var ln = null;
function Ca(e) {
    ln === null ? (ln = [e]) : ln.push(e);
}
function qd(e, t, n, r) {
    var i = t.interleaved;
    return (
        i === null ? ((n.next = n), Ca(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        wt(e, r)
    );
}
function wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Ta(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function bd(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Ft(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), I & 2)) {
        var i = r.pending;
        return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            wt(e, n)
        );
    }
    return (
        (i = r.interleaved),
        i === null ? ((t.next = t), Ca(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        wt(e, n)
    );
}
function Bi(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
    }
}
function qu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
            } while (n !== null);
            o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function ho(e, t, n, r) {
    var i = e.updateQueue;
    Lt = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l,
            u = a.next;
        (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
        var c = e.alternate;
        c !== null &&
            ((c = c.updateQueue),
            (l = c.lastBaseUpdate),
            l !== s &&
                (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
                (c.lastBaseUpdate = a)));
    }
    if (o !== null) {
        var f = i.baseState;
        (s = 0), (c = u = a = null), (l = o);
        do {
            var d = l.lane,
                m = l.eventTime;
            if ((r & d) === d) {
                c !== null &&
                    (c = c.next = {
                        eventTime: m,
                        lane: 0,
                        tag: l.tag,
                        payload: l.payload,
                        callback: l.callback,
                        next: null,
                    });
                e: {
                    var y = e,
                        x = l;
                    switch (((d = t), (m = n), x.tag)) {
                        case 1:
                            if (((y = x.payload), typeof y == "function")) {
                                f = y.call(m, f, d);
                                break e;
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = x.payload),
                                (d =
                                    typeof y == "function"
                                        ? y.call(m, f, d)
                                        : y),
                                d == null)
                            )
                                break e;
                            f = X({}, f, d);
                            break e;
                        case 2:
                            Lt = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((e.flags |= 64),
                    (d = i.effects),
                    d === null ? (i.effects = [l]) : d.push(l));
            } else
                (m = {
                    eventTime: m,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                }),
                    c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
                    (s |= d);
            if (((l = l.next), l === null)) {
                if (((l = i.shared.pending), l === null)) break;
                (d = l),
                    (l = d.next),
                    (d.next = null),
                    (i.lastBaseUpdate = d),
                    (i.shared.pending = null);
            }
        } while (1);
        if (
            (c === null && (a = f),
            (i.baseState = a),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = c),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else o === null && (i.shared.lanes = 0);
        (mn |= s), (e.lanes = s), (e.memoizedState = f);
    }
}
function bu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function"))
                    throw Error(k(191, i));
                i.call(r);
            }
        }
}
var eh = new qf.Component().refs;
function wl(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : X({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oo = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? vn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = xe(),
            i = zt(e),
            o = gt(r, i);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = Ft(e, o, i)),
            t !== null && (Je(t, e, i, r), Bi(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = xe(),
            i = zt(e),
            o = gt(r, i);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = Ft(e, o, i)),
            t !== null && (Je(t, e, i, r), Bi(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = xe(),
            r = zt(e),
            i = gt(n, r);
        (i.tag = 2),
            t != null && (i.callback = t),
            (t = Ft(e, i, r)),
            t !== null && (Je(t, e, r, n), Bi(t, e, r));
    },
};
function ec(e, t, n, r, i, o, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !Hr(n, r) || !Hr(i, o)
            : !0
    );
}
function th(e, t, n) {
    var r = !1,
        i = $t,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = We(o))
            : ((i = Le(t) ? dn : me.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? Qn(e, i) : $t)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Oo),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function tc(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Oo.enqueueReplaceState(t, t.state, null);
}
function Sl(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = eh), Ta(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
        ? (i.context = We(o))
        : ((o = Le(t) ? dn : me.current), (i.context = Qn(e, o))),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (wl(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" &&
                typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && Oo.enqueueReplaceState(i, i.state, null),
            ho(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ur(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(k(147, e));
            var i = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (s) {
                      var l = i.refs;
                      l === eh && (l = i.refs = {}),
                          s === null ? delete l[o] : (l[o] = s);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(k(284));
        if (!n._owner) throw Error(k(290, e));
    }
    return e;
}
function Ci(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            k(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function nc(e) {
    var t = e._init;
    return t(e._payload);
}
function nh(e) {
    function t(g, h) {
        if (e) {
            var p = g.deletions;
            p === null ? ((g.deletions = [h]), (g.flags |= 16)) : p.push(h);
        }
    }
    function n(g, h) {
        if (!e) return null;
        for (; h !== null; ) t(g, h), (h = h.sibling);
        return null;
    }
    function r(g, h) {
        for (g = new Map(); h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
                (h = h.sibling);
        return g;
    }
    function i(g, h) {
        return (g = Bt(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function o(g, h, p) {
        return (
            (g.index = p),
            e
                ? ((p = g.alternate),
                  p !== null
                      ? ((p = p.index), p < h ? ((g.flags |= 2), h) : p)
                      : ((g.flags |= 2), h))
                : ((g.flags |= 1048576), h)
        );
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2), g;
    }
    function l(g, h, p, w) {
        return h === null || h.tag !== 6
            ? ((h = Vs(p, g.mode, w)), (h.return = g), h)
            : ((h = i(h, p)), (h.return = g), h);
    }
    function a(g, h, p, w) {
        var S = p.type;
        return S === Tn
            ? c(g, h, p.props.children, w, p.key)
            : h !== null &&
              (h.elementType === S ||
                  (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === Et &&
                      nc(S) === h.type))
            ? ((w = i(h, p.props)), (w.ref = ur(g, h, p)), (w.return = g), w)
            : ((w = Ki(p.type, p.key, p.props, null, g.mode, w)),
              (w.ref = ur(g, h, p)),
              (w.return = g),
              w);
    }
    function u(g, h, p, w) {
        return h === null ||
            h.tag !== 4 ||
            h.stateNode.containerInfo !== p.containerInfo ||
            h.stateNode.implementation !== p.implementation
            ? ((h = js(p, g.mode, w)), (h.return = g), h)
            : ((h = i(h, p.children || [])), (h.return = g), h);
    }
    function c(g, h, p, w, S) {
        return h === null || h.tag !== 7
            ? ((h = fn(p, g.mode, w, S)), (h.return = g), h)
            : ((h = i(h, p)), (h.return = g), h);
    }
    function f(g, h, p) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
            return (h = Vs("" + h, g.mode, p)), (h.return = g), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case hi:
                    return (
                        (p = Ki(h.type, h.key, h.props, null, g.mode, p)),
                        (p.ref = ur(g, null, h)),
                        (p.return = g),
                        p
                    );
                case Cn:
                    return (h = js(h, g.mode, p)), (h.return = g), h;
                case Et:
                    var w = h._init;
                    return f(g, w(h._payload), p);
            }
            if (gr(h) || ir(h))
                return (h = fn(h, g.mode, p, null)), (h.return = g), h;
            Ci(g, h);
        }
        return null;
    }
    function d(g, h, p, w) {
        var S = h !== null ? h.key : null;
        if ((typeof p == "string" && p !== "") || typeof p == "number")
            return S !== null ? null : l(g, h, "" + p, w);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case hi:
                    return p.key === S ? a(g, h, p, w) : null;
                case Cn:
                    return p.key === S ? u(g, h, p, w) : null;
                case Et:
                    return (S = p._init), d(g, h, S(p._payload), w);
            }
            if (gr(p) || ir(p)) return S !== null ? null : c(g, h, p, w, null);
            Ci(g, p);
        }
        return null;
    }
    function m(g, h, p, w, S) {
        if ((typeof w == "string" && w !== "") || typeof w == "number")
            return (g = g.get(p) || null), l(h, g, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case hi:
                    return (
                        (g = g.get(w.key === null ? p : w.key) || null),
                        a(h, g, w, S)
                    );
                case Cn:
                    return (
                        (g = g.get(w.key === null ? p : w.key) || null),
                        u(h, g, w, S)
                    );
                case Et:
                    var T = w._init;
                    return m(g, h, p, T(w._payload), S);
            }
            if (gr(w) || ir(w))
                return (g = g.get(p) || null), c(h, g, w, S, null);
            Ci(h, w);
        }
        return null;
    }
    function y(g, h, p, w) {
        for (
            var S = null, T = null, C = h, P = (h = 0), N = null;
            C !== null && P < p.length;
            P++
        ) {
            C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
            var D = d(g, C, p[P], w);
            if (D === null) {
                C === null && (C = N);
                break;
            }
            e && C && D.alternate === null && t(g, C),
                (h = o(D, h, P)),
                T === null ? (S = D) : (T.sibling = D),
                (T = D),
                (C = N);
        }
        if (P === p.length) return n(g, C), G && tn(g, P), S;
        if (C === null) {
            for (; P < p.length; P++)
                (C = f(g, p[P], w)),
                    C !== null &&
                        ((h = o(C, h, P)),
                        T === null ? (S = C) : (T.sibling = C),
                        (T = C));
            return G && tn(g, P), S;
        }
        for (C = r(g, C); P < p.length; P++)
            (N = m(C, g, P, p[P], w)),
                N !== null &&
                    (e &&
                        N.alternate !== null &&
                        C.delete(N.key === null ? P : N.key),
                    (h = o(N, h, P)),
                    T === null ? (S = N) : (T.sibling = N),
                    (T = N));
        return (
            e &&
                C.forEach(function (q) {
                    return t(g, q);
                }),
            G && tn(g, P),
            S
        );
    }
    function x(g, h, p, w) {
        var S = ir(p);
        if (typeof S != "function") throw Error(k(150));
        if (((p = S.call(p)), p == null)) throw Error(k(151));
        for (
            var T = (S = null), C = h, P = (h = 0), N = null, D = p.next();
            C !== null && !D.done;
            P++, D = p.next()
        ) {
            C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
            var q = d(g, C, D.value, w);
            if (q === null) {
                C === null && (C = N);
                break;
            }
            e && C && q.alternate === null && t(g, C),
                (h = o(q, h, P)),
                T === null ? (S = q) : (T.sibling = q),
                (T = q),
                (C = N);
        }
        if (D.done) return n(g, C), G && tn(g, P), S;
        if (C === null) {
            for (; !D.done; P++, D = p.next())
                (D = f(g, D.value, w)),
                    D !== null &&
                        ((h = o(D, h, P)),
                        T === null ? (S = D) : (T.sibling = D),
                        (T = D));
            return G && tn(g, P), S;
        }
        for (C = r(g, C); !D.done; P++, D = p.next())
            (D = m(C, g, P, D.value, w)),
                D !== null &&
                    (e &&
                        D.alternate !== null &&
                        C.delete(D.key === null ? P : D.key),
                    (h = o(D, h, P)),
                    T === null ? (S = D) : (T.sibling = D),
                    (T = D));
        return (
            e &&
                C.forEach(function (ke) {
                    return t(g, ke);
                }),
            G && tn(g, P),
            S
        );
    }
    function E(g, h, p, w) {
        if (
            (typeof p == "object" &&
                p !== null &&
                p.type === Tn &&
                p.key === null &&
                (p = p.props.children),
            typeof p == "object" && p !== null)
        ) {
            switch (p.$$typeof) {
                case hi:
                    e: {
                        for (var S = p.key, T = h; T !== null; ) {
                            if (T.key === S) {
                                if (((S = p.type), S === Tn)) {
                                    if (T.tag === 7) {
                                        n(g, T.sibling),
                                            (h = i(T, p.props.children)),
                                            (h.return = g),
                                            (g = h);
                                        break e;
                                    }
                                } else if (
                                    T.elementType === S ||
                                    (typeof S == "object" &&
                                        S !== null &&
                                        S.$$typeof === Et &&
                                        nc(S) === T.type)
                                ) {
                                    n(g, T.sibling),
                                        (h = i(T, p.props)),
                                        (h.ref = ur(g, T, p)),
                                        (h.return = g),
                                        (g = h);
                                    break e;
                                }
                                n(g, T);
                                break;
                            } else t(g, T);
                            T = T.sibling;
                        }
                        p.type === Tn
                            ? ((h = fn(p.props.children, g.mode, w, p.key)),
                              (h.return = g),
                              (g = h))
                            : ((w = Ki(
                                  p.type,
                                  p.key,
                                  p.props,
                                  null,
                                  g.mode,
                                  w
                              )),
                              (w.ref = ur(g, h, p)),
                              (w.return = g),
                              (g = w));
                    }
                    return s(g);
                case Cn:
                    e: {
                        for (T = p.key; h !== null; ) {
                            if (h.key === T)
                                if (
                                    h.tag === 4 &&
                                    h.stateNode.containerInfo ===
                                        p.containerInfo &&
                                    h.stateNode.implementation ===
                                        p.implementation
                                ) {
                                    n(g, h.sibling),
                                        (h = i(h, p.children || [])),
                                        (h.return = g),
                                        (g = h);
                                    break e;
                                } else {
                                    n(g, h);
                                    break;
                                }
                            else t(g, h);
                            h = h.sibling;
                        }
                        (h = js(p, g.mode, w)), (h.return = g), (g = h);
                    }
                    return s(g);
                case Et:
                    return (T = p._init), E(g, h, T(p._payload), w);
            }
            if (gr(p)) return y(g, h, p, w);
            if (ir(p)) return x(g, h, p, w);
            Ci(g, p);
        }
        return (typeof p == "string" && p !== "") || typeof p == "number"
            ? ((p = "" + p),
              h !== null && h.tag === 6
                  ? (n(g, h.sibling), (h = i(h, p)), (h.return = g), (g = h))
                  : (n(g, h), (h = Vs(p, g.mode, w)), (h.return = g), (g = h)),
              s(g))
            : n(g, h);
    }
    return E;
}
var Xn = nh(!0),
    rh = nh(!1),
    si = {},
    at = Yt(si),
    Kr = Yt(si),
    Qr = Yt(si);
function an(e) {
    if (e === si) throw Error(k(174));
    return e;
}
function Ea(e, t) {
    switch ((U(Qr, t), U(Kr, e), U(at, si), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : bs(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = bs(t, e));
    }
    W(at), U(at, t);
}
function Zn() {
    W(at), W(Kr), W(Qr);
}
function ih(e) {
    an(Qr.current);
    var t = an(at.current),
        n = bs(t, e.type);
    t !== n && (U(Kr, e), U(at, n));
}
function La(e) {
    Kr.current === e && (W(at), W(Kr));
}
var K = Yt(0);
function po(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var ks = [];
function Va() {
    for (var e = 0; e < ks.length; e++)
        ks[e]._workInProgressVersionPrimary = null;
    ks.length = 0;
}
var Ui = kt.ReactCurrentDispatcher,
    Ps = kt.ReactCurrentBatchConfig,
    pn = 0,
    Y = null,
    oe = null,
    le = null,
    mo = !1,
    Tr = !1,
    Yr = 0,
    y0 = 0;
function de() {
    throw Error(k(321));
}
function ja(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!qe(e[n], t[n])) return !1;
    return !0;
}
function Ma(e, t, n, r, i, o) {
    if (
        ((pn = o),
        (Y = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ui.current = e === null || e.memoizedState === null ? S0 : k0),
        (e = n(r, i)),
        Tr)
    ) {
        o = 0;
        do {
            if (((Tr = !1), (Yr = 0), 25 <= o)) throw Error(k(301));
            (o += 1),
                (le = oe = null),
                (t.updateQueue = null),
                (Ui.current = P0),
                (e = n(r, i));
        } while (Tr);
    }
    if (
        ((Ui.current = go),
        (t = oe !== null && oe.next !== null),
        (pn = 0),
        (le = oe = Y = null),
        (mo = !1),
        t)
    )
        throw Error(k(300));
    return e;
}
function Aa() {
    var e = Yr !== 0;
    return (Yr = 0), e;
}
function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le;
}
function $e() {
    if (oe === null) {
        var e = Y.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = oe.next;
    var t = le === null ? Y.memoizedState : le.next;
    if (t !== null) (le = t), (oe = e);
    else {
        if (e === null) throw Error(k(310));
        (oe = e),
            (e = {
                memoizedState: oe.memoizedState,
                baseState: oe.baseState,
                baseQueue: oe.baseQueue,
                queue: oe.queue,
                next: null,
            }),
            le === null ? (Y.memoizedState = le = e) : (le = le.next = e);
    }
    return le;
}
function Xr(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Cs(e) {
    var t = $e(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = oe,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = o.next), (o.next = s);
        }
        (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
        (o = i.next), (r = r.baseState);
        var l = (s = null),
            a = null,
            u = o;
        do {
            var c = u.lane;
            if ((pn & c) === c)
                a !== null &&
                    (a = a.next = {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                    }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
                    (Y.lanes |= c),
                    (mn |= c);
            }
            u = u.next;
        } while (u !== null && u !== o);
        a === null ? (s = r) : (a.next = l),
            qe(r, t.memoizedState) || (Te = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = a),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (o = i.lane), (Y.lanes |= o), (mn |= o), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Ts(e) {
    var t = $e(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== i);
        qe(o, t.memoizedState) || (Te = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function oh() {}
function sh(e, t) {
    var n = Y,
        r = $e(),
        i = t(),
        o = !qe(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (Te = !0)),
        (r = r.queue),
        Da(uh.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            Zr(9, ah.bind(null, n, r, i, t), void 0, null),
            ae === null)
        )
            throw Error(k(349));
        pn & 30 || lh(n, t, i);
    }
    return i;
}
function lh(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = Y.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Y.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ah(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ch(t) && fh(e);
}
function uh(e, t, n) {
    return n(function () {
        ch(t) && fh(e);
    });
}
function ch(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !qe(e, n);
    } catch {
        return !0;
    }
}
function fh(e) {
    var t = wt(e, 1);
    t !== null && Je(t, e, 1, -1);
}
function rc(e) {
    var t = it();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = w0.bind(null, Y, e)),
        [t.memoizedState, e]
    );
}
function Zr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = Y.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Y.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function dh() {
    return $e().memoizedState;
}
function Hi(e, t, n, r) {
    var i = it();
    (Y.flags |= e),
        (i.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fo(e, t, n, r) {
    var i = $e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (oe !== null) {
        var s = oe.memoizedState;
        if (((o = s.destroy), r !== null && ja(r, s.deps))) {
            i.memoizedState = Zr(t, n, o, r);
            return;
        }
    }
    (Y.flags |= e), (i.memoizedState = Zr(1 | t, n, o, r));
}
function ic(e, t) {
    return Hi(8390656, 8, e, t);
}
function Da(e, t) {
    return Fo(2048, 8, e, t);
}
function hh(e, t) {
    return Fo(4, 2, e, t);
}
function ph(e, t) {
    return Fo(4, 4, e, t);
}
function mh(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function gh(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Fo(4, 4, mh.bind(null, t, e), n)
    );
}
function Ra() {}
function yh(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ja(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function vh(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ja(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xh(e, t, n) {
    return pn & 21
        ? (qe(n, t) ||
              ((n = kd()), (Y.lanes |= n), (mn |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Te = !0)),
          (e.memoizedState = n));
}
function v0(e, t) {
    var n = B;
    (B = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ps.transition;
    Ps.transition = {};
    try {
        e(!1), t();
    } finally {
        (B = n), (Ps.transition = r);
    }
}
function wh() {
    return $e().memoizedState;
}
function x0(e, t, n) {
    var r = zt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Sh(e))
    )
        kh(t, n);
    else if (((n = qd(e, t, n, r)), n !== null)) {
        var i = xe();
        Je(n, e, r, i), Ph(n, t, r);
    }
}
function w0(e, t, n) {
    var r = zt(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Sh(e)) kh(t, i);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var s = t.lastRenderedState,
                    l = o(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), qe(l, s))) {
                    var a = t.interleaved;
                    a === null
                        ? ((i.next = i), Ca(t))
                        : ((i.next = a.next), (a.next = i)),
                        (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = qd(e, t, i, r)),
            n !== null && ((i = xe()), Je(n, e, r, i), Ph(n, t, r));
    }
}
function Sh(e) {
    var t = e.alternate;
    return e === Y || (t !== null && t === Y);
}
function kh(e, t) {
    Tr = mo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Ph(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
    }
}
var go = {
        readContext: We,
        useCallback: de,
        useContext: de,
        useEffect: de,
        useImperativeHandle: de,
        useInsertionEffect: de,
        useLayoutEffect: de,
        useMemo: de,
        useReducer: de,
        useRef: de,
        useState: de,
        useDebugValue: de,
        useDeferredValue: de,
        useTransition: de,
        useMutableSource: de,
        useSyncExternalStore: de,
        useId: de,
        unstable_isNewReconciler: !1,
    },
    S0 = {
        readContext: We,
        useCallback: function (e, t) {
            return (it().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: We,
        useEffect: ic,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Hi(4194308, 4, mh.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Hi(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Hi(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = it();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = it();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = x0.bind(null, Y, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = it();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: rc,
        useDebugValue: Ra,
        useDeferredValue: function (e) {
            return (it().memoizedState = e);
        },
        useTransition: function () {
            var e = rc(!1),
                t = e[0];
            return (e = v0.bind(null, e[1])), (it().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Y,
                i = it();
            if (G) {
                if (n === void 0) throw Error(k(407));
                n = n();
            } else {
                if (((n = t()), ae === null)) throw Error(k(349));
                pn & 30 || lh(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (i.queue = o),
                ic(uh.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Zr(9, ah.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = it(),
                t = ae.identifierPrefix;
            if (G) {
                var n = pt,
                    r = ht;
                (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Yr++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = y0++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    k0 = {
        readContext: We,
        useCallback: yh,
        useContext: We,
        useEffect: Da,
        useImperativeHandle: gh,
        useInsertionEffect: hh,
        useLayoutEffect: ph,
        useMemo: vh,
        useReducer: Cs,
        useRef: dh,
        useState: function () {
            return Cs(Xr);
        },
        useDebugValue: Ra,
        useDeferredValue: function (e) {
            var t = $e();
            return xh(t, oe.memoizedState, e);
        },
        useTransition: function () {
            var e = Cs(Xr)[0],
                t = $e().memoizedState;
            return [e, t];
        },
        useMutableSource: oh,
        useSyncExternalStore: sh,
        useId: wh,
        unstable_isNewReconciler: !1,
    },
    P0 = {
        readContext: We,
        useCallback: yh,
        useContext: We,
        useEffect: Da,
        useImperativeHandle: gh,
        useInsertionEffect: hh,
        useLayoutEffect: ph,
        useMemo: vh,
        useReducer: Ts,
        useRef: dh,
        useState: function () {
            return Ts(Xr);
        },
        useDebugValue: Ra,
        useDeferredValue: function (e) {
            var t = $e();
            return oe === null
                ? (t.memoizedState = e)
                : xh(t, oe.memoizedState, e);
        },
        useTransition: function () {
            var e = Ts(Xr)[0],
                t = $e().memoizedState;
            return [e, t];
        },
        useMutableSource: oh,
        useSyncExternalStore: sh,
        useId: wh,
        unstable_isNewReconciler: !1,
    };
function Jn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Jm(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function Es(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function kl(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var C0 = typeof WeakMap == "function" ? WeakMap : Map;
function Ch(e, t, n) {
    (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            vo || ((vo = !0), (Dl = r)), kl(e, t);
        }),
        n
    );
}
function Th(e, t, n) {
    (n = gt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                kl(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                kl(e, t),
                    typeof r != "function" &&
                        (It === null ? (It = new Set([this])) : It.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : "",
                });
            }),
        n
    );
}
function oc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new C0();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = I0.bind(null, e, t, n)), t.then(e, e));
}
function sc(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function lc(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = gt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var T0 = kt.ReactCurrentOwner,
    Te = !1;
function ve(e, t, n, r) {
    t.child = e === null ? rh(t, null, n, r) : Xn(t, e.child, n, r);
}
function ac(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        $n(t, i),
        (r = Ma(e, t, n, r, o, i)),
        (n = Aa()),
        e !== null && !Te
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              St(e, t, i))
            : (G && n && va(t), (t.flags |= 1), ve(e, t, r, i), t.child)
    );
}
function uc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !Ua(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Eh(e, t, o, r, i))
            : ((e = Ki(n.type, null, r, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
        var s = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : Hr),
            n(s, r) && e.ref === t.ref)
        )
            return St(e, t, i);
    }
    return (
        (t.flags |= 1),
        (e = Bt(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Eh(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Hr(o, r) && e.ref === t.ref)
            if (((Te = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
                e.flags & 131072 && (Te = !0);
            else return (t.lanes = e.lanes), St(e, t, i);
    }
    return Pl(e, t, n, r, i);
}
function Lh(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                U(_n, Me),
                (Me |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    U(_n, Me),
                    (Me |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                U(_n, Me),
                (Me |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            U(_n, Me),
            (Me |= r);
    return ve(e, t, i, n), t.child;
}
function Vh(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function Pl(e, t, n, r, i) {
    var o = Le(n) ? dn : me.current;
    return (
        (o = Qn(t, o)),
        $n(t, i),
        (n = Ma(e, t, n, r, o, i)),
        (r = Aa()),
        e !== null && !Te
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              St(e, t, i))
            : (G && r && va(t), (t.flags |= 1), ve(e, t, n, i), t.child)
    );
}
function cc(e, t, n, r, i) {
    if (Le(n)) {
        var o = !0;
        lo(t);
    } else o = !1;
    if (($n(t, i), t.stateNode === null))
        Wi(e, t), th(t, n, r), Sl(t, n, r, i), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null
            ? (u = We(u))
            : ((u = Le(n) ? dn : me.current), (u = Qn(t, u)));
        var c = n.getDerivedStateFromProps,
            f =
                typeof c == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((l !== r || a !== u) && tc(t, s, r, u)),
            (Lt = !1);
        var d = t.memoizedState;
        (s.state = d),
            ho(t, r, s, i),
            (a = t.memoizedState),
            l !== r || d !== a || Ee.current || Lt
                ? (typeof c == "function" &&
                      (wl(t, n, c, r), (a = t.memoizedState)),
                  (l = Lt || ec(t, n, l, r, d, a, u))
                      ? (f ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = a)),
                  (s.props = r),
                  (s.state = a),
                  (s.context = u),
                  (r = l))
                : (typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (s = t.stateNode),
            bd(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : Ke(t.type, l)),
            (s.props = u),
            (f = t.pendingProps),
            (d = s.context),
            (a = n.contextType),
            typeof a == "object" && a !== null
                ? (a = We(a))
                : ((a = Le(n) ? dn : me.current), (a = Qn(t, a)));
        var m = n.getDerivedStateFromProps;
        (c =
            typeof m == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((l !== f || d !== a) && tc(t, s, r, a)),
            (Lt = !1),
            (d = t.memoizedState),
            (s.state = d),
            ho(t, r, s, i);
        var y = t.memoizedState;
        l !== f || d !== y || Ee.current || Lt
            ? (typeof m == "function" &&
                  (wl(t, n, m, r), (y = t.memoizedState)),
              (u = Lt || ec(t, n, u, r, d, y, a) || !1)
                  ? (c ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" &&
                            s.componentWillUpdate(r, y, a),
                        typeof s.UNSAFE_componentWillUpdate == "function" &&
                            s.UNSAFE_componentWillUpdate(r, y, a)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (s.props = r),
              (s.state = y),
              (s.context = a),
              (r = u))
            : (typeof s.componentDidUpdate != "function" ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return Cl(e, t, n, r, o, i);
}
function Cl(e, t, n, r, i, o) {
    Vh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Xu(t, n, !1), St(e, t, o);
    (r = t.stateNode), (T0.current = t);
    var l =
        s && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = Xn(t, e.child, null, o)),
              (t.child = Xn(t, null, l, o)))
            : ve(e, t, l, o),
        (t.memoizedState = r.state),
        i && Xu(t, n, !0),
        t.child
    );
}
function jh(e) {
    var t = e.stateNode;
    t.pendingContext
        ? Yu(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Yu(e, t.context, !1),
        Ea(e, t.containerInfo);
}
function fc(e, t, n, r, i) {
    return Yn(), wa(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Tl = { dehydrated: null, treeContext: null, retryLane: 0 };
function El(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Mh(e, t, n) {
    var r = t.pendingProps,
        i = K.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        l;
    if (
        ((l = s) ||
            (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        l
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (i |= 1),
        U(K, i & 1),
        e === null)
    )
        return (
            vl(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = s))
                            : (o = Bo(s, r, 0, null)),
                        (e = fn(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = El(n)),
                        (t.memoizedState = Tl),
                        e)
                      : Na(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
        return E0(e, t, s, r, l, i, n);
    if (o) {
        (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
        var a = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== i
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = a),
                  (t.deletions = null))
                : ((r = Bt(i, a)),
                  (r.subtreeFlags = i.subtreeFlags & 14680064)),
            l !== null
                ? (o = Bt(l, o))
                : ((o = fn(o, s, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? El(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (o.memoizedState = s),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = Tl),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = Bt(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Na(e, t) {
    return (
        (t = Bo({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Ti(e, t, n, r) {
    return (
        r !== null && wa(r),
        Xn(t, e.child, null, n),
        (e = Na(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function E0(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Es(Error(k(422)))), Ti(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (i = t.mode),
              (r = Bo({ mode: "visible", children: r.children }, i, 0, null)),
              (o = fn(o, i, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && Xn(t, e.child, null, s),
              (t.child.memoizedState = El(s)),
              (t.memoizedState = Tl),
              o);
    if (!(t.mode & 1)) return Ti(e, t, s, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
        return (
            (r = l), (o = Error(k(419))), (r = Es(o, r, void 0)), Ti(e, t, s, r)
        );
    }
    if (((l = (s & e.childLanes) !== 0), Te || l)) {
        if (((r = ae), r !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | s) ? 0 : i),
                i !== 0 &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), wt(e, i), Je(r, e, i, -1));
        }
        return Ba(), (r = Es(Error(k(421)))), Ti(e, t, s, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = z0.bind(null, e)),
          (i._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Ae = Ot(i.nextSibling)),
          (De = t),
          (G = !0),
          (Ye = null),
          e !== null &&
              ((ze[Be++] = ht),
              (ze[Be++] = pt),
              (ze[Be++] = hn),
              (ht = e.id),
              (pt = e.overflow),
              (hn = t)),
          (t = Na(t, r.children)),
          (t.flags |= 4096),
          t);
}
function dc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), xl(e.return, t, n);
}
function Ls(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i));
}
function Ah(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((ve(e, t, r.children, n), (r = K.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && dc(e, n, t);
                else if (e.tag === 19) dc(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; )
                    (e = n.alternate),
                        e !== null && po(e) === null && (i = n),
                        (n = n.sibling);
                (n = i),
                    n === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    Ls(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && po(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Ls(t, !0, n, null, o);
                break;
            case "together":
                Ls(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Wi(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (mn |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (
            e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Bt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function L0(e, t, n) {
    switch (t.tag) {
        case 3:
            jh(t), Yn();
            break;
        case 5:
            ih(t);
            break;
        case 1:
            Le(t.type) && lo(t);
            break;
        case 4:
            Ea(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            U(co, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (U(K, K.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Mh(e, t, n)
                    : (U(K, K.current & 1),
                      (e = St(e, t, n)),
                      e !== null ? e.sibling : null);
            U(K, K.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Ah(e, t, n);
                t.flags |= 128;
            }
            if (
                ((i = t.memoizedState),
                i !== null &&
                    ((i.rendering = null),
                    (i.tail = null),
                    (i.lastEffect = null)),
                U(K, K.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Lh(e, t, n);
    }
    return St(e, t, n);
}
var Dh, Ll, Rh, Nh;
Dh = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Ll = function () {};
Rh = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), an(at.current);
        var o = null;
        switch (n) {
            case "input":
                (i = Xs(e, i)), (r = Xs(e, r)), (o = []);
                break;
            case "select":
                (i = X({}, i, { value: void 0 })),
                    (r = X({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (i = qs(e, i)), (r = qs(e, r)), (o = []);
                break;
            default:
                typeof i.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = oo);
        }
        el(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (_r.hasOwnProperty(u)
                            ? o || (o = [])
                            : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (
                ((l = i != null ? i[u] : void 0),
                r.hasOwnProperty(u) && a !== l && (a != null || l != null))
            )
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) ||
                                (a && a.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ""));
                        for (s in a)
                            a.hasOwnProperty(s) &&
                                l[s] !== a[s] &&
                                (n || (n = {}), (n[s] = a[s]));
                    } else n || (o || (o = []), o.push(u, n)), (n = a);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((a = a ? a.__html : void 0),
                          (l = l ? l.__html : void 0),
                          a != null && l !== a && (o = o || []).push(u, a))
                        : u === "children"
                        ? (typeof a != "string" && typeof a != "number") ||
                          (o = o || []).push(u, "" + a)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          (_r.hasOwnProperty(u)
                              ? (a != null &&
                                    u === "onScroll" &&
                                    H("scroll", e),
                                o || l === a || (o = []))
                              : (o = o || []).push(u, a));
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
Nh = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function cr(e, t) {
    if (!G)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function he(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function V0(e, t, n) {
    var r = t.pendingProps;
    switch ((xa(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return he(t), null;
        case 1:
            return Le(t.type) && so(), he(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Zn(),
                W(Ee),
                W(me),
                Va(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Pi(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ye !== null && (_l(Ye), (Ye = null)))),
                Ll(e, t),
                he(t),
                null
            );
        case 5:
            La(t);
            var i = an(Qr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Rh(e, t, n, r, i),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return he(t), null;
                }
                if (((e = an(at.current)), Pi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[st] = t), (r[Gr] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < vr.length; i++) H(vr[i], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            Su(r, o), H("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                H("invalid", r);
                            break;
                        case "textarea":
                            Pu(r, o), H("invalid", r);
                    }
                    el(n, o), (i = null);
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var l = o[s];
                            s === "children"
                                ? typeof l == "string"
                                    ? r.textContent !== l &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          ki(r.textContent, l, e),
                                      (i = ["children", l]))
                                    : typeof l == "number" &&
                                      r.textContent !== "" + l &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          ki(r.textContent, l, e),
                                      (i = ["children", "" + l]))
                                : _r.hasOwnProperty(s) &&
                                  l != null &&
                                  s === "onScroll" &&
                                  H("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            pi(r), ku(r, o, !0);
                            break;
                        case "textarea":
                            pi(r), Cu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = oo);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ld(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === "select" &&
                                      ((s = e),
                                      r.multiple
                                          ? (s.multiple = !0)
                                          : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[st] = t),
                        (e[Gr] = r),
                        Dh(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = tl(n, r)), n)) {
                            case "dialog":
                                H("cancel", e), H("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < vr.length; i++) H(vr[i], e);
                                i = r;
                                break;
                            case "source":
                                H("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", e), H("load", e), (i = r);
                                break;
                            case "details":
                                H("toggle", e), (i = r);
                                break;
                            case "input":
                                Su(e, r), (i = Xs(e, r)), H("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (i = X({}, r, { value: void 0 })),
                                    H("invalid", e);
                                break;
                            case "textarea":
                                Pu(e, r), (i = qs(e, r)), H("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        el(n, i), (l = i);
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var a = l[o];
                                o === "style"
                                    ? cd(e, a)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((a = a ? a.__html : void 0),
                                      a != null && ad(e, a))
                                    : o === "children"
                                    ? typeof a == "string"
                                        ? (n !== "textarea" || a !== "") &&
                                          Or(e, a)
                                        : typeof a == "number" && Or(e, "" + a)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (_r.hasOwnProperty(o)
                                          ? a != null &&
                                            o === "onScroll" &&
                                            H("scroll", e)
                                          : a != null && ia(e, o, a, s));
                            }
                        switch (n) {
                            case "input":
                                pi(e), ku(e, r, !1);
                                break;
                            case "textarea":
                                pi(e), Cu(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + Wt(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? Bn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          Bn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof i.onClick == "function" &&
                                    (e.onclick = oo);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return he(t), null;
        case 6:
            if (e && t.stateNode != null) Nh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(k(166));
                if (((n = an(Qr.current)), an(at.current), Pi(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[st] = t),
                        (o = r.nodeValue !== n) && ((e = De), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                ki(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    ki(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (n.nodeType === 9
                        ? n
                        : n.ownerDocument
                    ).createTextNode(r)),
                        (r[st] = t),
                        (t.stateNode = r);
            }
            return he(t), null;
        case 13:
            if (
                (W(K),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (G && Ae !== null && t.mode & 1 && !(t.flags & 128))
                    Jd(), Yn(), (t.flags |= 98560), (o = !1);
                else if (((o = Pi(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(k(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(k(317));
                        o[st] = t;
                    } else
                        Yn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    he(t), (o = !1);
                } else Ye !== null && (_l(Ye), (Ye = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || K.current & 1
                              ? se === 0 && (se = 3)
                              : Ba())),
                  t.updateQueue !== null && (t.flags |= 4),
                  he(t),
                  null);
        case 4:
            return (
                Zn(),
                Ll(e, t),
                e === null && Wr(t.stateNode.containerInfo),
                he(t),
                null
            );
        case 10:
            return Pa(t.type._context), he(t), null;
        case 17:
            return Le(t.type) && so(), he(t), null;
        case 19:
            if ((W(K), (o = t.memoizedState), o === null)) return he(t), null;
            if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
                if (r) cr(o, !1);
                else {
                    if (se !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = po(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        cr(o, !1),
                                        r = s.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (s = o.alternate),
                                        s === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = s.childLanes),
                                              (o.lanes = s.lanes),
                                              (o.child = s.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  s.memoizedProps),
                                              (o.memoizedState =
                                                  s.memoizedState),
                                              (o.updateQueue = s.updateQueue),
                                              (o.type = s.type),
                                              (e = s.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return U(K, (K.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        ne() > qn &&
                        ((t.flags |= 128),
                        (r = !0),
                        cr(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = po(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            cr(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !s.alternate &&
                                !G)
                        )
                            return he(t), null;
                    } else
                        2 * ne() - o.renderingStartTime > qn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            cr(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = o.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (o.last = s));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = ne()),
                  (t.sibling = null),
                  (n = K.current),
                  U(K, r ? (n & 1) | 2 : n & 1),
                  t)
                : (he(t), null);
        case 22:
        case 23:
            return (
                za(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? Me & 1073741824 &&
                      (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : he(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(k(156, t.tag));
}
function j0(e, t) {
    switch ((xa(t), t.tag)) {
        case 1:
            return (
                Le(t.type) && so(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Zn(),
                W(Ee),
                W(me),
                Va(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return La(t), null;
        case 13:
            if (
                (W(K),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(k(340));
                Yn();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return W(K), null;
        case 4:
            return Zn(), null;
        case 10:
            return Pa(t.type._context), null;
        case 22:
        case 23:
            return za(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Ei = !1,
    pe = !1,
    M0 = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;
function Nn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Z(e, t, r);
            }
        else n.current = null;
}
function Vl(e, t, n) {
    try {
        n();
    } catch (r) {
        Z(e, t, r);
    }
}
var hc = !1;
function A0(e, t) {
    if (((fl = no), (e = Id()), ya(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        l = -1,
                        a = -1,
                        u = 0,
                        c = 0,
                        f = e,
                        d = null;
                    t: for (;;) {
                        for (
                            var m;
                            f !== n ||
                                (i !== 0 && f.nodeType !== 3) ||
                                (l = s + i),
                                f !== o ||
                                    (r !== 0 && f.nodeType !== 3) ||
                                    (a = s + r),
                                f.nodeType === 3 && (s += f.nodeValue.length),
                                (m = f.firstChild) !== null;

                        )
                            (d = f), (f = m);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (d === n && ++u === i && (l = s),
                                d === o && ++c === r && (a = s),
                                (m = f.nextSibling) !== null)
                            )
                                break;
                            (f = d), (d = f.parentNode);
                        }
                        f = m;
                    }
                    n = l === -1 || a === -1 ? null : { start: l, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        dl = { focusedElem: e, selectionRange: n }, no = !1, V = t;
        V !== null;

    )
        if (
            ((t = V),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (V = e);
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var x = y.memoizedProps,
                                        E = y.memoizedState,
                                        g = t.stateNode,
                                        h = g.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? x
                                                : Ke(t.type, x),
                                            E
                                        );
                                    g.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var p = t.stateNode.containerInfo;
                                p.nodeType === 1
                                    ? (p.textContent = "")
                                    : p.nodeType === 9 &&
                                      p.documentElement &&
                                      p.removeChild(p.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(k(163));
                        }
                } catch (w) {
                    Z(t, t.return, w);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (V = e);
                    break;
                }
                V = t.return;
            }
    return (y = hc), (hc = !1), y;
}
function Er(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), o !== void 0 && Vl(t, n, o);
            }
            i = i.next;
        } while (i !== r);
    }
}
function Io(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function jl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function _h(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), _h(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[st],
                delete t[Gr],
                delete t[ml],
                delete t[h0],
                delete t[p0])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Oh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pc(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Oh(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Ml(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = oo));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Ml(e, t, n), e = e.sibling; e !== null; )
            Ml(e, t, n), (e = e.sibling);
}
function Al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Al(e, t, n), e = e.sibling; e !== null; )
            Al(e, t, n), (e = e.sibling);
}
var ue = null,
    Qe = !1;
function Pt(e, t, n) {
    for (n = n.child; n !== null; ) Fh(e, t, n), (n = n.sibling);
}
function Fh(e, t, n) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
        try {
            lt.onCommitFiberUnmount(Mo, n);
        } catch {}
    switch (n.tag) {
        case 5:
            pe || Nn(n, t);
        case 6:
            var r = ue,
                i = Qe;
            (ue = null),
                Pt(e, t, n),
                (ue = r),
                (Qe = i),
                ue !== null &&
                    (Qe
                        ? ((e = ue),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : ue.removeChild(n.stateNode));
            break;
        case 18:
            ue !== null &&
                (Qe
                    ? ((e = ue),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? ws(e.parentNode, n)
                          : e.nodeType === 1 && ws(e, n),
                      Br(e))
                    : ws(ue, n.stateNode));
            break;
        case 4:
            (r = ue),
                (i = Qe),
                (ue = n.stateNode.containerInfo),
                (Qe = !0),
                Pt(e, t, n),
                (ue = r),
                (Qe = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !pe &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    (o = o.tag),
                        s !== void 0 && (o & 2 || o & 4) && Vl(n, t, s),
                        (i = i.next);
                } while (i !== r);
            }
            Pt(e, t, n);
            break;
        case 1:
            if (
                !pe &&
                (Nn(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (l) {
                    Z(n, t, l);
                }
            Pt(e, t, n);
            break;
        case 21:
            Pt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((pe = (r = pe) || n.memoizedState !== null),
                  Pt(e, t, n),
                  (pe = r))
                : Pt(e, t, n);
            break;
        default:
            Pt(e, t, n);
    }
}
function mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new M0()),
            t.forEach(function (r) {
                var i = B0.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Ge(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (ue = l.stateNode), (Qe = !1);
                            break e;
                        case 3:
                            (ue = l.stateNode.containerInfo), (Qe = !0);
                            break e;
                        case 4:
                            (ue = l.stateNode.containerInfo), (Qe = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (ue === null) throw Error(k(160));
                Fh(o, s, i), (ue = null), (Qe = !1);
                var a = i.alternate;
                a !== null && (a.return = null), (i.return = null);
            } catch (u) {
                Z(i, t, u);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Ih(t, e), (t = t.sibling);
}
function Ih(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ge(t, e), nt(e), r & 4)) {
                try {
                    Er(3, e, e.return), Io(3, e);
                } catch (x) {
                    Z(e, e.return, x);
                }
                try {
                    Er(5, e, e.return);
                } catch (x) {
                    Z(e, e.return, x);
                }
            }
            break;
        case 1:
            Ge(t, e), nt(e), r & 512 && n !== null && Nn(n, n.return);
            break;
        case 5:
            if (
                (Ge(t, e),
                nt(e),
                r & 512 && n !== null && Nn(n, n.return),
                e.flags & 32)
            ) {
                var i = e.stateNode;
                try {
                    Or(i, "");
                } catch (x) {
                    Z(e, e.return, x);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    l = e.type,
                    a = e.updateQueue;
                if (((e.updateQueue = null), a !== null))
                    try {
                        l === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            od(i, o),
                            tl(l, s);
                        var u = tl(l, o);
                        for (s = 0; s < a.length; s += 2) {
                            var c = a[s],
                                f = a[s + 1];
                            c === "style"
                                ? cd(i, f)
                                : c === "dangerouslySetInnerHTML"
                                ? ad(i, f)
                                : c === "children"
                                ? Or(i, f)
                                : ia(i, c, f, u);
                        }
                        switch (l) {
                            case "input":
                                Zs(i, o);
                                break;
                            case "textarea":
                                sd(i, o);
                                break;
                            case "select":
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var m = o.value;
                                m != null
                                    ? Bn(i, !!o.multiple, m, !1)
                                    : d !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? Bn(
                                                i,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : Bn(
                                                i,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        i[Gr] = o;
                    } catch (x) {
                        Z(e, e.return, x);
                    }
            }
            break;
        case 6:
            if ((Ge(t, e), nt(e), r & 4)) {
                if (e.stateNode === null) throw Error(k(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                    i.nodeValue = o;
                } catch (x) {
                    Z(e, e.return, x);
                }
            }
            break;
        case 3:
            if (
                (Ge(t, e),
                nt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Br(t.containerInfo);
                } catch (x) {
                    Z(e, e.return, x);
                }
            break;
        case 4:
            Ge(t, e), nt(e);
            break;
        case 13:
            Ge(t, e),
                nt(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((o = i.memoizedState !== null),
                    (i.stateNode.isHidden = o),
                    !o ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (Fa = ne())),
                r & 4 && mc(e);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((pe = (u = pe) || c), Ge(t, e), (pe = u))
                    : Ge(t, e),
                nt(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                )
                    for (V = e, c = e.child; c !== null; ) {
                        for (f = V = c; V !== null; ) {
                            switch (((d = V), (m = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Er(4, d, d.return);
                                    break;
                                case 1:
                                    Nn(d, d.return);
                                    var y = d.stateNode;
                                    if (
                                        typeof y.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (x) {
                                            Z(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    Nn(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        yc(f);
                                        continue;
                                    }
                            }
                            m !== null ? ((m.return = d), (V = m)) : yc(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                (i = f.stateNode),
                                    u
                                        ? ((o = i.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((l = f.stateNode),
                                          (a = f.memoizedProps.style),
                                          (s =
                                              a != null &&
                                              a.hasOwnProperty("display")
                                                  ? a.display
                                                  : null),
                                          (l.style.display = ud("display", s)));
                            } catch (x) {
                                Z(e, e.return, x);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u
                                    ? ""
                                    : f.memoizedProps;
                            } catch (x) {
                                Z(e, e.return, x);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) ||
                            f.memoizedState === null ||
                            f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null),
                        (f.sibling.return = f.return),
                        (f = f.sibling);
                }
            }
            break;
        case 19:
            Ge(t, e), nt(e), r & 4 && mc(e);
            break;
        case 21:
            break;
        default:
            Ge(t, e), nt(e);
    }
}
function nt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Oh(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(k(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Or(i, ""), (r.flags &= -33));
                    var o = pc(e);
                    Al(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = pc(e);
                    Ml(e, l, s);
                    break;
                default:
                    throw Error(k(161));
            }
        } catch (a) {
            Z(e, e.return, a);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function D0(e, t, n) {
    (V = e), zh(e);
}
function zh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var i = V,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Ei;
            if (!s) {
                var l = i.alternate,
                    a = (l !== null && l.memoizedState !== null) || pe;
                l = Ei;
                var u = pe;
                if (((Ei = s), (pe = a) && !u))
                    for (V = i; V !== null; )
                        (s = V),
                            (a = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? vc(i)
                                : a !== null
                                ? ((a.return = s), (V = a))
                                : vc(i);
                for (; o !== null; ) (V = o), zh(o), (o = o.sibling);
                (V = i), (Ei = l), (pe = u);
            }
            gc(e);
        } else
            i.subtreeFlags & 8772 && o !== null
                ? ((o.return = i), (V = o))
                : gc(e);
    }
}
function gc(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            pe || Io(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !pe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Ke(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && bu(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                bu(t, s, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && Br(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(k(163));
                    }
                pe || (t.flags & 512 && jl(t));
            } catch (d) {
                Z(t, t.return, d);
            }
        }
        if (t === e) {
            V = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (V = n);
            break;
        }
        V = t.return;
    }
}
function yc(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (V = n);
            break;
        }
        V = t.return;
    }
}
function vc(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Io(4, t);
                    } catch (a) {
                        Z(t, n, a);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (a) {
                            Z(t, i, a);
                        }
                    }
                    var o = t.return;
                    try {
                        jl(t);
                    } catch (a) {
                        Z(t, o, a);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        jl(t);
                    } catch (a) {
                        Z(t, s, a);
                    }
            }
        } catch (a) {
            Z(t, t.return, a);
        }
        if (t === e) {
            V = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (V = l);
            break;
        }
        V = t.return;
    }
}
var R0 = Math.ceil,
    yo = kt.ReactCurrentDispatcher,
    _a = kt.ReactCurrentOwner,
    He = kt.ReactCurrentBatchConfig,
    I = 0,
    ae = null,
    ie = null,
    ce = 0,
    Me = 0,
    _n = Yt(0),
    se = 0,
    Jr = null,
    mn = 0,
    zo = 0,
    Oa = 0,
    Lr = null,
    Ce = null,
    Fa = 0,
    qn = 1 / 0,
    ft = null,
    vo = !1,
    Dl = null,
    It = null,
    Li = !1,
    Dt = null,
    xo = 0,
    Vr = 0,
    Rl = null,
    $i = -1,
    Gi = 0;
function xe() {
    return I & 6 ? ne() : $i !== -1 ? $i : ($i = ne());
}
function zt(e) {
    return e.mode & 1
        ? I & 2 && ce !== 0
            ? ce & -ce
            : g0.transition !== null
            ? (Gi === 0 && (Gi = kd()), Gi)
            : ((e = B),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
              e)
        : 1;
}
function Je(e, t, n, r) {
    if (50 < Vr) throw ((Vr = 0), (Rl = null), Error(k(185)));
    ri(e, n, r),
        (!(I & 2) || e !== ae) &&
            (e === ae && (!(I & 2) && (zo |= n), se === 4 && Mt(e, ce)),
            Ve(e, r),
            n === 1 &&
                I === 0 &&
                !(t.mode & 1) &&
                ((qn = ne() + 500), _o && Xt()));
}
function Ve(e, t) {
    var n = e.callbackNode;
    gg(e, t);
    var r = to(e, e === ae ? ce : 0);
    if (r === 0)
        n !== null && Lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Lu(n), t === 1))
            e.tag === 0 ? m0(xc.bind(null, e)) : Yd(xc.bind(null, e)),
                f0(function () {
                    !(I & 6) && Xt();
                }),
                (n = null);
        else {
            switch (Pd(r)) {
                case 1:
                    n = ua;
                    break;
                case 4:
                    n = wd;
                    break;
                case 16:
                    n = eo;
                    break;
                case 536870912:
                    n = Sd;
                    break;
                default:
                    n = eo;
            }
            n = Qh(n, Bh.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Bh(e, t) {
    if ((($i = -1), (Gi = 0), I & 6)) throw Error(k(327));
    var n = e.callbackNode;
    if (Gn() && e.callbackNode !== n) return null;
    var r = to(e, e === ae ? ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = wo(e, r);
    else {
        t = r;
        var i = I;
        I |= 2;
        var o = Hh();
        (ae !== e || ce !== t) && ((ft = null), (qn = ne() + 500), cn(e, t));
        do
            try {
                O0();
                break;
            } catch (l) {
                Uh(e, l);
            }
        while (1);
        ka(),
            (yo.current = o),
            (I = i),
            ie !== null ? (t = 0) : ((ae = null), (ce = 0), (t = se));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((i = sl(e)), i !== 0 && ((r = i), (t = Nl(e, i)))),
            t === 1)
        )
            throw ((n = Jr), cn(e, 0), Mt(e, r), Ve(e, ne()), n);
        if (t === 6) Mt(e, r);
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) &&
                    !N0(i) &&
                    ((t = wo(e, r)),
                    t === 2 &&
                        ((o = sl(e)), o !== 0 && ((r = o), (t = Nl(e, o)))),
                    t === 1))
            )
                throw ((n = Jr), cn(e, 0), Mt(e, r), Ve(e, ne()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    nn(e, Ce, ft);
                    break;
                case 3:
                    if (
                        (Mt(e, r),
                        (r & 130023424) === r &&
                            ((t = Fa + 500 - ne()), 10 < t))
                    ) {
                        if (to(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            xe(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = pl(nn.bind(null, e, Ce, ft), t);
                        break;
                    }
                    nn(e, Ce, ft);
                    break;
                case 4:
                    if ((Mt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var s = 31 - Ze(r);
                        (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
                    }
                    if (
                        ((r = i),
                        (r = ne() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * R0(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = pl(nn.bind(null, e, Ce, ft), r);
                        break;
                    }
                    nn(e, Ce, ft);
                    break;
                case 5:
                    nn(e, Ce, ft);
                    break;
                default:
                    throw Error(k(329));
            }
        }
    }
    return Ve(e, ne()), e.callbackNode === n ? Bh.bind(null, e) : null;
}
function Nl(e, t) {
    var n = Lr;
    return (
        e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
        (e = wo(e, t)),
        e !== 2 && ((t = Ce), (Ce = n), t !== null && _l(t)),
        e
    );
}
function _l(e) {
    Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function N0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!qe(o(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Mt(e, t) {
    for (
        t &= ~Oa,
            t &= ~zo,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Ze(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function xc(e) {
    if (I & 6) throw Error(k(327));
    Gn();
    var t = to(e, 0);
    if (!(t & 1)) return Ve(e, ne()), null;
    var n = wo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = sl(e);
        r !== 0 && ((t = r), (n = Nl(e, r)));
    }
    if (n === 1) throw ((n = Jr), cn(e, 0), Mt(e, t), Ve(e, ne()), n);
    if (n === 6) throw Error(k(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        nn(e, Ce, ft),
        Ve(e, ne()),
        null
    );
}
function Ia(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t);
    } finally {
        (I = n), I === 0 && ((qn = ne() + 500), _o && Xt());
    }
}
function gn(e) {
    Dt !== null && Dt.tag === 0 && !(I & 6) && Gn();
    var t = I;
    I |= 1;
    var n = He.transition,
        r = B;
    try {
        if (((He.transition = null), (B = 1), e)) return e();
    } finally {
        (B = r), (He.transition = n), (I = t), !(I & 6) && Xt();
    }
}
function za() {
    (Me = _n.current), W(_n);
}
function cn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), c0(n)), ie !== null))
        for (n = ie.return; n !== null; ) {
            var r = n;
            switch ((xa(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && so();
                    break;
                case 3:
                    Zn(), W(Ee), W(me), Va();
                    break;
                case 5:
                    La(r);
                    break;
                case 4:
                    Zn();
                    break;
                case 13:
                    W(K);
                    break;
                case 19:
                    W(K);
                    break;
                case 10:
                    Pa(r.type._context);
                    break;
                case 22:
                case 23:
                    za();
            }
            n = n.return;
        }
    if (
        ((ae = e),
        (ie = e = Bt(e.current, null)),
        (ce = Me = t),
        (se = 0),
        (Jr = null),
        (Oa = zo = mn = 0),
        (Ce = Lr = null),
        ln !== null)
    ) {
        for (t = 0; t < ln.length; t++)
            if (((n = ln[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    (o.next = i), (r.next = s);
                }
                n.pending = r;
            }
        ln = null;
    }
    return e;
}
function Uh(e, t) {
    do {
        var n = ie;
        try {
            if ((ka(), (Ui.current = go), mo)) {
                for (var r = Y.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                mo = !1;
            }
            if (
                ((pn = 0),
                (le = oe = Y = null),
                (Tr = !1),
                (Yr = 0),
                (_a.current = null),
                n === null || n.return === null)
            ) {
                (se = 1), (Jr = t), (ie = null);
                break;
            }
            e: {
                var o = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (
                    ((t = ce),
                    (l.flags |= 32768),
                    a !== null &&
                        typeof a == "object" &&
                        typeof a.then == "function")
                ) {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null),
                              (c.memoizedState = null));
                    }
                    var m = sc(s);
                    if (m !== null) {
                        (m.flags &= -257),
                            lc(m, s, l, o, t),
                            m.mode & 1 && oc(o, u, t),
                            (t = m),
                            (a = u);
                        var y = t.updateQueue;
                        if (y === null) {
                            var x = new Set();
                            x.add(a), (t.updateQueue = x);
                        } else y.add(a);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            oc(o, u, t), Ba();
                            break e;
                        }
                        a = Error(k(426));
                    }
                } else if (G && l.mode & 1) {
                    var E = sc(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                            lc(E, s, l, o, t),
                            wa(Jn(a, l));
                        break e;
                    }
                }
                (o = a = Jn(a, l)),
                    se !== 4 && (se = 2),
                    Lr === null ? (Lr = [o]) : Lr.push(o),
                    (o = s);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var g = Ch(o, a, t);
                            qu(o, g);
                            break e;
                        case 1:
                            l = a;
                            var h = o.type,
                                p = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof h.getDerivedStateFromError ==
                                    "function" ||
                                    (p !== null &&
                                        typeof p.componentDidCatch ==
                                            "function" &&
                                        (It === null || !It.has(p))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var w = Th(o, l, t);
                                qu(o, w);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            $h(n);
        } catch (S) {
            (t = S), ie === n && n !== null && (ie = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Hh() {
    var e = yo.current;
    return (yo.current = go), e === null ? go : e;
}
function Ba() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
        ae === null || (!(mn & 268435455) && !(zo & 268435455)) || Mt(ae, ce);
}
function wo(e, t) {
    var n = I;
    I |= 2;
    var r = Hh();
    (ae !== e || ce !== t) && ((ft = null), cn(e, t));
    do
        try {
            _0();
            break;
        } catch (i) {
            Uh(e, i);
        }
    while (1);
    if ((ka(), (I = n), (yo.current = r), ie !== null)) throw Error(k(261));
    return (ae = null), (ce = 0), se;
}
function _0() {
    for (; ie !== null; ) Wh(ie);
}
function O0() {
    for (; ie !== null && !lg(); ) Wh(ie);
}
function Wh(e) {
    var t = Kh(e.alternate, e, Me);
    (e.memoizedProps = e.pendingProps),
        t === null ? $h(e) : (ie = t),
        (_a.current = null);
}
function $h(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = j0(n, t)), n !== null)) {
                (n.flags &= 32767), (ie = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (se = 6), (ie = null);
                return;
            }
        } else if (((n = V0(n, t, Me)), n !== null)) {
            ie = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            ie = t;
            return;
        }
        ie = t = e;
    } while (t !== null);
    se === 0 && (se = 5);
}
function nn(e, t, n) {
    var r = B,
        i = He.transition;
    try {
        (He.transition = null), (B = 1), F0(e, t, n, r);
    } finally {
        (He.transition = i), (B = r);
    }
    return null;
}
function F0(e, t, n, r) {
    do Gn();
    while (Dt !== null);
    if (I & 6) throw Error(k(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(k(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (yg(e, o),
        e === ae && ((ie = ae = null), (ce = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Li ||
            ((Li = !0),
            Qh(eo, function () {
                return Gn(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = He.transition), (He.transition = null);
        var s = B;
        B = 1;
        var l = I;
        (I |= 4),
            (_a.current = null),
            A0(e, n),
            Ih(n, e),
            r0(dl),
            (no = !!fl),
            (dl = fl = null),
            (e.current = n),
            D0(n),
            ag(),
            (I = l),
            (B = s),
            (He.transition = o);
    } else e.current = n;
    if (
        (Li && ((Li = !1), (Dt = e), (xo = i)),
        (o = e.pendingLanes),
        o === 0 && (It = null),
        fg(n.stateNode),
        Ve(e, ne()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (i = t[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest });
    if (vo) throw ((vo = !1), (e = Dl), (Dl = null), e);
    return (
        xo & 1 && e.tag !== 0 && Gn(),
        (o = e.pendingLanes),
        o & 1 ? (e === Rl ? Vr++ : ((Vr = 0), (Rl = e))) : (Vr = 0),
        Xt(),
        null
    );
}
function Gn() {
    if (Dt !== null) {
        var e = Pd(xo),
            t = He.transition,
            n = B;
        try {
            if (((He.transition = null), (B = 16 > e ? 16 : e), Dt === null))
                var r = !1;
            else {
                if (((e = Dt), (Dt = null), (xo = 0), I & 6))
                    throw Error(k(331));
                var i = I;
                for (I |= 4, V = e.current; V !== null; ) {
                    var o = V,
                        s = o.child;
                    if (V.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Er(8, c, o);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (V = f);
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var d = c.sibling,
                                                m = c.return;
                                            if ((_h(c), c === u)) {
                                                V = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = m), (V = d);
                                                break;
                                            }
                                            V = m;
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var x = y.child;
                                if (x !== null) {
                                    y.child = null;
                                    do {
                                        var E = x.sibling;
                                        (x.sibling = null), (x = E);
                                    } while (x !== null);
                                }
                            }
                            V = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        (s.return = o), (V = s);
                    else
                        e: for (; V !== null; ) {
                            if (((o = V), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Er(9, o, o.return);
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                (g.return = o.return), (V = g);
                                break e;
                            }
                            V = o.return;
                        }
                }
                var h = e.current;
                for (V = h; V !== null; ) {
                    s = V;
                    var p = s.child;
                    if (s.subtreeFlags & 2064 && p !== null)
                        (p.return = s), (V = p);
                    else
                        e: for (s = h; V !== null; ) {
                            if (((l = V), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Io(9, l);
                                    }
                                } catch (S) {
                                    Z(l, l.return, S);
                                }
                            if (l === s) {
                                V = null;
                                break e;
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                (w.return = l.return), (V = w);
                                break e;
                            }
                            V = l.return;
                        }
                }
                if (
                    ((I = i),
                    Xt(),
                    lt && typeof lt.onPostCommitFiberRoot == "function")
                )
                    try {
                        lt.onPostCommitFiberRoot(Mo, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (B = n), (He.transition = t);
        }
    }
    return !1;
}
function wc(e, t, n) {
    (t = Jn(n, t)),
        (t = Ch(e, t, 1)),
        (e = Ft(e, t, 1)),
        (t = xe()),
        e !== null && (ri(e, 1, t), Ve(e, t));
}
function Z(e, t, n) {
    if (e.tag === 3) wc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                wc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (It === null || !It.has(r)))
                ) {
                    (e = Jn(n, e)),
                        (e = Th(t, e, 1)),
                        (t = Ft(t, e, 1)),
                        (e = xe()),
                        t !== null && (ri(t, 1, e), Ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function I0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = xe()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ae === e &&
            (ce & n) === n &&
            (se === 4 ||
            (se === 3 && (ce & 130023424) === ce && 500 > ne() - Fa)
                ? cn(e, 0)
                : (Oa |= n)),
        Ve(e, t);
}
function Gh(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
            : (t = 1));
    var n = xe();
    (e = wt(e, t)), e !== null && (ri(e, t, n), Ve(e, n));
}
function z0(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Gh(e, n);
}
function B0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314));
    }
    r !== null && r.delete(t), Gh(e, n);
}
var Kh;
Kh = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current) Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (Te = !1), L0(e, t, n);
            Te = !!(e.flags & 131072);
        }
    else (Te = !1), G && t.flags & 1048576 && Xd(t, uo, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Wi(e, t), (e = t.pendingProps);
            var i = Qn(t, me.current);
            $n(t, n), (i = Ma(null, t, r, e, i, n));
            var o = Aa();
            return (
                (t.flags |= 1),
                typeof i == "object" &&
                i !== null &&
                typeof i.render == "function" &&
                i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Le(r) ? ((o = !0), lo(t)) : (o = !1),
                      (t.memoizedState =
                          i.state !== null && i.state !== void 0
                              ? i.state
                              : null),
                      Ta(t),
                      (i.updater = Oo),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Sl(t, r, e, n),
                      (t = Cl(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      G && o && va(t),
                      ve(null, t, i, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Wi(e, t),
                    (e = t.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (t.type = r),
                    (i = t.tag = H0(r)),
                    (e = Ke(r, e)),
                    i)
                ) {
                    case 0:
                        t = Pl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = cc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ac(null, t, r, e, n);
                        break e;
                    case 14:
                        t = uc(null, t, r, Ke(r.type, e), n);
                        break e;
                }
                throw Error(k(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ke(r, i)),
                Pl(e, t, r, i, n)
            );
        case 1:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ke(r, i)),
                cc(e, t, r, i, n)
            );
        case 3:
            e: {
                if ((jh(t), e === null)) throw Error(k(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (i = o.element),
                    bd(e, t),
                    ho(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries:
                                s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (i = Jn(Error(k(423)), t)), (t = fc(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = Jn(Error(k(424)), t)), (t = fc(e, t, r, n, i));
                        break e;
                    } else
                        for (
                            Ae = Ot(t.stateNode.containerInfo.firstChild),
                                De = t,
                                G = !0,
                                Ye = null,
                                n = rh(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Yn(), r === i)) {
                        t = St(e, t, n);
                        break e;
                    }
                    ve(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                ih(t),
                e === null && vl(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (s = i.children),
                hl(r, i)
                    ? (s = null)
                    : o !== null && hl(r, o) && (t.flags |= 32),
                Vh(e, t),
                ve(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && vl(t), null;
        case 13:
            return Mh(e, t, n);
        case 4:
            return (
                Ea(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Xn(t, null, r, n)) : ve(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ke(r, i)),
                ac(e, t, r, i, n)
            );
        case 7:
            return ve(e, t, t.pendingProps, n), t.child;
        case 8:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (s = i.value),
                    U(co, r._currentValue),
                    (r._currentValue = s),
                    o !== null)
                )
                    if (qe(o.value, s)) {
                        if (o.children === i.children && !Ee.current) {
                            t = St(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var l = o.dependencies;
                            if (l !== null) {
                                s = o.child;
                                for (var a = l.firstContext; a !== null; ) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            (a = gt(-1, n & -n)), (a.tag = 2);
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null
                                                    ? (a.next = a)
                                                    : ((a.next = c.next),
                                                      (c.next = a)),
                                                    (u.pending = a);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (a = o.alternate),
                                            a !== null && (a.lanes |= n),
                                            xl(o.return, n, t),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (o.tag === 10)
                                s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((s = o.return), s === null))
                                    throw Error(k(341));
                                (s.lanes |= n),
                                    (l = s.alternate),
                                    l !== null && (l.lanes |= n),
                                    xl(s, n, t),
                                    (s = o.sibling);
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((o = s.sibling), o !== null)) {
                                        (o.return = s.return), (s = o);
                                        break;
                                    }
                                    s = s.return;
                                }
                            o = s;
                        }
                ve(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                $n(t, n),
                (i = We(i)),
                (r = r(i)),
                (t.flags |= 1),
                ve(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (i = Ke(r, t.pendingProps)),
                (i = Ke(r.type, i)),
                uc(e, t, r, i, n)
            );
        case 15:
            return Eh(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ke(r, i)),
                Wi(e, t),
                (t.tag = 1),
                Le(r) ? ((e = !0), lo(t)) : (e = !1),
                $n(t, n),
                th(t, r, i),
                Sl(t, r, i, n),
                Cl(null, t, r, !0, e, n)
            );
        case 19:
            return Ah(e, t, n);
        case 22:
            return Lh(e, t, n);
    }
    throw Error(k(156, t.tag));
};
function Qh(e, t) {
    return xd(e, t);
}
function U0(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ue(e, t, n, r) {
    return new U0(e, t, n, r);
}
function Ua(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function H0(e) {
    if (typeof e == "function") return Ua(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === sa)) return 11;
        if (e === la) return 14;
    }
    return 2;
}
function Bt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ue(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Ki(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Ua(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case Tn:
                return fn(n.children, i, o, t);
            case oa:
                (s = 8), (i |= 8);
                break;
            case Gs:
                return (
                    (e = Ue(12, n, t, i | 2)),
                    (e.elementType = Gs),
                    (e.lanes = o),
                    e
                );
            case Ks:
                return (
                    (e = Ue(13, n, t, i)),
                    (e.elementType = Ks),
                    (e.lanes = o),
                    e
                );
            case Qs:
                return (
                    (e = Ue(19, n, t, i)),
                    (e.elementType = Qs),
                    (e.lanes = o),
                    e
                );
            case nd:
                return Bo(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case ed:
                            s = 10;
                            break e;
                        case td:
                            s = 9;
                            break e;
                        case sa:
                            s = 11;
                            break e;
                        case la:
                            s = 14;
                            break e;
                        case Et:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(k(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Ue(s, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function fn(e, t, n, r) {
    return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Bo(e, t, n, r) {
    return (
        (e = Ue(22, e, r, t)),
        (e.elementType = nd),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Vs(e, t, n) {
    return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function js(e, t, n) {
    return (
        (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function W0(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = us(0)),
        (this.expirationTimes = us(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = us(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function Ha(e, t, n, r, i, o, s, l, a) {
    return (
        (e = new W0(e, t, n, l, a)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Ue(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Ta(o),
        e
    );
}
function $0(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Cn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Yh(e) {
    if (!e) return $t;
    e = e._reactInternals;
    e: {
        if (vn(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Le(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(k(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Le(n)) return Qd(e, n, t);
    }
    return t;
}
function Xh(e, t, n, r, i, o, s, l, a) {
    return (
        (e = Ha(n, r, !0, e, i, o, s, l, a)),
        (e.context = Yh(null)),
        (n = e.current),
        (r = xe()),
        (i = zt(n)),
        (o = gt(r, i)),
        (o.callback = t ?? null),
        Ft(n, o, i),
        (e.current.lanes = i),
        ri(e, i, r),
        Ve(e, r),
        e
    );
}
function Uo(e, t, n, r) {
    var i = t.current,
        o = xe(),
        s = zt(i);
    return (
        (n = Yh(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = gt(o, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Ft(i, t, s)),
        e !== null && (Je(e, i, s, o), Bi(e, i, s)),
        s
    );
}
function So(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Sc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Wa(e, t) {
    Sc(e, t), (e = e.alternate) && Sc(e, t);
}
function G0() {
    return null;
}
var Zh =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function $a(e) {
    this._internalRoot = e;
}
Ho.prototype.render = $a.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Uo(e, t, null, null);
};
Ho.prototype.unmount = $a.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gn(function () {
            Uo(null, e, null, null);
        }),
            (t[xt] = null);
    }
};
function Ho(e) {
    this._internalRoot = e;
}
Ho.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Ed();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
        jt.splice(n, 0, e), n === 0 && Vd(e);
    }
};
function Ga(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wo(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function kc() {}
function K0(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = So(s);
                o.call(u);
            };
        }
        var s = Xh(t, r, e, 0, null, !1, !1, "", kc);
        return (
            (e._reactRootContainer = s),
            (e[xt] = s.current),
            Wr(e.nodeType === 8 ? e.parentNode : e),
            gn(),
            s
        );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var u = So(a);
            l.call(u);
        };
    }
    var a = Ha(e, 0, !1, null, null, !1, !1, "", kc);
    return (
        (e._reactRootContainer = a),
        (e[xt] = a.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        gn(function () {
            Uo(t, a, n, r);
        }),
        a
    );
}
function $o(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function () {
                var a = So(s);
                l.call(a);
            };
        }
        Uo(t, s, e, i);
    } else s = K0(n, t, e, i, r);
    return So(s);
}
Cd = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = yr(t.pendingLanes);
                n !== 0 &&
                    (ca(t, n | 1),
                    Ve(t, ne()),
                    !(I & 6) && ((qn = ne() + 500), Xt()));
            }
            break;
        case 13:
            gn(function () {
                var r = wt(e, 1);
                if (r !== null) {
                    var i = xe();
                    Je(r, e, 1, i);
                }
            }),
                Wa(e, 1);
    }
};
fa = function (e) {
    if (e.tag === 13) {
        var t = wt(e, 134217728);
        if (t !== null) {
            var n = xe();
            Je(t, e, 134217728, n);
        }
        Wa(e, 134217728);
    }
};
Td = function (e) {
    if (e.tag === 13) {
        var t = zt(e),
            n = wt(e, t);
        if (n !== null) {
            var r = xe();
            Je(n, e, t, r);
        }
        Wa(e, t);
    }
};
Ed = function () {
    return B;
};
Ld = function (e, t) {
    var n = B;
    try {
        return (B = e), t();
    } finally {
        B = n;
    }
};
rl = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Zs(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = No(r);
                        if (!i) throw Error(k(90));
                        id(r), Zs(r, i);
                    }
                }
            }
            break;
        case "textarea":
            sd(e, n);
            break;
        case "select":
            (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
    }
};
hd = Ia;
pd = gn;
var Q0 = { usingClientEntryPoint: !1, Events: [oi, jn, No, fd, dd, Ia] },
    fr = {
        findFiberByHostInstance: sn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Y0 = {
        bundleType: fr.bundleType,
        version: fr.version,
        rendererPackageName: fr.rendererPackageName,
        rendererConfig: fr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: kt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = yd(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: fr.findFiberByHostInstance || G0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vi.isDisabled && Vi.supportsFiber)
        try {
            (Mo = Vi.inject(Y0)), (lt = Vi);
        } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q0;
_e.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ga(t)) throw Error(k(200));
    return $0(e, t, null, n);
};
_e.createRoot = function (e, t) {
    if (!Ga(e)) throw Error(k(299));
    var n = !1,
        r = "",
        i = Zh;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Ha(e, 1, !1, null, null, n, !1, r, i)),
        (e[xt] = t.current),
        Wr(e.nodeType === 8 ? e.parentNode : e),
        new $a(t)
    );
};
_e.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(k(188))
            : ((e = Object.keys(e).join(",")), Error(k(268, e)));
    return (e = yd(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
    return gn(e);
};
_e.hydrate = function (e, t, n) {
    if (!Wo(t)) throw Error(k(200));
    return $o(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
    if (!Ga(e)) throw Error(k(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        s = Zh;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Xh(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[xt] = t.current),
        Wr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ho(t);
};
_e.render = function (e, t, n) {
    if (!Wo(t)) throw Error(k(200));
    return $o(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
    if (!Wo(e)) throw Error(k(40));
    return e._reactRootContainer
        ? (gn(function () {
              $o(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[xt] = null);
              });
          }),
          !0)
        : !1;
};
_e.unstable_batchedUpdates = Ia;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Wo(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return $o(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function Jh() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jh);
        } catch (e) {
            console.error(e);
        }
}
Jh(), (Xf.exports = _e);
var X0 = Xf.exports,
    Pc = X0;
(Ws.createRoot = Pc.createRoot), (Ws.hydrateRoot = Pc.hydrateRoot);
const Go = j.createContext({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
    }),
    Ko = j.createContext({}),
    Ka = j.createContext(null),
    Qo = typeof document < "u",
    Yo = Qo ? j.useLayoutEffect : j.useEffect,
    qh = j.createContext({ strict: !1 });
function Z0(e, t, n, r) {
    const { visualElement: i } = j.useContext(Ko),
        o = j.useContext(qh),
        s = j.useContext(Ka),
        l = j.useContext(Go).reducedMotion,
        a = j.useRef();
    (r = r || o.renderer),
        !a.current &&
            r &&
            (a.current = r(e, {
                visualState: t,
                parent: i,
                props: n,
                presenceContext: s,
                blockInitialAnimation: s ? s.initial === !1 : !1,
                reducedMotionConfig: l,
            }));
    const u = a.current;
    j.useInsertionEffect(() => {
        u && u.update(n, s);
    });
    const c = j.useRef(!!window.HandoffAppearAnimations);
    return (
        Yo(() => {
            u &&
                (u.render(),
                c.current &&
                    u.animationState &&
                    u.animationState.animateChanges());
        }),
        j.useEffect(() => {
            u &&
                (u.updateFeatures(),
                !c.current &&
                    u.animationState &&
                    u.animationState.animateChanges(),
                (window.HandoffAppearAnimations = void 0),
                (c.current = !1));
        }),
        u
    );
}
function On(e) {
    return (
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "current")
    );
}
function J0(e, t, n) {
    return j.useCallback(
        (r) => {
            r && e.mount && e.mount(r),
                t && (r ? t.mount(r) : t.unmount()),
                n && (typeof n == "function" ? n(r) : On(n) && (n.current = r));
        },
        [t]
    );
}
function qr(e) {
    return typeof e == "string" || Array.isArray(e);
}
function Xo(e) {
    return typeof e == "object" && typeof e.start == "function";
}
const Qa = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
    ],
    Ya = ["initial", ...Qa];
function Zo(e) {
    return Xo(e.animate) || Ya.some((t) => qr(e[t]));
}
function bh(e) {
    return !!(Zo(e) || e.variants);
}
function q0(e, t) {
    if (Zo(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || qr(n) ? n : void 0,
            animate: qr(r) ? r : void 0,
        };
    }
    return e.inherit !== !1 ? t : {};
}
function b0(e) {
    const { initial: t, animate: n } = q0(e, j.useContext(Ko));
    return j.useMemo(() => ({ initial: t, animate: n }), [Cc(t), Cc(n)]);
}
function Cc(e) {
    return Array.isArray(e) ? e.join(" ") : e;
}
const Tc = {
        animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    },
    br = {};
for (const e in Tc) br[e] = { isEnabled: (t) => Tc[e].some((n) => !!t[n]) };
function ey(e) {
    for (const t in e) br[t] = { ...br[t], ...e[t] };
}
const ep = j.createContext({}),
    tp = j.createContext({}),
    ty = Symbol.for("motionComponentSymbol");
function ny({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i,
}) {
    e && ey(e);
    function o(l, a) {
        let u;
        const c = { ...j.useContext(Go), ...l, layoutId: ry(l) },
            { isStatic: f } = c,
            d = b0(l),
            m = r(l, f);
        if (!f && Qo) {
            d.visualElement = Z0(i, m, c, t);
            const y = j.useContext(tp),
                x = j.useContext(qh).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, x, e, y));
        }
        return j.createElement(
            Ko.Provider,
            { value: d },
            u && d.visualElement
                ? j.createElement(u, { visualElement: d.visualElement, ...c })
                : null,
            n(i, l, J0(m, d.visualElement, a), m, f, d.visualElement)
        );
    }
    const s = j.forwardRef(o);
    return (s[ty] = i), s;
}
function ry({ layoutId: e }) {
    const t = j.useContext(ep).id;
    return t && e !== void 0 ? t + "-" + e : e;
}
function iy(e) {
    function t(r, i = {}) {
        return ny(e(r, i));
    }
    if (typeof Proxy > "u") return t;
    const n = new Map();
    return new Proxy(t, {
        get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
    });
}
const oy = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];
function Xa(e) {
    return typeof e != "string" || e.includes("-")
        ? !1
        : !!(oy.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ko = {};
function sy(e) {
    Object.assign(ko, e);
}
const li = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
    ],
    xn = new Set(li);
function np(e, { layout: t, layoutId: n }) {
    return (
        xn.has(e) ||
        e.startsWith("origin") ||
        ((t || n !== void 0) && (!!ko[e] || e === "opacity"))
    );
}
const ge = (e) => !!(e && e.getVelocity),
    ly = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
    },
    ay = li.length;
function uy(
    e,
    { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
    r,
    i
) {
    let o = "";
    for (let s = 0; s < ay; s++) {
        const l = li[s];
        if (e[l] !== void 0) {
            const a = ly[l] || l;
            o += `${a}(${e[l]}) `;
        }
    }
    return (
        t && !e.z && (o += "translateZ(0)"),
        (o = o.trim()),
        i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
        o
    );
}
const rp = (e) => (t) => typeof t == "string" && t.startsWith(e),
    ip = rp("--"),
    Ol = rp("var(--"),
    cy = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    fy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    Gt = (e, t, n) => Math.min(Math.max(n, e), t),
    wn = {
        test: (e) => typeof e == "number",
        parse: parseFloat,
        transform: (e) => e,
    },
    jr = { ...wn, transform: (e) => Gt(0, 1, e) },
    ji = { ...wn, default: 1 },
    Mr = (e) => Math.round(e * 1e5) / 1e5,
    Jo = /(-)?([\d]*\.?[\d])+/g,
    op = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    dy = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ai(e) {
    return typeof e == "string";
}
const ui = (e) => ({
        test: (t) => ai(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
    }),
    Ct = ui("deg"),
    ut = ui("%"),
    A = ui("px"),
    hy = ui("vh"),
    py = ui("vw"),
    Ec = {
        ...ut,
        parse: (e) => ut.parse(e) / 100,
        transform: (e) => ut.transform(e * 100),
    },
    Lc = { ...wn, transform: Math.round },
    sp = {
        borderWidth: A,
        borderTopWidth: A,
        borderRightWidth: A,
        borderBottomWidth: A,
        borderLeftWidth: A,
        borderRadius: A,
        radius: A,
        borderTopLeftRadius: A,
        borderTopRightRadius: A,
        borderBottomRightRadius: A,
        borderBottomLeftRadius: A,
        width: A,
        maxWidth: A,
        height: A,
        maxHeight: A,
        size: A,
        top: A,
        right: A,
        bottom: A,
        left: A,
        padding: A,
        paddingTop: A,
        paddingRight: A,
        paddingBottom: A,
        paddingLeft: A,
        margin: A,
        marginTop: A,
        marginRight: A,
        marginBottom: A,
        marginLeft: A,
        rotate: Ct,
        rotateX: Ct,
        rotateY: Ct,
        rotateZ: Ct,
        scale: ji,
        scaleX: ji,
        scaleY: ji,
        scaleZ: ji,
        skew: Ct,
        skewX: Ct,
        skewY: Ct,
        distance: A,
        translateX: A,
        translateY: A,
        translateZ: A,
        x: A,
        y: A,
        z: A,
        perspective: A,
        transformPerspective: A,
        opacity: jr,
        originX: Ec,
        originY: Ec,
        originZ: A,
        zIndex: Lc,
        fillOpacity: jr,
        strokeOpacity: jr,
        numOctaves: Lc,
    };
function Za(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: l } = e;
    let a = !1,
        u = !1,
        c = !0;
    for (const f in t) {
        const d = t[f];
        if (ip(f)) {
            o[f] = d;
            continue;
        }
        const m = sp[f],
            y = fy(d, m);
        if (xn.has(f)) {
            if (((a = !0), (s[f] = y), !c)) continue;
            d !== (m.default || 0) && (c = !1);
        } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
    }
    if (
        (t.transform ||
            (a || r
                ? (i.transform = uy(e.transform, n, c, r))
                : i.transform && (i.transform = "none")),
        u)
    ) {
        const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
        i.transformOrigin = `${f} ${d} ${m}`;
    }
}
const Ja = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function lp(e, t, n) {
    for (const r in t) !ge(t[r]) && !np(r, n) && (e[r] = t[r]);
}
function my({ transformTemplate: e }, t, n) {
    return j.useMemo(() => {
        const r = Ja();
        return (
            Za(r, t, { enableHardwareAcceleration: !n }, e),
            Object.assign({}, r.vars, r.style)
        );
    }, [t]);
}
function gy(e, t, n) {
    const r = e.style || {},
        i = {};
    return (
        lp(i, r, e),
        Object.assign(i, my(e, t, n)),
        e.transformValues ? e.transformValues(i) : i
    );
}
function yy(e, t, n) {
    const r = {},
        i = gy(e, t, n);
    return (
        e.drag &&
            e.dragListener !== !1 &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
                e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
        e.tabIndex === void 0 &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (r.tabIndex = 0),
        (r.style = i),
        r
    );
}
const vy = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "ignoreStrict",
    "viewport",
]);
function Po(e) {
    return (
        e.startsWith("while") ||
        (e.startsWith("drag") && e !== "draggable") ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        vy.has(e)
    );
}
let ap = (e) => !Po(e);
function xy(e) {
    e && (ap = (t) => (t.startsWith("on") ? !Po(t) : e(t)));
}
try {
    xy(require("@emotion/is-prop-valid").default);
} catch {}
function wy(e, t, n) {
    const r = {};
    for (const i in e)
        (i === "values" && typeof e.values == "object") ||
            ((ap(i) ||
                (n === !0 && Po(i)) ||
                (!t && !Po(i)) ||
                (e.draggable && i.startsWith("onDrag"))) &&
                (r[i] = e[i]));
    return r;
}
function Vc(e, t, n) {
    return typeof e == "string" ? e : A.transform(t + n * e);
}
function Sy(e, t, n) {
    const r = Vc(t, e.x, e.width),
        i = Vc(n, e.y, e.height);
    return `${r} ${i}`;
}
const ky = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Py = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Cy(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? ky : Py;
    e[o.offset] = A.transform(-r);
    const s = A.transform(t),
        l = A.transform(n);
    e[o.array] = `${s} ${l}`;
}
function qa(
    e,
    {
        attrX: t,
        attrY: n,
        attrScale: r,
        originX: i,
        originY: o,
        pathLength: s,
        pathSpacing: l = 1,
        pathOffset: a = 0,
        ...u
    },
    c,
    f,
    d
) {
    if ((Za(e, u, c, d), f)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: m, style: y, dimensions: x } = e;
    m.transform && (x && (y.transform = m.transform), delete m.transform),
        x &&
            (i !== void 0 || o !== void 0 || y.transform) &&
            (y.transformOrigin = Sy(
                x,
                i !== void 0 ? i : 0.5,
                o !== void 0 ? o : 0.5
            )),
        t !== void 0 && (m.x = t),
        n !== void 0 && (m.y = n),
        r !== void 0 && (m.scale = r),
        s !== void 0 && Cy(m, s, l, a, !1);
}
const up = () => ({ ...Ja(), attrs: {} }),
    ba = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Ty(e, t, n, r) {
    const i = j.useMemo(() => {
        const o = up();
        return (
            qa(
                o,
                t,
                { enableHardwareAcceleration: !1 },
                ba(r),
                e.transformTemplate
            ),
            { ...o.attrs, style: { ...o.style } }
        );
    }, [t]);
    if (e.style) {
        const o = {};
        lp(o, e.style, e), (i.style = { ...o, ...i.style });
    }
    return i;
}
function Ey(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
        const a = (Xa(n) ? Ty : yy)(r, o, s, n),
            c = { ...wy(r, typeof n == "string", e), ...a, ref: i },
            { children: f } = r,
            d = j.useMemo(() => (ge(f) ? f.get() : f), [f]);
        return j.createElement(n, { ...c, children: d });
    };
}
const eu = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function cp(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o]);
}
const fp = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);
function dp(e, t, n, r) {
    cp(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(fp.has(i) ? i : eu(i), t.attrs[i]);
}
function tu(e, t) {
    const { style: n } = e,
        r = {};
    for (const i in n)
        (ge(n[i]) || (t.style && ge(t.style[i])) || np(i, e)) && (r[i] = n[i]);
    return r;
}
function hp(e, t) {
    const n = tu(e, t);
    for (const r in e)
        if (ge(e[r]) || ge(t[r])) {
            const i =
                li.indexOf(r) !== -1
                    ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                    : r;
            n[i] = e[r];
        }
    return n;
}
function nu(e, t, n, r = {}, i = {}) {
    return (
        typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
        typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
        t
    );
}
function qo(e) {
    const t = j.useRef(null);
    return t.current === null && (t.current = e()), t.current;
}
const Co = (e) => Array.isArray(e),
    Ly = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    Vy = (e) => (Co(e) ? e[e.length - 1] || 0 : e);
function Qi(e) {
    const t = ge(e) ? e.get() : e;
    return Ly(t) ? t.toValue() : t;
}
function jy(
    { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
    r,
    i,
    o
) {
    const s = { latestValues: My(r, i, o, e), renderState: t() };
    return n && (s.mount = (l) => n(r, l, s)), s;
}
const pp = (e) => (t, n) => {
    const r = j.useContext(Ko),
        i = j.useContext(Ka),
        o = () => jy(e, t, r, i);
    return n ? o() : qo(o);
};
function My(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const d in o) i[d] = Qi(o[d]);
    let { initial: s, animate: l } = e;
    const a = Zo(e),
        u = bh(e);
    t &&
        u &&
        !a &&
        e.inherit !== !1 &&
        (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? l : s;
    return (
        f &&
            typeof f != "boolean" &&
            !Xo(f) &&
            (Array.isArray(f) ? f : [f]).forEach((m) => {
                const y = nu(e, m);
                if (!y) return;
                const { transitionEnd: x, transition: E, ...g } = y;
                for (const h in g) {
                    let p = g[h];
                    if (Array.isArray(p)) {
                        const w = c ? p.length - 1 : 0;
                        p = p[w];
                    }
                    p !== null && (i[h] = p);
                }
                for (const h in x) i[h] = x[h];
            }),
        i
    );
}
const J = (e) => e;
class jc {
    constructor() {
        (this.order = []), (this.scheduled = new Set());
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
    }
    clear() {
        (this.order.length = 0), this.scheduled.clear();
    }
}
function Ay(e) {
    let t = new jc(),
        n = new jc(),
        r = 0,
        i = !1,
        o = !1;
    const s = new WeakSet(),
        l = {
            schedule: (a, u = !1, c = !1) => {
                const f = c && i,
                    d = f ? t : n;
                return (
                    u && s.add(a), d.add(a) && f && i && (r = t.order.length), a
                );
            },
            cancel: (a) => {
                n.remove(a), s.delete(a);
            },
            process: (a) => {
                if (i) {
                    o = !0;
                    return;
                }
                if (
                    ((i = !0),
                    ([t, n] = [n, t]),
                    n.clear(),
                    (r = t.order.length),
                    r)
                )
                    for (let u = 0; u < r; u++) {
                        const c = t.order[u];
                        c(a), s.has(c) && (l.schedule(c), e());
                    }
                (i = !1), o && ((o = !1), l.process(a));
            },
        };
    return l;
}
const Mi = ["prepare", "read", "update", "preRender", "render", "postRender"],
    Dy = 40;
function Ry(e, t) {
    let n = !1,
        r = !0;
    const i = { delta: 0, timestamp: 0, isProcessing: !1 },
        o = Mi.reduce((f, d) => ((f[d] = Ay(() => (n = !0))), f), {}),
        s = (f) => o[f].process(i),
        l = () => {
            const f = performance.now();
            (n = !1),
                (i.delta = r
                    ? 1e3 / 60
                    : Math.max(Math.min(f - i.timestamp, Dy), 1)),
                (i.timestamp = f),
                (i.isProcessing = !0),
                Mi.forEach(s),
                (i.isProcessing = !1),
                n && t && ((r = !1), e(l));
        },
        a = () => {
            (n = !0), (r = !0), i.isProcessing || e(l);
        };
    return {
        schedule: Mi.reduce((f, d) => {
            const m = o[d];
            return (
                (f[d] = (y, x = !1, E = !1) => (n || a(), m.schedule(y, x, E))),
                f
            );
        }, {}),
        cancel: (f) => Mi.forEach((d) => o[d].cancel(f)),
        state: i,
        steps: o,
    };
}
const { schedule: z, cancel: be, state: te, steps: Ms } = Ry(
        typeof requestAnimationFrame < "u" ? requestAnimationFrame : J,
        !0
    ),
    Ny = {
        useVisualState: pp({
            scrapeMotionValuesFromProps: hp,
            createRenderState: up,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                z.read(() => {
                    try {
                        n.dimensions =
                            typeof t.getBBox == "function"
                                ? t.getBBox()
                                : t.getBoundingClientRect();
                    } catch {
                        n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                }),
                    z.render(() => {
                        qa(
                            n,
                            r,
                            { enableHardwareAcceleration: !1 },
                            ba(t.tagName),
                            e.transformTemplate
                        ),
                            dp(t, n);
                    });
            },
        }),
    },
    _y = {
        useVisualState: pp({
            scrapeMotionValuesFromProps: tu,
            createRenderState: Ja,
        }),
    };
function Oy(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
        ...(Xa(e) ? Ny : _y),
        preloadedFeatures: n,
        useRender: Ey(t),
        createVisualElement: r,
        Component: e,
    };
}
function mt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const mp = (e) =>
    e.pointerType === "mouse"
        ? typeof e.button != "number" || e.button <= 0
        : e.isPrimary !== !1;
function bo(e, t = "page") {
    return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const Fy = (e) => (t) => mp(t) && e(t, bo(t));
function yt(e, t, n, r) {
    return mt(e, t, Fy(n), r);
}
const Iy = (e, t) => (n) => t(e(n)),
    Ut = (...e) => e.reduce(Iy);
function gp(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null;
        };
        return t === null ? ((t = e), n) : !1;
    };
}
const Mc = gp("dragHorizontal"),
    Ac = gp("dragVertical");
function yp(e) {
    let t = !1;
    if (e === "y") t = Ac();
    else if (e === "x") t = Mc();
    else {
        const n = Mc(),
            r = Ac();
        n && r
            ? (t = () => {
                  n(), r();
              })
            : (n && n(), r && r());
    }
    return t;
}
function vp() {
    const e = yp(!0);
    return e ? (e(), !1) : !0;
}
class Zt {
    constructor(t) {
        (this.isMounted = !1), (this.node = t);
    }
    update() {}
}
function Dc(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        i = (o, s) => {
            if (o.type === "touch" || vp()) return;
            const l = e.getProps();
            e.animationState &&
                l.whileHover &&
                e.animationState.setActive("whileHover", t),
                l[r] && z.update(() => l[r](o, s));
        };
    return yt(e.current, n, i, { passive: !e.getProps()[r] });
}
class zy extends Zt {
    mount() {
        this.unmount = Ut(Dc(this.node, !0), Dc(this.node, !1));
    }
    unmount() {}
}
class By extends Zt {
    constructor() {
        super(...arguments), (this.isActive = !1);
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch {
            t = !0;
        }
        !t ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
    }
    onBlur() {
        !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
    }
    mount() {
        this.unmount = Ut(
            mt(this.node.current, "focus", () => this.onFocus()),
            mt(this.node.current, "blur", () => this.onBlur())
        );
    }
    unmount() {}
}
const xp = (e, t) => (t ? (e === t ? !0 : xp(e, t.parentElement)) : !1);
function As(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, bo(n));
}
class Uy extends Zt {
    constructor() {
        super(...arguments),
            (this.removeStartListeners = J),
            (this.removeEndListeners = J),
            (this.removeAccessibleListeners = J),
            (this.startPointerPress = (t, n) => {
                if ((this.removeEndListeners(), this.isPressing)) return;
                const r = this.node.getProps(),
                    o = yt(
                        window,
                        "pointerup",
                        (l, a) => {
                            if (!this.checkPressEnd()) return;
                            const {
                                onTap: u,
                                onTapCancel: c,
                            } = this.node.getProps();
                            z.update(() => {
                                xp(this.node.current, l.target)
                                    ? u && u(l, a)
                                    : c && c(l, a);
                            });
                        },
                        { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    s = yt(
                        window,
                        "pointercancel",
                        (l, a) => this.cancelPress(l, a),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                    );
                (this.removeEndListeners = Ut(o, s)), this.startPress(t, n);
            }),
            (this.startAccessiblePress = () => {
                const t = (o) => {
                        if (o.key !== "Enter" || this.isPressing) return;
                        const s = (l) => {
                            l.key !== "Enter" ||
                                !this.checkPressEnd() ||
                                As("up", (a, u) => {
                                    const { onTap: c } = this.node.getProps();
                                    c && z.update(() => c(a, u));
                                });
                        };
                        this.removeEndListeners(),
                            (this.removeEndListeners = mt(
                                this.node.current,
                                "keyup",
                                s
                            )),
                            As("down", (l, a) => {
                                this.startPress(l, a);
                            });
                    },
                    n = mt(this.node.current, "keydown", t),
                    r = () => {
                        this.isPressing &&
                            As("cancel", (o, s) => this.cancelPress(o, s));
                    },
                    i = mt(this.node.current, "blur", r);
                this.removeAccessibleListeners = Ut(n, i);
            });
    }
    startPress(t, n) {
        this.isPressing = !0;
        const { onTapStart: r, whileTap: i } = this.node.getProps();
        i &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            r && z.update(() => r(t, n));
    }
    checkPressEnd() {
        return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
                this.node.animationState &&
                this.node.animationState.setActive("whileTap", !1),
            !vp()
        );
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const { onTapCancel: r } = this.node.getProps();
        r && z.update(() => r(t, n));
    }
    mount() {
        const t = this.node.getProps(),
            n = yt(this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart),
            }),
            r = mt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Ut(n, r);
    }
    unmount() {
        this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
    }
}
const Fl = new WeakMap(),
    Ds = new WeakMap(),
    Hy = (e) => {
        const t = Fl.get(e.target);
        t && t(e);
    },
    Wy = (e) => {
        e.forEach(Hy);
    };
function $y({ root: e, ...t }) {
    const n = e || document;
    Ds.has(n) || Ds.set(n, {});
    const r = Ds.get(n),
        i = JSON.stringify(t);
    return (
        r[i] || (r[i] = new IntersectionObserver(Wy, { root: e, ...t })), r[i]
    );
}
function Gy(e, t, n) {
    const r = $y(t);
    return (
        Fl.set(e, n),
        r.observe(e),
        () => {
            Fl.delete(e), r.unobserve(e);
        }
    );
}
const Ky = { some: 0, all: 1 };
class Qy extends Zt {
    constructor() {
        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps(),
            { root: n, margin: r, amount: i = "some", once: o } = t,
            s = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof i == "number" ? i : Ky[i],
            },
            l = (a) => {
                const { isIntersecting: u } = a;
                if (
                    this.isInView === u ||
                    ((this.isInView = u), o && !u && this.hasEnteredView)
                )
                    return;
                u && (this.hasEnteredView = !0),
                    this.node.animationState &&
                        this.node.animationState.setActive("whileInView", u);
                const {
                        onViewportEnter: c,
                        onViewportLeave: f,
                    } = this.node.getProps(),
                    d = u ? c : f;
                d && d(a);
            };
        return Gy(this.node.current, s, l);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(Yy(t, n)) && this.startObserver();
    }
    unmount() {}
}
function Yy({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
}
const Xy = {
    inView: { Feature: Qy },
    tap: { Feature: Uy },
    focus: { Feature: By },
    hover: { Feature: zy },
};
function wp(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
}
function Zy(e) {
    const t = {};
    return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Jy(e) {
    const t = {};
    return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function es(e, t, n) {
    const r = e.getProps();
    return nu(r, t, n !== void 0 ? n : r.custom, Zy(e), Jy(e));
}
const qy = "framerAppearId",
    by = "data-" + eu(qy);
let Sp = J,
    ts = J;
const Ht = (e) => e * 1e3,
    ct = (e) => e / 1e3,
    ev = { current: !1 },
    kp = (e) => Array.isArray(e) && typeof e[0] == "number";
function Pp(e) {
    return !!(
        !e ||
        (typeof e == "string" && Cp[e]) ||
        kp(e) ||
        (Array.isArray(e) && e.every(Pp))
    );
}
const xr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Cp = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: xr([0, 0.65, 0.55, 1]),
        circOut: xr([0.55, 0, 1, 0.45]),
        backIn: xr([0.31, 0.01, 0.66, -0.59]),
        backOut: xr([0.33, 1.53, 0.69, 0.99]),
    };
function Tp(e) {
    if (e) return kp(e) ? xr(e) : Array.isArray(e) ? e.map(Tp) : Cp[e];
}
function tv(
    e,
    t,
    n,
    {
        delay: r = 0,
        duration: i,
        repeat: o = 0,
        repeatType: s = "loop",
        ease: l,
        times: a,
    } = {}
) {
    const u = { [t]: n };
    a && (u.offset = a);
    const c = Tp(l);
    return (
        Array.isArray(c) && (u.easing = c),
        e.animate(u, {
            delay: r,
            duration: i,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: o + 1,
            direction: s === "reverse" ? "alternate" : "normal",
        })
    );
}
function nv(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r];
}
const Ep = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    rv = 1e-7,
    iv = 12;
function ov(e, t, n, r, i) {
    let o,
        s,
        l = 0;
    do (s = t + (n - t) / 2), (o = Ep(s, r, i) - e), o > 0 ? (n = s) : (t = s);
    while (Math.abs(o) > rv && ++l < iv);
    return s;
}
function ci(e, t, n, r) {
    if (e === t && n === r) return J;
    const i = (o) => ov(o, 0, 1, e, n);
    return (o) => (o === 0 || o === 1 ? o : Ep(i(o), t, r));
}
const sv = ci(0.42, 0, 1, 1),
    lv = ci(0, 0, 0.58, 1),
    Lp = ci(0.42, 0, 0.58, 1),
    av = (e) => Array.isArray(e) && typeof e[0] != "number",
    Vp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
    jp = (e) => (t) => 1 - e(1 - t),
    Mp = (e) => 1 - Math.sin(Math.acos(e)),
    ru = jp(Mp),
    uv = Vp(ru),
    Ap = ci(0.33, 1.53, 0.69, 0.99),
    iu = jp(Ap),
    cv = Vp(iu),
    fv = (e) =>
        (e *= 2) < 1 ? 0.5 * iu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    dv = {
        linear: J,
        easeIn: sv,
        easeInOut: Lp,
        easeOut: lv,
        circIn: Mp,
        circInOut: uv,
        circOut: ru,
        backIn: iu,
        backInOut: cv,
        backOut: Ap,
        anticipate: fv,
    },
    Rc = (e) => {
        if (Array.isArray(e)) {
            ts(e.length === 4);
            const [t, n, r, i] = e;
            return ci(t, n, r, i);
        } else if (typeof e == "string") return dv[e];
        return e;
    },
    ou = (e, t) => (n) =>
        !!(
            (ai(n) && dy.test(n) && n.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(n, t))
        ),
    Dp = (e, t, n) => (r) => {
        if (!ai(r)) return r;
        const [i, o, s, l] = r.match(Jo);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: l !== void 0 ? parseFloat(l) : 1,
        };
    },
    hv = (e) => Gt(0, 255, e),
    Rs = { ...wn, transform: (e) => Math.round(hv(e)) },
    un = {
        test: ou("rgb", "red"),
        parse: Dp("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            Rs.transform(e) +
            ", " +
            Rs.transform(t) +
            ", " +
            Rs.transform(n) +
            ", " +
            Mr(jr.transform(r)) +
            ")",
    };
function pv(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return (
        e.length > 5
            ? ((t = e.substring(1, 3)),
              (n = e.substring(3, 5)),
              (r = e.substring(5, 7)),
              (i = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
              (n = e.substring(2, 3)),
              (r = e.substring(3, 4)),
              (i = e.substring(4, 5)),
              (t += t),
              (n += n),
              (r += r),
              (i += i)),
        {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1,
        }
    );
}
const Il = { test: ou("#"), parse: pv, transform: un.transform },
    Fn = {
        test: ou("hsl", "hue"),
        parse: Dp("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            ut.transform(Mr(t)) +
            ", " +
            ut.transform(Mr(n)) +
            ", " +
            Mr(jr.transform(r)) +
            ")",
    },
    ye = {
        test: (e) => un.test(e) || Il.test(e) || Fn.test(e),
        parse: (e) =>
            un.test(e) ? un.parse(e) : Fn.test(e) ? Fn.parse(e) : Il.parse(e),
        transform: (e) =>
            ai(e)
                ? e
                : e.hasOwnProperty("red")
                ? un.transform(e)
                : Fn.transform(e),
    },
    Q = (e, t, n) => -n * e + n * t + e;
function Ns(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
            ? e + (t - e) * 6 * n
            : n < 1 / 2
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
    );
}
function mv({ hue: e, saturation: t, lightness: n, alpha: r }) {
    (e /= 360), (t /= 100), (n /= 100);
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
            a = 2 * n - l;
        (i = Ns(a, l, e + 1 / 3)), (o = Ns(a, l, e)), (s = Ns(a, l, e - 1 / 3));
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r,
    };
}
const _s = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r));
    },
    gv = [Il, un, Fn],
    yv = (e) => gv.find((t) => t.test(e));
function Nc(e) {
    const t = yv(e);
    let n = t.parse(e);
    return t === Fn && (n = mv(n)), n;
}
const Rp = (e, t) => {
    const n = Nc(e),
        r = Nc(t),
        i = { ...n };
    return (o) => (
        (i.red = _s(n.red, r.red, o)),
        (i.green = _s(n.green, r.green, o)),
        (i.blue = _s(n.blue, r.blue, o)),
        (i.alpha = Q(n.alpha, r.alpha, o)),
        un.transform(i)
    );
};
function vv(e) {
    var t, n;
    return (
        isNaN(e) &&
        ai(e) &&
        (((t = e.match(Jo)) === null || t === void 0 ? void 0 : t.length) ||
            0) +
            (((n = e.match(op)) === null || n === void 0 ? void 0 : n.length) ||
                0) >
            0
    );
}
const Np = { regex: cy, countKey: "Vars", token: "${v}", parse: J },
    _p = { regex: op, countKey: "Colors", token: "${c}", parse: ye.parse },
    Op = { regex: Jo, countKey: "Numbers", token: "${n}", parse: wn.parse };
function Os(e, { regex: t, countKey: n, token: r, parse: i }) {
    const o = e.tokenised.match(t);
    o &&
        ((e["num" + n] = o.length),
        (e.tokenised = e.tokenised.replace(t, r)),
        e.values.push(...o.map(i)));
}
function To(e) {
    const t = e.toString(),
        n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
        };
    return n.value.includes("var(--") && Os(n, Np), Os(n, _p), Os(n, Op), n;
}
function Fp(e) {
    return To(e).values;
}
function Ip(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = To(e),
        o = t.length;
    return (s) => {
        let l = i;
        for (let a = 0; a < o; a++)
            a < r
                ? (l = l.replace(Np.token, s[a]))
                : a < r + n
                ? (l = l.replace(_p.token, ye.transform(s[a])))
                : (l = l.replace(Op.token, Mr(s[a])));
        return l;
    };
}
const xv = (e) => (typeof e == "number" ? 0 : e);
function wv(e) {
    const t = Fp(e);
    return Ip(e)(t.map(xv));
}
const Kt = {
        test: vv,
        parse: Fp,
        createTransformer: Ip,
        getAnimatableNone: wv,
    },
    zp = (e, t) => (n) => `${n > 0 ? t : e}`;
function Bp(e, t) {
    return typeof e == "number"
        ? (n) => Q(e, t, n)
        : ye.test(e)
        ? Rp(e, t)
        : e.startsWith("var(")
        ? zp(e, t)
        : Hp(e, t);
}
const Up = (e, t) => {
        const n = [...e],
            r = n.length,
            i = e.map((o, s) => Bp(o, t[s]));
        return (o) => {
            for (let s = 0; s < r; s++) n[s] = i[s](o);
            return n;
        };
    },
    Sv = (e, t) => {
        const n = { ...e, ...t },
            r = {};
        for (const i in n)
            e[i] !== void 0 && t[i] !== void 0 && (r[i] = Bp(e[i], t[i]));
        return (i) => {
            for (const o in r) n[o] = r[o](i);
            return n;
        };
    },
    Hp = (e, t) => {
        const n = Kt.createTransformer(t),
            r = To(e),
            i = To(t);
        return r.numVars === i.numVars &&
            r.numColors === i.numColors &&
            r.numNumbers >= i.numNumbers
            ? Ut(Up(r.values, i.values), n)
            : zp(e, t);
    },
    bn = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r;
    },
    _c = (e, t) => (n) => Q(e, t, n);
function kv(e) {
    return typeof e == "number"
        ? _c
        : typeof e == "string"
        ? ye.test(e)
            ? Rp
            : Hp
        : Array.isArray(e)
        ? Up
        : typeof e == "object"
        ? Sv
        : _c;
}
function Pv(e, t, n) {
    const r = [],
        i = n || kv(e[0]),
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || J : t;
            l = Ut(a, l);
        }
        r.push(l);
    }
    return r;
}
function ns(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if ((ts(o === t.length), o === 1)) return () => t[0];
    e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const s = Pv(t, r, i),
        l = s.length,
        a = (u) => {
            let c = 0;
            if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const f = bn(e[c], e[c + 1], u);
            return s[c](f);
        };
    return n ? (u) => a(Gt(e[0], e[o - 1], u)) : a;
}
function Cv(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = bn(0, t, r);
        e.push(Q(n, 1, i));
    }
}
function Wp(e) {
    const t = [0];
    return Cv(t, e.length - 1), t;
}
function Tv(e, t) {
    return e.map((n) => n * t);
}
function Ev(e, t) {
    return e.map(() => t || Lp).splice(0, e.length - 1);
}
function Eo({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut",
}) {
    const i = av(r) ? r.map(Rc) : Rc(r),
        o = { done: !1, value: t[0] },
        s = Tv(n && n.length === t.length ? n : Wp(t), e),
        l = ns(s, t, { ease: Array.isArray(i) ? i : Ev(t, i) });
    return {
        calculatedDuration: e,
        next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
    };
}
function su(e, t) {
    return t ? e * (1e3 / t) : 0;
}
const Lv = 5;
function $p(e, t, n) {
    const r = Math.max(t - Lv, 0);
    return su(n - e(r), t - r);
}
const Fs = 0.001,
    Vv = 0.01,
    Oc = 10,
    jv = 0.05,
    Mv = 1;
function Av({
    duration: e = 800,
    bounce: t = 0.25,
    velocity: n = 0,
    mass: r = 1,
}) {
    let i, o;
    Sp(e <= Ht(Oc));
    let s = 1 - t;
    (s = Gt(jv, Mv, s)),
        (e = Gt(Vv, Oc, ct(e))),
        s < 1
            ? ((i = (u) => {
                  const c = u * s,
                      f = c * e,
                      d = c - n,
                      m = zl(u, s),
                      y = Math.exp(-f);
                  return Fs - (d / m) * y;
              }),
              (o = (u) => {
                  const f = u * s * e,
                      d = f * n + n,
                      m = Math.pow(s, 2) * Math.pow(u, 2) * e,
                      y = Math.exp(-f),
                      x = zl(Math.pow(u, 2), s);
                  return ((-i(u) + Fs > 0 ? -1 : 1) * ((d - m) * y)) / x;
              }))
            : ((i = (u) => {
                  const c = Math.exp(-u * e),
                      f = (u - n) * e + 1;
                  return -Fs + c * f;
              }),
              (o = (u) => {
                  const c = Math.exp(-u * e),
                      f = (n - u) * (e * e);
                  return c * f;
              }));
    const l = 5 / e,
        a = Rv(i, o, l);
    if (((e = Ht(e)), isNaN(a)))
        return { stiffness: 100, damping: 10, duration: e };
    {
        const u = Math.pow(a, 2) * r;
        return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
    }
}
const Dv = 12;
function Rv(e, t, n) {
    let r = n;
    for (let i = 1; i < Dv; i++) r = r - e(r) / t(r);
    return r;
}
function zl(e, t) {
    return e * Math.sqrt(1 - t * t);
}
const Nv = ["duration", "bounce"],
    _v = ["stiffness", "damping", "mass"];
function Fc(e, t) {
    return t.some((n) => e[n] !== void 0);
}
function Ov(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e,
    };
    if (!Fc(e, _v) && Fc(e, Nv)) {
        const n = Av(e);
        (t = { ...t, ...n, velocity: 0, mass: 1 }),
            (t.isResolvedFromDuration = !0);
    }
    return t;
}
function Gp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0],
        o = e[e.length - 1],
        s = { done: !1, value: i },
        {
            stiffness: l,
            damping: a,
            mass: u,
            velocity: c,
            duration: f,
            isResolvedFromDuration: d,
        } = Ov(r),
        m = c ? -ct(c) : 0,
        y = a / (2 * Math.sqrt(l * u)),
        x = o - i,
        E = ct(Math.sqrt(l / u)),
        g = Math.abs(x) < 5;
    n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
    let h;
    if (y < 1) {
        const p = zl(E, y);
        h = (w) => {
            const S = Math.exp(-y * E * w);
            return (
                o -
                S *
                    (((m + y * E * x) / p) * Math.sin(p * w) +
                        x * Math.cos(p * w))
            );
        };
    } else if (y === 1) h = (p) => o - Math.exp(-E * p) * (x + (m + E * x) * p);
    else {
        const p = E * Math.sqrt(y * y - 1);
        h = (w) => {
            const S = Math.exp(-y * E * w),
                T = Math.min(p * w, 300);
            return (
                o -
                (S * ((m + y * E * x) * Math.sinh(T) + p * x * Math.cosh(T))) /
                    p
            );
        };
    }
    return {
        calculatedDuration: (d && f) || null,
        next: (p) => {
            const w = h(p);
            if (d) s.done = p >= f;
            else {
                let S = m;
                p !== 0 && (y < 1 ? (S = $p(h, p, w)) : (S = 0));
                const T = Math.abs(S) <= n,
                    C = Math.abs(o - w) <= t;
                s.done = T && C;
            }
            return (s.value = s.done ? o : w), s;
        },
    };
}
function Ic({
    keyframes: e,
    velocity: t = 0,
    power: n = 0.8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: s,
    min: l,
    max: a,
    restDelta: u = 0.5,
    restSpeed: c,
}) {
    const f = e[0],
        d = { done: !1, value: f },
        m = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
        y = (P) =>
            l === void 0
                ? a
                : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
                ? l
                : a;
    let x = n * t;
    const E = f + x,
        g = s === void 0 ? E : s(E);
    g !== E && (x = g - f);
    const h = (P) => -x * Math.exp(-P / r),
        p = (P) => g + h(P),
        w = (P) => {
            const N = h(P),
                D = p(P);
            (d.done = Math.abs(N) <= u), (d.value = d.done ? g : D);
        };
    let S, T;
    const C = (P) => {
        m(d.value) &&
            ((S = P),
            (T = Gp({
                keyframes: [d.value, y(d.value)],
                velocity: $p(p, P, d.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
            })));
    };
    return (
        C(0),
        {
            calculatedDuration: null,
            next: (P) => {
                let N = !1;
                return (
                    !T && S === void 0 && ((N = !0), w(P), C(P)),
                    S !== void 0 && P > S ? T.next(P - S) : (!N && w(P), d)
                );
            },
        }
    );
}
const Fv = (e) => {
        const t = ({ timestamp: n }) => e(n);
        return {
            start: () => z.update(t, !0),
            stop: () => be(t),
            now: () => (te.isProcessing ? te.timestamp : performance.now()),
        };
    },
    zc = 2e4;
function Bc(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < zc; ) (t += n), (r = e.next(t));
    return t >= zc ? 1 / 0 : t;
}
const Iv = { decay: Ic, inertia: Ic, tween: Eo, keyframes: Eo, spring: Gp };
function ei({
    autoplay: e = !0,
    delay: t = 0,
    driver: n = Fv,
    keyframes: r,
    type: i = "keyframes",
    repeat: o = 0,
    repeatDelay: s = 0,
    repeatType: l = "loop",
    onPlay: a,
    onStop: u,
    onComplete: c,
    onUpdate: f,
    ...d
}) {
    let m = 1,
        y = !1,
        x,
        E;
    const g = () => {
        E = new Promise((R) => {
            x = R;
        });
    };
    g();
    let h;
    const p = Iv[i] || Eo;
    let w;
    p !== Eo &&
        typeof r[0] != "number" &&
        ((w = ns([0, 100], r, { clamp: !1 })), (r = [0, 100]));
    const S = p({ ...d, keyframes: r });
    let T;
    l === "mirror" &&
        (T = p({
            ...d,
            keyframes: [...r].reverse(),
            velocity: -(d.velocity || 0),
        }));
    let C = "idle",
        P = null,
        N = null,
        D = null;
    S.calculatedDuration === null && o && (S.calculatedDuration = Bc(S));
    const { calculatedDuration: q } = S;
    let ke = 1 / 0,
        Pe = 1 / 0;
    q !== null && ((ke = q + s), (Pe = ke * (o + 1) - s));
    let b = 0;
    const ee = (R) => {
            if (N === null) return;
            m > 0 && (N = Math.min(N, R)),
                m < 0 && (N = Math.min(R - Pe / m, N)),
                P !== null ? (b = P) : (b = Math.round(R - N) * m);
            const $ = b - t * (m >= 0 ? 1 : -1),
                Jt = m >= 0 ? $ < 0 : $ > Pe;
            (b = Math.max($, 0)), C === "finished" && P === null && (b = Pe);
            let tt = b,
                Sn = S;
            if (o) {
                const rs = b / ke;
                let fi = Math.floor(rs),
                    bt = rs % 1;
                !bt && rs >= 1 && (bt = 1),
                    bt === 1 && fi--,
                    (fi = Math.min(fi, o + 1));
                const hu = !!(fi % 2);
                hu &&
                    (l === "reverse"
                        ? ((bt = 1 - bt), s && (bt -= s / ke))
                        : l === "mirror" && (Sn = T));
                let pu = Gt(0, 1, bt);
                b > Pe && (pu = l === "reverse" && hu ? 1 : 0), (tt = pu * ke);
            }
            const je = Jt ? { done: !1, value: r[0] } : Sn.next(tt);
            w && (je.value = w(je.value));
            let { done: qt } = je;
            !Jt && q !== null && (qt = m >= 0 ? b >= Pe : b <= 0);
            const Pm =
                P === null && (C === "finished" || (C === "running" && qt));
            return f && f(je.value), Pm && L(), je;
        },
        Fe = () => {
            h && h.stop(), (h = void 0);
        },
        et = () => {
            (C = "idle"), Fe(), x(), g(), (N = D = null);
        },
        L = () => {
            (C = "finished"), c && c(), Fe(), x();
        },
        _ = () => {
            if (y) return;
            h || (h = n(ee));
            const R = h.now();
            a && a(),
                P !== null ? (N = R - P) : (!N || C === "finished") && (N = R),
                C === "finished" && g(),
                (D = N),
                (P = null),
                (C = "running"),
                h.start();
        };
    e && _();
    const O = {
        then(R, $) {
            return E.then(R, $);
        },
        get time() {
            return ct(b);
        },
        set time(R) {
            (R = Ht(R)),
                (b = R),
                P !== null || !h || m === 0 ? (P = R) : (N = h.now() - R / m);
        },
        get duration() {
            const R =
                S.calculatedDuration === null ? Bc(S) : S.calculatedDuration;
            return ct(R);
        },
        get speed() {
            return m;
        },
        set speed(R) {
            R === m || !h || ((m = R), (O.time = ct(b)));
        },
        get state() {
            return C;
        },
        play: _,
        pause: () => {
            (C = "paused"), (P = b);
        },
        stop: () => {
            (y = !0), C !== "idle" && ((C = "idle"), u && u(), et());
        },
        cancel: () => {
            D !== null && ee(D), et();
        },
        complete: () => {
            C = "finished";
        },
        sample: (R) => ((N = 0), ee(R)),
    };
    return O;
}
function zv(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
}
const Bv = zv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Uv = new Set([
        "opacity",
        "clipPath",
        "filter",
        "transform",
        "backgroundColor",
    ]),
    Ai = 10,
    Hv = 2e4,
    Wv = (e, t) =>
        t.type === "spring" || e === "backgroundColor" || !Pp(t.ease);
function $v(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (
        !(
            Bv() &&
            Uv.has(t) &&
            !i.repeatDelay &&
            i.repeatType !== "mirror" &&
            i.damping !== 0 &&
            i.type !== "inertia"
        )
    )
        return !1;
    let s = !1,
        l,
        a;
    const u = () => {
        a = new Promise((h) => {
            l = h;
        });
    };
    u();
    let { keyframes: c, duration: f = 300, ease: d, times: m } = i;
    if (Wv(t, i)) {
        const h = ei({ ...i, repeat: 0, delay: 0 });
        let p = { done: !1, value: c[0] };
        const w = [];
        let S = 0;
        for (; !p.done && S < Hv; )
            (p = h.sample(S)), w.push(p.value), (S += Ai);
        (m = void 0), (c = w), (f = S - Ai), (d = "linear");
    }
    const y = tv(e.owner.current, t, c, {
        ...i,
        duration: f,
        ease: d,
        times: m,
    });
    i.syncStart &&
        (y.startTime = te.isProcessing
            ? te.timestamp
            : document.timeline
            ? document.timeline.currentTime
            : performance.now());
    const x = () => y.cancel(),
        E = () => {
            z.update(x), l(), u();
        };
    return (
        (y.onfinish = () => {
            e.set(nv(c, i)), r && r(), E();
        }),
        {
            then(h, p) {
                return a.then(h, p);
            },
            attachTimeline(h) {
                return (y.timeline = h), (y.onfinish = null), J;
            },
            get time() {
                return ct(y.currentTime || 0);
            },
            set time(h) {
                y.currentTime = Ht(h);
            },
            get speed() {
                return y.playbackRate;
            },
            set speed(h) {
                y.playbackRate = h;
            },
            get duration() {
                return ct(f);
            },
            play: () => {
                s || (y.play(), be(x));
            },
            pause: () => y.pause(),
            stop: () => {
                if (((s = !0), y.playState === "idle")) return;
                const { currentTime: h } = y;
                if (h) {
                    const p = ei({ ...i, autoplay: !1 });
                    e.setWithVelocity(
                        p.sample(h - Ai).value,
                        p.sample(h).value,
                        Ai
                    );
                }
                E();
            },
            complete: () => y.finish(),
            cancel: E,
        }
    );
}
function Gv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const i = () => (
        n && n(e[e.length - 1]),
        r && r(),
        {
            time: 0,
            speed: 1,
            duration: 0,
            play: J,
            pause: J,
            stop: J,
            then: (o) => (o(), Promise.resolve()),
            cancel: J,
            complete: J,
        }
    );
    return t
        ? ei({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
        : i();
}
const Kv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    Qv = (e) => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
    }),
    Yv = { type: "keyframes", duration: 0.8 },
    Xv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    Zv = (e, { keyframes: t }) =>
        t.length > 2
            ? Yv
            : xn.has(e)
            ? e.startsWith("scale")
                ? Qv(t[1])
                : Kv
            : Xv,
    Bl = (e, t) =>
        e === "zIndex"
            ? !1
            : !!(
                  typeof t == "number" ||
                  Array.isArray(t) ||
                  (typeof t == "string" &&
                      (Kt.test(t) || t === "0") &&
                      !t.startsWith("url("))
              ),
    Jv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function qv(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Jo) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = Jv.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const bv = /([a-z-]*)\(.*?\)/g,
    Ul = {
        ...Kt,
        getAnimatableNone: (e) => {
            const t = e.match(bv);
            return t ? t.map(qv).join(" ") : e;
        },
    },
    e1 = {
        ...sp,
        color: ye,
        backgroundColor: ye,
        outlineColor: ye,
        fill: ye,
        stroke: ye,
        borderColor: ye,
        borderTopColor: ye,
        borderRightColor: ye,
        borderBottomColor: ye,
        borderLeftColor: ye,
        filter: Ul,
        WebkitFilter: Ul,
    },
    lu = (e) => e1[e];
function Kp(e, t) {
    let n = lu(e);
    return (
        n !== Ul && (n = Kt),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
}
const Qp = (e) => /^0[^.\s]+$/.test(e);
function t1(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || Qp(e);
}
function n1(e, t, n, r) {
    const i = Bl(t, n);
    let o;
    Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
    const s = r.from !== void 0 ? r.from : e.get();
    let l;
    const a = [];
    for (let u = 0; u < o.length; u++)
        o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
            t1(o[u]) && a.push(u),
            typeof o[u] == "string" &&
                o[u] !== "none" &&
                o[u] !== "0" &&
                (l = o[u]);
    if (i && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const c = a[u];
            o[c] = Kp(t, l);
        }
    return o;
}
function r1({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: s,
    repeatDelay: l,
    from: a,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length;
}
function Yp(e, t) {
    return e[t] || e.default || e;
}
const au = (e, t, n, r = {}) => (i) => {
    const o = Yp(r, e) || {},
        s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - Ht(s);
    const a = n1(t, e, n, o),
        u = a[0],
        c = a[a.length - 1],
        f = Bl(e, u),
        d = Bl(e, c);
    let m = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -l,
        onUpdate: (y) => {
            t.set(y), o.onUpdate && o.onUpdate(y);
        },
        onComplete: () => {
            i(), o.onComplete && o.onComplete();
        },
    };
    if (
        (r1(o) || (m = { ...m, ...Zv(e, m) }),
        m.duration && (m.duration = Ht(m.duration)),
        m.repeatDelay && (m.repeatDelay = Ht(m.repeatDelay)),
        !f || !d || ev.current || o.type === !1)
    )
        return Gv(m);
    if (
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
    ) {
        const y = $v(t, e, m);
        if (y) return y;
    }
    return ei(m);
};
function Lo(e) {
    return !!(ge(e) && e.add);
}
const Xp = (e) => /^\-?\d*\.?\d+$/.test(e);
function uu(e, t) {
    e.indexOf(t) === -1 && e.push(t);
}
function cu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
}
class fu {
    constructor() {
        this.subscriptions = [];
    }
    add(t) {
        return uu(this.subscriptions, t), () => cu(this.subscriptions, t);
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
const i1 = (e) => !isNaN(parseFloat(e)),
    Ar = { current: void 0 };
class o1 {
    constructor(t, n = {}) {
        (this.version = "10.16.4"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (r, i = !0) => {
                (this.prev = this.current), (this.current = r);
                const { delta: o, timestamp: s } = te;
                this.lastUpdated !== s &&
                    ((this.timeDelta = o),
                    (this.lastUpdated = s),
                    z.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current &&
                        this.events.change &&
                        this.events.change.notify(this.current),
                    this.events.velocityChange &&
                        this.events.velocityChange.notify(this.getVelocity()),
                    i &&
                        this.events.renderRequest &&
                        this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
                z.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: r }) => {
                r !== this.lastUpdated &&
                    ((this.prev = this.current),
                    this.events.velocityChange &&
                        this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = i1(this.current)),
            (this.owner = n.owner);
    }
    onChange(t) {
        return this.on("change", t);
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new fu());
        const r = this.events[t].add(n);
        return t === "change"
            ? () => {
                  r(),
                      z.read(() => {
                          this.events.change.getSize() || this.stop();
                      });
              }
            : r;
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
        (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t, n = !0) {
        !n || !this.passiveEffect
            ? this.updateAndNotify(t, n)
            : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
        this.set(n), (this.prev = t), (this.timeDelta = r);
    }
    jump(t) {
        this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
        return Ar.current && Ar.current.push(this), this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        return this.canTrackVelocity
            ? su(
                  parseFloat(this.current) - parseFloat(this.prev),
                  this.timeDelta
              )
            : 0;
    }
    start(t) {
        return (
            this.stop(),
            new Promise((n) => {
                (this.hasAnimated = !0),
                    (this.animation = t(n)),
                    this.events.animationStart &&
                        this.events.animationStart.notify();
            }).then(() => {
                this.events.animationComplete &&
                    this.events.animationComplete.notify(),
                    this.clearAnimation();
            })
        );
    }
    stop() {
        this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
                this.events.animationCancel.notify()),
            this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
}
function Xe(e, t) {
    return new o1(e, t);
}
const Zp = (e) => (t) => t.test(e),
    s1 = { test: (e) => e === "auto", parse: (e) => e },
    Jp = [wn, A, ut, Ct, py, hy, s1],
    dr = (e) => Jp.find(Zp(e)),
    l1 = [...Jp, ye, Kt],
    a1 = (e) => l1.find(Zp(e));
function u1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xe(n));
}
function c1(e, t) {
    const n = es(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n
        ? e.makeTargetAnimatable(n, !1)
        : {};
    o = { ...o, ...r };
    for (const s in o) {
        const l = Vy(o[s]);
        u1(e, s, l);
    }
}
function f1(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter((l) => !e.hasValue(l)),
        s = o.length;
    if (s)
        for (let l = 0; l < s; l++) {
            const a = o[l],
                u = t[a];
            let c = null;
            Array.isArray(u) && (c = u[0]),
                c === null &&
                    (c =
                        (i =
                            (r = n[a]) !== null && r !== void 0
                                ? r
                                : e.readValue(a)) !== null && i !== void 0
                            ? i
                            : t[a]),
                c != null &&
                    (typeof c == "string" && (Xp(c) || Qp(c))
                        ? (c = parseFloat(c))
                        : !a1(c) && Kt.test(u) && (c = Kp(a, u)),
                    e.addValue(a, Xe(c, { owner: e })),
                    n[a] === void 0 && (n[a] = c),
                    c !== null && e.setBaseTarget(a, c));
        }
}
function d1(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
}
function h1(e, t, n) {
    const r = {};
    for (const i in e) {
        const o = d1(i, t);
        if (o !== void 0) r[i] = o;
        else {
            const s = n.getValue(i);
            s && (r[i] = s.get());
        }
    }
    return r;
}
function p1({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), r;
}
function qp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let {
        transition: o = e.getDefaultTransition(),
        transitionEnd: s,
        ...l
    } = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (o = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const d = e.getValue(f),
            m = l[f];
        if (!d || m === void 0 || (c && p1(c, f))) continue;
        const y = { delay: n, elapsed: 0, ...o };
        if (window.HandoffAppearAnimations && !d.hasAnimated) {
            const E = e.getProps()[by];
            E &&
                ((y.elapsed = window.HandoffAppearAnimations(E, f, d, z)),
                (y.syncStart = !0));
        }
        d.start(
            au(f, d, m, e.shouldReduceMotion && xn.has(f) ? { type: !1 } : y)
        );
        const x = d.animation;
        Lo(a) && (a.add(f), x.then(() => a.remove(f))), u.push(x);
    }
    return (
        s &&
            Promise.all(u).then(() => {
                s && c1(e, s);
            }),
        u
    );
}
function Hl(e, t, n = {}) {
    const r = es(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(qp(e, r, n)) : () => Promise.resolve(),
        s =
            e.variantChildren && e.variantChildren.size
                ? (a = 0) => {
                      const {
                          delayChildren: u = 0,
                          staggerChildren: c,
                          staggerDirection: f,
                      } = i;
                      return m1(e, t, u + a, c, f, n);
                  }
                : () => Promise.resolve(),
        { when: l } = i;
    if (l) {
        const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
        return a().then(() => u());
    } else return Promise.all([o(), s(n.delay)]);
}
function m1(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        l = (e.variantChildren.size - 1) * r,
        a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
    return (
        Array.from(e.variantChildren)
            .sort(g1)
            .forEach((u, c) => {
                u.notify("AnimationStart", t),
                    s.push(
                        Hl(u, t, { ...o, delay: n + a(c) }).then(() =>
                            u.notify("AnimationComplete", t)
                        )
                    );
            }),
        Promise.all(s)
    );
}
function g1(e, t) {
    return e.sortNodePosition(t);
}
function y1(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map((o) => Hl(e, o, n));
        r = Promise.all(i);
    } else if (typeof t == "string") r = Hl(e, t, n);
    else {
        const i = typeof t == "function" ? es(e, t, n.custom) : t;
        r = Promise.all(qp(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
}
const v1 = [...Qa].reverse(),
    x1 = Qa.length;
function w1(e) {
    return (t) =>
        Promise.all(t.map(({ animation: n, options: r }) => y1(e, n, r)));
}
function S1(e) {
    let t = w1(e);
    const n = P1();
    let r = !0;
    const i = (a, u) => {
        const c = es(e, u);
        if (c) {
            const { transition: f, transitionEnd: d, ...m } = c;
            a = { ...a, ...m, ...d };
        }
        return a;
    };
    function o(a) {
        t = a(e);
    }
    function s(a, u) {
        const c = e.getProps(),
            f = e.getVariantContext(!0) || {},
            d = [],
            m = new Set();
        let y = {},
            x = 1 / 0;
        for (let g = 0; g < x1; g++) {
            const h = v1[g],
                p = n[h],
                w = c[h] !== void 0 ? c[h] : f[h],
                S = qr(w),
                T = h === u ? p.isActive : null;
            T === !1 && (x = g);
            let C = w === f[h] && w !== c[h] && S;
            if (
                (C && r && e.manuallyAnimateOnMount && (C = !1),
                (p.protectedKeys = { ...y }),
                (!p.isActive && T === null) ||
                    (!w && !p.prevProp) ||
                    Xo(w) ||
                    typeof w == "boolean")
            )
                continue;
            const P = k1(p.prevProp, w);
            let N = P || (h === u && p.isActive && !C && S) || (g > x && S);
            const D = Array.isArray(w) ? w : [w];
            let q = D.reduce(i, {});
            T === !1 && (q = {});
            const { prevResolvedValues: ke = {} } = p,
                Pe = { ...ke, ...q },
                b = (ee) => {
                    (N = !0), m.delete(ee), (p.needsAnimating[ee] = !0);
                };
            for (const ee in Pe) {
                const Fe = q[ee],
                    et = ke[ee];
                y.hasOwnProperty(ee) ||
                    (Fe !== et
                        ? Co(Fe) && Co(et)
                            ? !wp(Fe, et) || P
                                ? b(ee)
                                : (p.protectedKeys[ee] = !0)
                            : Fe !== void 0
                            ? b(ee)
                            : m.add(ee)
                        : Fe !== void 0 && m.has(ee)
                        ? b(ee)
                        : (p.protectedKeys[ee] = !0));
            }
            (p.prevProp = w),
                (p.prevResolvedValues = q),
                p.isActive && (y = { ...y, ...q }),
                r && e.blockInitialAnimation && (N = !1),
                N &&
                    !C &&
                    d.push(
                        ...D.map((ee) => ({
                            animation: ee,
                            options: { type: h, ...a },
                        }))
                    );
        }
        if (m.size) {
            const g = {};
            m.forEach((h) => {
                const p = e.getBaseTarget(h);
                p !== void 0 && (g[h] = p);
            }),
                d.push({ animation: g });
        }
        let E = !!d.length;
        return (
            r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1),
            (r = !1),
            E ? t(d) : Promise.resolve()
        );
    }
    function l(a, u, c) {
        var f;
        if (n[a].isActive === u) return Promise.resolve();
        (f = e.variantChildren) === null ||
            f === void 0 ||
            f.forEach((m) => {
                var y;
                return (y = m.animationState) === null || y === void 0
                    ? void 0
                    : y.setActive(a, u);
            }),
            (n[a].isActive = u);
        const d = s(c, a);
        for (const m in n) n[m].protectedKeys = {};
        return d;
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
    };
}
function k1(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !wp(t, e) : !1;
}
function en(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function P1() {
    return {
        animate: en(!0),
        whileInView: en(),
        whileHover: en(),
        whileTap: en(),
        whileDrag: en(),
        whileFocus: en(),
        exit: en(),
    };
}
class C1 extends Zt {
    constructor(t) {
        super(t), t.animationState || (t.animationState = S1(t));
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        this.unmount(), Xo(t) && (this.unmount = t.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: t } = this.node.getProps(),
            { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {}
}
let T1 = 0;
class E1 extends Zt {
    constructor() {
        super(...arguments), (this.id = T1++);
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
                isPresent: t,
                onExitComplete: n,
                custom: r,
            } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i) return;
        const o = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom,
        });
        n && !t && o.then(() => n(this.id));
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id));
    }
    unmount() {}
}
const L1 = { animation: { Feature: C1 }, exit: { Feature: E1 } },
    Uc = (e, t) => Math.abs(e - t);
function V1(e, t) {
    const n = Uc(e.x, t.x),
        r = Uc(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
}
class bp {
    constructor(t, n, { transformPagePoint: r } = {}) {
        if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const u = zs(this.lastMoveEventInfo, this.history),
                    c = this.startEvent !== null,
                    f = V1(u.offset, { x: 0, y: 0 }) >= 3;
                if (!c && !f) return;
                const { point: d } = u,
                    { timestamp: m } = te;
                this.history.push({ ...d, timestamp: m });
                const { onStart: y, onMove: x } = this.handlers;
                c ||
                    (y && y(this.lastMoveEvent, u),
                    (this.startEvent = this.lastMoveEvent)),
                    x && x(this.lastMoveEvent, u);
            }),
            (this.handlePointerMove = (u, c) => {
                (this.lastMoveEvent = u),
                    (this.lastMoveEventInfo = Is(c, this.transformPagePoint)),
                    z.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (u, c) => {
                if (
                    (this.end(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                    return;
                const { onEnd: f, onSessionEnd: d } = this.handlers,
                    m = zs(
                        u.type === "pointercancel"
                            ? this.lastMoveEventInfo
                            : Is(c, this.transformPagePoint),
                        this.history
                    );
                this.startEvent && f && f(u, m), d && d(u, m);
            }),
            !mp(t))
        )
            return;
        (this.handlers = n), (this.transformPagePoint = r);
        const i = bo(t),
            o = Is(i, this.transformPagePoint),
            { point: s } = o,
            { timestamp: l } = te;
        this.history = [{ ...s, timestamp: l }];
        const { onSessionStart: a } = n;
        a && a(t, zs(o, this.history)),
            (this.removeListeners = Ut(
                yt(window, "pointermove", this.handlePointerMove),
                yt(window, "pointerup", this.handlePointerUp),
                yt(window, "pointercancel", this.handlePointerUp)
            ));
    }
    updateHandlers(t) {
        this.handlers = t;
    }
    end() {
        this.removeListeners && this.removeListeners(), be(this.updatePoint);
    }
}
function Is(e, t) {
    return t ? { point: t(e.point) } : e;
}
function Hc(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
function zs({ point: e }, t) {
    return {
        point: e,
        delta: Hc(e, em(t)),
        offset: Hc(e, j1(t)),
        velocity: M1(t, 0.1),
    };
}
function j1(e) {
    return e[0];
}
function em(e) {
    return e[e.length - 1];
}
function M1(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
        r = null;
    const i = em(e);
    for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ht(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const o = ct(i.timestamp - r.timestamp);
    if (o === 0) return { x: 0, y: 0 };
    const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ne(e) {
    return e.max - e.min;
}
function Wl(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
}
function Wc(e, t, n, r = 0.5) {
    (e.origin = r),
        (e.originPoint = Q(t.min, t.max, e.origin)),
        (e.scale = Ne(n) / Ne(t)),
        (Wl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        (e.translate = Q(n.min, n.max, e.origin) - e.originPoint),
        (Wl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Dr(e, t, n, r) {
    Wc(e.x, t.x, n.x, r ? r.originX : void 0),
        Wc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $c(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + Ne(t));
}
function A1(e, t, n) {
    $c(e.x, t.x, n.x), $c(e.y, t.y, n.y);
}
function Gc(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + Ne(t));
}
function Rr(e, t, n) {
    Gc(e.x, t.x, n.x), Gc(e.y, t.y, n.y);
}
function D1(e, { min: t, max: n }, r) {
    return (
        t !== void 0 && e < t
            ? (e = r ? Q(t, e, r.min) : Math.max(e, t))
            : n !== void 0 &&
              e > n &&
              (e = r ? Q(n, e, r.max) : Math.min(e, n)),
        e
    );
}
function Kc(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
    };
}
function R1(e, { top: t, left: n, bottom: r, right: i }) {
    return { x: Kc(e.x, n, i), y: Kc(e.y, t, r) };
}
function Qc(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return (
        t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    );
}
function N1(e, t) {
    return { x: Qc(e.x, t.x), y: Qc(e.y, t.y) };
}
function _1(e, t) {
    let n = 0.5;
    const r = Ne(e),
        i = Ne(t);
    return (
        i > r
            ? (n = bn(t.min, t.max - r, e.min))
            : r > i && (n = bn(e.min, e.max - i, t.min)),
        Gt(0, 1, n)
    );
}
function O1(e, t) {
    const n = {};
    return (
        t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
    );
}
const $l = 0.35;
function F1(e = $l) {
    return (
        e === !1 ? (e = 0) : e === !0 && (e = $l),
        { x: Yc(e, "left", "right"), y: Yc(e, "top", "bottom") }
    );
}
function Yc(e, t, n) {
    return { min: Xc(e, t), max: Xc(e, n) };
}
function Xc(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
}
const Zc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    In = () => ({ x: Zc(), y: Zc() }),
    Jc = () => ({ min: 0, max: 0 }),
    re = () => ({ x: Jc(), y: Jc() });
function ot(e) {
    return [e("x"), e("y")];
}
function tm({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function I1({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function z1(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Bs(e) {
    return e === void 0 || e === 1;
}
function Gl({ scale: e, scaleX: t, scaleY: n }) {
    return !Bs(e) || !Bs(t) || !Bs(n);
}
function rn(e) {
    return Gl(e) || nm(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function nm(e) {
    return qc(e.x) || qc(e.y);
}
function qc(e) {
    return e && e !== "0%";
}
function Vo(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i;
}
function bc(e, t, n, r, i) {
    return i !== void 0 && (e = Vo(e, i, r)), Vo(e, n, r) + t;
}
function Kl(e, t = 0, n = 1, r, i) {
    (e.min = bc(e.min, t, n, r, i)), (e.max = bc(e.max, t, n, r, i));
}
function rm(e, { x: t, y: n }) {
    Kl(e.x, t.translate, t.scale, t.originPoint),
        Kl(e.y, n.translate, n.scale, n.originPoint);
}
function B1(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        (o = n[l]), (s = o.projectionDelta);
        const a = o.instance;
        (a && a.style && a.style.display === "contents") ||
            (r &&
                o.options.layoutScroll &&
                o.scroll &&
                o !== o.root &&
                zn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
            s && ((t.x *= s.x.scale), (t.y *= s.y.scale), rm(e, s)),
            r && rn(o.latestValues) && zn(e, o.latestValues));
    }
    (t.x = ef(t.x)), (t.y = ef(t.y));
}
function ef(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
        ? e
        : 1;
}
function Vt(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
}
function tf(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5,
        s = Q(e.min, e.max, o);
    Kl(e, t[n], t[r], s, t.scale);
}
const U1 = ["x", "scaleX", "originX"],
    H1 = ["y", "scaleY", "originY"];
function zn(e, t) {
    tf(e.x, t, U1), tf(e.y, t, H1);
}
function im(e, t) {
    return tm(z1(e.getBoundingClientRect(), t));
}
function W1(e, t, n) {
    const r = im(e, n),
        { scroll: i } = t;
    return i && (Vt(r.x, i.offset.x), Vt(r.y, i.offset.y)), r;
}
const $1 = new WeakMap();
class G1 {
    constructor(t) {
        (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = re()),
            (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = (a) => {
                this.stopAnimation(),
                    n && this.snapToCursor(bo(a, "page").point);
            },
            o = (a, u) => {
                const {
                    drag: c,
                    dragPropagation: f,
                    onDragStart: d,
                } = this.getProps();
                if (
                    c &&
                    !f &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = yp(c)),
                    !this.openGlobalLock)
                )
                    return;
                (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                        ((this.visualElement.projection.isAnimationBlocked = !0),
                        (this.visualElement.projection.target = void 0)),
                    ot((y) => {
                        let x = this.getAxisMotionValue(y).get() || 0;
                        if (ut.test(x)) {
                            const { projection: E } = this.visualElement;
                            if (E && E.layout) {
                                const g = E.layout.layoutBox[y];
                                g && (x = Ne(g) * (parseFloat(x) / 100));
                            }
                        }
                        this.originPoint[y] = x;
                    }),
                    d && z.update(() => d(a, u), !1, !0);
                const { animationState: m } = this.visualElement;
                m && m.setActive("whileDrag", !0);
            },
            s = (a, u) => {
                const {
                    dragPropagation: c,
                    dragDirectionLock: f,
                    onDirectionLock: d,
                    onDrag: m,
                } = this.getProps();
                if (!c && !this.openGlobalLock) return;
                const { offset: y } = u;
                if (f && this.currentDirection === null) {
                    (this.currentDirection = K1(y)),
                        this.currentDirection !== null &&
                            d &&
                            d(this.currentDirection);
                    return;
                }
                this.updateAxis("x", u.point, y),
                    this.updateAxis("y", u.point, y),
                    this.visualElement.render(),
                    m && m(a, u);
            },
            l = (a, u) => this.stop(a, u);
        this.panSession = new bp(
            t,
            { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
        );
    }
    stop(t, n) {
        const r = this.isDragging;
        if ((this.cancel(), !r)) return;
        const { velocity: i } = n;
        this.startAnimation(i);
        const { onDragEnd: o } = this.getProps();
        o && z.update(() => o(t, n));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
        const { dragPropagation: r } = this.getProps();
        !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
        const { drag: i } = this.getProps();
        if (!r || !Di(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints &&
            this.constraints[t] &&
            (s = D1(s, this.constraints[t], this.elastic[t])),
            o.set(s);
    }
    resolveConstraints() {
        const { dragConstraints: t, dragElastic: n } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            i = this.constraints;
        t && On(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = R1(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = F1(n)),
            i !== this.constraints &&
                r &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                ot((o) => {
                    this.getAxisMotionValue(o) &&
                        (this.constraints[o] = O1(
                            r.layoutBox[o],
                            this.constraints[o]
                        ));
                });
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n,
        } = this.getProps();
        if (!t || !On(t)) return !1;
        const r = t.current,
            { projection: i } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = W1(r, i.root, this.visualElement.getTransformPagePoint());
        let s = N1(i.layout.layoutBox, o);
        if (n) {
            const l = n(I1(s));
            (this.hasMutatedConstraints = !!l), l && (s = tm(l));
        }
        return s;
    }
    startAnimation(t) {
        const {
                drag: n,
                dragMomentum: r,
                dragElastic: i,
                dragTransition: o,
                dragSnapToOrigin: s,
                onDragTransitionEnd: l,
            } = this.getProps(),
            a = this.constraints || {},
            u = ot((c) => {
                if (!Di(c, n, this.currentDirection)) return;
                let f = (a && a[c]) || {};
                s && (f = { min: 0, max: 0 });
                const d = i ? 200 : 1e6,
                    m = i ? 40 : 1e7,
                    y = {
                        type: "inertia",
                        velocity: r ? t[c] : 0,
                        bounceStiffness: d,
                        bounceDamping: m,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...o,
                        ...f,
                    };
                return this.startAxisValueAnimation(c, y);
            });
        return Promise.all(u).then(l);
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(au(t, r, 0, n));
    }
    stopAnimation() {
        ot((t) => this.getAxisMotionValue(t).stop());
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            i = r[n];
        return (
            i ||
            this.visualElement.getValue(
                t,
                (r.initial ? r.initial[t] : void 0) || 0
            )
        );
    }
    snapToCursor(t) {
        ot((n) => {
            const { drag: r } = this.getProps();
            if (!Di(n, r, this.currentDirection)) return;
            const { projection: i } = this.visualElement,
                o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const { min: s, max: l } = i.layout.layoutBox[n];
                o.set(t[n] - Q(s, l, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: t, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
        if (!On(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = { x: 0, y: 0 };
        ot((s) => {
            const l = this.getAxisMotionValue(s);
            if (l) {
                const a = l.get();
                i[s] = _1({ min: a, max: a }, this.constraints[s]);
            }
        });
        const { transformTemplate: o } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            ot((s) => {
                if (!Di(s, t, null)) return;
                const l = this.getAxisMotionValue(s),
                    { min: a, max: u } = this.constraints[s];
                l.set(Q(a, u, i[s]));
            });
    }
    addListeners() {
        if (!this.visualElement.current) return;
        $1.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = yt(t, "pointerdown", (a) => {
                const { drag: u, dragListener: c = !0 } = this.getProps();
                u && c && this.start(a);
            }),
            r = () => {
                const { dragConstraints: a } = this.getProps();
                On(a) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            r();
        const s = mt(window, "resize", () =>
                this.scalePositionWithinConstraints()
            ),
            l = i.addEventListener(
                "didUpdate",
                ({ delta: a, hasLayoutChanged: u }) => {
                    this.isDragging &&
                        u &&
                        (ot((c) => {
                            const f = this.getAxisMotionValue(c);
                            f &&
                                ((this.originPoint[c] += a[c].translate),
                                f.set(f.get() + a[c].translate));
                        }),
                        this.visualElement.render());
                }
            );
        return () => {
            s(), n(), o(), l && l();
        };
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: s = $l,
                dragMomentum: l = !0,
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l,
        };
    }
}
function Di(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
}
function K1(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Q1 extends Zt {
    constructor(t) {
        super(t),
            (this.removeGroupControls = J),
            (this.removeListeners = J),
            (this.controls = new G1(t));
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || J);
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners();
    }
}
const nf = (e) => (t, n) => {
    e && z.update(() => e(t, n));
};
class Y1 extends Zt {
    constructor() {
        super(...arguments), (this.removePointerDownListener = J);
    }
    onPointerDown(t) {
        this.session = new bp(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
        });
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i,
        } = this.node.getProps();
        return {
            onSessionStart: nf(t),
            onStart: nf(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && z.update(() => i(o, s));
            },
        };
    }
    mount() {
        this.removePointerDownListener = yt(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
        );
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
    }
}
function X1() {
    const e = j.useContext(Ka);
    if (e === null) return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e,
        i = j.useId();
    return j.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Yi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function rf(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (A.test(e)) e = parseFloat(e);
                else return e;
            const n = rf(e, t.target.x),
                r = rf(e, t.target.y);
            return `${n}% ${r}%`;
        },
    },
    Z1 = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e,
                i = Kt.parse(e);
            if (i.length > 5) return r;
            const o = Kt.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                l = n.x.scale * t.x,
                a = n.y.scale * t.y;
            (i[0 + s] /= l), (i[1 + s] /= a);
            const u = Q(l, a, 0.5);
            return (
                typeof i[2 + s] == "number" && (i[2 + s] /= u),
                typeof i[3 + s] == "number" && (i[3 + s] /= u),
                o(i)
            );
        },
    };
class J1 extends ta.Component {
    componentDidMount() {
        const {
                visualElement: t,
                layoutGroup: n,
                switchLayoutGroup: r,
                layoutId: i,
            } = this.props,
            { projection: o } = t;
        sy(q1),
            o &&
                (n.group && n.group.add(o),
                r && r.register && i && r.register(o),
                o.root.didUpdate(),
                o.addEventListener("animationComplete", () => {
                    this.safeToRemove();
                }),
                o.setOptions({
                    ...o.options,
                    onExitComplete: () => this.safeToRemove(),
                })),
            (Yi.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
        const {
                layoutDependency: n,
                visualElement: r,
                drag: i,
                isPresent: o,
            } = this.props,
            s = r.projection;
        return (
            s &&
                ((s.isPresent = o),
                i || t.layoutDependency !== n || n === void 0
                    ? s.willUpdate()
                    : this.safeToRemove(),
                t.isPresent !== o &&
                    (o
                        ? s.promote()
                        : s.relegate() ||
                          z.postRender(() => {
                              const l = s.getStack();
                              (!l || !l.members.length) && this.safeToRemove();
                          }))),
            null
        );
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
    }
    componentWillUnmount() {
        const {
                visualElement: t,
                layoutGroup: n,
                switchLayoutGroup: r,
            } = this.props,
            { projection: i } = t;
        i &&
            (i.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(i),
            r && r.deregister && r.deregister(i));
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t();
    }
    render() {
        return null;
    }
}
function om(e) {
    const [t, n] = X1(),
        r = j.useContext(ep);
    return ta.createElement(J1, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: j.useContext(tp),
        isPresent: t,
        safeToRemove: n,
    });
}
const q1 = {
        borderRadius: {
            ...hr,
            applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
            ],
        },
        borderTopLeftRadius: hr,
        borderTopRightRadius: hr,
        borderBottomLeftRadius: hr,
        borderBottomRightRadius: hr,
        boxShadow: Z1,
    },
    sm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    b1 = sm.length,
    of = (e) => (typeof e == "string" ? parseFloat(e) : e),
    sf = (e) => typeof e == "number" || A.test(e);
function ex(e, t, n, r, i, o) {
    i
        ? ((e.opacity = Q(0, n.opacity !== void 0 ? n.opacity : 1, tx(r))),
          (e.opacityExit = Q(t.opacity !== void 0 ? t.opacity : 1, 0, nx(r))))
        : o &&
          (e.opacity = Q(
              t.opacity !== void 0 ? t.opacity : 1,
              n.opacity !== void 0 ? n.opacity : 1,
              r
          ));
    for (let s = 0; s < b1; s++) {
        const l = `border${sm[s]}Radius`;
        let a = lf(t, l),
            u = lf(n, l);
        if (a === void 0 && u === void 0) continue;
        a || (a = 0),
            u || (u = 0),
            a === 0 || u === 0 || sf(a) === sf(u)
                ? ((e[l] = Math.max(Q(of(a), of(u), r), 0)),
                  (ut.test(u) || ut.test(a)) && (e[l] += "%"))
                : (e[l] = u);
    }
    (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r));
}
function lf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const tx = lm(0, 0.5, ru),
    nx = lm(0.5, 0.95, J);
function lm(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(bn(e, t, r)));
}
function af(e, t) {
    (e.min = t.min), (e.max = t.max);
}
function Ie(e, t) {
    af(e.x, t.x), af(e.y, t.y);
}
function uf(e, t, n, r, i) {
    return (
        (e -= t),
        (e = Vo(e, 1 / n, r)),
        i !== void 0 && (e = Vo(e, 1 / i, r)),
        e
    );
}
function rx(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (
        (ut.test(t) &&
            ((t = parseFloat(t)), (t = Q(s.min, s.max, t / 100) - s.min)),
        typeof t != "number")
    )
        return;
    let l = Q(o.min, o.max, r);
    e === o && (l -= t),
        (e.min = uf(e.min, t, n, l, i)),
        (e.max = uf(e.max, t, n, l, i));
}
function cf(e, t, [n, r, i], o, s) {
    rx(e, t[n], t[r], t[i], t.scale, o, s);
}
const ix = ["x", "scaleX", "originX"],
    ox = ["y", "scaleY", "originY"];
function ff(e, t, n, r) {
    cf(e.x, t, ix, n ? n.x : void 0, r ? r.x : void 0),
        cf(e.y, t, ox, n ? n.y : void 0, r ? r.y : void 0);
}
function df(e) {
    return e.translate === 0 && e.scale === 1;
}
function am(e) {
    return df(e.x) && df(e.y);
}
function sx(e, t) {
    return (
        e.x.min === t.x.min &&
        e.x.max === t.x.max &&
        e.y.min === t.y.min &&
        e.y.max === t.y.max
    );
}
function um(e, t) {
    return (
        Math.round(e.x.min) === Math.round(t.x.min) &&
        Math.round(e.x.max) === Math.round(t.x.max) &&
        Math.round(e.y.min) === Math.round(t.y.min) &&
        Math.round(e.y.max) === Math.round(t.y.max)
    );
}
function hf(e) {
    return Ne(e.x) / Ne(e.y);
}
class lx {
    constructor() {
        this.members = [];
    }
    add(t) {
        uu(this.members, t), t.scheduleRender();
    }
    remove(t) {
        if (
            (cu(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
        ) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n);
        }
    }
    relegate(t) {
        const n = this.members.findIndex((i) => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break;
            }
        }
        return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = r),
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                        r.animationValues || r.latestValues)),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: i } = t.options;
            i === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t) => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete();
        });
    }
    scheduleRender() {
        this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
        });
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}
function pf(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y;
    if (
        ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n)
    ) {
        const { rotate: a, rotateX: u, rotateY: c } = n;
        a && (r += `rotate(${a}deg) `),
            u && (r += `rotateX(${u}deg) `),
            c && (r += `rotateY(${c}deg) `);
    }
    const s = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const ax = (e, t) => e.depth - t.depth;
class ux {
    constructor() {
        (this.children = []), (this.isDirty = !1);
    }
    add(t) {
        uu(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
        cu(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
        this.isDirty && this.children.sort(ax),
            (this.isDirty = !1),
            this.children.forEach(t);
    }
}
function cx(e, t) {
    const n = performance.now(),
        r = ({ timestamp: i }) => {
            const o = i - n;
            o >= t && (be(r), e(o - t));
        };
    return z.read(r, !0), () => be(r);
}
function fx(e) {
    window.MotionDebug && window.MotionDebug.record(e);
}
function dx(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
}
function hx(e, t, n) {
    const r = ge(e) ? e : Xe(e);
    return r.start(au("", r, t, n)), r.animation;
}
const mf = ["", "X", "Y", "Z"],
    gf = 1e3;
let px = 0;
const on = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
};
function cm({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i,
}) {
    return class {
        constructor(s = {}, l = t == null ? void 0 : t()) {
            (this.id = px++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating &&
                        ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    (on.totalNodes = on.resolvedTargetDeltas = on.recalculatedProjection = 0),
                        this.nodes.forEach(yx),
                        this.nodes.forEach(kx),
                        this.nodes.forEach(Px),
                        this.nodes.forEach(vx),
                        fx(on);
                }),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = s),
                (this.root = l ? l.root || l : this),
                (this.path = l ? [...l.path, l] : []),
                (this.parent = l),
                (this.depth = l ? l.depth + 1 : 0);
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ux());
        }
        addEventListener(s, l) {
            return (
                this.eventHandlers.has(s) ||
                    this.eventHandlers.set(s, new fu()),
                this.eventHandlers.get(s).add(l)
            );
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l);
        }
        hasListeners(s) {
            return this.eventHandlers.has(s);
        }
        mount(s, l = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = dx(s)), (this.instance = s);
            const { layoutId: a, layout: u, visualElement: c } = this.options;
            if (
                (c && !c.current && c.mount(s),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                l && (u || a) && (this.isLayoutDirty = !0),
                e)
            ) {
                let f;
                const d = () => (this.root.updateBlockedByResize = !1);
                e(s, () => {
                    (this.root.updateBlockedByResize = !0),
                        f && f(),
                        (f = cx(d, 250)),
                        Yi.hasAnimatedSinceResize &&
                            ((Yi.hasAnimatedSinceResize = !1),
                            this.nodes.forEach(vf));
                });
            }
            a && this.root.registerSharedNode(a, this),
                this.options.animate !== !1 &&
                    c &&
                    (a || u) &&
                    this.addEventListener(
                        "didUpdate",
                        ({
                            delta: f,
                            hasLayoutChanged: d,
                            hasRelativeTargetChanged: m,
                            layout: y,
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                (this.target = void 0),
                                    (this.relativeTarget = void 0);
                                return;
                            }
                            const x =
                                    this.options.transition ||
                                    c.getDefaultTransition() ||
                                    Vx,
                                {
                                    onLayoutAnimationStart: E,
                                    onLayoutAnimationComplete: g,
                                } = c.getProps(),
                                h =
                                    !this.targetLayout ||
                                    !um(this.targetLayout, y) ||
                                    m,
                                p = !d && m;
                            if (
                                this.options.layoutRoot ||
                                (this.resumeFrom && this.resumeFrom.instance) ||
                                p ||
                                (d && (h || !this.currentAnimation))
                            ) {
                                this.resumeFrom &&
                                    ((this.resumingFrom = this.resumeFrom),
                                    (this.resumingFrom.resumingFrom = void 0)),
                                    this.setAnimationOrigin(f, p);
                                const w = {
                                    ...Yp(x, "layout"),
                                    onPlay: E,
                                    onComplete: g,
                                };
                                (c.shouldReduceMotion ||
                                    this.options.layoutRoot) &&
                                    ((w.delay = 0), (w.type = !1)),
                                    this.startAnimation(w);
                            } else
                                d || vf(this),
                                    this.isLead() &&
                                        this.options.onExitComplete &&
                                        this.options.onExitComplete();
                            this.targetLayout = y;
                        }
                    );
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                be(this.updateProjection);
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
            );
        }
        startUpdate() {
            this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                this.nodes && this.nodes.forEach(Cx),
                this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options;
            return s && s.getProps().transformTemplate;
        }
        willUpdate(s = !0) {
            if (
                ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (
                (!this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
            )
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                (f.shouldResetTransform = !0),
                    f.updateScroll("snapshot"),
                    f.options.layoutRoot && f.willUpdate(!1);
            }
            const { layoutId: l, layout: a } = this.options;
            if (l === void 0 && !a) return;
            const u = this.getTransformTemplate();
            (this.prevTransformTemplateValue = u
                ? u(this.latestValues, "")
                : void 0),
                this.updateSnapshot(),
                s && this.notifyListeners("willUpdate");
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(yf);
                return;
            }
            this.isUpdating || this.nodes.forEach(wx),
                (this.isUpdating = !1),
                this.nodes.forEach(Sx),
                this.nodes.forEach(mx),
                this.nodes.forEach(gx),
                this.clearAllSnapshots();
            const l = performance.now();
            (te.delta = Gt(0, 1e3 / 60, l - te.timestamp)),
                (te.timestamp = l),
                (te.isProcessing = !0),
                Ms.update.process(te),
                Ms.preRender.process(te),
                Ms.render.process(te),
                (te.isProcessing = !1);
        }
        didUpdate() {
            this.updateScheduled ||
                ((this.updateScheduled = !0),
                queueMicrotask(() => this.update()));
        }
        clearAllSnapshots() {
            this.nodes.forEach(xx), this.sharedNodes.forEach(Tx);
        }
        scheduleUpdateProjection() {
            z.preRender(this.updateProjection, !1, !0);
        }
        scheduleCheckAfterUnmount() {
            z.postRender(() => {
                this.isLayoutDirty
                    ? this.root.didUpdate()
                    : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure());
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                    !this.isLayoutDirty)
            )
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            (this.layout = this.measure(!1)),
                (this.layoutCorrected = re()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: l } = this.options;
            l &&
                l.notify(
                    "LayoutMeasure",
                    this.layout.layoutBox,
                    s ? s.layoutBox : void 0
                );
        }
        updateScroll(s = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === s &&
                (l = !1),
                l &&
                    (this.scroll = {
                        animationId: this.root.animationId,
                        phase: s,
                        isRoot: r(this.instance),
                        offset: n(this.instance),
                    });
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform,
                l = this.projectionDelta && !am(this.projectionDelta),
                a = this.getTransformTemplate(),
                u = a ? a(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s &&
                (l || rn(this.latestValues) || c) &&
                (i(this.instance, u),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
        }
        measure(s = !0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return (
                s && (a = this.removeTransform(a)),
                jx(a),
                {
                    animationId: this.root.animationId,
                    measuredBox: l,
                    layoutBox: a,
                    latestValues: {},
                    source: this.id,
                }
            );
        }
        measurePageBox() {
            const { visualElement: s } = this.options;
            if (!s) return re();
            const l = s.measureViewportBox(),
                { scroll: a } = this.root;
            return a && (Vt(l.x, a.offset.x), Vt(l.y, a.offset.y)), l;
        }
        removeElementScroll(s) {
            const l = re();
            Ie(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a],
                    { scroll: c, options: f } = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        Ie(l, s);
                        const { scroll: d } = this.root;
                        d && (Vt(l.x, -d.offset.x), Vt(l.y, -d.offset.y));
                    }
                    Vt(l.x, c.offset.x), Vt(l.y, c.offset.y);
                }
            }
            return l;
        }
        applyTransform(s, l = !1) {
            const a = re();
            Ie(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l &&
                    c.options.layoutScroll &&
                    c.scroll &&
                    c !== c.root &&
                    zn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
                    rn(c.latestValues) && zn(a, c.latestValues);
            }
            return rn(this.latestValues) && zn(a, this.latestValues), a;
        }
        removeTransform(s) {
            const l = re();
            Ie(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !rn(u.latestValues)) continue;
                Gl(u.latestValues) && u.updateSnapshot();
                const c = re(),
                    f = u.measurePageBox();
                Ie(c, f),
                    ff(
                        l,
                        u.latestValues,
                        u.snapshot ? u.snapshot.layoutBox : void 0,
                        c
                    );
            }
            return rn(this.latestValues) && ff(l, this.latestValues), l;
        }
        setTargetDelta(s) {
            (this.targetDelta = s),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0);
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
            };
        }
        clearMeasurements() {
            (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== te.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(s = !1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty ||
                (this.isProjectionDirty = a.isProjectionDirty),
                this.isTransformDirty ||
                    (this.isTransformDirty = a.isTransformDirty),
                this.isSharedProjectionDirty ||
                    (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (
                !(
                    s ||
                    (u && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    (!((l = this.parent) === null || l === void 0) &&
                        l.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget
                )
            )
                return;
            const { layout: f, layoutId: d } = this.options;
            if (!(!this.layout || !(f || d))) {
                if (
                    ((this.resolvedRelativeTargetAt = te.timestamp),
                    !this.targetDelta && !this.relativeTarget)
                ) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = m),
                          this.forceRelativeParentToResolveTarget(),
                          (this.relativeTarget = re()),
                          (this.relativeTargetOrigin = re()),
                          Rr(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              m.layout.layoutBox
                          ),
                          Ie(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (
                        (this.target ||
                            ((this.target = re()),
                            (this.targetWithTransforms = re())),
                        this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.relativeParent &&
                        this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              A1(
                                  this.target,
                                  this.relativeTarget,
                                  this.relativeParent.target
                              ))
                            : this.targetDelta
                            ? (this.resumingFrom
                                  ? (this.target = this.applyTransform(
                                        this.layout.layoutBox
                                    ))
                                  : Ie(this.target, this.layout.layoutBox),
                              rm(this.target, this.targetDelta))
                            : Ie(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)
                    ) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m &&
                        !!m.resumingFrom == !!this.resumingFrom &&
                        !m.options.layoutScroll &&
                        m.target &&
                        this.animationProgress !== 1
                            ? ((this.relativeParent = m),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = re()),
                              (this.relativeTargetOrigin = re()),
                              Rr(
                                  this.relativeTargetOrigin,
                                  this.target,
                                  m.target
                              ),
                              Ie(
                                  this.relativeTarget,
                                  this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget = void 0);
                    }
                    on.resolvedTargetDeltas++;
                }
            }
        }
        getClosestProjectingParent() {
            if (
                !(
                    !this.parent ||
                    Gl(this.parent.latestValues) ||
                    nm(this.parent.latestValues)
                )
            )
                return this.parent.isProjecting()
                    ? this.parent
                    : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!(
                (this.relativeTarget ||
                    this.targetDelta ||
                    this.options.layoutRoot) &&
                this.layout
            );
        }
        calcProjection() {
            var s;
            const l = this.getLead(),
                a = !!this.resumingFrom || this !== l;
            let u = !0;
            if (
                ((this.isProjectionDirty ||
                    (!((s = this.parent) === null || s === void 0) &&
                        s.isProjectionDirty)) &&
                    (u = !1),
                a &&
                    (this.isSharedProjectionDirty || this.isTransformDirty) &&
                    (u = !1),
                this.resolvedRelativeTargetAt === te.timestamp && (u = !1),
                u)
            )
                return;
            const { layout: c, layoutId: f } = this.options;
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                    (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(c || f))
            )
                return;
            Ie(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x,
                m = this.treeScale.y;
            B1(this.layoutCorrected, this.treeScale, this.path, a),
                l.layout &&
                    !l.target &&
                    (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
                    (l.target = l.layout.layoutBox);
            const { target: y } = l;
            if (!y) {
                this.projectionTransform &&
                    ((this.projectionDelta = In()),
                    (this.projectionTransform = "none"),
                    this.scheduleRender());
                return;
            }
            this.projectionDelta ||
                ((this.projectionDelta = In()),
                (this.projectionDeltaWithTransform = In()));
            const x = this.projectionTransform;
            Dr(
                this.projectionDelta,
                this.layoutCorrected,
                y,
                this.latestValues
            ),
                (this.projectionTransform = pf(
                    this.projectionDelta,
                    this.treeScale
                )),
                (this.projectionTransform !== x ||
                    this.treeScale.x !== d ||
                    this.treeScale.y !== m) &&
                    ((this.hasProjected = !0),
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", y)),
                on.recalculatedProjection++;
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(s = !0) {
            if (
                (this.options.scheduleRender && this.options.scheduleRender(),
                s)
            ) {
                const l = this.getStack();
                l && l.scheduleRender();
            }
            this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
        }
        setAnimationOrigin(s, l = !1) {
            const a = this.snapshot,
                u = a ? a.latestValues : {},
                c = { ...this.latestValues },
                f = In();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !l);
            const d = re(),
                m = a ? a.source : void 0,
                y = this.layout ? this.layout.source : void 0,
                x = m !== y,
                E = this.getStack(),
                g = !E || E.members.length <= 1,
                h = !!(
                    x &&
                    !g &&
                    this.options.crossfade === !0 &&
                    !this.path.some(Lx)
                );
            this.animationProgress = 0;
            let p;
            (this.mixTargetDelta = (w) => {
                const S = w / 1e3;
                xf(f.x, s.x, S),
                    xf(f.y, s.y, S),
                    this.setTargetDelta(f),
                    this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.layout &&
                        this.relativeParent &&
                        this.relativeParent.layout &&
                        (Rr(
                            d,
                            this.layout.layoutBox,
                            this.relativeParent.layout.layoutBox
                        ),
                        Ex(
                            this.relativeTarget,
                            this.relativeTargetOrigin,
                            d,
                            S
                        ),
                        p &&
                            sx(this.relativeTarget, p) &&
                            (this.isProjectionDirty = !1),
                        p || (p = re()),
                        Ie(p, this.relativeTarget)),
                    x &&
                        ((this.animationValues = c),
                        ex(c, u, this.latestValues, S, h, g)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = S);
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom &&
                    this.resumingFrom.currentAnimation &&
                    this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation &&
                    (be(this.pendingAnimation),
                    (this.pendingAnimation = void 0)),
                (this.pendingAnimation = z.update(() => {
                    (Yi.hasAnimatedSinceResize = !0),
                        (this.currentAnimation = hx(0, gf, {
                            ...s,
                            onUpdate: (l) => {
                                this.mixTargetDelta(l),
                                    s.onUpdate && s.onUpdate(l);
                            },
                            onComplete: () => {
                                s.onComplete && s.onComplete(),
                                    this.completeAnimation();
                            },
                        })),
                        this.resumingFrom &&
                            (this.resumingFrom.currentAnimation = this.currentAnimation),
                        (this.pendingAnimation = void 0);
                }));
        }
        completeAnimation() {
            this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0));
            const s = this.getStack();
            s && s.exitAnimationComplete(),
                (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
                this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            this.currentAnimation &&
                (this.mixTargetDelta && this.mixTargetDelta(gf),
                this.currentAnimation.stop()),
                this.completeAnimation();
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: l,
                target: a,
                layout: u,
                latestValues: c,
            } = s;
            if (!(!l || !a || !u)) {
                if (
                    this !== s &&
                    this.layout &&
                    u &&
                    fm(
                        this.options.animationType,
                        this.layout.layoutBox,
                        u.layoutBox
                    )
                ) {
                    a = this.target || re();
                    const f = Ne(this.layout.layoutBox.x);
                    (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
                    const d = Ne(this.layout.layoutBox.y);
                    (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
                }
                Ie(l, a),
                    zn(l, c),
                    Dr(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        l,
                        c
                    );
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new lx()),
                this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity:
                    u && u.shouldPreserveFollowOpacity
                        ? u.shouldPreserveFollowOpacity(l)
                        : void 0,
            });
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0;
        }
        getLead() {
            var s;
            const { layoutId: l } = this.options;
            return l
                ? ((s = this.getStack()) === null || s === void 0
                      ? void 0
                      : s.lead) || this
                : this;
        }
        getPrevLead() {
            var s;
            const { layoutId: l } = this.options;
            return l
                ? (s = this.getStack()) === null || s === void 0
                    ? void 0
                    : s.prevLead
                : void 0;
        }
        getStack() {
            const { layoutId: s } = this.options;
            if (s) return this.root.sharedNodes.get(s);
        }
        promote({
            needsReset: s,
            transition: l,
            preserveFollowOpacity: a,
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, a),
                s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                l && this.setOptions({ transition: l });
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1;
        }
        resetRotation() {
            const { visualElement: s } = this.options;
            if (!s) return;
            let l = !1;
            const { latestValues: a } = s;
            if (
                ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0),
                !l)
            )
                return;
            const u = {};
            for (let c = 0; c < mf.length; c++) {
                const f = "rotate" + mf[c];
                a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
            }
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]);
            s.scheduleRender();
        }
        getProjectionStyles(s = {}) {
            var l, a;
            const u = {};
            if (!this.instance || this.isSVG) return u;
            if (this.isVisible) u.visibility = "";
            else return { visibility: "hidden" };
            const c = this.getTransformTemplate();
            if (this.needsReset)
                return (
                    (this.needsReset = !1),
                    (u.opacity = ""),
                    (u.pointerEvents = Qi(s.pointerEvents) || ""),
                    (u.transform = c ? c(this.latestValues, "") : "none"),
                    u
                );
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const x = {};
                return (
                    this.options.layoutId &&
                        ((x.opacity =
                            this.latestValues.opacity !== void 0
                                ? this.latestValues.opacity
                                : 1),
                        (x.pointerEvents = Qi(s.pointerEvents) || "")),
                    this.hasProjected &&
                        !rn(this.latestValues) &&
                        ((x.transform = c ? c({}, "") : "none"),
                        (this.hasProjected = !1)),
                    x
                );
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
                (u.transform = pf(
                    this.projectionDeltaWithTransform,
                    this.treeScale,
                    d
                )),
                c && (u.transform = c(d, u.transform));
            const { x: m, y } = this.projectionDelta;
            (u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
                f.animationValues
                    ? (u.opacity =
                          f === this
                              ? (a =
                                    (l = d.opacity) !== null && l !== void 0
                                        ? l
                                        : this.latestValues.opacity) !== null &&
                                a !== void 0
                                  ? a
                                  : 1
                              : this.preserveOpacity
                              ? this.latestValues.opacity
                              : d.opacityExit)
                    : (u.opacity =
                          f === this
                              ? d.opacity !== void 0
                                  ? d.opacity
                                  : ""
                              : d.opacityExit !== void 0
                              ? d.opacityExit
                              : 0);
            for (const x in ko) {
                if (d[x] === void 0) continue;
                const { correct: E, applyTo: g } = ko[x],
                    h = u.transform === "none" ? d[x] : E(d[x], f);
                if (g) {
                    const p = g.length;
                    for (let w = 0; w < p; w++) u[g[w]] = h;
                } else u[x] = h;
            }
            return (
                this.options.layoutId &&
                    (u.pointerEvents =
                        f === this ? Qi(s.pointerEvents) || "" : "none"),
                u
            );
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            this.root.nodes.forEach((s) => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0
                    ? void 0
                    : l.stop();
            }),
                this.root.nodes.forEach(yf),
                this.root.sharedNodes.clear();
        }
    };
}
function mx(e) {
    e.updateLayout();
}
function gx(e) {
    var t;
    const n =
        ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
        e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: i } = e.layout,
            { animationType: o } = e.options,
            s = n.source !== e.layout.source;
        o === "size"
            ? ot((f) => {
                  const d = s ? n.measuredBox[f] : n.layoutBox[f],
                      m = Ne(d);
                  (d.min = r[f].min), (d.max = d.min + m);
              })
            : fm(o, n.layoutBox, r) &&
              ot((f) => {
                  const d = s ? n.measuredBox[f] : n.layoutBox[f],
                      m = Ne(r[f]);
                  (d.max = d.min + m),
                      e.relativeTarget &&
                          !e.currentAnimation &&
                          ((e.isProjectionDirty = !0),
                          (e.relativeTarget[f].max =
                              e.relativeTarget[f].min + m));
              });
        const l = In();
        Dr(l, r, n.layoutBox);
        const a = In();
        s
            ? Dr(a, e.applyTransform(i, !0), n.measuredBox)
            : Dr(a, r, n.layoutBox);
        const u = !am(l);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const { snapshot: d, layout: m } = f;
                if (d && m) {
                    const y = re();
                    Rr(y, n.layoutBox, d.layoutBox);
                    const x = re();
                    Rr(x, r, m.layoutBox),
                        um(y, x) || (c = !0),
                        f.options.layoutRoot &&
                            ((e.relativeTarget = x),
                            (e.relativeTargetOrigin = y),
                            (e.relativeParent = f));
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c,
        });
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r();
    }
    e.options.transition = void 0;
}
function yx(e) {
    on.totalNodes++,
        e.parent &&
            (e.isProjecting() ||
                (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
                (e.isSharedProjectionDirty = !!(
                    e.isProjectionDirty ||
                    e.parent.isProjectionDirty ||
                    e.parent.isSharedProjectionDirty
                )),
            e.isTransformDirty ||
                (e.isTransformDirty = e.parent.isTransformDirty));
}
function vx(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xx(e) {
    e.clearSnapshot();
}
function yf(e) {
    e.clearMeasurements();
}
function wx(e) {
    e.isLayoutDirty = !1;
}
function Sx(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform();
}
function vf(e) {
    e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
}
function kx(e) {
    e.resolveTargetDelta();
}
function Px(e) {
    e.calcProjection();
}
function Cx(e) {
    e.resetRotation();
}
function Tx(e) {
    e.removeLeadSnapshot();
}
function xf(e, t, n) {
    (e.translate = Q(t.translate, 0, n)),
        (e.scale = Q(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
}
function wf(e, t, n, r) {
    (e.min = Q(t.min, n.min, r)), (e.max = Q(t.max, n.max, r));
}
function Ex(e, t, n, r) {
    wf(e.x, t.x, n.x, r), wf(e.y, t.y, n.y, r);
}
function Lx(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Vx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Sf = (e) =>
        typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
    kf = Sf("applewebkit/") && !Sf("chrome/") ? Math.round : J;
function Pf(e) {
    (e.min = kf(e.min)), (e.max = kf(e.max));
}
function jx(e) {
    Pf(e.x), Pf(e.y);
}
function fm(e, t, n) {
    return (
        e === "position" || (e === "preserve-aspect" && !Wl(hf(t), hf(n), 0.2))
    );
}
const Mx = cm({
        attachResizeListener: (e, t) => mt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
    }),
    Us = { current: void 0 },
    dm = cm({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
            if (!Us.current) {
                const e = new Mx({});
                e.mount(window),
                    e.setOptions({ layoutScroll: !0 }),
                    (Us.current = e);
            }
            return Us.current;
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none";
        },
        checkIsScrollRoot: (e) =>
            window.getComputedStyle(e).position === "fixed",
    }),
    Ax = {
        pan: { Feature: Y1 },
        drag: { Feature: Q1, ProjectionNode: dm, MeasureLayout: om },
    },
    Dx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Rx(e) {
    const t = Dx.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
}
function Ql(e, t, n = 1) {
    const [r, i] = Rx(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Xp(s) ? parseFloat(s) : s;
    } else return Ol(i) ? Ql(i, t, n + 1) : i;
}
function Nx(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element)) return { target: t, transitionEnd: n };
    n && (n = { ...n }),
        e.values.forEach((i) => {
            const o = i.get();
            if (!Ol(o)) return;
            const s = Ql(o, r);
            s && i.set(s);
        });
    for (const i in t) {
        const o = t[i];
        if (!Ol(o)) continue;
        const s = Ql(o, r);
        s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
    }
    return { target: t, transitionEnd: n };
}
const _x = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        "x",
        "y",
        "translateX",
        "translateY",
    ]),
    hm = (e) => _x.has(e),
    Ox = (e) => Object.keys(e).some(hm),
    Cf = (e) => e === wn || e === A,
    Tf = (e, t) => parseFloat(e.split(", ")[t]),
    Ef = (e, t) => (n, { transform: r }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return Tf(i[1], t);
        {
            const o = r.match(/^matrix\((.+)\)$/);
            return o ? Tf(o[1], e) : 0;
        }
    },
    Fx = new Set(["x", "y", "z"]),
    Ix = li.filter((e) => !Fx.has(e));
function zx(e) {
    const t = [];
    return (
        Ix.forEach((n) => {
            const r = e.getValue(n);
            r !== void 0 &&
                (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
        }),
        t.length && e.render(),
        t
    );
}
const er = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Ef(4, 13),
    y: Ef(5, 14),
};
er.translateX = er.x;
er.translateY = er.y;
const Bx = (e, t, n) => {
        const r = t.measureViewportBox(),
            i = t.current,
            o = getComputedStyle(i),
            { display: s } = o,
            l = {};
        s === "none" && t.setStaticValue("display", e.display || "block"),
            n.forEach((u) => {
                l[u] = er[u](r, o);
            }),
            t.render();
        const a = t.measureViewportBox();
        return (
            n.forEach((u) => {
                const c = t.getValue(u);
                c && c.jump(l[u]), (e[u] = er[u](a, o));
            }),
            e
        );
    },
    Ux = (e, t, n = {}, r = {}) => {
        (t = { ...t }), (r = { ...r });
        const i = Object.keys(t).filter(hm);
        let o = [],
            s = !1;
        const l = [];
        if (
            (i.forEach((a) => {
                const u = e.getValue(a);
                if (!e.hasValue(a)) return;
                let c = n[a],
                    f = dr(c);
                const d = t[a];
                let m;
                if (Co(d)) {
                    const y = d.length,
                        x = d[0] === null ? 1 : 0;
                    (c = d[x]), (f = dr(c));
                    for (let E = x; E < y && d[E] !== null; E++)
                        m ? ts(dr(d[E]) === m) : (m = dr(d[E]));
                } else m = dr(d);
                if (f !== m)
                    if (Cf(f) && Cf(m)) {
                        const y = u.get();
                        typeof y == "string" && u.set(parseFloat(y)),
                            typeof d == "string"
                                ? (t[a] = parseFloat(d))
                                : Array.isArray(d) &&
                                  m === A &&
                                  (t[a] = d.map(parseFloat));
                    } else
                        f != null &&
                        f.transform &&
                        m != null &&
                        m.transform &&
                        (c === 0 || d === 0)
                            ? c === 0
                                ? u.set(m.transform(c))
                                : (t[a] = f.transform(d))
                            : (s || ((o = zx(e)), (s = !0)),
                              l.push(a),
                              (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                              u.jump(d));
            }),
            l.length)
        ) {
            const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                u = Bx(t, e, l);
            return (
                o.length &&
                    o.forEach(([c, f]) => {
                        e.getValue(c).set(f);
                    }),
                e.render(),
                Qo && a !== null && window.scrollTo({ top: a }),
                { target: u, transitionEnd: r }
            );
        } else return { target: t, transitionEnd: r };
    };
function Hx(e, t, n, r) {
    return Ox(t) ? Ux(e, t, n, r) : { target: t, transitionEnd: r };
}
const Wx = (e, t, n, r) => {
        const i = Nx(e, t, r);
        return (t = i.target), (r = i.transitionEnd), Hx(e, t, n, r);
    },
    Yl = { current: null },
    pm = { current: !1 };
function $x() {
    if (((pm.current = !0), !!Qo))
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => (Yl.current = e.matches);
            e.addListener(t), t();
        } else Yl.current = !1;
}
function Gx(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
        const o = t[i],
            s = n[i];
        if (ge(o)) e.addValue(i, o), Lo(r) && r.add(i);
        else if (ge(s))
            e.addValue(i, Xe(o, { owner: e })), Lo(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(o);
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, Xe(l !== void 0 ? l : o, { owner: e }));
            }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t;
}
const Lf = new WeakMap(),
    mm = Object.keys(br),
    Kx = mm.length,
    Vf = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
    ],
    Qx = Ya.length;
class Yx {
    constructor(
        {
            parent: t,
            props: n,
            presenceContext: r,
            reducedMotionConfig: i,
            visualState: o,
        },
        s = {}
    ) {
        (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current &&
                    (this.triggerBuild(),
                    this.renderInstance(
                        this.current,
                        this.renderState,
                        this.props.style,
                        this.projection
                    ));
            }),
            (this.scheduleRender = () => z.render(this.render, !1, !0));
        const { latestValues: l, renderState: a } = o;
        (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = n.initial ? { ...l } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = n),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.isControllingVariants = Zo(n)),
            (this.isVariantNode = bh(n)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
        const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            l[f] !== void 0 && ge(d) && (d.set(l[f], !1), Lo(u) && u.add(f));
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {};
    }
    mount(t) {
        (this.current = t),
            Lf.set(t, this),
            this.projection &&
                !this.projection.instance &&
                this.projection.mount(t),
            this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree = this.parent.addVariantChild(
                    this
                )),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
            pm.current || $x(),
            (this.shouldReduceMotion =
                this.reducedMotionConfig === "never"
                    ? !1
                    : this.reducedMotionConfig === "always"
                    ? !0
                    : Yl.current),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
    }
    unmount() {
        Lf.delete(this.current),
            this.projection && this.projection.unmount(),
            be(this.notifyUpdate),
            be(this.render),
            this.valueSubscriptions.forEach((t) => t()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null;
    }
    bindToMotionValue(t, n) {
        const r = xn.has(t),
            i = n.on("change", (s) => {
                (this.latestValues[t] = s),
                    this.props.onUpdate && z.update(this.notifyUpdate, !1, !0),
                    r &&
                        this.projection &&
                        (this.projection.isTransformDirty = !0);
            }),
            o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), o();
        });
    }
    sortNodePosition(t) {
        return !this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== t.type
            ? 0
            : this.sortInstanceNodePosition(this.current, t.current);
    }
    loadFeatures({ children: t, ...n }, r, i, o) {
        let s, l;
        for (let a = 0; a < Kx; a++) {
            const u = mm[a],
                {
                    isEnabled: c,
                    Feature: f,
                    ProjectionNode: d,
                    MeasureLayout: m,
                } = br[u];
            d && (s = d),
                c(n) &&
                    (!this.features[u] && f && (this.features[u] = new f(this)),
                    m && (l = m));
        }
        if (!this.projection && s) {
            this.projection = new s(
                this.latestValues,
                this.parent && this.parent.projection
            );
            const {
                layoutId: a,
                layout: u,
                drag: c,
                dragConstraints: f,
                layoutScroll: d,
                layoutRoot: m,
            } = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || (f && On(f)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: o,
                layoutScroll: d,
                layoutRoot: m,
            });
        }
        return l;
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
        }
    }
    triggerBuild() {
        this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
        );
    }
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : re();
    }
    getStaticValue(t) {
        return this.latestValues[t];
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n;
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n);
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = n);
        for (let r = 0; r < Vf.length; r++) {
            const i = Vf[r];
            this.propEventSubscriptions[i] &&
                (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
            const o = t["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o));
        }
        (this.prevMotionValues = Gx(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
        )),
            this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return (
                this.props.initial !== void 0 &&
                    (r.initial = this.props.initial),
                r
            );
        }
        const n = {};
        for (let r = 0; r < Qx; r++) {
            const i = Ya[r],
                o = this.props[i];
            (qr(o) || o === !1) && (n[i] = o);
        }
        return n;
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return (
                n.variantChildren && n.variantChildren.add(t),
                () => n.variantChildren.delete(t)
            );
    }
    addValue(t, n) {
        n !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, n)),
            this.values.set(t, n),
            (this.latestValues[t] = n.get());
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
        return this.values.has(t);
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return (
            r === void 0 &&
                n !== void 0 &&
                ((r = Xe(n, { owner: this })), this.addValue(t, r)),
            r
        );
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current
            ? this.latestValues[t]
            : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
              n !== void 0
            ? n
            : this.readValueFromInstance(this.current, t, this.options);
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props,
            i =
                typeof r == "string" || typeof r == "object"
                    ? (n = nu(this.props, r)) === null || n === void 0
                        ? void 0
                        : n[t]
                    : void 0;
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !ge(o)
            ? o
            : this.initialValues[t] !== void 0 && i === void 0
            ? void 0
            : this.baseTarget[t];
    }
    on(t, n) {
        return (
            this.events[t] || (this.events[t] = new fu()), this.events[t].add(n)
        );
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n);
    }
}
class gm extends Yx {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t], delete r[t];
    }
    makeTargetAnimatableFromInstance(
        { transition: t, transitionEnd: n, ...r },
        { transformValues: i },
        o
    ) {
        let s = h1(r, t || {}, this);
        if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
            f1(this, r, s);
            const l = Wx(this, r, s, n);
            (n = l.transitionEnd), (r = l.target);
        }
        return { transition: t, transitionEnd: n, ...r };
    }
}
function Xx(e) {
    return window.getComputedStyle(e);
}
class Zx extends gm {
    readValueFromInstance(t, n) {
        if (xn.has(n)) {
            const r = lu(n);
            return (r && r.default) || 0;
        } else {
            const r = Xx(t),
                i = (ip(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i;
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return im(t, n);
    }
    build(t, n, r, i) {
        Za(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n) {
        return tu(t, n);
    }
    handleChildMotionValue() {
        this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
        const { children: t } = this.props;
        ge(t) &&
            (this.childSubscription = t.on("change", (n) => {
                this.current && (this.current.textContent = `${n}`);
            }));
    }
    renderInstance(t, n, r, i) {
        cp(t, n, r, i);
    }
}
class Jx extends gm {
    constructor() {
        super(...arguments), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(t, n) {
        return t[n];
    }
    readValueFromInstance(t, n) {
        if (xn.has(n)) {
            const r = lu(n);
            return (r && r.default) || 0;
        }
        return (n = fp.has(n) ? n : eu(n)), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
        return re();
    }
    scrapeMotionValuesFromProps(t, n) {
        return hp(t, n);
    }
    build(t, n, r, i) {
        qa(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
        dp(t, n, r, i);
    }
    mount(t) {
        (this.isSVGTag = ba(t.tagName)), super.mount(t);
    }
}
const qx = (e, t) =>
        Xa(e)
            ? new Jx(t, { enableHardwareAcceleration: !1 })
            : new Zx(t, { enableHardwareAcceleration: !0 }),
    bx = { layout: { ProjectionNode: dm, MeasureLayout: om } },
    ew = { ...L1, ...Xy, ...Ax, ...bx },
    M = iy((e, t) => Oy(e, t, ew, qx));
function ym(e) {
    const t = qo(() => Xe(e)),
        { isStatic: n } = j.useContext(Go);
    if (n) {
        const [, r] = j.useState(e);
        j.useEffect(() => t.on("change", r), []);
    }
    return t;
}
const tw = (e) => typeof e == "object" && e.mix,
    nw = (e) => (tw(e) ? e.mix : void 0);
function rw(...e) {
    const t = !Array.isArray(e[0]),
        n = t ? 0 : -1,
        r = e[0 + n],
        i = e[1 + n],
        o = e[2 + n],
        s = e[3 + n],
        l = ns(i, o, { mixer: nw(o[0]), ...s });
    return t ? l(r) : l;
}
function vm(e, t) {
    const n = ym(t()),
        r = () => n.set(t());
    return (
        r(),
        Yo(() => {
            const i = () => z.update(r, !1, !0),
                o = e.map((s) => s.on("change", i));
            return () => {
                o.forEach((s) => s()), be(r);
            };
        }),
        n
    );
}
function iw(e) {
    (Ar.current = []), e();
    const t = vm(Ar.current, e);
    return (Ar.current = void 0), t;
}
function Xl(e, t, n, r) {
    if (typeof e == "function") return iw(e);
    const i = typeof t == "function" ? t : rw(t, n, r);
    return Array.isArray(e) ? jf(e, i) : jf([e], ([o]) => i(o));
}
function jf(e, t) {
    const n = qo(() => []);
    return vm(e, () => {
        n.length = 0;
        const r = e.length;
        for (let i = 0; i < r; i++) n[i] = e[i].get();
        return t(n);
    });
}
function ow(e, t = {}) {
    const { isStatic: n } = j.useContext(Go),
        r = j.useRef(null),
        i = ym(ge(e) ? e.get() : e),
        o = () => {
            r.current && r.current.stop();
        };
    return (
        j.useInsertionEffect(
            () =>
                i.attach((s, l) => {
                    if (n) return l(s);
                    if (
                        (o(),
                        (r.current = ei({
                            keyframes: [i.get(), s],
                            velocity: i.getVelocity(),
                            type: "spring",
                            restDelta: 0.001,
                            restSpeed: 0.01,
                            ...t,
                            onUpdate: l,
                        })),
                        !te.isProcessing)
                    ) {
                        const a = performance.now() - te.timestamp;
                        a < 30 && (r.current.time = ct(a));
                    }
                    return i.get();
                }, o),
            [JSON.stringify(t)]
        ),
        Yo(() => {
            if (ge(e)) return e.on("change", (s) => i.set(parseFloat(s)));
        }, [i]),
        i
    );
}
function xm(e, t, n) {
    var r;
    if (typeof e == "string") {
        let i = document;
        t && (ts(!!t.current), (i = t.current)),
            n
                ? (((r = n[e]) !== null && r !== void 0) ||
                      (n[e] = i.querySelectorAll(e)),
                  (e = n[e]))
                : (e = i.querySelectorAll(e));
    } else e instanceof Element && (e = [e]);
    return Array.from(e || []);
}
const Xi = new WeakMap();
let Tt;
function sw(e, t) {
    if (t) {
        const { inlineSize: n, blockSize: r } = t[0];
        return { width: n, height: r };
    } else
        return e instanceof SVGElement && "getBBox" in e
            ? e.getBBox()
            : { width: e.offsetWidth, height: e.offsetHeight };
}
function lw({ target: e, contentRect: t, borderBoxSize: n }) {
    var r;
    (r = Xi.get(e)) === null ||
        r === void 0 ||
        r.forEach((i) => {
            i({
                target: e,
                contentSize: t,
                get size() {
                    return sw(e, n);
                },
            });
        });
}
function aw(e) {
    e.forEach(lw);
}
function uw() {
    typeof ResizeObserver > "u" || (Tt = new ResizeObserver(aw));
}
function cw(e, t) {
    Tt || uw();
    const n = xm(e);
    return (
        n.forEach((r) => {
            let i = Xi.get(r);
            i || ((i = new Set()), Xi.set(r, i)),
                i.add(t),
                Tt == null || Tt.observe(r);
        }),
        () => {
            n.forEach((r) => {
                const i = Xi.get(r);
                i == null || i.delete(t),
                    (i != null && i.size) || Tt == null || Tt.unobserve(r);
            });
        }
    );
}
const Zi = new Set();
let Nr;
function fw() {
    (Nr = () => {
        const e = { width: window.innerWidth, height: window.innerHeight },
            t = { target: window, size: e, contentSize: e };
        Zi.forEach((n) => n(t));
    }),
        window.addEventListener("resize", Nr);
}
function dw(e) {
    return (
        Zi.add(e),
        Nr || fw(),
        () => {
            Zi.delete(e), !Zi.size && Nr && (Nr = void 0);
        }
    );
}
function hw(e, t) {
    return typeof e == "function" ? dw(e) : cw(e, t);
}
const pw = 50,
    Mf = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
    }),
    mw = () => ({ time: 0, x: Mf(), y: Mf() }),
    gw = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
    };
function Af(e, t, n, r) {
    const i = n[t],
        { length: o, position: s } = gw[t],
        l = i.current,
        a = n.time;
    (i.current = e["scroll" + s]),
        (i.scrollLength = e["scroll" + o] - e["client" + o]),
        (i.offset.length = 0),
        (i.offset[0] = 0),
        (i.offset[1] = i.scrollLength),
        (i.progress = bn(0, i.scrollLength, i.current));
    const u = r - a;
    i.velocity = u > pw ? 0 : su(i.current - l, u);
}
function yw(e, t, n) {
    Af(e, "x", t, n), Af(e, "y", t, n), (t.time = n);
}
function vw(e, t) {
    const n = { x: 0, y: 0 };
    let r = e;
    for (; r && r !== t; )
        if (r instanceof HTMLElement)
            (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
        else if (r.tagName === "svg") {
            const i = r.getBoundingClientRect();
            r = r.parentElement;
            const o = r.getBoundingClientRect();
            (n.x += i.left - o.left), (n.y += i.top - o.top);
        } else if (r instanceof SVGGraphicsElement) {
            const { x: i, y: o } = r.getBBox();
            (n.x += i), (n.y += o);
            let s = null,
                l = r.parentNode;
            for (; !s; ) l.tagName === "svg" && (s = l), (l = r.parentNode);
            r = s;
        } else break;
    return n;
}
const xw = {
        Enter: [
            [0, 1],
            [1, 1],
        ],
        Exit: [
            [0, 0],
            [1, 0],
        ],
        Any: [
            [1, 0],
            [0, 1],
        ],
        All: [
            [0, 0],
            [1, 1],
        ],
    },
    Zl = { start: 0, center: 0.5, end: 1 };
function Df(e, t, n = 0) {
    let r = 0;
    if ((Zl[e] !== void 0 && (e = Zl[e]), typeof e == "string")) {
        const i = parseFloat(e);
        e.endsWith("px")
            ? (r = i)
            : e.endsWith("%")
            ? (e = i / 100)
            : e.endsWith("vw")
            ? (r = (i / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (i / 100) * document.documentElement.clientHeight)
            : (e = i);
    }
    return typeof e == "number" && (r = t * e), n + r;
}
const ww = [0, 0];
function Sw(e, t, n, r) {
    let i = Array.isArray(e) ? e : ww,
        o = 0,
        s = 0;
    return (
        typeof e == "number"
            ? (i = [e, e])
            : typeof e == "string" &&
              ((e = e.trim()),
              e.includes(" ")
                  ? (i = e.split(" "))
                  : (i = [e, Zl[e] ? e : "0"])),
        (o = Df(i[0], n, r)),
        (s = Df(i[1], t)),
        o - s
    );
}
const kw = { x: 0, y: 0 };
function Pw(e) {
    return "getBBox" in e && e.tagName !== "svg"
        ? e.getBBox()
        : { width: e.clientWidth, height: e.clientHeight };
}
function Cw(e, t, n) {
    let { offset: r = xw.All } = n;
    const { target: i = e, axis: o = "y" } = n,
        s = o === "y" ? "height" : "width",
        l = i !== e ? vw(i, e) : kw,
        a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : Pw(i),
        u = { width: e.clientWidth, height: e.clientHeight };
    t[o].offset.length = 0;
    let c = !t[o].interpolate;
    const f = r.length;
    for (let d = 0; d < f; d++) {
        const m = Sw(r[d], u[s], a[s], l[o]);
        !c && m !== t[o].interpolatorOffsets[d] && (c = !0),
            (t[o].offset[d] = m);
    }
    c &&
        ((t[o].interpolate = ns(t[o].offset, Wp(r))),
        (t[o].interpolatorOffsets = [...t[o].offset])),
        (t[o].progress = t[o].interpolate(t[o].current));
}
function Tw(e, t = e, n) {
    if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
        let r = t;
        for (; r && r !== e; )
            (n.x.targetOffset += r.offsetLeft),
                (n.y.targetOffset += r.offsetTop),
                (r = r.offsetParent);
    }
    (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
        (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
        (n.x.containerLength = e.clientWidth),
        (n.y.containerLength = e.clientHeight);
}
function Ew(e, t, n, r = {}) {
    return {
        measure: () => Tw(e, r.target, n),
        update: (i) => {
            yw(e, n, i), (r.offset || r.target) && Cw(e, n, r);
        },
        notify: () => t(n),
    };
}
const pr = new WeakMap(),
    Rf = new WeakMap(),
    Hs = new WeakMap(),
    Nf = (e) => (e === document.documentElement ? window : e);
function Lw(e, { container: t = document.documentElement, ...n } = {}) {
    let r = Hs.get(t);
    r || ((r = new Set()), Hs.set(t, r));
    const i = mw(),
        o = Ew(t, e, i, n);
    if ((r.add(o), !pr.has(t))) {
        const l = () => {
                for (const d of r) d.measure();
            },
            a = () => {
                for (const d of r) d.update(te.timestamp);
            },
            u = () => {
                for (const d of r) d.notify();
            },
            c = () => {
                z.read(l, !1, !0), z.update(a, !1, !0), z.update(u, !1, !0);
            };
        pr.set(t, c);
        const f = Nf(t);
        window.addEventListener("resize", c, { passive: !0 }),
            t !== document.documentElement && Rf.set(t, hw(t, c)),
            f.addEventListener("scroll", c, { passive: !0 });
    }
    const s = pr.get(t);
    return (
        z.read(s, !1, !0),
        () => {
            var l;
            be(s);
            const a = Hs.get(t);
            if (!a || (a.delete(o), a.size)) return;
            const u = pr.get(t);
            pr.delete(t),
                u &&
                    (Nf(t).removeEventListener("scroll", u),
                    (l = Rf.get(t)) === null || l === void 0 || l(),
                    window.removeEventListener("resize", u));
        }
    );
}
function _f(e, t) {
    Sp(!!(!t || t.current));
}
const Vw = () => ({
    scrollX: Xe(0),
    scrollY: Xe(0),
    scrollXProgress: Xe(0),
    scrollYProgress: Xe(0),
});
function du({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
    const i = qo(Vw);
    return (
        (n ? Yo : j.useEffect)(
            () => (
                _f("target", t),
                _f("container", e),
                Lw(
                    ({ x: s, y: l }) => {
                        i.scrollX.set(s.current),
                            i.scrollXProgress.set(s.progress),
                            i.scrollY.set(l.current),
                            i.scrollYProgress.set(l.progress);
                    },
                    {
                        ...r,
                        container: (e == null ? void 0 : e.current) || void 0,
                        target: (t == null ? void 0 : t.current) || void 0,
                    }
                )
            ),
            [e, t, JSON.stringify(r.offset)]
        ),
        i
    );
}
const jw = { some: 0, all: 1 };
function Mw(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
    const o = xm(e),
        s = new WeakMap(),
        l = (u) => {
            u.forEach((c) => {
                const f = s.get(c.target);
                if (c.isIntersecting !== !!f)
                    if (c.isIntersecting) {
                        const d = t(c);
                        typeof d == "function"
                            ? s.set(c.target, d)
                            : a.unobserve(c.target);
                    } else f && (f(c), s.delete(c.target));
            });
        },
        a = new IntersectionObserver(l, {
            root: n,
            rootMargin: r,
            threshold: typeof i == "number" ? i : jw[i],
        });
    return o.forEach((u) => a.observe(u)), () => a.disconnect();
}
function wm(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
    const [o, s] = j.useState(!1);
    return (
        j.useEffect(() => {
            if (!e.current || (i && o)) return;
            const l = () => (s(!0), i ? void 0 : () => s(!1)),
                a = { root: (t && t.current) || void 0, margin: n, amount: r };
            return Mw(e.current, l, a);
        }, [t, e, n, i]),
        o
    );
}
const ti = { _origin: "https://api.emailjs.com" },
    Aw = (e, t = "https://api.emailjs.com") => {
        (ti._userID = e), (ti._origin = t);
    },
    Sm = (e, t, n) => {
        if (!e)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!n)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0;
    };
class Of {
    constructor(t) {
        (this.status = t ? t.status : 0),
            (this.text = t ? t.responseText : "Network Error");
    }
}
const km = (e, t, n = {}) =>
        new Promise((r, i) => {
            const o = new XMLHttpRequest();
            o.addEventListener("load", ({ target: s }) => {
                const l = new Of(s);
                l.status === 200 || l.text === "OK" ? r(l) : i(l);
            }),
                o.addEventListener("error", ({ target: s }) => {
                    i(new Of(s));
                }),
                o.open("POST", ti._origin + e, !0),
                Object.keys(n).forEach((s) => {
                    o.setRequestHeader(s, n[s]);
                }),
                o.send(t);
        }),
    Dw = (e, t, n, r) => {
        const i = r || ti._userID;
        return (
            Sm(i, e, t),
            km(
                "/api/v1.0/email/send",
                JSON.stringify({
                    lib_version: "3.11.0",
                    user_id: i,
                    service_id: e,
                    template_id: t,
                    template_params: n,
                }),
                { "Content-type": "application/json" }
            )
        );
    },
    Rw = (e) => {
        let t;
        if (
            (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
            !t || t.nodeName !== "FORM")
        )
            throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
        return t;
    },
    Nw = (e, t, n, r) => {
        const i = r || ti._userID,
            o = Rw(n);
        Sm(i, e, t);
        const s = new FormData(o);
        return (
            s.append("lib_version", "3.11.0"),
            s.append("service_id", e),
            s.append("template_id", t),
            s.append("user_id", i),
            km("/api/v1.0/email/send-form", s)
        );
    },
    _w = { init: Aw, send: Dw, sendForm: Nw },
    Pn = {
        initial: { y: 500, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.1 },
        },
    },
    Ow = () => {
        const e = j.useRef(),
            t = j.useRef(),
            [n, r] = j.useState(!1),
            [i, o] = j.useState(!1),
            s = wm(e, { margin: "-100px" }),
            l = (a) => {
                a.preventDefault(),
                    _w
                        .sendForm(
                            "service_94y20xo",
                            "template_v10u2oh",
                            t.current,
                            "pX_2hasGmGcuvjXIW"
                        )
                        .then(
                            (u) => {
                                o(!0);
                            },
                            (u) => {
                                r(!0);
                            }
                        );
            };
        return v.jsxs(M.div, {
            ref: e,
            className: "contact",
            variants: Pn,
            initial: "initial",
            whileInView: "animate",
            children: [
                v.jsxs(M.div, {
                    className: "textContainer",
                    variants: Pn,
                    children: [
                        v.jsx(M.h1, {
                            variants: Pn,
                            children: "Engage in Collaboration",
                        }),
                        v.jsxs(M.div, {
                            className: "item",
                            variants: Pn,
                            children: [
                                v.jsx("h2", { children: "Mail" }),
                                v.jsx("span", {
                                    children:
                                        "Neilalbertdelacruz.scc@gmail.com",
                                }),
                            ],
                        }),
                        v.jsxs(M.div, {
                            className: "item",
                            variants: Pn,
                            children: [
                                v.jsx("h2", { children: "Address" }),
                                v.jsx("span", {
                                    children:
                                        "BLK 6 LT 3, Sampaguita st. Almar Subd. Bgy. 177",
                                }),
                            ],
                        }),
                        v.jsxs(M.div, {
                            className: "item",
                            variants: Pn,
                            children: [
                                v.jsx("h2", { children: "Phone" }),
                                v.jsx("span", { children: "+63 951 729 2776" }),
                            ],
                        }),
                    ],
                }),
                v.jsxs("div", {
                    className: "formContainer",
                    children: [
                        v.jsx(M.div, {
                            className: "phoneSvg",
                            initial: { opacity: 1 },
                            whileInView: { opacity: 0 },
                            transition: { delay: 3, duration: 1 },
                            children: v.jsx("svg", {
                                width: "450px",
                                height: "450px",
                                viewBox: "0 0 32.666 32.666",
                                children: v.jsx(M.path, {
                                    strokeWidth: 0.2,
                                    fill: "none",
                                    initial: { pathLength: 0 },
                                    animate: s && { pathLength: 1 },
                                    transition: { duration: 3 },
                                    d: `M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z`,
                                }),
                            }),
                        }),
                        v.jsxs(M.form, {
                            ref: t,
                            onSubmit: l,
                            initial: { opacity: 0 },
                            whileInView: { opacity: 1 },
                            transition: { delay: 4, duration: 1 },
                            children: [
                                v.jsx("input", {
                                    type: "text",
                                    required: !0,
                                    placeholder: "Name",
                                    name: "name",
                                }),
                                v.jsx("input", {
                                    type: "email",
                                    required: !0,
                                    placeholder: "Email",
                                    name: "email",
                                }),
                                v.jsx("textarea", {
                                    rows: 8,
                                    placeholder: "Message",
                                    name: "message",
                                }),
                                v.jsx("button", { children: "Submit" }),
                                n && "Email Sent",
                                i && "Email Sent",
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
const Fw = () => {
    const [e, t] = j.useState({ x: 0, y: 0 });
    return (
        j.useEffect(() => {
            const n = (r) => {
                t({ x: r.clientX, y: r.clientY });
            };
            return (
                window.addEventListener("mousemove", n),
                () => {
                    window.removeEventListener("mousemove", n);
                }
            );
        }, []),
        v.jsx(M.div, {
            className: "cursor",
            animate: { x: e.x + 10, y: e.y + 10 },
        })
    );
};
const Iw = {
        initial: { x: -500, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, staggerChildren: 0.1 },
        },
    },
    Ri = {
        initial: { x: -500, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, staggerChildren: 0.1 },
            animate: {},
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: { duration: 2, repeat: 1 / 0 },
        },
    },
    Ff = {
        initial: { x: 0 },
        animate: {
            x: "-220%",
            transition: { repeat: 1 / 0, repeatType: "mirror", duration: 20 },
        },
    },
    zw = () =>
        v.jsxs("div", {
            className: "hero",
            children: [
                v.jsx("div", {
                    className: "wrapper",
                    children: v.jsxs(M.div, {
                        className: "textContainer",
                        variants: Ri,
                        initial: "initial",
                        animate: "animate",
                        children: [
                            v.jsx(M.img, {
                                className: "nameLogo",
                                src: "/namelogo.png",
                                alt: "",
                            }),
                            v.jsx(M.h2, {
                                variants: Ri,
                                children: "Neil Albert Dela Cruz",
                            }),
                            v.jsx(M.h2, {
                                variants: Ri,
                                children:
                                    "Web Developer, Hardware Technician, and aspiring Software Engineer",
                            }),
                            v.jsx(M.img, {
                                variants: Ri,
                                animate: "scrollButton",
                                src: "/scroll.png",
                                alt: "",
                            }),
                        ],
                    }),
                }),
                v.jsx(M.div, {
                    className: "slidingTextContainer",
                    variants: Ff,
                    initial: "initial",
                    animate: "animate",
                    children: "GAMER/PROGRAMMER",
                }),
                v.jsx(M.div, {
                    className: "slidingTextContainer2",
                    variants: Ff,
                    initial: "initial",
                    animate: "animate",
                    children: "PROGRAMMER/GAMER",
                }),
                v.jsx("div", {
                    variants: Iw,
                    className: "imageContainer",
                    children: v.jsx("img", { src: "/me.png", alt: "" }),
                }),
            ],
        });
const Bw = {
        open: { transition: { staggerChildren: 0.1 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    },
    Uw = { open: { y: 0, opacity: 1 }, closed: { y: 50, opacity: 0 } },
    Hw = () => {
        const e = ["Homepage", "About", "Services", "Portfolio", "Contact"];
        return v.jsx(M.div, {
            className: "links",
            variants: Bw,
            children: e.map((t) =>
                v.jsx(
                    M.a,
                    {
                        href: `#${t}`,
                        variants: Uw,
                        whileHover: { scale: 1.1 },
                        whileTap: { scale: 0.95 },
                        children: t,
                    },
                    t
                )
            ),
        });
    };
const Ww = ({ setOpen: e }) =>
        v.jsx("button", {
            onClick: () => e((t) => !t),
            children: v.jsxs("svg", {
                width: "23",
                height: "23",
                viewBox: "0 0 23 23",
                children: [
                    v.jsx(M.path, {
                        strokeWidth: "3",
                        stroke: "black",
                        strokeLinecap: "round",
                        variants: {
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" },
                        },
                    }),
                    v.jsx(M.path, {
                        strokeWidth: "3",
                        stroke: "black",
                        strokeLinecap: "round",
                        d: "M 2 9.423 L 20 9.423",
                        variants: {
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        },
                    }),
                    v.jsx(M.path, {
                        strokeWidth: "3",
                        stroke: "black",
                        strokeLinecap: "round",
                        variants: {
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" },
                        },
                    }),
                ],
            }),
        }),
    $w = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: { type: "spring", stiffness: 20 },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    },
    Gw = () => {
        const [e, t] = j.useState(!1);
        return v.jsxs(M.div, {
            className: "sidebar",
            animate: e ? "open" : "closed",
            children: [
                v.jsx(M.div, {
                    className: "bg",
                    variants: $w,
                    children: v.jsx(Hw, {}),
                }),
                v.jsx(Ww, { setOpen: t }),
            ],
        });
    };
const Kw = () =>
        v.jsxs("div", {
            className: "navbar",
            children: [
                v.jsx(Gw, {}),
                v.jsxs("div", {
                    className: "wrapper",
                    children: [
                        v.jsx(M.span, {
                            initial: { opacity: 0, scale: 0.5 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { duration: 0.5 },
                            children: "Neil Albert Dela Cruz",
                        }),
                        v.jsxs("div", {
                            className: "social",
                            children: [
                                v.jsx("a", {
                                    href:
                                        "https://www.facebook.com/neilalbert.delacruz/",
                                    children: v.jsx("img", {
                                        src: "/facebook.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href: "https://www.instagram.com/neilq_18/",
                                    children: v.jsx("img", {
                                        src: "/instagram.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href: "https://github.com/WH20ter21",
                                    children: v.jsx("img", {
                                        src: "/github.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href:
                                        "https://www.linkedin.com/in/dela-cruz-neil-albert-b-874157242/",
                                    children: v.jsx("img", {
                                        src: "/linkedin.png",
                                        alt: "",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    Qw = {
        initial: { x: -500, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, staggerChildren: 0.1 },
        },
    },
    rt = {
        initial: { x: -500, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, staggerChildren: 0.1 },
            animate: {},
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: { duration: 2, repeat: 1 / 0 },
        },
    },
    Yw = () =>
        v.jsxs("div", {
            className: "about",
            children: [
                v.jsx("div", {
                    className: "wrapper",
                    children: v.jsxs(M.div, {
                        className: "textContainer",
                        variants: rt,
                        initial: "initial",
                        animate: "animate",
                        children: [
                            v.jsx(M.h2, {
                                variants: rt,
                                children: "Hello, I'm Neil,",
                            }),
                            v.jsx(M.h3, {
                                variants: rt,
                                children:
                                    "and I'm passionate about the world of technology, with a strong background in hardware and a burning ambition to become a proficient web developer and programmer. With a deep-rooted fascination for the intricate components that power computers, I've honed my skills in hardware, understanding the inner workings of these machines. Now, I'm on an exciting journey to harness the power of software and web development, aiming to create dynamic and user-friendly online experiences. Join me as I bridge the gap between hardware and software, shaping the digital landscape one line of code at a time.",
                            }),
                            v.jsx(M.h2, {
                                variants: rt,
                                children: "Work Experiences",
                            }),
                            v.jsxs(M.h3, {
                                variants: rt,
                                children: [
                                    "Customer Service Representative",
                                    v.jsxs(M.h4, {
                                        variants: rt,
                                        children: [
                                            "- 2022",
                                            v.jsx(M.h4, {
                                                variants: rt,
                                                children: "- 2022",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            v.jsxs(M.h3, {
                                variants: rt,
                                children: [
                                    "Hardware Technician Freelancing",
                                    v.jsxs(M.h4, {
                                        variants: rt,
                                        children: [
                                            "- 2019",
                                            v.jsx(M.h4, {
                                                variants: rt,
                                                children: "- PRESENT",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                v.jsxs("div", {
                    className: "wrapper2",
                    children: [
                        v.jsx(M.span, {
                            initial: { opacity: 0, scale: 0.5 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { duration: 0.5 },
                            children: v.jsx(M.h2, {
                                className: "text",
                                children: "What I Use",
                            }),
                        }),
                        v.jsxs("div", {
                            className: "social",
                            children: [
                                v.jsx("a", {
                                    href: "#",
                                    children: v.jsx("img", {
                                        src: "c-.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href: "#",
                                    children: v.jsx("img", {
                                        src: "c-sharp.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href: "#",
                                    children: v.jsx("img", {
                                        src: "java.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href: "#",
                                    children: v.jsx("img", {
                                        src: "/css-3.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href: "#",
                                    children: v.jsx("img", {
                                        src: "html-5.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsxs("a", {
                                    href: "#",
                                    children: [
                                        v.jsx("img", {
                                            src: "database.png",
                                            alt: "",
                                        }),
                                        v.jsx("a", {
                                            href: "#",
                                            children: v.jsx("img", {
                                                src: "java-script.png",
                                                alt: "",
                                            }),
                                        }),
                                    ],
                                }),
                                v.jsx("a", {
                                    href: "#",
                                    children: v.jsx("img", {
                                        src: "react.png",
                                        alt: "",
                                    }),
                                }),
                                v.jsx("a", {
                                    href: "#",
                                    children: v.jsx("img", {
                                        src: "/assets/",
                                        alt: "",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                v.jsx("div", {
                    variants: Qw,
                    className: "imageContainer",
                    children: v.jsx("img", { src: "/ID.png", alt: "" }),
                }),
            ],
        });
const If = ({ type: e }) => {
    const t = j.useRef(),
        { scrollYProgress: n } = du({
            target: t,
            offset: ["start start", "end start"],
        }),
        r = Xl(n, [0, 1], ["0%", "500%"]),
        i = Xl(n, [0, 1], ["0%", "100%"]);
    return v.jsxs("div", {
        className: "parallax",
        ref: t,
        style: {
            background:
                e === "services"
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)",
        },
        children: [
            v.jsx(M.h1, {
                style: { y: r },
                children:
                    e === "services" ? "My Line of Work" : "Projects Handled",
            }),
            v.jsx(M.div, { className: "mountains" }),
            v.jsx(M.div, {
                className: "planets",
                style: { y: i, backgroundImage: "url(giphy.gif)" },
            }),
            v.jsx(M.div, { style: { x: i }, className: "stars" }),
        ],
    });
};
const Xw = [
        {
            id: 1,
            title: "Quicky Bytes/ You name IT corp.",
            img: "group.png",
            desc:
                "As the team leader at You Name IT Corp, I spearheaded a dynamic group to develop the Quicky Bytes project. Guiding the team through ideation, planning, and execution, we created an innovative solution that revolutionized how users interact with short-form content, merging creativity and technology.",
        },
        {
            id: 2,
            title: "ATM JAVA PROGRAM",
            img: "atm.jpg",
            desc:
                "The ATM Java program I crafted provides a secure and intuitive platform for users to perform essential banking tasks. With features for balance inquiries, cash withdrawals, deposits, and fund transfers, the program ensures a seamless and efficient banking experience.",
        },
        {
            id: 3,
            title: "TNT 2023 Promos JAVA Program",
            img: "tnt.webp",
            desc:
                "The Java program I developed for *123# allows users to efficiently manage and display TNT promos, offering a user-friendly interface to explore and select various TNT promotional offers. ",
        },
        {
            id: 4,
            title: "Meralco Billing Statement Program",
            img: "billing.png",
            desc:
                "The Java program I designed for Meralco billing statements streamlines the process of accessing and comprehending utility invoices. It offers users a user-friendly interface to view, analyze, and manage their electricity bills efficiently. ",
        },
    ],
    Zw = ({ item: e }) => {
        const t = j.useRef(),
            { scrollYProgress: n } = du({ target: t }),
            r = Xl(n, [0, 1], [-300, 300]);
        return v.jsx("section", {
            children: v.jsx("div", {
                className: "container",
                children: v.jsxs("div", {
                    className: "wrapper",
                    children: [
                        v.jsx("div", {
                            className: "imageContainer",
                            ref: t,
                            children: v.jsx("img", {
                                src: e.img,
                                alt: "",
                                href: "https://github.com/WH20ter21",
                            }),
                        }),
                        v.jsxs(M.div, {
                            className: "textContainer",
                            style: { y: r },
                            children: [
                                v.jsx("h2", { children: e.title }),
                                v.jsx("p", { children: e.desc }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    Jw = () => {
        const e = j.useRef(),
            { scrollYProgress: t } = du({
                target: e,
                offset: ["end end", "start start"],
            }),
            n = ow(t, { stiffness: 100, damping: 30 });
        return v.jsxs("div", {
            className: "portfolio",
            ref: e,
            children: [
                v.jsxs("div", {
                    className: "progress",
                    children: [
                        v.jsxs("h1", {
                            children: [
                                "Featured Works",
                                v.jsx("h6", {
                                    children: v.jsx("a", {
                                        href: "https://github.com/WH20ter21",
                                        children:
                                            "Visit My Github To See Recent Projects",
                                    }),
                                }),
                            ],
                        }),
                        v.jsx(M.div, {
                            style: { scaleX: n },
                            className: "progressBar",
                        }),
                    ],
                }),
                Xw.map((r) => v.jsx(Zw, { item: r }, r.id)),
            ],
        });
    };
const Ni = {
        initial: { x: -500, y: 100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: { duration: 1, staggerChildren: 0.1 },
        },
    },
    qw = () => {
        const e = j.useRef();
        return (
            wm(e, { margin: "-100px" }),
            v.jsxs(M.div, {
                className: "services",
                variants: Ni,
                initial: "initial",
                ref: e,
                animate: "animate",
                children: [
                    v.jsxs(M.div, {
                        className: "textContainer",
                        variants: Ni,
                        children: [
                            v.jsxs("p", {
                                children: [
                                    "I am here to make your visions",
                                    v.jsx("br", {}),
                                    " come to life",
                                ],
                            }),
                            v.jsx("hr", {}),
                        ],
                    }),
                    v.jsxs(M.div, {
                        className: "titleContainer",
                        variants: Ni,
                        children: [
                            v.jsxs("div", {
                                className: "title",
                                children: [
                                    v.jsx("img", {
                                        src: "group.png",
                                        alt: "",
                                    }),
                                    v.jsxs("h1", {
                                        children: [
                                            v.jsx(M.b, {
                                                whileHover: { color: "orange" },
                                                children: "Pioneering",
                                            }),
                                            " Software",
                                        ],
                                    }),
                                ],
                            }),
                            v.jsxs("div", {
                                className: "title",
                                children: [
                                    v.jsx("h1", {
                                        children: v.jsx(M.b, {
                                            whileHover: { color: "orange" },
                                            children: "Solutions",
                                        }),
                                    }),
                                    v.jsx("button", { children: "My Field" }),
                                ],
                            }),
                        ],
                    }),
                    v.jsxs(M.div, {
                        className: "listContainer",
                        variants: Ni,
                        children: [
                            v.jsxs(M.div, {
                                className: "box",
                                whileHover: {
                                    background: "lightgray",
                                    color: "black",
                                },
                                children: [
                                    v.jsx("h2", {
                                        children: "IT/HARDWARE TECHNICIAN",
                                    }),
                                    v.jsx("p", {
                                        children:
                                            "Working as a Hardware Technician, I'm all about fixing and fine-tuning computer hardware. I enjoy getting into the nitty-gritty of tech, spotting issues, and making your devices run smoothly.",
                                    }),
                                ],
                            }),
                            v.jsxs(M.div, {
                                className: "box",
                                whileHover: {
                                    background: "lightgray",
                                    color: "black",
                                },
                                children: [
                                    v.jsx("h2", { children: "WEB DEVELOPER" }),
                                    v.jsx("p", {
                                        children:
                                            "As a Web Developer, I'm in charge of building awesome websites and applications. I blend tech skills with creativity to bring life to digital spaces, making them easy to use and visually appealing.",
                                    }),
                                ],
                            }),
                            v.jsxs(M.div, {
                                className: "box",
                                whileHover: {
                                    background: "lightgray",
                                    color: "black",
                                },
                                children: [
                                    v.jsx("h2", {
                                        children: "FRONT-END DEVELOPER",
                                    }),
                                    v.jsx("p", {
                                        children:
                                            "ABeing a Front-end Developer is all about making websites and apps look great and work smoothly. I specialize in crafting the parts you interact with, using a mix of code to create user-friendly designs.",
                                    }),
                                ],
                            }),
                            v.jsxs(M.div, {
                                className: "box",
                                whileHover: {
                                    background: "lightgray",
                                    color: "black",
                                },
                                children: [
                                    v.jsx("h2", {
                                        children: "SOFTWARE DEVELOPER",
                                    }),
                                    v.jsx("p", {
                                        children:
                                            "In my role as a Software Engineer, I design and create software solutions. I thrive on tackling complex challenges through coding, ultimately building applications that streamline and enhance everyday tasks for users.",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    bw = () =>
        v.jsxs("div", {
            children: [
                v.jsx(Fw, {}),
                v.jsxs("section", {
                    id: "Homepage",
                    children: [v.jsx(Kw, {}), v.jsx(zw, {})],
                }),
                v.jsx("section", { id: "About", children: v.jsx(Yw, {}) }),
                v.jsx("section", {
                    id: "Services",
                    children: v.jsx(If, { type: "services" }),
                }),
                v.jsx("section", { children: v.jsx(qw, {}) }),
                v.jsx("section", {
                    id: "Portfolio",
                    children: v.jsx(If, { type: "portfolio" }),
                }),
                v.jsx(Jw, {}),
                v.jsx("section", { id: "Contact", children: v.jsx(Ow, {}) }),
            ],
        });
Ws.createRoot(document.getElementById("root")).render(
    v.jsx(ta.StrictMode, { children: v.jsx(bw, {}) })
);
