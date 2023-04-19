function Dn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let i = 0; i < s.length; i++)
    n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
function Un(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = ee(s) ? Yi(s) : Un(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else {
    if (ee(e))
      return e;
    if ($(e))
      return e;
  }
}
const Xi = /;(?![^(]*\))/g, Ji = /:([^]+)/, Zi = /\/\*.*?\*\//gs;
function Yi(e) {
  const t = {};
  return e.replace(Zi, "").split(Xi).forEach((n) => {
    if (n) {
      const s = n.split(Ji);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ln(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ln(e[n]);
      s && (t += s + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Qi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", er = /* @__PURE__ */ Dn(Qi);
function Bs(e) {
  return !!e || e === "";
}
function tr(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Zt(e[s], t[s]);
  return n;
}
function Zt(e, t) {
  if (e === t)
    return !0;
  let n = cs(e), s = cs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Tt(e), s = Tt(t), n || s)
    return e === t;
  if (n = w(e), s = w(t), n || s)
    return n && s ? tr(e, t) : !1;
  if (n = $(e), s = $(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), f = t.hasOwnProperty(o);
      if (l && !f || !l && f || !Zt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ws(e, t) {
  return e.findIndex((n) => Zt(n, t));
}
const ls = (e) => ee(e) ? e : e == null ? "" : w(e) || $(e) && (e.toString === Xs || !N(e.toString)) ? JSON.stringify(e, Gs, 2) : String(e), Gs = (e, t) => t && t.__v_isRef ? Gs(e, t.value) : rt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, i]) => (n[`${s} =>`] = i, n), {})
} : Qt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : $(t) && !w(t) && !Js(t) ? String(t) : t, G = {}, it = [], Ee = () => {
}, nr = () => !1, sr = /^on[^a-z]/, Yt = (e) => sr.test(e), Fn = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Hn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ir = Object.prototype.hasOwnProperty, U = (e, t) => ir.call(e, t), w = Array.isArray, rt = (e) => Rt(e) === "[object Map]", Qt = (e) => Rt(e) === "[object Set]", cs = (e) => Rt(e) === "[object Date]", N = (e) => typeof e == "function", ee = (e) => typeof e == "string", Tt = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", zs = (e) => $(e) && N(e.then) && N(e.catch), Xs = Object.prototype.toString, Rt = (e) => Xs.call(e), rr = (e) => Rt(e).slice(8, -1), Js = (e) => Rt(e) === "[object Object]", jn = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jt = /* @__PURE__ */ Dn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), en = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, or = /-(\w)/g, ct = en((e) => e.replace(or, (t, n) => n ? n.toUpperCase() : "")), lr = /\B([A-Z])/g, ut = en((e) => e.replace(lr, "-$1").toLowerCase()), Zs = en((e) => e.charAt(0).toUpperCase() + e.slice(1)), _n = en((e) => e ? `on${Zs(e)}` : ""), xt = (e, t) => !Object.is(e, t), Vt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Bt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fr = (e) => {
  const t = ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fs;
const ar = () => fs || (fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let ve;
class ur {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ve, !t && ve && (this.index = (ve.scopes || (ve.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ve;
      try {
        return ve = this, t();
      } finally {
        ve = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ve = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ve = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function dr(e, t = ve) {
  t && t.active && t.effects.push(e);
}
function pr() {
  return ve;
}
const Vn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ys = (e) => (e.w & je) > 0, Qs = (e) => (e.n & je) > 0, _r = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= je;
}, hr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      Ys(i) && !Qs(i) ? i.delete(e) : t[n++] = i, i.w &= ~je, i.n &= ~je;
    }
    t.length = n;
  }
}, Wt = /* @__PURE__ */ new WeakMap();
let bt = 0, je = 1;
const En = 30;
let ye;
const Qe = Symbol(""), Tn = Symbol("");
class qn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, dr(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ye, n = Fe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ye, ye = this, Fe = !0, je = 1 << ++bt, bt <= En ? _r(this) : as(this), this.fn();
    } finally {
      bt <= En && hr(this), je = 1 << --bt, ye = this.parent, Fe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ye === this ? this.deferStop = !0 : this.active && (as(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function as(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Fe = !0;
const ei = [];
function dt() {
  ei.push(Fe), Fe = !1;
}
function pt() {
  const e = ei.pop();
  Fe = e === void 0 ? !0 : e;
}
function ue(e, t, n) {
  if (Fe && ye) {
    let s = Wt.get(e);
    s || Wt.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || s.set(n, i = Vn()), ti(i);
  }
}
function ti(e, t) {
  let n = !1;
  bt <= En ? Qs(e) || (e.n |= je, n = !Ys(e)) : n = !e.has(ye), n && (e.add(ye), ye.deps.push(e));
}
function Me(e, t, n, s, i, r) {
  const o = Wt.get(e);
  if (!o)
    return;
  let l = [];
  if (t === "clear")
    l = [...o.values()];
  else if (n === "length" && w(e)) {
    const f = Number(s);
    o.forEach((u, p) => {
      (p === "length" || p >= f) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), t) {
      case "add":
        w(e) ? jn(n) && l.push(o.get("length")) : (l.push(o.get(Qe)), rt(e) && l.push(o.get(Tn)));
        break;
      case "delete":
        w(e) || (l.push(o.get(Qe)), rt(e) && l.push(o.get(Tn)));
        break;
      case "set":
        rt(e) && l.push(o.get(Qe));
        break;
    }
  if (l.length === 1)
    l[0] && xn(l[0]);
  else {
    const f = [];
    for (const u of l)
      u && f.push(...u);
    xn(Vn(f));
  }
}
function xn(e, t) {
  const n = w(e) ? e : [...e];
  for (const s of n)
    s.computed && us(s);
  for (const s of n)
    s.computed || us(s);
}
function us(e, t) {
  (e !== ye || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function gr(e, t) {
  var n;
  return (n = Wt.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const mr = /* @__PURE__ */ Dn("__proto__,__v_isRef,__isVue"), ni = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tt)
), br = /* @__PURE__ */ Kn(), vr = /* @__PURE__ */ Kn(!1, !0), yr = /* @__PURE__ */ Kn(!0), ds = /* @__PURE__ */ Cr();
function Cr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = L(this);
      for (let r = 0, o = this.length; r < o; r++)
        ue(s, "get", r + "");
      const i = s[t](...n);
      return i === -1 || i === !1 ? s[t](...n.map(L)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      dt();
      const s = L(this)[t].apply(this, n);
      return pt(), s;
    };
  }), e;
}
function Er(e) {
  const t = L(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
function Kn(e = !1, t = !1) {
  return function(s, i, r) {
    if (i === "__v_isReactive")
      return !e;
    if (i === "__v_isReadonly")
      return e;
    if (i === "__v_isShallow")
      return t;
    if (i === "__v_raw" && r === (e ? t ? Fr : li : t ? oi : ri).get(s))
      return s;
    const o = w(s);
    if (!e) {
      if (o && U(ds, i))
        return Reflect.get(ds, i, r);
      if (i === "hasOwnProperty")
        return Er;
    }
    const l = Reflect.get(s, i, r);
    return (Tt(i) ? ni.has(i) : mr(i)) || (e || ue(s, "get", i), t) ? l : se(l) ? o && jn(i) ? l : l.value : $(l) ? e ? ci(l) : Wn(l) : l;
  };
}
const Tr = /* @__PURE__ */ si(), xr = /* @__PURE__ */ si(!0);
function si(e = !1) {
  return function(n, s, i, r) {
    let o = n[s];
    if (ft(o) && se(o) && !se(i))
      return !1;
    if (!e && (!Gt(i) && !ft(i) && (o = L(o), i = L(i)), !w(n) && se(o) && !se(i)))
      return o.value = i, !0;
    const l = w(n) && jn(s) ? Number(s) < n.length : U(n, s), f = Reflect.set(n, s, i, r);
    return n === L(r) && (l ? xt(i, o) && Me(n, "set", s, i) : Me(n, "add", s, i)), f;
  };
}
function Ar(e, t) {
  const n = U(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Me(e, "delete", t, void 0), s;
}
function Sr(e, t) {
  const n = Reflect.has(e, t);
  return (!Tt(t) || !ni.has(t)) && ue(e, "has", t), n;
}
function Or(e) {
  return ue(e, "iterate", w(e) ? "length" : Qe), Reflect.ownKeys(e);
}
const ii = {
  get: br,
  set: Tr,
  deleteProperty: Ar,
  has: Sr,
  ownKeys: Or
}, Ir = {
  get: yr,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, wr = /* @__PURE__ */ ie({}, ii, {
  get: vr,
  set: xr
}), $n = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = L(e), r = L(t);
  n || (t !== r && ue(i, "get", t), ue(i, "get", r));
  const { has: o } = tn(i), l = s ? $n : n ? zn : At;
  if (o.call(i, t))
    return l(e.get(t));
  if (o.call(i, r))
    return l(e.get(r));
  e !== i && e.get(t);
}
function Dt(e, t = !1) {
  const n = this.__v_raw, s = L(n), i = L(e);
  return t || (e !== i && ue(s, "has", e), ue(s, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function Ut(e, t = !1) {
  return e = e.__v_raw, !t && ue(L(e), "iterate", Qe), Reflect.get(e, "size", e);
}
function ps(e) {
  e = L(e);
  const t = L(this);
  return tn(t).has.call(t, e) || (t.add(e), Me(t, "add", e, e)), this;
}
function _s(e, t) {
  t = L(t);
  const n = L(this), { has: s, get: i } = tn(n);
  let r = s.call(n, e);
  r || (e = L(e), r = s.call(n, e));
  const o = i.call(n, e);
  return n.set(e, t), r ? xt(t, o) && Me(n, "set", e, t) : Me(n, "add", e, t), this;
}
function hs(e) {
  const t = L(this), { has: n, get: s } = tn(t);
  let i = n.call(t, e);
  i || (e = L(e), i = n.call(t, e)), s && s.call(t, e);
  const r = t.delete(e);
  return i && Me(t, "delete", e, void 0), r;
}
function gs() {
  const e = L(this), t = e.size !== 0, n = e.clear();
  return t && Me(e, "clear", void 0, void 0), n;
}
function Lt(e, t) {
  return function(s, i) {
    const r = this, o = r.__v_raw, l = L(o), f = t ? $n : e ? zn : At;
    return !e && ue(l, "iterate", Qe), o.forEach((u, p) => s.call(i, f(u), f(p), r));
  };
}
function Ft(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = L(i), o = rt(r), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, u = i[e](...s), p = n ? $n : t ? zn : At;
    return !t && ue(r, "iterate", f ? Tn : Qe), {
      // iterator protocol
      next() {
        const { value: g, done: y } = u.next();
        return y ? { value: g, done: y } : {
          value: l ? [p(g[0]), p(g[1])] : p(g),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ke(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function Rr() {
  const e = {
    get(r) {
      return kt(this, r);
    },
    get size() {
      return Ut(this);
    },
    has: Dt,
    add: ps,
    set: _s,
    delete: hs,
    clear: gs,
    forEach: Lt(!1, !1)
  }, t = {
    get(r) {
      return kt(this, r, !1, !0);
    },
    get size() {
      return Ut(this);
    },
    has: Dt,
    add: ps,
    set: _s,
    delete: hs,
    clear: gs,
    forEach: Lt(!1, !0)
  }, n = {
    get(r) {
      return kt(this, r, !0);
    },
    get size() {
      return Ut(this, !0);
    },
    has(r) {
      return Dt.call(this, r, !0);
    },
    add: ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Lt(!0, !1)
  }, s = {
    get(r) {
      return kt(this, r, !0, !0);
    },
    get size() {
      return Ut(this, !0);
    },
    has(r) {
      return Dt.call(this, r, !0);
    },
    add: ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Lt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Ft(r, !1, !1), n[r] = Ft(r, !0, !1), t[r] = Ft(r, !1, !0), s[r] = Ft(r, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [Mr, Nr, Pr, kr] = /* @__PURE__ */ Rr();
function Bn(e, t) {
  const n = t ? e ? kr : Pr : e ? Nr : Mr;
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(U(n, i) && i in s ? n : s, i, r);
}
const Dr = {
  get: /* @__PURE__ */ Bn(!1, !1)
}, Ur = {
  get: /* @__PURE__ */ Bn(!1, !0)
}, Lr = {
  get: /* @__PURE__ */ Bn(!0, !1)
}, ri = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap();
function Hr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function jr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hr(rr(e));
}
function Wn(e) {
  return ft(e) ? e : Gn(e, !1, ii, Dr, ri);
}
function Vr(e) {
  return Gn(e, !1, wr, Ur, oi);
}
function ci(e) {
  return Gn(e, !0, Ir, Lr, li);
}
function Gn(e, t, n, s, i) {
  if (!$(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = jr(e);
  if (o === 0)
    return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return i.set(e, l), l;
}
function ot(e) {
  return ft(e) ? ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ft(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function fi(e) {
  return ot(e) || ft(e);
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function ai(e) {
  return Bt(e, "__v_skip", !0), e;
}
const At = (e) => $(e) ? Wn(e) : e, zn = (e) => $(e) ? ci(e) : e;
function ui(e) {
  Fe && ye && (e = L(e), ti(e.dep || (e.dep = Vn())));
}
function di(e, t) {
  e = L(e);
  const n = e.dep;
  n && xn(n);
}
function se(e) {
  return !!(e && e.__v_isRef === !0);
}
function An(e) {
  return qr(e, !1);
}
function qr(e, t) {
  return se(e) ? e : new Kr(e, t);
}
class Kr {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : L(t), this._value = n ? t : At(t);
  }
  get value() {
    return ui(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Gt(t) || ft(t);
    t = n ? t : L(t), xt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : At(t), di(this));
  }
}
function $r(e) {
  return se(e) ? e.value : e;
}
const Br = {
  get: (e, t, n) => $r(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return se(i) && !se(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function pi(e) {
  return ot(e) ? e : new Proxy(e, Br);
}
function Wr(e) {
  const t = w(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = zr(e, n);
  return t;
}
class Gr {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return gr(L(this._object), this._key);
  }
}
function zr(e, t, n) {
  const s = e[t];
  return se(s) ? s : new Gr(e, t, n);
}
var _i;
class Xr {
  constructor(t, n, s, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[_i] = !1, this._dirty = !0, this.effect = new qn(t, () => {
      this._dirty || (this._dirty = !0, di(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = s;
  }
  get value() {
    const t = L(this);
    return ui(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
_i = "__v_isReadonly";
function Jr(e, t, n = !1) {
  let s, i;
  const r = N(e);
  return r ? (s = e, i = Ee) : (s = e.get, i = e.set), new Xr(s, i, r || !i, n);
}
function He(e, t, n, s) {
  let i;
  try {
    i = s ? e(...s) : e();
  } catch (r) {
    nn(r, t, n);
  }
  return i;
}
function ge(e, t, n, s) {
  if (N(e)) {
    const r = He(e, t, n, s);
    return r && zs(r) && r.catch((o) => {
      nn(o, t, n);
    }), r;
  }
  const i = [];
  for (let r = 0; r < e.length; r++)
    i.push(ge(e[r], t, n, s));
  return i;
}
function nn(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy, l = n;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, o, l) === !1)
            return;
      }
      r = r.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      He(f, null, 10, [e, o, l]);
      return;
    }
  }
  Zr(e, n, i, s);
}
function Zr(e, t, n, s = !0) {
  console.error(e);
}
let St = !1, Sn = !1;
const oe = [];
let Ie = 0;
const lt = [];
let Re = null, Xe = 0;
const hi = /* @__PURE__ */ Promise.resolve();
let Xn = null;
function Yr(e) {
  const t = Xn || hi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qr(e) {
  let t = Ie + 1, n = oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Ot(oe[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Jn(e) {
  (!oe.length || !oe.includes(e, St && e.allowRecurse ? Ie + 1 : Ie)) && (e.id == null ? oe.push(e) : oe.splice(Qr(e.id), 0, e), gi());
}
function gi() {
  !St && !Sn && (Sn = !0, Xn = hi.then(bi));
}
function eo(e) {
  const t = oe.indexOf(e);
  t > Ie && oe.splice(t, 1);
}
function to(e) {
  w(e) ? lt.push(...e) : (!Re || !Re.includes(e, e.allowRecurse ? Xe + 1 : Xe)) && lt.push(e), gi();
}
function ms(e, t = St ? Ie + 1 : 0) {
  for (; t < oe.length; t++) {
    const n = oe[t];
    n && n.pre && (oe.splice(t, 1), t--, n());
  }
}
function mi(e) {
  if (lt.length) {
    const t = [...new Set(lt)];
    if (lt.length = 0, Re) {
      Re.push(...t);
      return;
    }
    for (Re = t, Re.sort((n, s) => Ot(n) - Ot(s)), Xe = 0; Xe < Re.length; Xe++)
      Re[Xe]();
    Re = null, Xe = 0;
  }
}
const Ot = (e) => e.id == null ? 1 / 0 : e.id, no = (e, t) => {
  const n = Ot(e) - Ot(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function bi(e) {
  Sn = !1, St = !0, oe.sort(no);
  const t = Ee;
  try {
    for (Ie = 0; Ie < oe.length; Ie++) {
      const n = oe[Ie];
      n && n.active !== !1 && He(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    Ie = 0, oe.length = 0, mi(), St = !1, Xn = null, (oe.length || lt.length) && bi();
  }
}
function so(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || G;
  let i = n;
  const r = t.startsWith("update:"), o = r && t.slice(7);
  if (o && o in s) {
    const p = `${o === "modelValue" ? "model" : o}Modifiers`, { number: g, trim: y } = s[p] || G;
    y && (i = n.map((x) => ee(x) ? x.trim() : x)), g && (i = n.map(cr));
  }
  let l, f = s[l = _n(t)] || // also try camelCase event handler (#2249)
  s[l = _n(ct(t))];
  !f && r && (f = s[l = _n(ut(t))]), f && ge(f, e, 6, i);
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ge(u, e, 6, i);
  }
}
function vi(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!N(e)) {
    const f = (u) => {
      const p = vi(u, t, !0);
      p && (l = !0, ie(o, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? ($(e) && s.set(e, null), null) : (w(r) ? r.forEach((f) => o[f] = null) : ie(o, r), $(e) && s.set(e, o), o);
}
function sn(e, t) {
  return !e || !Yt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, ut(t)) || U(e, t));
}
let le = null, rn = null;
function zt(e) {
  const t = le;
  return le = e, rn = e && e.type.__scopeId || null, t;
}
function io(e) {
  rn = e;
}
function ro() {
  rn = null;
}
function vt(e, t = le, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ss(-1);
    const r = zt(t);
    let o;
    try {
      o = e(...i);
    } finally {
      zt(r), s._d && Ss(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function hn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: i, props: r, propsOptions: [o], slots: l, attrs: f, emit: u, render: p, renderCache: g, data: y, setupState: x, ctx: P, inheritAttrs: I } = e;
  let B, F;
  const H = zt(e);
  try {
    if (n.shapeFlag & 4) {
      const V = i || s;
      B = Oe(p.call(V, V, g, r, x, y, P)), F = f;
    } else {
      const V = t;
      B = Oe(V.length > 1 ? V(r, { attrs: f, slots: l, emit: u }) : V(
        r,
        null
        /* we know it doesn't need it */
      )), F = t.props ? f : oo(f);
    }
  } catch (V) {
    Et.length = 0, nn(
      V,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), B = ae(me);
  }
  let R = B;
  if (F && I !== !1) {
    const V = Object.keys(F), { shapeFlag: te } = R;
    V.length && te & 7 && (o && V.some(Fn) && (F = lo(F, o)), R = Ve(R, F));
  }
  return n.dirs && (R = Ve(R), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (R.transition = n.transition), B = R, zt(H), B;
}
const oo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Yt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, lo = (e, t) => {
  const n = {};
  for (const s in e)
    (!Fn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function co(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: f } = t, u = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return s ? bs(s, o, u) : !!o;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        const y = p[g];
        if (o[y] !== s[y] && !sn(u, y))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? bs(s, o, u) : !0 : !!o;
  return !1;
}
function bs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !sn(n, r))
      return !0;
  }
  return !1;
}
function fo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const ao = (e) => e.__isSuspense;
function uo(e, t) {
  t && t.pendingBranch ? w(e) ? t.effects.push(...e) : t.effects.push(e) : to(e);
}
function po(e, t) {
  if (Q) {
    let n = Q.provides;
    const s = Q.parent && Q.parent.provides;
    s === n && (n = Q.provides = Object.create(s)), n[e] = t;
  }
}
function qt(e, t, n = !1) {
  const s = Q || le;
  if (s) {
    const i = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(s.proxy) : t;
  }
}
const Ht = {};
function Kt(e, t, n) {
  return yi(e, t, n);
}
function yi(e, t, { immediate: n, deep: s, flush: i, onTrack: r, onTrigger: o } = G) {
  const l = pr() === (Q == null ? void 0 : Q.scope) ? Q : null;
  let f, u = !1, p = !1;
  if (se(e) ? (f = () => e.value, u = Gt(e)) : ot(e) ? (f = () => e, s = !0) : w(e) ? (p = !0, u = e.some((R) => ot(R) || Gt(R)), f = () => e.map((R) => {
    if (se(R))
      return R.value;
    if (ot(R))
      return Ye(R);
    if (N(R))
      return He(
        R,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : N(e) ? t ? f = () => He(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : f = () => {
    if (!(l && l.isUnmounted))
      return g && g(), ge(e, l, 3, [y]);
  } : f = Ee, t && s) {
    const R = f;
    f = () => Ye(R());
  }
  let g, y = (R) => {
    g = F.onStop = () => {
      He(
        R,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, x;
  if (wt)
    if (y = Ee, t ? n && ge(t, l, 3, [
      f(),
      p ? [] : void 0,
      y
    ]) : f(), i === "sync") {
      const R = ll();
      x = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return Ee;
  let P = p ? new Array(e.length).fill(Ht) : Ht;
  const I = () => {
    if (F.active)
      if (t) {
        const R = F.run();
        (s || u || (p ? R.some((V, te) => xt(V, P[te])) : xt(R, P))) && (g && g(), ge(t, l, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          P === Ht ? void 0 : p && P[0] === Ht ? [] : P,
          y
        ]), P = R);
      } else
        F.run();
  };
  I.allowRecurse = !!t;
  let B;
  i === "sync" ? B = I : i === "post" ? B = () => fe(I, l && l.suspense) : (I.pre = !0, l && (I.id = l.uid), B = () => Jn(I));
  const F = new qn(f, B);
  t ? n ? I() : P = F.run() : i === "post" ? fe(F.run.bind(F), l && l.suspense) : F.run();
  const H = () => {
    F.stop(), l && l.scope && Hn(l.scope.effects, F);
  };
  return x && x.push(H), H;
}
function _o(e, t, n) {
  const s = this.proxy, i = ee(e) ? e.includes(".") ? Ci(s, e) : () => s[e] : e.bind(s, s);
  let r;
  N(t) ? r = t : (r = t.handler, n = t);
  const o = Q;
  at(this);
  const l = yi(i, r.bind(s), n);
  return o ? at(o) : tt(), l;
}
function Ci(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
function Ye(e, t) {
  if (!$(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), se(e))
    Ye(e.value, t);
  else if (w(e))
    for (let n = 0; n < e.length; n++)
      Ye(e[n], t);
  else if (Qt(e) || rt(e))
    e.forEach((n) => {
      Ye(n, t);
    });
  else if (Js(e))
    for (const n in e)
      Ye(e[n], t);
  return e;
}
function ho() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return cn(() => {
    e.isMounted = !0;
  }), Si(() => {
    e.isUnmounting = !0;
  }), e;
}
const _e = [Function, Array], go = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: _e,
    onEnter: _e,
    onAfterEnter: _e,
    onEnterCancelled: _e,
    // leave
    onBeforeLeave: _e,
    onLeave: _e,
    onAfterLeave: _e,
    onLeaveCancelled: _e,
    // appear
    onBeforeAppear: _e,
    onAppear: _e,
    onAfterAppear: _e,
    onAppearCancelled: _e
  },
  setup(e, { slots: t }) {
    const n = ji(), s = ho();
    let i;
    return () => {
      const r = t.default && xi(t.default(), !0);
      if (!r || !r.length)
        return;
      let o = r[0];
      if (r.length > 1) {
        for (const I of r)
          if (I.type !== me) {
            o = I;
            break;
          }
      }
      const l = L(e), { mode: f } = l;
      if (s.isLeaving)
        return gn(o);
      const u = vs(o);
      if (!u)
        return gn(o);
      const p = On(u, l, s, n);
      In(u, p);
      const g = n.subTree, y = g && vs(g);
      let x = !1;
      const { getTransitionKey: P } = u.type;
      if (P) {
        const I = P();
        i === void 0 ? i = I : I !== i && (i = I, x = !0);
      }
      if (y && y.type !== me && (!Je(u, y) || x)) {
        const I = On(y, l, s, n);
        if (In(y, I), f === "out-in")
          return s.isLeaving = !0, I.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, gn(o);
        f === "in-out" && u.type !== me && (I.delayLeave = (B, F, H) => {
          const R = Ti(s, y);
          R[String(y.key)] = y, B._leaveCb = () => {
            F(), B._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = H;
        });
      }
      return o;
    };
  }
}, Ei = go;
function Ti(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function On(e, t, n, s) {
  const { appear: i, mode: r, persisted: o = !1, onBeforeEnter: l, onEnter: f, onAfterEnter: u, onEnterCancelled: p, onBeforeLeave: g, onLeave: y, onAfterLeave: x, onLeaveCancelled: P, onBeforeAppear: I, onAppear: B, onAfterAppear: F, onAppearCancelled: H } = t, R = String(e.key), V = Ti(n, e), te = (k, X) => {
    k && ge(k, s, 9, X);
  }, Pe = (k, X) => {
    const W = X[1];
    te(k, X), w(k) ? k.every((re) => re.length <= 1) && W() : k.length <= 1 && W();
  }, Te = {
    mode: r,
    persisted: o,
    beforeEnter(k) {
      let X = l;
      if (!n.isMounted)
        if (i)
          X = I || l;
        else
          return;
      k._leaveCb && k._leaveCb(
        !0
        /* cancelled */
      );
      const W = V[R];
      W && Je(e, W) && W.el._leaveCb && W.el._leaveCb(), te(X, [k]);
    },
    enter(k) {
      let X = f, W = u, re = p;
      if (!n.isMounted)
        if (i)
          X = B || f, W = F || u, re = H || p;
        else
          return;
      let A = !1;
      const z = k._enterCb = (de) => {
        A || (A = !0, de ? te(re, [k]) : te(W, [k]), Te.delayedLeave && Te.delayedLeave(), k._enterCb = void 0);
      };
      X ? Pe(X, [k, z]) : z();
    },
    leave(k, X) {
      const W = String(e.key);
      if (k._enterCb && k._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return X();
      te(g, [k]);
      let re = !1;
      const A = k._leaveCb = (z) => {
        re || (re = !0, X(), z ? te(P, [k]) : te(x, [k]), k._leaveCb = void 0, V[W] === e && delete V[W]);
      };
      V[W] = e, y ? Pe(y, [k, A]) : A();
    },
    clone(k) {
      return On(k, t, n, s);
    }
  };
  return Te;
}
function gn(e) {
  if (on(e))
    return e = Ve(e), e.children = null, e;
}
function vs(e) {
  return on(e) ? e.children ? e.children[0] : void 0 : e;
}
function In(e, t) {
  e.shapeFlag & 6 && e.component ? In(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function xi(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === he ? (o.patchFlag & 128 && i++, s = s.concat(xi(o.children, t, l))) : (t || o.type !== me) && s.push(l != null ? Ve(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
const yt = (e) => !!e.type.__asyncLoader, on = (e) => e.type.__isKeepAlive;
function mo(e, t) {
  Ai(e, "a", t);
}
function bo(e, t) {
  Ai(e, "da", t);
}
function Ai(e, t, n = Q) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ln(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      on(i.parent.vnode) && vo(s, t, n, i), i = i.parent;
  }
}
function vo(e, t, n, s) {
  const i = ln(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Oi(() => {
    Hn(s[t], i);
  }, n);
}
function ln(e, t, n = Q, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      dt(), at(n);
      const l = ge(t, n, e, o);
      return tt(), pt(), l;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Ne = (e) => (t, n = Q) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!wt || e === "sp") && ln(e, (...s) => t(...s), n)
), yo = Ne(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), cn = Ne(
  "m"
  /* LifecycleHooks.MOUNTED */
), Co = Ne(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Eo = Ne(
  "u"
  /* LifecycleHooks.UPDATED */
), Si = Ne(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Oi = Ne(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), To = Ne(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), xo = Ne(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Ao = Ne(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function So(e, t = Q) {
  ln("ec", e, t);
}
function Oo(e, t) {
  const n = le;
  if (n === null)
    return e;
  const s = un(n) || n.proxy, i = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, l, f, u = G] = t[r];
    o && (N(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ye(l), i.push({
      dir: o,
      instance: s,
      value: l,
      oldValue: void 0,
      arg: f,
      modifiers: u
    }));
  }
  return e;
}
function $e(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let f = l.dir[s];
    f && (dt(), ge(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), pt());
  }
}
const Io = Symbol();
function gt(e, t, n = {}, s, i) {
  if (le.isCE || le.parent && yt(le.parent) && le.parent.isCE)
    return t !== "default" && (n.name = t), ae("slot", n, s && s());
  let r = e[t];
  r && r._c && (r._d = !1), et();
  const o = r && Ii(r(n)), l = Mt(
    he,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${t}`
    },
    o || (s ? s() : []),
    o && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Ii(e) {
  return e.some((t) => Jt(t) ? !(t.type === me || t.type === he && !Ii(t.children)) : !0) ? e : null;
}
const wn = (e) => e ? Vi(e) ? un(e) || e.proxy : wn(e.parent) : null, Ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => wn(e.parent),
    $root: (e) => wn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Zn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Jn(e.update)),
    $nextTick: (e) => e.n || (e.n = Yr.bind(e.proxy)),
    $watch: (e) => _o.bind(e)
  })
), mn = (e, t) => e !== G && !e.__isScriptSetup && U(e, t), wo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: f } = e;
    let u;
    if (t[0] !== "$") {
      const x = o[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (mn(s, t))
          return o[t] = 1, s[t];
        if (i !== G && U(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && U(u, t)
        )
          return o[t] = 3, r[t];
        if (n !== G && U(n, t))
          return o[t] = 4, n[t];
        Rn && (o[t] = 0);
      }
    }
    const p = Ct[t];
    let g, y;
    if (p)
      return t === "$attrs" && ue(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (g = l.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== G && U(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      y = f.config.globalProperties, U(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return mn(i, t) ? (i[t] = n, !0) : s !== G && U(s, t) ? (s[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r } }, o) {
    let l;
    return !!n[o] || e !== G && U(e, o) || mn(t, o) || (l = r[0]) && U(l, o) || U(s, o) || U(Ct, o) || U(i.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Rn = !0;
function Ro(e) {
  const t = Zn(e), n = e.proxy, s = e.ctx;
  Rn = !1, t.beforeCreate && ys(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: f,
    inject: u,
    // lifecycle
    created: p,
    beforeMount: g,
    mounted: y,
    beforeUpdate: x,
    updated: P,
    activated: I,
    deactivated: B,
    beforeDestroy: F,
    beforeUnmount: H,
    destroyed: R,
    unmounted: V,
    render: te,
    renderTracked: Pe,
    renderTriggered: Te,
    errorCaptured: k,
    serverPrefetch: X,
    // public API
    expose: W,
    inheritAttrs: re,
    // assets
    components: A,
    directives: z,
    filters: de
  } = t;
  if (u && Mo(u, s, null, e.appContext.config.unwrapInjectedRef), o)
    for (const J in o) {
      const q = o[J];
      N(q) && (s[J] = q.bind(n));
    }
  if (i) {
    const J = i.call(n, n);
    $(J) && (e.data = Wn(J));
  }
  if (Rn = !0, r)
    for (const J in r) {
      const q = r[J], qe = N(q) ? q.bind(n, n) : N(q.get) ? q.get.bind(n, n) : Ee, Nt = !N(q) && N(q.set) ? q.set.bind(n) : Ee, Ke = il({
        get: qe,
        set: Nt
      });
      Object.defineProperty(s, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (xe) => Ke.value = xe
      });
    }
  if (l)
    for (const J in l)
      wi(l[J], s, n, J);
  if (f) {
    const J = N(f) ? f.call(n) : f;
    Reflect.ownKeys(J).forEach((q) => {
      po(q, J[q]);
    });
  }
  p && ys(
    p,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ne(J, q) {
    w(q) ? q.forEach((qe) => J(qe.bind(n))) : q && J(q.bind(n));
  }
  if (ne(yo, g), ne(cn, y), ne(Co, x), ne(Eo, P), ne(mo, I), ne(bo, B), ne(So, k), ne(Ao, Pe), ne(xo, Te), ne(Si, H), ne(Oi, V), ne(To, X), w(W))
    if (W.length) {
      const J = e.exposed || (e.exposed = {});
      W.forEach((q) => {
        Object.defineProperty(J, q, {
          get: () => n[q],
          set: (qe) => n[q] = qe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  te && e.render === Ee && (e.render = te), re != null && (e.inheritAttrs = re), A && (e.components = A), z && (e.directives = z);
}
function Mo(e, t, n = Ee, s = !1) {
  w(e) && (e = Mn(e));
  for (const i in e) {
    const r = e[i];
    let o;
    $(r) ? "default" in r ? o = qt(
      r.from || i,
      r.default,
      !0
      /* treat default function as factory */
    ) : o = qt(r.from || i) : o = qt(r), se(o) && s ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (l) => o.value = l
    }) : t[i] = o;
  }
}
function ys(e, t, n) {
  ge(w(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function wi(e, t, n, s) {
  const i = s.includes(".") ? Ci(n, s) : () => n[s];
  if (ee(e)) {
    const r = t[e];
    N(r) && Kt(i, r);
  } else if (N(e))
    Kt(i, e.bind(n));
  else if ($(e))
    if (w(e))
      e.forEach((r) => wi(r, t, n, s));
    else {
      const r = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(r) && Kt(i, r, e);
    }
}
function Zn(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: i, optionsCache: r, config: { optionMergeStrategies: o } } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !i.length && !n && !s ? f = t : (f = {}, i.length && i.forEach((u) => Xt(f, u, o, !0)), Xt(f, t, o)), $(t) && r.set(t, f), f;
}
function Xt(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Xt(e, r, n, !0), i && i.forEach((o) => Xt(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = No[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const No = {
  data: Cs,
  props: ze,
  emits: ze,
  // objects
  methods: ze,
  computed: ze,
  // lifecycle
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  // assets
  components: ze,
  directives: ze,
  // watch
  watch: ko,
  // provide / inject
  provide: Cs,
  inject: Po
};
function Cs(e, t) {
  return t ? e ? function() {
    return ie(N(e) ? e.call(this, this) : e, N(t) ? t.call(this, this) : t);
  } : t : e;
}
function Po(e, t) {
  return ze(Mn(e), Mn(t));
}
function Mn(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ze(e, t) {
  return e ? ie(ie(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ko(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ce(e[s], t[s]);
  return n;
}
function Do(e, t, n, s = !1) {
  const i = {}, r = {};
  Bt(r, an, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ri(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : Vr(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Uo(e, t, n, s) {
  const { props: i, attrs: r, vnode: { patchFlag: o } } = e, l = L(i), [f] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const p = e.vnode.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        let y = p[g];
        if (sn(e.emitsOptions, y))
          continue;
        const x = t[y];
        if (f)
          if (U(r, y))
            x !== r[y] && (r[y] = x, u = !0);
          else {
            const P = ct(y);
            i[P] = Nn(
              f,
              l,
              P,
              x,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          x !== r[y] && (r[y] = x, u = !0);
      }
    }
  } else {
    Ri(e, t, i, r) && (u = !0);
    let p;
    for (const g in l)
      (!t || // for camelCase
      !U(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ut(g)) === g || !U(t, p))) && (f ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[g] = Nn(
        f,
        l,
        g,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete i[g]);
    if (r !== l)
      for (const g in r)
        (!t || !U(t, g)) && (delete r[g], u = !0);
  }
  u && Me(e, "set", "$attrs");
}
function Ri(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (jt(f))
        continue;
      const u = t[f];
      let p;
      i && U(i, p = ct(f)) ? !r || !r.includes(p) ? n[p] = u : (l || (l = {}))[p] = u : sn(e.emitsOptions, f) || (!(f in s) || u !== s[f]) && (s[f] = u, o = !0);
    }
  if (r) {
    const f = L(n), u = l || G;
    for (let p = 0; p < r.length; p++) {
      const g = r[p];
      n[g] = Nn(i, f, g, u[g], e, !U(u, g));
    }
  }
  return o;
}
function Nn(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = U(o, "default");
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && N(f)) {
        const { propsDefaults: u } = i;
        n in u ? s = u[n] : (at(i), s = u[n] = f.call(null, t), tt());
      } else
        s = f;
    }
    o[
      0
      /* BooleanFlags.shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === ut(n)) && (s = !0));
  }
  return s;
}
function Mi(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let f = !1;
  if (!N(e)) {
    const p = (g) => {
      f = !0;
      const [y, x] = Mi(g, t, !0);
      ie(o, y), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !f)
    return $(e) && s.set(e, it), it;
  if (w(r))
    for (let p = 0; p < r.length; p++) {
      const g = ct(r[p]);
      Es(g) && (o[g] = G);
    }
  else if (r)
    for (const p in r) {
      const g = ct(p);
      if (Es(g)) {
        const y = r[p], x = o[g] = w(y) || N(y) ? { type: y } : Object.assign({}, y);
        if (x) {
          const P = As(Boolean, x.type), I = As(String, x.type);
          x[
            0
            /* BooleanFlags.shouldCast */
          ] = P > -1, x[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = I < 0 || P < I, (P > -1 || U(x, "default")) && l.push(g);
        }
      }
    }
  const u = [o, l];
  return $(e) && s.set(e, u), u;
}
function Es(e) {
  return e[0] !== "$";
}
function Ts(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function xs(e, t) {
  return Ts(e) === Ts(t);
}
function As(e, t) {
  return w(t) ? t.findIndex((n) => xs(n, e)) : N(t) && xs(t, e) ? 0 : -1;
}
const Ni = (e) => e[0] === "_" || e === "$stable", Yn = (e) => w(e) ? e.map(Oe) : [Oe(e)], Lo = (e, t, n) => {
  if (t._n)
    return t;
  const s = vt((...i) => Yn(t(...i)), n);
  return s._c = !1, s;
}, Pi = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Ni(i))
      continue;
    const r = e[i];
    if (N(r))
      t[i] = Lo(i, r, s);
    else if (r != null) {
      const o = Yn(r);
      t[i] = () => o;
    }
  }
}, ki = (e, t) => {
  const n = Yn(t);
  e.slots.default = () => n;
}, Fo = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = L(t), Bt(t, "_", n)) : Pi(t, e.slots = {});
  } else
    e.slots = {}, t && ki(e, t);
  Bt(e.slots, an, 1);
}, Ho = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = G;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : (ie(i, t), !n && l === 1 && delete i._) : (r = !t.$stable, Pi(t, i)), o = t;
  } else
    t && (ki(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Ni(l) && !(l in o) && delete i[l];
};
function Di() {
  return {
    app: null,
    config: {
      isNativeTag: nr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let jo = 0;
function Vo(e, t) {
  return function(s, i = null) {
    N(s) || (s = Object.assign({}, s)), i != null && !$(i) && (i = null);
    const r = Di(), o = /* @__PURE__ */ new Set();
    let l = !1;
    const f = r.app = {
      _uid: jo++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: cl,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return o.has(u) || (u && N(u.install) ? (o.add(u), u.install(f, ...p)) : N(u) && (o.add(u), u(f, ...p))), f;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), f;
      },
      component(u, p) {
        return p ? (r.components[u] = p, f) : r.components[u];
      },
      directive(u, p) {
        return p ? (r.directives[u] = p, f) : r.directives[u];
      },
      mount(u, p, g) {
        if (!l) {
          const y = ae(s, i);
          return y.appContext = r, p && t ? t(y, u) : e(y, u, g), l = !0, f._container = u, u.__vue_app__ = f, un(y.component) || y.component.proxy;
        }
      },
      unmount() {
        l && (e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, p) {
        return r.provides[u] = p, f;
      }
    };
    return f;
  };
}
function Pn(e, t, n, s, i = !1) {
  if (w(e)) {
    e.forEach((y, x) => Pn(y, t && (w(t) ? t[x] : t), n, s, i));
    return;
  }
  if (yt(s) && !i)
    return;
  const r = s.shapeFlag & 4 ? un(s.component) || s.component.proxy : s.el, o = i ? null : r, { i: l, r: f } = e, u = t && t.r, p = l.refs === G ? l.refs = {} : l.refs, g = l.setupState;
  if (u != null && u !== f && (ee(u) ? (p[u] = null, U(g, u) && (g[u] = null)) : se(u) && (u.value = null)), N(f))
    He(f, l, 12, [o, p]);
  else {
    const y = ee(f), x = se(f);
    if (y || x) {
      const P = () => {
        if (e.f) {
          const I = y ? U(g, f) ? g[f] : p[f] : f.value;
          i ? w(I) && Hn(I, r) : w(I) ? I.includes(r) || I.push(r) : y ? (p[f] = [r], U(g, f) && (g[f] = p[f])) : (f.value = [r], e.k && (p[e.k] = f.value));
        } else
          y ? (p[f] = o, U(g, f) && (g[f] = o)) : x && (f.value = o, e.k && (p[e.k] = o));
      };
      o ? (P.id = -1, fe(P, n)) : P();
    }
  }
}
const fe = uo;
function qo(e) {
  return Ko(e);
}
function Ko(e, t) {
  const n = ar();
  n.__VUE__ = !0;
  const { insert: s, remove: i, patchProp: r, createElement: o, createText: l, createComment: f, setText: u, setElementText: p, parentNode: g, nextSibling: y, setScopeId: x = Ee, insertStaticContent: P } = e, I = (c, a, d, h = null, _ = null, v = null, E = !1, b = null, C = !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !Je(c, a) && (h = Pt(c), xe(c, _, v, !0), c = null), a.patchFlag === -2 && (C = !1, a.dynamicChildren = null);
    const { type: m, ref: S, shapeFlag: T } = a;
    switch (m) {
      case fn:
        B(c, a, d, h);
        break;
      case me:
        F(c, a, d, h);
        break;
      case bn:
        c == null && H(a, d, h, E);
        break;
      case he:
        A(c, a, d, h, _, v, E, b, C);
        break;
      default:
        T & 1 ? te(c, a, d, h, _, v, E, b, C) : T & 6 ? z(c, a, d, h, _, v, E, b, C) : (T & 64 || T & 128) && m.process(c, a, d, h, _, v, E, b, C, nt);
    }
    S != null && _ && Pn(S, c && c.ref, v, a || c, !a);
  }, B = (c, a, d, h) => {
    if (c == null)
      s(a.el = l(a.children), d, h);
    else {
      const _ = a.el = c.el;
      a.children !== c.children && u(_, a.children);
    }
  }, F = (c, a, d, h) => {
    c == null ? s(a.el = f(a.children || ""), d, h) : a.el = c.el;
  }, H = (c, a, d, h) => {
    [c.el, c.anchor] = P(c.children, a, d, h, c.el, c.anchor);
  }, R = ({ el: c, anchor: a }, d, h) => {
    let _;
    for (; c && c !== a; )
      _ = y(c), s(c, d, h), c = _;
    s(a, d, h);
  }, V = ({ el: c, anchor: a }) => {
    let d;
    for (; c && c !== a; )
      d = y(c), i(c), c = d;
    i(a);
  }, te = (c, a, d, h, _, v, E, b, C) => {
    E = E || a.type === "svg", c == null ? Pe(a, d, h, _, v, E, b, C) : X(c, a, _, v, E, b, C);
  }, Pe = (c, a, d, h, _, v, E, b) => {
    let C, m;
    const { type: S, props: T, shapeFlag: O, transition: M, dirs: D } = c;
    if (C = c.el = o(c.type, v, T && T.is, T), O & 8 ? p(C, c.children) : O & 16 && k(c.children, C, null, h, _, v && S !== "foreignObject", E, b), D && $e(c, null, h, "created"), Te(C, c, c.scopeId, E, h), T) {
      for (const j in T)
        j !== "value" && !jt(j) && r(C, j, null, T[j], v, c.children, h, _, we);
      "value" in T && r(C, "value", null, T.value), (m = T.onVnodeBeforeMount) && Se(m, h, c);
    }
    D && $e(c, null, h, "beforeMount");
    const K = (!_ || _ && !_.pendingBranch) && M && !M.persisted;
    K && M.beforeEnter(C), s(C, a, d), ((m = T && T.onVnodeMounted) || K || D) && fe(() => {
      m && Se(m, h, c), K && M.enter(C), D && $e(c, null, h, "mounted");
    }, _);
  }, Te = (c, a, d, h, _) => {
    if (d && x(c, d), h)
      for (let v = 0; v < h.length; v++)
        x(c, h[v]);
    if (_) {
      let v = _.subTree;
      if (a === v) {
        const E = _.vnode;
        Te(c, E, E.scopeId, E.slotScopeIds, _.parent);
      }
    }
  }, k = (c, a, d, h, _, v, E, b, C = 0) => {
    for (let m = C; m < c.length; m++) {
      const S = c[m] = b ? Le(c[m]) : Oe(c[m]);
      I(null, S, a, d, h, _, v, E, b);
    }
  }, X = (c, a, d, h, _, v, E) => {
    const b = a.el = c.el;
    let { patchFlag: C, dynamicChildren: m, dirs: S } = a;
    C |= c.patchFlag & 16;
    const T = c.props || G, O = a.props || G;
    let M;
    d && Be(d, !1), (M = O.onVnodeBeforeUpdate) && Se(M, d, a, c), S && $e(a, c, d, "beforeUpdate"), d && Be(d, !0);
    const D = _ && a.type !== "foreignObject";
    if (m ? W(c.dynamicChildren, m, b, d, h, D, v) : E || q(c, a, b, null, d, h, D, v, !1), C > 0) {
      if (C & 16)
        re(b, a, T, O, d, h, _);
      else if (C & 2 && T.class !== O.class && r(b, "class", null, O.class, _), C & 4 && r(b, "style", T.style, O.style, _), C & 8) {
        const K = a.dynamicProps;
        for (let j = 0; j < K.length; j++) {
          const Y = K[j], be = T[Y], st = O[Y];
          (st !== be || Y === "value") && r(b, Y, be, st, _, c.children, d, h, we);
        }
      }
      C & 1 && c.children !== a.children && p(b, a.children);
    } else
      !E && m == null && re(b, a, T, O, d, h, _);
    ((M = O.onVnodeUpdated) || S) && fe(() => {
      M && Se(M, d, a, c), S && $e(a, c, d, "updated");
    }, h);
  }, W = (c, a, d, h, _, v, E) => {
    for (let b = 0; b < a.length; b++) {
      const C = c[b], m = a[b], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Je(C, m) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? g(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      I(C, m, S, null, h, _, v, E, !0);
    }
  }, re = (c, a, d, h, _, v, E) => {
    if (d !== h) {
      if (d !== G)
        for (const b in d)
          !jt(b) && !(b in h) && r(c, b, d[b], null, E, a.children, _, v, we);
      for (const b in h) {
        if (jt(b))
          continue;
        const C = h[b], m = d[b];
        C !== m && b !== "value" && r(c, b, m, C, E, a.children, _, v, we);
      }
      "value" in h && r(c, "value", d.value, h.value);
    }
  }, A = (c, a, d, h, _, v, E, b, C) => {
    const m = a.el = c ? c.el : l(""), S = a.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: O, slotScopeIds: M } = a;
    M && (b = b ? b.concat(M) : M), c == null ? (s(m, d, h), s(S, d, h), k(a.children, d, S, _, v, E, b, C)) : T > 0 && T & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (W(c.dynamicChildren, O, d, _, v, E, b), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || _ && a === _.subTree) && Ui(
      c,
      a,
      !0
      /* shallow */
    )) : q(c, a, d, S, _, v, E, b, C);
  }, z = (c, a, d, h, _, v, E, b, C) => {
    a.slotScopeIds = b, c == null ? a.shapeFlag & 512 ? _.ctx.activate(a, d, h, E, C) : de(a, d, h, _, v, E, C) : _t(c, a, C);
  }, de = (c, a, d, h, _, v, E) => {
    const b = c.component = Yo(c, h, _);
    if (on(c) && (b.ctx.renderer = nt), Qo(b), b.asyncDep) {
      if (_ && _.registerDep(b, ne), !c.el) {
        const C = b.subTree = ae(me);
        F(null, C, a, d);
      }
      return;
    }
    ne(b, c, a, d, _, v, E);
  }, _t = (c, a, d) => {
    const h = a.component = c.component;
    if (co(c, a, d))
      if (h.asyncDep && !h.asyncResolved) {
        J(h, a, d);
        return;
      } else
        h.next = a, eo(h.update), h.update();
    else
      a.el = c.el, h.vnode = a;
  }, ne = (c, a, d, h, _, v, E) => {
    const b = () => {
      if (c.isMounted) {
        let { next: S, bu: T, u: O, parent: M, vnode: D } = c, K = S, j;
        Be(c, !1), S ? (S.el = D.el, J(c, S, E)) : S = D, T && Vt(T), (j = S.props && S.props.onVnodeBeforeUpdate) && Se(j, M, S, D), Be(c, !0);
        const Y = hn(c), be = c.subTree;
        c.subTree = Y, I(
          be,
          Y,
          // parent may have changed if it's in a teleport
          g(be.el),
          // anchor may have changed if it's in a fragment
          Pt(be),
          c,
          _,
          v
        ), S.el = Y.el, K === null && fo(c, Y.el), O && fe(O, _), (j = S.props && S.props.onVnodeUpdated) && fe(() => Se(j, M, S, D), _);
      } else {
        let S;
        const { el: T, props: O } = a, { bm: M, m: D, parent: K } = c, j = yt(a);
        if (Be(c, !1), M && Vt(M), !j && (S = O && O.onVnodeBeforeMount) && Se(S, K, a), Be(c, !0), T && pn) {
          const Y = () => {
            c.subTree = hn(c), pn(T, c.subTree, c, _, null);
          };
          j ? a.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && Y()
          ) : Y();
        } else {
          const Y = c.subTree = hn(c);
          I(null, Y, d, h, c, _, v), a.el = Y.el;
        }
        if (D && fe(D, _), !j && (S = O && O.onVnodeMounted)) {
          const Y = a;
          fe(() => Se(S, K, Y), _);
        }
        (a.shapeFlag & 256 || K && yt(K.vnode) && K.vnode.shapeFlag & 256) && c.a && fe(c.a, _), c.isMounted = !0, a = d = h = null;
      }
    }, C = c.effect = new qn(
      b,
      () => Jn(m),
      c.scope
      // track it in component's effect scope
    ), m = c.update = () => C.run();
    m.id = c.uid, Be(c, !0), m();
  }, J = (c, a, d) => {
    a.component = c;
    const h = c.vnode.props;
    c.vnode = a, c.next = null, Uo(c, a.props, h, d), Ho(c, a.children, d), dt(), ms(), pt();
  }, q = (c, a, d, h, _, v, E, b, C = !1) => {
    const m = c && c.children, S = c ? c.shapeFlag : 0, T = a.children, { patchFlag: O, shapeFlag: M } = a;
    if (O > 0) {
      if (O & 128) {
        Nt(m, T, d, h, _, v, E, b, C);
        return;
      } else if (O & 256) {
        qe(m, T, d, h, _, v, E, b, C);
        return;
      }
    }
    M & 8 ? (S & 16 && we(m, _, v), T !== m && p(d, T)) : S & 16 ? M & 16 ? Nt(m, T, d, h, _, v, E, b, C) : we(m, _, v, !0) : (S & 8 && p(d, ""), M & 16 && k(T, d, h, _, v, E, b, C));
  }, qe = (c, a, d, h, _, v, E, b, C) => {
    c = c || it, a = a || it;
    const m = c.length, S = a.length, T = Math.min(m, S);
    let O;
    for (O = 0; O < T; O++) {
      const M = a[O] = C ? Le(a[O]) : Oe(a[O]);
      I(c[O], M, d, null, _, v, E, b, C);
    }
    m > S ? we(c, _, v, !0, !1, T) : k(a, d, h, _, v, E, b, C, T);
  }, Nt = (c, a, d, h, _, v, E, b, C) => {
    let m = 0;
    const S = a.length;
    let T = c.length - 1, O = S - 1;
    for (; m <= T && m <= O; ) {
      const M = c[m], D = a[m] = C ? Le(a[m]) : Oe(a[m]);
      if (Je(M, D))
        I(M, D, d, null, _, v, E, b, C);
      else
        break;
      m++;
    }
    for (; m <= T && m <= O; ) {
      const M = c[T], D = a[O] = C ? Le(a[O]) : Oe(a[O]);
      if (Je(M, D))
        I(M, D, d, null, _, v, E, b, C);
      else
        break;
      T--, O--;
    }
    if (m > T) {
      if (m <= O) {
        const M = O + 1, D = M < S ? a[M].el : h;
        for (; m <= O; )
          I(null, a[m] = C ? Le(a[m]) : Oe(a[m]), d, D, _, v, E, b, C), m++;
      }
    } else if (m > O)
      for (; m <= T; )
        xe(c[m], _, v, !0), m++;
    else {
      const M = m, D = m, K = /* @__PURE__ */ new Map();
      for (m = D; m <= O; m++) {
        const pe = a[m] = C ? Le(a[m]) : Oe(a[m]);
        pe.key != null && K.set(pe.key, m);
      }
      let j, Y = 0;
      const be = O - D + 1;
      let st = !1, is = 0;
      const ht = new Array(be);
      for (m = 0; m < be; m++)
        ht[m] = 0;
      for (m = M; m <= T; m++) {
        const pe = c[m];
        if (Y >= be) {
          xe(pe, _, v, !0);
          continue;
        }
        let Ae;
        if (pe.key != null)
          Ae = K.get(pe.key);
        else
          for (j = D; j <= O; j++)
            if (ht[j - D] === 0 && Je(pe, a[j])) {
              Ae = j;
              break;
            }
        Ae === void 0 ? xe(pe, _, v, !0) : (ht[Ae - D] = m + 1, Ae >= is ? is = Ae : st = !0, I(pe, a[Ae], d, null, _, v, E, b, C), Y++);
      }
      const rs = st ? $o(ht) : it;
      for (j = rs.length - 1, m = be - 1; m >= 0; m--) {
        const pe = D + m, Ae = a[pe], os = pe + 1 < S ? a[pe + 1].el : h;
        ht[m] === 0 ? I(null, Ae, d, os, _, v, E, b, C) : st && (j < 0 || m !== rs[j] ? Ke(
          Ae,
          d,
          os,
          2
          /* MoveType.REORDER */
        ) : j--);
      }
    }
  }, Ke = (c, a, d, h, _ = null) => {
    const { el: v, type: E, transition: b, children: C, shapeFlag: m } = c;
    if (m & 6) {
      Ke(c.component.subTree, a, d, h);
      return;
    }
    if (m & 128) {
      c.suspense.move(a, d, h);
      return;
    }
    if (m & 64) {
      E.move(c, a, d, nt);
      return;
    }
    if (E === he) {
      s(v, a, d);
      for (let T = 0; T < C.length; T++)
        Ke(C[T], a, d, h);
      s(c.anchor, a, d);
      return;
    }
    if (E === bn) {
      R(c, a, d);
      return;
    }
    if (h !== 2 && m & 1 && b)
      if (h === 0)
        b.beforeEnter(v), s(v, a, d), fe(() => b.enter(v), _);
      else {
        const { leave: T, delayLeave: O, afterLeave: M } = b, D = () => s(v, a, d), K = () => {
          T(v, () => {
            D(), M && M();
          });
        };
        O ? O(v, D, K) : K();
      }
    else
      s(v, a, d);
  }, xe = (c, a, d, h = !1, _ = !1) => {
    const { type: v, props: E, ref: b, children: C, dynamicChildren: m, shapeFlag: S, patchFlag: T, dirs: O } = c;
    if (b != null && Pn(b, null, d, c, !0), S & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const M = S & 1 && O, D = !yt(c);
    let K;
    if (D && (K = E && E.onVnodeBeforeUnmount) && Se(K, a, c), S & 6)
      zi(c.component, d, h);
    else {
      if (S & 128) {
        c.suspense.unmount(d, h);
        return;
      }
      M && $e(c, null, a, "beforeUnmount"), S & 64 ? c.type.remove(c, a, d, _, nt, h) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== he || T > 0 && T & 64) ? we(m, a, d, !1, !0) : (v === he && T & 384 || !_ && S & 16) && we(C, a, d), h && ns(c);
    }
    (D && (K = E && E.onVnodeUnmounted) || M) && fe(() => {
      K && Se(K, a, c), M && $e(c, null, a, "unmounted");
    }, d);
  }, ns = (c) => {
    const { type: a, el: d, anchor: h, transition: _ } = c;
    if (a === he) {
      Gi(d, h);
      return;
    }
    if (a === bn) {
      V(c);
      return;
    }
    const v = () => {
      i(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: b } = _, C = () => E(d, v);
      b ? b(c.el, v, C) : C();
    } else
      v();
  }, Gi = (c, a) => {
    let d;
    for (; c !== a; )
      d = y(c), i(c), c = d;
    i(a);
  }, zi = (c, a, d) => {
    const { bum: h, scope: _, update: v, subTree: E, um: b } = c;
    h && Vt(h), _.stop(), v && (v.active = !1, xe(E, c, a, d)), b && fe(b, a), fe(() => {
      c.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve());
  }, we = (c, a, d, h = !1, _ = !1, v = 0) => {
    for (let E = v; E < c.length; E++)
      xe(c[E], a, d, h, _);
  }, Pt = (c) => c.shapeFlag & 6 ? Pt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : y(c.anchor || c.el), ss = (c, a, d) => {
    c == null ? a._vnode && xe(a._vnode, null, null, !0) : I(a._vnode || null, c, a, null, null, null, d), ms(), mi(), a._vnode = c;
  }, nt = {
    p: I,
    um: xe,
    m: Ke,
    r: ns,
    mt: de,
    mc: k,
    pc: q,
    pbc: W,
    n: Pt,
    o: e
  };
  let dn, pn;
  return t && ([dn, pn] = t(nt)), {
    render: ss,
    hydrate: dn,
    createApp: Vo(ss, dn)
  };
}
function Be({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ui(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (w(s) && w(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Le(i[r]), l.el = o.el), n || Ui(o, l)), l.type === fn && (l.el = o.el);
    }
}
function $o(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const u = e[s];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < u ? r = l + 1 : o = l;
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
const Bo = (e) => e.__isTeleport, he = Symbol(void 0), fn = Symbol(void 0), me = Symbol(void 0), bn = Symbol(void 0), Et = [];
let Ce = null;
function et(e = !1) {
  Et.push(Ce = e ? null : []);
}
function Wo() {
  Et.pop(), Ce = Et[Et.length - 1] || null;
}
let It = 1;
function Ss(e) {
  It += e;
}
function Li(e) {
  return e.dynamicChildren = It > 0 ? Ce || it : null, Wo(), It > 0 && Ce && Ce.push(e), e;
}
function Os(e, t, n, s, i, r) {
  return Li(Z(
    e,
    t,
    n,
    s,
    i,
    r,
    !0
    /* isBlock */
  ));
}
function Mt(e, t, n, s, i) {
  return Li(ae(
    e,
    t,
    n,
    s,
    i,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Jt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Je(e, t) {
  return e.type === t.type && e.key === t.key;
}
const an = "__vInternal", Fi = ({ key: e }) => e ?? null, $t = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || se(e) || N(e) ? { i: le, r: e, k: t, f: !!n } : e : null;
function Z(e, t = null, n = null, s = 0, i = null, r = e === he ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fi(t),
    ref: t && $t(t),
    scopeId: rn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: le
  };
  return l ? (Qn(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= ee(n) ? 8 : 16), It > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ce.push(f), f;
}
const ae = Go;
function Go(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Io) && (e = me), Jt(e)) {
    const l = Ve(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Qn(l, n), It > 0 && !r && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag |= -2, l;
  }
  if (sl(e) && (e = e.__vccOpts), t) {
    t = zo(t);
    let { class: l, style: f } = t;
    l && !ee(l) && (t.class = Ln(l)), $(f) && (fi(f) && !w(f) && (f = ie({}, f)), t.style = Un(f));
  }
  const o = ee(e) ? 1 : ao(e) ? 128 : Bo(e) ? 64 : $(e) ? 4 : N(e) ? 2 : 0;
  return Z(e, t, n, s, i, o, r, !0);
}
function zo(e) {
  return e ? fi(e) || an in e ? ie({}, e) : e : null;
}
function Ve(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: r, children: o } = e, l = t ? Xo(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Fi(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? w(i) ? i.concat($t(t)) : [i, $t(t)] : $t(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ve(e.ssContent),
    ssFallback: e.ssFallback && Ve(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Hi(e = " ", t = 0) {
  return ae(fn, null, e, t);
}
function Is(e = "", t = !1) {
  return t ? (et(), Mt(me, null, e)) : ae(me, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? ae(me) : w(e) ? ae(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Le(e) : ae(fn, null, String(e));
}
function Le(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ve(e);
}
function Qn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (w(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Qn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(an in t) ? t._ctx = le : i === 3 && le && (le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: le }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Hi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Xo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ln([t.class, s.class]));
      else if (i === "style")
        t.style = Un([t.style, s.style]);
      else if (Yt(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(w(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else
        i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Se(e, t, n, s = null) {
  ge(e, t, 7, [
    n,
    s
  ]);
}
const Jo = Di();
let Zo = 0;
function Yo(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Jo, r = {
    uid: Zo++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new ur(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Mi(s, i),
    emitsOptions: vi(s, i),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: G,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: G,
    data: G,
    props: G,
    attrs: G,
    slots: G,
    refs: G,
    setupState: G,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = so.bind(null, r), e.ce && e.ce(r), r;
}
let Q = null;
const ji = () => Q || le, at = (e) => {
  Q = e, e.scope.on();
}, tt = () => {
  Q && Q.scope.off(), Q = null;
};
function Vi(e) {
  return e.vnode.shapeFlag & 4;
}
let wt = !1;
function Qo(e, t = !1) {
  wt = t;
  const { props: n, children: s } = e.vnode, i = Vi(e);
  Do(e, n, i, t), Fo(e, s);
  const r = i ? el(e, t) : void 0;
  return wt = !1, r;
}
function el(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ai(new Proxy(e.ctx, wo));
  const { setup: s } = n;
  if (s) {
    const i = e.setupContext = s.length > 1 ? nl(e) : null;
    at(e), dt();
    const r = He(s, e, 0, [e.props, i]);
    if (pt(), tt(), zs(r)) {
      if (r.then(tt, tt), t)
        return r.then((o) => {
          ws(e, o, t);
        }).catch((o) => {
          nn(
            o,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = r;
    } else
      ws(e, r, t);
  } else
    qi(e, t);
}
function ws(e, t, n) {
  N(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = pi(t)), qi(e, n);
}
let Rs;
function qi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Rs && !s.render) {
      const i = s.template || Zn(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: f } = s, u = ie(ie({
          isCustomElement: r,
          delimiters: l
        }, o), f);
        s.render = Rs(i, u);
      }
    }
    e.render = s.render || Ee;
  }
  at(e), dt(), Ro(e), pt(), tt();
}
function tl(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ue(e, "get", "$attrs"), t[n];
    }
  });
}
function nl(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = tl(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function un(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(pi(ai(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ct)
          return Ct[n](e);
      },
      has(t, n) {
        return n in t || n in Ct;
      }
    }));
}
function sl(e) {
  return N(e) && "__vccOpts" in e;
}
const il = (e, t) => Jr(e, t, wt);
function rl(e, t, n) {
  const s = arguments.length;
  return s === 2 ? $(t) && !w(t) ? Jt(t) ? ae(e, null, [t]) : ae(e, t) : ae(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Jt(n) && (n = [n]), ae(e, t, n));
}
const ol = Symbol(""), ll = () => qt(ol), cl = "3.2.47", fl = "http://www.w3.org/2000/svg", Ze = typeof document < "u" ? document : null, Ms = Ze && /* @__PURE__ */ Ze.createElement("template"), al = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t ? Ze.createElementNS(fl, e) : Ze.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Ze.createTextNode(e),
  createComment: (e) => Ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Ms.innerHTML = s ? `<svg>${e}</svg>` : e;
      const l = Ms.content;
      if (s) {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function ul(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function dl(e, t, n) {
  const s = e.style, i = ee(n);
  if (n && !i) {
    if (t && !ee(t))
      for (const r in t)
        n[r] == null && kn(s, r, "");
    for (const r in n)
      kn(s, r, n[r]);
  } else {
    const r = s.display;
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = r);
  }
}
const Ns = /\s*!important$/;
function kn(e, t, n) {
  if (w(n))
    n.forEach((s) => kn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = pl(e, t);
    Ns.test(n) ? e.setProperty(ut(s), n.replace(Ns, ""), "important") : e[s] = n;
  }
}
const Ps = ["Webkit", "Moz", "ms"], vn = {};
function pl(e, t) {
  const n = vn[t];
  if (n)
    return n;
  let s = ct(t);
  if (s !== "filter" && s in e)
    return vn[t] = s;
  s = Zs(s);
  for (let i = 0; i < Ps.length; i++) {
    const r = Ps[i] + s;
    if (r in e)
      return vn[t] = r;
  }
  return t;
}
const ks = "http://www.w3.org/1999/xlink";
function _l(e, t, n, s, i) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ks, t.slice(6, t.length)) : e.setAttributeNS(ks, t, n);
  else {
    const r = er(t);
    n == null || r && !Bs(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function hl(e, t, n, s, i, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, i, r), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const f = n ?? "";
    (e.value !== f || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Bs(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function Ki(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function gl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function ml(e, t, n, s, i = null) {
  const r = e._vei || (e._vei = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, f] = bl(t);
    if (s) {
      const u = r[t] = Cl(s, i);
      Ki(e, l, u, f);
    } else
      o && (gl(e, l, o, f), r[t] = void 0);
  }
}
const Ds = /(?:Once|Passive|Capture)$/;
function bl(e) {
  let t;
  if (Ds.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ds); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let yn = 0;
const vl = /* @__PURE__ */ Promise.resolve(), yl = () => yn || (vl.then(() => yn = 0), yn = Date.now());
function Cl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ge(El(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = yl(), n;
}
function El(e, t) {
  if (w(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (i) => !i._stopped && s && s(i));
  } else
    return t;
}
const Us = /^on[a-z]/, Tl = (e, t, n, s, i = !1, r, o, l, f) => {
  t === "class" ? ul(e, s, i) : t === "style" ? dl(e, n, s) : Yt(t) ? Fn(t) || ml(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xl(e, t, s, i)) ? hl(e, t, s, r, o, l, f) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), _l(e, t, s, i));
};
function xl(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && Us.test(t) && N(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Us.test(t) && ee(n) ? !1 : t in e;
}
const De = "transition", mt = "animation", es = (e, { slots: t }) => rl(Ei, Al(e), t);
es.displayName = "Transition";
const $i = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
es.props = /* @__PURE__ */ ie({}, Ei.props, $i);
const We = (e, t = []) => {
  w(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ls = (e) => e ? w(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Al(e) {
  const t = {};
  for (const A in e)
    A in $i || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: s, duration: i, enterFromClass: r = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: f = r, appearActiveClass: u = o, appearToClass: p = l, leaveFromClass: g = `${n}-leave-from`, leaveActiveClass: y = `${n}-leave-active`, leaveToClass: x = `${n}-leave-to` } = e, P = Sl(i), I = P && P[0], B = P && P[1], { onBeforeEnter: F, onEnter: H, onEnterCancelled: R, onLeave: V, onLeaveCancelled: te, onBeforeAppear: Pe = F, onAppear: Te = H, onAppearCancelled: k = R } = t, X = (A, z, de) => {
    Ge(A, z ? p : l), Ge(A, z ? u : o), de && de();
  }, W = (A, z) => {
    A._isLeaving = !1, Ge(A, g), Ge(A, x), Ge(A, y), z && z();
  }, re = (A) => (z, de) => {
    const _t = A ? Te : H, ne = () => X(z, A, de);
    We(_t, [z, ne]), Fs(() => {
      Ge(z, A ? f : r), Ue(z, A ? p : l), Ls(_t) || Hs(z, s, I, ne);
    });
  };
  return ie(t, {
    onBeforeEnter(A) {
      We(F, [A]), Ue(A, r), Ue(A, o);
    },
    onBeforeAppear(A) {
      We(Pe, [A]), Ue(A, f), Ue(A, u);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(A, z) {
      A._isLeaving = !0;
      const de = () => W(A, z);
      Ue(A, g), wl(), Ue(A, y), Fs(() => {
        A._isLeaving && (Ge(A, g), Ue(A, x), Ls(V) || Hs(A, s, B, de));
      }), We(V, [A, de]);
    },
    onEnterCancelled(A) {
      X(A, !1), We(R, [A]);
    },
    onAppearCancelled(A) {
      X(A, !0), We(k, [A]);
    },
    onLeaveCancelled(A) {
      W(A), We(te, [A]);
    }
  });
}
function Sl(e) {
  if (e == null)
    return null;
  if ($(e))
    return [Cn(e.enter), Cn(e.leave)];
  {
    const t = Cn(e);
    return [t, t];
  }
}
function Cn(e) {
  return fr(e);
}
function Ue(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function Ge(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Fs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ol = 0;
function Hs(e, t, n, s) {
  const i = e._endId = ++Ol, r = () => {
    i === e._endId && s();
  };
  if (n)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: f } = Il(e, t);
  if (!o)
    return s();
  const u = o + "end";
  let p = 0;
  const g = () => {
    e.removeEventListener(u, y), r();
  }, y = (x) => {
    x.target === e && ++p >= f && g();
  };
  setTimeout(() => {
    p < f && g();
  }, l + 1), e.addEventListener(u, y);
}
function Il(e, t) {
  const n = window.getComputedStyle(e), s = (P) => (n[P] || "").split(", "), i = s(`${De}Delay`), r = s(`${De}Duration`), o = js(i, r), l = s(`${mt}Delay`), f = s(`${mt}Duration`), u = js(l, f);
  let p = null, g = 0, y = 0;
  t === De ? o > 0 && (p = De, g = o, y = r.length) : t === mt ? u > 0 && (p = mt, g = u, y = f.length) : (g = Math.max(o, u), p = g > 0 ? o > u ? De : mt : null, y = p ? p === De ? r.length : f.length : 0);
  const x = p === De && /\b(transform|all)(,|$)/.test(s(`${De}Property`).toString());
  return {
    type: p,
    timeout: g,
    propCount: y,
    hasTransform: x
  };
}
function js(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Vs(n) + Vs(e[s])));
}
function Vs(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wl() {
  return document.body.offsetHeight;
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return w(t) ? (n) => Vt(t, n) : t;
}, Rl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = qs(n), Ki(e, "change", () => {
      const s = e._modelValue, i = Ml(e), r = e.checked, o = e._assign;
      if (w(s)) {
        const l = Ws(s, i), f = l !== -1;
        if (r && !f)
          o(s.concat(i));
        else if (!r && f) {
          const u = [...s];
          u.splice(l, 1), o(u);
        }
      } else if (Qt(s)) {
        const l = new Set(s);
        r ? l.add(i) : l.delete(i), o(l);
      } else
        o(Bi(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ks,
  beforeUpdate(e, t, n) {
    e._assign = qs(n), Ks(e, t, n);
  }
};
function Ks(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, w(t) ? e.checked = Ws(t, s.props.value) > -1 : Qt(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = Zt(t, Bi(e, !0)));
}
function Ml(e) {
  return "_value" in e ? e._value : e.value;
}
function Bi(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Nl = ["ctrl", "shift", "alt", "meta"], Pl = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Nl.some((n) => e[`${n}Key`] && !t.includes(n))
}, kl = (e, t) => (n, ...s) => {
  for (let i = 0; i < t.length; i++) {
    const r = Pl[t[i]];
    if (r && r(n, t))
      return;
  }
  return e(n, ...s);
}, Dl = /* @__PURE__ */ ie({ patchProp: Tl }, al);
let $s;
function Ul() {
  return $s || ($s = qo(Dl));
}
const Ll = (...e) => {
  const t = Ul().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Fl(s);
    if (!i)
      return;
    const r = t._component;
    !N(r) && !r.render && !r.template && (r.template = i.innerHTML), i.innerHTML = "";
    const o = n(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function Fl(e) {
  return ee(e) ? document.querySelector(e) : e;
}
const Wi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Hl = ["onClick"], jl = { "data-dialog": "" }, Vl = { "data-content": "" }, ql = { "data-header": "" }, Kl = { "data-body": "" }, $l = { "data-footer": "" }, Bl = ["innerHTML"], Wl = ["innerHTML"], Gl = {
  __name: "Modal",
  props: {
    visible: { type: Boolean, default: !1 },
    backdrop: { type: Boolean, default: !1 },
    disableOutsideClick: { type: Boolean, default: !1 },
    hideCancel: { type: Boolean, default: !1 },
    okText: { type: String, default: "Ok" },
    cancelText: { type: String, default: "Cancel" },
    closeText: { type: String, default: "&times;" },
    title: { type: String, default: "" },
    body: { type: String, default: "" }
  },
  emits: ["show", "hide"],
  setup(e, { expose: t, emit: n }) {
    const s = e, i = Object.freeze({
      OK: 1,
      CANCEL: 0,
      ERROR: -1
    }), r = An(!1), { visible: o } = Wr(s);
    let l = null;
    cn(() => {
      l = ji();
    }), Kt(
      o,
      function(H) {
        H === !0 ? p() : g();
      },
      { immediate: !0 }
    );
    let f, u = null;
    function p() {
      return r.value || (r.value = !0, n("show", l)), new Promise((R, V) => {
        f = R, u = V;
      });
    }
    function g(H = i.CANCEL) {
      if (r.value && (r.value = !1, n("hide", l, H), !(!f || !u))) {
        switch (H) {
          case i.OK:
            f(!0);
            break;
          case i.CANCEL:
            f(!1);
            break;
          case i.ERROR:
            u(!0);
            break;
        }
        f = u = null;
      }
    }
    function y() {
      return r ? g() : p();
    }
    function x() {
      g(i.CANCEL);
    }
    function P(H) {
      s.disableOutsideClick || x();
    }
    function I(H) {
      x();
    }
    function B(H) {
      x();
    }
    function F(H) {
      g(i.OK);
    }
    return t({ show: p, hide: g, toggle: y }), (H, R) => (et(), Mt(es, null, {
      default: vt(() => [
        r.value ? (et(), Os("div", {
          key: 0,
          "data-modal": "",
          onClick: kl(P, ["self"])
        }, [
          Z("div", jl, [
            Z("div", Vl, [
              Z("div", ql, [
                gt(H.$slots, "header", {}, () => [
                  Z("p", null, ls(e.title), 1)
                ], !0),
                Z("span", {
                  "data-close": "",
                  onClick: I
                }, "×")
              ]),
              Z("div", Kl, [
                gt(H.$slots, "default", {}, () => [
                  Hi(ls(e.body), 1)
                ], !0)
              ]),
              Z("div", $l, [
                gt(H.$slots, "footer", {
                  data: { onCancelClicked: B, onOkClicked: F }
                }, () => [
                  gt(H.$slots, "secondary-button", {}, () => [
                    e.hideCancel ? Is("", !0) : (et(), Os("button", {
                      key: 0,
                      class: "btn btn-sm btn-secondary",
                      type: "button",
                      "data-button-cancel": "",
                      onClick: B,
                      innerHTML: e.cancelText
                    }, null, 8, Bl))
                  ], !0),
                  gt(H.$slots, "primary-button", {}, () => [
                    Z("button", {
                      class: "btn btn-sm btn-primary",
                      type: "button",
                      "data-button-ok": "",
                      onClick: F,
                      innerHTML: e.okText
                    }, null, 8, Wl)
                  ], !0)
                ], !0)
              ])
            ])
          ])
        ], 8, Hl)) : Is("", !0)
      ]),
      _: 3
    }));
  }
}, zl = /* @__PURE__ */ Wi(Gl, [["__scopeId", "data-v-bb8c632e"]]);
const ts = (e) => (io("data-v-272e0f91"), e = e(), ro(), e), Xl = /* @__PURE__ */ ts(() => /* @__PURE__ */ Z("span", { class: "modal-title" }, "Attenzione", -1)), Jl = /* @__PURE__ */ ts(() => /* @__PURE__ */ Z("div", null, [
  /* @__PURE__ */ Z("p", null, "È online una nuova versione della risorsa."),
  /* @__PURE__ */ Z("p", null, "Queste pagine saranno dismesse prossimamente.")
], -1)), Zl = { class: "footer" }, Yl = { class: "left-footer" }, Ql = /* @__PURE__ */ ts(() => /* @__PURE__ */ Z("label", { for: "rememberMe" }, "non mostrare di nuovo", -1)), ec = { class: "right-footer" }, tc = ["onClick"], nc = {
  __name: "ModalWarning",
  setup(e) {
    const t = An(), n = An(!1), s = "https://battesimi.duomo.firenze.it";
    function i() {
      location.href = s;
    }
    function r() {
      n.value === !0 && localStorage.setItem("do-not-show-again", !0);
    }
    function o() {
      return localStorage.getItem("do-not-show-again") !== "true";
    }
    return cn(async () => {
      if (o()) {
        if (await t.value.show() === !1)
          return;
        r();
      }
    }), (l, f) => (et(), Mt(zl, {
      ref_key: "myModal",
      ref: t
    }, {
      header: vt(() => [
        Xl
      ]),
      footer: vt(({ data: { onCancelClicked: u, onOkClicked: p } }) => [
        Z("div", Zl, [
          Z("div", Yl, [
            Oo(Z("input", {
              type: "checkbox",
              name: "rememberMe",
              id: "rememberMe",
              "onUpdate:modelValue": f[0] || (f[0] = (g) => n.value = g)
            }, null, 512), [
              [Rl, n.value]
            ]),
            Ql
          ]),
          Z("div", ec, [
            Z("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              onClick: p
            }, "Ok", 8, tc),
            Z("button", {
              type: "button",
              class: "btn btn-primary btn-sm",
              onClick: i
            }, "Scopri il nuovo sito")
          ])
        ])
      ]),
      default: vt(() => [
        Jl
      ]),
      _: 1
    }, 512));
  }
}, sc = /* @__PURE__ */ Wi(nc, [["__scopeId", "data-v-272e0f91"]]), ic = {
  __name: "App",
  setup(e) {
    return (t, n) => (et(), Mt(sc));
  }
};
Ll(ic).mount("#app");
