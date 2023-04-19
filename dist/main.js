function Ze(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Oo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ee(o) ? ns(o) : Oo(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else {
    if (ee(e))
      return e;
    if (K(e))
      return e;
  }
}
const Gi = /;(?![^(]*\))/g, es = /:([^]+)/, ts = /\/\*.*?\*\//gs;
function ns(e) {
  const t = {};
  return e.replace(ts, "").split(Gi).forEach((n) => {
    if (n) {
      const o = n.split(es);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function vo(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = vo(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const os = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", rs = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", is = /* @__PURE__ */ Ze(os), ss = /* @__PURE__ */ Ze(rs), ls = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cs = /* @__PURE__ */ Ze(ls);
function Ar(e) {
  return !!e || e === "";
}
function us(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Cn(e[o], t[o]);
  return n;
}
function Cn(e, t) {
  if (e === t)
    return !0;
  let n = qo(e), o = qo(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Bt(e), o = Bt(t), n || o)
    return e === t;
  if (n = T(e), o = T(t), n || o)
    return n && o ? us(e, t) : !1;
  if (n = K(e), o = K(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const s in e) {
      const c = e.hasOwnProperty(s), u = t.hasOwnProperty(s);
      if (c && !u || !c && u || !Cn(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Rr(e, t) {
  return e.findIndex((n) => Cn(n, t));
}
const zo = (e) => ee(e) ? e : e == null ? "" : T(e) || K(e) && (e.toString === jr || !S(e.toString)) ? JSON.stringify(e, Fr, 2) : String(e), Fr = (e, t) => t && t.__v_isRef ? Fr(e, t.value) : ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Vn(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : K(t) && !T(t) && !kr(t) ? String(t) : t, J = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, Pr = () => !1, fs = /^on[^a-z]/, Qt = (e) => fs.test(e), En = (e) => e.startsWith("onUpdate:"), G = Object.assign, wo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, as = Object.prototype.hasOwnProperty, j = (e, t) => as.call(e, t), T = Array.isArray, ct = (e) => Xt(e) === "[object Map]", Vn = (e) => Xt(e) === "[object Set]", qo = (e) => Xt(e) === "[object Date]", S = (e) => typeof e == "function", ee = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Do = (e) => K(e) && S(e.then) && S(e.catch), jr = Object.prototype.toString, Xt = (e) => jr.call(e), xo = (e) => Xt(e).slice(8, -1), kr = (e) => Xt(e) === "[object Object]", Co = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ Ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ds = /* @__PURE__ */ Ze("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ps = /-(\w)/g, Vt = Tn((e) => e.replace(ps, (t, n) => n ? n.toUpperCase() : "")), hs = /\B([A-Z])/g, Ye = Tn((e) => e.replace(hs, "-$1").toLowerCase()), $n = Tn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ot = Tn((e) => e ? `on${$n(e)}` : ""), Ut = (e, t) => !Object.is(e, t), Ot = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Nn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ms = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, gs = (e) => {
  const t = ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Jo;
const Lr = () => Jo || (Jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function no(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class _s {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = De, !t && De && (this.index = (De.scopes || (De.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    } else
      ({}).NODE_ENV !== "production" && no("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    De = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    De = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Es(e, t = De) {
  t && t.active && t.effects.push(e);
}
function Ns() {
  return De;
}
const Kt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Hr = (e) => (e.w & Qe) > 0, Br = (e) => (e.n & Qe) > 0, bs = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Qe;
}, ys = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Hr(r) && !Br(r) ? r.delete(e) : t[n++] = r, r.w &= ~Qe, r.n &= ~Qe;
    }
    t.length = n;
  }
}, bn = /* @__PURE__ */ new WeakMap();
let Ft = 0, Qe = 1;
const oo = 30;
let pe;
const ut = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), ro = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class Vo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Es(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = pe, n = Je;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = pe, pe = this, Je = !0, Qe = 1 << ++Ft, Ft <= oo ? bs(this) : Yo(this), this.fn();
    } finally {
      Ft <= oo && ys(this), Qe = 1 << --Ft, pe = this.parent, Je = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pe === this ? this.deferStop = !0 : this.active && (Yo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Yo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Je = !0;
const Ur = [];
function _t() {
  Ur.push(Je), Je = !1;
}
function Et() {
  const e = Ur.pop();
  Je = e === void 0 ? !0 : e;
}
function he(e, t, n) {
  if (Je && pe) {
    let o = bn.get(e);
    o || bn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Kt());
    const i = {}.NODE_ENV !== "production" ? { effect: pe, target: e, type: t, key: n } : void 0;
    io(r, i);
  }
}
function io(e, t) {
  let n = !1;
  Ft <= oo ? Br(e) || (e.n |= Qe, n = !Hr(e)) : n = !e.has(pe), n && (e.add(pe), pe.deps.push(e), {}.NODE_ENV !== "production" && pe.onTrack && pe.onTrack(Object.assign({ effect: pe }, t)));
}
function ke(e, t, n, o, r, i) {
  const s = bn.get(e);
  if (!s)
    return;
  let c = [];
  if (t === "clear")
    c = [...s.values()];
  else if (n === "length" && T(e)) {
    const a = Number(o);
    s.forEach((p, d) => {
      (d === "length" || d >= a) && c.push(p);
    });
  } else
    switch (n !== void 0 && c.push(s.get(n)), t) {
      case "add":
        T(e) ? Co(n) && c.push(s.get("length")) : (c.push(s.get(ut)), ct(e) && c.push(s.get(ro)));
        break;
      case "delete":
        T(e) || (c.push(s.get(ut)), ct(e) && c.push(s.get(ro)));
        break;
      case "set":
        ct(e) && c.push(s.get(ut));
        break;
    }
  const u = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: i } : void 0;
  if (c.length === 1)
    c[0] && ({}.NODE_ENV !== "production" ? wt(c[0], u) : wt(c[0]));
  else {
    const a = [];
    for (const p of c)
      p && a.push(...p);
    ({}).NODE_ENV !== "production" ? wt(Kt(a), u) : wt(Kt(a));
  }
}
function wt(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && Qo(o, t);
  for (const o of n)
    o.computed || Qo(o, t);
}
function Qo(e, t) {
  (e !== pe || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(G({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function Os(e, t) {
  var n;
  return (n = bn.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const vs = /* @__PURE__ */ Ze("__proto__,__v_isRef,__isVue"), Kr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
), ws = /* @__PURE__ */ In(), Ds = /* @__PURE__ */ In(!1, !0), xs = /* @__PURE__ */ In(!0), Cs = /* @__PURE__ */ In(!0, !0), Xo = /* @__PURE__ */ Vs();
function Vs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = A(this);
      for (let i = 0, s = this.length; i < s; i++)
        he(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(A)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      _t();
      const o = A(this)[t].apply(this, n);
      return Et(), o;
    };
  }), e;
}
function Ts(e) {
  const t = A(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
function In(e = !1, t = !1) {
  return function(o, r, i) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && i === (e ? t ? Zr : Xr : t ? Qr : Yr).get(o))
      return o;
    const s = T(o);
    if (!e) {
      if (s && j(Xo, r))
        return Reflect.get(Xo, r, i);
      if (r === "hasOwnProperty")
        return Ts;
    }
    const c = Reflect.get(o, r, i);
    return (Bt(r) ? Kr.has(r) : vs(r)) || (e || he(o, "get", r), t) ? c : re(c) ? s && Co(r) ? c : c.value : K(c) ? e ? Gr(c) : $o(c) : c;
  };
}
const $s = /* @__PURE__ */ Wr(), Is = /* @__PURE__ */ Wr(!0);
function Wr(e = !1) {
  return function(n, o, r, i) {
    let s = n[o];
    if (Xe(s) && re(s) && !re(r))
      return !1;
    if (!e && (!yn(r) && !Xe(r) && (s = A(s), r = A(r)), !T(n) && re(s) && !re(r)))
      return s.value = r, !0;
    const c = T(n) && Co(o) ? Number(o) < n.length : j(n, o), u = Reflect.set(n, o, r, i);
    return n === A(i) && (c ? Ut(r, s) && ke(n, "set", o, r, s) : ke(n, "add", o, r)), u;
  };
}
function Ss(e, t) {
  const n = j(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && ke(e, "delete", t, void 0, o), r;
}
function Ms(e, t) {
  const n = Reflect.has(e, t);
  return (!Bt(t) || !Kr.has(t)) && he(e, "has", t), n;
}
function As(e) {
  return he(e, "iterate", T(e) ? "length" : ut), Reflect.ownKeys(e);
}
const zr = {
  get: ws,
  set: $s,
  deleteProperty: Ss,
  has: Ms,
  ownKeys: As
}, qr = {
  get: xs,
  set(e, t) {
    return {}.NODE_ENV !== "production" && no(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && no(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Rs = /* @__PURE__ */ G({}, zr, {
  get: Ds,
  set: Is
}), Fs = /* @__PURE__ */ G({}, qr, {
  get: Cs
}), To = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function on(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = A(e), i = A(t);
  n || (t !== i && he(r, "get", t), he(r, "get", i));
  const { has: s } = Sn(r), c = o ? To : n ? Io : Wt;
  if (s.call(r, t))
    return c(e.get(t));
  if (s.call(r, i))
    return c(e.get(i));
  e !== r && e.get(t);
}
function rn(e, t = !1) {
  const n = this.__v_raw, o = A(n), r = A(e);
  return t || (e !== r && he(o, "has", e), he(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function sn(e, t = !1) {
  return e = e.__v_raw, !t && he(A(e), "iterate", ut), Reflect.get(e, "size", e);
}
function Zo(e) {
  e = A(e);
  const t = A(this);
  return Sn(t).has.call(t, e) || (t.add(e), ke(t, "add", e, e)), this;
}
function Go(e, t) {
  t = A(t);
  const n = A(this), { has: o, get: r } = Sn(n);
  let i = o.call(n, e);
  i ? {}.NODE_ENV !== "production" && Jr(n, o, e) : (e = A(e), i = o.call(n, e));
  const s = r.call(n, e);
  return n.set(e, t), i ? Ut(t, s) && ke(n, "set", e, t, s) : ke(n, "add", e, t), this;
}
function er(e) {
  const t = A(this), { has: n, get: o } = Sn(t);
  let r = n.call(t, e);
  r ? {}.NODE_ENV !== "production" && Jr(t, n, e) : (e = A(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, s = t.delete(e);
  return r && ke(t, "delete", e, void 0, i), s;
}
function tr() {
  const e = A(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? ct(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && ke(e, "clear", void 0, void 0, n), o;
}
function ln(e, t) {
  return function(o, r) {
    const i = this, s = i.__v_raw, c = A(s), u = t ? To : e ? Io : Wt;
    return !e && he(c, "iterate", ut), s.forEach((a, p) => o.call(r, u(a), u(p), i));
  };
}
function cn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = A(r), s = ct(i), c = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, a = r[e](...o), p = n ? To : t ? Io : Wt;
    return !t && he(i, "iterate", u ? ro : ut), {
      // iterator protocol
      next() {
        const { value: d, done: m } = a.next();
        return m ? { value: d, done: m } : {
          value: c ? [p(d[0]), p(d[1])] : p(d),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Be(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${$n(e)} operation ${n}failed: target is readonly.`, A(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Ps() {
  const e = {
    get(i) {
      return on(this, i);
    },
    get size() {
      return sn(this);
    },
    has: rn,
    add: Zo,
    set: Go,
    delete: er,
    clear: tr,
    forEach: ln(!1, !1)
  }, t = {
    get(i) {
      return on(this, i, !1, !0);
    },
    get size() {
      return sn(this);
    },
    has: rn,
    add: Zo,
    set: Go,
    delete: er,
    clear: tr,
    forEach: ln(!1, !0)
  }, n = {
    get(i) {
      return on(this, i, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(i) {
      return rn.call(this, i, !0);
    },
    add: Be(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Be(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Be(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Be(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: ln(!0, !1)
  }, o = {
    get(i) {
      return on(this, i, !0, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(i) {
      return rn.call(this, i, !0);
    },
    add: Be(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Be(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Be(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Be(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: ln(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = cn(i, !1, !1), n[i] = cn(i, !0, !1), t[i] = cn(i, !1, !0), o[i] = cn(i, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [js, ks, Ls, Hs] = /* @__PURE__ */ Ps();
function Mn(e, t) {
  const n = t ? e ? Hs : Ls : e ? ks : js;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(j(n, r) && r in o ? n : o, r, i);
}
const Bs = {
  get: /* @__PURE__ */ Mn(!1, !1)
}, Us = {
  get: /* @__PURE__ */ Mn(!1, !0)
}, Ks = {
  get: /* @__PURE__ */ Mn(!0, !1)
}, Ws = {
  get: /* @__PURE__ */ Mn(!0, !0)
};
function Jr(e, t, n) {
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const r = xo(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Yr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap();
function zs(e) {
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
function qs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zs(xo(e));
}
function $o(e) {
  return Xe(e) ? e : An(e, !1, zr, Bs, Yr);
}
function Js(e) {
  return An(e, !1, Rs, Us, Qr);
}
function Gr(e) {
  return An(e, !0, qr, Ks, Xr);
}
function Dt(e) {
  return An(e, !0, Fs, Ws, Zr);
}
function An(e, t, n, o, r) {
  if (!K(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = qs(e);
  if (s === 0)
    return e;
  const c = new Proxy(e, s === 2 ? o : n);
  return r.set(e, c), c;
}
function ft(e) {
  return Xe(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function yn(e) {
  return !!(e && e.__v_isShallow);
}
function On(e) {
  return ft(e) || Xe(e);
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function ei(e) {
  return Nn(e, "__v_skip", !0), e;
}
const Wt = (e) => K(e) ? $o(e) : e, Io = (e) => K(e) ? Gr(e) : e;
function ti(e) {
  Je && pe && (e = A(e), {}.NODE_ENV !== "production" ? io(e.dep || (e.dep = Kt()), {
    target: e,
    type: "get",
    key: "value"
  }) : io(e.dep || (e.dep = Kt())));
}
function ni(e, t) {
  e = A(e);
  const n = e.dep;
  n && ({}.NODE_ENV !== "production" ? wt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : wt(n));
}
function re(e) {
  return !!(e && e.__v_isRef === !0);
}
function so(e) {
  return Ys(e, !1);
}
function Ys(e, t) {
  return re(e) ? e : new Qs(e, t);
}
class Qs {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : A(t), this._value = n ? t : Wt(t);
  }
  get value() {
    return ti(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || yn(t) || Xe(t);
    t = n ? t : A(t), Ut(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Wt(t), ni(this, t));
  }
}
function Xs(e) {
  return re(e) ? e.value : e;
}
const Zs = {
  get: (e, t, n) => Xs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return re(r) && !re(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function oi(e) {
  return ft(e) ? e : new Proxy(e, Zs);
}
function Gs(e) {
  ({}).NODE_ENV !== "production" && !On(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = T(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = tl(e, n);
  return t;
}
class el {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Os(A(this._object), this._key);
  }
}
function tl(e, t, n) {
  const o = e[t];
  return re(o) ? o : new el(e, t, n);
}
var ri;
class nl {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[ri] = !1, this._dirty = !0, this.effect = new Vo(t, () => {
      this._dirty || (this._dirty = !0, ni(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = A(this);
    return ti(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
ri = "__v_isReadonly";
function ol(e, t, n = !1) {
  let o, r;
  const i = S(e);
  i ? (o = e, r = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, r = e.set);
  const s = new nl(o, r, i || !r, n);
  return {}.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const at = [];
function an(e) {
  at.push(e);
}
function dn() {
  at.pop();
}
function b(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  _t();
  const n = at.length ? at[at.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = rl();
  if (o)
    je(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: i }) => `at <${Un(n, i.type)}>`).join(`
`),
      r
    ]);
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...il(r)), console.warn(...i);
  }
  Et();
}
function rl() {
  let e = at[at.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function il(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...sl(n));
  }), t;
}
function sl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Un(e.component, e.type, o)}`, i = ">" + n;
  return e.props ? [r, ...ll(e.props), i] : [r + i];
}
function ll(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ii(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ii(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = ii(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : S(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
function cl(e, t) {
  ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? b(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && b(`${t} is NaN - the duration expression might be incorrect.`));
}
const So = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function je(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    Rn(i, t, n);
  }
  return r;
}
function Oe(e, t, n, o) {
  if (S(e)) {
    const i = je(e, t, n, o);
    return i && Do(i) && i.catch((s) => {
      Rn(s, t, n);
    }), i;
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(Oe(e[i], t, n, o));
  return r;
}
function Rn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, c = {}.NODE_ENV !== "production" ? So[n] : n;
    for (; i; ) {
      const a = i.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, s, c) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      je(u, null, 10, [e, s, c]);
      return;
    }
  }
  ul(e, n, r, o);
}
function ul(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const r = So[t];
    if (n && an(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && dn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let zt = !1, lo = !1;
const fe = [];
let Se = 0;
const Ct = [];
let Ie = null, We = 0;
const si = /* @__PURE__ */ Promise.resolve();
let Mo = null;
const fl = 100;
function al(e) {
  const t = Mo || si;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dl(e) {
  let t = Se + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    qt(fe[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Fn(e) {
  (!fe.length || !fe.includes(e, zt && e.allowRecurse ? Se + 1 : Se)) && (e.id == null ? fe.push(e) : fe.splice(dl(e.id), 0, e), li());
}
function li() {
  !zt && !lo && (lo = !0, Mo = si.then(fi));
}
function pl(e) {
  const t = fe.indexOf(e);
  t > Se && fe.splice(t, 1);
}
function ci(e) {
  T(e) ? Ct.push(...e) : (!Ie || !Ie.includes(e, e.allowRecurse ? We + 1 : We)) && Ct.push(e), li();
}
function nr(e, t = zt ? Se + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < fe.length; t++) {
    const n = fe[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && Ao(e, n))
        continue;
      fe.splice(t, 1), t--, n();
    }
  }
}
function ui(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)];
    if (Ct.length = 0, Ie) {
      Ie.push(...t);
      return;
    }
    for (Ie = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ie.sort((n, o) => qt(n) - qt(o)), We = 0; We < Ie.length; We++)
      ({}).NODE_ENV !== "production" && Ao(e, Ie[We]) || Ie[We]();
    Ie = null, We = 0;
  }
}
const qt = (e) => e.id == null ? 1 / 0 : e.id, hl = (e, t) => {
  const n = qt(e) - qt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function fi(e) {
  lo = !1, zt = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fe.sort(hl);
  const t = {}.NODE_ENV !== "production" ? (n) => Ao(e, n) : ue;
  try {
    for (Se = 0; Se < fe.length; Se++) {
      const n = fe[Se];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        je(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    Se = 0, fe.length = 0, ui(e), zt = !1, Mo = null, (fe.length || Ct.length) && fi(e);
  }
}
function Ao(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fl) {
      const o = t.ownerInstance, r = o && Wi(o.type);
      return b(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let dt = !1;
const vt = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (Lr().__VUE_HMR_RUNTIME__ = {
  createRecord: Jn(ai),
  rerender: Jn(_l),
  reload: Jn(El)
});
const gt = /* @__PURE__ */ new Map();
function ml(e) {
  const t = e.type.__hmrId;
  let n = gt.get(t);
  n || (ai(t, e.type), n = gt.get(t)), n.instances.add(e);
}
function gl(e) {
  gt.get(e.type.__hmrId).instances.delete(e);
}
function ai(e, t) {
  return gt.has(e) ? !1 : (gt.set(e, {
    initialDef: jt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function jt(e) {
  return zi(e) ? e.__vccOpts : e;
}
function _l(e, t) {
  const n = gt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, jt(o.type).render = t), o.renderCache = [], dt = !0, o.update(), dt = !1;
  }));
}
function El(e, t) {
  const n = gt.get(e);
  if (!n)
    return;
  t = jt(t), or(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = jt(r.type);
    vt.has(i) || (i !== n.initialDef && or(i, t), vt.add(i)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (vt.add(i), r.ceReload(t.styles), vt.delete(i)) : r.parent ? Fn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  ci(() => {
    for (const r of o)
      vt.delete(jt(r.type));
  });
}
function or(e, t) {
  G(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Jn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Me, Pt = [], co = !1;
function Zt(e, ...t) {
  Me ? Me.emit(e, ...t) : co || Pt.push({ event: e, args: t });
}
function di(e, t) {
  var n, o;
  Me = e, Me ? (Me.enabled = !0, Pt.forEach(({ event: r, args: i }) => Me.emit(r, ...i)), Pt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    di(i, t);
  }), setTimeout(() => {
    Me || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, co = !0, Pt = []);
  }, 3e3)) : (co = !0, Pt = []);
}
function Nl(e, t) {
  Zt("app:init", e, t, {
    Fragment: _e,
    Text: en,
    Comment: le,
    Static: gn
  });
}
function bl(e) {
  Zt("app:unmount", e);
}
const yl = /* @__PURE__ */ Ro(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), pi = /* @__PURE__ */ Ro(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), Ol = /* @__PURE__ */ Ro(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), vl = (e) => {
  Me && typeof Me.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Me.cleanupBuffer(e) && Ol(e);
};
function Ro(e) {
  return (t) => {
    Zt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const wl = /* @__PURE__ */ hi(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Dl = /* @__PURE__ */ hi(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function hi(e) {
  return (t, n, o) => {
    Zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function xl(e, t, n) {
  Zt("component:emit", e.appContext.app, e, t, n);
}
function Cl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || J;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: p, propsOptions: [d] } = e;
    if (p)
      if (!(t in p))
        (!d || !(ot(t) in d)) && b(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ot(t)}" prop.`);
      else {
        const m = p[t];
        S(m) && (m(...n) || b(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && t.slice(7);
  if (s && s in o) {
    const p = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: m } = o[p] || J;
    m && (r = n.map((w) => ee(w) ? w.trim() : w)), d && (r = n.map(ms));
  }
  if ({}.NODE_ENV !== "production" && xl(e, t, r), {}.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[ot(p)] && b(`Event "${p}" is emitted in component ${Un(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ye(t)}" instead of "${t}".`);
  }
  let c, u = o[c = ot(t)] || // also try camelCase event handler (#2249)
  o[c = ot(Vt(t))];
  !u && i && (u = o[c = ot(Ye(t))]), u && Oe(u, e, 6, r);
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Oe(a, e, 6, r);
  }
}
function mi(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, c = !1;
  if (!S(e)) {
    const u = (a) => {
      const p = mi(a, t, !0);
      p && (c = !0, G(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !c ? (K(e) && o.set(e, null), null) : (T(i) ? i.forEach((u) => s[u] = null) : G(s, i), K(e) && o.set(e, s), s);
}
function Pn(e, t) {
  return !e || !Qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, Ye(t)) || j(e, t));
}
let se = null, jn = null;
function vn(e) {
  const t = se;
  return se = e, jn = e && e.type.__scopeId || null, t;
}
function Vl(e) {
  jn = e;
}
function Tl() {
  jn = null;
}
function kt(e, t = se, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && hr(-1);
    const i = vn(t);
    let s;
    try {
      s = e(...r);
    } finally {
      vn(i), o._d && hr(1);
    }
    return {}.NODE_ENV !== "production" && pi(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let uo = !1;
function wn() {
  uo = !0;
}
function Yn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: i, propsOptions: [s], slots: c, attrs: u, emit: a, render: p, renderCache: d, data: m, setupState: w, ctx: I, inheritAttrs: V } = e;
  let L, X;
  const F = vn(e);
  ({}).NODE_ENV !== "production" && (uo = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = r || o;
      L = xe(p.call(z, z, d, i, w, m, I)), X = u;
    } else {
      const z = t;
      ({}).NODE_ENV !== "production" && u === i && wn(), L = xe(z.length > 1 ? z(i, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return wn(), u;
        },
        slots: c,
        emit: a
      } : { attrs: u, slots: c, emit: a }) : z(
        i,
        null
        /* we know it doesn't need it */
      )), X = t.props ? u : Il(u);
    }
  } catch (z) {
    Ht.length = 0, Rn(
      z,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), L = ge(le);
  }
  let U = L, R;
  if ({}.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([U, R] = $l(L)), X && V !== !1) {
    const z = Object.keys(X), { shapeFlag: Ee } = U;
    if (z.length) {
      if (Ee & 7)
        s && z.some(En) && (X = Sl(X, s)), U = Ae(U, X);
      else if ({}.NODE_ENV !== "production" && !uo && U.type !== le) {
        const Ne = Object.keys(u), P = [], W = [];
        for (let Y = 0, ie = Ne.length; Y < ie; Y++) {
          const x = Ne[Y];
          Qt(x) ? En(x) || P.push(x[2].toLowerCase() + x.slice(3)) : W.push(x);
        }
        W.length && b(`Extraneous non-props attributes (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), P.length && b(`Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !rr(U) && b("Runtime directive used on component with non-element root node. The directives will not function as intended."), U = Ae(U), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !rr(U) && b("Component inside <Transition> renders non-element root node that cannot be animated."), U.transition = n.transition), {}.NODE_ENV !== "production" && R ? R(U) : L = U, vn(F), L;
}
const $l = (e) => {
  const t = e.children, n = e.dynamicChildren, o = gi(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (c) => {
    t[r] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [xe(o), s];
};
function gi(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Tt(o)) {
      if (o.type !== le || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Il = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sl = (e, t) => {
  const n = {};
  for (const o in e)
    (!En(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, rr = (e) => e.shapeFlag & 7 || e.type === le;
function Ml(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: c, patchFlag: u } = t, a = i.emitsOptions;
  if ({}.NODE_ENV !== "production" && (r || c) && dt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? ir(o, s, a) : !!s;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const m = p[d];
        if (s[m] !== o[m] && !Pn(a, m))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? ir(o, s, a) : !0 : !!s;
  return !1;
}
function ir(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Pn(n, i))
      return !0;
  }
  return !1;
}
function Al({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Rl = (e) => e.__isSuspense;
function Fl(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : ci(e);
}
function Pl(e, t) {
  if (!ne)
    ({}).NODE_ENV !== "production" && b("provide() can only be used inside setup().");
  else {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const o = ne || se;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && S(t) ? t.call(o.proxy) : t;
    ({}).NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const un = {};
function hn(e, t, n) {
  return {}.NODE_ENV !== "production" && !S(t) && b("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), _i(e, t, n);
}
function _i(e, t, { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s } = J) {
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (R) => {
    b("Invalid watch source: ", R, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Ns() === (ne == null ? void 0 : ne.scope) ? ne : null;
  let a, p = !1, d = !1;
  if (re(e) ? (a = () => e.value, p = yn(e)) : ft(e) ? (a = () => e, o = !0) : T(e) ? (d = !0, p = e.some((R) => ft(R) || yn(R)), a = () => e.map((R) => {
    if (re(R))
      return R.value;
    if (ft(R))
      return lt(R);
    if (S(R))
      return je(
        R,
        u,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    ({}).NODE_ENV !== "production" && c(R);
  })) : S(e) ? t ? a = () => je(
    e,
    u,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : a = () => {
    if (!(u && u.isUnmounted))
      return m && m(), Oe(e, u, 3, [w]);
  } : (a = ue, {}.NODE_ENV !== "production" && c(e)), t && o) {
    const R = a;
    a = () => lt(R());
  }
  let m, w = (R) => {
    m = F.onStop = () => {
      je(
        R,
        u,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, I;
  if (Yt)
    if (w = ue, t ? n && Oe(t, u, 3, [
      a(),
      d ? [] : void 0,
      w
    ]) : a(), r === "sync") {
      const R = Bc();
      I = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return ue;
  let V = d ? new Array(e.length).fill(un) : un;
  const L = () => {
    if (F.active)
      if (t) {
        const R = F.run();
        (o || p || (d ? R.some((z, Ee) => Ut(z, V[Ee])) : Ut(R, V))) && (m && m(), Oe(t, u, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          V === un ? void 0 : d && V[0] === un ? [] : V,
          w
        ]), V = R);
      } else
        F.run();
  };
  L.allowRecurse = !!t;
  let X;
  r === "sync" ? X = L : r === "post" ? X = () => me(L, u && u.suspense) : (L.pre = !0, u && (L.id = u.uid), X = () => Fn(L));
  const F = new Vo(a, X);
  ({}).NODE_ENV !== "production" && (F.onTrack = i, F.onTrigger = s), t ? n ? L() : V = F.run() : r === "post" ? me(F.run.bind(F), u && u.suspense) : F.run();
  const U = () => {
    F.stop(), u && u.scope && wo(u.scope.effects, F);
  };
  return I && I.push(U), U;
}
function jl(e, t, n) {
  const o = this.proxy, r = ee(e) ? e.includes(".") ? Ei(o, e) : () => o[e] : e.bind(o, o);
  let i;
  S(t) ? i = t : (i = t.handler, n = t);
  const s = ne;
  $t(this);
  const c = _i(r, i.bind(o), n);
  return s ? $t(s) : mt(), c;
}
function Ei(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function lt(e, t) {
  if (!K(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), re(e))
    lt(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      lt(e[n], t);
  else if (Vn(e) || ct(e))
    e.forEach((n) => {
      lt(n, t);
    });
  else if (kr(e))
    for (const n in e)
      lt(e[n], t);
  return e;
}
function kl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ln(() => {
    e.isMounted = !0;
  }), vi(() => {
    e.isUnmounting = !0;
  }), e;
}
const ye = [Function, Array], Ll = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: ye,
    onEnter: ye,
    onAfterEnter: ye,
    onEnterCancelled: ye,
    // leave
    onBeforeLeave: ye,
    onLeave: ye,
    onAfterLeave: ye,
    onLeaveCancelled: ye,
    // appear
    onBeforeAppear: ye,
    onAppear: ye,
    onAfterAppear: ye,
    onAppearCancelled: ye
  },
  setup(e, { slots: t }) {
    const n = Hi(), o = kl();
    let r;
    return () => {
      const i = t.default && yi(t.default(), !0);
      if (!i || !i.length)
        return;
      let s = i[0];
      if (i.length > 1) {
        let V = !1;
        for (const L of i)
          if (L.type !== le) {
            if ({}.NODE_ENV !== "production" && V) {
              b("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (s = L, V = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const c = A(e), { mode: u } = c;
      if ({}.NODE_ENV !== "production" && u && u !== "in-out" && u !== "out-in" && u !== "default" && b(`invalid <transition> mode: ${u}`), o.isLeaving)
        return Qn(s);
      const a = sr(s);
      if (!a)
        return Qn(s);
      const p = fo(a, c, o, n);
      ao(a, p);
      const d = n.subTree, m = d && sr(d);
      let w = !1;
      const { getTransitionKey: I } = a.type;
      if (I) {
        const V = I();
        r === void 0 ? r = V : V !== r && (r = V, w = !0);
      }
      if (m && m.type !== le && (!it(a, m) || w)) {
        const V = fo(m, c, o, n);
        if (ao(m, V), u === "out-in")
          return o.isLeaving = !0, V.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Qn(s);
        u === "in-out" && a.type !== le && (V.delayLeave = (L, X, F) => {
          const U = bi(o, m);
          U[String(m.key)] = m, L._leaveCb = () => {
            X(), L._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = F;
        });
      }
      return s;
    };
  }
}, Ni = Ll;
function bi(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function fo(e, t, n, o) {
  const { appear: r, mode: i, persisted: s = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: a, onEnterCancelled: p, onBeforeLeave: d, onLeave: m, onAfterLeave: w, onLeaveCancelled: I, onBeforeAppear: V, onAppear: L, onAfterAppear: X, onAppearCancelled: F } = t, U = String(e.key), R = bi(n, e), z = (P, W) => {
    P && Oe(P, o, 9, W);
  }, Ee = (P, W) => {
    const Y = W[1];
    z(P, W), T(P) ? P.every((ie) => ie.length <= 1) && Y() : P.length <= 1 && Y();
  }, Ne = {
    mode: i,
    persisted: s,
    beforeEnter(P) {
      let W = c;
      if (!n.isMounted)
        if (r)
          W = V || c;
        else
          return;
      P._leaveCb && P._leaveCb(
        !0
        /* cancelled */
      );
      const Y = R[U];
      Y && it(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), z(W, [P]);
    },
    enter(P) {
      let W = u, Y = a, ie = p;
      if (!n.isMounted)
        if (r)
          W = L || u, Y = X || a, ie = F || p;
        else
          return;
      let x = !1;
      const Z = P._enterCb = (be) => {
        x || (x = !0, be ? z(ie, [P]) : z(Y, [P]), Ne.delayedLeave && Ne.delayedLeave(), P._enterCb = void 0);
      };
      W ? Ee(W, [P, Z]) : Z();
    },
    leave(P, W) {
      const Y = String(e.key);
      if (P._enterCb && P._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      z(d, [P]);
      let ie = !1;
      const x = P._leaveCb = (Z) => {
        ie || (ie = !0, W(), Z ? z(I, [P]) : z(w, [P]), P._leaveCb = void 0, R[Y] === e && delete R[Y]);
      };
      R[Y] = e, m ? Ee(m, [P, x]) : x();
    },
    clone(P) {
      return fo(P, t, n, o);
    }
  };
  return Ne;
}
function Qn(e) {
  if (Gt(e))
    return e = Ae(e), e.children = null, e;
}
function sr(e) {
  return Gt(e) ? e.children ? e.children[0] : void 0 : e;
}
function ao(e, t) {
  e.shapeFlag & 6 && e.component ? ao(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yi(e, t = !1, n) {
  let o = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const c = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === _e ? (s.patchFlag & 128 && r++, o = o.concat(yi(s.children, t, c))) : (t || s.type !== le) && o.push(c != null ? Ae(s, { key: c }) : s);
  }
  if (r > 1)
    for (let i = 0; i < o.length; i++)
      o[i].patchFlag = -2;
  return o;
}
const Lt = (e) => !!e.type.__asyncLoader, Gt = (e) => e.type.__isKeepAlive;
function Hl(e, t) {
  Oi(e, "a", t);
}
function Bl(e, t) {
  Oi(e, "da", t);
}
function Oi(e, t, n = ne) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (kn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Gt(r.parent.vnode) && Ul(o, t, n, r), r = r.parent;
  }
}
function Ul(e, t, n, o) {
  const r = kn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  wi(() => {
    wo(o[t], r);
  }, n);
}
function kn(e, t, n = ne, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      _t(), $t(n);
      const c = Oe(t, n, e, s);
      return mt(), Et(), c;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if ({}.NODE_ENV !== "production") {
    const r = ot(So[e].replace(/ hook$/, ""));
    b(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Le = (e) => (t, n = ne) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Yt || e === "sp") && kn(e, (...o) => t(...o), n)
), Kl = Le(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Ln = Le(
  "m"
  /* LifecycleHooks.MOUNTED */
), Wl = Le(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), zl = Le(
  "u"
  /* LifecycleHooks.UPDATED */
), vi = Le(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), wi = Le(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), ql = Le(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Jl = Le(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Yl = Le(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Ql(e, t = ne) {
  kn("ec", e, t);
}
function Di(e) {
  ds(e) && b("Do not use built-in directive ids as custom directive id: " + e);
}
function Xl(e, t) {
  const n = se;
  if (n === null)
    return {}.NODE_ENV !== "production" && b("withDirectives can only be used inside render functions."), e;
  const o = Bn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, c, u, a = J] = t[i];
    s && (S(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && lt(c), r.push({
      dir: s,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: a
    }));
  }
  return e;
}
function Ge(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const c = r[s];
    i && (c.oldValue = i[s].value);
    let u = c.dir[o];
    u && (_t(), Oe(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Et());
  }
}
const Zl = Symbol();
function Mt(e, t, n = {}, o, r) {
  if (se.isCE || se.parent && Lt(se.parent) && se.parent.isCE)
    return t !== "default" && (n.name = t), ge("slot", n, o && o());
  let i = e[t];
  ({}).NODE_ENV !== "production" && i && i.length > 1 && (b("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), i = () => []), i && i._c && (i._d = !1), ht();
  const s = i && xi(i(n)), c = tn(
    _e,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || (o ? o() : []),
    s && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), i && i._c && (i._d = !0), c;
}
function xi(e) {
  return e.some((t) => Tt(t) ? !(t.type === le || t.type === _e && !xi(t.children)) : !0) ? e : null;
}
const po = (e) => e ? Bi(e) ? Bn(e) || e.proxy : po(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? Dt(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? Dt(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? Dt(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? Dt(e.refs) : e.refs,
    $parent: (e) => po(e.parent),
    $root: (e) => po(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Po(e),
    $forceUpdate: (e) => e.f || (e.f = () => Fn(e.update)),
    $nextTick: (e) => e.n || (e.n = al.bind(e.proxy)),
    $watch: (e) => jl.bind(e)
  })
), Fo = (e) => e === "_" || e === "$", Xn = (e, t) => e !== J && !e.__isScriptSetup && j(e, t), Ci = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: c, appContext: u } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const w = s[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Xn(o, t))
          return s[t] = 1, o[t];
        if (r !== J && j(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && j(a, t)
        )
          return s[t] = 3, i[t];
        if (n !== J && j(n, t))
          return s[t] = 4, n[t];
        ho && (s[t] = 0);
      }
    }
    const p = pt[t];
    let d, m;
    if (p)
      return t === "$attrs" && (he(e, "get", t), {}.NODE_ENV !== "production" && wn()), p(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== J && j(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = u.config.globalProperties, j(m, t)
    )
      return m[t];
    ({}).NODE_ENV !== "production" && se && (!ee(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== J && Fo(t[0]) && j(r, t) ? b(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === se && b(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return Xn(r, t) ? (r[t] = n, !0) : {}.NODE_ENV !== "production" && r.__isScriptSetup && j(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== J && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? ({}.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && b(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i } }, s) {
    let c;
    return !!n[s] || e !== J && j(e, s) || Xn(t, s) || (c = i[0]) && j(c, s) || j(o, s) || j(pt, s) || j(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (Ci.ownKeys = (e) => (b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Gl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ue
    });
  }), t;
}
function ec(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ue
    });
  });
}
function tc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Fo(o[0])) {
        b(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ue
      });
    }
  });
}
function nc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? b(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ho = !0;
function oc(e) {
  const t = Po(e), n = e.proxy, o = e.ctx;
  ho = !1, t.beforeCreate && lr(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: p,
    beforeMount: d,
    mounted: m,
    beforeUpdate: w,
    updated: I,
    activated: V,
    deactivated: L,
    beforeDestroy: X,
    beforeUnmount: F,
    destroyed: U,
    unmounted: R,
    render: z,
    renderTracked: Ee,
    renderTriggered: Ne,
    errorCaptured: P,
    serverPrefetch: W,
    // public API
    expose: Y,
    inheritAttrs: ie,
    // assets
    components: x,
    directives: Z,
    filters: be
  } = t, ve = {}.NODE_ENV !== "production" ? nc() : null;
  if ({}.NODE_ENV !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const B in H)
        ve("Props", B);
  }
  if (a && rc(a, o, ve, e.appContext.config.unwrapInjectedRef), s)
    for (const H in s) {
      const B = s[H];
      S(B) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, H, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[H] = B.bind(n), {}.NODE_ENV !== "production" && ve("Methods", H)) : {}.NODE_ENV !== "production" && b(`Method "${H}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    ({}).NODE_ENV !== "production" && !S(r) && b("The data option must be a function. Plain object usage is no longer supported.");
    const H = r.call(n, n);
    if ({}.NODE_ENV !== "production" && Do(H) && b("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !K(H))
      ({}).NODE_ENV !== "production" && b("data() should return an object.");
    else if (e.data = $o(H), {}.NODE_ENV !== "production")
      for (const B in H)
        ve("Data", B), Fo(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => H[B],
          set: ue
        });
  }
  if (ho = !0, i)
    for (const H in i) {
      const B = i[H], Ve = S(B) ? B.bind(n, n) : S(B.get) ? B.get.bind(n, n) : ue;
      ({}).NODE_ENV !== "production" && Ve === ue && b(`Computed property "${H}" has no getter.`);
      const Kn = !S(B) && S(B.set) ? B.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        b(`Write operation failed: computed property "${H}" is readonly.`);
      } : ue, It = kc({
        get: Ve,
        set: Kn
      });
      Object.defineProperty(o, H, {
        enumerable: !0,
        configurable: !0,
        get: () => It.value,
        set: (Nt) => It.value = Nt
      }), {}.NODE_ENV !== "production" && ve("Computed", H);
    }
  if (c)
    for (const H in c)
      Vi(c[H], o, n, H);
  if (u) {
    const H = S(u) ? u.call(n) : u;
    Reflect.ownKeys(H).forEach((B) => {
      Pl(B, H[B]);
    });
  }
  p && lr(
    p,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ce(H, B) {
    T(B) ? B.forEach((Ve) => H(Ve.bind(n))) : B && H(B.bind(n));
  }
  if (ce(Kl, d), ce(Ln, m), ce(Wl, w), ce(zl, I), ce(Hl, V), ce(Bl, L), ce(Ql, P), ce(Yl, Ee), ce(Jl, Ne), ce(vi, F), ce(wi, R), ce(ql, W), T(Y))
    if (Y.length) {
      const H = e.exposed || (e.exposed = {});
      Y.forEach((B) => {
        Object.defineProperty(H, B, {
          get: () => n[B],
          set: (Ve) => n[B] = Ve
        });
      });
    } else
      e.exposed || (e.exposed = {});
  z && e.render === ue && (e.render = z), ie != null && (e.inheritAttrs = ie), x && (e.components = x), Z && (e.directives = Z);
}
function rc(e, t, n = ue, o = !1) {
  T(e) && (e = mo(e));
  for (const r in e) {
    const i = e[r];
    let s;
    K(i) ? "default" in i ? s = pn(
      i.from || r,
      i.default,
      !0
      /* treat default function as factory */
    ) : s = pn(i.from || r) : s = pn(i), re(s) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (c) => s.value = c
    }) : ({}.NODE_ENV !== "production" && b(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = s) : t[r] = s, {}.NODE_ENV !== "production" && n("Inject", r);
  }
}
function lr(e, t, n) {
  Oe(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vi(e, t, n, o) {
  const r = o.includes(".") ? Ei(n, o) : () => n[o];
  if (ee(e)) {
    const i = t[e];
    S(i) ? hn(r, i) : {}.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e}"`, i);
  } else if (S(e))
    hn(r, e.bind(n));
  else if (K(e))
    if (T(e))
      e.forEach((i) => Vi(i, t, n, o));
    else {
      const i = S(e.handler) ? e.handler.bind(n) : t[e.handler];
      S(i) ? hn(r, i, e) : {}.NODE_ENV !== "production" && b(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    ({}).NODE_ENV !== "production" && b(`Invalid watch option: "${o}"`, e);
}
function Po(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: s } } = e.appContext, c = i.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((a) => Dn(u, a, s, !0)), Dn(u, t, s)), K(t) && i.set(t, u), u;
}
function Dn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && Dn(e, i, n, !0), r && r.forEach((s) => Dn(e, s, n, !0));
  for (const s in t)
    if (o && s === "expose")
      ({}).NODE_ENV !== "production" && b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = ic[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const ic = {
  data: cr,
  props: rt,
  emits: rt,
  // objects
  methods: rt,
  computed: rt,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: rt,
  directives: rt,
  // watch
  watch: lc,
  // provide / inject
  provide: cr,
  inject: sc
};
function cr(e, t) {
  return t ? e ? function() {
    return G(S(e) ? e.call(this, this) : e, S(t) ? t.call(this, this) : t);
  } : t : e;
}
function sc(e, t) {
  return rt(mo(e), mo(t));
}
function mo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rt(e, t) {
  return e ? G(G(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function lc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = G(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = de(e[o], t[o]);
  return n;
}
function cc(e, t, n, o = !1) {
  const r = {}, i = {};
  Nn(i, Hn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ti(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  ({}).NODE_ENV !== "production" && Ii(t || {}, r, e), n ? e.props = o ? r : Js(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function uc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function fc(e, t, n, o) {
  const { props: r, attrs: i, vnode: { patchFlag: s } } = e, c = A(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !({}.NODE_ENV !== "production" && uc(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let m = p[d];
        if (Pn(e.emitsOptions, m))
          continue;
        const w = t[m];
        if (u)
          if (j(i, m))
            w !== i[m] && (i[m] = w, a = !0);
          else {
            const I = Vt(m);
            r[I] = go(
              u,
              c,
              I,
              w,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          w !== i[m] && (i[m] = w, a = !0);
      }
    }
  } else {
    Ti(e, t, r, i) && (a = !0);
    let p;
    for (const d in c)
      (!t || // for camelCase
      !j(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Ye(d)) === d || !j(t, p))) && (u ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[p] !== void 0) && (r[d] = go(
        u,
        c,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[d]);
    if (i !== c)
      for (const d in i)
        (!t || !j(t, d)) && (delete i[d], a = !0);
  }
  a && ke(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Ii(t || {}, r, e);
}
function Ti(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let u in t) {
      if (fn(u))
        continue;
      const a = t[u];
      let p;
      r && j(r, p = Vt(u)) ? !i || !i.includes(p) ? n[p] = a : (c || (c = {}))[p] = a : Pn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, s = !0);
    }
  if (i) {
    const u = A(n), a = c || J;
    for (let p = 0; p < i.length; p++) {
      const d = i[p];
      n[d] = go(r, u, d, a[d], e, !j(a, d));
    }
  }
  return s;
}
function go(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const c = j(s, "default");
    if (c && o === void 0) {
      const u = s.default;
      if (s.type !== Function && S(u)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : ($t(r), o = a[n] = u.call(null, t), mt());
      } else
        o = u;
    }
    s[
      0
      /* BooleanFlags.shouldCast */
    ] && (i && !c ? o = !1 : s[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Ye(n)) && (o = !0));
  }
  return o;
}
function $i(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, c = [];
  let u = !1;
  if (!S(e)) {
    const p = (d) => {
      u = !0;
      const [m, w] = $i(d, t, !0);
      G(s, m), w && c.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!i && !u)
    return K(e) && o.set(e, xt), xt;
  if (T(i))
    for (let p = 0; p < i.length; p++) {
      ({}).NODE_ENV !== "production" && !ee(i[p]) && b("props must be strings when using array syntax.", i[p]);
      const d = Vt(i[p]);
      ur(d) && (s[d] = J);
    }
  else if (i) {
    ({}).NODE_ENV !== "production" && !K(i) && b("invalid props options", i);
    for (const p in i) {
      const d = Vt(p);
      if (ur(d)) {
        const m = i[p], w = s[d] = T(m) || S(m) ? { type: m } : Object.assign({}, m);
        if (w) {
          const I = ar(Boolean, w.type), V = ar(String, w.type);
          w[
            0
            /* BooleanFlags.shouldCast */
          ] = I > -1, w[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = V < 0 || I < V, (I > -1 || j(w, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [s, c];
  return K(e) && o.set(e, a), a;
}
function ur(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && b(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function _o(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function fr(e, t) {
  return _o(e) === _o(t);
}
function ar(e, t) {
  return T(t) ? t.findIndex((n) => fr(n, e)) : S(t) && fr(t, e) ? 0 : -1;
}
function Ii(e, t, n) {
  const o = A(t), r = n.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null && ac(i, o[i], s, !j(e, i) && !j(e, Ye(i)));
  }
}
function ac(e, t, n, o) {
  const { type: r, required: i, validator: s } = n;
  if (i && o) {
    b('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const u = T(r) ? r : [r], a = [];
      for (let p = 0; p < u.length && !c; p++) {
        const { valid: d, expectedType: m } = pc(t, u[p]);
        a.push(m || ""), c = d;
      }
      if (!c) {
        b(hc(e, t, a));
        return;
      }
    }
    s && !s(t) && b('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const dc = /* @__PURE__ */ Ze("String,Number,Boolean,Function,Symbol,BigInt");
function pc(e, t) {
  let n;
  const o = _o(t);
  if (dc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function hc(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map($n).join(" | ")}`;
  const r = n[0], i = xo(t), s = dr(t, r), c = dr(t, i);
  return n.length === 1 && pr(r) && !mc(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, pr(i) && (o += `with value ${c}.`), o;
}
function dr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function pr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function mc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Si = (e) => e[0] === "_" || e === "$stable", jo = (e) => T(e) ? e.map(xe) : [xe(e)], gc = (e, t, n) => {
  if (t._n)
    return t;
  const o = kt((...r) => ({}.NODE_ENV !== "production" && ne && b(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), jo(t(...r))), n);
  return o._c = !1, o;
}, Mi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Si(r))
      continue;
    const i = e[r];
    if (S(i))
      t[r] = gc(r, i, o);
    else if (i != null) {
      ({}).NODE_ENV !== "production" && b(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const s = jo(i);
      t[r] = () => s;
    }
  }
}, Ai = (e, t) => {
  ({}).NODE_ENV !== "production" && !Gt(e.vnode) && b("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = jo(t);
  e.slots.default = () => n;
}, _c = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = A(t), Nn(t, "_", n)) : Mi(t, e.slots = {});
  } else
    e.slots = {}, t && Ai(e, t);
  Nn(e.slots, Hn, 1);
}, Ec = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = J;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? {}.NODE_ENV !== "production" && dt ? G(r, t) : n && c === 1 ? i = !1 : (G(r, t), !n && c === 1 && delete r._) : (i = !t.$stable, Mi(t, r)), s = t;
  } else
    t && (Ai(e, t), s = { default: 1 });
  if (i)
    for (const c in r)
      !Si(c) && !(c in s) && delete r[c];
};
function Ri() {
  return {
    app: null,
    config: {
      isNativeTag: Pr,
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
let Nc = 0;
function bc(e, t) {
  return function(o, r = null) {
    S(o) || (o = Object.assign({}, o)), r != null && !K(r) && ({}.NODE_ENV !== "production" && b("root props passed to app.mount() must be an object."), r = null);
    const i = Ri(), s = /* @__PURE__ */ new Set();
    let c = !1;
    const u = i.app = {
      _uid: Nc++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Nr,
      get config() {
        return i.config;
      },
      set config(a) {
        ({}).NODE_ENV !== "production" && b("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...p) {
        return s.has(a) ? {}.NODE_ENV !== "production" && b("Plugin has already been applied to target app.") : a && S(a.install) ? (s.add(a), a.install(u, ...p)) : S(a) ? (s.add(a), a(u, ...p)) : {}.NODE_ENV !== "production" && b('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(a) {
        return i.mixins.includes(a) ? {}.NODE_ENV !== "production" && b("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : i.mixins.push(a), u;
      },
      component(a, p) {
        return {}.NODE_ENV !== "production" && No(a, i.config), p ? ({}.NODE_ENV !== "production" && i.components[a] && b(`Component "${a}" has already been registered in target app.`), i.components[a] = p, u) : i.components[a];
      },
      directive(a, p) {
        return {}.NODE_ENV !== "production" && Di(a), p ? ({}.NODE_ENV !== "production" && i.directives[a] && b(`Directive "${a}" has already been registered in target app.`), i.directives[a] = p, u) : i.directives[a];
      },
      mount(a, p, d) {
        if (c)
          ({}).NODE_ENV !== "production" && b("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && a.__vue_app__ && b("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const m = ge(o, r);
          return m.appContext = i, {}.NODE_ENV !== "production" && (i.reload = () => {
            e(Ae(m), a, d);
          }), p && t ? t(m, a) : e(m, a, d), c = !0, u._container = a, a.__vue_app__ = u, {}.NODE_ENV !== "production" && (u._instance = m.component, Nl(u, Nr)), Bn(m.component) || m.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), {}.NODE_ENV !== "production" && (u._instance = null, bl(u)), delete u._container.__vue_app__) : {}.NODE_ENV !== "production" && b("Cannot unmount an app that is not mounted.");
      },
      provide(a, p) {
        return {}.NODE_ENV !== "production" && a in i.provides && b(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), i.provides[a] = p, u;
      }
    };
    return u;
  };
}
function Eo(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach((m, w) => Eo(m, t && (T(t) ? t[w] : t), n, o, r));
    return;
  }
  if (Lt(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? Bn(o.component) || o.component.proxy : o.el, s = r ? null : i, { i: c, r: u } = e;
  if ({}.NODE_ENV !== "production" && !c) {
    b("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, p = c.refs === J ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== u && (ee(a) ? (p[a] = null, j(d, a) && (d[a] = null)) : re(a) && (a.value = null)), S(u))
    je(u, c, 12, [s, p]);
  else {
    const m = ee(u), w = re(u);
    if (m || w) {
      const I = () => {
        if (e.f) {
          const V = m ? j(d, u) ? d[u] : p[u] : u.value;
          r ? T(V) && wo(V, i) : T(V) ? V.includes(i) || V.push(i) : m ? (p[u] = [i], j(d, u) && (d[u] = p[u])) : (u.value = [i], e.k && (p[e.k] = u.value));
        } else
          m ? (p[u] = s, j(d, u) && (d[u] = s)) : w ? (u.value = s, e.k && (p[e.k] = s)) : {}.NODE_ENV !== "production" && b("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (I.id = -1, me(I, n)) : I();
    } else
      ({}).NODE_ENV !== "production" && b("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let At, qe;
function Fe(e, t) {
  e.appContext.config.performance && xn() && qe.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && wl(e, t, xn() ? qe.now() : Date.now());
}
function Pe(e, t) {
  if (e.appContext.config.performance && xn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    qe.mark(o), qe.measure(`<${Un(e, e.type)}> ${t}`, n, o), qe.clearMarks(n), qe.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && Dl(e, t, xn() ? qe.now() : Date.now());
}
function xn() {
  return At !== void 0 || (typeof window < "u" && window.performance ? (At = !0, qe = window.performance) : At = !1), At;
}
function yc() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const me = Fl;
function Oc(e) {
  return vc(e);
}
function vc(e, t) {
  yc();
  const n = Lr();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && di(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: i, createElement: s, createText: c, createComment: u, setText: a, setElementText: p, parentNode: d, nextSibling: m, setScopeId: w = ue, insertStaticContent: I } = e, V = (l, f, h, _ = null, g = null, y = null, v = !1, N = null, O = {}.NODE_ENV !== "production" && dt ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !it(l, f) && (_ = nn(l), He(l, g, y, !0), l = null), f.patchFlag === -2 && (O = !1, f.dynamicChildren = null);
    const { type: E, ref: C, shapeFlag: D } = f;
    switch (E) {
      case en:
        L(l, f, h, _);
        break;
      case le:
        X(l, f, h, _);
        break;
      case gn:
        l == null ? F(f, h, _, v) : {}.NODE_ENV !== "production" && U(l, f, h, v);
        break;
      case _e:
        Z(l, f, h, _, g, y, v, N, O);
        break;
      default:
        D & 1 ? Ee(l, f, h, _, g, y, v, N, O) : D & 6 ? be(l, f, h, _, g, y, v, N, O) : D & 64 || D & 128 ? E.process(l, f, h, _, g, y, v, N, O, bt) : {}.NODE_ENV !== "production" && b("Invalid VNode type:", E, `(${typeof E})`);
    }
    C != null && g && Eo(C, l && l.ref, y, f || l, !f);
  }, L = (l, f, h, _) => {
    if (l == null)
      o(f.el = c(f.children), h, _);
    else {
      const g = f.el = l.el;
      f.children !== l.children && a(g, f.children);
    }
  }, X = (l, f, h, _) => {
    l == null ? o(f.el = u(f.children || ""), h, _) : f.el = l.el;
  }, F = (l, f, h, _) => {
    [l.el, l.anchor] = I(l.children, f, h, _, l.el, l.anchor);
  }, U = (l, f, h, _) => {
    if (f.children !== l.children) {
      const g = m(l.anchor);
      z(l), [f.el, f.anchor] = I(f.children, h, g, _);
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, R = ({ el: l, anchor: f }, h, _) => {
    let g;
    for (; l && l !== f; )
      g = m(l), o(l, h, _), l = g;
    o(f, h, _);
  }, z = ({ el: l, anchor: f }) => {
    let h;
    for (; l && l !== f; )
      h = m(l), r(l), l = h;
    r(f);
  }, Ee = (l, f, h, _, g, y, v, N, O) => {
    v = v || f.type === "svg", l == null ? Ne(f, h, _, g, y, v, N, O) : Y(l, f, g, y, v, N, O);
  }, Ne = (l, f, h, _, g, y, v, N) => {
    let O, E;
    const { type: C, props: D, shapeFlag: $, transition: M, dirs: k } = l;
    if (O = l.el = s(l.type, y, D && D.is, D), $ & 8 ? p(O, l.children) : $ & 16 && W(l.children, O, null, _, g, y && C !== "foreignObject", v, N), k && Ge(l, null, _, "created"), P(O, l, l.scopeId, v, _), D) {
      for (const q in D)
        q !== "value" && !fn(q) && i(O, q, null, D[q], y, l.children, _, g, Re);
      "value" in D && i(O, "value", null, D.value), (E = D.onVnodeBeforeMount) && $e(E, _, l);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), k && Ge(l, null, _, "beforeMount");
    const Q = (!g || g && !g.pendingBranch) && M && !M.persisted;
    Q && M.beforeEnter(O), o(O, f, h), ((E = D && D.onVnodeMounted) || Q || k) && me(() => {
      E && $e(E, _, l), Q && M.enter(O), k && Ge(l, null, _, "mounted");
    }, g);
  }, P = (l, f, h, _, g) => {
    if (h && w(l, h), _)
      for (let y = 0; y < _.length; y++)
        w(l, _[y]);
    if (g) {
      let y = g.subTree;
      if ({}.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = gi(y.children) || y), f === y) {
        const v = g.vnode;
        P(l, v, v.scopeId, v.slotScopeIds, g.parent);
      }
    }
  }, W = (l, f, h, _, g, y, v, N, O = 0) => {
    for (let E = O; E < l.length; E++) {
      const C = l[E] = N ? ze(l[E]) : xe(l[E]);
      V(null, C, f, h, _, g, y, v, N);
    }
  }, Y = (l, f, h, _, g, y, v) => {
    const N = f.el = l.el;
    let { patchFlag: O, dynamicChildren: E, dirs: C } = f;
    O |= l.patchFlag & 16;
    const D = l.props || J, $ = f.props || J;
    let M;
    h && et(h, !1), (M = $.onVnodeBeforeUpdate) && $e(M, h, f, l), C && Ge(f, l, h, "beforeUpdate"), h && et(h, !0), {}.NODE_ENV !== "production" && dt && (O = 0, v = !1, E = null);
    const k = g && f.type !== "foreignObject";
    if (E ? (ie(l.dynamicChildren, E, N, h, _, k, y), {}.NODE_ENV !== "production" && h && h.type.__hmrId && mn(l, f)) : v || Ve(l, f, N, null, h, _, k, y, !1), O > 0) {
      if (O & 16)
        x(N, f, D, $, h, _, g);
      else if (O & 2 && D.class !== $.class && i(N, "class", null, $.class, g), O & 4 && i(N, "style", D.style, $.style, g), O & 8) {
        const Q = f.dynamicProps;
        for (let q = 0; q < Q.length; q++) {
          const oe = Q[q], we = D[oe], yt = $[oe];
          (yt !== we || oe === "value") && i(N, oe, we, yt, g, l.children, h, _, Re);
        }
      }
      O & 1 && l.children !== f.children && p(N, f.children);
    } else
      !v && E == null && x(N, f, D, $, h, _, g);
    ((M = $.onVnodeUpdated) || C) && me(() => {
      M && $e(M, h, f, l), C && Ge(f, l, h, "updated");
    }, _);
  }, ie = (l, f, h, _, g, y, v) => {
    for (let N = 0; N < f.length; N++) {
      const O = l[N], E = f[N], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !it(O, E) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? d(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(O, E, C, null, _, g, y, v, !0);
    }
  }, x = (l, f, h, _, g, y, v) => {
    if (h !== _) {
      if (h !== J)
        for (const N in h)
          !fn(N) && !(N in _) && i(l, N, h[N], null, v, f.children, g, y, Re);
      for (const N in _) {
        if (fn(N))
          continue;
        const O = _[N], E = h[N];
        O !== E && N !== "value" && i(l, N, E, O, v, f.children, g, y, Re);
      }
      "value" in _ && i(l, "value", h.value, _.value);
    }
  }, Z = (l, f, h, _, g, y, v, N, O) => {
    const E = f.el = l ? l.el : c(""), C = f.anchor = l ? l.anchor : c("");
    let { patchFlag: D, dynamicChildren: $, slotScopeIds: M } = f;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (dt || D & 2048) && (D = 0, O = !1, $ = null), M && (N = N ? N.concat(M) : M), l == null ? (o(E, h, _), o(C, h, _), W(f.children, h, C, g, y, v, N, O)) : D > 0 && D & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (ie(l.dynamicChildren, $, h, g, y, v, N), {}.NODE_ENV !== "production" && g && g.type.__hmrId ? mn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || g && f === g.subTree) && mn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : Ve(l, f, h, C, g, y, v, N, O);
  }, be = (l, f, h, _, g, y, v, N, O) => {
    f.slotScopeIds = N, l == null ? f.shapeFlag & 512 ? g.ctx.activate(f, h, _, v, O) : ve(f, h, _, g, y, v, O) : ce(l, f, O);
  }, ve = (l, f, h, _, g, y, v) => {
    const N = l.component = Sc(l, _, g);
    if ({}.NODE_ENV !== "production" && N.type.__hmrId && ml(N), {}.NODE_ENV !== "production" && (an(l), Fe(N, "mount")), Gt(l) && (N.ctx.renderer = bt), {}.NODE_ENV !== "production" && Fe(N, "init"), Ac(N), {}.NODE_ENV !== "production" && Pe(N, "init"), N.asyncDep) {
      if (g && g.registerDep(N, H), !l.el) {
        const O = N.subTree = ge(le);
        X(null, O, f, h);
      }
      return;
    }
    H(N, l, f, h, g, y, v), {}.NODE_ENV !== "production" && (dn(), Pe(N, "mount"));
  }, ce = (l, f, h) => {
    const _ = f.component = l.component;
    if (Ml(l, f, h))
      if (_.asyncDep && !_.asyncResolved) {
        ({}).NODE_ENV !== "production" && an(f), B(_, f, h), {}.NODE_ENV !== "production" && dn();
        return;
      } else
        _.next = f, pl(_.update), _.update();
    else
      f.el = l.el, _.vnode = f;
  }, H = (l, f, h, _, g, y, v) => {
    const N = () => {
      if (l.isMounted) {
        let { next: C, bu: D, u: $, parent: M, vnode: k } = l, Q = C, q;
        ({}).NODE_ENV !== "production" && an(C || l.vnode), et(l, !1), C ? (C.el = k.el, B(l, C, v)) : C = k, D && Ot(D), (q = C.props && C.props.onVnodeBeforeUpdate) && $e(q, M, C, k), et(l, !0), {}.NODE_ENV !== "production" && Fe(l, "render");
        const oe = Yn(l);
        ({}).NODE_ENV !== "production" && Pe(l, "render");
        const we = l.subTree;
        l.subTree = oe, {}.NODE_ENV !== "production" && Fe(l, "patch"), V(
          we,
          oe,
          // parent may have changed if it's in a teleport
          d(we.el),
          // anchor may have changed if it's in a fragment
          nn(we),
          l,
          g,
          y
        ), {}.NODE_ENV !== "production" && Pe(l, "patch"), C.el = oe.el, Q === null && Al(l, oe.el), $ && me($, g), (q = C.props && C.props.onVnodeUpdated) && me(() => $e(q, M, C, k), g), {}.NODE_ENV !== "production" && pi(l), {}.NODE_ENV !== "production" && dn();
      } else {
        let C;
        const { el: D, props: $ } = f, { bm: M, m: k, parent: Q } = l, q = Lt(f);
        if (et(l, !1), M && Ot(M), !q && (C = $ && $.onVnodeBeforeMount) && $e(C, Q, f), et(l, !0), D && qn) {
          const oe = () => {
            ({}).NODE_ENV !== "production" && Fe(l, "render"), l.subTree = Yn(l), {}.NODE_ENV !== "production" && Pe(l, "render"), {}.NODE_ENV !== "production" && Fe(l, "hydrate"), qn(D, l.subTree, l, g, null), {}.NODE_ENV !== "production" && Pe(l, "hydrate");
          };
          q ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && oe()
          ) : oe();
        } else {
          ({}).NODE_ENV !== "production" && Fe(l, "render");
          const oe = l.subTree = Yn(l);
          ({}).NODE_ENV !== "production" && Pe(l, "render"), {}.NODE_ENV !== "production" && Fe(l, "patch"), V(null, oe, h, _, l, g, y), {}.NODE_ENV !== "production" && Pe(l, "patch"), f.el = oe.el;
        }
        if (k && me(k, g), !q && (C = $ && $.onVnodeMounted)) {
          const oe = f;
          me(() => $e(C, Q, oe), g);
        }
        (f.shapeFlag & 256 || Q && Lt(Q.vnode) && Q.vnode.shapeFlag & 256) && l.a && me(l.a, g), l.isMounted = !0, {}.NODE_ENV !== "production" && yl(l), f = h = _ = null;
      }
    }, O = l.effect = new Vo(
      N,
      () => Fn(E),
      l.scope
      // track it in component's effect scope
    ), E = l.update = () => O.run();
    E.id = l.uid, et(l, !0), {}.NODE_ENV !== "production" && (O.onTrack = l.rtc ? (C) => Ot(l.rtc, C) : void 0, O.onTrigger = l.rtg ? (C) => Ot(l.rtg, C) : void 0, E.ownerInstance = l), E();
  }, B = (l, f, h) => {
    f.component = l;
    const _ = l.vnode.props;
    l.vnode = f, l.next = null, fc(l, f.props, _, h), Ec(l, f.children, h), _t(), nr(), Et();
  }, Ve = (l, f, h, _, g, y, v, N, O = !1) => {
    const E = l && l.children, C = l ? l.shapeFlag : 0, D = f.children, { patchFlag: $, shapeFlag: M } = f;
    if ($ > 0) {
      if ($ & 128) {
        It(E, D, h, _, g, y, v, N, O);
        return;
      } else if ($ & 256) {
        Kn(E, D, h, _, g, y, v, N, O);
        return;
      }
    }
    M & 8 ? (C & 16 && Re(E, g, y), D !== E && p(h, D)) : C & 16 ? M & 16 ? It(E, D, h, _, g, y, v, N, O) : Re(E, g, y, !0) : (C & 8 && p(h, ""), M & 16 && W(D, h, _, g, y, v, N, O));
  }, Kn = (l, f, h, _, g, y, v, N, O) => {
    l = l || xt, f = f || xt;
    const E = l.length, C = f.length, D = Math.min(E, C);
    let $;
    for ($ = 0; $ < D; $++) {
      const M = f[$] = O ? ze(f[$]) : xe(f[$]);
      V(l[$], M, h, null, g, y, v, N, O);
    }
    E > C ? Re(l, g, y, !0, !1, D) : W(f, h, _, g, y, v, N, O, D);
  }, It = (l, f, h, _, g, y, v, N, O) => {
    let E = 0;
    const C = f.length;
    let D = l.length - 1, $ = C - 1;
    for (; E <= D && E <= $; ) {
      const M = l[E], k = f[E] = O ? ze(f[E]) : xe(f[E]);
      if (it(M, k))
        V(M, k, h, null, g, y, v, N, O);
      else
        break;
      E++;
    }
    for (; E <= D && E <= $; ) {
      const M = l[D], k = f[$] = O ? ze(f[$]) : xe(f[$]);
      if (it(M, k))
        V(M, k, h, null, g, y, v, N, O);
      else
        break;
      D--, $--;
    }
    if (E > D) {
      if (E <= $) {
        const M = $ + 1, k = M < C ? f[M].el : _;
        for (; E <= $; )
          V(null, f[E] = O ? ze(f[E]) : xe(f[E]), h, k, g, y, v, N, O), E++;
      }
    } else if (E > $)
      for (; E <= D; )
        He(l[E], g, y, !0), E++;
    else {
      const M = E, k = E, Q = /* @__PURE__ */ new Map();
      for (E = k; E <= $; E++) {
        const ae = f[E] = O ? ze(f[E]) : xe(f[E]);
        ae.key != null && ({}.NODE_ENV !== "production" && Q.has(ae.key) && b("Duplicate keys found during update:", JSON.stringify(ae.key), "Make sure keys are unique."), Q.set(ae.key, E));
      }
      let q, oe = 0;
      const we = $ - k + 1;
      let yt = !1, Uo = 0;
      const St = new Array(we);
      for (E = 0; E < we; E++)
        St[E] = 0;
      for (E = M; E <= D; E++) {
        const ae = l[E];
        if (oe >= we) {
          He(ae, g, y, !0);
          continue;
        }
        let Te;
        if (ae.key != null)
          Te = Q.get(ae.key);
        else
          for (q = k; q <= $; q++)
            if (St[q - k] === 0 && it(ae, f[q])) {
              Te = q;
              break;
            }
        Te === void 0 ? He(ae, g, y, !0) : (St[Te - k] = E + 1, Te >= Uo ? Uo = Te : yt = !0, V(ae, f[Te], h, null, g, y, v, N, O), oe++);
      }
      const Ko = yt ? wc(St) : xt;
      for (q = Ko.length - 1, E = we - 1; E >= 0; E--) {
        const ae = k + E, Te = f[ae], Wo = ae + 1 < C ? f[ae + 1].el : _;
        St[E] === 0 ? V(null, Te, h, Wo, g, y, v, N, O) : yt && (q < 0 || E !== Ko[q] ? Nt(
          Te,
          h,
          Wo,
          2
          /* MoveType.REORDER */
        ) : q--);
      }
    }
  }, Nt = (l, f, h, _, g = null) => {
    const { el: y, type: v, transition: N, children: O, shapeFlag: E } = l;
    if (E & 6) {
      Nt(l.component.subTree, f, h, _);
      return;
    }
    if (E & 128) {
      l.suspense.move(f, h, _);
      return;
    }
    if (E & 64) {
      v.move(l, f, h, bt);
      return;
    }
    if (v === _e) {
      o(y, f, h);
      for (let D = 0; D < O.length; D++)
        Nt(O[D], f, h, _);
      o(l.anchor, f, h);
      return;
    }
    if (v === gn) {
      R(l, f, h);
      return;
    }
    if (_ !== 2 && E & 1 && N)
      if (_ === 0)
        N.beforeEnter(y), o(y, f, h), me(() => N.enter(y), g);
      else {
        const { leave: D, delayLeave: $, afterLeave: M } = N, k = () => o(y, f, h), Q = () => {
          D(y, () => {
            k(), M && M();
          });
        };
        $ ? $(y, k, Q) : Q();
      }
    else
      o(y, f, h);
  }, He = (l, f, h, _ = !1, g = !1) => {
    const { type: y, props: v, ref: N, children: O, dynamicChildren: E, shapeFlag: C, patchFlag: D, dirs: $ } = l;
    if (N != null && Eo(N, null, h, l, !0), C & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const M = C & 1 && $, k = !Lt(l);
    let Q;
    if (k && (Q = v && v.onVnodeBeforeUnmount) && $e(Q, f, l), C & 6)
      Zi(l.component, h, _);
    else {
      if (C & 128) {
        l.suspense.unmount(h, _);
        return;
      }
      M && Ge(l, null, f, "beforeUnmount"), C & 64 ? l.type.remove(l, f, h, g, bt, _) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== _e || D > 0 && D & 64) ? Re(E, f, h, !1, !0) : (y === _e && D & 384 || !g && C & 16) && Re(O, f, h), _ && Wn(l);
    }
    (k && (Q = v && v.onVnodeUnmounted) || M) && me(() => {
      Q && $e(Q, f, l), M && Ge(l, null, f, "unmounted");
    }, h);
  }, Wn = (l) => {
    const { type: f, el: h, anchor: _, transition: g } = l;
    if (f === _e) {
      ({}).NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && g && !g.persisted ? l.children.forEach((v) => {
        v.type === le ? r(v.el) : Wn(v);
      }) : Xi(h, _);
      return;
    }
    if (f === gn) {
      z(l);
      return;
    }
    const y = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: N } = g, O = () => v(h, y);
      N ? N(l.el, y, O) : O();
    } else
      y();
  }, Xi = (l, f) => {
    let h;
    for (; l !== f; )
      h = m(l), r(l), l = h;
    r(f);
  }, Zi = (l, f, h) => {
    ({}).NODE_ENV !== "production" && l.type.__hmrId && gl(l);
    const { bum: _, scope: g, update: y, subTree: v, um: N } = l;
    _ && Ot(_), g.stop(), y && (y.active = !1, He(v, l, f, h)), N && me(N, f), me(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), {}.NODE_ENV !== "production" && vl(l);
  }, Re = (l, f, h, _ = !1, g = !1, y = 0) => {
    for (let v = y; v < l.length; v++)
      He(l[v], f, h, _, g);
  }, nn = (l) => l.shapeFlag & 6 ? nn(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : m(l.anchor || l.el), Bo = (l, f, h) => {
    l == null ? f._vnode && He(f._vnode, null, null, !0) : V(f._vnode || null, l, f, null, null, null, h), nr(), ui(), f._vnode = l;
  }, bt = {
    p: V,
    um: He,
    m: Nt,
    r: Wn,
    mt: ve,
    mc: W,
    pc: Ve,
    pbc: ie,
    n: nn,
    o: e
  };
  let zn, qn;
  return t && ([zn, qn] = t(bt)), {
    render: Bo,
    hydrate: zn,
    createApp: bc(Bo, zn)
  };
}
function et({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function mn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = ze(r[i]), c.el = s.el), n || mn(s, c)), c.type === en && (c.el = s.el), {}.NODE_ENV !== "production" && c.type === le && !c.el && (c.el = s.el);
    }
}
function wc(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        c = i + s >> 1, e[n[c]] < a ? i = c + 1 : s = c;
      a < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
const Dc = (e) => e.__isTeleport, _e = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), en = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), le = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), gn = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Ht = [];
let Ce = null;
function ht(e = !1) {
  Ht.push(Ce = e ? null : []);
}
function xc() {
  Ht.pop(), Ce = Ht[Ht.length - 1] || null;
}
let Jt = 1;
function hr(e) {
  Jt += e;
}
function Fi(e) {
  return e.dynamicChildren = Jt > 0 ? Ce || xt : null, xc(), Jt > 0 && Ce && Ce.push(e), e;
}
function mr(e, t, n, o, r, i) {
  return Fi(te(
    e,
    t,
    n,
    o,
    r,
    i,
    !0
    /* isBlock */
  ));
}
function tn(e, t, n, o, r) {
  return Fi(ge(
    e,
    t,
    n,
    o,
    r,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Tt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function it(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && vt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Cc = (...e) => ji(...e), Hn = "__vInternal", Pi = ({ key: e }) => e ?? null, _n = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || re(e) || S(e) ? { i: se, r: e, k: t, f: !!n } : e : null;
function te(e, t = null, n = null, o = 0, r = null, i = e === _e ? 0 : 1, s = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pi(t),
    ref: t && _n(t),
    scopeId: jn,
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
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: se
  };
  return c ? (ko(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= ee(n) ? 8 : 16), {}.NODE_ENV !== "production" && u.key !== u.key && b("VNode created with invalid key (NaN). VNode type:", u.type), Jt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ce.push(u), u;
}
const ge = {}.NODE_ENV !== "production" ? Cc : ji;
function ji(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Zl) && ({}.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = le), Tt(e)) {
    const c = Ae(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ko(c, n), Jt > 0 && !i && Ce && (c.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = c : Ce.push(c)), c.patchFlag |= -2, c;
  }
  if (zi(e) && (e = e.__vccOpts), t) {
    t = Vc(t);
    let { class: c, style: u } = t;
    c && !ee(c) && (t.class = vo(c)), K(u) && (On(u) && !T(u) && (u = G({}, u)), t.style = Oo(u));
  }
  const s = ee(e) ? 1 : Rl(e) ? 128 : Dc(e) ? 64 : K(e) ? 4 : S(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && s & 4 && On(e) && (e = A(e), b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), te(e, t, n, o, r, s, i, !0);
}
function Vc(e) {
  return e ? On(e) || Hn in e ? G({}, e) : e : null;
}
function Ae(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e, c = t ? Tc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Pi(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(_n(t)) : [r, _n(t)] : _n(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && i === -1 && T(s) ? s.map(ki) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Ae(e.ssContent),
    ssFallback: e.ssFallback && Ae(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function ki(e) {
  const t = Ae(e);
  return T(e.children) && (t.children = e.children.map(ki)), t;
}
function Li(e = " ", t = 0) {
  return ge(en, null, e, t);
}
function gr(e = "", t = !1) {
  return t ? (ht(), tn(le, null, e)) : ge(le, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? ge(le) : T(e) ? ge(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ze(e) : ge(en, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ae(e);
}
function ko(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ko(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Hn in t) ? t._ctx = se : r === 3 && se && (se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    S(t) ? (t = { default: t, _ctx: se }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Li(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Tc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = vo([t.class, o.class]));
      else if (r === "style")
        t.style = Oo([t.style, o.style]);
      else if (Qt(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(T(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function $e(e, t, n, o = null) {
  Oe(e, t, 7, [
    n,
    o
  ]);
}
const $c = Ri();
let Ic = 0;
function Sc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || $c, i = {
    uid: Ic++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new _s(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: $i(o, r),
    emitsOptions: mi(o, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: J,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: J,
    data: J,
    props: J,
    attrs: J,
    slots: J,
    refs: J,
    setupState: J,
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
  return {}.NODE_ENV !== "production" ? i.ctx = Gl(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Cl.bind(null, i), e.ce && e.ce(i), i;
}
let ne = null;
const Hi = () => ne || se, $t = (e) => {
  ne = e, e.scope.on();
}, mt = () => {
  ne && ne.scope.off(), ne = null;
}, Mc = /* @__PURE__ */ Ze("slot,component");
function No(e, t) {
  const n = t.isNativeTag || Pr;
  (Mc(e) || n(e)) && b("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Bi(e) {
  return e.vnode.shapeFlag & 4;
}
let Yt = !1;
function Ac(e, t = !1) {
  Yt = t;
  const { props: n, children: o } = e.vnode, r = Bi(e);
  cc(e, n, r, t), _c(e, o);
  const i = r ? Rc(e, t) : void 0;
  return Yt = !1, i;
}
function Rc(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && No(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        No(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        Di(i[s]);
    }
    o.compilerOptions && Ui() && b('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ei(new Proxy(e.ctx, Ci)), {}.NODE_ENV !== "production" && ec(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? Fc(e) : null;
    $t(e), _t();
    const s = je(r, e, 0, [{}.NODE_ENV !== "production" ? Dt(e.props) : e.props, i]);
    if (Et(), mt(), Do(s)) {
      if (s.then(mt, mt), t)
        return s.then((c) => {
          _r(e, c, t);
        }).catch((c) => {
          Rn(
            c,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = s, {}.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        b(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      _r(e, s, t);
  } else
    Ki(e, t);
}
function _r(e, t, n) {
  S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? ({}.NODE_ENV !== "production" && Tt(t) && b("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = oi(t), {}.NODE_ENV !== "production" && tc(e)) : {}.NODE_ENV !== "production" && t !== void 0 && b(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ki(e, n);
}
let bo;
const Ui = () => !bo;
function Ki(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && bo && !o.render) {
      const r = o.template || Po(e).template;
      if (r) {
        ({}).NODE_ENV !== "production" && Fe(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, a = G(G({
          isCustomElement: i,
          delimiters: c
        }, s), u);
        o.render = bo(r, a), {}.NODE_ENV !== "production" && Pe(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  $t(e), _t(), oc(e), Et(), mt(), {}.NODE_ENV !== "production" && !o.render && e.render === ue && !t && (o.template ? b(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : b("Component is missing template or render function."));
}
function Er(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(t, n) {
      return wn(), he(e, "get", "$attrs"), t[n];
    },
    set() {
      return b("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return b("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return he(e, "get", "$attrs"), t[n];
    }
  });
}
function Fc(e) {
  const t = (o) => {
    if ({}.NODE_ENV !== "production" && (e.exposed && b("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (T(o) ? r = "array" : re(o) && (r = "ref")), r !== "object" && b(`expose() should be passed a plain object, received ${r}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Er(e));
    },
    get slots() {
      return Dt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Er(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(oi(ei(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in pt)
          return pt[n](e);
      },
      has(t, n) {
        return n in t || n in pt;
      }
    }));
}
const Pc = /(?:^|[-_])(\w)/g, jc = (e) => e.replace(Pc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Wi(e, t = !0) {
  return S(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Un(e, t, n = !1) {
  let o = Wi(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? jc(o) : n ? "App" : "Anonymous";
}
function zi(e) {
  return S(e) && "__vccOpts" in e;
}
const kc = (e, t) => ol(e, t, Yt);
function Lc(e, t, n) {
  const o = arguments.length;
  return o === 2 ? K(t) && !T(t) ? Tt(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Tt(n) && (n = [n]), ge(e, t, n));
}
const Hc = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), Bc = () => {
  {
    const e = pn(Hc);
    return e || {}.NODE_ENV !== "production" && b("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Zn(e) {
  return !!(e && e.__v_isShallow);
}
function Uc() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return K(d) ? d.__isVue ? ["div", e, "VueInstance"] : re(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        c(d.value),
        ">"
      ] : ft(d) ? [
        "div",
        {},
        ["span", e, Zn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Xe(d) ? " (readonly)" : ""}`
      ] : Xe(d) ? [
        "div",
        {},
        ["span", e, Zn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const m = [];
    d.type.props && d.props && m.push(s("props", A(d.props))), d.setupState !== J && m.push(s("setup", d.setupState)), d.data !== J && m.push(s("data", A(d.data)));
    const w = u(d, "computed");
    w && m.push(s("computed", w));
    const I = u(d, "inject");
    return I && m.push(s("injected", I)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), m;
  }
  function s(d, m) {
    return m = G({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          c(m[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : K(d) ? ["object", { object: m ? A(d) : d }] : ["span", n, String(d)];
  }
  function u(d, m) {
    const w = d.type;
    if (S(w))
      return;
    const I = {};
    for (const V in d.ctx)
      a(w, V, m) && (I[V] = d.ctx[V]);
    return I;
  }
  function a(d, m, w) {
    const I = d[w];
    if (T(I) && I.includes(m) || K(I) && m in I || d.extends && a(d.extends, m, w) || d.mixins && d.mixins.some((V) => a(V, m, w)))
      return !0;
  }
  function p(d) {
    return Zn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Nr = "3.2.47", Kc = "http://www.w3.org/2000/svg", st = typeof document < "u" ? document : null, br = st && /* @__PURE__ */ st.createElement("template"), Wc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? st.createElementNS(Kc, e) : st.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      br.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = br.content;
      if (o) {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function zc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function qc(e, t, n) {
  const o = e.style, r = ee(n);
  if (n && !r) {
    if (t && !ee(t))
      for (const i in t)
        n[i] == null && yo(o, i, "");
    for (const i in n)
      yo(o, i, n[i]);
  } else {
    const i = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = i);
  }
}
const Jc = /[^\\];\s*$/, yr = /\s*!important$/;
function yo(e, t, n) {
  if (T(n))
    n.forEach((o) => yo(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && Jc.test(n) && b(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Yc(e, t);
    yr.test(n) ? e.setProperty(Ye(o), n.replace(yr, ""), "important") : e[o] = n;
  }
}
const Or = ["Webkit", "Moz", "ms"], Gn = {};
function Yc(e, t) {
  const n = Gn[t];
  if (n)
    return n;
  let o = Vt(t);
  if (o !== "filter" && o in e)
    return Gn[t] = o;
  o = $n(o);
  for (let r = 0; r < Or.length; r++) {
    const i = Or[r] + o;
    if (i in e)
      return Gn[t] = i;
  }
  return t;
}
const vr = "http://www.w3.org/1999/xlink";
function Qc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(vr, t.slice(6, t.length)) : e.setAttributeNS(vr, t, n);
  else {
    const i = cs(t);
    n == null || i && !Ar(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function Xc(e, t, n, o, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, r, i), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const u = n ?? "";
    (e.value !== u || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Ar(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    ({}).NODE_ENV !== "production" && !c && b(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  c && e.removeAttribute(t);
}
function qi(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Zc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Gc(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}), s = i[t];
  if (o && s)
    s.value = o;
  else {
    const [c, u] = eu(t);
    if (o) {
      const a = i[t] = ou(o, r);
      qi(e, c, a, u);
    } else
      s && (Zc(e, c, s, u), i[t] = void 0);
  }
}
const wr = /(?:Once|Passive|Capture)$/;
function eu(e) {
  let t;
  if (wr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(wr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let eo = 0;
const tu = /* @__PURE__ */ Promise.resolve(), nu = () => eo || (tu.then(() => eo = 0), eo = Date.now());
function ou(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Oe(ru(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = nu(), n;
}
function ru(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Dr = /^on[a-z]/, iu = (e, t, n, o, r = !1, i, s, c, u) => {
  t === "class" ? zc(e, o, r) : t === "style" ? qc(e, n, o) : Qt(t) ? En(t) || Gc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : su(e, t, o, r)) ? Xc(e, t, o, i, s, c, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Qc(e, t, o, r));
};
function su(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Dr.test(t) && S(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Dr.test(t) && ee(n) ? !1 : t in e;
}
const Ue = "transition", Rt = "animation", Lo = (e, { slots: t }) => Lc(Ni, lu(e), t);
Lo.displayName = "Transition";
const Ji = {
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
Lo.props = /* @__PURE__ */ G({}, Ni.props, Ji);
const tt = (e, t = []) => {
  T(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, xr = (e) => e ? T(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function lu(e) {
  const t = {};
  for (const x in e)
    x in Ji || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: o, duration: r, enterFromClass: i = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: c = `${n}-enter-to`, appearFromClass: u = i, appearActiveClass: a = s, appearToClass: p = c, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: w = `${n}-leave-to` } = e, I = cu(r), V = I && I[0], L = I && I[1], { onBeforeEnter: X, onEnter: F, onEnterCancelled: U, onLeave: R, onLeaveCancelled: z, onBeforeAppear: Ee = X, onAppear: Ne = F, onAppearCancelled: P = U } = t, W = (x, Z, be) => {
    nt(x, Z ? p : c), nt(x, Z ? a : s), be && be();
  }, Y = (x, Z) => {
    x._isLeaving = !1, nt(x, d), nt(x, w), nt(x, m), Z && Z();
  }, ie = (x) => (Z, be) => {
    const ve = x ? Ne : F, ce = () => W(Z, x, be);
    tt(ve, [Z, ce]), Cr(() => {
      nt(Z, x ? u : i), Ke(Z, x ? p : c), xr(ve) || Vr(Z, o, V, ce);
    });
  };
  return G(t, {
    onBeforeEnter(x) {
      tt(X, [x]), Ke(x, i), Ke(x, s);
    },
    onBeforeAppear(x) {
      tt(Ee, [x]), Ke(x, u), Ke(x, a);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(x, Z) {
      x._isLeaving = !0;
      const be = () => Y(x, Z);
      Ke(x, d), au(), Ke(x, m), Cr(() => {
        x._isLeaving && (nt(x, d), Ke(x, w), xr(R) || Vr(x, o, L, be));
      }), tt(R, [x, be]);
    },
    onEnterCancelled(x) {
      W(x, !1), tt(U, [x]);
    },
    onAppearCancelled(x) {
      W(x, !0), tt(P, [x]);
    },
    onLeaveCancelled(x) {
      Y(x), tt(z, [x]);
    }
  });
}
function cu(e) {
  if (e == null)
    return null;
  if (K(e))
    return [to(e.enter), to(e.leave)];
  {
    const t = to(e);
    return [t, t];
  }
}
function to(e) {
  const t = gs(e);
  return {}.NODE_ENV !== "production" && cl(t, "<transition> explicit duration"), t;
}
function Ke(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function nt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Cr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let uu = 0;
function Vr(e, t, n, o) {
  const r = e._endId = ++uu, i = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(i, n);
  const { type: s, timeout: c, propCount: u } = fu(e, t);
  if (!s)
    return o();
  const a = s + "end";
  let p = 0;
  const d = () => {
    e.removeEventListener(a, m), i();
  }, m = (w) => {
    w.target === e && ++p >= u && d();
  };
  setTimeout(() => {
    p < u && d();
  }, c + 1), e.addEventListener(a, m);
}
function fu(e, t) {
  const n = window.getComputedStyle(e), o = (I) => (n[I] || "").split(", "), r = o(`${Ue}Delay`), i = o(`${Ue}Duration`), s = Tr(r, i), c = o(`${Rt}Delay`), u = o(`${Rt}Duration`), a = Tr(c, u);
  let p = null, d = 0, m = 0;
  t === Ue ? s > 0 && (p = Ue, d = s, m = i.length) : t === Rt ? a > 0 && (p = Rt, d = a, m = u.length) : (d = Math.max(s, a), p = d > 0 ? s > a ? Ue : Rt : null, m = p ? p === Ue ? i.length : u.length : 0);
  const w = p === Ue && /\b(transform|all)(,|$)/.test(o(`${Ue}Property`).toString());
  return {
    type: p,
    timeout: d,
    propCount: m,
    hasTransform: w
  };
}
function Tr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => $r(n) + $r(e[o])));
}
function $r(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function au() {
  return document.body.offsetHeight;
}
const Ir = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return T(t) ? (n) => Ot(t, n) : t;
}, du = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = Ir(n), qi(e, "change", () => {
      const o = e._modelValue, r = pu(e), i = e.checked, s = e._assign;
      if (T(o)) {
        const c = Rr(o, r), u = c !== -1;
        if (i && !u)
          s(o.concat(r));
        else if (!i && u) {
          const a = [...o];
          a.splice(c, 1), s(a);
        }
      } else if (Vn(o)) {
        const c = new Set(o);
        i ? c.add(r) : c.delete(r), s(c);
      } else
        s(Yi(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Sr,
  beforeUpdate(e, t, n) {
    e._assign = Ir(n), Sr(e, t, n);
  }
};
function Sr(e, { value: t, oldValue: n }, o) {
  e._modelValue = t, T(t) ? e.checked = Rr(t, o.props.value) > -1 : Vn(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = Cn(t, Yi(e, !0)));
}
function pu(e) {
  return "_value" in e ? e._value : e.value;
}
function Yi(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const hu = ["ctrl", "shift", "alt", "meta"], mu = {
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
  exact: (e, t) => hu.some((n) => e[`${n}Key`] && !t.includes(n))
}, gu = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const i = mu[t[r]];
    if (i && i(n, t))
      return;
  }
  return e(n, ...o);
}, _u = /* @__PURE__ */ G({ patchProp: iu }, Wc);
let Mr;
function Eu() {
  return Mr || (Mr = Oc(_u));
}
const Nu = (...e) => {
  const t = Eu().createApp(...e);
  ({}).NODE_ENV !== "production" && (bu(t), yu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Ou(o);
    if (!r)
      return;
    const i = t._component;
    !S(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const s = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function bu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => is(t) || ss(t),
    writable: !1
  });
}
function yu(e) {
  if (Ui()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        b("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return b(o), n;
      },
      set() {
        b(o);
      }
    });
  }
}
function Ou(e) {
  if (ee(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && b(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && b('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function vu() {
  Uc();
}
({}).NODE_ENV !== "production" && vu();
const Qi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, wu = ["onClick"], Du = { "data-dialog": "" }, xu = { "data-content": "" }, Cu = { "data-header": "" }, Vu = { "data-body": "" }, Tu = { "data-footer": "" }, $u = ["innerHTML"], Iu = ["innerHTML"], Su = {
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
    const o = e, r = Object.freeze({
      OK: 1,
      CANCEL: 0,
      ERROR: -1
    }), i = so(!1), { visible: s } = Gs(o);
    let c = null;
    Ln(() => {
      c = Hi();
    }), hn(
      s,
      function(F) {
        F === !0 ? p() : d();
      },
      { immediate: !0 }
    );
    let u, a = null;
    function p() {
      return i.value || (i.value = !0, n("show", c)), new Promise((U, R) => {
        u = U, a = R;
      });
    }
    function d(F = r.CANCEL) {
      if (i.value && (i.value = !1, n("hide", c, F), !(!u || !a))) {
        switch (F) {
          case r.OK:
            u(!0);
            break;
          case r.CANCEL:
            u(!1);
            break;
          case r.ERROR:
            a(!0);
            break;
        }
        u = a = null;
      }
    }
    function m() {
      return i ? d() : p();
    }
    function w() {
      d(r.CANCEL);
    }
    function I(F) {
      o.disableOutsideClick || w();
    }
    function V(F) {
      w();
    }
    function L(F) {
      w();
    }
    function X(F) {
      d(r.OK);
    }
    return t({ show: p, hide: d, toggle: m }), (F, U) => (ht(), tn(Lo, null, {
      default: kt(() => [
        i.value ? (ht(), mr("div", {
          key: 0,
          "data-modal": "",
          onClick: gu(I, ["self"])
        }, [
          te("div", Du, [
            te("div", xu, [
              te("div", Cu, [
                Mt(F.$slots, "header", {}, () => [
                  te("p", null, zo(e.title), 1)
                ], !0),
                te("span", {
                  "data-close": "",
                  onClick: V
                }, "×")
              ]),
              te("div", Vu, [
                Mt(F.$slots, "default", {}, () => [
                  Li(zo(e.body), 1)
                ], !0)
              ]),
              te("div", Tu, [
                Mt(F.$slots, "footer", {
                  data: { onCancelClicked: L, onOkClicked: X }
                }, () => [
                  Mt(F.$slots, "secondary-button", {}, () => [
                    e.hideCancel ? gr("", !0) : (ht(), mr("button", {
                      key: 0,
                      class: "btn btn-sm btn-secondary",
                      type: "button",
                      "data-button-cancel": "",
                      onClick: L,
                      innerHTML: e.cancelText
                    }, null, 8, $u))
                  ], !0),
                  Mt(F.$slots, "primary-button", {}, () => [
                    te("button", {
                      class: "btn btn-sm btn-primary",
                      type: "button",
                      "data-button-ok": "",
                      onClick: X,
                      innerHTML: e.okText
                    }, null, 8, Iu)
                  ], !0)
                ], !0)
              ])
            ])
          ])
        ], 8, wu)) : gr("", !0)
      ]),
      _: 3
    }));
  }
}, Mu = /* @__PURE__ */ Qi(Su, [["__scopeId", "data-v-bb8c632e"]]);
const Ho = (e) => (Vl("data-v-272e0f91"), e = e(), Tl(), e), Au = /* @__PURE__ */ Ho(() => /* @__PURE__ */ te("span", { class: "modal-title" }, "Attenzione", -1)), Ru = /* @__PURE__ */ Ho(() => /* @__PURE__ */ te("div", null, [
  /* @__PURE__ */ te("p", null, "È online una nuova versione della risorsa."),
  /* @__PURE__ */ te("p", null, "Queste pagine saranno dismesse prossimamente.")
], -1)), Fu = { class: "footer" }, Pu = { class: "left-footer" }, ju = /* @__PURE__ */ Ho(() => /* @__PURE__ */ te("label", { for: "rememberMe" }, "non mostrare di nuovo", -1)), ku = { class: "right-footer" }, Lu = ["onClick"], Hu = {
  __name: "ModalWarning",
  setup(e) {
    const t = so(), n = so(!1), o = "https://battesimi.duomo.firenze.it";
    function r() {
      location.href = o;
    }
    function i() {
      n.value === !0 && localStorage.setItem("do-not-show-again", !0);
    }
    function s() {
      return localStorage.getItem("do-not-show-again") !== "true";
    }
    return Ln(async () => {
      if (s()) {
        if (await t.value.show() === !1)
          return;
        i();
      }
    }), (c, u) => (ht(), tn(Mu, {
      ref_key: "myModal",
      ref: t
    }, {
      header: kt(() => [
        Au
      ]),
      footer: kt(({ data: { onCancelClicked: a, onOkClicked: p } }) => [
        te("div", Fu, [
          te("div", Pu, [
            Xl(te("input", {
              type: "checkbox",
              name: "rememberMe",
              id: "rememberMe",
              "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d)
            }, null, 512), [
              [du, n.value]
            ]),
            ju
          ]),
          te("div", ku, [
            te("button", {
              type: "button",
              class: "btn btn-secondary btn-sm",
              onClick: p
            }, "Ok", 8, Lu),
            te("button", {
              type: "button",
              class: "btn btn-primary btn-sm",
              onClick: r
            }, "Scopri il nuovo sito")
          ])
        ])
      ]),
      default: kt(() => [
        Ru
      ]),
      _: 1
    }, 512));
  }
}, Bu = /* @__PURE__ */ Qi(Hu, [["__scopeId", "data-v-272e0f91"]]), Uu = {
  __name: "App",
  setup(e) {
    return (t, n) => (ht(), tn(Bu));
  }
};
Nu(Uu).mount("#app");
