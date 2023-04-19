function Ze(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function yo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ee(o) ? ni(o) : yo(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ee(e))
      return e;
    if (K(e))
      return e;
  }
}
const Gs = /;(?![^(]*\))/g, ei = /:([^]+)/, ti = /\/\*.*?\*\//gs;
function ni(e) {
  const t = {};
  return e.replace(ti, "").split(Gs).forEach((n) => {
    if (n) {
      const o = n.split(ei);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Oo(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Oo(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const oi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ri = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", si = /* @__PURE__ */ Ze(oi), ii = /* @__PURE__ */ Ze(ri), ci = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", li = /* @__PURE__ */ Ze(ci);
function Ar(e) {
  return !!e || e === "";
}
function ui(e, t) {
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
    return n && o ? ui(e, t) : !1;
  if (n = K(e), o = K(t), n || o) {
    if (!n || !o)
      return !1;
    const r = Object.keys(e).length, s = Object.keys(t).length;
    if (r !== s)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (l && !u || !l && u || !Cn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Rr(e, t) {
  return e.findIndex((n) => Cn(n, t));
}
const zo = (e) => ee(e) ? e : e == null ? "" : T(e) || K(e) && (e.toString === jr || !S(e.toString)) ? JSON.stringify(e, Fr, 2) : String(e), Fr = (e, t) => t && t.__v_isRef ? Fr(e, t.value) : lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Vn(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : K(t) && !T(t) && !kr(t) ? String(t) : t, J = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, Pr = () => !1, fi = /^on[^a-z]/, Qt = (e) => fi.test(e), En = (e) => e.startsWith("onUpdate:"), G = Object.assign, wo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ai = Object.prototype.hasOwnProperty, j = (e, t) => ai.call(e, t), T = Array.isArray, lt = (e) => Xt(e) === "[object Map]", Vn = (e) => Xt(e) === "[object Set]", qo = (e) => Xt(e) === "[object Date]", S = (e) => typeof e == "function", ee = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Do = (e) => K(e) && S(e.then) && S(e.catch), jr = Object.prototype.toString, Xt = (e) => jr.call(e), xo = (e) => Xt(e).slice(8, -1), kr = (e) => Xt(e) === "[object Object]", Co = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ Ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), di = /* @__PURE__ */ Ze("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pi = /-(\w)/g, Vt = Tn((e) => e.replace(pi, (t, n) => n ? n.toUpperCase() : "")), hi = /\B([A-Z])/g, Ye = Tn((e) => e.replace(hi, "-$1").toLowerCase()), $n = Tn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ot = Tn((e) => e ? `on${$n(e)}` : ""), Ut = (e, t) => !Object.is(e, t), yt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Nn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, mi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, gi = (e) => {
  const t = ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Jo;
const Lr = () => Jo || (Jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function no(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class _i {
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
      process.env.NODE_ENV !== "production" && no("cannot run an inactive effect scope.");
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
function Ei(e, t = De) {
  t && t.active && t.effects.push(e);
}
function Ni() {
  return De;
}
const Kt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Hr = (e) => (e.w & Qe) > 0, Br = (e) => (e.n & Qe) > 0, vi = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Qe;
}, bi = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Hr(r) && !Br(r) ? r.delete(e) : t[n++] = r, r.w &= ~Qe, r.n &= ~Qe;
    }
    t.length = n;
  }
}, vn = /* @__PURE__ */ new WeakMap();
let Ft = 0, Qe = 1;
const oo = 30;
let pe;
const ut = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), ro = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Vo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ei(this, o);
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
      return this.parent = pe, pe = this, Je = !0, Qe = 1 << ++Ft, Ft <= oo ? vi(this) : Yo(this), this.fn();
    } finally {
      Ft <= oo && bi(this), Qe = 1 << --Ft, pe = this.parent, Je = n, this.parent = void 0, this.deferStop && this.stop();
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
    let o = vn.get(e);
    o || vn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Kt());
    const s = process.env.NODE_ENV !== "production" ? { effect: pe, target: e, type: t, key: n } : void 0;
    so(r, s);
  }
}
function so(e, t) {
  let n = !1;
  Ft <= oo ? Br(e) || (e.n |= Qe, n = !Hr(e)) : n = !e.has(pe), n && (e.add(pe), pe.deps.push(e), process.env.NODE_ENV !== "production" && pe.onTrack && pe.onTrack(Object.assign({ effect: pe }, t)));
}
function ke(e, t, n, o, r, s) {
  const i = vn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && T(e)) {
    const a = Number(o);
    i.forEach((p, d) => {
      (d === "length" || d >= a) && l.push(p);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        T(e) ? Co(n) && l.push(i.get("length")) : (l.push(i.get(ut)), lt(e) && l.push(i.get(ro)));
        break;
      case "delete":
        T(e) || (l.push(i.get(ut)), lt(e) && l.push(i.get(ro)));
        break;
      case "set":
        lt(e) && l.push(i.get(ut));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? wt(l[0], u) : wt(l[0]));
  else {
    const a = [];
    for (const p of l)
      p && a.push(...p);
    process.env.NODE_ENV !== "production" ? wt(Kt(a), u) : wt(Kt(a));
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
  (e !== pe || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(G({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function yi(e, t) {
  var n;
  return (n = vn.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const Oi = /* @__PURE__ */ Ze("__proto__,__v_isRef,__isVue"), Kr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
), wi = /* @__PURE__ */ In(), Di = /* @__PURE__ */ In(!1, !0), xi = /* @__PURE__ */ In(!0), Ci = /* @__PURE__ */ In(!0, !0), Xo = /* @__PURE__ */ Vi();
function Vi() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = A(this);
      for (let s = 0, i = this.length; s < i; s++)
        he(o, "get", s + "");
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
function Ti(e) {
  const t = A(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
function In(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Zr : Xr : t ? Qr : Yr).get(o))
      return o;
    const i = T(o);
    if (!e) {
      if (i && j(Xo, r))
        return Reflect.get(Xo, r, s);
      if (r === "hasOwnProperty")
        return Ti;
    }
    const l = Reflect.get(o, r, s);
    return (Bt(r) ? Kr.has(r) : Oi(r)) || (e || he(o, "get", r), t) ? l : re(l) ? i && Co(r) ? l : l.value : K(l) ? e ? Gr(l) : $o(l) : l;
  };
}
const $i = /* @__PURE__ */ Wr(), Ii = /* @__PURE__ */ Wr(!0);
function Wr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Xe(i) && re(i) && !re(r))
      return !1;
    if (!e && (!bn(r) && !Xe(r) && (i = A(i), r = A(r)), !T(n) && re(i) && !re(r)))
      return i.value = r, !0;
    const l = T(n) && Co(o) ? Number(o) < n.length : j(n, o), u = Reflect.set(n, o, r, s);
    return n === A(s) && (l ? Ut(r, i) && ke(n, "set", o, r, i) : ke(n, "add", o, r)), u;
  };
}
function Si(e, t) {
  const n = j(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && ke(e, "delete", t, void 0, o), r;
}
function Mi(e, t) {
  const n = Reflect.has(e, t);
  return (!Bt(t) || !Kr.has(t)) && he(e, "has", t), n;
}
function Ai(e) {
  return he(e, "iterate", T(e) ? "length" : ut), Reflect.ownKeys(e);
}
const zr = {
  get: wi,
  set: $i,
  deleteProperty: Si,
  has: Mi,
  ownKeys: Ai
}, qr = {
  get: xi,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && no(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && no(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Ri = /* @__PURE__ */ G({}, zr, {
  get: Di,
  set: Ii
}), Fi = /* @__PURE__ */ G({}, qr, {
  get: Ci
}), To = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function on(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = A(e), s = A(t);
  n || (t !== s && he(r, "get", t), he(r, "get", s));
  const { has: i } = Sn(r), l = o ? To : n ? Io : Wt;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
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
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Jr(n, o, e) : (e = A(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Ut(t, i) && ke(n, "set", e, t, i) : ke(n, "add", e, t), this;
}
function er(e) {
  const t = A(this), { has: n, get: o } = Sn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Jr(t, n, e) : (e = A(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && ke(t, "delete", e, void 0, s), i;
}
function tr() {
  const e = A(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? lt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && ke(e, "clear", void 0, void 0, n), o;
}
function cn(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = A(i), u = t ? To : e ? Io : Wt;
    return !e && he(l, "iterate", ut), i.forEach((a, p) => o.call(r, u(a), u(p), s));
  };
}
function ln(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = A(r), i = lt(s), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...o), p = n ? To : t ? Io : Wt;
    return !t && he(s, "iterate", u ? ro : ut), {
      // iterator protocol
      next() {
        const { value: d, done: m } = a.next();
        return m ? { value: d, done: m } : {
          value: l ? [p(d[0]), p(d[1])] : p(d),
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
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${$n(e)} operation ${n}failed: target is readonly.`, A(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Pi() {
  const e = {
    get(s) {
      return on(this, s);
    },
    get size() {
      return sn(this);
    },
    has: rn,
    add: Zo,
    set: Go,
    delete: er,
    clear: tr,
    forEach: cn(!1, !1)
  }, t = {
    get(s) {
      return on(this, s, !1, !0);
    },
    get size() {
      return sn(this);
    },
    has: rn,
    add: Zo,
    set: Go,
    delete: er,
    clear: tr,
    forEach: cn(!1, !0)
  }, n = {
    get(s) {
      return on(this, s, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(s) {
      return rn.call(this, s, !0);
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
    forEach: cn(!0, !1)
  }, o = {
    get(s) {
      return on(this, s, !0, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(s) {
      return rn.call(this, s, !0);
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
    forEach: cn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = ln(s, !1, !1), n[s] = ln(s, !0, !1), t[s] = ln(s, !1, !0), o[s] = ln(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [ji, ki, Li, Hi] = /* @__PURE__ */ Pi();
function Mn(e, t) {
  const n = t ? e ? Hi : Li : e ? ki : ji;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(j(n, r) && r in o ? n : o, r, s);
}
const Bi = {
  get: /* @__PURE__ */ Mn(!1, !1)
}, Ui = {
  get: /* @__PURE__ */ Mn(!1, !0)
}, Ki = {
  get: /* @__PURE__ */ Mn(!0, !1)
}, Wi = {
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
function zi(e) {
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
function qi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zi(xo(e));
}
function $o(e) {
  return Xe(e) ? e : An(e, !1, zr, Bi, Yr);
}
function Ji(e) {
  return An(e, !1, Ri, Ui, Qr);
}
function Gr(e) {
  return An(e, !0, qr, Ki, Xr);
}
function Dt(e) {
  return An(e, !0, Fi, Wi, Zr);
}
function An(e, t, n, o, r) {
  if (!K(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = qi(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? o : n);
  return r.set(e, l), l;
}
function ft(e) {
  return Xe(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function bn(e) {
  return !!(e && e.__v_isShallow);
}
function yn(e) {
  return ft(e) || Xe(e);
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function es(e) {
  return Nn(e, "__v_skip", !0), e;
}
const Wt = (e) => K(e) ? $o(e) : e, Io = (e) => K(e) ? Gr(e) : e;
function ts(e) {
  Je && pe && (e = A(e), process.env.NODE_ENV !== "production" ? so(e.dep || (e.dep = Kt()), {
    target: e,
    type: "get",
    key: "value"
  }) : so(e.dep || (e.dep = Kt())));
}
function ns(e, t) {
  e = A(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? wt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : wt(n));
}
function re(e) {
  return !!(e && e.__v_isRef === !0);
}
function io(e) {
  return Yi(e, !1);
}
function Yi(e, t) {
  return re(e) ? e : new Qi(e, t);
}
class Qi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : A(t), this._value = n ? t : Wt(t);
  }
  get value() {
    return ts(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || bn(t) || Xe(t);
    t = n ? t : A(t), Ut(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Wt(t), ns(this, t));
  }
}
function Xi(e) {
  return re(e) ? e.value : e;
}
const Zi = {
  get: (e, t, n) => Xi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return re(r) && !re(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function os(e) {
  return ft(e) ? e : new Proxy(e, Zi);
}
function Gi(e) {
  process.env.NODE_ENV !== "production" && !yn(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = T(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = tc(e, n);
  return t;
}
class ec {
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
    return yi(A(this._object), this._key);
  }
}
function tc(e, t, n) {
  const o = e[t];
  return re(o) ? o : new ec(e, t, n);
}
var rs;
class nc {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[rs] = !1, this._dirty = !0, this.effect = new Vo(t, () => {
      this._dirty || (this._dirty = !0, ns(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = A(this);
    return ts(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
rs = "__v_isReadonly";
function oc(e, t, n = !1) {
  let o, r;
  const s = S(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ue) : (o = e.get, r = e.set);
  const i = new nc(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const at = [];
function an(e) {
  at.push(e);
}
function dn() {
  at.pop();
}
function v(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  _t();
  const n = at.length ? at[at.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = rc();
  if (o)
    je(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Un(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...sc(r)), console.warn(...s);
  }
  Et();
}
function rc() {
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
function sc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ic(n));
  }), t;
}
function ic({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Un(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...cc(e.props), s] : [r + s];
}
function cc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ss(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ss(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : re(t) ? (t = ss(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : S(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
function lc(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? v(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && v(`${t} is NaN - the duration expression might be incorrect.`));
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
  } catch (s) {
    Rn(s, t, n);
  }
  return r;
}
function ye(e, t, n, o) {
  if (S(e)) {
    const s = je(e, t, n, o);
    return s && Do(s) && s.catch((i) => {
      Rn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(ye(e[s], t, n, o));
  return r;
}
function Rn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? So[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      je(u, null, 10, [e, i, l]);
      return;
    }
  }
  uc(e, n, r, o);
}
function uc(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = So[t];
    if (n && an(n), v(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && dn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let zt = !1, co = !1;
const fe = [];
let Se = 0;
const Ct = [];
let Ie = null, We = 0;
const is = /* @__PURE__ */ Promise.resolve();
let Mo = null;
const fc = 100;
function ac(e) {
  const t = Mo || is;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dc(e) {
  let t = Se + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    qt(fe[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Fn(e) {
  (!fe.length || !fe.includes(e, zt && e.allowRecurse ? Se + 1 : Se)) && (e.id == null ? fe.push(e) : fe.splice(dc(e.id), 0, e), cs());
}
function cs() {
  !zt && !co && (co = !0, Mo = is.then(fs));
}
function pc(e) {
  const t = fe.indexOf(e);
  t > Se && fe.splice(t, 1);
}
function ls(e) {
  T(e) ? Ct.push(...e) : (!Ie || !Ie.includes(e, e.allowRecurse ? We + 1 : We)) && Ct.push(e), cs();
}
function nr(e, t = zt ? Se + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < fe.length; t++) {
    const n = fe[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Ao(e, n))
        continue;
      fe.splice(t, 1), t--, n();
    }
  }
}
function us(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)];
    if (Ct.length = 0, Ie) {
      Ie.push(...t);
      return;
    }
    for (Ie = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ie.sort((n, o) => qt(n) - qt(o)), We = 0; We < Ie.length; We++)
      process.env.NODE_ENV !== "production" && Ao(e, Ie[We]) || Ie[We]();
    Ie = null, We = 0;
  }
}
const qt = (e) => e.id == null ? 1 / 0 : e.id, hc = (e, t) => {
  const n = qt(e) - qt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function fs(e) {
  co = !1, zt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fe.sort(hc);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ao(e, n) : ue;
  try {
    for (Se = 0; Se < fe.length; Se++) {
      const n = fe[Se];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
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
    Se = 0, fe.length = 0, us(e), zt = !1, Mo = null, (fe.length || Ct.length) && fs(e);
  }
}
function Ao(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fc) {
      const o = t.ownerInstance, r = o && Ws(o.type);
      return v(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let dt = !1;
const Ot = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Lr().__VUE_HMR_RUNTIME__ = {
  createRecord: Jn(as),
  rerender: Jn(_c),
  reload: Jn(Ec)
});
const gt = /* @__PURE__ */ new Map();
function mc(e) {
  const t = e.type.__hmrId;
  let n = gt.get(t);
  n || (as(t, e.type), n = gt.get(t)), n.instances.add(e);
}
function gc(e) {
  gt.get(e.type.__hmrId).instances.delete(e);
}
function as(e, t) {
  return gt.has(e) ? !1 : (gt.set(e, {
    initialDef: jt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function jt(e) {
  return zs(e) ? e.__vccOpts : e;
}
function _c(e, t) {
  const n = gt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, jt(o.type).render = t), o.renderCache = [], dt = !0, o.update(), dt = !1;
  }));
}
function Ec(e, t) {
  const n = gt.get(e);
  if (!n)
    return;
  t = jt(t), or(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = jt(r.type);
    Ot.has(s) || (s !== n.initialDef && or(s, t), Ot.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Ot.add(s), r.ceReload(t.styles), Ot.delete(s)) : r.parent ? Fn(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  ls(() => {
    for (const r of o)
      Ot.delete(jt(r.type));
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
let Me, Pt = [], lo = !1;
function Zt(e, ...t) {
  Me ? Me.emit(e, ...t) : lo || Pt.push({ event: e, args: t });
}
function ds(e, t) {
  var n, o;
  Me = e, Me ? (Me.enabled = !0, Pt.forEach(({ event: r, args: s }) => Me.emit(r, ...s)), Pt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ds(s, t);
  }), setTimeout(() => {
    Me || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, lo = !0, Pt = []);
  }, 3e3)) : (lo = !0, Pt = []);
}
function Nc(e, t) {
  Zt("app:init", e, t, {
    Fragment: _e,
    Text: en,
    Comment: ce,
    Static: gn
  });
}
function vc(e) {
  Zt("app:unmount", e);
}
const bc = /* @__PURE__ */ Ro(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), ps = /* @__PURE__ */ Ro(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), yc = /* @__PURE__ */ Ro(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Oc = (e) => {
  Me && typeof Me.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Me.cleanupBuffer(e) && yc(e);
};
function Ro(e) {
  return (t) => {
    Zt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const wc = /* @__PURE__ */ hs(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Dc = /* @__PURE__ */ hs(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function hs(e) {
  return (t, n, o) => {
    Zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function xc(e, t, n) {
  Zt("component:emit", e.appContext.app, e, t, n);
}
function Cc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || J;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: p, propsOptions: [d] } = e;
    if (p)
      if (!(t in p))
        (!d || !(ot(t) in d)) && v(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ot(t)}" prop.`);
      else {
        const m = p[t];
        S(m) && (m(...n) || v(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: m } = o[p] || J;
    m && (r = n.map((w) => ee(w) ? w.trim() : w)), d && (r = n.map(mi));
  }
  if (process.env.NODE_ENV !== "production" && xc(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[ot(p)] && v(`Event "${p}" is emitted in component ${Un(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ye(t)}" instead of "${t}".`);
  }
  let l, u = o[l = ot(t)] || // also try camelCase event handler (#2249)
  o[l = ot(Vt(t))];
  !u && s && (u = o[l = ot(Ye(t))]), u && ye(u, e, 6, r);
  const a = o[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ye(a, e, 6, r);
  }
}
function ms(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!S(e)) {
    const u = (a) => {
      const p = ms(a, t, !0);
      p && (l = !0, G(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !l ? (K(e) && o.set(e, null), null) : (T(s) ? s.forEach((u) => i[u] = null) : G(i, s), K(e) && o.set(e, i), i);
}
function Pn(e, t) {
  return !e || !Qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, Ye(t)) || j(e, t));
}
let ie = null, jn = null;
function On(e) {
  const t = ie;
  return ie = e, jn = e && e.type.__scopeId || null, t;
}
function Vc(e) {
  jn = e;
}
function Tc() {
  jn = null;
}
function kt(e, t = ie, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && hr(-1);
    const s = On(t);
    let i;
    try {
      i = e(...r);
    } finally {
      On(s), o._d && hr(1);
    }
    return process.env.NODE_ENV !== "production" && ps(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let uo = !1;
function wn() {
  uo = !0;
}
function Yn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: l, attrs: u, emit: a, render: p, renderCache: d, data: m, setupState: w, ctx: I, inheritAttrs: V } = e;
  let L, X;
  const F = On(e);
  process.env.NODE_ENV !== "production" && (uo = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = r || o;
      L = xe(p.call(z, z, d, s, w, m, I)), X = u;
    } else {
      const z = t;
      process.env.NODE_ENV !== "production" && u === s && wn(), L = xe(z.length > 1 ? z(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return wn(), u;
        },
        slots: l,
        emit: a
      } : { attrs: u, slots: l, emit: a }) : z(
        s,
        null
        /* we know it doesn't need it */
      )), X = t.props ? u : Ic(u);
    }
  } catch (z) {
    Ht.length = 0, Rn(
      z,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), L = ge(ce);
  }
  let U = L, R;
  if (process.env.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([U, R] = $c(L)), X && V !== !1) {
    const z = Object.keys(X), { shapeFlag: Ee } = U;
    if (z.length) {
      if (Ee & 7)
        i && z.some(En) && (X = Sc(X, i)), U = Ae(U, X);
      else if (process.env.NODE_ENV !== "production" && !uo && U.type !== ce) {
        const Ne = Object.keys(u), P = [], W = [];
        for (let Y = 0, se = Ne.length; Y < se; Y++) {
          const x = Ne[Y];
          Qt(x) ? En(x) || P.push(x[2].toLowerCase() + x.slice(3)) : W.push(x);
        }
        W.length && v(`Extraneous non-props attributes (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), P.length && v(`Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !rr(U) && v("Runtime directive used on component with non-element root node. The directives will not function as intended."), U = Ae(U), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !rr(U) && v("Component inside <Transition> renders non-element root node that cannot be animated."), U.transition = n.transition), process.env.NODE_ENV !== "production" && R ? R(U) : L = U, On(F), L;
}
const $c = (e) => {
  const t = e.children, n = e.dynamicChildren, o = gs(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [xe(o), i];
};
function gs(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Tt(o)) {
      if (o.type !== ce || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Ic = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sc = (e, t) => {
  const n = {};
  for (const o in e)
    (!En(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, rr = (e) => e.shapeFlag & 7 || e.type === ce;
function Mc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: u } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && dt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? sr(o, i, a) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const m = p[d];
        if (i[m] !== o[m] && !Pn(a, m))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? sr(o, i, a) : !0 : !!i;
  return !1;
}
function sr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !Pn(n, s))
      return !0;
  }
  return !1;
}
function Ac({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Rc = (e) => e.__isSuspense;
function Fc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : ls(e);
}
function Pc(e, t) {
  if (!ne)
    process.env.NODE_ENV !== "production" && v("provide() can only be used inside setup().");
  else {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const o = ne || ie;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && S(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
const un = {};
function hn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !S(t) && v("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), _s(e, t, n);
}
function _s(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = J) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && v('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && v('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (R) => {
    v("Invalid watch source: ", R, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Ni() === (ne == null ? void 0 : ne.scope) ? ne : null;
  let a, p = !1, d = !1;
  if (re(e) ? (a = () => e.value, p = bn(e)) : ft(e) ? (a = () => e, o = !0) : T(e) ? (d = !0, p = e.some((R) => ft(R) || bn(R)), a = () => e.map((R) => {
    if (re(R))
      return R.value;
    if (ft(R))
      return ct(R);
    if (S(R))
      return je(
        R,
        u,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(R);
  })) : S(e) ? t ? a = () => je(
    e,
    u,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : a = () => {
    if (!(u && u.isUnmounted))
      return m && m(), ye(e, u, 3, [w]);
  } : (a = ue, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const R = a;
    a = () => ct(R());
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
    if (w = ue, t ? n && ye(t, u, 3, [
      a(),
      d ? [] : void 0,
      w
    ]) : a(), r === "sync") {
      const R = Bl();
      I = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return ue;
  let V = d ? new Array(e.length).fill(un) : un;
  const L = () => {
    if (F.active)
      if (t) {
        const R = F.run();
        (o || p || (d ? R.some((z, Ee) => Ut(z, V[Ee])) : Ut(R, V))) && (m && m(), ye(t, u, 3, [
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
  process.env.NODE_ENV !== "production" && (F.onTrack = s, F.onTrigger = i), t ? n ? L() : V = F.run() : r === "post" ? me(F.run.bind(F), u && u.suspense) : F.run();
  const U = () => {
    F.stop(), u && u.scope && wo(u.scope.effects, F);
  };
  return I && I.push(U), U;
}
function jc(e, t, n) {
  const o = this.proxy, r = ee(e) ? e.includes(".") ? Es(o, e) : () => o[e] : e.bind(o, o);
  let s;
  S(t) ? s = t : (s = t.handler, n = t);
  const i = ne;
  $t(this);
  const l = _s(r, s.bind(o), n);
  return i ? $t(i) : mt(), l;
}
function Es(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function ct(e, t) {
  if (!K(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), re(e))
    ct(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      ct(e[n], t);
  else if (Vn(e) || lt(e))
    e.forEach((n) => {
      ct(n, t);
    });
  else if (kr(e))
    for (const n in e)
      ct(e[n], t);
  return e;
}
function kc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ln(() => {
    e.isMounted = !0;
  }), Os(() => {
    e.isUnmounting = !0;
  }), e;
}
const be = [Function, Array], Lc = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: be,
    onEnter: be,
    onAfterEnter: be,
    onEnterCancelled: be,
    // leave
    onBeforeLeave: be,
    onLeave: be,
    onAfterLeave: be,
    onLeaveCancelled: be,
    // appear
    onBeforeAppear: be,
    onAppear: be,
    onAfterAppear: be,
    onAppearCancelled: be
  },
  setup(e, { slots: t }) {
    const n = Hs(), o = kc();
    let r;
    return () => {
      const s = t.default && bs(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let V = !1;
        for (const L of s)
          if (L.type !== ce) {
            if (process.env.NODE_ENV !== "production" && V) {
              v("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = L, V = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = A(e), { mode: u } = l;
      if (process.env.NODE_ENV !== "production" && u && u !== "in-out" && u !== "out-in" && u !== "default" && v(`invalid <transition> mode: ${u}`), o.isLeaving)
        return Qn(i);
      const a = ir(i);
      if (!a)
        return Qn(i);
      const p = fo(a, l, o, n);
      ao(a, p);
      const d = n.subTree, m = d && ir(d);
      let w = !1;
      const { getTransitionKey: I } = a.type;
      if (I) {
        const V = I();
        r === void 0 ? r = V : V !== r && (r = V, w = !0);
      }
      if (m && m.type !== ce && (!st(a, m) || w)) {
        const V = fo(m, l, o, n);
        if (ao(m, V), u === "out-in")
          return o.isLeaving = !0, V.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Qn(i);
        u === "in-out" && a.type !== ce && (V.delayLeave = (L, X, F) => {
          const U = vs(o, m);
          U[String(m.key)] = m, L._leaveCb = () => {
            X(), L._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = F;
        });
      }
      return i;
    };
  }
}, Ns = Lc;
function vs(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function fo(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: a, onEnterCancelled: p, onBeforeLeave: d, onLeave: m, onAfterLeave: w, onLeaveCancelled: I, onBeforeAppear: V, onAppear: L, onAfterAppear: X, onAppearCancelled: F } = t, U = String(e.key), R = vs(n, e), z = (P, W) => {
    P && ye(P, o, 9, W);
  }, Ee = (P, W) => {
    const Y = W[1];
    z(P, W), T(P) ? P.every((se) => se.length <= 1) && Y() : P.length <= 1 && Y();
  }, Ne = {
    mode: s,
    persisted: i,
    beforeEnter(P) {
      let W = l;
      if (!n.isMounted)
        if (r)
          W = V || l;
        else
          return;
      P._leaveCb && P._leaveCb(
        !0
        /* cancelled */
      );
      const Y = R[U];
      Y && st(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), z(W, [P]);
    },
    enter(P) {
      let W = u, Y = a, se = p;
      if (!n.isMounted)
        if (r)
          W = L || u, Y = X || a, se = F || p;
        else
          return;
      let x = !1;
      const Z = P._enterCb = (ve) => {
        x || (x = !0, ve ? z(se, [P]) : z(Y, [P]), Ne.delayedLeave && Ne.delayedLeave(), P._enterCb = void 0);
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
      let se = !1;
      const x = P._leaveCb = (Z) => {
        se || (se = !0, W(), Z ? z(I, [P]) : z(w, [P]), P._leaveCb = void 0, R[Y] === e && delete R[Y]);
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
function ir(e) {
  return Gt(e) ? e.children ? e.children[0] : void 0 : e;
}
function ao(e, t) {
  e.shapeFlag & 6 && e.component ? ao(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function bs(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === _e ? (i.patchFlag & 128 && r++, o = o.concat(bs(i.children, t, l))) : (t || i.type !== ce) && o.push(l != null ? Ae(i, { key: l }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
const Lt = (e) => !!e.type.__asyncLoader, Gt = (e) => e.type.__isKeepAlive;
function Hc(e, t) {
  ys(e, "a", t);
}
function Bc(e, t) {
  ys(e, "da", t);
}
function ys(e, t, n = ne) {
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
      Gt(r.parent.vnode) && Uc(o, t, n, r), r = r.parent;
  }
}
function Uc(e, t, n, o) {
  const r = kn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ws(() => {
    wo(o[t], r);
  }, n);
}
function kn(e, t, n = ne, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      _t(), $t(n);
      const l = ye(t, n, e, i);
      return mt(), Et(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = ot(So[e].replace(/ hook$/, ""));
    v(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Le = (e) => (t, n = ne) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Yt || e === "sp") && kn(e, (...o) => t(...o), n)
), Kc = Le(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Ln = Le(
  "m"
  /* LifecycleHooks.MOUNTED */
), Wc = Le(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), zc = Le(
  "u"
  /* LifecycleHooks.UPDATED */
), Os = Le(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), ws = Le(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), qc = Le(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Jc = Le(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Yc = Le(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Qc(e, t = ne) {
  kn("ec", e, t);
}
function Ds(e) {
  di(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function Xc(e, t) {
  const n = ie;
  if (n === null)
    return process.env.NODE_ENV !== "production" && v("withDirectives can only be used inside render functions."), e;
  const o = Bn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, u, a = J] = t[s];
    i && (S(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ct(l), r.push({
      dir: i,
      instance: o,
      value: l,
      oldValue: void 0,
      arg: u,
      modifiers: a
    }));
  }
  return e;
}
function Ge(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let u = l.dir[o];
    u && (_t(), ye(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Et());
  }
}
const Zc = Symbol();
function Mt(e, t, n = {}, o, r) {
  if (ie.isCE || ie.parent && Lt(ie.parent) && ie.parent.isCE)
    return t !== "default" && (n.name = t), ge("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (v("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), ht();
  const i = s && xs(s(n)), l = tn(
    _e,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function xs(e) {
  return e.some((t) => Tt(t) ? !(t.type === ce || t.type === _e && !xs(t.children)) : !0) ? e : null;
}
const po = (e) => e ? Bs(e) ? Bn(e) || e.proxy : po(e.parent) : null, pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Dt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Dt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Dt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Dt(e.refs) : e.refs,
    $parent: (e) => po(e.parent),
    $root: (e) => po(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Po(e),
    $forceUpdate: (e) => e.f || (e.f = () => Fn(e.update)),
    $nextTick: (e) => e.n || (e.n = ac.bind(e.proxy)),
    $watch: (e) => jc.bind(e)
  })
), Fo = (e) => e === "_" || e === "$", Xn = (e, t) => e !== J && !e.__isScriptSetup && j(e, t), Cs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Xn(o, t))
          return i[t] = 1, o[t];
        if (r !== J && j(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && j(a, t)
        )
          return i[t] = 3, s[t];
        if (n !== J && j(n, t))
          return i[t] = 4, n[t];
        ho && (i[t] = 0);
      }
    }
    const p = pt[t];
    let d, m;
    if (p)
      return t === "$attrs" && (he(e, "get", t), process.env.NODE_ENV !== "production" && wn()), p(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== J && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      m = u.config.globalProperties, j(m, t)
    )
      return m[t];
    process.env.NODE_ENV !== "production" && ie && (!ee(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== J && Fo(t[0]) && j(r, t) ? v(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ie && v(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Xn(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && j(r, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== J && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && v(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== J && j(e, i) || Xn(t, i) || (l = s[0]) && j(l, i) || j(o, i) || j(pt, i) || j(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Cs.ownKeys = (e) => (v("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Gc(e) {
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
function el(e) {
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
function tl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Fo(o[0])) {
        v(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
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
function nl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? v(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ho = !0;
function ol(e) {
  const t = Po(e), n = e.proxy, o = e.ctx;
  ho = !1, t.beforeCreate && cr(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: l,
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
    inheritAttrs: se,
    // assets
    components: x,
    directives: Z,
    filters: ve
  } = t, Oe = process.env.NODE_ENV !== "production" ? nl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const B in H)
        Oe("Props", B);
  }
  if (a && rl(a, o, Oe, e.appContext.config.unwrapInjectedRef), i)
    for (const H in i) {
      const B = i[H];
      S(B) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, H, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[H] = B.bind(n), process.env.NODE_ENV !== "production" && Oe("Methods", H)) : process.env.NODE_ENV !== "production" && v(`Method "${H}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !S(r) && v("The data option must be a function. Plain object usage is no longer supported.");
    const H = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Do(H) && v("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !K(H))
      process.env.NODE_ENV !== "production" && v("data() should return an object.");
    else if (e.data = $o(H), process.env.NODE_ENV !== "production")
      for (const B in H)
        Oe("Data", B), Fo(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => H[B],
          set: ue
        });
  }
  if (ho = !0, s)
    for (const H in s) {
      const B = s[H], Ve = S(B) ? B.bind(n, n) : S(B.get) ? B.get.bind(n, n) : ue;
      process.env.NODE_ENV !== "production" && Ve === ue && v(`Computed property "${H}" has no getter.`);
      const Kn = !S(B) && S(B.set) ? B.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        v(`Write operation failed: computed property "${H}" is readonly.`);
      } : ue, It = kl({
        get: Ve,
        set: Kn
      });
      Object.defineProperty(o, H, {
        enumerable: !0,
        configurable: !0,
        get: () => It.value,
        set: (Nt) => It.value = Nt
      }), process.env.NODE_ENV !== "production" && Oe("Computed", H);
    }
  if (l)
    for (const H in l)
      Vs(l[H], o, n, H);
  if (u) {
    const H = S(u) ? u.call(n) : u;
    Reflect.ownKeys(H).forEach((B) => {
      Pc(B, H[B]);
    });
  }
  p && cr(
    p,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function le(H, B) {
    T(B) ? B.forEach((Ve) => H(Ve.bind(n))) : B && H(B.bind(n));
  }
  if (le(Kc, d), le(Ln, m), le(Wc, w), le(zc, I), le(Hc, V), le(Bc, L), le(Qc, P), le(Yc, Ee), le(Jc, Ne), le(Os, F), le(ws, R), le(qc, W), T(Y))
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
  z && e.render === ue && (e.render = z), se != null && (e.inheritAttrs = se), x && (e.components = x), Z && (e.directives = Z);
}
function rl(e, t, n = ue, o = !1) {
  T(e) && (e = mo(e));
  for (const r in e) {
    const s = e[r];
    let i;
    K(s) ? "default" in s ? i = pn(
      s.from || r,
      s.default,
      !0
      /* treat default function as factory */
    ) : i = pn(s.from || r) : i = pn(s), re(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : (process.env.NODE_ENV !== "production" && v(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function cr(e, t, n) {
  ye(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Vs(e, t, n, o) {
  const r = o.includes(".") ? Es(n, o) : () => n[o];
  if (ee(e)) {
    const s = t[e];
    S(s) ? hn(r, s) : process.env.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e}"`, s);
  } else if (S(e))
    hn(r, e.bind(n));
  else if (K(e))
    if (T(e))
      e.forEach((s) => Vs(s, t, n, o));
    else {
      const s = S(e.handler) ? e.handler.bind(n) : t[e.handler];
      S(s) ? hn(r, s, e) : process.env.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function Po(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((a) => Dn(u, a, i, !0)), Dn(u, t, i)), K(t) && s.set(t, u), u;
}
function Dn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Dn(e, s, n, !0), r && r.forEach((i) => Dn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && v('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = sl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const sl = {
  data: lr,
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
  watch: cl,
  // provide / inject
  provide: lr,
  inject: il
};
function lr(e, t) {
  return t ? e ? function() {
    return G(S(e) ? e.call(this, this) : e, S(t) ? t.call(this, this) : t);
  } : t : e;
}
function il(e, t) {
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
function cl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = G(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = de(e[o], t[o]);
  return n;
}
function ll(e, t, n, o = !1) {
  const r = {}, s = {};
  Nn(s, Hn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ts(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Is(t || {}, r, e), n ? e.props = o ? r : Ji(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function ul(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function fl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, l = A(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && ul(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let m = p[d];
        if (Pn(e.emitsOptions, m))
          continue;
        const w = t[m];
        if (u)
          if (j(s, m))
            w !== s[m] && (s[m] = w, a = !0);
          else {
            const I = Vt(m);
            r[I] = go(
              u,
              l,
              I,
              w,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          w !== s[m] && (s[m] = w, a = !0);
      }
    }
  } else {
    Ts(e, t, r, s) && (a = !0);
    let p;
    for (const d in l)
      (!t || // for camelCase
      !j(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Ye(d)) === d || !j(t, p))) && (u ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[p] !== void 0) && (r[d] = go(
        u,
        l,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[d]);
    if (s !== l)
      for (const d in s)
        (!t || !j(t, d)) && (delete s[d], a = !0);
  }
  a && ke(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Is(t || {}, r, e);
}
function Ts(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (fn(u))
        continue;
      const a = t[u];
      let p;
      r && j(r, p = Vt(u)) ? !s || !s.includes(p) ? n[p] = a : (l || (l = {}))[p] = a : Pn(e.emitsOptions, u) || (!(u in o) || a !== o[u]) && (o[u] = a, i = !0);
    }
  if (s) {
    const u = A(n), a = l || J;
    for (let p = 0; p < s.length; p++) {
      const d = s[p];
      n[d] = go(r, u, d, a[d], e, !j(a, d));
    }
  }
  return i;
}
function go(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = j(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && S(u)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : ($t(r), o = a[n] = u.call(null, t), mt());
      } else
        o = u;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? o = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (o === "" || o === Ye(n)) && (o = !0));
  }
  return o;
}
function $s(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let u = !1;
  if (!S(e)) {
    const p = (d) => {
      u = !0;
      const [m, w] = $s(d, t, !0);
      G(i, m), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !u)
    return K(e) && o.set(e, xt), xt;
  if (T(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !ee(s[p]) && v("props must be strings when using array syntax.", s[p]);
      const d = Vt(s[p]);
      ur(d) && (i[d] = J);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !K(s) && v("invalid props options", s);
    for (const p in s) {
      const d = Vt(p);
      if (ur(d)) {
        const m = s[p], w = i[d] = T(m) || S(m) ? { type: m } : Object.assign({}, m);
        if (w) {
          const I = ar(Boolean, w.type), V = ar(String, w.type);
          w[
            0
            /* BooleanFlags.shouldCast */
          ] = I > -1, w[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = V < 0 || I < V, (I > -1 || j(w, "default")) && l.push(d);
        }
      }
    }
  }
  const a = [i, l];
  return K(e) && o.set(e, a), a;
}
function ur(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && v(`Invalid prop name: "${e}" is a reserved property.`), !1);
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
function Is(e, t, n) {
  const o = A(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && al(s, o[s], i, !j(e, s) && !j(e, Ye(s)));
  }
}
function al(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let l = !1;
      const u = T(r) ? r : [r], a = [];
      for (let p = 0; p < u.length && !l; p++) {
        const { valid: d, expectedType: m } = pl(t, u[p]);
        a.push(m || ""), l = d;
      }
      if (!l) {
        v(hl(e, t, a));
        return;
      }
    }
    i && !i(t) && v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const dl = /* @__PURE__ */ Ze("String,Number,Boolean,Function,Symbol,BigInt");
function pl(e, t) {
  let n;
  const o = _o(t);
  if (dl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function hl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map($n).join(" | ")}`;
  const r = n[0], s = xo(t), i = dr(t, r), l = dr(t, s);
  return n.length === 1 && pr(r) && !ml(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, pr(s) && (o += `with value ${l}.`), o;
}
function dr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function pr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ml(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ss = (e) => e[0] === "_" || e === "$stable", jo = (e) => T(e) ? e.map(xe) : [xe(e)], gl = (e, t, n) => {
  if (t._n)
    return t;
  const o = kt((...r) => (process.env.NODE_ENV !== "production" && ne && v(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), jo(t(...r))), n);
  return o._c = !1, o;
}, Ms = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Ss(r))
      continue;
    const s = e[r];
    if (S(s))
      t[r] = gl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && v(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = jo(s);
      t[r] = () => i;
    }
  }
}, As = (e, t) => {
  process.env.NODE_ENV !== "production" && !Gt(e.vnode) && v("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = jo(t);
  e.slots.default = () => n;
}, _l = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = A(t), Nn(t, "_", n)) : Ms(t, e.slots = {});
  } else
    e.slots = {}, t && As(e, t);
  Nn(e.slots, Hn, 1);
}, El = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = J;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && dt ? G(r, t) : n && l === 1 ? s = !1 : (G(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Ms(t, r)), i = t;
  } else
    t && (As(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Ss(l) && !(l in i) && delete r[l];
};
function Rs() {
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
let Nl = 0;
function vl(e, t) {
  return function(o, r = null) {
    S(o) || (o = Object.assign({}, o)), r != null && !K(r) && (process.env.NODE_ENV !== "production" && v("root props passed to app.mount() must be an object."), r = null);
    const s = Rs(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const u = s.app = {
      _uid: Nl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Nr,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && v("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...p) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && v("Plugin has already been applied to target app.") : a && S(a.install) ? (i.add(a), a.install(u, ...p)) : S(a) ? (i.add(a), a(u, ...p)) : process.env.NODE_ENV !== "production" && v('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && v("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : s.mixins.push(a), u;
      },
      component(a, p) {
        return process.env.NODE_ENV !== "production" && No(a, s.config), p ? (process.env.NODE_ENV !== "production" && s.components[a] && v(`Component "${a}" has already been registered in target app.`), s.components[a] = p, u) : s.components[a];
      },
      directive(a, p) {
        return process.env.NODE_ENV !== "production" && Ds(a), p ? (process.env.NODE_ENV !== "production" && s.directives[a] && v(`Directive "${a}" has already been registered in target app.`), s.directives[a] = p, u) : s.directives[a];
      },
      mount(a, p, d) {
        if (l)
          process.env.NODE_ENV !== "production" && v("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && v("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const m = ge(o, r);
          return m.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Ae(m), a, d);
          }), p && t ? t(m, a) : e(m, a, d), l = !0, u._container = a, a.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = m.component, Nc(u, Nr)), Bn(m.component) || m.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, vc(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && v("Cannot unmount an app that is not mounted.");
      },
      provide(a, p) {
        return process.env.NODE_ENV !== "production" && a in s.provides && v(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), s.provides[a] = p, u;
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
  const s = o.shapeFlag & 4 ? Bn(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    v("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, p = l.refs === J ? l.refs = {} : l.refs, d = l.setupState;
  if (a != null && a !== u && (ee(a) ? (p[a] = null, j(d, a) && (d[a] = null)) : re(a) && (a.value = null)), S(u))
    je(u, l, 12, [i, p]);
  else {
    const m = ee(u), w = re(u);
    if (m || w) {
      const I = () => {
        if (e.f) {
          const V = m ? j(d, u) ? d[u] : p[u] : u.value;
          r ? T(V) && wo(V, s) : T(V) ? V.includes(s) || V.push(s) : m ? (p[u] = [s], j(d, u) && (d[u] = p[u])) : (u.value = [s], e.k && (p[e.k] = u.value));
        } else
          m ? (p[u] = i, j(d, u) && (d[u] = i)) : w ? (u.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (I.id = -1, me(I, n)) : I();
    } else
      process.env.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let At, qe;
function Fe(e, t) {
  e.appContext.config.performance && xn() && qe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && wc(e, t, xn() ? qe.now() : Date.now());
}
function Pe(e, t) {
  if (e.appContext.config.performance && xn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    qe.mark(o), qe.measure(`<${Un(e, e.type)}> ${t}`, n, o), qe.clearMarks(n), qe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Dc(e, t, xn() ? qe.now() : Date.now());
}
function xn() {
  return At !== void 0 || (typeof window < "u" && window.performance ? (At = !0, qe = window.performance) : At = !1), At;
}
function bl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const me = Fc;
function yl(e) {
  return Ol(e);
}
function Ol(e, t) {
  bl();
  const n = Lr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && ds(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: l, createComment: u, setText: a, setElementText: p, parentNode: d, nextSibling: m, setScopeId: w = ue, insertStaticContent: I } = e, V = (c, f, h, _ = null, g = null, b = null, O = !1, N = null, y = process.env.NODE_ENV !== "production" && dt ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !st(c, f) && (_ = nn(c), He(c, g, b, !0), c = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: E, ref: C, shapeFlag: D } = f;
    switch (E) {
      case en:
        L(c, f, h, _);
        break;
      case ce:
        X(c, f, h, _);
        break;
      case gn:
        c == null ? F(f, h, _, O) : process.env.NODE_ENV !== "production" && U(c, f, h, O);
        break;
      case _e:
        Z(c, f, h, _, g, b, O, N, y);
        break;
      default:
        D & 1 ? Ee(c, f, h, _, g, b, O, N, y) : D & 6 ? ve(c, f, h, _, g, b, O, N, y) : D & 64 || D & 128 ? E.process(c, f, h, _, g, b, O, N, y, vt) : process.env.NODE_ENV !== "production" && v("Invalid VNode type:", E, `(${typeof E})`);
    }
    C != null && g && Eo(C, c && c.ref, b, f || c, !f);
  }, L = (c, f, h, _) => {
    if (c == null)
      o(f.el = l(f.children), h, _);
    else {
      const g = f.el = c.el;
      f.children !== c.children && a(g, f.children);
    }
  }, X = (c, f, h, _) => {
    c == null ? o(f.el = u(f.children || ""), h, _) : f.el = c.el;
  }, F = (c, f, h, _) => {
    [c.el, c.anchor] = I(c.children, f, h, _, c.el, c.anchor);
  }, U = (c, f, h, _) => {
    if (f.children !== c.children) {
      const g = m(c.anchor);
      z(c), [f.el, f.anchor] = I(f.children, h, g, _);
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, R = ({ el: c, anchor: f }, h, _) => {
    let g;
    for (; c && c !== f; )
      g = m(c), o(c, h, _), c = g;
    o(f, h, _);
  }, z = ({ el: c, anchor: f }) => {
    let h;
    for (; c && c !== f; )
      h = m(c), r(c), c = h;
    r(f);
  }, Ee = (c, f, h, _, g, b, O, N, y) => {
    O = O || f.type === "svg", c == null ? Ne(f, h, _, g, b, O, N, y) : Y(c, f, g, b, O, N, y);
  }, Ne = (c, f, h, _, g, b, O, N) => {
    let y, E;
    const { type: C, props: D, shapeFlag: $, transition: M, dirs: k } = c;
    if (y = c.el = i(c.type, b, D && D.is, D), $ & 8 ? p(y, c.children) : $ & 16 && W(c.children, y, null, _, g, b && C !== "foreignObject", O, N), k && Ge(c, null, _, "created"), P(y, c, c.scopeId, O, _), D) {
      for (const q in D)
        q !== "value" && !fn(q) && s(y, q, null, D[q], b, c.children, _, g, Re);
      "value" in D && s(y, "value", null, D.value), (E = D.onVnodeBeforeMount) && $e(E, _, c);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(y, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(y, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), k && Ge(c, null, _, "beforeMount");
    const Q = (!g || g && !g.pendingBranch) && M && !M.persisted;
    Q && M.beforeEnter(y), o(y, f, h), ((E = D && D.onVnodeMounted) || Q || k) && me(() => {
      E && $e(E, _, c), Q && M.enter(y), k && Ge(c, null, _, "mounted");
    }, g);
  }, P = (c, f, h, _, g) => {
    if (h && w(c, h), _)
      for (let b = 0; b < _.length; b++)
        w(c, _[b]);
    if (g) {
      let b = g.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = gs(b.children) || b), f === b) {
        const O = g.vnode;
        P(c, O, O.scopeId, O.slotScopeIds, g.parent);
      }
    }
  }, W = (c, f, h, _, g, b, O, N, y = 0) => {
    for (let E = y; E < c.length; E++) {
      const C = c[E] = N ? ze(c[E]) : xe(c[E]);
      V(null, C, f, h, _, g, b, O, N);
    }
  }, Y = (c, f, h, _, g, b, O) => {
    const N = f.el = c.el;
    let { patchFlag: y, dynamicChildren: E, dirs: C } = f;
    y |= c.patchFlag & 16;
    const D = c.props || J, $ = f.props || J;
    let M;
    h && et(h, !1), (M = $.onVnodeBeforeUpdate) && $e(M, h, f, c), C && Ge(f, c, h, "beforeUpdate"), h && et(h, !0), process.env.NODE_ENV !== "production" && dt && (y = 0, O = !1, E = null);
    const k = g && f.type !== "foreignObject";
    if (E ? (se(c.dynamicChildren, E, N, h, _, k, b), process.env.NODE_ENV !== "production" && h && h.type.__hmrId && mn(c, f)) : O || Ve(c, f, N, null, h, _, k, b, !1), y > 0) {
      if (y & 16)
        x(N, f, D, $, h, _, g);
      else if (y & 2 && D.class !== $.class && s(N, "class", null, $.class, g), y & 4 && s(N, "style", D.style, $.style, g), y & 8) {
        const Q = f.dynamicProps;
        for (let q = 0; q < Q.length; q++) {
          const oe = Q[q], we = D[oe], bt = $[oe];
          (bt !== we || oe === "value") && s(N, oe, we, bt, g, c.children, h, _, Re);
        }
      }
      y & 1 && c.children !== f.children && p(N, f.children);
    } else
      !O && E == null && x(N, f, D, $, h, _, g);
    ((M = $.onVnodeUpdated) || C) && me(() => {
      M && $e(M, h, f, c), C && Ge(f, c, h, "updated");
    }, _);
  }, se = (c, f, h, _, g, b, O) => {
    for (let N = 0; N < f.length; N++) {
      const y = c[N], E = f[N], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !st(y, E) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? d(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(y, E, C, null, _, g, b, O, !0);
    }
  }, x = (c, f, h, _, g, b, O) => {
    if (h !== _) {
      if (h !== J)
        for (const N in h)
          !fn(N) && !(N in _) && s(c, N, h[N], null, O, f.children, g, b, Re);
      for (const N in _) {
        if (fn(N))
          continue;
        const y = _[N], E = h[N];
        y !== E && N !== "value" && s(c, N, E, y, O, f.children, g, b, Re);
      }
      "value" in _ && s(c, "value", h.value, _.value);
    }
  }, Z = (c, f, h, _, g, b, O, N, y) => {
    const E = f.el = c ? c.el : l(""), C = f.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: $, slotScopeIds: M } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (dt || D & 2048) && (D = 0, y = !1, $ = null), M && (N = N ? N.concat(M) : M), c == null ? (o(E, h, _), o(C, h, _), W(f.children, h, C, g, b, O, N, y)) : D > 0 && D & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (se(c.dynamicChildren, $, h, g, b, O, N), process.env.NODE_ENV !== "production" && g && g.type.__hmrId ? mn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || g && f === g.subTree) && mn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : Ve(c, f, h, C, g, b, O, N, y);
  }, ve = (c, f, h, _, g, b, O, N, y) => {
    f.slotScopeIds = N, c == null ? f.shapeFlag & 512 ? g.ctx.activate(f, h, _, O, y) : Oe(f, h, _, g, b, O, y) : le(c, f, y);
  }, Oe = (c, f, h, _, g, b, O) => {
    const N = c.component = Sl(c, _, g);
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && mc(N), process.env.NODE_ENV !== "production" && (an(c), Fe(N, "mount")), Gt(c) && (N.ctx.renderer = vt), process.env.NODE_ENV !== "production" && Fe(N, "init"), Al(N), process.env.NODE_ENV !== "production" && Pe(N, "init"), N.asyncDep) {
      if (g && g.registerDep(N, H), !c.el) {
        const y = N.subTree = ge(ce);
        X(null, y, f, h);
      }
      return;
    }
    H(N, c, f, h, g, b, O), process.env.NODE_ENV !== "production" && (dn(), Pe(N, "mount"));
  }, le = (c, f, h) => {
    const _ = f.component = c.component;
    if (Mc(c, f, h))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && an(f), B(_, f, h), process.env.NODE_ENV !== "production" && dn();
        return;
      } else
        _.next = f, pc(_.update), _.update();
    else
      f.el = c.el, _.vnode = f;
  }, H = (c, f, h, _, g, b, O) => {
    const N = () => {
      if (c.isMounted) {
        let { next: C, bu: D, u: $, parent: M, vnode: k } = c, Q = C, q;
        process.env.NODE_ENV !== "production" && an(C || c.vnode), et(c, !1), C ? (C.el = k.el, B(c, C, O)) : C = k, D && yt(D), (q = C.props && C.props.onVnodeBeforeUpdate) && $e(q, M, C, k), et(c, !0), process.env.NODE_ENV !== "production" && Fe(c, "render");
        const oe = Yn(c);
        process.env.NODE_ENV !== "production" && Pe(c, "render");
        const we = c.subTree;
        c.subTree = oe, process.env.NODE_ENV !== "production" && Fe(c, "patch"), V(
          we,
          oe,
          // parent may have changed if it's in a teleport
          d(we.el),
          // anchor may have changed if it's in a fragment
          nn(we),
          c,
          g,
          b
        ), process.env.NODE_ENV !== "production" && Pe(c, "patch"), C.el = oe.el, Q === null && Ac(c, oe.el), $ && me($, g), (q = C.props && C.props.onVnodeUpdated) && me(() => $e(q, M, C, k), g), process.env.NODE_ENV !== "production" && ps(c), process.env.NODE_ENV !== "production" && dn();
      } else {
        let C;
        const { el: D, props: $ } = f, { bm: M, m: k, parent: Q } = c, q = Lt(f);
        if (et(c, !1), M && yt(M), !q && (C = $ && $.onVnodeBeforeMount) && $e(C, Q, f), et(c, !0), D && qn) {
          const oe = () => {
            process.env.NODE_ENV !== "production" && Fe(c, "render"), c.subTree = Yn(c), process.env.NODE_ENV !== "production" && Pe(c, "render"), process.env.NODE_ENV !== "production" && Fe(c, "hydrate"), qn(D, c.subTree, c, g, null), process.env.NODE_ENV !== "production" && Pe(c, "hydrate");
          };
          q ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && oe()
          ) : oe();
        } else {
          process.env.NODE_ENV !== "production" && Fe(c, "render");
          const oe = c.subTree = Yn(c);
          process.env.NODE_ENV !== "production" && Pe(c, "render"), process.env.NODE_ENV !== "production" && Fe(c, "patch"), V(null, oe, h, _, c, g, b), process.env.NODE_ENV !== "production" && Pe(c, "patch"), f.el = oe.el;
        }
        if (k && me(k, g), !q && (C = $ && $.onVnodeMounted)) {
          const oe = f;
          me(() => $e(C, Q, oe), g);
        }
        (f.shapeFlag & 256 || Q && Lt(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && me(c.a, g), c.isMounted = !0, process.env.NODE_ENV !== "production" && bc(c), f = h = _ = null;
      }
    }, y = c.effect = new Vo(
      N,
      () => Fn(E),
      c.scope
      // track it in component's effect scope
    ), E = c.update = () => y.run();
    E.id = c.uid, et(c, !0), process.env.NODE_ENV !== "production" && (y.onTrack = c.rtc ? (C) => yt(c.rtc, C) : void 0, y.onTrigger = c.rtg ? (C) => yt(c.rtg, C) : void 0, E.ownerInstance = c), E();
  }, B = (c, f, h) => {
    f.component = c;
    const _ = c.vnode.props;
    c.vnode = f, c.next = null, fl(c, f.props, _, h), El(c, f.children, h), _t(), nr(), Et();
  }, Ve = (c, f, h, _, g, b, O, N, y = !1) => {
    const E = c && c.children, C = c ? c.shapeFlag : 0, D = f.children, { patchFlag: $, shapeFlag: M } = f;
    if ($ > 0) {
      if ($ & 128) {
        It(E, D, h, _, g, b, O, N, y);
        return;
      } else if ($ & 256) {
        Kn(E, D, h, _, g, b, O, N, y);
        return;
      }
    }
    M & 8 ? (C & 16 && Re(E, g, b), D !== E && p(h, D)) : C & 16 ? M & 16 ? It(E, D, h, _, g, b, O, N, y) : Re(E, g, b, !0) : (C & 8 && p(h, ""), M & 16 && W(D, h, _, g, b, O, N, y));
  }, Kn = (c, f, h, _, g, b, O, N, y) => {
    c = c || xt, f = f || xt;
    const E = c.length, C = f.length, D = Math.min(E, C);
    let $;
    for ($ = 0; $ < D; $++) {
      const M = f[$] = y ? ze(f[$]) : xe(f[$]);
      V(c[$], M, h, null, g, b, O, N, y);
    }
    E > C ? Re(c, g, b, !0, !1, D) : W(f, h, _, g, b, O, N, y, D);
  }, It = (c, f, h, _, g, b, O, N, y) => {
    let E = 0;
    const C = f.length;
    let D = c.length - 1, $ = C - 1;
    for (; E <= D && E <= $; ) {
      const M = c[E], k = f[E] = y ? ze(f[E]) : xe(f[E]);
      if (st(M, k))
        V(M, k, h, null, g, b, O, N, y);
      else
        break;
      E++;
    }
    for (; E <= D && E <= $; ) {
      const M = c[D], k = f[$] = y ? ze(f[$]) : xe(f[$]);
      if (st(M, k))
        V(M, k, h, null, g, b, O, N, y);
      else
        break;
      D--, $--;
    }
    if (E > D) {
      if (E <= $) {
        const M = $ + 1, k = M < C ? f[M].el : _;
        for (; E <= $; )
          V(null, f[E] = y ? ze(f[E]) : xe(f[E]), h, k, g, b, O, N, y), E++;
      }
    } else if (E > $)
      for (; E <= D; )
        He(c[E], g, b, !0), E++;
    else {
      const M = E, k = E, Q = /* @__PURE__ */ new Map();
      for (E = k; E <= $; E++) {
        const ae = f[E] = y ? ze(f[E]) : xe(f[E]);
        ae.key != null && (process.env.NODE_ENV !== "production" && Q.has(ae.key) && v("Duplicate keys found during update:", JSON.stringify(ae.key), "Make sure keys are unique."), Q.set(ae.key, E));
      }
      let q, oe = 0;
      const we = $ - k + 1;
      let bt = !1, Uo = 0;
      const St = new Array(we);
      for (E = 0; E < we; E++)
        St[E] = 0;
      for (E = M; E <= D; E++) {
        const ae = c[E];
        if (oe >= we) {
          He(ae, g, b, !0);
          continue;
        }
        let Te;
        if (ae.key != null)
          Te = Q.get(ae.key);
        else
          for (q = k; q <= $; q++)
            if (St[q - k] === 0 && st(ae, f[q])) {
              Te = q;
              break;
            }
        Te === void 0 ? He(ae, g, b, !0) : (St[Te - k] = E + 1, Te >= Uo ? Uo = Te : bt = !0, V(ae, f[Te], h, null, g, b, O, N, y), oe++);
      }
      const Ko = bt ? wl(St) : xt;
      for (q = Ko.length - 1, E = we - 1; E >= 0; E--) {
        const ae = k + E, Te = f[ae], Wo = ae + 1 < C ? f[ae + 1].el : _;
        St[E] === 0 ? V(null, Te, h, Wo, g, b, O, N, y) : bt && (q < 0 || E !== Ko[q] ? Nt(
          Te,
          h,
          Wo,
          2
          /* MoveType.REORDER */
        ) : q--);
      }
    }
  }, Nt = (c, f, h, _, g = null) => {
    const { el: b, type: O, transition: N, children: y, shapeFlag: E } = c;
    if (E & 6) {
      Nt(c.component.subTree, f, h, _);
      return;
    }
    if (E & 128) {
      c.suspense.move(f, h, _);
      return;
    }
    if (E & 64) {
      O.move(c, f, h, vt);
      return;
    }
    if (O === _e) {
      o(b, f, h);
      for (let D = 0; D < y.length; D++)
        Nt(y[D], f, h, _);
      o(c.anchor, f, h);
      return;
    }
    if (O === gn) {
      R(c, f, h);
      return;
    }
    if (_ !== 2 && E & 1 && N)
      if (_ === 0)
        N.beforeEnter(b), o(b, f, h), me(() => N.enter(b), g);
      else {
        const { leave: D, delayLeave: $, afterLeave: M } = N, k = () => o(b, f, h), Q = () => {
          D(b, () => {
            k(), M && M();
          });
        };
        $ ? $(b, k, Q) : Q();
      }
    else
      o(b, f, h);
  }, He = (c, f, h, _ = !1, g = !1) => {
    const { type: b, props: O, ref: N, children: y, dynamicChildren: E, shapeFlag: C, patchFlag: D, dirs: $ } = c;
    if (N != null && Eo(N, null, h, c, !0), C & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const M = C & 1 && $, k = !Lt(c);
    let Q;
    if (k && (Q = O && O.onVnodeBeforeUnmount) && $e(Q, f, c), C & 6)
      Zs(c.component, h, _);
    else {
      if (C & 128) {
        c.suspense.unmount(h, _);
        return;
      }
      M && Ge(c, null, f, "beforeUnmount"), C & 64 ? c.type.remove(c, f, h, g, vt, _) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== _e || D > 0 && D & 64) ? Re(E, f, h, !1, !0) : (b === _e && D & 384 || !g && C & 16) && Re(y, f, h), _ && Wn(c);
    }
    (k && (Q = O && O.onVnodeUnmounted) || M) && me(() => {
      Q && $e(Q, f, c), M && Ge(c, null, f, "unmounted");
    }, h);
  }, Wn = (c) => {
    const { type: f, el: h, anchor: _, transition: g } = c;
    if (f === _e) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && g && !g.persisted ? c.children.forEach((O) => {
        O.type === ce ? r(O.el) : Wn(O);
      }) : Xs(h, _);
      return;
    }
    if (f === gn) {
      z(c);
      return;
    }
    const b = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: O, delayLeave: N } = g, y = () => O(h, b);
      N ? N(c.el, b, y) : y();
    } else
      b();
  }, Xs = (c, f) => {
    let h;
    for (; c !== f; )
      h = m(c), r(c), c = h;
    r(f);
  }, Zs = (c, f, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && gc(c);
    const { bum: _, scope: g, update: b, subTree: O, um: N } = c;
    _ && yt(_), g.stop(), b && (b.active = !1, He(O, c, f, h)), N && me(N, f), me(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Oc(c);
  }, Re = (c, f, h, _ = !1, g = !1, b = 0) => {
    for (let O = b; O < c.length; O++)
      He(c[O], f, h, _, g);
  }, nn = (c) => c.shapeFlag & 6 ? nn(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : m(c.anchor || c.el), Bo = (c, f, h) => {
    c == null ? f._vnode && He(f._vnode, null, null, !0) : V(f._vnode || null, c, f, null, null, null, h), nr(), us(), f._vnode = c;
  }, vt = {
    p: V,
    um: He,
    m: Nt,
    r: Wn,
    mt: Oe,
    mc: W,
    pc: Ve,
    pbc: se,
    n: nn,
    o: e
  };
  let zn, qn;
  return t && ([zn, qn] = t(vt)), {
    render: Bo,
    hydrate: zn,
    createApp: vl(Bo, zn)
  };
}
function et({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function mn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = ze(r[s]), l.el = i.el), n || mn(i, l)), l.type === en && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === ce && !l.el && (l.el = i.el);
    }
}
function wl(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < a ? s = l + 1 : i = l;
      a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Dl = (e) => e.__isTeleport, _e = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), en = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ce = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), gn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Ht = [];
let Ce = null;
function ht(e = !1) {
  Ht.push(Ce = e ? null : []);
}
function xl() {
  Ht.pop(), Ce = Ht[Ht.length - 1] || null;
}
let Jt = 1;
function hr(e) {
  Jt += e;
}
function Fs(e) {
  return e.dynamicChildren = Jt > 0 ? Ce || xt : null, xl(), Jt > 0 && Ce && Ce.push(e), e;
}
function mr(e, t, n, o, r, s) {
  return Fs(te(
    e,
    t,
    n,
    o,
    r,
    s,
    !0
    /* isBlock */
  ));
}
function tn(e, t, n, o, r) {
  return Fs(ge(
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
function st(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Ot.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Cl = (...e) => js(...e), Hn = "__vInternal", Ps = ({ key: e }) => e ?? null, _n = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || re(e) || S(e) ? { i: ie, r: e, k: t, f: !!n } : e : null;
function te(e, t = null, n = null, o = 0, r = null, s = e === _e ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ps(t),
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ie
  };
  return l ? (ko(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && v("VNode created with invalid key (NaN). VNode type:", u.type), Jt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ce.push(u), u;
}
const ge = process.env.NODE_ENV !== "production" ? Cl : js;
function js(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Zc) && (process.env.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = ce), Tt(e)) {
    const l = Ae(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ko(l, n), Jt > 0 && !s && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag |= -2, l;
  }
  if (zs(e) && (e = e.__vccOpts), t) {
    t = Vl(t);
    let { class: l, style: u } = t;
    l && !ee(l) && (t.class = Oo(l)), K(u) && (yn(u) && !T(u) && (u = G({}, u)), t.style = yo(u));
  }
  const i = ee(e) ? 1 : Rc(e) ? 128 : Dl(e) ? 64 : K(e) ? 4 : S(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && yn(e) && (e = A(e), v("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), te(e, t, n, o, r, i, s, !0);
}
function Vl(e) {
  return e ? yn(e) || Hn in e ? G({}, e) : e : null;
}
function Ae(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, l = t ? Tl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ps(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(_n(t)) : [r, _n(t)] : _n(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && T(i) ? i.map(ks) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? s === -1 ? 16 : s | 16 : s,
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
function ks(e) {
  const t = Ae(e);
  return T(e.children) && (t.children = e.children.map(ks)), t;
}
function Ls(e = " ", t = 0) {
  return ge(en, null, e, t);
}
function gr(e = "", t = !1) {
  return t ? (ht(), tn(ce, null, e)) : ge(ce, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? ge(ce) : T(e) ? ge(
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
      !r && !(Hn in t) ? t._ctx = ie : r === 3 && ie && (ie.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    S(t) ? (t = { default: t, _ctx: ie }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ls(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Tl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Oo([t.class, o.class]));
      else if (r === "style")
        t.style = yo([t.style, o.style]);
      else if (Qt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(T(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function $e(e, t, n, o = null) {
  ye(e, t, 7, [
    n,
    o
  ]);
}
const $l = Rs();
let Il = 0;
function Sl(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || $l, s = {
    uid: Il++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new _i(
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
    propsOptions: $s(o, r),
    emitsOptions: ms(o, r),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = Gc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Cc.bind(null, s), e.ce && e.ce(s), s;
}
let ne = null;
const Hs = () => ne || ie, $t = (e) => {
  ne = e, e.scope.on();
}, mt = () => {
  ne && ne.scope.off(), ne = null;
}, Ml = /* @__PURE__ */ Ze("slot,component");
function No(e, t) {
  const n = t.isNativeTag || Pr;
  (Ml(e) || n(e)) && v("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Bs(e) {
  return e.vnode.shapeFlag & 4;
}
let Yt = !1;
function Al(e, t = !1) {
  Yt = t;
  const { props: n, children: o } = e.vnode, r = Bs(e);
  ll(e, n, r, t), _l(e, o);
  const s = r ? Rl(e, t) : void 0;
  return Yt = !1, s;
}
function Rl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && No(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        No(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        Ds(s[i]);
    }
    o.compilerOptions && Us() && v('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = es(new Proxy(e.ctx, Cs)), process.env.NODE_ENV !== "production" && el(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Fl(e) : null;
    $t(e), _t();
    const i = je(r, e, 0, [process.env.NODE_ENV !== "production" ? Dt(e.props) : e.props, s]);
    if (Et(), mt(), Do(i)) {
      if (i.then(mt, mt), t)
        return i.then((l) => {
          _r(e, l, t);
        }).catch((l) => {
          Rn(
            l,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        v(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      _r(e, i, t);
  } else
    Ks(e, t);
}
function _r(e, t, n) {
  S(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (process.env.NODE_ENV !== "production" && Tt(t) && v("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = os(t), process.env.NODE_ENV !== "production" && tl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && v(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ks(e, n);
}
let vo;
const Us = () => !vo;
function Ks(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && vo && !o.render) {
      const r = o.template || Po(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Fe(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, a = G(G({
          isCustomElement: s,
          delimiters: l
        }, i), u);
        o.render = vo(r, a), process.env.NODE_ENV !== "production" && Pe(e, "compile");
      }
    }
    e.render = o.render || ue;
  }
  $t(e), _t(), ol(e), Et(), mt(), process.env.NODE_ENV !== "production" && !o.render && e.render === ue && !t && (o.template ? v(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : v("Component is missing template or render function."));
}
function Er(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return wn(), he(e, "get", "$attrs"), t[n];
    },
    set() {
      return v("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return v("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return he(e, "get", "$attrs"), t[n];
    }
  });
}
function Fl(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && v("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (T(o) ? r = "array" : re(o) && (r = "ref")), r !== "object" && v(`expose() should be passed a plain object, received ${r}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
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
    return e.exposeProxy || (e.exposeProxy = new Proxy(os(es(e.exposed)), {
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
const Pl = /(?:^|[-_])(\w)/g, jl = (e) => e.replace(Pl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ws(e, t = !0) {
  return S(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Un(e, t, n = !1) {
  let o = Ws(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? jl(o) : n ? "App" : "Anonymous";
}
function zs(e) {
  return S(e) && "__vccOpts" in e;
}
const kl = (e, t) => oc(e, t, Yt);
function Ll(e, t, n) {
  const o = arguments.length;
  return o === 2 ? K(t) && !T(t) ? Tt(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Tt(n) && (n = [n]), ge(e, t, n));
}
const Hl = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Bl = () => {
  {
    const e = pn(Hl);
    return e || process.env.NODE_ENV !== "production" && v("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Zn(e) {
  return !!(e && e.__v_isShallow);
}
function Ul() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return K(d) ? d.__isVue ? ["div", e, "VueInstance"] : re(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        l(d.value),
        ">"
      ] : ft(d) ? [
        "div",
        {},
        ["span", e, Zn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${Xe(d) ? " (readonly)" : ""}`
      ] : Xe(d) ? [
        "div",
        {},
        ["span", e, Zn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
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
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const m = [];
    d.type.props && d.props && m.push(i("props", A(d.props))), d.setupState !== J && m.push(i("setup", d.setupState)), d.data !== J && m.push(i("data", A(d.data)));
    const w = u(d, "computed");
    w && m.push(i("computed", w));
    const I = u(d, "inject");
    return I && m.push(i("injected", I)), m.push([
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
  function i(d, m) {
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
          l(m[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, m = !0) {
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
const Nr = "3.2.47", Kl = "http://www.w3.org/2000/svg", it = typeof document < "u" ? document : null, vr = it && /* @__PURE__ */ it.createElement("template"), Wl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? it.createElementNS(Kl, e) : it.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      vr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = vr.content;
      if (o) {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function zl(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ql(e, t, n) {
  const o = e.style, r = ee(n);
  if (n && !r) {
    if (t && !ee(t))
      for (const s in t)
        n[s] == null && bo(o, s, "");
    for (const s in n)
      bo(o, s, n[s]);
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const Jl = /[^\\];\s*$/, br = /\s*!important$/;
function bo(e, t, n) {
  if (T(n))
    n.forEach((o) => bo(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Jl.test(n) && v(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Yl(e, t);
    br.test(n) ? e.setProperty(Ye(o), n.replace(br, ""), "important") : e[o] = n;
  }
}
const yr = ["Webkit", "Moz", "ms"], Gn = {};
function Yl(e, t) {
  const n = Gn[t];
  if (n)
    return n;
  let o = Vt(t);
  if (o !== "filter" && o in e)
    return Gn[t] = o;
  o = $n(o);
  for (let r = 0; r < yr.length; r++) {
    const s = yr[r] + o;
    if (s in e)
      return Gn[t] = s;
  }
  return t;
}
const Or = "http://www.w3.org/1999/xlink";
function Ql(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Or, t.slice(6, t.length)) : e.setAttributeNS(Or, t, n);
  else {
    const s = li(t);
    n == null || s && !Ar(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Xl(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n ?? "";
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
  let l = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Ar(n) : n == null && u === "string" ? (n = "", l = !0) : u === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !l && v(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  l && e.removeAttribute(t);
}
function qs(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Zl(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Gl(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [l, u] = eu(t);
    if (o) {
      const a = s[t] = ou(o, r);
      qs(e, l, a, u);
    } else
      i && (Zl(e, l, i, u), s[t] = void 0);
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
    ye(ru(o, n.value), t, 5, [o]);
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
const Dr = /^on[a-z]/, su = (e, t, n, o, r = !1, s, i, l, u) => {
  t === "class" ? zl(e, o, r) : t === "style" ? ql(e, n, o) : Qt(t) ? En(t) || Gl(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : iu(e, t, o, r)) ? Xl(e, t, o, s, i, l, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ql(e, t, o, r));
};
function iu(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Dr.test(t) && S(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Dr.test(t) && ee(n) ? !1 : t in e;
}
const Ue = "transition", Rt = "animation", Lo = (e, { slots: t }) => Ll(Ns, cu(e), t);
Lo.displayName = "Transition";
const Js = {
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
Lo.props = /* @__PURE__ */ G({}, Ns.props, Js);
const tt = (e, t = []) => {
  T(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, xr = (e) => e ? T(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function cu(e) {
  const t = {};
  for (const x in e)
    x in Js || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: o, duration: r, enterFromClass: s = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: u = s, appearActiveClass: a = i, appearToClass: p = l, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: w = `${n}-leave-to` } = e, I = lu(r), V = I && I[0], L = I && I[1], { onBeforeEnter: X, onEnter: F, onEnterCancelled: U, onLeave: R, onLeaveCancelled: z, onBeforeAppear: Ee = X, onAppear: Ne = F, onAppearCancelled: P = U } = t, W = (x, Z, ve) => {
    nt(x, Z ? p : l), nt(x, Z ? a : i), ve && ve();
  }, Y = (x, Z) => {
    x._isLeaving = !1, nt(x, d), nt(x, w), nt(x, m), Z && Z();
  }, se = (x) => (Z, ve) => {
    const Oe = x ? Ne : F, le = () => W(Z, x, ve);
    tt(Oe, [Z, le]), Cr(() => {
      nt(Z, x ? u : s), Ke(Z, x ? p : l), xr(Oe) || Vr(Z, o, V, le);
    });
  };
  return G(t, {
    onBeforeEnter(x) {
      tt(X, [x]), Ke(x, s), Ke(x, i);
    },
    onBeforeAppear(x) {
      tt(Ee, [x]), Ke(x, u), Ke(x, a);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(x, Z) {
      x._isLeaving = !0;
      const ve = () => Y(x, Z);
      Ke(x, d), au(), Ke(x, m), Cr(() => {
        x._isLeaving && (nt(x, d), Ke(x, w), xr(R) || Vr(x, o, L, ve));
      }), tt(R, [x, ve]);
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
function lu(e) {
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
  const t = gi(e);
  return process.env.NODE_ENV !== "production" && lc(t, "<transition> explicit duration"), t;
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
  const r = e._endId = ++uu, s = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(s, n);
  const { type: i, timeout: l, propCount: u } = fu(e, t);
  if (!i)
    return o();
  const a = i + "end";
  let p = 0;
  const d = () => {
    e.removeEventListener(a, m), s();
  }, m = (w) => {
    w.target === e && ++p >= u && d();
  };
  setTimeout(() => {
    p < u && d();
  }, l + 1), e.addEventListener(a, m);
}
function fu(e, t) {
  const n = window.getComputedStyle(e), o = (I) => (n[I] || "").split(", "), r = o(`${Ue}Delay`), s = o(`${Ue}Duration`), i = Tr(r, s), l = o(`${Rt}Delay`), u = o(`${Rt}Duration`), a = Tr(l, u);
  let p = null, d = 0, m = 0;
  t === Ue ? i > 0 && (p = Ue, d = i, m = s.length) : t === Rt ? a > 0 && (p = Rt, d = a, m = u.length) : (d = Math.max(i, a), p = d > 0 ? i > a ? Ue : Rt : null, m = p ? p === Ue ? s.length : u.length : 0);
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
  return T(t) ? (n) => yt(t, n) : t;
}, du = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e._assign = Ir(n), qs(e, "change", () => {
      const o = e._modelValue, r = pu(e), s = e.checked, i = e._assign;
      if (T(o)) {
        const l = Rr(o, r), u = l !== -1;
        if (s && !u)
          i(o.concat(r));
        else if (!s && u) {
          const a = [...o];
          a.splice(l, 1), i(a);
        }
      } else if (Vn(o)) {
        const l = new Set(o);
        s ? l.add(r) : l.delete(r), i(l);
      } else
        i(Ys(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Sr,
  beforeUpdate(e, t, n) {
    e._assign = Ir(n), Sr(e, t, n);
  }
};
function Sr(e, { value: t, oldValue: n }, o) {
  e._modelValue = t, T(t) ? e.checked = Rr(t, o.props.value) > -1 : Vn(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = Cn(t, Ys(e, !0)));
}
function pu(e) {
  return "_value" in e ? e._value : e.value;
}
function Ys(e, t) {
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
    const s = mu[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, _u = /* @__PURE__ */ G({ patchProp: su }, Wl);
let Mr;
function Eu() {
  return Mr || (Mr = yl(_u));
}
const Nu = (...e) => {
  const t = Eu().createApp(...e);
  process.env.NODE_ENV !== "production" && (vu(t), bu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = yu(o);
    if (!r)
      return;
    const s = t._component;
    !S(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function vu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => si(t) || ii(t),
    writable: !1
  });
}
function bu(e) {
  if (Us()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        v("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return v(o), n;
      },
      set() {
        v(o);
      }
    });
  }
}
function yu(e) {
  if (ee(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && v(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && v('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function Ou() {
  Ul();
}
process.env.NODE_ENV !== "production" && Ou();
const Qs = (e, t) => {
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
    }), s = io(!1), { visible: i } = Gi(o);
    let l = null;
    Ln(() => {
      l = Hs();
    }), hn(
      i,
      function(F) {
        F === !0 ? p() : d();
      },
      { immediate: !0 }
    );
    let u, a = null;
    function p() {
      return s.value || (s.value = !0, n("show", l)), new Promise((U, R) => {
        u = U, a = R;
      });
    }
    function d(F = r.CANCEL) {
      if (s.value && (s.value = !1, n("hide", l, F), !(!u || !a))) {
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
      return s ? d() : p();
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
        s.value ? (ht(), mr("div", {
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
                  Ls(zo(e.body), 1)
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
}, Mu = /* @__PURE__ */ Qs(Su, [["__scopeId", "data-v-bb8c632e"]]);
const Ho = (e) => (Vc("data-v-272e0f91"), e = e(), Tc(), e), Au = /* @__PURE__ */ Ho(() => /* @__PURE__ */ te("span", { class: "modal-title" }, "Attenzione", -1)), Ru = /* @__PURE__ */ Ho(() => /* @__PURE__ */ te("div", null, [
  /* @__PURE__ */ te("p", null, "È online una nuova versione della risorsa."),
  /* @__PURE__ */ te("p", null, "Queste pagine saranno dismesse prossimamente.")
], -1)), Fu = { class: "footer" }, Pu = { class: "left-footer" }, ju = /* @__PURE__ */ Ho(() => /* @__PURE__ */ te("label", { for: "rememberMe" }, "non mostrare di nuovo", -1)), ku = { class: "right-footer" }, Lu = ["onClick"], Hu = {
  __name: "ModalWarning",
  setup(e) {
    const t = io(), n = io(!1), o = "https://battesimi.duomo.firenze.it";
    function r() {
      location.href = o;
    }
    function s() {
      n.value === !0 && localStorage.setItem("do-not-show-again", !0);
    }
    function i() {
      return localStorage.getItem("do-not-show-again") !== "true";
    }
    return Ln(async () => {
      if (i()) {
        if (await t.value.show() === !1)
          return;
        s();
      }
    }), (l, u) => (ht(), tn(Mu, {
      ref_key: "myModal",
      ref: t
    }, {
      header: kt(() => [
        Au
      ]),
      footer: kt(({ data: { onCancelClicked: a, onOkClicked: p } }) => [
        te("div", Fu, [
          te("div", Pu, [
            Xc(te("input", {
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
}, Bu = /* @__PURE__ */ Qs(Hu, [["__scopeId", "data-v-272e0f91"]]), Uu = {
  __name: "App",
  setup(e) {
    return (t, n) => (ht(), tn(Bu));
  }
};
Nu(Uu).mount("#app");
