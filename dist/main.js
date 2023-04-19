var In = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var H = (n, t, e) => (In(n, t, "read from private field"), e ? e.call(n) : t.get(n)), _t = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, mt = (n, t, e, s) => (In(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var I = "top", x = "bottom", k = "right", P = "left", ee = "auto", Wt = [I, x, k, P], At = "start", Rt = "end", gs = "clippingParents", rn = "viewport", Dt = "popper", Es = "reference", Qe = /* @__PURE__ */ Wt.reduce(function(n, t) {
  return n.concat([t + "-" + At, t + "-" + Rt]);
}, []), on = /* @__PURE__ */ [].concat(Wt, [ee]).reduce(function(n, t) {
  return n.concat([t, t + "-" + At, t + "-" + Rt]);
}, []), vs = "beforeRead", bs = "read", As = "afterRead", Ts = "beforeMain", ys = "main", ws = "afterMain", Os = "beforeWrite", Cs = "write", Ns = "afterWrite", Te = [vs, bs, As, Ts, ys, ws, Os, Cs, Ns];
function z(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function V(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var t = n.ownerDocument;
    return t && t.defaultView || window;
  }
  return n;
}
function Tt(n) {
  var t = V(n).Element;
  return n instanceof t || n instanceof Element;
}
function M(n) {
  var t = V(n).HTMLElement;
  return n instanceof t || n instanceof HTMLElement;
}
function an(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = V(n).ShadowRoot;
  return n instanceof t || n instanceof ShadowRoot;
}
function Ti(n) {
  var t = n.state;
  Object.keys(t.elements).forEach(function(e) {
    var s = t.styles[e] || {}, i = t.attributes[e] || {}, r = t.elements[e];
    !M(r) || !z(r) || (Object.assign(r.style, s), Object.keys(i).forEach(function(o) {
      var a = i[o];
      a === !1 ? r.removeAttribute(o) : r.setAttribute(o, a === !0 ? "" : a);
    }));
  });
}
function yi(n) {
  var t = n.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(s) {
      var i = t.elements[s], r = t.attributes[s] || {}, o = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : e[s]), a = o.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !M(i) || !z(i) || (Object.assign(i.style, a), Object.keys(r).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const cn = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ti,
  effect: yi,
  requires: ["computeStyles"]
};
function K(n) {
  return n.split("-")[0];
}
var bt = Math.max, ye = Math.min, Mt = Math.round;
function Je() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ss() {
  return !/^((?!chrome|android).)*safari/i.test(Je());
}
function xt(n, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var s = n.getBoundingClientRect(), i = 1, r = 1;
  t && M(n) && (i = n.offsetWidth > 0 && Mt(s.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && Mt(s.height) / n.offsetHeight || 1);
  var o = Tt(n) ? V(n) : window, a = o.visualViewport, l = !Ss() && e, d = (s.left + (l && a ? a.offsetLeft : 0)) / i, u = (s.top + (l && a ? a.offsetTop : 0)) / r, f = s.width / i, m = s.height / r;
  return {
    width: f,
    height: m,
    top: u,
    right: d + f,
    bottom: u + m,
    left: d,
    x: d,
    y: u
  };
}
function ln(n) {
  var t = xt(n), e = n.offsetWidth, s = n.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: e,
    height: s
  };
}
function Ds(n, t) {
  var e = t.getRootNode && t.getRootNode();
  if (n.contains(t))
    return !0;
  if (e && an(e)) {
    var s = t;
    do {
      if (s && n.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function F(n) {
  return V(n).getComputedStyle(n);
}
function wi(n) {
  return ["table", "td", "th"].indexOf(z(n)) >= 0;
}
function at(n) {
  return ((Tt(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function Ne(n) {
  return z(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (an(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    at(n)
  );
}
function Pn(n) {
  return !M(n) || // https://github.com/popperjs/popper-core/issues/837
  F(n).position === "fixed" ? null : n.offsetParent;
}
function Oi(n) {
  var t = /firefox/i.test(Je()), e = /Trident/i.test(Je());
  if (e && M(n)) {
    var s = F(n);
    if (s.position === "fixed")
      return null;
  }
  var i = Ne(n);
  for (an(i) && (i = i.host); M(i) && ["html", "body"].indexOf(z(i)) < 0; ) {
    var r = F(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ne(n) {
  for (var t = V(n), e = Pn(n); e && wi(e) && F(e).position === "static"; )
    e = Pn(e);
  return e && (z(e) === "html" || z(e) === "body" && F(e).position === "static") ? t : e || Oi(n) || t;
}
function un(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function zt(n, t, e) {
  return bt(n, ye(t, e));
}
function Ci(n, t, e) {
  var s = zt(n, t, e);
  return s > e ? e : s;
}
function Ls() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function $s(n) {
  return Object.assign({}, Ls(), n);
}
function Is(n, t) {
  return t.reduce(function(e, s) {
    return e[s] = n, e;
  }, {});
}
var Ni = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, $s(typeof t != "number" ? t : Is(t, Wt));
};
function Si(n) {
  var t, e = n.state, s = n.name, i = n.options, r = e.elements.arrow, o = e.modifiersData.popperOffsets, a = K(e.placement), l = un(a), d = [P, k].indexOf(a) >= 0, u = d ? "height" : "width";
  if (!(!r || !o)) {
    var f = Ni(i.padding, e), m = ln(r), h = l === "y" ? I : P, T = l === "y" ? x : k, _ = e.rects.reference[u] + e.rects.reference[l] - o[l] - e.rects.popper[u], v = o[l] - e.rects.reference[l], y = ne(r), C = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, O = _ / 2 - v / 2, g = f[h], b = C - m[u] - f[T], E = C / 2 - m[u] / 2 + O, w = zt(g, E, b), N = l;
    e.modifiersData[s] = (t = {}, t[N] = w, t.centerOffset = w - E, t);
  }
}
function Di(n) {
  var t = n.state, e = n.options, s = e.element, i = s === void 0 ? "[data-popper-arrow]" : s;
  if (i != null && !(typeof i == "string" && (i = t.elements.popper.querySelector(i), !i))) {
    if (process.env.NODE_ENV !== "production" && (M(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Ds(t.elements.popper, i)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = i;
  }
}
const Ps = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Si,
  effect: Di,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function kt(n) {
  return n.split("-")[1];
}
var Li = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function $i(n, t) {
  var e = n.x, s = n.y, i = t.devicePixelRatio || 1;
  return {
    x: Mt(e * i) / i || 0,
    y: Mt(s * i) / i || 0
  };
}
function Rn(n) {
  var t, e = n.popper, s = n.popperRect, i = n.placement, r = n.variation, o = n.offsets, a = n.position, l = n.gpuAcceleration, d = n.adaptive, u = n.roundOffsets, f = n.isFixed, m = o.x, h = m === void 0 ? 0 : m, T = o.y, _ = T === void 0 ? 0 : T, v = typeof u == "function" ? u({
    x: h,
    y: _
  }) : {
    x: h,
    y: _
  };
  h = v.x, _ = v.y;
  var y = o.hasOwnProperty("x"), C = o.hasOwnProperty("y"), O = P, g = I, b = window;
  if (d) {
    var E = ne(e), w = "clientHeight", N = "clientWidth";
    if (E === V(e) && (E = at(e), F(E).position !== "static" && a === "absolute" && (w = "scrollHeight", N = "scrollWidth")), E = E, i === I || (i === P || i === k) && r === Rt) {
      g = x;
      var S = f && E === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[w]
      );
      _ -= S - s.height, _ *= l ? 1 : -1;
    }
    if (i === P || (i === I || i === x) && r === Rt) {
      O = k;
      var D = f && E === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[N]
      );
      h -= D - s.width, h *= l ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: a
  }, d && Li), L = u === !0 ? $i({
    x: h,
    y: _
  }, V(e)) : {
    x: h,
    y: _
  };
  if (h = L.x, _ = L.y, l) {
    var $;
    return Object.assign({}, A, ($ = {}, $[g] = C ? "0" : "", $[O] = y ? "0" : "", $.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + _ + "px)" : "translate3d(" + h + "px, " + _ + "px, 0)", $));
  }
  return Object.assign({}, A, (t = {}, t[g] = C ? _ + "px" : "", t[O] = y ? h + "px" : "", t.transform = "", t));
}
function Ii(n) {
  var t = n.state, e = n.options, s = e.gpuAcceleration, i = s === void 0 ? !0 : s, r = e.adaptive, o = r === void 0 ? !0 : r, a = e.roundOffsets, l = a === void 0 ? !0 : a;
  if (process.env.NODE_ENV !== "production") {
    var d = F(t.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return d.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var u = {
    placement: K(t.placement),
    variation: kt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Rn(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Rn(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const dn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ii,
  data: {}
};
var he = {
  passive: !0
};
function Pi(n) {
  var t = n.state, e = n.instance, s = n.options, i = s.scroll, r = i === void 0 ? !0 : i, o = s.resize, a = o === void 0 ? !0 : o, l = V(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && d.forEach(function(u) {
    u.addEventListener("scroll", e.update, he);
  }), a && l.addEventListener("resize", e.update, he), function() {
    r && d.forEach(function(u) {
      u.removeEventListener("scroll", e.update, he);
    }), a && l.removeEventListener("resize", e.update, he);
  };
}
const hn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Pi,
  data: {}
};
var Ri = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ve(n) {
  return n.replace(/left|right|bottom|top/g, function(t) {
    return Ri[t];
  });
}
var Mi = {
  start: "end",
  end: "start"
};
function Mn(n) {
  return n.replace(/start|end/g, function(t) {
    return Mi[t];
  });
}
function fn(n) {
  var t = V(n), e = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: s
  };
}
function pn(n) {
  return xt(at(n)).left + fn(n).scrollLeft;
}
function xi(n, t) {
  var e = V(n), s = at(n), i = e.visualViewport, r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    var d = Ss();
    (d || !d && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a + pn(n),
    y: l
  };
}
function ki(n) {
  var t, e = at(n), s = fn(n), i = (t = n.ownerDocument) == null ? void 0 : t.body, r = bt(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = bt(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -s.scrollLeft + pn(n), l = -s.scrollTop;
  return F(i || e).direction === "rtl" && (a += bt(e.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function _n(n) {
  var t = F(n), e = t.overflow, s = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + i + s);
}
function Rs(n) {
  return ["html", "body", "#document"].indexOf(z(n)) >= 0 ? n.ownerDocument.body : M(n) && _n(n) ? n : Rs(Ne(n));
}
function Gt(n, t) {
  var e;
  t === void 0 && (t = []);
  var s = Rs(n), i = s === ((e = n.ownerDocument) == null ? void 0 : e.body), r = V(s), o = i ? [r].concat(r.visualViewport || [], _n(s) ? s : []) : s, a = t.concat(o);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Gt(Ne(o)))
  );
}
function Ze(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function Vi(n, t) {
  var e = xt(n, !1, t === "fixed");
  return e.top = e.top + n.clientTop, e.left = e.left + n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top, e;
}
function xn(n, t, e) {
  return t === rn ? Ze(xi(n, e)) : Tt(t) ? Vi(t, e) : Ze(ki(at(n)));
}
function Hi(n) {
  var t = Gt(Ne(n)), e = ["absolute", "fixed"].indexOf(F(n).position) >= 0, s = e && M(n) ? ne(n) : n;
  return Tt(s) ? t.filter(function(i) {
    return Tt(i) && Ds(i, s) && z(i) !== "body";
  }) : [];
}
function Wi(n, t, e, s) {
  var i = t === "clippingParents" ? Hi(n) : [].concat(t), r = [].concat(i, [e]), o = r[0], a = r.reduce(function(l, d) {
    var u = xn(n, d, s);
    return l.top = bt(u.top, l.top), l.right = ye(u.right, l.right), l.bottom = ye(u.bottom, l.bottom), l.left = bt(u.left, l.left), l;
  }, xn(n, o, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ms(n) {
  var t = n.reference, e = n.element, s = n.placement, i = s ? K(s) : null, r = s ? kt(s) : null, o = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (i) {
    case I:
      l = {
        x: o,
        y: t.y - e.height
      };
      break;
    case x:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case k:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case P:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var d = i ? un(i) : null;
  if (d != null) {
    var u = d === "y" ? "height" : "width";
    switch (r) {
      case At:
        l[d] = l[d] - (t[u] / 2 - e[u] / 2);
        break;
      case Rt:
        l[d] = l[d] + (t[u] / 2 - e[u] / 2);
        break;
    }
  }
  return l;
}
function Vt(n, t) {
  t === void 0 && (t = {});
  var e = t, s = e.placement, i = s === void 0 ? n.placement : s, r = e.strategy, o = r === void 0 ? n.strategy : r, a = e.boundary, l = a === void 0 ? gs : a, d = e.rootBoundary, u = d === void 0 ? rn : d, f = e.elementContext, m = f === void 0 ? Dt : f, h = e.altBoundary, T = h === void 0 ? !1 : h, _ = e.padding, v = _ === void 0 ? 0 : _, y = $s(typeof v != "number" ? v : Is(v, Wt)), C = m === Dt ? Es : Dt, O = n.rects.popper, g = n.elements[T ? C : m], b = Wi(Tt(g) ? g : g.contextElement || at(n.elements.popper), l, u, o), E = xt(n.elements.reference), w = Ms({
    reference: E,
    element: O,
    strategy: "absolute",
    placement: i
  }), N = Ze(Object.assign({}, O, w)), S = m === Dt ? N : E, D = {
    top: b.top - S.top + y.top,
    bottom: S.bottom - b.bottom + y.bottom,
    left: b.left - S.left + y.left,
    right: S.right - b.right + y.right
  }, A = n.modifiersData.offset;
  if (m === Dt && A) {
    var L = A[i];
    Object.keys(D).forEach(function($) {
      var ut = [k, x].indexOf($) >= 0 ? 1 : -1, dt = [I, x].indexOf($) >= 0 ? "y" : "x";
      D[$] += L[dt] * ut;
    });
  }
  return D;
}
function ji(n, t) {
  t === void 0 && (t = {});
  var e = t, s = e.placement, i = e.boundary, r = e.rootBoundary, o = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, d = l === void 0 ? on : l, u = kt(s), f = u ? a ? Qe : Qe.filter(function(T) {
    return kt(T) === u;
  }) : Wt, m = f.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  m.length === 0 && (m = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var h = m.reduce(function(T, _) {
    return T[_] = Vt(n, {
      placement: _,
      boundary: i,
      rootBoundary: r,
      padding: o
    })[K(_)], T;
  }, {});
  return Object.keys(h).sort(function(T, _) {
    return h[T] - h[_];
  });
}
function Bi(n) {
  if (K(n) === ee)
    return [];
  var t = ve(n);
  return [Mn(n), t, Mn(t)];
}
function Ki(n) {
  var t = n.state, e = n.options, s = n.name;
  if (!t.modifiersData[s]._skip) {
    for (var i = e.mainAxis, r = i === void 0 ? !0 : i, o = e.altAxis, a = o === void 0 ? !0 : o, l = e.fallbackPlacements, d = e.padding, u = e.boundary, f = e.rootBoundary, m = e.altBoundary, h = e.flipVariations, T = h === void 0 ? !0 : h, _ = e.allowedAutoPlacements, v = t.options.placement, y = K(v), C = y === v, O = l || (C || !T ? [ve(v)] : Bi(v)), g = [v].concat(O).reduce(function(Ct, et) {
      return Ct.concat(K(et) === ee ? ji(t, {
        placement: et,
        boundary: u,
        rootBoundary: f,
        padding: d,
        flipVariations: T,
        allowedAutoPlacements: _
      }) : et);
    }, []), b = t.rects.reference, E = t.rects.popper, w = /* @__PURE__ */ new Map(), N = !0, S = g[0], D = 0; D < g.length; D++) {
      var A = g[D], L = K(A), $ = kt(A) === At, ut = [I, x].indexOf(L) >= 0, dt = ut ? "width" : "height", R = Vt(t, {
        placement: A,
        boundary: u,
        rootBoundary: f,
        altBoundary: m,
        padding: d
      }), B = ut ? $ ? k : P : $ ? x : I;
      b[dt] > E[dt] && (B = ve(B));
      var ae = ve(B), ht = [];
      if (r && ht.push(R[L] <= 0), a && ht.push(R[B] <= 0, R[ae] <= 0), ht.every(function(Ct) {
        return Ct;
      })) {
        S = A, N = !1;
        break;
      }
      w.set(A, ht);
    }
    if (N)
      for (var ce = T ? 3 : 1, Re = function(et) {
        var Yt = g.find(function(ue) {
          var ft = w.get(ue);
          if (ft)
            return ft.slice(0, et).every(function(Me) {
              return Me;
            });
        });
        if (Yt)
          return S = Yt, "break";
      }, Ft = ce; Ft > 0; Ft--) {
        var le = Re(Ft);
        if (le === "break")
          break;
      }
    t.placement !== S && (t.modifiersData[s]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const xs = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ki,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function kn(n, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: n.top - t.height - e.y,
    right: n.right - t.width + e.x,
    bottom: n.bottom - t.height + e.y,
    left: n.left - t.width - e.x
  };
}
function Vn(n) {
  return [I, k, x, P].some(function(t) {
    return n[t] >= 0;
  });
}
function Fi(n) {
  var t = n.state, e = n.name, s = t.rects.reference, i = t.rects.popper, r = t.modifiersData.preventOverflow, o = Vt(t, {
    elementContext: "reference"
  }), a = Vt(t, {
    altBoundary: !0
  }), l = kn(o, s), d = kn(a, i, r), u = Vn(l), f = Vn(d);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const ks = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Fi
};
function Yi(n, t, e) {
  var s = K(n), i = [P, I].indexOf(s) >= 0 ? -1 : 1, r = typeof e == "function" ? e(Object.assign({}, t, {
    placement: n
  })) : e, o = r[0], a = r[1];
  return o = o || 0, a = (a || 0) * i, [P, k].indexOf(s) >= 0 ? {
    x: a,
    y: o
  } : {
    x: o,
    y: a
  };
}
function Ui(n) {
  var t = n.state, e = n.options, s = n.name, i = e.offset, r = i === void 0 ? [0, 0] : i, o = on.reduce(function(u, f) {
    return u[f] = Yi(f, t.rects, r), u;
  }, {}), a = o[t.placement], l = a.x, d = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[s] = o;
}
const Vs = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ui
};
function qi(n) {
  var t = n.state, e = n.name;
  t.modifiersData[e] = Ms({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const mn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qi,
  data: {}
};
function zi(n) {
  return n === "x" ? "y" : "x";
}
function Gi(n) {
  var t = n.state, e = n.options, s = n.name, i = e.mainAxis, r = i === void 0 ? !0 : i, o = e.altAxis, a = o === void 0 ? !1 : o, l = e.boundary, d = e.rootBoundary, u = e.altBoundary, f = e.padding, m = e.tether, h = m === void 0 ? !0 : m, T = e.tetherOffset, _ = T === void 0 ? 0 : T, v = Vt(t, {
    boundary: l,
    rootBoundary: d,
    padding: f,
    altBoundary: u
  }), y = K(t.placement), C = kt(t.placement), O = !C, g = un(y), b = zi(g), E = t.modifiersData.popperOffsets, w = t.rects.reference, N = t.rects.popper, S = typeof _ == "function" ? _(Object.assign({}, t.rects, {
    placement: t.placement
  })) : _, D = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (E) {
    if (r) {
      var $, ut = g === "y" ? I : P, dt = g === "y" ? x : k, R = g === "y" ? "height" : "width", B = E[g], ae = B + v[ut], ht = B - v[dt], ce = h ? -N[R] / 2 : 0, Re = C === At ? w[R] : N[R], Ft = C === At ? -N[R] : -w[R], le = t.elements.arrow, Ct = h && le ? ln(le) : {
        width: 0,
        height: 0
      }, et = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ls(), Yt = et[ut], ue = et[dt], ft = zt(0, w[R], Ct[R]), Me = O ? w[R] / 2 - ce - ft - Yt - D.mainAxis : Re - ft - Yt - D.mainAxis, mi = O ? -w[R] / 2 + ce + ft + ue + D.mainAxis : Ft + ft + ue + D.mainAxis, xe = t.elements.arrow && ne(t.elements.arrow), gi = xe ? g === "y" ? xe.clientTop || 0 : xe.clientLeft || 0 : 0, yn = ($ = A == null ? void 0 : A[g]) != null ? $ : 0, Ei = B + Me - yn - gi, vi = B + mi - yn, wn = zt(h ? ye(ae, Ei) : ae, B, h ? bt(ht, vi) : ht);
      E[g] = wn, L[g] = wn - B;
    }
    if (a) {
      var On, bi = g === "x" ? I : P, Ai = g === "x" ? x : k, pt = E[b], de = b === "y" ? "height" : "width", Cn = pt + v[bi], Nn = pt - v[Ai], ke = [I, P].indexOf(y) !== -1, Sn = (On = A == null ? void 0 : A[b]) != null ? On : 0, Dn = ke ? Cn : pt - w[de] - N[de] - Sn + D.altAxis, Ln = ke ? pt + w[de] + N[de] - Sn - D.altAxis : Nn, $n = h && ke ? Ci(Dn, pt, Ln) : zt(h ? Dn : Cn, pt, h ? Ln : Nn);
      E[b] = $n, L[b] = $n - pt;
    }
    t.modifiersData[s] = L;
  }
}
const Hs = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Gi,
  requiresIfExists: ["offset"]
};
function Xi(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Qi(n) {
  return n === V(n) || !M(n) ? fn(n) : Xi(n);
}
function Ji(n) {
  var t = n.getBoundingClientRect(), e = Mt(t.width) / n.offsetWidth || 1, s = Mt(t.height) / n.offsetHeight || 1;
  return e !== 1 || s !== 1;
}
function Zi(n, t, e) {
  e === void 0 && (e = !1);
  var s = M(t), i = M(t) && Ji(t), r = at(t), o = xt(n, i, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (s || !s && !e) && ((z(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  _n(r)) && (a = Qi(t)), M(t) ? (l = xt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : r && (l.x = pn(r))), {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function tr(n) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), s = [];
  n.forEach(function(r) {
    t.set(r.name, r);
  });
  function i(r) {
    e.add(r.name);
    var o = [].concat(r.requires || [], r.requiresIfExists || []);
    o.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }), s.push(r);
  }
  return n.forEach(function(r) {
    e.has(r.name) || i(r);
  }), s;
}
function er(n) {
  var t = tr(n);
  return Te.reduce(function(e, s) {
    return e.concat(t.filter(function(i) {
      return i.phase === s;
    }));
  }, []);
}
function nr(n) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(n());
      });
    })), t;
  };
}
function nt(n) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    e[s - 1] = arguments[s];
  return [].concat(e).reduce(function(i, r) {
    return i.replace(/%s/, r);
  }, n);
}
var gt = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', sr = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Hn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ir(n) {
  n.forEach(function(t) {
    [].concat(Object.keys(t), Hn).filter(function(e, s, i) {
      return i.indexOf(e) === s;
    }).forEach(function(e) {
      switch (e) {
        case "name":
          typeof t.name != "string" && console.error(nt(gt, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(nt(gt, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Te.indexOf(t.phase) < 0 && console.error(nt(gt, t.name, '"phase"', "either " + Te.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(nt(gt, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(nt(gt, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(nt(gt, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(nt(gt, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Hn.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + e + '" was provided.');
      }
      t.requires && t.requires.forEach(function(s) {
        n.find(function(i) {
          return i.name === s;
        }) == null && console.error(nt(sr, String(t.name), s, s));
      });
    });
  });
}
function rr(n, t) {
  var e = /* @__PURE__ */ new Set();
  return n.filter(function(s) {
    var i = t(s);
    if (!e.has(i))
      return e.add(i), !0;
  });
}
function or(n) {
  var t = n.reduce(function(e, s) {
    var i = e[s.name];
    return e[s.name] = i ? Object.assign({}, i, s, {
      options: Object.assign({}, i.options, s.options),
      data: Object.assign({}, i.data, s.data)
    }) : s, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var Wn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ar = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", jn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bn() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Se(n) {
  n === void 0 && (n = {});
  var t = n, e = t.defaultModifiers, s = e === void 0 ? [] : e, i = t.defaultOptions, r = i === void 0 ? jn : i;
  return function(a, l, d) {
    d === void 0 && (d = r);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, jn, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], m = !1, h = {
      state: u,
      setOptions: function(y) {
        var C = typeof y == "function" ? y(u.options) : y;
        _(), u.options = Object.assign({}, r, u.options, C), u.scrollParents = {
          reference: Tt(a) ? Gt(a) : a.contextElement ? Gt(a.contextElement) : [],
          popper: Gt(l)
        };
        var O = er(or([].concat(s, u.options.modifiers)));
        if (u.orderedModifiers = O.filter(function(A) {
          return A.enabled;
        }), process.env.NODE_ENV !== "production") {
          var g = rr([].concat(O, u.options.modifiers), function(A) {
            var L = A.name;
            return L;
          });
          if (ir(g), K(u.options.placement) === ee) {
            var b = u.orderedModifiers.find(function(A) {
              var L = A.name;
              return L === "flip";
            });
            b || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var E = F(l), w = E.marginTop, N = E.marginRight, S = E.marginBottom, D = E.marginLeft;
          [w, N, S, D].some(function(A) {
            return parseFloat(A);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return T(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var y = u.elements, C = y.reference, O = y.popper;
          if (!Bn(C, O)) {
            process.env.NODE_ENV !== "production" && console.error(Wn);
            return;
          }
          u.rects = {
            reference: Zi(C, ne(O), u.options.strategy === "fixed"),
            popper: ln(O)
          }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
            return u.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var g = 0, b = 0; b < u.orderedModifiers.length; b++) {
            if (process.env.NODE_ENV !== "production" && (g += 1, g > 100)) {
              console.error(ar);
              break;
            }
            if (u.reset === !0) {
              u.reset = !1, b = -1;
              continue;
            }
            var E = u.orderedModifiers[b], w = E.fn, N = E.options, S = N === void 0 ? {} : N, D = E.name;
            typeof w == "function" && (u = w({
              state: u,
              options: S,
              name: D,
              instance: h
            }) || u);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: nr(function() {
        return new Promise(function(v) {
          h.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        _(), m = !0;
      }
    };
    if (!Bn(a, l))
      return process.env.NODE_ENV !== "production" && console.error(Wn), h;
    h.setOptions(d).then(function(v) {
      !m && d.onFirstUpdate && d.onFirstUpdate(v);
    });
    function T() {
      u.orderedModifiers.forEach(function(v) {
        var y = v.name, C = v.options, O = C === void 0 ? {} : C, g = v.effect;
        if (typeof g == "function") {
          var b = g({
            state: u,
            name: y,
            instance: h,
            options: O
          }), E = function() {
          };
          f.push(b || E);
        }
      });
    }
    function _() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return h;
  };
}
var cr = /* @__PURE__ */ Se(), lr = [hn, mn, dn, cn], ur = /* @__PURE__ */ Se({
  defaultModifiers: lr
}), dr = [hn, mn, dn, cn, Vs, xs, Hs, Ps, ks], gn = /* @__PURE__ */ Se({
  defaultModifiers: dr
});
const Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: ws,
  afterRead: As,
  afterWrite: Ns,
  applyStyles: cn,
  arrow: Ps,
  auto: ee,
  basePlacements: Wt,
  beforeMain: Ts,
  beforeRead: vs,
  beforeWrite: Os,
  bottom: x,
  clippingParents: gs,
  computeStyles: dn,
  createPopper: gn,
  createPopperBase: cr,
  createPopperLite: ur,
  detectOverflow: Vt,
  end: Rt,
  eventListeners: hn,
  flip: xs,
  hide: ks,
  left: P,
  main: ys,
  modifierPhases: Te,
  offset: Vs,
  placements: on,
  popper: Dt,
  popperGenerator: Se,
  popperOffsets: mn,
  preventOverflow: Hs,
  read: bs,
  reference: Es,
  right: k,
  start: At,
  top: I,
  variationPlacements: Qe,
  viewport: rn,
  write: Cs
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const hr = 1e6, fr = 1e3, tn = "transitionend", pr = (n) => n == null ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(), _r = (n) => {
  do
    n += Math.floor(Math.random() * hr);
  while (document.getElementById(n));
  return n;
}, js = (n) => {
  let t = n.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let e = n.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
  }
  return t;
}, Bs = (n) => {
  const t = js(n);
  return t && document.querySelector(t) ? t : null;
}, Q = (n) => {
  const t = js(n);
  return t ? document.querySelector(t) : null;
}, mr = (n) => {
  if (!n)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: e
  } = window.getComputedStyle(n);
  const s = Number.parseFloat(t), i = Number.parseFloat(e);
  return !s && !i ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * fr);
}, Ks = (n) => {
  n.dispatchEvent(new Event(tn));
}, J = (n) => !n || typeof n != "object" ? !1 : (typeof n.jquery < "u" && (n = n[0]), typeof n.nodeType < "u"), it = (n) => J(n) ? n.jquery ? n[0] : n : typeof n == "string" && n.length > 0 ? document.querySelector(n) : null, jt = (n) => {
  if (!J(n) || n.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(n).getPropertyValue("visibility") === "visible", e = n.closest("details:not([open])");
  if (!e)
    return t;
  if (e !== n) {
    const s = n.closest("summary");
    if (s && s.parentNode !== e || s === null)
      return !1;
  }
  return t;
}, rt = (n) => !n || n.nodeType !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : typeof n.disabled < "u" ? n.disabled : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false", Fs = (n) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof n.getRootNode == "function") {
    const t = n.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return n instanceof ShadowRoot ? n : n.parentNode ? Fs(n.parentNode) : null;
}, we = () => {
}, se = (n) => {
  n.offsetHeight;
}, Ys = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Ve = [], gr = (n) => {
  document.readyState === "loading" ? (Ve.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of Ve)
      t();
  }), Ve.push(n)) : n();
}, W = () => document.documentElement.dir === "rtl", j = (n) => {
  gr(() => {
    const t = Ys();
    if (t) {
      const e = n.NAME, s = t.fn[e];
      t.fn[e] = n.jQueryInterface, t.fn[e].Constructor = n, t.fn[e].noConflict = () => (t.fn[e] = s, n.jQueryInterface);
    }
  });
}, X = (n) => {
  typeof n == "function" && n();
}, Us = (n, t, e = !0) => {
  if (!e) {
    X(n);
    return;
  }
  const s = 5, i = mr(t) + s;
  let r = !1;
  const o = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(tn, o), X(n));
  };
  t.addEventListener(tn, o), setTimeout(() => {
    r || Ks(t);
  }, i);
}, En = (n, t, e, s) => {
  const i = n.length;
  let r = n.indexOf(t);
  return r === -1 ? !e && s ? n[i - 1] : n[0] : (r += e ? 1 : -1, s && (r = (r + i) % i), n[Math.max(0, Math.min(r, i - 1))]);
}, Er = /[^.]*(?=\..*)\.|.*/, vr = /\..*/, br = /::\d+$/, He = {};
let Kn = 1;
const qs = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Ar = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function zs(n, t) {
  return t && `${t}::${Kn++}` || n.uidEvent || Kn++;
}
function Gs(n) {
  const t = zs(n);
  return n.uidEvent = t, He[t] = He[t] || {}, He[t];
}
function Tr(n, t) {
  return function e(s) {
    return vn(s, {
      delegateTarget: n
    }), e.oneOff && c.off(n, s.type, t), t.apply(n, [s]);
  };
}
function yr(n, t, e) {
  return function s(i) {
    const r = n.querySelectorAll(t);
    for (let {
      target: o
    } = i; o && o !== this; o = o.parentNode)
      for (const a of r)
        if (a === o)
          return vn(i, {
            delegateTarget: o
          }), s.oneOff && c.off(n, i.type, t, e), e.apply(o, [i]);
  };
}
function Xs(n, t, e = null) {
  return Object.values(n).find((s) => s.callable === t && s.delegationSelector === e);
}
function Qs(n, t, e) {
  const s = typeof t == "string", i = s ? e : t || e;
  let r = Js(n);
  return Ar.has(r) || (r = n), [s, i, r];
}
function Fn(n, t, e, s, i) {
  if (typeof t != "string" || !n)
    return;
  let [r, o, a] = Qs(t, e, s);
  t in qs && (o = ((T) => function(_) {
    if (!_.relatedTarget || _.relatedTarget !== _.delegateTarget && !_.delegateTarget.contains(_.relatedTarget))
      return T.call(this, _);
  })(o));
  const l = Gs(n), d = l[a] || (l[a] = {}), u = Xs(d, o, r ? e : null);
  if (u) {
    u.oneOff = u.oneOff && i;
    return;
  }
  const f = zs(o, t.replace(Er, "")), m = r ? yr(n, e, o) : Tr(n, o);
  m.delegationSelector = r ? e : null, m.callable = o, m.oneOff = i, m.uidEvent = f, d[f] = m, n.addEventListener(a, m, r);
}
function en(n, t, e, s, i) {
  const r = Xs(t[e], s, i);
  r && (n.removeEventListener(e, r, !!i), delete t[e][r.uidEvent]);
}
function wr(n, t, e, s) {
  const i = t[e] || {};
  for (const r of Object.keys(i))
    if (r.includes(s)) {
      const o = i[r];
      en(n, t, e, o.callable, o.delegationSelector);
    }
}
function Js(n) {
  return n = n.replace(vr, ""), qs[n] || n;
}
const c = {
  on(n, t, e, s) {
    Fn(n, t, e, s, !1);
  },
  one(n, t, e, s) {
    Fn(n, t, e, s, !0);
  },
  off(n, t, e, s) {
    if (typeof t != "string" || !n)
      return;
    const [i, r, o] = Qs(t, e, s), a = o !== t, l = Gs(n), d = l[o] || {}, u = t.startsWith(".");
    if (typeof r < "u") {
      if (!Object.keys(d).length)
        return;
      en(n, l, o, r, i ? e : null);
      return;
    }
    if (u)
      for (const f of Object.keys(l))
        wr(n, l, f, t.slice(1));
    for (const f of Object.keys(d)) {
      const m = f.replace(br, "");
      if (!a || t.includes(m)) {
        const h = d[f];
        en(n, l, o, h.callable, h.delegationSelector);
      }
    }
  },
  trigger(n, t, e) {
    if (typeof t != "string" || !n)
      return null;
    const s = Ys(), i = Js(t), r = t !== i;
    let o = null, a = !0, l = !0, d = !1;
    r && s && (o = s.Event(t, e), s(n).trigger(o), a = !o.isPropagationStopped(), l = !o.isImmediatePropagationStopped(), d = o.isDefaultPrevented());
    let u = new Event(t, {
      bubbles: a,
      cancelable: !0
    });
    return u = vn(u, e), d && u.preventDefault(), l && n.dispatchEvent(u), u.defaultPrevented && o && o.preventDefault(), u;
  }
};
function vn(n, t) {
  for (const [e, s] of Object.entries(t || {}))
    try {
      n[e] = s;
    } catch {
      Object.defineProperty(n, e, {
        configurable: !0,
        get() {
          return s;
        }
      });
    }
  return n;
}
const st = /* @__PURE__ */ new Map(), We = {
  set(n, t, e) {
    st.has(n) || st.set(n, /* @__PURE__ */ new Map());
    const s = st.get(n);
    if (!s.has(t) && s.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
      return;
    }
    s.set(t, e);
  },
  get(n, t) {
    return st.has(n) && st.get(n).get(t) || null;
  },
  remove(n, t) {
    if (!st.has(n))
      return;
    const e = st.get(n);
    e.delete(t), e.size === 0 && st.delete(n);
  }
};
function Yn(n) {
  if (n === "true")
    return !0;
  if (n === "false")
    return !1;
  if (n === Number(n).toString())
    return Number(n);
  if (n === "" || n === "null")
    return null;
  if (typeof n != "string")
    return n;
  try {
    return JSON.parse(decodeURIComponent(n));
  } catch {
    return n;
  }
}
function je(n) {
  return n.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Z = {
  setDataAttribute(n, t, e) {
    n.setAttribute(`data-bs-${je(t)}`, e);
  },
  removeDataAttribute(n, t) {
    n.removeAttribute(`data-bs-${je(t)}`);
  },
  getDataAttributes(n) {
    if (!n)
      return {};
    const t = {}, e = Object.keys(n.dataset).filter((s) => s.startsWith("bs") && !s.startsWith("bsConfig"));
    for (const s of e) {
      let i = s.replace(/^bs/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Yn(n.dataset[s]);
    }
    return t;
  },
  getDataAttribute(n, t) {
    return Yn(n.getAttribute(`data-bs-${je(t)}`));
  }
};
class ie {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, e) {
    const s = J(e) ? Z.getDataAttribute(e, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof s == "object" ? s : {},
      ...J(e) ? Z.getDataAttributes(e) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, e = this.constructor.DefaultType) {
    for (const s of Object.keys(e)) {
      const i = e[s], r = t[s], o = J(r) ? "element" : pr(r);
      if (!new RegExp(i).test(o))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`);
    }
  }
}
const Or = "5.2.3";
class Y extends ie {
  constructor(t, e) {
    super(), t = it(t), t && (this._element = t, this._config = this._getConfig(e), We.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    We.remove(this._element, this.constructor.DATA_KEY), c.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  _queueCallback(t, e, s = !0) {
    Us(t, e, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return We.get(it(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return Or;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const De = (n, t = "hide") => {
  const e = `click.dismiss${n.EVENT_KEY}`, s = n.NAME;
  c.on(document, e, `[data-bs-dismiss="${s}"]`, function(i) {
    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), rt(this))
      return;
    const r = Q(this) || this.closest(`.${s}`);
    n.getOrCreateInstance(r)[t]();
  });
}, Cr = "alert", Nr = "bs.alert", Zs = `.${Nr}`, Sr = `close${Zs}`, Dr = `closed${Zs}`, Lr = "fade", $r = "show";
class Le extends Y {
  // Getters
  static get NAME() {
    return Cr;
  }
  // Public
  close() {
    if (c.trigger(this._element, Sr).defaultPrevented)
      return;
    this._element.classList.remove($r);
    const e = this._element.classList.contains(Lr);
    this._queueCallback(() => this._destroyElement(), this._element, e);
  }
  // Private
  _destroyElement() {
    this._element.remove(), c.trigger(this._element, Dr), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Le.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
De(Le, "close");
j(Le);
const Ir = "button", Pr = "bs.button", Rr = `.${Pr}`, Mr = ".data-api", xr = "active", Un = '[data-bs-toggle="button"]', kr = `click${Rr}${Mr}`;
class $e extends Y {
  // Getters
  static get NAME() {
    return Ir;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(xr));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = $e.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
c.on(document, kr, Un, (n) => {
  n.preventDefault();
  const t = n.target.closest(Un);
  $e.getOrCreateInstance(t).toggle();
});
j($e);
const p = {
  find(n, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, n));
  },
  findOne(n, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, n);
  },
  children(n, t) {
    return [].concat(...n.children).filter((e) => e.matches(t));
  },
  parents(n, t) {
    const e = [];
    let s = n.parentNode.closest(t);
    for (; s; )
      e.push(s), s = s.parentNode.closest(t);
    return e;
  },
  prev(n, t) {
    let e = n.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(n, t) {
    let e = n.nextElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(n) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
    return this.find(t, n).filter((e) => !rt(e) && jt(e));
  }
}, Vr = "swipe", Bt = ".bs.swipe", Hr = `touchstart${Bt}`, Wr = `touchmove${Bt}`, jr = `touchend${Bt}`, Br = `pointerdown${Bt}`, Kr = `pointerup${Bt}`, Fr = "touch", Yr = "pen", Ur = "pointer-event", qr = 40, zr = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Gr = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class Oe extends ie {
  constructor(t, e) {
    super(), this._element = t, !(!t || !Oe.isSupported()) && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return zr;
  }
  static get DefaultType() {
    return Gr;
  }
  static get NAME() {
    return Vr;
  }
  // Public
  dispose() {
    c.off(this._element, Bt);
  }
  // Private
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), X(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= qr)
      return;
    const e = t / this._deltaX;
    this._deltaX = 0, e && X(e > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (c.on(this._element, Br, (t) => this._start(t)), c.on(this._element, Kr, (t) => this._end(t)), this._element.classList.add(Ur)) : (c.on(this._element, Hr, (t) => this._start(t)), c.on(this._element, Wr, (t) => this._move(t)), c.on(this._element, jr, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === Yr || t.pointerType === Fr);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const Xr = "carousel", Qr = "bs.carousel", ct = `.${Qr}`, ti = ".data-api", Jr = "ArrowLeft", Zr = "ArrowRight", to = 500, Ut = "next", Nt = "prev", Lt = "left", be = "right", eo = `slide${ct}`, Be = `slid${ct}`, no = `keydown${ct}`, so = `mouseenter${ct}`, io = `mouseleave${ct}`, ro = `dragstart${ct}`, oo = `load${ct}${ti}`, ao = `click${ct}${ti}`, ei = "carousel", fe = "active", co = "slide", lo = "carousel-item-end", uo = "carousel-item-start", ho = "carousel-item-next", fo = "carousel-item-prev", ni = ".active", si = ".carousel-item", po = ni + si, _o = ".carousel-item img", mo = ".carousel-indicators", go = "[data-bs-slide], [data-bs-slide-to]", Eo = '[data-bs-ride="carousel"]', vo = {
  [Jr]: be,
  [Zr]: Lt
}, bo = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, Ao = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class re extends Y {
  constructor(t, e) {
    super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = p.findOne(mo, this._element), this._addEventListeners(), this._config.ride === ei && this.cycle();
  }
  // Getters
  static get Default() {
    return bo;
  }
  static get DefaultType() {
    return Ao;
  }
  static get NAME() {
    return Xr;
  }
  // Public
  next() {
    this._slide(Ut);
  }
  nextWhenVisible() {
    !document.hidden && jt(this._element) && this.next();
  }
  prev() {
    this._slide(Nt);
  }
  pause() {
    this._isSliding && Ks(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        c.one(this._element, Be, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const e = this._getItems();
    if (t > e.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      c.one(this._element, Be, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t)
      return;
    const i = t > s ? Ut : Nt;
    this._slide(i, e[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && c.on(this._element, no, (t) => this._keydown(t)), this._config.pause === "hover" && (c.on(this._element, so, () => this.pause()), c.on(this._element, io, () => this._maybeEnableCycle())), this._config.touch && Oe.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of p.find(_o, this._element))
      c.on(s, ro, (i) => i.preventDefault());
    const e = {
      leftCallback: () => this._slide(this._directionToOrder(Lt)),
      rightCallback: () => this._slide(this._directionToOrder(be)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), to + this._config.interval));
      }
    };
    this._swipeHelper = new Oe(this._element, e);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = vo[t.key];
    e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const e = p.findOne(ni, this._indicatorsElement);
    e.classList.remove(fe), e.removeAttribute("aria-current");
    const s = p.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(fe), s.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t)
      return;
    const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = e || this._config.defaultInterval;
  }
  _slide(t, e = null) {
    if (this._isSliding)
      return;
    const s = this._getActive(), i = t === Ut, r = e || En(this._getItems(), s, i, this._config.wrap);
    if (r === s)
      return;
    const o = this._getItemIndex(r), a = (h) => c.trigger(this._element, h, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: o
    });
    if (a(eo).defaultPrevented || !s || !r)
      return;
    const d = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = r;
    const u = i ? uo : lo, f = i ? ho : fo;
    r.classList.add(f), se(r), s.classList.add(u), r.classList.add(u);
    const m = () => {
      r.classList.remove(u, f), r.classList.add(fe), s.classList.remove(fe, f, u), this._isSliding = !1, a(Be);
    };
    this._queueCallback(m, s, this._isAnimated()), d && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(co);
  }
  _getActive() {
    return p.findOne(po, this._element);
  }
  _getItems() {
    return p.find(si, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return W() ? t === Lt ? Nt : Ut : t === Lt ? Ut : Nt;
  }
  _orderToDirection(t) {
    return W() ? t === Nt ? Lt : be : t === Nt ? be : Lt;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = re.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        e.to(t);
        return;
      }
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
c.on(document, ao, go, function(n) {
  const t = Q(this);
  if (!t || !t.classList.contains(ei))
    return;
  n.preventDefault();
  const e = re.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
  if (s) {
    e.to(s), e._maybeEnableCycle();
    return;
  }
  if (Z.getDataAttribute(this, "slide") === "next") {
    e.next(), e._maybeEnableCycle();
    return;
  }
  e.prev(), e._maybeEnableCycle();
});
c.on(window, oo, () => {
  const n = p.find(Eo);
  for (const t of n)
    re.getOrCreateInstance(t);
});
j(re);
const To = "collapse", yo = "bs.collapse", oe = `.${yo}`, wo = ".data-api", Oo = `show${oe}`, Co = `shown${oe}`, No = `hide${oe}`, So = `hidden${oe}`, Do = `click${oe}${wo}`, Ke = "show", It = "collapse", pe = "collapsing", Lo = "collapsed", $o = `:scope .${It} .${It}`, Io = "collapse-horizontal", Po = "width", Ro = "height", Mo = ".collapse.show, .collapse.collapsing", nn = '[data-bs-toggle="collapse"]', xo = {
  parent: null,
  toggle: !0
}, ko = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Xt extends Y {
  constructor(t, e) {
    super(t, e), this._isTransitioning = !1, this._triggerArray = [];
    const s = p.find(nn);
    for (const i of s) {
      const r = Bs(i), o = p.find(r).filter((a) => a === this._element);
      r !== null && o.length && this._triggerArray.push(i);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return xo;
  }
  static get DefaultType() {
    return ko;
  }
  static get NAME() {
    return To;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(Mo).filter((a) => a !== this._element).map((a) => Xt.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || c.trigger(this._element, Oo).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(It), this._element.classList.add(pe), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, this._element.classList.remove(pe), this._element.classList.add(It, Ke), this._element.style[s] = "", c.trigger(this._element, Co);
    }, o = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(i, this._element, !0), this._element.style[s] = `${this._element[o]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || c.trigger(this._element, No).defaultPrevented)
      return;
    const e = this._getDimension();
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, se(this._element), this._element.classList.add(pe), this._element.classList.remove(It, Ke);
    for (const i of this._triggerArray) {
      const r = Q(i);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(pe), this._element.classList.add(It), c.trigger(this._element, So);
    };
    this._element.style[e] = "", this._queueCallback(s, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(Ke);
  }
  // Private
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = it(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(Io) ? Po : Ro;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(nn);
    for (const e of t) {
      const s = Q(e);
      s && this._addAriaAndCollapsedClass([e], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const e = p.find($o, this._config.parent);
    return p.find(t, this._config.parent).filter((s) => !e.includes(s));
  }
  _addAriaAndCollapsedClass(t, e) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(Lo, !e), s.setAttribute("aria-expanded", e);
  }
  // Static
  static jQueryInterface(t) {
    const e = {};
    return typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
      const s = Xt.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
c.on(document, Do, nn, function(n) {
  (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
  const t = Bs(this), e = p.find(t);
  for (const s of e)
    Xt.getOrCreateInstance(s, {
      toggle: !1
    }).toggle();
});
j(Xt);
const qn = "dropdown", Vo = "bs.dropdown", wt = `.${Vo}`, bn = ".data-api", Ho = "Escape", zn = "Tab", Wo = "ArrowUp", Gn = "ArrowDown", jo = 2, Bo = `hide${wt}`, Ko = `hidden${wt}`, Fo = `show${wt}`, Yo = `shown${wt}`, ii = `click${wt}${bn}`, ri = `keydown${wt}${bn}`, Uo = `keyup${wt}${bn}`, $t = "show", qo = "dropup", zo = "dropend", Go = "dropstart", Xo = "dropup-center", Qo = "dropdown-center", Et = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Jo = `${Et}.${$t}`, Ae = ".dropdown-menu", Zo = ".navbar", ta = ".navbar-nav", ea = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", na = W() ? "top-end" : "top-start", sa = W() ? "top-start" : "top-end", ia = W() ? "bottom-end" : "bottom-start", ra = W() ? "bottom-start" : "bottom-end", oa = W() ? "left-start" : "right-start", aa = W() ? "right-start" : "left-start", ca = "top", la = "bottom", ua = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, da = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class q extends Y {
  constructor(t, e) {
    super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = p.next(this._element, Ae)[0] || p.prev(this._element, Ae)[0] || p.findOne(Ae, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return ua;
  }
  static get DefaultType() {
    return da;
  }
  static get NAME() {
    return qn;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (rt(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!c.trigger(this._element, Fo, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(ta))
        for (const s of [].concat(...document.body.children))
          c.on(s, "mouseover", we);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($t), this._element.classList.add($t), c.trigger(this._element, Yo, t);
    }
  }
  hide() {
    if (rt(this._element) || !this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _completeHide(t) {
    if (!c.trigger(this._element, Bo, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          c.off(s, "mouseover", we);
      this._popper && this._popper.destroy(), this._menu.classList.remove($t), this._element.classList.remove($t), this._element.setAttribute("aria-expanded", "false"), Z.removeDataAttribute(this._menu, "popper"), c.trigger(this._element, Ko, t);
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !J(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${qn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Ws > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : J(this._config.reference) ? t = it(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const e = this._getPopperConfig();
    this._popper = gn(t, this._menu, e);
  }
  _isShown() {
    return this._menu.classList.contains($t);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(zo))
      return oa;
    if (t.classList.contains(Go))
      return aa;
    if (t.classList.contains(Xo))
      return ca;
    if (t.classList.contains(Qo))
      return la;
    const e = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(qo) ? e ? sa : na : e ? ra : ia;
  }
  _detectNavbar() {
    return this._element.closest(Zo) !== null;
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    return (this._inNavbar || this._config.display === "static") && (Z.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
    };
  }
  _selectMenuItem({
    key: t,
    target: e
  }) {
    const s = p.find(ea, this._menu).filter((i) => jt(i));
    s.length && En(s, e, t === Gn, !s.includes(e)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = q.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === jo || t.type === "keyup" && t.key !== zn)
      return;
    const e = p.find(Jo);
    for (const s of e) {
      const i = q.getInstance(s);
      if (!i || i._config.autoClose === !1)
        continue;
      const r = t.composedPath(), o = r.includes(i._menu);
      if (r.includes(i._element) || i._config.autoClose === "inside" && !o || i._config.autoClose === "outside" && o || i._menu.contains(t.target) && (t.type === "keyup" && t.key === zn || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: i._element
      };
      t.type === "click" && (a.clickEvent = t), i._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const e = /input|textarea/i.test(t.target.tagName), s = t.key === Ho, i = [Wo, Gn].includes(t.key);
    if (!i && !s || e && !s)
      return;
    t.preventDefault();
    const r = this.matches(Et) ? this : p.prev(this, Et)[0] || p.next(this, Et)[0] || p.findOne(Et, t.delegateTarget.parentNode), o = q.getOrCreateInstance(r);
    if (i) {
      t.stopPropagation(), o.show(), o._selectMenuItem(t);
      return;
    }
    o._isShown() && (t.stopPropagation(), o.hide(), r.focus());
  }
}
c.on(document, ri, Et, q.dataApiKeydownHandler);
c.on(document, ri, Ae, q.dataApiKeydownHandler);
c.on(document, ii, q.clearMenus);
c.on(document, Uo, q.clearMenus);
c.on(document, ii, Et, function(n) {
  n.preventDefault(), q.getOrCreateInstance(this).toggle();
});
j(q);
const Xn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Qn = ".sticky-top", _e = "padding-right", Jn = "margin-right";
class sn {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, _e, (e) => e + t), this._setElementAttributes(Xn, _e, (e) => e + t), this._setElementAttributes(Qn, Jn, (e) => e - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, _e), this._resetElementAttributes(Xn, _e), this._resetElementAttributes(Qn, Jn);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, s) {
    const i = this.getWidth(), r = (o) => {
      if (o !== this._element && window.innerWidth > o.clientWidth + i)
        return;
      this._saveInitialAttribute(o, e);
      const a = window.getComputedStyle(o).getPropertyValue(e);
      o.style.setProperty(e, `${s(Number.parseFloat(a))}px`);
    };
    this._applyManipulationCallback(t, r);
  }
  _saveInitialAttribute(t, e) {
    const s = t.style.getPropertyValue(e);
    s && Z.setDataAttribute(t, e, s);
  }
  _resetElementAttributes(t, e) {
    const s = (i) => {
      const r = Z.getDataAttribute(i, e);
      if (r === null) {
        i.style.removeProperty(e);
        return;
      }
      Z.removeDataAttribute(i, e), i.style.setProperty(e, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, e) {
    if (J(t)) {
      e(t);
      return;
    }
    for (const s of p.find(t, this._element))
      e(s);
  }
}
const oi = "backdrop", ha = "fade", Zn = "show", ts = `mousedown.bs.${oi}`, fa = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, pa = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class ai extends ie {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return fa;
  }
  static get DefaultType() {
    return pa;
  }
  static get NAME() {
    return oi;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      X(t);
      return;
    }
    this._append();
    const e = this._getElement();
    this._config.isAnimated && se(e), e.classList.add(Zn), this._emulateAnimation(() => {
      X(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      X(t);
      return;
    }
    this._getElement().classList.remove(Zn), this._emulateAnimation(() => {
      this.dispose(), X(t);
    });
  }
  dispose() {
    this._isAppended && (c.off(this._element, ts), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(ha), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = it(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), c.on(t, ts, () => {
      X(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Us(t, this._getElement(), this._config.isAnimated);
  }
}
const _a = "focustrap", ma = "bs.focustrap", Ce = `.${ma}`, ga = `focusin${Ce}`, Ea = `keydown.tab${Ce}`, va = "Tab", ba = "forward", es = "backward", Aa = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, Ta = {
  autofocus: "boolean",
  trapElement: "element"
};
class ci extends ie {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Aa;
  }
  static get DefaultType() {
    return Ta;
  }
  static get NAME() {
    return _a;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), c.off(document, Ce), c.on(document, ga, (t) => this._handleFocusin(t)), c.on(document, Ea, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, c.off(document, Ce));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: e
    } = this._config;
    if (t.target === document || t.target === e || e.contains(t.target))
      return;
    const s = p.focusableChildren(e);
    s.length === 0 ? e.focus() : this._lastTabNavDirection === es ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === va && (this._lastTabNavDirection = t.shiftKey ? es : ba);
  }
}
const ya = "modal", wa = "bs.modal", U = `.${wa}`, Oa = ".data-api", Ca = "Escape", Na = `hide${U}`, Sa = `hidePrevented${U}`, li = `hidden${U}`, ui = `show${U}`, Da = `shown${U}`, La = `resize${U}`, $a = `click.dismiss${U}`, Ia = `mousedown.dismiss${U}`, Pa = `keydown.dismiss${U}`, Ra = `click${U}${Oa}`, ns = "modal-open", Ma = "fade", ss = "show", Fe = "modal-static", xa = ".modal.show", ka = ".modal-dialog", Va = ".modal-body", Ha = '[data-bs-toggle="modal"]', Wa = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, ja = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class yt extends Y {
  constructor(t, e) {
    super(t, e), this._dialog = p.findOne(ka, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new sn(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Wa;
  }
  static get DefaultType() {
    return ja;
  }
  static get NAME() {
    return ya;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || c.trigger(this._element, ui, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ns), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || c.trigger(this._element, Na).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(ss), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    for (const t of [window, this._dialog])
      c.off(t, U);
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new ai({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new ci({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const e = p.findOne(Va, this._dialog);
    e && (e.scrollTop = 0), se(this._element), this._element.classList.add(ss);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, c.trigger(this._element, Da, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    c.on(this._element, Pa, (t) => {
      if (t.key === Ca) {
        if (this._config.keyboard) {
          t.preventDefault(), this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), c.on(window, La, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), c.on(this._element, Ia, (t) => {
      c.one(this._element, $a, (e) => {
        if (!(this._element !== t.target || this._element !== e.target)) {
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          this._config.backdrop && this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.classList.remove(ns), this._resetAdjustments(), this._scrollBar.reset(), c.trigger(this._element, li);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(Ma);
  }
  _triggerBackdropTransition() {
    if (c.trigger(this._element, Sa).defaultPrevented)
      return;
    const e = this._element.scrollHeight > document.documentElement.clientHeight, s = this._element.style.overflowY;
    s === "hidden" || this._element.classList.contains(Fe) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Fe), this._queueCallback(() => {
      this._element.classList.remove(Fe), this._queueCallback(() => {
        this._element.style.overflowY = s;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), s = e > 0;
    if (s && !t) {
      const i = W() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${e}px`;
    }
    if (!s && t) {
      const i = W() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${e}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const s = yt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](e);
      }
    });
  }
}
c.on(document, Ra, Ha, function(n) {
  const t = Q(this);
  ["A", "AREA"].includes(this.tagName) && n.preventDefault(), c.one(t, ui, (i) => {
    i.defaultPrevented || c.one(t, li, () => {
      jt(this) && this.focus();
    });
  });
  const e = p.findOne(xa);
  e && yt.getInstance(e).hide(), yt.getOrCreateInstance(t).toggle(this);
});
De(yt);
j(yt);
const Ba = "offcanvas", Ka = "bs.offcanvas", tt = `.${Ka}`, di = ".data-api", Fa = `load${tt}${di}`, Ya = "Escape", is = "show", rs = "showing", os = "hiding", Ua = "offcanvas-backdrop", hi = ".offcanvas.show", qa = `show${tt}`, za = `shown${tt}`, Ga = `hide${tt}`, as = `hidePrevented${tt}`, fi = `hidden${tt}`, Xa = `resize${tt}`, Qa = `click${tt}${di}`, Ja = `keydown.dismiss${tt}`, Za = '[data-bs-toggle="offcanvas"]', tc = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, ec = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class ot extends Y {
  constructor(t, e) {
    super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return tc;
  }
  static get DefaultType() {
    return ec;
  }
  static get NAME() {
    return Ba;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || c.trigger(this._element, qa, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new sn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(rs);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(is), this._element.classList.remove(rs), c.trigger(this._element, za, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || c.trigger(this._element, Ga).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(os), this._backdrop.hide();
    const e = () => {
      this._element.classList.remove(is, os), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new sn().reset(), c.trigger(this._element, fi);
    };
    this._queueCallback(e, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const t = () => {
      if (this._config.backdrop === "static") {
        c.trigger(this._element, as);
        return;
      }
      this.hide();
    }, e = !!this._config.backdrop;
    return new ai({
      className: Ua,
      isVisible: e,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: e ? t : null
    });
  }
  _initializeFocusTrap() {
    return new ci({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    c.on(this._element, Ja, (t) => {
      if (t.key === Ya) {
        if (!this._config.keyboard) {
          c.trigger(this._element, as);
          return;
        }
        this.hide();
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ot.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
c.on(document, Qa, Za, function(n) {
  const t = Q(this);
  if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), rt(this))
    return;
  c.one(t, fi, () => {
    jt(this) && this.focus();
  });
  const e = p.findOne(hi);
  e && e !== t && ot.getInstance(e).hide(), ot.getOrCreateInstance(t).toggle(this);
});
c.on(window, Fa, () => {
  for (const n of p.find(hi))
    ot.getOrCreateInstance(n).show();
});
c.on(window, Xa, () => {
  for (const n of p.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(n).position !== "fixed" && ot.getOrCreateInstance(n).hide();
});
De(ot);
j(ot);
const nc = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), sc = /^aria-[\w-]*$/i, ic = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, rc = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, oc = (n, t) => {
  const e = n.nodeName.toLowerCase();
  return t.includes(e) ? nc.has(e) ? !!(ic.test(n.nodeValue) || rc.test(n.nodeValue)) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(e));
}, pi = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", sc],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function ac(n, t, e) {
  if (!n.length)
    return n;
  if (e && typeof e == "function")
    return e(n);
  const i = new window.DOMParser().parseFromString(n, "text/html"), r = [].concat(...i.body.querySelectorAll("*"));
  for (const o of r) {
    const a = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes), d = [].concat(t["*"] || [], t[a] || []);
    for (const u of l)
      oc(u, d) || o.removeAttribute(u.nodeName);
  }
  return i.body.innerHTML;
}
const cc = "TemplateFactory", lc = {
  allowList: pi,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, uc = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, dc = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class hc extends ie {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return lc;
  }
  static get DefaultType() {
    return uc;
  }
  static get NAME() {
    return cc;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((t) => this._resolvePossibleFunction(t)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return this._checkContent(t), this._config.content = {
      ...this._config.content,
      ...t
    }, this;
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, r] of Object.entries(this._config.content))
      this._setContent(t, r, i);
    const e = t.children[0], s = this._resolvePossibleFunction(this._config.extraClass);
    return s && e.classList.add(...s.split(" ")), e;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [e, s] of Object.entries(t))
      super._typeCheckConfig({
        selector: e,
        entry: s
      }, dc);
  }
  _setContent(t, e, s) {
    const i = p.findOne(s, t);
    if (i) {
      if (e = this._resolvePossibleFunction(e), !e) {
        i.remove();
        return;
      }
      if (J(e)) {
        this._putElementInTemplate(it(e), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(e);
        return;
      }
      i.textContent = e;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? ac(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t(this) : t;
  }
  _putElementInTemplate(t, e) {
    if (this._config.html) {
      e.innerHTML = "", e.append(t);
      return;
    }
    e.textContent = t.textContent;
  }
}
const fc = "tooltip", pc = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ye = "fade", _c = "modal", me = "show", mc = ".tooltip-inner", cs = `.${_c}`, ls = "hide.bs.modal", qt = "hover", Ue = "focus", gc = "click", Ec = "manual", vc = "hide", bc = "hidden", Ac = "show", Tc = "shown", yc = "inserted", wc = "click", Oc = "focusin", Cc = "focusout", Nc = "mouseenter", Sc = "mouseleave", Dc = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: W() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: W() ? "right" : "left"
}, Lc = {
  allowList: pi,
  animation: !0,
  boundary: "clippingParents",
  container: !1,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: !1,
  offset: [0, 0],
  placement: "top",
  popperConfig: null,
  sanitize: !0,
  sanitizeFn: null,
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
}, $c = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class Kt extends Y {
  constructor(t, e) {
    if (typeof Ws > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return Lc;
  }
  static get DefaultType() {
    return $c;
  }
  static get NAME() {
    return fc;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout), c.off(this._element.closest(cs), ls, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = c.trigger(this._element, this.constructor.eventName(Ac)), s = (Fs(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i), c.trigger(this._element, this.constructor.eventName(yc))), this._popper = this._createPopper(i), i.classList.add(me), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        c.on(a, "mouseover", we);
    const o = () => {
      c.trigger(this._element, this.constructor.eventName(Tc)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || c.trigger(this._element, this.constructor.eventName(vc)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(me), "ontouchstart" in document.documentElement)
      for (const i of [].concat(...document.body.children))
        c.off(i, "mouseover", we);
    this._activeTrigger[gc] = !1, this._activeTrigger[Ue] = !1, this._activeTrigger[qt] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), c.trigger(this._element, this.constructor.eventName(bc)));
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  // Protected
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
  }
  _createTipElement(t) {
    const e = this._getTemplateFactory(t).toHtml();
    if (!e)
      return null;
    e.classList.remove(Ye, me), e.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = _r(this.constructor.NAME).toString();
    return e.setAttribute("id", s), this._isAnimated() && e.classList.add(Ye), e;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new hc({
      ...this._config,
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [mc]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(Ye);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(me);
  }
  _createPopper(t) {
    const e = typeof this._config.placement == "function" ? this._config.placement.call(this, t, this._element) : this._config.placement, s = Dc[e.toUpperCase()];
    return gn(this._element, t, this._getPopperConfig(s));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: !0,
        phase: "beforeMain",
        fn: (s) => {
          this._getTipElement().setAttribute("data-popper-placement", s.state.placement);
        }
      }]
    };
    return {
      ...e,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const e of t)
      if (e === "click")
        c.on(this._element, this.constructor.eventName(wc), this._config.selector, (s) => {
          this._initializeOnDelegatedTarget(s).toggle();
        });
      else if (e !== Ec) {
        const s = e === qt ? this.constructor.eventName(Nc) : this.constructor.eventName(Oc), i = e === qt ? this.constructor.eventName(Sc) : this.constructor.eventName(Cc);
        c.on(this._element, s, this._config.selector, (r) => {
          const o = this._initializeOnDelegatedTarget(r);
          o._activeTrigger[r.type === "focusin" ? Ue : qt] = !0, o._enter();
        }), c.on(this._element, i, this._config.selector, (r) => {
          const o = this._initializeOnDelegatedTarget(r);
          o._activeTrigger[r.type === "focusout" ? Ue : qt] = o._element.contains(r.relatedTarget), o._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, c.on(this._element.closest(cs), ls, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    this._isHovered = !0, this._setTimeout(() => {
      this._isHovered && this.show();
    }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
      this._isHovered || this.hide();
    }, this._config.delay.hide));
  }
  _setTimeout(t, e) {
    clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const e = Z.getDataAttributes(this._element);
    for (const s of Object.keys(e))
      pc.has(s) && delete e[s];
    return t = {
      ...e,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : it(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Kt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
j(Kt);
const Ic = "popover", Pc = ".popover-header", Rc = ".popover-body", Mc = {
  ...Kt.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, xc = {
  ...Kt.DefaultType,
  content: "(null|string|element|function)"
};
class An extends Kt {
  // Getters
  static get Default() {
    return Mc;
  }
  static get DefaultType() {
    return xc;
  }
  static get NAME() {
    return Ic;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [Pc]: this._getTitle(),
      [Rc]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = An.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
j(An);
const kc = "scrollspy", Vc = "bs.scrollspy", Tn = `.${Vc}`, Hc = ".data-api", Wc = `activate${Tn}`, us = `click${Tn}`, jc = `load${Tn}${Hc}`, Bc = "dropdown-item", St = "active", Kc = '[data-bs-spy="scroll"]', qe = "[href]", Fc = ".nav, .list-group", ds = ".nav-link", Yc = ".nav-item", Uc = ".list-group-item", qc = `${ds}, ${Yc} > ${ds}, ${Uc}`, zc = ".dropdown", Gc = ".dropdown-toggle", Xc = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, Qc = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ie extends Y {
  constructor(t, e) {
    super(t, e), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return Xc;
  }
  static get DefaultType() {
    return Qc;
  }
  static get NAME() {
    return kc;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.target = it(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((e) => Number.parseFloat(e))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (c.off(this._config.target, us), c.on(this._config.target, us, qe, (t) => {
      const e = this._observableSections.get(t.target.hash);
      if (e) {
        t.preventDefault();
        const s = this._rootElement || window, i = e.offsetTop - this._element.offsetTop;
        if (s.scrollTo) {
          s.scrollTo({
            top: i,
            behavior: "smooth"
          });
          return;
        }
        s.scrollTop = i;
      }
    }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((e) => this._observerCallback(e), t);
  }
  // The logic of selection
  _observerCallback(t) {
    const e = (o) => this._targetLinks.get(`#${o.target.id}`), s = (o) => {
      this._previousScrollData.visibleEntryTop = o.target.offsetTop, this._process(e(o));
    }, i = (this._rootElement || document.documentElement).scrollTop, r = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const o of t) {
      if (!o.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(e(o));
        continue;
      }
      const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (r && a) {
        if (s(o), !i)
          return;
        continue;
      }
      !r && !a && s(o);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = p.find(qe, this._config.target);
    for (const e of t) {
      if (!e.hash || rt(e))
        continue;
      const s = p.findOne(e.hash, this._element);
      jt(s) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(St), this._activateParents(t), c.trigger(this._element, Wc, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(Bc)) {
      p.findOne(Gc, t.closest(zc)).classList.add(St);
      return;
    }
    for (const e of p.parents(t, Fc))
      for (const s of p.prev(e, qc))
        s.classList.add(St);
  }
  _clearActiveClass(t) {
    t.classList.remove(St);
    const e = p.find(`${qe}.${St}`, t);
    for (const s of e)
      s.classList.remove(St);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ie.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
c.on(window, jc, () => {
  for (const n of p.find(Kc))
    Ie.getOrCreateInstance(n);
});
j(Ie);
const Jc = "tab", Zc = "bs.tab", Ot = `.${Zc}`, tl = `hide${Ot}`, el = `hidden${Ot}`, nl = `show${Ot}`, sl = `shown${Ot}`, il = `click${Ot}`, rl = `keydown${Ot}`, ol = `load${Ot}`, al = "ArrowLeft", hs = "ArrowRight", cl = "ArrowUp", fs = "ArrowDown", vt = "active", ps = "fade", ze = "show", ll = "dropdown", ul = ".dropdown-toggle", dl = ".dropdown-menu", Ge = ":not(.dropdown-toggle)", hl = '.list-group, .nav, [role="tablist"]', fl = ".nav-item, .list-group-item", pl = `.nav-link${Ge}, .list-group-item${Ge}, [role="tab"]${Ge}`, _i = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Xe = `${pl}, ${_i}`, _l = `.${vt}[data-bs-toggle="tab"], .${vt}[data-bs-toggle="pill"], .${vt}[data-bs-toggle="list"]`;
class Ht extends Y {
  constructor(t) {
    super(t), this._parent = this._element.closest(hl), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), c.on(this._element, rl, (e) => this._keydown(e)));
  }
  // Getters
  static get NAME() {
    return Jc;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const e = this._getActiveElem(), s = e ? c.trigger(e, tl, {
      relatedTarget: t
    }) : null;
    c.trigger(t, nl, {
      relatedTarget: e
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
  }
  // Private
  _activate(t, e) {
    if (!t)
      return;
    t.classList.add(vt), this._activate(Q(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(ze);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), c.trigger(t, sl, {
        relatedTarget: e
      });
    };
    this._queueCallback(s, t, t.classList.contains(ps));
  }
  _deactivate(t, e) {
    if (!t)
      return;
    t.classList.remove(vt), t.blur(), this._deactivate(Q(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(ze);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), c.trigger(t, el, {
        relatedTarget: e
      });
    };
    this._queueCallback(s, t, t.classList.contains(ps));
  }
  _keydown(t) {
    if (![al, hs, cl, fs].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const e = [hs, fs].includes(t.key), s = En(this._getChildren().filter((i) => !rt(i)), t.target, e, !0);
    s && (s.focus({
      preventScroll: !0
    }), Ht.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return p.find(Xe, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, e) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const s of e)
      this._setInitialAttributesOnChild(s);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const e = this._elemIsActive(t), s = this._getOuterElement(t);
    t.setAttribute("aria-selected", e), s !== t && this._setAttributeIfNotExists(s, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const e = Q(t);
    e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
  }
  _toggleDropDown(t, e) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(ll))
      return;
    const i = (r, o) => {
      const a = p.findOne(r, s);
      a && a.classList.toggle(o, e);
    };
    i(ul, vt), i(dl, ze), s.setAttribute("aria-expanded", e);
  }
  _setAttributeIfNotExists(t, e, s) {
    t.hasAttribute(e) || t.setAttribute(e, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(vt);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(Xe) ? t : p.findOne(Xe, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(fl) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ht.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
c.on(document, il, _i, function(n) {
  ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !rt(this) && Ht.getOrCreateInstance(this).show();
});
c.on(window, ol, () => {
  for (const n of p.find(_l))
    Ht.getOrCreateInstance(n);
});
j(Ht);
const ml = "toast", gl = "bs.toast", lt = `.${gl}`, El = `mouseover${lt}`, vl = `mouseout${lt}`, bl = `focusin${lt}`, Al = `focusout${lt}`, Tl = `hide${lt}`, yl = `hidden${lt}`, wl = `show${lt}`, Ol = `shown${lt}`, Cl = "fade", _s = "hide", ge = "show", Ee = "showing", Nl = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Sl = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Pe extends Y {
  constructor(t, e) {
    super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return Sl;
  }
  static get DefaultType() {
    return Nl;
  }
  static get NAME() {
    return ml;
  }
  // Public
  show() {
    if (c.trigger(this._element, wl).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Cl);
    const e = () => {
      this._element.classList.remove(Ee), c.trigger(this._element, Ol), this._maybeScheduleHide();
    };
    this._element.classList.remove(_s), se(this._element), this._element.classList.add(ge, Ee), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || c.trigger(this._element, Tl).defaultPrevented)
      return;
    const e = () => {
      this._element.classList.add(_s), this._element.classList.remove(Ee, ge), c.trigger(this._element, yl);
    };
    this._element.classList.add(Ee), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(ge), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(ge);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = e;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = e;
        break;
      }
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const s = t.relatedTarget;
    this._element === s || this._element.contains(s) || this._maybeScheduleHide();
  }
  _setListeners() {
    c.on(this._element, El, (t) => this._onInteraction(t, !0)), c.on(this._element, vl, (t) => this._onInteraction(t, !1)), c.on(this._element, bl, (t) => this._onInteraction(t, !0)), c.on(this._element, Al, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Pe.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
De(Pe);
j(Pe);
const Dl = (n = !1) => `
<div class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Attenzione</h5>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
            <p>È online una nuova versione della risorsa.</p>
            <p>Queste pagine saranno dismesse prossimamente.</p>
        </div>
        <div class="modal-footer">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="do-not-show-again" ${n ? "checked" : ""}>
                <label class="form-check-label" for="do-not-show-again">non mostrare di nuovo</label>
            </div>
            <div class="ms-auto">
                <button type="button" class="btn btn-secondary btn-sm" id="ok-buttton">Ok</button>
                <button type="button" class="btn btn-primary btn-sm" id="go-buttton">Scopri il nuovo sito</button>
            </div>
        </div>
        </div>
    </div>
</div>
`;
var G, Qt, Jt, Zt, Pt, te;
class ms {
  constructor(t) {
    _t(this, G, void 0);
    _t(this, Qt, void 0);
    _t(this, Jt, void 0);
    _t(this, Zt, void 0);
    _t(this, Pt, void 0);
    _t(this, te, void 0);
    mt(this, te, t), this.init();
  }
  init() {
    const t = document.createElement("div");
    t.innerHTML = Dl(this.doNotShowChecked).trim(), mt(this, G, t.firstChild), document.body.appendChild(H(this, G)), mt(this, Qt, H(this, G).querySelector("#do-not-show-again")), mt(this, Jt, H(this, G).querySelector("#ok-buttton")), mt(this, Zt, H(this, G).querySelector("#go-buttton")), mt(this, Pt, new yt(H(this, G), {
      backdrop: "static"
    })), H(this, Jt).addEventListener("click", this.onOkClicked.bind(this)), H(this, Zt).addEventListener("click", this.onGoClicked.bind(this));
  }
  show() {
    H(this, Pt).show();
  }
  get doNotShowChecked() {
    return !this.constructor.shouldShow();
  }
  updateSettings() {
    H(this, Qt).checked && localStorage.setItem("do-not-show-again", !0);
  }
  onOkClicked() {
    this.updateSettings(), H(this, Pt).hide();
  }
  onGoClicked() {
    this.updateSettings(), location.href = H(this, te);
  }
  static shouldShow() {
    return localStorage.getItem("do-not-show-again") !== "true";
  }
}
G = new WeakMap(), Qt = new WeakMap(), Jt = new WeakMap(), Zt = new WeakMap(), Pt = new WeakMap(), te = new WeakMap();
const Ll = "https://battesimi.duomo.firenze.it";
document.addEventListener("DOMContentLoaded", async () => {
  ms.shouldShow() && new ms(Ll).show();
});
