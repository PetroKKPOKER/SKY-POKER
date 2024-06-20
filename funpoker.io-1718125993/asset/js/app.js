document.addEventListener("DOMContentLoaded", function() {
    const replenishmentWidget = document.querySelector('#replenishment-widget');
    const newWidget = document.querySelector('#new-widget');
    const playSection = document.querySelector('.play');
    const tableSection = document.querySelector('.table');
  
    function checkSections() {
      const playVisible = playSection && window.getComputedStyle(playSection).display !== 'none';
      const tableVisible = tableSection && window.getComputedStyle(tableSection).display !== 'none';
  
      if (playVisible || tableVisible) {
        replenishmentWidget.style.display = 'none';
        newWidget.style.display = 'none';
      } else {
        replenishmentWidget.style.display = 'block';
        newWidget.style.display = 'block';
      }
    }
  
    // Проверка каждые 500 мс
    setInterval(checkSections, 500);
  
    // Инициализация видимости при загрузке страницы
    checkSections();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const widget = document.getElementById('promo-widget');
    const openBtn = document.getElementById('open-promo-widget');
    const closeBtn = document.querySelector('.promo-widget-close');
    const widgetContent = document.querySelector('.promo-widget-content');
  
    // Показать виджет через 3 секунды после загрузки страницы
    setTimeout(function() {
      widget.classList.add('show');
    }, 3000);
  
    // Закрыть виджет при клике на кнопку закрытия
    closeBtn.addEventListener('click', function() {
      widget.classList.remove('show');
      setTimeout(function() {
        widget.style.display = 'none';
      }, 500); // Время анимации закрытия
    });
   // Открыть виджет при клике на кнопку
   openBtn.addEventListener('click', function() {
    widget.classList.add('show');
  });
    // Закрыть виджет при клике на свободную область
    widget.addEventListener('click', function(event) {
      if (!widgetContent.contains(event.target)) {
        widget.classList.remove('show');
        setTimeout(function() {
          widget.style.display = 'none';
        }, 500); // Время анимации закрытия
      }
    });
  });
  
  // Script for Subscription Widget
document.addEventListener('DOMContentLoaded', function() {
    // Show the widget after 3 seconds
    setTimeout(function() {
        document.getElementById('subscription-widget').style.display = 'block';
    }, 15000);

    // Close the widget when close button is clicked
    document.getElementById('close-widget').addEventListener('click', function() {
        document.getElementById('subscription-widget').style.display = 'none';
    });
});

  

(() => {
    "use strict";
    const t = document.querySelector("button.header__burger"),
        e = document.querySelector(".mobile-menu");t.onclick = () => {
        t.classList.contains("header__burger_active") ? i() : r()
    };
    const r = () => {
            t.classList.add("header__burger_active"),
            e.classList.add("mobile-menu_active"),
            document.body.classList.add("overflow-hidden")
        },
        i = () => {
            t.classList.remove("header__burger_active"),
            e.classList.remove("mobile-menu_active"),
            document.body.classList.remove("overflow-hidden")
        };

    function n(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function s(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var a, o, u, h, l, f, c, p, d, _, m, g, v, y, T, w = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        b = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        x = 1e8,
        O = 1e-8,
        k = 2 * Math.PI,
        M = k / 4,
        A = 0,
        C = Math.sqrt,
        D = Math.cos,
        S = Math.sin,
        E = function(t) {
            return "string" == typeof t
        },
        P = function(t) {
            return "function" == typeof t
        },
        z = function(t) {
            return "number" == typeof t
        },
        R = function(t) {
            return void 0 === t
        },
        F = function(t) {
            return "object" == typeof t
        },
        L = function(t) {
            return !1 !== t
        },
        B = function() {
            return "undefined" != typeof window
        },
        I = function(t) {
            return P(t) || E(t)
        },
        Y = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        q = Array.isArray,
        U = /(?:-?\.?\d|\.)+/gi,
        X = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        j = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        V = /[+-]=-?[.\d]+/,
        G = /[^,'"\[\]\s]+/gi,
        W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        H = {},
        Q = {},
        Z = function(t) {
            return (Q = kt(t, H)) && kr
        },
        $ = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        J = function(t, e) {
            return !e && console.warn(t)
        },
        K = function(t, e) {
            return t && (H[t] = e) && Q && (Q[t] = e) || H
        },
        tt = function() {
            return 0
        },
        et = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        rt = {
            suppressEvents: !0,
            kill: !1
        },
        it = {
            suppressEvents: !0
        },
        nt = {},
        st = [],
        at = {},
        ot = {},
        ut = {},
        ht = 30,
        lt = [],
        ft = "",
        ct = function(t) {
            var e, r, i = t[0];
            if (F(i) || P(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                for (r = lt.length; r-- && !lt[r].targetTest(i););
                e = lt[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ye(t[r], e))) || t.splice(r, 1);
            return t
        },
        pt = function(t) {
            return t._gsap || ct(re(t))[0]._gsap
        },
        dt = function(t, e, r) {
            return (r = t[e]) && P(r) ? t[e]() : R(r) && t.getAttribute && t.getAttribute(e) || r
        },
        _t = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        mt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        gt = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        vt = function(t, e) {
            var r = e.charAt(0),
                i = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        },
        yt = function(t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
            return i < r
        },
        Tt = function() {
            var t, e, r = st.length,
                i = st.slice(0);
            for (at = {}, st.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        wt = function(t, e, r, i) {
            st.length && !o && Tt(), t.render(e, r, i || o && e < 0 && (t._initted || t._startAt)), st.length && !o && Tt()
        },
        bt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(G).length < 2 ? e : E(t) ? t.trim() : t
        },
        xt = function(t) {
            return t
        },
        Ot = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        kt = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Mt = function t(e, r) {
            for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = F(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
            return e
        },
        At = function(t, e) {
            var r, i = {};
            for (r in t) r in e || (i[r] = t[r]);
            return i
        },
        Ct = function(t) {
            var e, r = t.parent || h,
                i = t.keyframes ? (e = q(t.keyframes), function(t, r) {
                    for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
                }) : Ot;
            if (L(t.inherit))
                for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
            return t
        },
        Dt = function(t, e, r, i, n) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var s, a = t[i];
            if (n)
                for (s = e[n]; a && a[n] > s;) a = a._prev;
            return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e
        },
        St = function(t, e, r, i) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var n = e._prev,
                s = e._next;
            n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
        },
        Et = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        Pt = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        },
        zt = function(t, e, r, i) {
            return t._startAt && (o ? t._startAt.revert(rt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
        },
        Rt = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Ft = function(t) {
            return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Lt = function(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        Bt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        It = function(t) {
            return t._end = gt(t._start + (t._tDur / Math.abs(t._ts || t._rts || O) || 0))
        },
        Yt = function(t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = gt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), It(t), r._dirty || Pt(r, t)), t
        },
        qt = function(t, e) {
            var r;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Bt(t.rawTime(), e), (!e._dur || Jt(0, e.totalDuration(), r) - e._tTime > O) && e.render(r, !0)), Pt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -1e-8
            }
        },
        Ut = function(t, e, r, i) {
            return e.parent && Et(e), e._start = gt((z(r) ? r : r || t !== h ? Qt(t, r, e) : t._time) + e._delay), e._end = gt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Dt(t, e, "_first", "_last", t._sort ? "_start" : 0), Vt(e) || (t._recent = e), i || qt(t, e), t._ts < 0 && Yt(t, t._tTime), t
        },
        Xt = function(t, e) {
            return (H.ScrollTrigger || $("scrollTrigger", e)) && H.ScrollTrigger.create(e, t)
        },
        Nt = function(t, e, r, i, n) {
            return We(t, e, n), t._initted ? !r && t._pt && !o && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Me.frame ? (st.push(t), t._lazy = [n, i], 1) : void 0 : 1
        },
        jt = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Vt = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        Gt = function(t, e, r, i) {
            var n = t._repeat,
                s = gt(e) || 0,
                a = t._tTime / t._tDur;
            return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : gt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && Yt(t, t._tTime = t._tDur * a), t.parent && It(t), r || Pt(t.parent, t), t
        },
        Wt = function(t) {
            return t instanceof Ue ? Pt(t) : Gt(t, t._dur)
        },
        Ht = {
            _start: 0,
            endTime: tt,
            totalDuration: tt
        },
        Qt = function t(e, r, i) {
            var n, s, a, o = e.labels,
                u = e._recent || Ht,
                h = e.duration() >= x ? u.endTime(!1) : e._dur;
            return E(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (q(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
        },
        Zt = function(t, e, r) {
            var i, n, s = z(e[1]),
                a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[a];
            if (s && (o.duration = e[1]), o.parent = r, t) {
                for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = L(n.vars.inherit) && n.parent;
                o.immediateRender = L(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
            }
            return new Je(e[0], o, e[a + 1])
        },
        $t = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        Jt = function(t, e, r) {
            return r < t ? t : r > e ? e : r
        },
        Kt = function(t, e) {
            return E(t) && (e = W.exec(t)) ? e[1] : ""
        },
        te = [].slice,
        ee = function(t, e) {
            return t && F(t) && "length" in t && (!e && !t.length || t.length - 1 in t && F(t[0])) && !t.nodeType && t !== l
        },
        re = function(t, e, r) {
            return u && !e && u.selector ? u.selector(t) : !E(t) || r || !f && Ae() ? q(t) ? function(t, e, r) {
                return void 0 === r && (r = []), t.forEach((function(t) {
                    var i;
                    return E(t) && !e || ee(t, 1) ? (i = r).push.apply(i, re(t)) : r.push(t)
                })) || r
            }(t, r) : ee(t) ? te.call(t, 0) : t ? [t] : [] : te.call((e || c).querySelectorAll(t), 0)
        },
        ie = function(t) {
            return t = re(t)[0] || J("Invalid scope") || {},
                function(e) {
                    var r = t.current || t.nativeElement || t;
                    return re(e, r.querySelectorAll ? r : r === t ? J("Invalid scope") || c.createElement("div") : t)
                }
        },
        ne = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }))
        },
        se = function(t) {
            if (P(t)) return t;
            var e = F(t) ? t : {
                    each: t
                },
                r = Re(e.ease),
                i = e.from || 0,
                n = parseFloat(e.base) || 0,
                s = {},
                a = i > 0 && i < 1,
                o = isNaN(i) || a,
                u = e.axis,
                h = i,
                l = i;
            return E(i) ? h = l = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[i] || 0 : !a && o && (h = i[0], l = i[1]),
                function(t, a, f) {
                    var c, p, d, _, m, g, v, y, T, w = (f || e).length,
                        b = s[w];
                    if (!b) {
                        if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, x])[1])) {
                            for (v = -x; v < (v = f[T++].getBoundingClientRect().left) && T < w;);
                            T < w && T--
                        }
                        for (b = s[w] = [], c = o ? Math.min(T, w) * h - .5 : i % T, p = T === x ? 0 : o ? w * l / T - .5 : i / T | 0, v = 0, y = x, g = 0; g < w; g++) d = g % T - c, _ = p - (g / T | 0), b[g] = m = u ? Math.abs("y" === u ? _ : d) : C(d * d + _ * _), m > v && (v = m), m < y && (y = m);
                        "random" === i && ne(b), b.max = v - y, b.min = y, b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (T > w ? w - 1 : u ? "y" === u ? w / T : T : Math.max(T, w / T)) || 0) * ("edges" === i ? -1 : 1), b.b = w < 0 ? n - w : n, b.u = Kt(e.amount || e.each) || 0, r = r && w < 0 ? Pe(r) : r
                    }
                    return w = (b[t] - b.min) / b.max || 0, gt(b.b + (r ? r(w) : w) * b.v) + b.u
                }
        },
        ae = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(r) {
                var i = gt(Math.round(parseFloat(r) / t) * t * e);
                return (i - i % 1) / e + (z(r) ? 0 : Kt(r))
            }
        },
        oe = function(t, e) {
            var r, i, n = q(t);
            return !n && F(t) && (r = n = t.radius || x, t.values ? (t = re(t.values), (i = !z(t[0])) && (r *= r)) : t = ae(t.increment)), $t(e, n ? P(t) ? function(e) {
                return i = t(e), Math.abs(i - e) <= r ? i : e
            } : function(e) {
                for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = x, h = 0, l = t.length; l--;)(n = i ? (n = t[l].x - a) * n + (s = t[l].y - o) * s : Math.abs(t[l] - a)) < u && (u = n, h = l);
                return h = !r || u <= r ? t[h] : e, i || h === e || z(e) ? h : h + Kt(e)
            } : ae(t))
        },
        ue = function(t, e, r, i) {
            return $t(q(t) ? !e : !0 === r ? !!(r = 0) : !i, (function() {
                return q(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
            }))
        },
        he = function(t, e, r) {
            return $t(r, (function(r) {
                return t[~~e(r)]
            }))
        },
        le = function(t) {
            for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? G : U), a += t.substr(s, e - s) + ue(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
            return a + t.substr(s, t.length - s)
        },
        fe = function(t, e, r, i, n) {
            var s = e - t,
                a = i - r;
            return $t(n, (function(e) {
                return r + ((e - t) / s * a || 0)
            }))
        },
        ce = function(t, e, r) {
            var i, n, s, a = t.labels,
                o = x;
            for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
            return s
        },
        pe = function(t, e, r) {
            var i, n, s, a = t.vars,
                o = a[e],
                h = u,
                l = t._ctx;
            if (o) return i = a[e + "Params"], n = a.callbackScope || t, r && st.length && Tt(), l && (u = l), s = i ? o.apply(n, i) : o.call(n), u = h, s
        },
        de = function(t) {
            return Et(t), t.scrollTrigger && t.scrollTrigger.kill(!!o), t.progress() < 1 && pe(t, "onInterrupt"), t
        },
        _e = [],
        me = function(t) {
            if (t)
                if (t = !t.name && t.default || t, B() || t.headless) {
                    var e = t.name,
                        r = P(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: tt,
                            render: or,
                            add: Ve,
                            kill: hr,
                            modifier: ur,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ir,
                            aliases: {},
                            register: 0
                        };
                    if (Ae(), t !== i) {
                        if (ot[e]) return;
                        Ot(i, Ot(At(t, n), s)), kt(i.prototype, kt(n, At(t, s))), ot[i.prop = e] = i, t.targetTest && (lt.push(i), nt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    K(e, i), t.register && t.register(kr, i, cr)
                } else _e.push(t)
        },
        ge = 255,
        ve = {
            aqua: [0, ge, ge],
            lime: [0, ge, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, ge],
            navy: [0, 0, 128],
            white: [ge, ge, ge],
            olive: [128, 128, 0],
            yellow: [ge, ge, 0],
            orange: [ge, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [ge, 0, 0],
            pink: [ge, 192, 203],
            cyan: [0, ge, ge],
            transparent: [ge, ge, ge, 0]
        },
        ye = function(t, e, r) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * ge + .5 | 0
        },
        Te = function(t, e, r) {
            var i, n, s, a, o, u, h, l, f, c, p = t ? z(t) ? [t >> 16, t >> 8 & ge, t & ge] : 0 : ve.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ve[t]) p = ve[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & ge, p & ge, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ge, t & ge]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = c = t.match(U), e) {
                        if (~t.indexOf("=")) return p = t.match(X), r && p.length < 4 && (p[3] = 1), p
                    } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = ye(a + 1 / 3, i, n), p[1] = ye(a, i, n), p[2] = ye(a - 1 / 3, i, n);
                else p = t.match(U) || ve.transparent;
                p = p.map(Number)
            }
            return e && !c && (i = p[0] / ge, n = p[1] / ge, s = p[2] / ge, u = ((h = Math.max(i, n, s)) + (l = Math.min(i, n, s))) / 2, h === l ? a = o = 0 : (f = h - l, o = u > .5 ? f / (2 - h - l) : f / (h + l), a = h === i ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - i) / f + 2 : (i - n) / f + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        we = function(t) {
            var e = [],
                r = [],
                i = -1;
            return t.split(xe).forEach((function(t) {
                var n = t.match(N) || [];
                e.push.apply(e, n), r.push(i += n.length + 1)
            })), e.c = r, e
        },
        be = function(t, e, r) {
            var i, n, s, a, o = "",
                u = (t + o).match(xe),
                h = e ? "hsla(" : "rgba(",
                l = 0;
            if (!u) return t;
            if (u = u.map((function(t) {
                    return (t = Te(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), r && (s = we(t), (i = r.c).join(o) !== s.c.join(o)))
                for (a = (n = t.replace(xe, "1").split(N)).length - 1; l < a; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
            if (!n)
                for (a = (n = t.split(xe)).length - 1; l < a; l++) o += n[l] + u[l];
            return o + n[a]
        },
        xe = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ve) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Oe = /hsl[a]?\(/,
        ke = function(t) {
            var e, r = t.join(" ");
            if (xe.lastIndex = 0, xe.test(r)) return e = Oe.test(r), t[1] = be(t[1], e), t[0] = be(t[0], e, we(t[1])), !0
        },
        Me = function() {
            var t, e, r, i, n, s, a = Date.now,
                o = 500,
                u = 33,
                h = a(),
                d = h,
                _ = 1e3 / 240,
                g = _,
                v = [],
                y = function r(l) {
                    var f, c, p, m, y = a() - d,
                        T = !0 === l;
                    if ((y > o || y < 0) && (h += y - u), ((f = (p = (d += y) - h) - g) > 0 || T) && (m = ++i.frame, n = p - 1e3 * i.time, i.time = p /= 1e3, g += f + (f >= _ ? 4 : _ - f), c = 1), T || (t = e(r)), c)
                        for (s = 0; s < v.length; s++) v[s](p, n, m, l)
                };
            return i = {
                time: 0,
                frame: 0,
                tick: function() {
                    y(!0)
                },
                deltaRatio: function(t) {
                    return n / (1e3 / (t || 60))
                },
                wake: function() {
                    p && (!f && B() && (l = f = window, c = l.document || {}, H.gsap = kr, (l.gsapVersions || (l.gsapVersions = [])).push(kr.version), Z(Q || l.GreenSockGlobals || !l.gsap && l || {}), _e.forEach(me)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && i.sleep(), e = r || function(t) {
                        return setTimeout(t, g - 1e3 * i.time + 1 | 0)
                    }, m = 1, y(2))
                },
                sleep: function() {
                    (r ? cancelAnimationFrame : clearTimeout)(t), m = 0, e = tt
                },
                lagSmoothing: function(t, e) {
                    o = t || 1 / 0, u = Math.min(e || 33, o)
                },
                fps: function(t) {
                    _ = 1e3 / (t || 240), g = 1e3 * i.time + _
                },
                add: function(t, e, r) {
                    var n = e ? function(e, r, s, a) {
                        t(e, r, s, a), i.remove(n)
                    } : t;
                    return i.remove(t), v[r ? "unshift" : "push"](n), Ae(), n
                },
                remove: function(t, e) {
                    ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--
                },
                _listeners: v
            }
        }(),
        Ae = function() {
            return !m && Me.wake()
        },
        Ce = {},
        De = /^[\d.\-M][\d.\-,\s]/,
        Se = /["']/g,
        Ee = function(t) {
            for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Se, "").trim() : +i, a = r.substr(e + 1).trim();
            return n
        },
        Pe = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        ze = function t(e, r) {
            for (var i, n = e._first; n;) n instanceof Ue ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        Re = function(t, e) {
            return t && (P(t) ? t : Ce[t] || function(t) {
                var e, r, i, n, s = (t + "").split("("),
                    a = Ce[s[0]];
                return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ee(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(bt)) : Ce._CE && De.test(t) ? Ce._CE("", t) : a
            }(t)) || e
        },
        Fe = function(t, e, r, i) {
            void 0 === r && (r = function(t) {
                return 1 - e(1 - t)
            }), void 0 === i && (i = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var n, s = {
                easeIn: e,
                easeOut: r,
                easeInOut: i
            };
            return _t(t, (function(t) {
                for (var e in Ce[t] = H[t] = s, Ce[n = t.toLowerCase()] = r, s) Ce[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ce[t + "." + e] = s[e]
            })), s
        },
        Le = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Be = function t(e, r, i) {
            var n = r >= 1 ? r : 1,
                s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
                a = s / k * (Math.asin(1 / n) || 0),
                o = function(t) {
                    return 1 === t ? 1 : n * Math.pow(2, -10 * t) * S((t - a) * s) + 1
                },
                u = "out" === e ? o : "in" === e ? function(t) {
                    return 1 - o(1 - t)
                } : Le(o);
            return s = k / s, u.config = function(r, i) {
                return t(e, r, i)
            }, u
        },
        Ie = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var i = function(t) {
                    return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                },
                n = "out" === e ? i : "in" === e ? function(t) {
                    return 1 - i(1 - t)
                } : Le(i);
            return n.config = function(r) {
                return t(e, r)
            }, n
        };_t("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Fe(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, r)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        }))
    })),
    Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn,
    Fe("Elastic", Be("in"), Be("out"), Be()),
    g = 7.5625,
    y = 1 / (v = 2.75),
    Fe("Bounce", (function(t) {
        return 1 - T(1 - t)
    }), T = function(t) {
        return t < y ? g * t * t : t < .7272727272727273 ? g * Math.pow(t - 1.5 / v, 2) + .75 : t < .9090909090909092 ? g * (t -= 2.25 / v) * t + .9375 : g * Math.pow(t - 2.625 / v, 2) + .984375
    }),
    Fe("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })),
    Fe("Circ", (function(t) {
        return -(C(1 - t * t) - 1)
    })),
    Fe("Sine", (function(t) {
        return 1 === t ? 1 : 1 - D(t * M)
    })),
    Fe("Back", Ie("in"), Ie("out"), Ie()),
    Ce.SteppedEase = Ce.steps = H.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Jt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    b.ease = Ce["quad.out"],
    _t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return ft += t + "," + t + "Params,"
    }));
    var Ye = function(t, e) {
            this.id = A++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : dt, this.set = e ? e.getSetter : ir
        },
        qe = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Gt(this, +t.duration, 1, 1), this.data = t.data, u && (this._ctx = u, u.data.push(this)), m || Me.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (Ae(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (Yt(this, t), !r._dp || r.parent || qt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ut(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === O || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), wt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ft(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ft(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, e.iteration = function(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Lt(this._tTime, r) + 1 : 1
            }, e.timeScale = function(t, e) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var r = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Jt(-Math.abs(this._delay), this._tDur, r), !1 !== e), It(this),
                    function(t) {
                        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                        return t
                    }(this)
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ae(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== O && (this._tTime -= O)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Ut(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.revert = function(t) {
                void 0 === t && (t = it);
                var e = o;
                return o = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), o = e, this
            }, e.globalTime = function(t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
                return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Wt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Wt(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Qt(this, t), L(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, L(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    r = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - O))
            }, e.eventCallback = function(t, e, r) {
                var i = this.vars;
                return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise((function(r) {
                    var i = P(t) ? t : xt,
                        n = function() {
                            var t = e.then;
                            e.then = null, P(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
                }))
            }, e.kill = function() {
                de(this)
            }, t
        }();Ot(qe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ue = function(t) {
        function e(e, r) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = L(e.sortChildren), h && Ut(e.parent || h, n(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Xt(n(i), e.scrollTrigger), i
        }
        s(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
            return Zt(0, arguments, this), this
        }, r.from = function(t, e, r) {
            return Zt(1, arguments, this), this
        }, r.fromTo = function(t, e, r, i) {
            return Zt(2, arguments, this), this
        }, r.set = function(t, e, r) {
            return e.duration = 0, e.parent = this, Ct(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Je(t, e, Qt(this, r), 1), this
        }, r.call = function(t, e, r) {
            return Ut(this, Je.delayedCall(0, t, e), r)
        }, r.staggerTo = function(t, e, r, i, n, s, a) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new Je(t, r, Qt(this, n)), this
        }, r.staggerFrom = function(t, e, r, i, n, s, a) {
            return r.runBackwards = 1, Ct(r).immediateRender = L(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
        }, r.staggerFromTo = function(t, e, r, i, n, s, a, o) {
            return i.startAt = r, Ct(i).immediateRender = L(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
        }, r.render = function(t, e, r) {
            var i, n, s, a, u, l, f, c, p, d, _, m, g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                T = t <= 0 ? 0 : gt(t),
                w = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (this !== h && T > v && t >= 0 && (T = v), T !== this._tTime || r || w) {
                if (g !== this._time && y && (T += this._time - g, t += this._time - g), i = T, p = this._start, l = !(c = this._ts), w && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (_ = this._yoyo, u = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * u + t, e, r);
                    if (i = gt(T % u), T === v ? (a = this._repeat, i = y) : ((a = ~~(T / u)) && a === T / u && (i = y, a--), i > y && (i = y)), d = Lt(this._tTime, u), !g && this._tTime && d !== a && this._tTime - d * u - this._dur <= 0 && (d = a), _ && 1 & a && (i = y - i, m = 1), a !== d && !this._lock) {
                        var b = _ && 1 & d,
                            x = b === (_ && 1 & a);
                        if (a < d && (b = !b), g = b ? 0 : T % y ? y : T, this._lock = 1, this.render(g || (m ? 0 : gt(a * u)), e, !y)._lock = 0, this._tTime = T, !e && this.parent && pe(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (y = this._dur, v = this._tDur, x && (this._lock = 2, g = b ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        ze(this, m)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (f = function(t, e, r) {
                        var i;
                        if (r > e)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, gt(g), gt(i)), f && (T -= i - (i = f._start))), this._tTime = T, this._time = i, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && i && !e && !a && (pe(this, "onStart"), this._tTime !== T)) return this;
                if (i >= g && t >= 0)
                    for (n = this._first; n;) {
                        if (s = n._next, (n._act || i >= n._start) && n._ts && f !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !l) {
                                f = 0, s && (T += this._zTime = -1e-8);
                                break
                            }
                        }
                        n = s
                    } else {
                        n = this._last;
                        for (var k = t < 0 ? t : i; n;) {
                            if (s = n._prev, (n._act || k <= n._end) && n._ts && f !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(n._ts > 0 ? (k - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (k - n._start) * n._ts, e, r || o && (n._initted || n._startAt)), i !== this._time || !this._ts && !l) {
                                    f = 0, s && (T += this._zTime = k ? -1e-8 : O);
                                    break
                                }
                            }
                            n = s
                        }
                    }
                if (f && !e && (this.pause(), f.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1, this._ts)) return this._start = p, It(this), this.render(t, e, r);
                this._onUpdate && !e && pe(this, "onUpdate", !0), (T === v && this._tTime >= this.totalDuration() || !T && g) && (p !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !y) && (T === v && this._ts > 0 || !T && this._ts < 0) && Et(this, 1), e || t < 0 && !g || !T && !g && v || (pe(this, T === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(T < v && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, r.add = function(t, e) {
            var r = this;
            if (z(e) || (e = Qt(this, e, t)), !(t instanceof qe)) {
                if (q(t)) return t.forEach((function(t) {
                    return r.add(t, e)
                })), this;
                if (E(t)) return this.addLabel(t, e);
                if (!P(t)) return this;
                t = Je.delayedCall(0, t)
            }
            return this !== t ? Ut(this, t, e) : this
        }, r.getChildren = function(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -x);
            for (var n = [], s = this._first; s;) s._start >= i && (s instanceof Je ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
            return n
        }, r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) {
            return E(t) ? this.removeLabel(t) : P(t) ? this.killTweensOf(t) : (St(this, t), t === this._recent && (this._recent = this._last), Pt(this))
        }, r.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = gt(Me.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(t, e) {
            return this.labels[t] = Qt(this, e), this
        }, r.removeLabel = function(t) {
            return delete this.labels[t], this
        }, r.addPause = function(t, e, r) {
            var i = Je.delayedCall(0, e || tt, r);
            return i.data = "isPause", this._hasPause = 1, Ut(this, i, Qt(this, t))
        }, r.removePause = function(t) {
            var e = this._first;
            for (t = Qt(this, t); e;) e._start === t && "isPause" === e.data && Et(e), e = e._next
        }, r.killTweensOf = function(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Xe !== i[n] && i[n].kill(t, e);
            return this
        }, r.getTweensOf = function(t, e) {
            for (var r, i = [], n = re(t), s = this._first, a = z(e); s;) s instanceof Je ? yt(s._targets, n) && (a ? (!Xe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
            return i
        }, r.tweenTo = function(t, e) {
            e = e || {};
            var r, i = this,
                n = Qt(i, t),
                s = e,
                a = s.startAt,
                o = s.onStart,
                u = s.onStartParams,
                h = s.immediateRender,
                l = Je.to(i, Ot({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || O,
                    onStart: function() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            l._dur !== t && Gt(l, t, 0, 1).render(l._time, !0, !0), r = 1
                        }
                        o && o.apply(l, u || [])
                    }
                }, e));
            return h ? l.render(0) : l
        }, r.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, Ot({
                startAt: {
                    time: Qt(this, t)
                }
            }, r))
        }, r.recent = function() {
            return this._recent
        }, r.nextLabel = function(t) {
            return void 0 === t && (t = this._time), ce(this, Qt(this, t))
        }, r.previousLabel = function(t) {
            return void 0 === t && (t = this._time), ce(this, Qt(this, t), 1)
        }, r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + O)
        }, r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in s) s[i] >= r && (s[i] += t);
            return Pt(this)
        }, r.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r;) r.invalidate(e), r = r._next;
            return t.prototype.invalidate.call(this, e)
        }, r.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Pt(this)
        }, r.totalDuration = function(t) {
            var e, r, i, n = 0,
                s = this,
                a = s._last,
                o = x;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (i = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (r = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Ut(s, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), o = 0), a._end > n && a._ts && (n = a._end), a = e;
                Gt(s, s === h && s._time > n ? s._time : n, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, e.updateRoot = function(t) {
            if (h._ts && (wt(h, Bt(t, h)), d = Me.frame), Me.frame >= ht) {
                ht += w.autoSleep || 120;
                var e = h._first;
                if ((!e || !e._ts) && w.autoSleep && Me._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Me.sleep()
                }
            }
        }, e
    }(qe);Ot(Ue.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Xe, Ne, je = function(t, e, r, i, n, s, a) {
            var o, u, h, l, f, c, p, d, _ = new cr(this._pt, t, e, 0, 1, ar, null, n),
                m = 0,
                g = 0;
            for (_.b = r, _.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = le(i)), s && (s(d = [r, i], t, e), r = d[0], i = d[1]), u = r.match(j) || []; o = j.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                _next: _._pt,
                p: f || 1 === g ? f : ",",
                s: c,
                c: "=" === l.charAt(1) ? vt(c, l) - c : parseFloat(l) - c,
                m: h && h < 4 ? Math.round : 0
            }, m = j.lastIndex);
            return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = a, (V.test(i) || p) && (_.e = 0), this._pt = _, _
        },
        Ve = function(t, e, r, i, n, s, a, o, u, h) {
            P(i) && (i = i(n || 0, t, s));
            var l, f = t[e],
                c = "get" !== r ? r : P(f) ? u ? t[e.indexOf("set") || !P(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
                p = P(f) ? u ? er : tr : Ke;
            if (E(i) && (~i.indexOf("random(") && (i = le(i)), "=" === i.charAt(1) && ((l = vt(c, i) + (Kt(c) || 0)) || 0 === l) && (i = l)), !h || c !== i || Ne) return isNaN(c * i) || "" === i ? (!f && !(e in t) && $(e, i), je.call(this, t, e, c, i, p, o || w.stringFilter, u)) : (l = new cr(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof f ? sr : nr, 0, p), u && (l.fp = u), a && l.modifier(a, this, t), this._pt = l)
        },
        Ge = function(t, e, r, i, n, s) {
            var a, o, u, h;
            if (ot[t] && !1 !== (a = new ot[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
                    if (P(t) && (t = Qe(t, n, e, r, i)), !F(t) || t.style && t.nodeType || q(t) || Y(t)) return E(t) ? Qe(t, n, e, r, i) : t;
                    var s, a = {};
                    for (s in t) a[s] = Qe(t[s], n, e, r, i);
                    return a
                }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new cr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== _))
                for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
            return a
        },
        We = function t(e, r, i) {
            var n, s, u, l, f, c, p, d, _, m, g, v, y, T = e.vars,
                w = T.ease,
                k = T.startAt,
                M = T.immediateRender,
                A = T.lazy,
                C = T.onUpdate,
                D = T.runBackwards,
                S = T.yoyoEase,
                E = T.keyframes,
                P = T.autoRevert,
                z = e._dur,
                R = e._startAt,
                F = e._targets,
                B = e.parent,
                I = B && "nested" === B.data ? B.vars.targets : F,
                Y = "auto" === e._overwrite && !a,
                q = e.timeline;
            if (q && (!E || !w) && (w = "none"), e._ease = Re(w, b.ease), e._yEase = S ? Pe(Re(!0 === S ? w : S, b.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !q && !!T.runBackwards, !q || E && !T.stagger) {
                if (v = (d = F[0] ? pt(F[0]).harness : 0) && T[d.prop], n = At(T, nt), R && (R._zTime < 0 && R.progress(1), r < 0 && D && M && !P ? R.render(-1, !0) : R.revert(D && z ? rt : et), R._lazy = 0), k) {
                    if (Et(e._startAt = Je.set(F, Ot({
                            data: "isStart",
                            overwrite: !1,
                            parent: B,
                            immediateRender: !0,
                            lazy: !R && L(A),
                            startAt: null,
                            delay: 0,
                            onUpdate: C && function() {
                                return pe(e, "onUpdate")
                            },
                            stagger: 0
                        }, k))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (o || !M && !P) && e._startAt.revert(rt), M && z && r <= 0 && i <= 0) return void(r && (e._zTime = r))
                } else if (D && z && !R)
                    if (r && (M = !1), u = Ot({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: M && !R && L(A),
                            immediateRender: M,
                            stagger: 0,
                            parent: B
                        }, n), v && (u[d.prop] = v), Et(e._startAt = Je.set(F, u)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (o ? e._startAt.revert(rt) : e._startAt.render(-1, !0)), e._zTime = r, M) {
                        if (!r) return
                    } else t(e._startAt, O, O);
                for (e._pt = e._ptCache = 0, A = z && L(A) || A && !z, s = 0; s < F.length; s++) {
                    if (p = (f = F[s])._gsap || ct(F)[s]._gsap, e._ptLookup[s] = m = {}, at[p.id] && st.length && Tt(), g = I === F ? s : I.indexOf(f), d && !1 !== (_ = new d).init(f, v || n, e, g, I) && (e._pt = l = new cr(e._pt, f, _.name, 0, 1, _.render, _, 0, _.priority), _._props.forEach((function(t) {
                            m[t] = l
                        })), _.priority && (c = 1)), !d || v)
                        for (u in n) ot[u] && (_ = Ge(u, n, e, g, f, I)) ? _.priority && (c = 1) : m[u] = l = Ve.call(e, f, u, "get", n[u], g, I, 0, T.stringFilter);
                    e._op && e._op[s] && e.kill(f, e._op[s]), Y && e._pt && (Xe = e, h.killTweensOf(f, m, e.globalTime(r)), y = !e.parent, Xe = 0), e._pt && A && (at[p.id] = 1)
                }
                c && fr(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = C, e._initted = (!e._op || e._pt) && !y, E && r <= 0 && q.render(x, !0, !0)
        },
        He = function(t, e, r, i) {
            var n, s, a = e.ease || i || "power1.inOut";
            if (q(e)) s = r[t] || (r[t] = []), e.forEach((function(t, r) {
                return s.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            }));
            else
                for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
                    t: parseFloat(t),
                    v: e[n],
                    e: a
                })
        },
        Qe = function(t, e, r, i, n) {
            return P(t) ? t.call(e, r, i, n) : E(t) && ~t.indexOf("random(") ? le(t) : t
        },
        Ze = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        $e = {};_t(Ze + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
        return $e[t] = 1
    }));
    var Je = function(t) {
        function e(e, r, i, s) {
            var o;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var u, l, f, c, p, d, _, m, g = (o = t.call(this, s ? r : Ct(r)) || this).vars,
                v = g.duration,
                y = g.delay,
                T = g.immediateRender,
                b = g.stagger,
                x = g.overwrite,
                O = g.keyframes,
                k = g.defaults,
                M = g.scrollTrigger,
                A = g.yoyoEase,
                C = r.parent || h,
                D = (q(e) || Y(e) ? z(e[0]) : "length" in r) ? [e] : re(e);
            if (o._targets = D.length ? ct(D) : J("GSAP target " + e + " not found. https://gsap.com", !w.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = x, O || b || I(v) || I(y)) {
                if (r = o.vars, (u = o.timeline = new Ue({
                        data: "nested",
                        defaults: k || {},
                        targets: C && "nested" === C.data ? C.vars.targets : D
                    })).kill(), u.parent = u._dp = n(o), u._start = 0, b || I(v) || I(y)) {
                    if (c = D.length, _ = b && se(b), F(b))
                        for (p in b) ~Ze.indexOf(p) && (m || (m = {}), m[p] = b[p]);
                    for (l = 0; l < c; l++)(f = At(r, $e)).stagger = 0, A && (f.yoyoEase = A), m && kt(f, m), d = D[l], f.duration = +Qe(v, n(o), l, d, D), f.delay = (+Qe(y, n(o), l, d, D) || 0) - o._delay, !b && 1 === c && f.delay && (o._delay = y = f.delay, o._start += y, f.delay = 0), u.to(d, f, _ ? _(l, d, D) : 0), u._ease = Ce.none;
                    u.duration() ? v = y = 0 : o.timeline = 0
                } else if (O) {
                    Ct(Ot(u.vars.defaults, {
                        ease: "none"
                    })), u._ease = Re(O.ease || r.ease || "none");
                    var S, E, P, R = 0;
                    if (q(O)) O.forEach((function(t) {
                        return u.to(D, t, ">")
                    })), u.duration();
                    else {
                        for (p in f = {}, O) "ease" === p || "easeEach" === p || He(p, O[p], f, O.easeEach);
                        for (p in f)
                            for (S = f[p].sort((function(t, e) {
                                    return t.t - e.t
                                })), R = 0, l = 0; l < S.length; l++)(P = {
                                ease: (E = S[l]).e,
                                duration: (E.t - (l ? S[l - 1].t : 0)) / 100 * v
                            })[p] = E.v, u.to(D, P, R), R += P.duration;
                        u.duration() < v && u.to({}, {
                            duration: v - u.duration()
                        })
                    }
                }
                v || o.duration(v = u.duration())
            } else o.timeline = 0;
            return !0 !== x || a || (Xe = n(o), h.killTweensOf(D), Xe = 0), Ut(C, n(o), i), r.reversed && o.reverse(), r.paused && o.paused(!0), (T || !v && !O && o._start === gt(C._time) && L(T) && Rt(n(o)) && "nested" !== C.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y) || 0)), M && Xt(n(o), M), o
        }
        s(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
            var i, n, s, a, u, h, l, f, c, p = this._time,
                d = this._tDur,
                _ = this._dur,
                m = t < 0,
                g = t > d - O && !m ? d : t < O ? 0 : t;
            if (_) {
                if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
                    if (i = g, f = this.timeline, this._repeat) {
                        if (a = _ + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * a + t, e, r);
                        if (i = gt(g % a), g === d ? (s = this._repeat, i = _) : ((s = ~~(g / a)) && s === gt(g / a) && (i = _, s--), i > _ && (i = _)), (h = this._yoyo && 1 & s) && (c = this._yEase, i = _ - i), u = Lt(this._tTime, a), i === p && !r && this._initted && s === u) return this._tTime = g, this;
                        s !== u && (f && this._yEase && ze(f, h), this.vars.repeatRefresh && !h && !this._lock && this._time !== a && this._initted && (this._lock = r = 1, this.render(gt(a * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Nt(this, m ? t : i, r, e, g)) return this._tTime = 0, this;
                        if (!(p === this._time || r && this.vars.repeatRefresh && s !== u)) return this;
                        if (_ !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(i / _), this._from && (this.ratio = l = 1 - l), i && !p && !e && !s && (pe(this, "onStart"), this._tTime !== g)) return this;
                    for (n = this._pt; n;) n.r(l, n.d), n = n._next;
                    f && f.render(t < 0 ? t : f._dur * f._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && zt(this, t, 0, r), pe(this, "onUpdate")), this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && pe(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && zt(this, t, 0, !0), (t || !_) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Et(this, 1), e || m && !p || !(g || p || h) || (pe(this, g === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
                }
            } else ! function(t, e, r, i) {
                var n, s, a, u = t.ratio,
                    h = e < 0 || !e && (!t._start && jt(t) && (t._initted || !Vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Vt(t)) ? 0 : 1,
                    l = t._rDelay,
                    f = 0;
                if (l && t._repeat && (f = Jt(0, t._tDur, e), s = Lt(f, l), t._yoyo && 1 & s && (h = 1 - h), s !== Lt(t._tTime, l) && (u = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== u || o || i || t._zTime === O || !e && t._zTime) {
                    if (!t._initted && Nt(t, e, i, r, f)) return;
                    for (a = t._zTime, t._zTime = e || (r ? O : 0), r || (r = e && !a), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = f, n = t._pt; n;) n.r(h, n.d), n = n._next;
                    e < 0 && zt(t, e, 0, !0), t._onUpdate && !r && pe(t, "onUpdate"), f && t._repeat && !r && t.parent && pe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Et(t, 1), r || o || (pe(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, r.targets = function() {
            return this._targets
        }, r.invalidate = function(e) {
            return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, r.resetTo = function(t, e, r, i, n) {
            m || Me.wake(), this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || We(this, s),
                function(t, e, r, i, n, s, a, o) {
                    var u, h, l, f, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!c)
                        for (c = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length; f--;) {
                            if ((u = l[f][e]) && u.d && u.d._pt)
                                for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                            if (!u) return Ne = 1, t.vars[e] = "+=0", We(t, a), Ne = 0, o ? J(e + " not eligible for reset") : 1;
                            c.push(u)
                        }
                    for (f = c.length; f--;)(u = (h = c[f])._pt || h).s = !i && 0 !== i || n ? u.s + (i || 0) + s * u.c : i, u.c = r - u.s, h.e && (h.e = mt(r) + Kt(h.e)), h.b && (h.b = u.s + Kt(h.b))
                }(this, t, e, r, i, this._ease(s / this._dur), s, n) ? this.resetTo(t, e, r, i, 1) : (Yt(this, 0), this.parent || Dt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? de(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || de(this), this.parent && r !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var i, n, s, a, o, u, h, l = this._targets,
                f = t ? re(t) : l,
                c = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(l, f)) return "all" === e && (this._pt = 0), de(this);
            for (i = this._op = this._op || [], "all" !== e && (E(e) && (o = {}, _t(e, (function(t) {
                    return o[t] = 1
                })), e = o), e = function(t, e) {
                    var r, i, n, s, a = t[0] ? pt(t[0]).harness : 0,
                        o = a && a.aliases;
                    if (!o) return e;
                    for (i in r = kt({}, e), o)
                        if (i in r)
                            for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
                    return r
                }(l, e)), h = l.length; h--;)
                if (~f.indexOf(l[h]))
                    for (o in n = c[h], "all" === e ? (i[h] = e, a = n, s = {}) : (s = i[h] = i[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || St(this, u, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && p && de(this), this
        }, e.to = function(t, r) {
            return new e(t, r, arguments[2])
        }, e.from = function(t, e) {
            return Zt(1, arguments)
        }, e.delayedCall = function(t, r, i, n) {
            return new e(r, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: n
            })
        }, e.fromTo = function(t, e, r) {
            return Zt(2, arguments)
        }, e.set = function(t, r) {
            return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
        }, e.killTweensOf = function(t, e, r) {
            return h.killTweensOf(t, e, r)
        }, e
    }(qe);Ot(Je.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    _t("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Je[t] = function() {
            var e = new Ue,
                r = te.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    }));
    var Ke = function(t, e, r) {
            return t[e] = r
        },
        tr = function(t, e, r) {
            return t[e](r)
        },
        er = function(t, e, r, i) {
            return t[e](i.fp, r)
        },
        rr = function(t, e, r) {
            return t.setAttribute(e, r)
        },
        ir = function(t, e) {
            return P(t[e]) ? tr : R(t[e]) && t.setAttribute ? rr : Ke
        },
        nr = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        sr = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        ar = function(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        or = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        ur = function(t, e, r, i) {
            for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
        },
        hr = function(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? St(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        lr = function(t, e, r, i) {
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        },
        fr = function(t) {
            for (var e, r, i, n, s = t._pt; s;) {
                for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
            }
            t._pt = i
        },
        cr = function() {
            function t(t, e, r, i, n, s, a, o, u) {
                this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || nr, this.d = a || this, this.set = o || Ke, this.pr = u || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, r) {
                this.mSet = this.mSet || this.set, this.set = lr, this.m = t, this.mt = r, this.tween = e
            }, t
        }();_t(ft + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return nt[t] = 1
    })),
    H.TweenMax = H.TweenLite = Je,
    H.TimelineLite = H.TimelineMax = Ue,
    h = new Ue({
        sortChildren: !1,
        defaults: b,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    w.stringFilter = ke;
    var pr = [],
        dr = {},
        _r = [],
        mr = 0,
        gr = 0,
        vr = function(t) {
            return (dr[t] || _r).map((function(t) {
                return t()
            }))
        },
        yr = function() {
            var t = Date.now(),
                e = [];
            t - mr > 2 && (vr("matchMediaInit"), pr.forEach((function(t) {
                var r, i, n, s, a = t.queries,
                    o = t.conditions;
                for (i in a)(r = l.matchMedia(a[i]).matches) && (n = 1), r !== o[i] && (o[i] = r, s = 1);
                s && (t.revert(), n && e.push(t))
            })), vr("matchMediaRevert"), e.forEach((function(t) {
                return t.onMatch(t, (function(e) {
                    return t.add(null, e)
                }))
            })), mr = t, vr("matchMedia"))
        },
        Tr = function() {
            function t(t, e) {
                this.selector = e && ie(e), this.data = [], this._r = [], this.isReverted = !1, this.id = gr++, t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                P(t) && (r = e, e = t, t = P);
                var i = this,
                    n = function() {
                        var t, n = u,
                            s = i.selector;
                        return n && n !== i && n.data.push(i), r && (i.selector = ie(r)), u = i, t = e.apply(i, arguments), P(t) && i._r.push(t), u = n, i.selector = s, i.isReverted = !1, t
                    };
                return i.last = n, t === P ? n(i, (function(t) {
                    return i.add(null, t)
                })) : t ? i[t] = n : n
            }, e.ignore = function(t) {
                var e = u;
                u = null, t(this), u = e
            }, e.getTweens = function() {
                var e = [];
                return this.data.forEach((function(r) {
                    return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Je && !(r.parent && "nested" === r.parent.data) && e.push(r)
                })), e
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(t, e) {
                var r = this;
                if (t ? function() {
                        for (var e, i = r.getTweens(), n = r.data.length; n--;) "isFlip" === (e = r.data[n]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function(t) {
                            return i.splice(i.indexOf(t), 1)
                        })));
                        for (i.map((function(t) {
                                return {
                                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                    t
                                }
                            })).sort((function(t, e) {
                                return e.g - t.g || -1 / 0
                            })).forEach((function(e) {
                                return e.t.revert(t)
                            })), n = r.data.length; n--;)(e = r.data[n]) instanceof Ue ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof Je) && e.revert && e.revert(t);
                        r._r.forEach((function(e) {
                            return e(t, r)
                        })), r.isReverted = !0
                    }() : this.data.forEach((function(t) {
                        return t.kill && t.kill()
                    })), this.clear(), e)
                    for (var i = pr.length; i--;) pr[i].id === this.id && pr.splice(i, 1)
            }, e.revert = function(t) {
                this.kill(t || {})
            }, t
        }(),
        wr = function() {
            function t(t) {
                this.contexts = [], this.scope = t, u && u.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                F(t) || (t = {
                    matches: t
                });
                var i, n, s, a = new Tr(0, r || this.scope),
                    o = a.conditions = {};
                for (n in u && !a.selector && (a.selector = u.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === n ? s = 1 : (i = l.matchMedia(t[n])) && (pr.indexOf(a) < 0 && pr.push(a), (o[n] = i.matches) && (s = 1), i.addListener ? i.addListener(yr) : i.addEventListener("change", yr));
                return s && e(a, (function(t) {
                    return a.add(null, t)
                })), this
            }, e.revert = function(t) {
                this.kill(t || {})
            }, e.kill = function(t) {
                this.contexts.forEach((function(e) {
                    return e.kill(t, !0)
                }))
            }, t
        }(),
        br = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach((function(t) {
                    return me(t)
                }))
            },
            timeline: function(t) {
                return new Ue(t)
            },
            getTweensOf: function(t, e) {
                return h.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, i) {
                E(t) && (t = re(t)[0]);
                var n = pt(t || {}).get,
                    s = r ? xt : bt;
                return "native" === r && (r = ""), t ? e ? s((ot[e] && ot[e].get || n)(t, e, r, i)) : function(e, r, i) {
                    return s((ot[e] && ot[e].get || n)(t, e, r, i))
                } : t
            },
            quickSetter: function(t, e, r) {
                if ((t = re(t)).length > 1) {
                    var i = t.map((function(t) {
                            return kr.quickSetter(t, e, r)
                        })),
                        n = i.length;
                    return function(t) {
                        for (var e = n; e--;) i[e](t)
                    }
                }
                t = t[0] || {};
                var s = ot[e],
                    a = pt(t),
                    o = a.harness && (a.harness.aliases || {})[e] || e,
                    u = s ? function(e) {
                        var i = new s;
                        _._pt = 0, i.init(t, r ? e + r : e, _, 0, [t]), i.render(1, i), _._pt && or(1, _)
                    } : a.set(t, o);
                return s ? u : function(e) {
                    return u(t, o, r ? e + r : e, a, 1)
                }
            },
            quickTo: function(t, e, r) {
                var i, n = kr.to(t, kt(((i = {})[e] = "+=0.1", i.paused = !0, i), r || {})),
                    s = function(t, r, i) {
                        return n.resetTo(e, t, r, i)
                    };
                return s.tween = n, s
            },
            isTweening: function(t) {
                return h.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Re(t.ease, b.ease)), Mt(b, t || {})
            },
            config: function(t) {
                return Mt(w, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    r = t.effect,
                    i = t.plugins,
                    n = t.defaults,
                    s = t.extendTimeline;
                (i || "").split(",").forEach((function(t) {
                    return t && !ot[t] && !H[t] && J(e + " effect requires " + t + " plugin.")
                })), ut[e] = function(t, e, i) {
                    return r(re(t), Ot(e || {}, n), i)
                }, s && (Ue.prototype[e] = function(t, r, i) {
                    return this.add(ut[e](t, F(r) ? r : (i = r) && {}, this), i)
                })
            },
            registerEase: function(t, e) {
                Ce[t] = Re(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Re(t, e) : Ce
            },
            getById: function(t) {
                return h.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, i, n = new Ue(t);
                for (n.smoothChildTiming = L(t.smoothChildTiming), h.remove(n), n._dp = 0, n._time = n._tTime = h._time, r = h._first; r;) i = r._next, !e && !r._dur && r instanceof Je && r.vars.onComplete === r._targets[0] || Ut(n, r, r._start - r._delay), r = i;
                return Ut(h, n, 0), n
            },
            context: function(t, e) {
                return t ? new Tr(t, e) : u
            },
            matchMedia: function(t) {
                return new wr(t)
            },
            matchMediaRefresh: function() {
                return pr.forEach((function(t) {
                    var e, r, i = t.conditions;
                    for (r in i) i[r] && (i[r] = !1, e = 1);
                    e && t.revert()
                })) || yr()
            },
            addEventListener: function(t, e) {
                var r = dr[t] || (dr[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = dr[t],
                    i = r && r.indexOf(e);
                i >= 0 && r.splice(i, 1)
            },
            utils: {
                wrap: function t(e, r, i) {
                    var n = r - e;
                    return q(e) ? he(e, t(0, e.length), r) : $t(i, (function(t) {
                        return (n + (t - e) % n) % n + e
                    }))
                },
                wrapYoyo: function t(e, r, i) {
                    var n = r - e,
                        s = 2 * n;
                    return q(e) ? he(e, t(0, e.length - 1), r) : $t(i, (function(t) {
                        return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
                    }))
                },
                distribute: se,
                random: ue,
                snap: oe,
                normalize: function(t, e, r) {
                    return fe(t, e, 0, 1, r)
                },
                getUnit: Kt,
                clamp: function(t, e, r) {
                    return $t(r, (function(r) {
                        return Jt(t, e, r)
                    }))
                },
                splitColor: Te,
                toArray: re,
                selector: ie,
                mapRange: fe,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }), t)
                    }
                },
                unitize: function(t, e) {
                    return function(r) {
                        return t(parseFloat(r)) + (e || Kt(r))
                    }
                },
                interpolate: function t(e, r, i, n) {
                    var s = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    };
                    if (!s) {
                        var a, o, u, h, l, f = E(e),
                            c = {};
                        if (!0 === i && (n = 1) && (i = null), f) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if (q(e) && !q(r)) {
                            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                            h--, s = function(t) {
                                t *= h;
                                var e = Math.min(l, ~~t);
                                return u[e](t - e)
                            }, i = r
                        } else n || (e = kt(q(e) ? [] : {}, e));
                        if (!u) {
                            for (a in r) Ve.call(c, e, a, "get", r[a]);
                            s = function(t) {
                                return or(t, c) || (f ? e.p : e)
                            }
                        }
                    }
                    return $t(i, s)
                },
                shuffle: ne
            },
            install: Z,
            effects: ut,
            ticker: Me,
            updateRoot: Ue.updateRoot,
            plugins: ot,
            globalTimeline: h,
            core: {
                PropTween: cr,
                globals: K,
                Tween: Je,
                Timeline: Ue,
                Animation: qe,
                getCache: pt,
                _removeLinkedListItem: St,
                reverting: function() {
                    return o
                },
                context: function(t) {
                    return t && u && (u.data.push(t), t._ctx = u), u
                },
                suppressOverwrites: function(t) {
                    return a = t
                }
            }
        };_t("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return br[t] = Je[t]
    })),
    Me.add(Ue.updateRoot),
    _ = br.to({}, {
        duration: 0
    });
    var xr = function(t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
            return r
        },
        Or = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, r, i) {
                    i._onInit = function(t) {
                        var i, n;
                        if (E(r) && (i = {}, _t(r, (function(t) {
                                return i[t] = 1
                            })), r = i), e) {
                            for (n in i = {}, r) i[n] = e(r[n]);
                            r = i
                        }! function(t, e) {
                            var r, i, n, s = t._targets;
                            for (r in e)
                                for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = xr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                        }(t, r)
                    }
                }
            }
        },
        kr = br.registerPlugin({
            name: "attr",
            init: function(t, e, r, i, n) {
                var s, a, o;
                for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
            },
            render: function(t, e) {
                for (var r = e._pt; r;) o ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
            }
        }, Or("roundProps", ae), Or("modifiers"), Or("snap", oe)) || br;Je.version = Ue.version = kr.version = "3.12.5",
    p = 1,
    B() && Ae(),
    Ce.Power0,
    Ce.Power1,
    Ce.Power2,
    Ce.Power3,
    Ce.Power4,
    Ce.Linear,
    Ce.Quad,
    Ce.Cubic,
    Ce.Quart,
    Ce.Quint,
    Ce.Strong,
    Ce.Elastic,
    Ce.Back,
    Ce.SteppedEase,
    Ce.Bounce,
    Ce.Sine,
    Ce.Expo,
    Ce.Circ;
    var Mr, Ar, Cr, Dr, Sr, Er, Pr, zr, Rr = {},
        Fr = 180 / Math.PI,
        Lr = Math.PI / 180,
        Br = Math.atan2,
        Ir = /([A-Z])/g,
        Yr = /(left|right|width|margin|padding|x)/i,
        qr = /[\s,\(]\S/,
        Ur = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Xr = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Nr = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        jr = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Vr = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        Gr = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Wr = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Hr = function(t, e, r) {
            return t.style[e] = r
        },
        Qr = function(t, e, r) {
            return t.style.setProperty(e, r)
        },
        Zr = function(t, e, r) {
            return t._gsap[e] = r
        },
        $r = function(t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        },
        Jr = function(t, e, r, i, n) {
            var s = t._gsap;
            s.scaleX = s.scaleY = r, s.renderTransform(n, s)
        },
        Kr = function(t, e, r, i, n) {
            var s = t._gsap;
            s[e] = r, s.renderTransform(n, s)
        },
        ti = "transform",
        ei = ti + "Origin",
        ri = function t(e, r) {
            var i = this,
                n = this.target,
                s = n.style,
                a = n._gsap;
            if (e in Rr && s) {
                if (this.tfm = this.tfm || {}, "transform" === e) return Ur.transform.split(",").forEach((function(e) {
                    return t.call(i, e, r)
                }));
                if (~(e = Ur[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                        return i.tfm[t] = Ti(n, t)
                    })) : this.tfm[e] = a.x ? a[e] : Ti(n, e), e === ei && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(ti) >= 0) return;
                a.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(ei, r, "")), e = ti
            }(s || r) && this.props.push(e, r, s[e])
        },
        ii = function(t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        ni = function() {
            var t, e, r = this.props,
                i = this.target,
                n = i.style,
                s = i._gsap;
            for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(Ir, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) s[e] = this.tfm[e];
                s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Pr()) && t.isStart || n[ti] || (ii(n), s.zOrigin && n[ei] && (n[ei] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
            }
        },
        si = function(t, e) {
            var r = {
                target: t,
                props: [],
                revert: ni,
                save: ri
            };
            return t._gsap || kr.core.getCache(t), e && e.split(",").forEach((function(t) {
                return r.save(t)
            })), r
        },
        ai = function(t, e) {
            var r = Ar.createElementNS ? Ar.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ar.createElement(t);
            return r && r.style ? r : Ar.createElement(t)
        },
        oi = function t(e, r, i) {
            var n = getComputedStyle(e);
            return n[r] || n.getPropertyValue(r.replace(Ir, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, hi(r) || r, 1) || ""
        },
        ui = "O,Moz,ms,Ms,Webkit".split(","),
        hi = function(t, e, r) {
            var i = (e || Sr).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(ui[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? ui[n] : "") + t
        },
        li = function() {
            "undefined" != typeof window && window.document && (Mr = window, Ar = Mr.document, Cr = Ar.documentElement, Sr = ai("div") || {
                style: {}
            }, ai("div"), ti = hi(ti), ei = ti + "Origin", Sr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zr = !!hi("perspective"), Pr = kr.core.reverting, Dr = 1)
        },
        fi = function t(e) {
            var r, i = ai("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                n = this.parentNode,
                s = this.nextSibling,
                a = this.style.cssText;
            if (Cr.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
            return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Cr.removeChild(i), this.style.cssText = a, r
        },
        ci = function(t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        pi = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (r) {
                e = fi.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === fi || (e = fi.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +ci(t, ["x", "cx", "x1"]) || 0,
                y: +ci(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        di = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pi(t))
        },
        _i = function(t, e) {
            if (e) {
                var r, i = t.style;
                e in Rr && e !== ei && (e = ti), i.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(Ir, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        },
        mi = function(t, e, r, i, n, s) {
            var a = new cr(t._pt, e, r, 0, 1, s ? Wr : Gr);
            return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
        },
        gi = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        vi = {
            grid: 1,
            flex: 1
        },
        yi = function t(e, r, i, n) {
            var s, a, o, u, h = parseFloat(i) || 0,
                l = (i + "").trim().substr((h + "").length) || "px",
                f = Sr.style,
                c = Yr.test(r),
                p = "svg" === e.tagName.toLowerCase(),
                d = (p ? "client" : "offset") + (c ? "Width" : "Height"),
                _ = 100,
                m = "px" === n,
                g = "%" === n;
            if (n === l || !h || gi[n] || gi[l]) return h;
            if ("px" !== l && !m && (h = t(e, r, i, "px")), u = e.getCTM && di(e), (g || "%" === l) && (Rr[r] || ~r.indexOf("adius"))) return s = u ? e.getBBox()[c ? "width" : "height"] : e[d], mt(g ? h / s * _ : h / 100 * s);
            if (f[c ? "width" : "height"] = _ + (m ? l : n), a = ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Ar && a.appendChild || (a = Ar.body), (o = a._gsap) && g && o.width && c && o.time === Me.time && !o.uncache) return mt(h / o.width * _);
            if (!g || "height" !== r && "width" !== r)(g || "%" === l) && !vi[oi(a, "display")] && (f.position = oi(e, "position")), a === e && (f.position = "static"), a.appendChild(Sr), s = Sr[d], a.removeChild(Sr), f.position = "absolute";
            else {
                var v = e.style[r];
                e.style[r] = _ + n, s = e[d], v ? e.style[r] = v : _i(e, r)
            }
            return c && g && ((o = pt(a)).time = Me.time, o.width = a[d]), mt(m ? s * h / _ : s && h ? _ / s * h : 0)
        },
        Ti = function(t, e, r, i) {
            var n;
            return Dr || li(), e in Ur && "transform" !== e && ~(e = Ur[e]).indexOf(",") && (e = e.split(",")[0]), Rr[e] && "transform" !== e ? (n = Ei(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Pi(oi(t, ei)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = Oi[e] && Oi[e](t, e, r) || oi(t, e) || dt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? yi(t, e, n, r) + r : n
        },
        wi = function(t, e, r, i) {
            if (!r || "none" === r) {
                var n = hi(e, t, 1),
                    s = n && oi(t, n, 1);
                s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = oi(t, "borderTopColor"))
            }
            var a, o, u, h, l, f, c, p, d, _, m, g = new cr(this._pt, t.style, e, 0, 1, ar),
                v = 0,
                y = 0;
            if (g.b = r, g.e = i, r += "", "auto" == (i += "") && (f = t.style[e], t.style[e] = i, i = oi(t, e) || i, f ? t.style[e] = f : _i(t, e)), ke(a = [r, i]), i = a[1], u = (r = a[0]).match(N) || [], (i.match(N) || []).length) {
                for (; o = N.exec(i);) c = o[0], d = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = vt(h, c) + m), p = parseFloat(c), _ = c.substr((p + "").length), v = N.lastIndex - _.length, _ || (_ = _ || w.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = yi(t, e, f, _) || 0), g._pt = {
                    _next: g._pt,
                    p: d || 1 === y ? d : ",",
                    s: h,
                    c: p - h,
                    m: l && l < 4 || "zIndex" === e ? Math.round : 0
                });
                g.c = v < i.length ? i.substring(v, i.length) : ""
            } else g.r = "display" === e && "none" === i ? Wr : Gr;
            return V.test(i) && (g.e = 0), this._pt = g, g
        },
        bi = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        xi = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, i, n, s = e.t,
                    a = s.style,
                    o = e.u,
                    u = s._gsap;
                if ("all" === o || !0 === o) a.cssText = "", i = 1;
                else
                    for (n = (o = o.split(",")).length; --n > -1;) r = o[n], Rr[r] && (i = 1, r = "transformOrigin" === r ? ei : ti), _i(s, r);
                i && (_i(s, ti), u && (u.svg && s.removeAttribute("transform"), Ei(s, 1), u.uncache = 1, ii(a)))
            }
        },
        Oi = {
            clearProps: function(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var s = t._pt = new cr(t._pt, e, r, 0, 0, xi);
                    return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
                }
            }
        },
        ki = [1, 0, 0, 1, 0, 0],
        Mi = {},
        Ai = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Ci = function(t) {
            var e = oi(t, ti);
            return Ai(e) ? ki : e.substr(7).match(X).map(mt)
        },
        Di = function(t, e) {
            var r, i, n, s, a = t._gsap || pt(t),
                o = t.style,
                u = Ci(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? ki : u : (u !== ki || t.offsetParent || t === Cr || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, i = t.nextElementSibling, Cr.appendChild(t)), u = Ci(t), n ? o.display = n : _i(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Cr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Si = function(t, e, r, i, n, s) {
            var a, o, u, h = t._gsap,
                l = n || Di(t, !0),
                f = h.xOrigin || 0,
                c = h.yOrigin || 0,
                p = h.xOffset || 0,
                d = h.yOffset || 0,
                _ = l[0],
                m = l[1],
                g = l[2],
                v = l[3],
                y = l[4],
                T = l[5],
                w = e.split(" "),
                b = parseFloat(w[0]) || 0,
                x = parseFloat(w[1]) || 0;
            r ? l !== ki && (o = _ * v - m * g) && (u = b * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, b = b * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (b = (a = pi(t)).x + (~w[0].indexOf("%") ? b / 100 * a.width : b), x = a.y + (~(w[1] || w[0]).indexOf("%") ? x / 100 * a.height : x)), i || !1 !== i && h.smooth ? (y = b - f, T = x - c, h.xOffset = p + (y * _ + T * g) - y, h.yOffset = d + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = b, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[ei] = "0px 0px", s && (mi(s, h, "xOrigin", f, b), mi(s, h, "yOrigin", c, x), mi(s, h, "xOffset", p, h.xOffset), mi(s, h, "yOffset", d, h.yOffset)), t.setAttribute("data-svg-origin", b + " " + x)
        },
        Ei = function(t, e) {
            var r = t._gsap || new Ye(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, s, a, o, u, h, l, f, c, p, d, _, m, g, v, y, T, b, x, O, k, M, A, C, D, S, E, P, z, R, F, L = t.style,
                B = r.scaleX < 0,
                I = "px",
                Y = "deg",
                q = getComputedStyle(t),
                U = oi(t, ei) || "0";
            return i = n = s = u = h = l = f = c = p = 0, a = o = 1, r.svg = !(!t.getCTM || !di(t)), q.translate && ("none" === q.translate && "none" === q.scale && "none" === q.rotate || (L[ti] = ("none" !== q.translate ? "translate3d(" + (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") + ("none" !== q.scale ? "scale(" + q.scale.split(" ").join(",") + ") " : "") + ("none" !== q[ti] ? q[ti] : "")), L.scale = L.rotate = L.translate = "none"), m = Di(t, r.svg), r.svg && (r.uncache ? (C = t.getBBox(), U = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px", A = "") : A = !e && t.getAttribute("data-svg-origin"), Si(t, A || U, !!A || r.originIsAbsolute, !1 !== r.smooth, m)), d = r.xOrigin || 0, _ = r.yOrigin || 0, m !== ki && (T = m[0], b = m[1], x = m[2], O = m[3], i = k = m[4], n = M = m[5], 6 === m.length ? (a = Math.sqrt(T * T + b * b), o = Math.sqrt(O * O + x * x), u = T || b ? Br(b, T) * Fr : 0, (f = x || O ? Br(x, O) * Fr + u : 0) && (o *= Math.abs(Math.cos(f * Lr))), r.svg && (i -= d - (d * T + _ * x), n -= _ - (d * b + _ * O))) : (F = m[6], z = m[7], S = m[8], E = m[9], P = m[10], R = m[11], i = m[12], n = m[13], s = m[14], h = (g = Br(F, P)) * Fr, g && (A = k * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), C = M * v + E * y, D = F * v + P * y, S = k * -y + S * v, E = M * -y + E * v, P = F * -y + P * v, R = z * -y + R * v, k = A, M = C, F = D), l = (g = Br(-x, P)) * Fr, g && (v = Math.cos(-g), R = O * (y = Math.sin(-g)) + R * v, T = A = T * v - S * y, b = C = b * v - E * y, x = D = x * v - P * y), u = (g = Br(b, T)) * Fr, g && (A = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + M * y, b = b * v - T * y, M = M * v - k * y, T = A, k = C), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, l = 180 - l), a = mt(Math.sqrt(T * T + b * b + x * x)), o = mt(Math.sqrt(M * M + F * F)), g = Br(k, M), f = Math.abs(g) > 2e-4 ? g * Fr : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (A = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Ai(oi(t, ti)), A && t.setAttribute("transform", A))), Math.abs(f) > 90 && Math.abs(f) < 270 && (B ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + I, r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + I, r.z = s + I, r.scaleX = mt(a), r.scaleY = mt(o), r.rotation = mt(u) + Y, r.rotationX = mt(h) + Y, r.rotationY = mt(l) + Y, r.skewX = f + Y, r.skewY = c + Y, r.transformPerspective = p + I, (r.zOrigin = parseFloat(U.split(" ")[2]) || !e && r.zOrigin || 0) && (L[ei] = Pi(U)), r.xOffset = r.yOffset = 0, r.force3D = w.force3D, r.renderTransform = r.svg ? Yi : zr ? Ii : Ri, r.uncache = 0, r
        },
        Pi = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        zi = function(t, e, r) {
            var i = Kt(e);
            return mt(parseFloat(e) + parseFloat(yi(t, "x", r + "px", i))) + i
        },
        Ri = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ii(t, e)
        },
        Fi = "0deg",
        Li = "0px",
        Bi = ") ",
        Ii = function(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                s = r.x,
                a = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                c = r.skewY,
                p = r.scaleX,
                d = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Fi || h !== Fi)) {
                var w, b = parseFloat(h) * Lr,
                    x = Math.sin(b),
                    O = Math.cos(b);
                b = parseFloat(l) * Lr, w = Math.cos(b), s = zi(g, s, x * w * -v), a = zi(g, a, -Math.sin(b) * -v), o = zi(g, o, O * w * -v + v)
            }
            _ !== Li && (y += "perspective(" + _ + Bi), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (T || s !== Li || a !== Li || o !== Li) && (y += o !== Li || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Bi), u !== Fi && (y += "rotate(" + u + Bi), h !== Fi && (y += "rotateY(" + h + Bi), l !== Fi && (y += "rotateX(" + l + Bi), f === Fi && c === Fi || (y += "skew(" + f + ", " + c + Bi), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + Bi), g.style[ti] = y || "translate(0, 0)"
        },
        Yi = function(t, e) {
            var r, i, n, s, a, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                c = o.rotation,
                p = o.skewX,
                d = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                w = o.yOffset,
                b = o.forceCSS,
                x = parseFloat(l),
                O = parseFloat(f);
            c = parseFloat(c), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), c += d), c || p ? (c *= Lr, p *= Lr, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - p) * -m, s = Math.cos(c - p) * m, p && (d *= Lr, a = Math.tan(p - d), n *= a = Math.sqrt(1 + a * a), s *= a, d && (a = Math.tan(d), r *= a = Math.sqrt(1 + a * a), i *= a)), r = mt(r), i = mt(i), n = mt(n), s = mt(s)) : (r = _, s = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = yi(g, "x", l, "px"), O = yi(g, "y", f, "px")), (v || y || T || w) && (x = mt(x + v - (v * r + y * n) + T), O = mt(O + y - (v * i + y * s) + w)), (u || h) && (a = g.getBBox(), x = mt(x + u / 100 * a.width), O = mt(O + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + x + "," + O + ")", g.setAttribute("transform", a), b && (g.style[ti] = a)
        },
        qi = function(t, e, r, i, n) {
            var s, a, o = 360,
                u = E(n),
                h = parseFloat(n) * (u && ~n.indexOf("rad") ? Fr : 1) - i,
                l = i + h + "deg";
            return u && ("short" === (s = n.split("_")[1]) && (h %= o) != h % 180 && (h += h < 0 ? o : -360), "cw" === s && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === s && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = a = new cr(t._pt, e, r, i, h, Nr), a.e = l, a.u = "deg", t._props.push(r), a
        },
        Ui = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Xi = function(t, e, r) {
            var i, n, s, a, o, u, h, l = Ui({}, r._gsap),
                f = r.style;
            for (n in l.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[ti] = e, i = Ei(r, 1), _i(r, ti), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[ti], f[ti] = e, i = Ei(r, 1), f[ti] = s), Rr)(s = l[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Kt(s) !== (h = Kt(a)) ? yi(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new cr(t._pt, i, n, o, u - o, Xr), t._pt.u = h || 0, t._props.push(n));
            Ui(i, l)
        };_t("padding,margin,Width,Radius", (function(t, e) {
        var r = "Top",
            i = "Right",
            n = "Bottom",
            s = "Left",
            a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map((function(r) {
                return e < 2 ? t + r : "border" + r + t
            }));
        Oi[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
            var s, o;
            if (arguments.length < 4) return s = a.map((function(e) {
                return Ti(t, e, r)
            })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
            s = (i + "").split(" "), o = {}, a.forEach((function(t, e) {
                return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            })), t.init(e, o, n)
        }
    }));
    var Ni, ji, Vi = {
        name: "css",
        register: li,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
            var s, a, o, u, h, l, f, c, p, d, _, m, g, v, y, T, b, x, O, k, M = this._props,
                A = t.style,
                C = r.vars.startAt;
            for (f in Dr || li(), this.styles = this.styles || si(t), T = this.styles.props, this.tween = r, e)
                if ("autoRound" !== f && (a = e[f], !ot[f] || !Ge(f, e, r, i, t, n)))
                    if (h = typeof a, l = Oi[f], "function" === h && (h = typeof(a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = le(a)), l) l(this, t, f, a, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", xe.lastIndex = 0, xe.test(s) || (c = Kt(s), p = Kt(a)), p ? c !== p && (s = yi(t, f, s, p) + p) : c && (a += c), this.add(A, "setProperty", s, a, i, n, 0, 0, f), M.push(f), T.push(f, 0, A[f]);
            else if ("undefined" !== h) {
                if (C && f in C ? (s = "function" == typeof C[f] ? C[f].call(r, i, t, n) : C[f], E(s) && ~s.indexOf("random(") && (s = le(s)), Kt(s + "") || "auto" === s || (s += w.units[f] || Kt(Ti(t, f)) || ""), "=" === (s + "").charAt(1) && (s = Ti(t, f))) : s = Ti(t, f), u = parseFloat(s), (d = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), f in Ur && ("autoAlpha" === f && (1 === u && "hidden" === Ti(t, "visibility") && o && (u = 0), T.push("visibility", 0, A.visibility), mi(this, A, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Ur[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Rr)
                    if (this.styles.save(f), m || ((g = t._gsap).renderTransform && !e.parseTransform || Ei(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new cr(this._pt, A, ti, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new cr(this._pt, g, "scaleY", g.scaleY, (d ? vt(g.scaleY, d + o) : o) - g.scaleY || 0, Xr), this._pt.u = 0, M.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            T.push(ei, 0, A[ei]), x = void 0, O = void 0, k = void 0, O = (x = (b = a).split(" "))[0], k = x[1] || "50%", "top" !== O && "bottom" !== O && "left" !== k && "right" !== k || (b = O, O = k, k = b), x[0] = bi[O] || O, x[1] = bi[k] || k, a = x.join(" "), g.svg ? Si(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && mi(this, g, "zOrigin", g.zOrigin, p), mi(this, A, f, Pi(s), Pi(a)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            Si(t, a, 1, v, 0, this);
                            continue
                        }
                        if (f in Mi) {
                            qi(this, g, f, u, d ? vt(u, d + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            mi(this, g, "smooth", g.smooth, a);
                            continue
                        }
                        if ("force3D" === f) {
                            g[f] = a;
                            continue
                        }
                        if ("transform" === f) {
                            Xi(this, a, t);
                            continue
                        }
                    } else f in A || (f = hi(f) || f);
                if (_ || (o || 0 === o) && (u || 0 === u) && !qr.test(a) && f in A) o || (o = 0), (c = (s + "").substr((u + "").length)) !== (p = Kt(a) || (f in w.units ? w.units[f] : c)) && (u = yi(t, f, s, p)), this._pt = new cr(this._pt, _ ? g : A, f, u, (d ? vt(u, d + o) : o) - u, _ || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? Xr : Vr), this._pt.u = p || 0, c !== p && "%" !== p && (this._pt.b = s, this._pt.r = jr);
                else if (f in A) wi.call(this, t, f, s, d ? d + a : a);
                else if (f in t) this.add(t, f, s || t[f], d ? d + a : a, i, n);
                else if ("parseTransform" !== f) {
                    $(f, a);
                    continue
                }
                _ || (f in A ? T.push(f, 0, A[f]) : T.push(f, 1, s || t[f])), M.push(f)
            }
            y && fr(this)
        },
        render: function(t, e) {
            if (e.tween._time || !Pr())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: Ti,
        aliases: Ur,
        getSetter: function(t, e, r) {
            var i = Ur[e];
            return i && i.indexOf(",") < 0 && (e = i), e in Rr && e !== ei && (t._gsap.x || Ti(t, "x")) ? r && Er === r ? "scale" === e ? $r : Zr : (Er = r || {}) && ("scale" === e ? Jr : Kr) : t.style && !R(t.style[e]) ? Hr : ~e.indexOf("-") ? Qr : ir(t, e)
        },
        core: {
            _removeProperty: _i,
            _getMatrix: Di
        }
    };kr.utils.checkPrefix = hi,
    kr.core.getStyleSaver = si,
    ji = _t("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ni = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        Rr[t] = 1
    })),
    _t(Ni, (function(t) {
        w.units[t] = "deg", Mi[t] = 1
    })),
    Ur[ji[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ni,
    _t("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        Ur[e[1]] = ji[e[0]]
    })),
    _t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        w.units[t] = "px"
    })),
    kr.registerPlugin(Vi);
    var Gi = kr.registerPlugin(Vi) || kr;Gi.core.Tween;
    const Wi = document.querySelectorAll('a[href^="#"]'),
        Hi = {
            "#home": 1,
            "#advantages": 2,
            "#play": 3,
            "#about": 4,
            "#contacts": 5
        };
    let Qi = 1,
        Zi = !1;
    const $i = document.querySelector("video.about__video");Wi.forEach((t => {
        const e = new URL(t.href).hash;e && Object.keys(Hi).includes(e) && t.addEventListener("click", (t => {
            if (t.preventDefault(), t.stopPropagation(), !Zi) return;i();
            const r = Hi[e];tn(r, r - Qi),
            Qi = r
        }))
    }));
    const Ji = () => {!Zi || Qi <= 1 || (Qi--, tn(Qi, -1))
        },
        Ki = () => {!Zi || Qi >= 5 || (Qi++, tn(Qi, 1))
        },
        tn = async(t, e) => {
            if (Zi) {
                switch (Zi = !1, Gi.to(".start, .why, .play, .about, .join", {
                    y: e > 0 ? -100 : 100,
                    opacity: 0,
                    display: "none",
                    duration: 1
                }), Gi.to(".background", {
                    y: 10 - 5 * (t - 1) + "%",
                    duration: 3
                }), Gi.to(".cards", {
                    y: "60%"
                }), await en(1e3), 5 !== t && 4 !== t && Gi.to(".table", {
                    opacity: 1,
                    display: "",
                    duration: 1
                }), t) {
                    case 1:
                        Gi.fromTo(".start", {
                            y: e > 0 ? 100 : -100,
                            opacity: 0,
                            display: "none"
                        }, {
                            y: 0,
                            opacity: 1,
                            display: "",
                            duration: 1
                        });
                        break;
                    case 2:
                        Gi.fromTo(".why", {
                            y: e > 0 ? 100 : -100,
                            opacity: 0,
                            display: "none"
                        }, {
                            y: 0,
                            opacity: 1,
                            display: "",
                            duration: 1
                        });
                        break;
                    case 3:
                        Gi.timeline().fromTo(".play", {
                            y: e > 0 ? 100 : -100,
                            opacity: 0,
                            display: "none"
                        }, {
                            y: 0,
                            opacity: 1,
                            display: "",
                            
                        }).fromTo(".cards", {
                            opacity: 0,
                            display: "none"
                        }, {
                            opacity: 1,
                            display: "",
                            
                        }).from(".card__card", {
                            opacity: 0,
                            x: -50,
                            stagger: .25,
                            
                        }).fromTo(".cards", {
                            y: "60%"
                        }, {
                            y: "20%",
                            
                        }, "+=1").from(".card__border", {
                            opacity: 0,
                            
                        }).from(".play__title", {
                            opacity: 0,
                            duration: 0
                        }).from(".play__text", {
                            opacity: 0,
                            
                            duration: 0
                        }).from(".play__scroll", {
                            opacity: 0,
                            duration: 0
                        }), (8e3);
                        break;
                    case 4:
                        $i.pause(), $i.currentTime = 0, $i.play(), Gi.to(".cards", {
                            opacity: 0,
                            display: "none",
                            duration: 0
                        }), Gi.to(".table", {
                            opacity: 0,
                            display: "none",
                            
                        }), "0" !== document.querySelector(".table").style.opacity && await en(1e3), Gi.fromTo(".about", {
                            y: e > 0 ? 100 : -100,
                            opacity: 0,
                            display: "none"
                        }, {
                            y: 0,
                            opacity: 1,
                            display: "",
                            
                        });
                        break;
                    case 5:
                        Gi.to(".cards", {
                            opacity: 0,
                            display: "none",
                            
                        }), Gi.to(".table", {
                            opacity: 0,
                            display: "none",
                            
                        }), "0" !== document.querySelector(".table").style.opacity && (1e3), Gi.fromTo(".join", {
                            y: e > 0 ? 100 : -100,
                            opacity: 0,
                            display: "none"
                        }, {
                            y: 0,
                            opacity: 1,
                            display: "",
                            
                        })
                }
                (1e3), Zi = !0
            }
        },
        en = async t => new Promise((e => setTimeout(e, t)));window.setScreen = tn,
    Gi.timeline().fromTo(".background", {
        scale: 1.25,
        opacity: 0
    }, {
        y: "10%",
        scale: 1,
        opacity: 1,
        duration: 1
    }).from(".start", {
        opacity: 0,
        y: -100,
        duration: 1,
        onComplete: () => Zi = !0
    }, "-=0.5");
    const rn = () => {
            const t = window.innerHeight,
                e = document.documentElement.scrollHeight;
            return window.scrollY + t >= e
        },
        nn = () => window.scrollY <= 0;window.onwheel = t => {
        const {
            deltaY: e
        } = t;
        if (e < 0) {
            if (!nn()) return;
            Ji()
        } else {
            if (!rn()) return;
            Ki()
        }
    },
    window.onscroll = () => nn() ? Ji() : rn() ? Ki() : void 0;
    let sn = 0;window.ontouchstart = t => {
        sn = t.touches[0].clientY
    },
    window.ontouchend = t => {
        const e = t.changedTouches[0].clientY;
        if (sn > e) {
            if (!rn()) return;
            Ki()
        } else if (sn < e) {
            if (!nn()) return;
            Ji()
        }
    }
})();
document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', function() {
    const target = document.querySelector(this.getAttribute('data-target'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
