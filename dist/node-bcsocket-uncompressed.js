(function(){
function g(a) {
  throw a;
}
var h = void 0, j = !0, k = null, n = !1;
function aa() {
  return function() {
  }
}
function p(a) {
  return function(b) {
    this[a] = b
  }
}
function ba(a) {
  return function() {
    return this[a]
  }
}
function ca(a) {
  return function() {
    return a
  }
}
var q, da = da || {}, r = this;
function ea(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function fa() {
}
function ga(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function u(a) {
  return"array" == ga(a)
}
function ha(a) {
  var b = ga(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
  return"string" == typeof a
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || g(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return w.apply(k, arguments)
}
var x = Date.now || function() {
  return+new Date
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ja = b.prototype;
  a.prototype = new c
}
;function na(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function oa(a) {
  if(!pa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
  return a
}
var qa = /&/g, ra = /</g, sa = />/g, ta = /\"/g, pa = /[&<>\"]/;
var z, ua, va, wa;
function xa() {
  return r.navigator ? r.navigator.userAgent : k
}
wa = va = ua = z = n;
var za;
if(za = xa()) {
  var Aa = r.navigator;
  z = 0 == za.indexOf("Opera");
  ua = !z && -1 != za.indexOf("MSIE");
  va = !z && -1 != za.indexOf("WebKit");
  wa = !z && !va && "Gecko" == Aa.product
}
var Ba = z, A = ua, Ca = wa, B = va, Da;
a: {
  var Ea = "", Fa;
  if(Ba && r.opera) {
    var Ga = r.opera.version, Ea = "function" == typeof Ga ? Ga() : Ga
  }else {
    if(Ca ? Fa = /rv\:([^\);]+)(\)|;)/ : A ? Fa = /MSIE\s+([^\);]+)(\)|;)/ : B && (Fa = /WebKit\/(\S+)/), Fa) {
      var Ha = Fa.exec(xa()), Ea = Ha ? Ha[1] : ""
    }
  }
  if(A) {
    var Ia, Ja = r.document;
    Ia = Ja ? Ja.documentMode : h;
    if(Ia > parseFloat(Ea)) {
      Da = "" + Ia;
      break a
    }
  }
  Da = Ea
}
var Ka = {};
function C(a) {
  var b;
  if(!(b = Ka[a])) {
    b = 0;
    for(var c = ("" + Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var i = c[f] || "", m = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), o = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(i) || ["", "", ""], t = o.exec(m) || ["", "", ""];
        if(0 == s[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == t[2].length) ? -1 : (0 == s[2].length) > (0 == t[2].length) ? 1 : 0) || (s[2] < t[2] ? -1 : s[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ka[a] = 0 <= b
  }
  return b
}
var La = {};
function Ma(a) {
  return La[a] || (La[a] = A && !!document.documentMode && document.documentMode >= a)
}
;function Na(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Na) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
y(Na, Error);
Na.prototype.name = "CustomError";
function Oa(a, b) {
  b.unshift(a);
  Na.call(this, na.apply(k, b));
  b.shift()
}
y(Oa, Na);
Oa.prototype.name = "AssertionError";
function Pa(a, b) {
  g(new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Qa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ra(a) {
  var b = E, c;
  for(c in b) {
    a.call(h, b[c], c, b)
  }
}
function Sa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Va(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Ua.length;f++) {
      c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var F = Array.prototype, Wa = F.indexOf ? function(a, b, c) {
  return F.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Xa = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
function Ya(a) {
  return F.concat.apply(F, arguments)
}
function Za(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function $a(a) {
  if("function" == typeof a.K) {
    return a.K()
  }
  if(v(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Sa(a)
}
function G(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Xa(a, b, c)
    }else {
      var d;
      if("function" == typeof a.ea) {
        d = a.ea()
      }else {
        if("function" != typeof a.K) {
          if(ha(a) || v(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Ta(a)
          }
        }else {
          d = h
        }
      }
      for(var e = $a(a), f = e.length, i = 0;i < f;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
;function ab(a, b) {
  this.M = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && g(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof ab ? (c = a.ea(), d = a.K()) : (c = Ta(a), d = Sa(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
q = ab.prototype;
q.f = 0;
q.K = function() {
  bb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.M[this.j[b]])
  }
  return a
};
q.ea = function() {
  bb(this);
  return this.j.concat()
};
q.ca = function(a) {
  return cb(this.M, a)
};
q.remove = function(a) {
  return cb(this.M, a) ? (delete this.M[a], this.f--, this.j.length > 2 * this.f && bb(this), j) : n
};
function bb(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      cb(a.M, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], cb(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
q.get = function(a, b) {
  return cb(this.M, a) ? this.M[a] : b
};
q.set = function(a, b) {
  cb(this.M, a) || (this.f++, this.j.push(a));
  this.M[a] = b
};
q.n = function() {
  return new ab(this)
};
function cb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function H(a, b) {
  var c;
  if(a instanceof H) {
    this.z = b !== h ? b : a.z, db(this, a.ia), c = a.Sa, I(this), this.Sa = c, eb(this, a.da), fb(this, a.wa), gb(this, a.F), hb(this, a.O.n()), c = a.Ha, I(this), this.Ha = c
  }else {
    if(a && (c = ("" + a).match(Qa))) {
      this.z = !!b;
      db(this, c[1] || "", j);
      var d = c[2] || "";
      I(this);
      this.Sa = d ? decodeURIComponent(d) : "";
      eb(this, c[3] || "", j);
      fb(this, c[4]);
      gb(this, c[5] || "", j);
      hb(this, c[6] || "", j);
      c = c[7] || "";
      I(this);
      this.Ha = c ? decodeURIComponent(c) : ""
    }else {
      this.z = !!b, this.O = new ib(k, 0, this.z)
    }
  }
}
q = H.prototype;
q.ia = "";
q.Sa = "";
q.da = "";
q.wa = k;
q.F = "";
q.Ha = "";
q.ac = n;
q.z = n;
q.toString = function() {
  var a = [], b = this.ia;
  b && a.push(jb(b, kb), ":");
  if(b = this.da) {
    a.push("//");
    var c = this.Sa;
    c && a.push(jb(c, kb), "@");
    a.push(encodeURIComponent("" + b));
    b = this.wa;
    b != k && a.push(":", "" + b)
  }
  if(b = this.F) {
    this.da && "/" != b.charAt(0) && a.push("/"), a.push(jb(b, "/" == b.charAt(0) ? lb : mb))
  }
  (b = this.O.toString()) && a.push("?", b);
  (b = this.Ha) && a.push("#", jb(b, nb));
  return a.join("")
};
q.n = function() {
  return new H(this)
};
function db(a, b, c) {
  I(a);
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;
  a.ia && (a.ia = a.ia.replace(/:$/, ""))
}
function eb(a, b, c) {
  I(a);
  a.da = c ? b ? decodeURIComponent(b) : "" : b
}
function fb(a, b) {
  I(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && g(Error("Bad port number " + b)), a.wa = b) : a.wa = k
}
function gb(a, b, c) {
  I(a);
  a.F = c ? b ? decodeURIComponent(b) : "" : b
}
function hb(a, b, c) {
  I(a);
  b instanceof ib ? (a.O = b, a.O.jb(a.z)) : (c || (b = jb(b, ob)), a.O = new ib(b, 0, a.z))
}
function J(a, b, c) {
  I(a);
  a.O.set(b, c)
}
function pb(a, b, c) {
  I(a);
  u(c) || (c = ["" + c]);
  qb(a.O, b, c)
}
function K(a) {
  I(a);
  J(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ x()).toString(36));
  return a
}
function I(a) {
  a.ac && g(Error("Tried to modify a read-only Uri"))
}
q.jb = function(a) {
  this.z = a;
  this.O && this.O.jb(a);
  return this
};
function rb(a, b, c, d) {
  var e = new H(k, h);
  a && db(e, a);
  b && eb(e, b);
  c && fb(e, c);
  d && gb(e, d);
  return e
}
function jb(a, b) {
  return v(a) ? encodeURI(a).replace(b, sb) : k
}
function sb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var kb = /[#\/\?@]/g, mb = /[\#\?:]/g, lb = /[\#\?]/g, ob = /[\#\?@]/g, nb = /#/g;
function ib(a, b, c) {
  this.w = a || k;
  this.z = !!c
}
function L(a) {
  if(!a.i && (a.i = new ab, a.f = 0, a.w)) {
    for(var b = a.w.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, f = k;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = M(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
q = ib.prototype;
q.i = k;
q.f = k;
q.add = function(a, b) {
  L(this);
  this.w = k;
  var a = M(this, a), c = this.i.get(a);
  c || this.i.set(a, c = []);
  c.push(b);
  this.f++;
  return this
};
q.remove = function(a) {
  L(this);
  a = M(this, a);
  return this.i.ca(a) ? (this.w = k, this.f -= this.i.get(a).length, this.i.remove(a)) : n
};
q.ca = function(a) {
  L(this);
  a = M(this, a);
  return this.i.ca(a)
};
q.ea = function() {
  L(this);
  for(var a = this.i.K(), b = this.i.ea(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
q.K = function(a) {
  L(this);
  var b = [];
  if(a) {
    this.ca(a) && (b = Ya(b, this.i.get(M(this, a))))
  }else {
    for(var a = this.i.K(), c = 0;c < a.length;c++) {
      b = Ya(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  L(this);
  this.w = k;
  a = M(this, a);
  this.ca(a) && (this.f -= this.i.get(a).length);
  this.i.set(a, [b]);
  this.f++;
  return this
};
q.get = function(a, b) {
  var c = a ? this.K(a) : [];
  return 0 < c.length ? c[0] : b
};
function qb(a, b, c) {
  a.remove(b);
  0 < c.length && (a.w = k, a.i.set(M(a, b), Za(c)), a.f += c.length)
}
q.toString = function() {
  if(this.w) {
    return this.w
  }
  if(!this.i) {
    return""
  }
  for(var a = [], b = this.i.ea(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = encodeURIComponent("" + d), d = this.K(d), f = 0;f < d.length;f++) {
      var i = e;
      "" !== d[f] && (i += "=" + encodeURIComponent("" + d[f]));
      a.push(i)
    }
  }
  return this.w = a.join("&")
};
q.n = function() {
  var a = new ib;
  a.w = this.w;
  this.i && (a.i = this.i.n());
  return a
};
function M(a, b) {
  var c = "" + b;
  a.z && (c = c.toLowerCase());
  return c
}
q.jb = function(a) {
  a && !this.z && (L(this), this.w = k, G(this.i, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), qb(this, d, a))
  }, this));
  this.z = a
};
function tb() {
}
tb.prototype.Ca = k;
var ub;
function vb() {
}
y(vb, tb);
function wb(a) {
  return(a = xb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function yb(a) {
  var b = {};
  xb(a) && (b[0] = j, b[1] = j);
  return b
}
function xb(a) {
  if(!a.Ab && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Ab = d
      }catch(e) {
      }
    }
    g(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Ab
}
ub = new vb;
function zb() {
}
var Ab = 0;
q = zb.prototype;
q.key = 0;
q.ha = n;
q.ob = n;
q.Ja = function(a, b, c, d, e, f) {
  "function" == ga(a) ? this.Cb = j : a && a.handleEvent && "function" == ga(a.handleEvent) ? this.Cb = n : g(Error("Invalid listener argument"));
  this.ta = a;
  this.Nb = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.cb = f;
  this.ob = n;
  this.key = ++Ab;
  this.ha = n
};
q.handleEvent = function(a) {
  return this.Cb ? this.ta.call(this.cb || this.src, a) : this.ta.handleEvent.call(this.ta, a)
};
!A || Ma(9);
var Bb = !A || Ma(9), Cb = A && !C("8");
!B || C("528");
Ca && C("1.9b") || A && C("8") || Ba && C("9.5") || B && C("528");
Ca && !C("8") || A && C("9");
function Db() {
}
Db.prototype.ub = n;
Db.prototype.oa = function() {
  this.ub || (this.ub = j, this.v())
};
Db.prototype.v = function() {
  this.Yb && Eb.apply(k, this.Yb);
  if(this.Hb) {
    for(;this.Hb.length;) {
      this.Hb.shift()()
    }
  }
};
function Eb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Eb.apply(k, d) : d && "function" == typeof d.oa && d.oa()
  }
}
;function N(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
y(N, Db);
q = N.prototype;
q.v = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.ga = n;
q.defaultPrevented = n;
q.Pa = j;
q.preventDefault = function() {
  this.defaultPrevented = j;
  this.Pa = n
};
function Fb(a) {
  Fb[" "](a);
  return a
}
Fb[" "] = fa;
function Gb(a, b) {
  a && this.Ja(a, b)
}
y(Gb, N);
q = Gb.prototype;
q.target = k;
q.relatedTarget = k;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = n;
q.altKey = n;
q.shiftKey = n;
q.metaKey = n;
q.ab = k;
q.Ja = function(a, b) {
  var c = this.type = a.type;
  N.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ca) {
      var e;
      a: {
        try {
          Fb(d.nodeName);
          e = j;
          break a
        }catch(f) {
        }
        e = n
      }
      e || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = B || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = B || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.ab = a;
  a.defaultPrevented && this.preventDefault();
  delete this.ga
};
q.preventDefault = function() {
  Gb.ja.preventDefault.call(this);
  var a = this.ab;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, Cb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.v = function() {
  Gb.ja.v.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ab = k
};
var Hb = {}, O = {}, E = {}, Ib = {};
function Jb(a, b, c, d, e) {
  if(b) {
    if(u(b)) {
      for(var f = 0;f < b.length;f++) {
        Jb(a, b[f], c, d, e)
      }
      return k
    }
    var d = !!d, i = O;
    b in i || (i[b] = {f:0, A:0});
    i = i[b];
    d in i || (i[d] = {f:0, A:0}, i.f++);
    var i = i[d], m = ia(a), l;
    i.A++;
    if(i[m]) {
      l = i[m];
      for(f = 0;f < l.length;f++) {
        if(i = l[f], i.ta == c && i.cb == e) {
          if(i.ha) {
            break
          }
          return l[f].key
        }
      }
    }else {
      l = i[m] = [], i.f++
    }
    f = Kb();
    f.src = a;
    i = new zb;
    i.Ja(c, f, a, b, d, e);
    c = i.key;
    f.key = c;
    l.push(i);
    Hb[c] = i;
    E[m] || (E[m] = []);
    E[m].push(i);
    a.addEventListener ? (a == r || !a.rb) && a.addEventListener(b, f, d) : a.attachEvent(b in Ib ? Ib[b] : Ib[b] = "on" + b, f);
    return c
  }
  g(Error("Invalid event type"))
}
function Kb() {
  var a = Lb, b = Bb ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Mb(a, b, c, d, e) {
  if(u(b)) {
    for(var f = 0;f < b.length;f++) {
      Mb(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = O;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = k
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].ta == c && a[f].capture == d && a[f].cb == e) {
          Nb(a[f].key);
          break
        }
      }
    }
  }
}
function Nb(a) {
  if(!Hb[a]) {
    return n
  }
  var b = Hb[a];
  if(b.ha) {
    return n
  }
  var c = b.src, d = b.type, e = b.Nb, f = b.capture;
  c.removeEventListener ? (c == r || !c.rb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Ib ? Ib[d] : Ib[d] = "on" + d, e);
  c = ia(c);
  e = O[d][f][c];
  if(E[c]) {
    var i = E[c], m = Wa(i, b);
    0 <= m && F.splice.call(i, m, 1);
    0 == i.length && delete E[c]
  }
  b.ha = j;
  e.Gb = j;
  Ob(d, f, c, e);
  delete Hb[a];
  return j
}
function Ob(a, b, c, d) {
  if(!d.Ka && d.Gb) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].ha ? d[e].Nb.src = k : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Gb = n;
    0 == f && (delete O[a][b][c], O[a][b].f--, 0 == O[a][b].f && (delete O[a][b], O[a].f--), 0 == O[a].f && delete O[a])
  }
}
function Pb(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Nb(f.key), c++
        }
      }
    })
  }else {
    if(a = ia(a), E[a]) {
      for(var a = E[a], e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Nb(f.key), c++
        }
      }
    }
  }
}
function Qb(a, b, c, d, e) {
  var f = 1, b = ia(b);
  if(a[b]) {
    a.A--;
    a = a[b];
    a.Ka ? a.Ka++ : a.Ka = 1;
    try {
      for(var i = a.length, m = 0;m < i;m++) {
        var l = a[m];
        l && !l.ha && (f &= Rb(l, e) !== n)
      }
    }finally {
      a.Ka--, Ob(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Rb(a, b) {
  a.ob && Nb(a.key);
  return a.handleEvent(b)
}
function Lb(a, b) {
  if(!Hb[a]) {
    return j
  }
  var c = Hb[a], d = c.type, e = O;
  if(!(d in e)) {
    return j
  }
  var e = e[d], f, i;
  if(!Bb) {
    f = b || ea("window.event");
    var m = j in e, l = n in e;
    if(m) {
      if(0 > f.keyCode || f.returnValue != h) {
        return j
      }
      a: {
        var o = n;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(s) {
            o = j
          }
        }
        if(o || f.returnValue == h) {
          f.returnValue = j
        }
      }
    }
    o = new Gb;
    o.Ja(f, this);
    f = j;
    try {
      if(m) {
        for(var t = [], ya = o.currentTarget;ya;ya = ya.parentNode) {
          t.push(ya)
        }
        i = e[j];
        i.A = i.f;
        for(var D = t.length - 1;!o.ga && 0 <= D && i.A;D--) {
          o.currentTarget = t[D], f &= Qb(i, t[D], d, j, o)
        }
        if(l) {
          i = e[n];
          i.A = i.f;
          for(D = 0;!o.ga && D < t.length && i.A;D++) {
            o.currentTarget = t[D], f &= Qb(i, t[D], d, n, o)
          }
        }
      }else {
        f = Rb(c, o)
      }
    }finally {
      t && (t.length = 0), o.oa()
    }
    return f
  }
  d = new Gb(b, this);
  try {
    f = Rb(c, d)
  }finally {
    d.oa()
  }
  return f
}
;function Sb(a) {
  return Tb(a || arguments.callee.caller, [])
}
function Tb(a, b) {
  var c = [];
  if(0 <= Wa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Ub(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = "" + f;
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Ub(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Tb(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ub(a) {
  if(Vb[a]) {
    return Vb[a]
  }
  a = "" + a;
  if(!Vb[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Vb[a] = b ? b[1] : "[Anonymous]"
  }
  return Vb[a]
}
var Vb = {};
function Wb(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Wb.prototype.wb = k;
Wb.prototype.vb = k;
var Xb = 0;
Wb.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Xb++;
  d || x();
  this.sa = a;
  this.bc = b;
  delete this.wb;
  delete this.vb
};
Wb.prototype.Rb = p("sa");
function P(a) {
  this.cc = a
}
P.prototype.La = k;
P.prototype.sa = k;
P.prototype.Xa = k;
P.prototype.zb = k;
function Yb(a, b) {
  this.name = a;
  this.value = b
}
Yb.prototype.toString = ba("name");
var Zb = new Yb("SEVERE", 1E3), $b = new Yb("WARNING", 900), ac = new Yb("INFO", 800), bc = new Yb("CONFIG", 700), cc = new Yb("FINE", 500);
q = P.prototype;
q.getParent = ba("La");
q.Rb = p("sa");
function dc(a) {
  if(a.sa) {
    return a.sa
  }
  if(a.La) {
    return dc(a.La)
  }
  Pa("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= dc(this).value) {
    a = this.$b(a, b, c);
    b = "log:" + a.bc;
    r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b));
    r.msWriteProfilerMark && r.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.zb) {
        for(var e = 0, f = h;f = c.zb[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.$b = function(a, b, c) {
  var d = new Wb(a, "" + b, this.cc);
  if(c) {
    d.wb = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var i;
      var m = ea("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:m, stack:"Not available"}
      }else {
        var l, o, s = n;
        try {
          l = c.lineNumber || c.pc || "Not available"
        }catch(t) {
          l = "Not available", s = j
        }
        try {
          o = c.fileName || c.filename || c.sourceURL || m
        }catch(ya) {
          o = "Not available", s = j
        }
        i = s || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:l, fileName:o, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + oa(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + oa(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + oa(Sb(f) + "-> ")
    }catch(D) {
      e = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.vb = e
  }
  return d
};
q.G = function(a, b) {
  this.log(Zb, a, b)
};
q.la = function(a, b) {
  this.log($b, a, b)
};
q.info = function(a, b) {
  this.log(ac, a, b)
};
function Q(a, b) {
  a.log(cc, b, h)
}
var ec = {}, fc = k;
function gc(a) {
  fc || (fc = new P(""), ec[""] = fc, fc.Rb(bc));
  var b;
  if(!(b = ec[a])) {
    b = new P(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = gc(a.substr(0, c));
    c.Xa || (c.Xa = {});
    c.Xa[d] = b;
    b.La = c;
    ec[a] = b
  }
  return b
}
;function hc() {
}
y(hc, Db);
q = hc.prototype;
q.rb = j;
q.ib = k;
q.addEventListener = function(a, b, c, d) {
  Jb(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Mb(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = O;
  if(b in c) {
    if(v(a)) {
      a = new N(a, this)
    }else {
      if(a instanceof N) {
        a.target = a.target || this
      }else {
        var d = a, a = new N(b, this);
        Va(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.ib) {
        e.push(f)
      }
      f = c[j];
      f.A = f.f;
      for(var i = e.length - 1;!a.ga && 0 <= i && f.A;i--) {
        a.currentTarget = e[i], d &= Qb(f, e[i], a.type, j, a) && a.Pa != n
      }
    }
    if(n in c) {
      if(f = c[n], f.A = f.f, b) {
        for(i = 0;!a.ga && i < e.length && f.A;i++) {
          a.currentTarget = e[i], d &= Qb(f, e[i], a.type, n, a) && a.Pa != n
        }
      }else {
        for(e = this;!a.ga && e && f.A;e = e.ib) {
          a.currentTarget = e, d &= Qb(f, e, a.type, n, a) && a.Pa != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
q.v = function() {
  hc.ja.v.call(this);
  Pb(this);
  this.ib = k
};
function ic(a, b) {
  this.qa = a || 1;
  this.Aa = b || jc;
  this.Wa = w(this.nc, this);
  this.hb = x()
}
y(ic, hc);
ic.prototype.enabled = n;
var jc = r.window;
q = ic.prototype;
q.P = k;
q.setInterval = function(a) {
  this.qa = a;
  this.P && this.enabled ? (this.stop(), this.start()) : this.P && this.stop()
};
q.nc = function() {
  if(this.enabled) {
    var a = x() - this.hb;
    0 < a && a < 0.8 * this.qa ? this.P = this.Aa.setTimeout(this.Wa, this.qa - a) : (this.dispatchEvent(kc), this.enabled && (this.P = this.Aa.setTimeout(this.Wa, this.qa), this.hb = x()))
  }
};
q.start = function() {
  this.enabled = j;
  this.P || (this.P = this.Aa.setTimeout(this.Wa, this.qa), this.hb = x())
};
q.stop = function() {
  this.enabled = n;
  this.P && (this.Aa.clearTimeout(this.P), this.P = k)
};
q.v = function() {
  ic.ja.v.call(this);
  this.stop();
  delete this.Aa
};
var kc = "tick";
function lc(a) {
  this.e = a;
  this.j = []
}
y(lc, Db);
var mc = [];
function nc(a, b, c, d, e, f) {
  u(c) || (mc[0] = c, c = mc);
  for(var i = 0;i < c.length;i++) {
    a.j.push(Jb(b, c[i], d || a, e || n, f || a.e || a))
  }
}
lc.prototype.v = function() {
  lc.ja.v.call(this);
  Xa(this.j, Nb);
  this.j.length = 0
};
lc.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function R(a, b, c, d, e) {
  this.c = a;
  this.a = b;
  this.U = c;
  this.B = d;
  this.ya = e || 1;
  this.za = oc;
  this.$a = new lc(this);
  this.Ma = new ic;
  this.Ma.setInterval(pc)
}
q = R.prototype;
q.s = k;
q.H = n;
q.ma = k;
q.lb = k;
q.xa = k;
q.R = k;
q.t = k;
q.S = k;
q.l = k;
q.Ba = 0;
q.I = k;
q.ka = k;
q.q = k;
q.h = -1;
q.Qb = j;
q.V = n;
var oc = 45E3, pc = 250;
function qc(a, b) {
  switch(a) {
    case 0:
      return"Non-200 return code (" + b + ")";
    case 1:
      return"XMLHTTP failure (no data)";
    case 2:
      return"HttpConnection timeout";
    default:
      return"Unknown error"
  }
}
var rc = {}, sc = {};
function tc() {
  return!A || Ma(10)
}
q = R.prototype;
q.T = p("s");
q.setTimeout = p("za");
function uc(a, b, c) {
  a.R = K(b.n());
  a.S = c;
  a.sb = j;
  vc(a, k)
}
function wc(a, b, c, d, e) {
  a.R = K(b.n());
  a.S = k;
  a.sb = c;
  e && (a.Qb = n);
  vc(a, d)
}
function vc(a, b) {
  a.xa = x();
  xc(a);
  a.t = a.R.n();
  pb(a.t, "t", a.ya);
  a.Ba = 0;
  a.l = a.c.Da(a.c.Qa() ? b : k);
  nc(a.$a, a.l, "readystatechange", a.oc, n, a);
  var c;
  if(a.s) {
    c = a.s;
    var d = {}, e;
    for(e in c) {
      d[e] = c[e]
    }
    c = d
  }else {
    c = {}
  }
  a.S ? (a.ka = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.l.send(a.t, a.ka, a.S, c)) : (a.ka = "GET", a.Qb && !B && (c.Connection = "close"), a.l.send(a.t, a.ka, k, c));
  a.c.D(yc);
  if(d = a.S) {
    c = "";
    d = d.split("&");
    for(e = 0;e < d.length;e++) {
      var f = d[e].split("=");
      if(1 < f.length) {
        var i = f[0], f = f[1], m = i.split("_");
        c = 2 <= m.length && "type" == m[1] ? c + (i + "=" + f + "&") : c + (i + "=redacted&")
      }
    }
  }else {
    c = k
  }
  a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.ya + "]: " + a.ka + "\n" + a.t + "\n" + c)
}
q.oc = function(a) {
  a = a.target;
  try {
    if(a == this.l) {
      a: {
        var b = S(this.l), c = this.l.fa, d = zc(this.l);
        if(!tc() || B && !C("420+")) {
          if(4 > b) {
            break a
          }
        }else {
          if(3 > b || 3 == b && !Ba && !Ac(this.l)) {
            break a
          }
        }
        !this.V && (4 == b && c != Bc) && (c == Cc || 0 >= d ? this.c.D(Dc) : this.c.D(Ec));
        Fc(this);
        var e = zc(this.l);
        this.h = e;
        var f = Ac(this.l);
        f || this.a.debug("No response text for uri " + this.t + " status " + e);
        this.H = 200 == e;
        this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.ya + "]: " + this.ka + "\n" + this.t + "\n" + b + " " + e);
        if(this.H) {
          if(4 == b && T(this), this.sb ? (Gc(this, b, f), Ba && 3 == b && (nc(this.$a, this.Ma, kc, this.kc), this.Ma.start())) : (Hc(this.a, this.B, f, k), Ic(this, f)), this.H && !this.V) {
            4 == b ? this.c.va(this) : (this.H = n, xc(this))
          }
        }else {
          this.q = 400 == e && 0 < f.indexOf("Unknown SID") ? 3 : 0, U(), Hc(this.a, this.B, f), T(this), Jc(this)
        }
      }
    }else {
      this.a.la("Called back with an unexpected xmlhttp")
    }
  }catch(i) {
    this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.l && Ac(this.l) ? V(this.a, i, "ResponseText: " + Ac(this.l)) : V(this.a, i, "No response text")
  }finally {
  }
};
function Gc(a, b, c) {
  for(var d = j;!a.V && a.Ba < c.length;) {
    var e = Kc(a, c);
    if(e == sc) {
      4 == b && (a.q = 4, U(), d = n);
      Hc(a.a, a.B, k, "[Incomplete Response]");
      break
    }else {
      if(e == rc) {
        a.q = 4;
        U();
        Hc(a.a, a.B, c, "[Invalid Chunk]");
        d = n;
        break
      }else {
        Hc(a.a, a.B, e, k), Ic(a, e)
      }
    }
  }
  4 == b && 0 == c.length && (a.q = 1, U(), d = n);
  a.H = a.H && d;
  d || (Hc(a.a, a.B, c, "[Invalid Chunked Response]"), T(a), Jc(a))
}
q.kc = function() {
  var a = S(this.l), b = Ac(this.l);
  this.Ba < b.length && (Fc(this), Gc(this, a, b), this.H && 4 != a && xc(this))
};
function Kc(a, b) {
  var c = a.Ba, d = b.indexOf("\n", c);
  if(-1 == d) {
    return sc
  }
  c = Number(b.substring(c, d));
  if(isNaN(c)) {
    return rc
  }
  d += 1;
  if(d + c > b.length) {
    return sc
  }
  var e = b.substr(d, c);
  a.Ba = d + c;
  return e
}
function Lc(a, b) {
  a.xa = x();
  xc(a);
  var c = b ? window.location.hostname : "";
  a.t = a.R.n();
  J(a.t, "DOMAIN", c);
  J(a.t, "t", a.ya);
  try {
    a.I = new ActiveXObject("htmlfile")
  }catch(d) {
    a.a.G("ActiveX blocked");
    T(a);
    a.q = 7;
    U();
    Jc(a);
    return
  }
  var e = "<html><body>";
  b && (e += '<script>document.domain="' + c + '"<\/script>');
  e += "</body></html>";
  a.I.open();
  a.I.write(e);
  a.I.close();
  a.I.parentWindow.m = w(a.ic, a);
  a.I.parentWindow.d = w(a.Mb, a, j);
  a.I.parentWindow.rpcClose = w(a.Mb, a, n);
  c = a.I.createElement("div");
  a.I.parentWindow.document.body.appendChild(c);
  c.innerHTML = '<iframe src="' + a.t + '"></iframe>';
  a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.ya + "]: GET\n" + a.t);
  a.c.D(yc)
}
q.ic = function(a) {
  W(w(this.hc, this, a), 0)
};
q.hc = function(a) {
  if(!this.V) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.B + "): " + Mc(b, a));
    Fc(this);
    Ic(this, a);
    xc(this)
  }
};
q.Mb = function(a) {
  W(w(this.gc, this, a), 0)
};
q.gc = function(a) {
  this.V || (this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), T(this), this.H = a, this.c.va(this), this.c.D(Nc))
};
q.cancel = function() {
  this.V = j;
  T(this)
};
function xc(a) {
  a.lb = x() + a.za;
  Oc(a, a.za)
}
function Oc(a, b) {
  a.ma != k && g(Error("WatchDog timer not null"));
  a.ma = W(w(a.jc, a), b)
}
function Fc(a) {
  a.ma && (r.clearTimeout(a.ma), a.ma = k)
}
q.jc = function() {
  this.ma = k;
  var a = x();
  0 <= a - this.lb ? (this.H && this.a.G("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.t), this.c.D(Dc), T(this), this.q = 2, U(), Jc(this)) : (this.a.la("WatchDog timer called too early"), Oc(this, this.lb - a))
};
function Jc(a) {
  !a.c.Bb() && !a.V && a.c.va(a)
}
function T(a) {
  Fc(a);
  a.Ma.stop();
  var b = a.$a;
  Xa(b.j, Nb);
  b.j.length = 0;
  a.l && (b = a.l, a.l = k, b.abort(), b.oa());
  a.I && (a.I = k)
}
q.yb = ba("q");
function Ic(a, b) {
  try {
    a.c.Jb(a, b), a.c.D(Nc)
  }catch(c) {
    V(a.a, c, "Error in httprequest callback")
  }
}
;function Pc(a) {
  return eval("(" + a + ")")
}
function Qc(a) {
  var b = [];
  Rc(new Sc, a, b);
  return b.join("")
}
function Sc() {
  this.Oa = h
}
function Rc(a, b, c) {
  switch(typeof b) {
    case "string":
      Tc(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == k) {
        c.push("null");
        break
      }
      if(u(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", f = 0;f < d;f++) {
          c.push(e), e = b[f], Rc(a, a.Oa ? a.Oa.call(b, "" + f, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Tc(f, c), c.push(":"), Rc(a, a.Oa ? a.Oa.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      g(Error("Unknown type: " + typeof b))
  }
}
var Uc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Vc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Tc(a, b) {
  b.push('"', a.replace(Vc, function(a) {
    if(a in Uc) {
      return Uc[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Uc[a] = e + b.toString(16)
  }), '"')
}
;function X() {
  this.p = gc("goog.net.BrowserChannel")
}
function Hc(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + Mc(a, c) + (d ? " " + d : ""))
}
X.prototype.debug = function(a) {
  this.info(a)
};
function V(a, b, c) {
  a.G((c || "Exception") + b)
}
X.prototype.info = function(a) {
  this.p.info(a)
};
X.prototype.la = function(a) {
  this.p.la(a)
};
X.prototype.G = function(a) {
  this.p.G(a)
};
function Mc(a, b) {
  if(!b || b == Wc) {
    return b
  }
  try {
    for(var c = Pc(b), d = 0;d < c.length;d++) {
      if(u(c[d])) {
        var e = c[d];
        if(!(2 > e.length)) {
          var f = e[1];
          if(u(f) && !(1 > f.length)) {
            var i = f[0];
            if("noop" != i && "stop" != i) {
              for(var m = 1;m < f.length;m++) {
                f[m] = ""
              }
            }
          }
        }
      }
    }
    return Qc(c)
  }catch(l) {
    return a.debug("Exception parsing expected JS array - probably was not JS"), b
  }
}
;var Bc = 7, Cc = 8;
function Xc(a) {
  this.headers = new ab;
  this.na = a || k
}
y(Xc, hc);
Xc.prototype.p = gc("goog.net.XhrIo");
var Yc = /^https?$/i;
q = Xc.prototype;
q.Q = n;
q.g = k;
q.Ta = k;
q.gb = "";
q.Db = "";
q.fa = 0;
q.q = "";
q.Za = n;
q.Ia = n;
q.eb = n;
q.Z = n;
q.Ra = 0;
q.$ = k;
q.Pb = "";
q.Tb = n;
q.send = function(a, b, c, d) {
  this.g && g(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.gb = a;
  this.q = "";
  this.fa = 0;
  this.Db = b;
  this.Za = n;
  this.Q = j;
  this.g = this.qb();
  this.Ta = this.na ? this.na.Ca || (this.na.Ca = yb(this.na)) : ub.Ca || (ub.Ca = yb(ub));
  this.g.onreadystatechange = w(this.Ib, this);
  try {
    Q(this.p, Y(this, "Opening Xhr")), this.eb = j, this.g.open(b, a, j), this.eb = n
  }catch(e) {
    Q(this.p, Y(this, "Error opening Xhr: " + e.message));
    Zc(this, e);
    return
  }
  var a = c || "", f = this.headers.n();
  d && G(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.ca("Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  G(f, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  this.Pb && (this.g.responseType = this.Pb);
  "withCredentials" in this.g && (this.g.withCredentials = this.Tb);
  try {
    this.$ && (jc.clearTimeout(this.$), this.$ = k), 0 < this.Ra && (Q(this.p, Y(this, "Will abort after " + this.Ra + "ms if incomplete")), this.$ = jc.setTimeout(w(this.za, this), this.Ra)), Q(this.p, Y(this, "Sending request")), this.Ia = j, this.g.send(a), this.Ia = n
  }catch(i) {
    Q(this.p, Y(this, "Send error: " + i.message)), Zc(this, i)
  }
};
q.qb = function() {
  return this.na ? wb(this.na) : wb(ub)
};
q.za = function() {
  "undefined" != typeof da && this.g && (this.q = "Timed out after " + this.Ra + "ms, aborting", this.fa = Cc, Q(this.p, Y(this, this.q)), this.dispatchEvent("timeout"), this.abort(Cc))
};
function Zc(a, b) {
  a.Q = n;
  a.g && (a.Z = j, a.g.abort(), a.Z = n);
  a.q = b;
  a.fa = 5;
  $c(a);
  ad(a)
}
function $c(a) {
  a.Za || (a.Za = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function(a) {
  this.g && this.Q && (Q(this.p, Y(this, "Aborting")), this.Q = n, this.Z = j, this.g.abort(), this.Z = n, this.fa = a || Bc, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ad(this))
};
q.v = function() {
  this.g && (this.Q && (this.Q = n, this.Z = j, this.g.abort(), this.Z = n), ad(this, j));
  Xc.ja.v.call(this)
};
q.Ib = function() {
  !this.eb && !this.Ia && !this.Z ? this.fc() : bd(this)
};
q.fc = function() {
  bd(this)
};
function bd(a) {
  if(a.Q && "undefined" != typeof da) {
    if(a.Ta[1] && 4 == S(a) && 2 == zc(a)) {
      Q(a.p, Y(a, "Local request error detected and ignored"))
    }else {
      if(a.Ia && 4 == S(a)) {
        jc.setTimeout(w(a.Ib, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == S(a)) {
          Q(a.p, Y(a, "Request complete"));
          a.Q = n;
          try {
            var b = zc(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 304:
                ;
                case 1223:
                  d = j;
                  break a;
                default:
                  d = n
              }
            }
            if(!(c = d)) {
              var e;
              if(e = 0 === b) {
                var f = ("" + a.gb).match(Qa)[1] || k;
                if(!f && self.location) {
                  var i = self.location.protocol, f = i.substr(0, i.length - 1)
                }
                e = !Yc.test(f ? f.toLowerCase() : "")
              }
              c = e
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.fa = 6;
              var m;
              try {
                m = 2 < S(a) ? a.g.statusText : ""
              }catch(l) {
                Q(a.p, "Can not get status: " + l.message), m = ""
              }
              a.q = m + " [" + zc(a) + "]";
              $c(a)
            }
          }finally {
            ad(a)
          }
        }
      }
    }
  }
}
function ad(a, b) {
  if(a.g) {
    var c = a.g, d = a.Ta[0] ? fa : k;
    a.g = k;
    a.Ta = k;
    a.$ && (jc.clearTimeout(a.$), a.$ = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      a.p.G("Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.isActive = function() {
  return!!this.g
};
function S(a) {
  return a.g ? a.g.readyState : 0
}
function zc(a) {
  try {
    return 2 < S(a) ? a.g.status : -1
  }catch(b) {
    return a.p.la("Can not get status: " + b.message), -1
  }
}
function Ac(a) {
  try {
    return a.g ? a.g.responseText : ""
  }catch(b) {
    return Q(a.p, "Can not get responseText: " + b.message), ""
  }
}
q.yb = function() {
  return v(this.q) ? this.q : "" + this.q
};
function Y(a, b) {
  return b + " [" + a.Db + " " + a.gb + " " + zc(a) + "]"
}
;function cd() {
  this.Ob = x()
}
new cd;
cd.prototype.set = p("Ob");
cd.prototype.reset = function() {
  this.set(x())
};
cd.prototype.get = ba("Ob");
function dd(a, b, c, d, e) {
  (new X).debug("TestLoadImageWithRetries: " + e);
  if(0 == d) {
    c(n)
  }else {
    var f = e || 0;
    d--;
    ed(a, b, function(e) {
      e ? c(j) : r.setTimeout(function() {
        dd(a, b, c, d, f)
      }, f)
    })
  }
}
function ed(a, b, c) {
  var d = new X;
  d.debug("TestLoadImage: loading " + a);
  var e = new Image;
  e.onload = function() {
    try {
      d.debug("TestLoadImage: loaded"), fd(e), c(j)
    }catch(a) {
      V(d, a)
    }
  };
  e.onerror = function() {
    try {
      d.debug("TestLoadImage: error"), fd(e), c(n)
    }catch(a) {
      V(d, a)
    }
  };
  e.onabort = function() {
    try {
      d.debug("TestLoadImage: abort"), fd(e), c(n)
    }catch(a) {
      V(d, a)
    }
  };
  e.ontimeout = function() {
    try {
      d.debug("TestLoadImage: timeout"), fd(e), c(n)
    }catch(a) {
      V(d, a)
    }
  };
  r.setTimeout(function() {
    if(e.ontimeout) {
      e.ontimeout()
    }
  }, b);
  e.src = a
}
function fd(a) {
  a.onload = k;
  a.onerror = k;
  a.onabort = k;
  a.ontimeout = k
}
;function gd(a, b) {
  this.c = a;
  this.a = b
}
q = gd.prototype;
q.s = k;
q.u = k;
q.Na = n;
q.Sb = k;
q.Fa = k;
q.fb = k;
q.F = k;
q.b = k;
q.h = -1;
q.L = k;
q.Va = k;
q.T = p("s");
q.Ya = function(a) {
  this.F = a;
  a = hd(this.c, this.F);
  U();
  pb(a, "MODE", "init");
  this.u = new R(this, this.a, h, h, h);
  this.u.T(this.s);
  wc(this.u, a, n, k, j);
  this.b = 0;
  this.Sb = x()
};
q.Xb = function(a) {
  if(a) {
    this.b = 2, id(this)
  }else {
    U();
    var b = this.c;
    b.a.debug("Test Connection Blocked");
    b.h = b.W.h;
    Z(b, 9)
  }
  a && this.D(Ec)
};
function id(a) {
  a.a.debug("TestConnection: starting stage 2");
  a.u = new R(a, a.a, h, h, h);
  a.u.T(a.s);
  var b = jd(a.c, a.L, a.F);
  U();
  if(tc()) {
    pb(b, "TYPE", "xmlhttp"), wc(a.u, b, n, a.L, n)
  }else {
    pb(b, "TYPE", "html");
    var c = a.u, a = Boolean(a.L);
    c.R = K(b.n());
    Lc(c, a)
  }
}
q.Da = function(a) {
  return this.c.Da(a)
};
q.abort = function() {
  this.u && (this.u.cancel(), this.u = k);
  this.h = -1
};
q.Bb = ca(n);
q.Jb = function(a, b) {
  this.h = a.h;
  if(0 == this.b) {
    if(this.a.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = Pc(b)
      }catch(d) {
        V(this.a, d);
        kd(this.c, this);
        return
      }
      this.L = this.c.correctHostPrefix(c[0]);
      this.Va = c[1]
    }else {
      this.a.debug("TestConnection: Null responseText"), kd(this.c, this)
    }
  }else {
    if(2 == this.b) {
      if(this.Na) {
        U(), this.fb = x()
      }else {
        if("11111" == b) {
          if(U(), this.Na = j, this.Fa = x(), c = this.Fa - this.Sb, tc() || 500 > c) {
            this.h = 200, this.u.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), U(), ld(this.c, this, j)
          }
        }else {
          U(), this.Fa = this.fb = x(), this.Na = n
        }
      }
    }
  }
};
q.va = function() {
  this.h = this.u.h;
  if(this.u.H) {
    if(0 == this.b) {
      if(this.a.debug("TestConnection: request complete for initial check"), this.Va) {
        this.b = 1;
        var a = md(this.c, this.Va, "/mail/images/cleardot.gif");
        K(a);
        dd(a.toString(), 5E3, w(this.Xb, this), 3, 2E3);
        this.D(yc)
      }else {
        this.b = 2, id(this)
      }
    }else {
      2 == this.b && (this.a.debug("TestConnection: request complete for stage 2"), a = n, (a = tc() ? this.Na : 200 > this.fb - this.Fa ? n : j) ? (this.a.debug("Test connection succeeded; using streaming connection"), U(), ld(this.c, this, j)) : (this.a.debug("Test connection failed; not using streaming"), U(), ld(this.c, this, n)))
    }
  }else {
    this.a.debug("TestConnection: request failed, in state " + this.b), 0 == this.b ? U() : 2 == this.b && U(), kd(this.c, this)
  }
};
q.Qa = function() {
  return this.c.Qa()
};
q.isActive = function() {
  return this.c.isActive()
};
q.D = function(a) {
  this.c.D(a)
};
function nd(a) {
  this.pb = a || k;
  this.b = od;
  this.r = [];
  this.N = [];
  this.a = new X
}
function pd(a, b) {
  this.Fb = a;
  this.map = b
}
q = nd.prototype;
q.s = k;
q.pa = k;
q.o = k;
q.k = k;
q.F = k;
q.Ga = k;
q.nb = k;
q.L = k;
q.Vb = j;
q.ua = 0;
q.dc = 0;
q.Ea = n;
q.e = k;
q.C = k;
q.J = k;
q.X = k;
q.W = k;
q.kb = k;
q.Ub = j;
q.ra = -1;
q.Eb = -1;
q.h = -1;
q.Y = 0;
q.aa = 0;
q.Wb = 5E3;
q.lc = 1E4;
q.bb = 2;
q.xb = 2E4;
q.tb = Pc;
q.ba = 8;
var od = 1, qd = new hc;
function rd(a) {
  N.call(this, "statevent", a)
}
y(rd, N);
function sd(a, b) {
  N.call(this, "timingevent", a);
  this.size = b
}
y(sd, N);
var yc = 1, Ec = 2, Dc = 3, Nc = 4;
function td(a) {
  N.call(this, "serverreachability", a)
}
y(td, N);
var Wc = "y2f%";
q = nd.prototype;
q.Ya = function(a, b, c, d, e) {
  this.a.debug("connect()");
  U();
  this.F = b;
  this.pa = c || {};
  d && e !== h && (this.pa.OSID = d, this.pa.OAID = e);
  this.a.debug("connectTest_()");
  ud(this) && (this.W = new gd(this, this.a), this.W.T(this.s), this.W.Ya(a))
};
function vd(a) {
  a.W && (a.W.abort(), a.W = k);
  a.k && (a.k.cancel(), a.k = k);
  a.J && (r.clearTimeout(a.J), a.J = k);
  wd(a);
  a.o && (a.o.cancel(), a.o = k);
  a.C && (r.clearTimeout(a.C), a.C = k)
}
q.T = p("s");
q.Bb = function() {
  return 0 == this.b
};
function xd(a) {
  !a.o && !a.C && (a.C = W(w(a.Lb, a), 0), a.Y = 0)
}
q.Lb = function(a) {
  this.C = k;
  this.a.debug("startForwardChannel_");
  if(ud(this)) {
    if(this.b == od) {
      if(a) {
        this.a.G("Not supposed to retry the open")
      }else {
        this.a.debug("open_()");
        this.ua = Math.floor(1E5 * Math.random());
        var a = this.ua++, b = new R(this, this.a, "", a, h);
        b.T(this.s);
        var c = yd(this), d = this.Ga.n();
        J(d, "RID", a);
        this.pb && J(d, "CVER", this.pb);
        zd(this, d);
        uc(b, d, c);
        this.o = b;
        this.b = 2
      }
    }else {
      3 == this.b && (a ? Ad(this, a) : 0 == this.r.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.o ? this.a.G("startForwardChannel_ returned: connection already in progress") : (Ad(this), this.a.debug("startForwardChannel_ finished, sent request")))
    }
  }
};
function Ad(a, b) {
  var c, d;
  b ? 6 < a.ba ? (a.r = a.N.concat(a.r), a.N.length = 0, c = a.ua - 1, d = yd(a)) : (c = b.B, d = b.S) : (c = a.ua++, d = yd(a));
  var e = a.Ga.n();
  J(e, "SID", a.U);
  J(e, "RID", c);
  J(e, "AID", a.ra);
  zd(a, e);
  c = new R(a, a.a, a.U, c, a.Y + 1);
  c.T(a.s);
  c.setTimeout(Math.round(0.5 * a.xb) + Math.round(0.5 * a.xb * Math.random()));
  a.o = c;
  uc(c, e, d)
}
function zd(a, b) {
  if(a.e) {
    var c = a.e.getAdditionalParams(a);
    c && G(c, function(a, c) {
      J(b, c, a)
    })
  }
}
function yd(a) {
  var b = Math.min(a.r.length, 1E3), c = ["count=" + b], d;
  6 < a.ba && 0 < b ? (d = a.r[0].Fb, c.push("ofs=" + d)) : d = 0;
  for(var e = 0;e < b;e++) {
    var f = a.r[e].Fb, i = a.r[e].map, f = 6 >= a.ba ? e : f - d;
    try {
      G(i, function(a, b) {
        c.push("req" + f + "_" + b + "=" + encodeURIComponent(a))
      })
    }catch(m) {
      c.push("req" + f + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, i)
    }
  }
  a.N = a.N.concat(a.r.splice(0, b));
  return c.join("&")
}
function Bd(a) {
  !a.k && !a.J && (a.mb = 1, a.J = W(w(a.Kb, a), 0), a.aa = 0)
}
function Cd(a) {
  if(a.k || a.J) {
    return a.a.G("Request already in progress"), n
  }
  if(3 <= a.aa) {
    return n
  }
  a.a.debug("Going to retry GET");
  a.mb++;
  a.J = W(w(a.Kb, a), Dd(a, a.aa));
  a.aa++;
  return j
}
q.Kb = function() {
  this.J = k;
  if(ud(this)) {
    this.a.debug("Creating new HttpRequest");
    this.k = new R(this, this.a, this.U, "rpc", this.mb);
    this.k.T(this.s);
    var a = this.nb.n();
    J(a, "RID", "rpc");
    J(a, "SID", this.U);
    J(a, "CI", this.kb ? "0" : "1");
    J(a, "AID", this.ra);
    zd(this, a);
    if(tc()) {
      J(a, "TYPE", "xmlhttp"), wc(this.k, a, j, this.L, n)
    }else {
      J(a, "TYPE", "html");
      var b = this.k, c = Boolean(this.L);
      b.R = K(a.n());
      Lc(b, c)
    }
    this.a.debug("New Request created")
  }
};
function ud(a) {
  if(a.e) {
    var b = a.e.okToMakeRequest(a);
    if(0 != b) {
      return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), n
    }
  }
  return j
}
function ld(a, b, c) {
  a.a.debug("Test Connection Finished");
  a.kb = a.Ub && c;
  a.h = b.h;
  a.a.debug("connectChannel_()");
  a.Zb(od, 0);
  a.Ga = hd(a, a.F);
  xd(a)
}
function kd(a, b) {
  a.a.debug("Test Connection Failed");
  a.h = b.h;
  Z(a, 2)
}
q.Jb = function(a, b) {
  if(!(0 == this.b || this.k != a && this.o != a)) {
    if(this.h = a.h, this.o == a && 3 == this.b) {
      if(7 < this.ba) {
        var c;
        try {
          c = this.tb(b)
        }catch(d) {
          c = k
        }
        if(u(c) && 3 == c.length) {
          var e = c;
          if(0 == e[0]) {
            a: {
              if(this.a.debug("Server claims our backchannel is missing."), this.J) {
                this.a.debug("But we are currently starting the request.")
              }else {
                if(this.k) {
                  if(this.k.xa + 3E3 < this.o.xa) {
                    wd(this), this.k.cancel(), this.k = k
                  }else {
                    break a
                  }
                }else {
                  this.a.la("We do not have a BackChannel established")
                }
                Cd(this);
                U()
              }
            }
          }else {
            this.Eb = e[1], c = this.Eb - this.ra, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && (this.kb && 0 == this.aa) && !this.X && (this.X = W(w(this.ec, this), 6E3)))
          }
        }else {
          this.a.debug("Bad POST response data returned"), Z(this, 11)
        }
      }else {
        b != Wc && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11))
      }
    }else {
      if(this.k == a && wd(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.tb(b);
        for(var e = this.e && this.e.channelHandleMultipleArrays ? [] : k, f = 0;f < c.length;f++) {
          var i = c[f];
          this.ra = i[0];
          i = i[1];
          2 == this.b ? "c" == i[0] ? (this.U = i[1], this.L = this.correctHostPrefix(i[2]), i = i[3], this.ba = i != k ? i : 6, this.b = 3, this.e && this.e.channelOpened(this), this.nb = jd(this, this.L, this.F), Bd(this)) : "stop" == i[0] && Z(this, 7) : 3 == this.b && ("stop" == i[0] ? (e && e.length && (this.e.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != i[0] && (e ? e.push(i) : this.e && this.e.channelHandleArray(this, i)), this.aa = 0)
        }
        e && e.length && this.e.channelHandleMultipleArrays(this, e)
      }
    }
  }
};
q.correctHostPrefix = function(a) {
  return this.Vb ? this.e ? this.e.correctHostPrefix(a) : a : k
};
q.ec = function() {
  this.X != k && (this.X = k, this.k.cancel(), this.k = k, Cd(this), U())
};
function wd(a) {
  a.X != k && (r.clearTimeout(a.X), a.X = k)
}
q.va = function(a) {
  this.a.debug("Request complete");
  var b;
  if(this.k == a) {
    wd(this), this.k = k, b = 2
  }else {
    if(this.o == a) {
      this.o = k, b = 1
    }else {
      return
    }
  }
  this.h = a.h;
  if(0 != this.b) {
    if(a.H) {
      1 == b ? (x(), qd.dispatchEvent(new sd(qd, a.S ? a.S.length : 0)), xd(this), this.N.length = 0) : Bd(this)
    }else {
      var c = a.yb();
      if(3 == c || 7 == c || 0 == c && 0 < this.h) {
        this.a.debug("Not retrying due to error type")
      }else {
        this.a.debug("Maybe retrying, last error: " + qc(c, this.h));
        var d;
        if(d = 1 == b) {
          this.o || this.C ? (this.a.G("Request already in progress"), d = n) : this.b == od || this.Y >= (this.Ea ? 0 : this.bb) ? d = n : (this.a.debug("Going to retry POST"), this.C = W(w(this.Lb, this, a), Dd(this, this.Y)), this.Y++, d = j)
        }
        if(d || 2 == b && Cd(this)) {
          return
        }
        this.a.debug("Exceeded max number of retries")
      }
      this.a.debug("Error: HTTP request failed");
      switch(c) {
        case 1:
          Z(this, 5);
          break;
        case 4:
          Z(this, 10);
          break;
        case 3:
          Z(this, 6);
          break;
        case 7:
          Z(this, 12);
          break;
        default:
          Z(this, 2)
      }
    }
  }
};
function Dd(a, b) {
  var c = a.Wb + Math.floor(Math.random() * a.lc);
  a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
  return c * b
}
q.Zb = function(a) {
  0 <= Wa(arguments, this.b) || g(Error("Unexpected channel state: " + this.b))
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if(2 == b || 9 == b) {
    var c = k;
    a.e && (c = a.e.getNetworkTestImageUri(a));
    var d = w(a.mc, a);
    c || (c = new H("//www.google.com/images/cleardot.gif"), K(c));
    ed(c.toString(), 1E4, d)
  }else {
    U()
  }
  Ed(a, b)
}
q.mc = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), U()) : (this.a.info("Failed to ping google.com"), U(), Ed(this, 8))
};
function Ed(a, b) {
  a.a.debug("HttpChannel: error - " + b);
  a.b = 0;
  a.e && a.e.channelError(a, b);
  Fd(a);
  vd(a)
}
function Fd(a) {
  a.b = 0;
  a.h = -1;
  if(a.e) {
    if(0 == a.N.length && 0 == a.r.length) {
      a.e.channelClosed(a)
    }else {
      a.a.debug("Number of undelivered maps, pending: " + a.N.length + ", outgoing: " + a.r.length);
      var b = Za(a.N), c = Za(a.r);
      a.N.length = 0;
      a.r.length = 0;
      a.e.channelClosed(a, b, c)
    }
  }
}
function hd(a, b) {
  var c = md(a, k, b);
  a.a.debug("GetForwardChannelUri: " + c);
  return c
}
function jd(a, b, c) {
  b = md(a, a.Qa() ? b : k, c);
  a.a.debug("GetBackChannelUri: " + b);
  return b
}
function md(a, b, c) {
  var d = c instanceof H ? c.n() : new H(c, h);
  if("" != d.da) {
    b && eb(d, b + "." + d.da), fb(d, d.wa)
  }else {
    var e = window.location, d = rb(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)
  }
  a.pa && G(a.pa, function(a, b) {
    J(d, b, a)
  });
  J(d, "VER", a.ba);
  zd(a, d);
  return d
}
q.Da = function(a) {
  a && g(Error("Can't create secondary domain capable XhrIo object."));
  a = new Xc;
  a.Tb = j;
  return a
};
q.isActive = function() {
  return!!this.e && this.e.isActive(this)
};
function W(a, b) {
  "function" != ga(a) && g(Error("Fn must not be null and must be a function"));
  return r.setTimeout(function() {
    a()
  }, b)
}
q.D = function() {
  qd.dispatchEvent(new td(qd))
};
function U() {
  qd.dispatchEvent(new rd(qd))
}
q.Qa = function() {
  return!tc()
};
function Gd() {
}
q = Gd.prototype;
q.channelHandleMultipleArrays = k;
q.okToMakeRequest = ca(0);
q.channelOpened = aa();
q.channelHandleArray = aa();
q.channelError = aa();
q.channelClosed = aa();
q.getAdditionalParams = function() {
  return{}
};
q.getNetworkTestImageUri = ca(k);
q.isActive = ca(j);
q.badMapError = aa();
q.correctHostPrefix = function(a) {
  return a
};
var $, Hd;
Hd = {"0":"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, e, f, i, m, l, o, s;
  l = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  if(u(b || "string" === typeof b)) {
    b = {}
  }
  i = b.reconnectTime || 3E3;
  s = function(a) {
    l.readyState = l.readyState = a
  };
  s(this.CLOSED);
  o = k;
  e = b.qc;
  c = new Gd;
  c.channelOpened = function() {
    e = o;
    s($.OPEN);
    return"function" === typeof l.onopen ? l.onopen() : h
  };
  d = k;
  c.channelError = function(a, b) {
    var c;
    c = Hd[b];
    d = b;
    s($.Ua);
    return"function" === typeof l.onerror ? l.onerror(c, b) : h
  };
  m = k;
  c.channelClosed = function(a, c, e) {
    if(l.readyState !== $.CLOSED) {
      o = k;
      a = d ? Hd[d] : "Closed";
      s($.CLOSED);
      try {
        if("function" === typeof l.onclose) {
          l.onclose(a, c, e)
        }
      }catch(Kd) {
        "undefined" !== typeof console && console !== k && console.error(Kd.stack)
      }
      b.reconnect && (7 !== d && 0 !== d) && (c = 6 === d ? 0 : i, clearTimeout(m), m = setTimeout(f, c));
      return d = k
    }
  };
  c.channelHandleArray = function(a, b) {
    return"function" === typeof l.onmessage ? l.onmessage(b) : h
  };
  f = function() {
    o && g(Error("Reconnect() called from invalid state"));
    s($.CONNECTING);
    if("function" === typeof l.onconnecting) {
      l.onconnecting()
    }
    clearTimeout(m);
    o = new nd(b.appVersion);
    o.e = c;
    d = k;
    if(b.failFast) {
      var f = o;
      f.Ea = j;
      f.a.info("setFailFast: true");
      if((f.o || f.C) && f.Y > (f.Ea ? 0 : f.bb)) {
        f.a.info("Retry count " + f.Y + " > new maxRetries " + (f.Ea ? 0 : f.bb) + ". Fail immediately!"), f.o ? (f.o.cancel(), f.va(f.o)) : (r.clearTimeout(f.C), f.C = k, Z(f, 2))
      }
    }
    return o.Ya("" + a + "/test", "" + a + "/bind", k, e != k ? e.U : h, e != k ? e.ra : h)
  };
  this.open = function() {
    l.readyState !== l.CLOSED && g(Error("Already open"));
    return f()
  };
  this.close = function() {
    clearTimeout(m);
    d = 0;
    if(l.readyState !== $.CLOSED) {
      s($.Ua);
      var a = o;
      a.a.debug("disconnect()");
      vd(a);
      if(3 == a.b) {
        var b = a.ua++, c = a.Ga.n();
        J(c, "SID", a.U);
        J(c, "RID", b);
        J(c, "TYPE", "terminate");
        zd(a, c);
        b = new R(a, a.a, a.U, b, h);
        b.R = K(c.n());
        (new Image).src = b.R;
        b.xa = x();
        xc(b)
      }
      Fd(a)
    }
  };
  this.sendMap = function(a) {
    var b;
    ((b = l.readyState) === $.Ua || b === $.CLOSED) && g(Error("Cannot send to a closed connection"));
    b = o;
    0 == b.b && g(Error("Invalid operation: sending map when state is closed"));
    1E3 == b.r.length && b.a.G("Already have 1000 queued maps upon queueing " + Qc(a));
    b.r.push(new pd(b.dc++, a));
    (2 == b.b || 3 == b.b) && xd(b)
  };
  this.send = function(a) {
    return this.sendMap({JSON:Qc(a)})
  };
  f();
  return this
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.Ua = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
("undefined" !== typeof exports && exports !== k ? exports : window).BCSocket = $;
var Image, XMLHttpRequest, Id, Jd, window;
Id = require("request");
Image = function() {
  var a = this;
  this.__defineSetter__("src", function(b) {
    b = b.toString();
    b.match(/^\/\//) && (b = "http:" + b);
    return Id(b, function(b) {
      return b != k ? "function" === typeof a.onerror ? a.onerror() : h : "function" === typeof a.onload ? a.onload() : h
    })
  });
  return this
};
XMLHttpRequest = require("../XMLHttpRequest").XMLHttpRequest;
nd.prototype.Da = function() {
  var a;
  a = new Xc;
  a.qb = function() {
    return new XMLHttpRequest
  };
  return a
};
r = window = {setTimeout:setTimeout, clearTimeout:clearTimeout, setInterval:setInterval, clearInterval:clearInterval, location:k, navigator:{userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1"}};
Jd = require("url");
exports.setDefaultLocation = function(a) {
  "string" === typeof a && (a = Jd.parse(a));
  return window.location = a
};

})();
