/*jquery-1.11.3.min.js*/
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = "1.11.3"
      , m = function(a, b) {
        return new m.fn.init(a,b)
    }
      , n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , o = /^-ms-/
      , p = /-([\da-z])/gi
      , q = function(a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || m.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1,
                    f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {},
                    g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            m.isFunction(a) ? (c = d.call(arguments, 2),
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || m.guid++,
            e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }),
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = "length"in a && a.length
          , c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            k = b.nodeType,
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 1 !== k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
            a
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ka(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b,
                ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
        f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = g.documentElement,
            e = g.defaultView,
            e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)),
            p = !f(g),
            c.attributes = ja(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(g.getElementsByClassName),
            c.getById = ja(function(a) {
                return o.appendChild(a).id = u,
                !g.getElementsByName || !g.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", P)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return la(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            g) : n
        }
        ,
        ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }
        ,
        ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }
        ,
        ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a),
                    a = a.replace(ca, da).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos,
        d.setFilters = new qa,
        g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }
        ;
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function sa(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                ga(a, b[d], c);
            return c
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)),
            e && !e[u] && (e = wa(e, f)),
            ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = va(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = va(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }
        function ya(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = xa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && ra(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ja(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        ga
    }(a);
    m.find = s,
    m.expr = s.selectors,
    m.expr[":"] = m.expr.pseudos,
    m.unique = s.uniqueSort,
    m.text = s.getText,
    m.isXMLDoc = s.isXML,
    m.contains = s.contains;
    var t = m.expr.match.needsContext
      , u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b,
                m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                u.test(c[1]) && m.isPlainObject(b))
                    for (c in b)
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return x.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = y,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        m.makeArray(a, this))
    }
    ;
    A.prototype = m.fn,
    x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = []
              , e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 && (C[a] || (e = m.unique(e)),
            B.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l,
            d = !0,
            f = g || 0,
            g = 0,
            e = h.length,
            b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    b ? e = h.length : c && (g = d,
                    j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1),
                        b && (e >= d && e--,
                        f >= d && f--)
                }),
                this
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                e = 0,
                this
            },
            disable: function() {
                return h = i = c = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? i.push(c) : j(c)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }
    ,
    m.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            m.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
        this
    }
    ,
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0,
                a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]),
                m.fn.triggerHandler && (m(y).triggerHandler("ready"),
                m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J),
        a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(),
        m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(),
            "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1),
                a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J),
                a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(),
                        m.ready()
                    }
                }()
            }
        return H.promise(b)
    }
    ;
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L,
    k.inlineBlockNeedsLayout = !1,
    m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0],
        c && c.style && (b = y.createElement("div"),
        d = y.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }),
    function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(),
    m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
    ;
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;

        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[m.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[m.camelCase(b)])) : f = g,
                f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
            !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }),
    m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f),
                1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)),
                        O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }),
    m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = m._data(a, b),
            c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = m._queueHooks(a, b)
              , g = function() {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"),
                    m._removeData(a, c)
                })
            })
        }
    }),
    m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = m._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = ["Top", "Right", "Bottom", "Left"]
      , U = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
      , V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        m.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(m(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input")
          , b = y.createElement("div")
          , c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        k.leadingWhitespace = 3 === b.firstChild.nodeType,
        k.tbody = !b.getElementsByTagName("tbody").length,
        k.htmlSerialize = !!b.getElementsByTagName("link").length,
        k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        k.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i
      , Y = /^key/
      , Z = /^(?:mouse|pointer|contextmenu)|click/
      , $ = /^(?:focusinfocus|focusoutblur)$/
      , _ = /^([^.]*)(?:\.(.+)|)$/;
    function aa() {
        return !0
    }
    function ba() {
        return !1
    }
    function ca() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = m.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(E) || [""],
                h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = m.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = m.event.special[o] || {},
                    l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (n = g[o]) || (n = g[o] = [],
                    n.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
                    m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = m.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        n = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = n.length;
                        while (f--)
                            g = n[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1),
                            g.selector && n.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle,
                m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y,
            3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            g = p.indexOf(":") < 0 && "on" + p,
            b = b[m.expando] ? b : new m.Event(p,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = q.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : m.makeArray(c, [b]),
            k = m.event.special[p] || {},
            e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p,
                    $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p,
                    f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = p,
                !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null),
                    m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e,
                        a.data = e.data,
                        c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new m.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a,
        b && m.extend(this, b),
        this.timeStamp = a && a.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(a,b)
    }
    ,
    m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }),
    k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                m.event.simulate("change", this, a, !0)
            })),
            !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }),
                m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"),
            !X.test(this.nodeName)
        }
    }),
    k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b);
                e || d.addEventListener(a, c, !0),
                m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0),
                m._removeData(d, b))
            }
        }
    }),
    m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = ba;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return m().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = m.guid++)),
            this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = ba),
            this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function da(a) {
        var b = ea.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , fa = / jQuery\d+="(?:null|\d+)"/g
      , ga = new RegExp("<(?:" + ea + ")[\\s/>]","i")
      , ha = /^\s+/
      , ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , ja = /<([\w:]+)/
      , ka = /<tbody/i
      , la = /<|&#?\w+;/
      , ma = /<(?:script|style|link)/i
      , na = /checked\s*(?:[^=]|=\s*.checked.)/i
      , oa = /^$|\/(?:java|ecma)script/i
      , pa = /^true\/(.*)/
      , qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ra = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , sa = da(y)
      , ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option,
    ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead,
    ra.th = ra.td;
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text,
            ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML,
            ta.removeChild(f = ta.firstChild)),
            !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f),
                h = ua(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a),
                    d = d || ua(f),
                    g = 0; null != (e = h[g]); g++)
                        Aa(e, d[g]);
                else
                    Aa(a, f);
            return d = ua(f, "script"),
            d.length > 0 && za(d, !i && ua(a, "script")),
            d = h = e = null,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q],
                f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                        h = h || o.appendChild(b.createElement("div")),
                        i = (ja.exec(f) || ["", ""])[1].toLowerCase(),
                        l = ra[i] || ra._default,
                        h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2],
                        e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])),
                        !k.tbody) {
                            f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes),
                        h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h),
            k.appendChecked || m.grep(ua(p, "input"), va),
            q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f),
                h = ua(o.appendChild(f), "script"),
                g && za(h),
                c)) {
                    e = 0;
                    while (f = h[e++])
                        oa.test(f.type || "") && c.push(f)
                }
            return h = null,
            o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null,
                    c.push(f))
                }
        }
    }),
    m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ua(c)),
                c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (m.cleanData(ua(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                m.cleanData(ua(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p))
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this),
            c = i.firstChild,
            1 === i.childNodes.length && (i = c),
            c)) {
                for (g = m.map(ua(i, "script"), xa),
                f = g.length; l > j; j++)
                    d = i,
                    j !== o && (d = m.clone(d, !0, !0),
                    f && m.merge(g, ua(d, "script"))),
                    b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument,
                    m.map(g, ya),
                    j = 0; f > j; j++)
                        d = g[j],
                        oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }),
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                m(g[d])[b](c),
                f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};
    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(),
        f
    }
    function Fa(a) {
        var b = y
          , c = Da[a];
        return c || (c = Ea(a, b),
        "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Ca[0].contentWindow || Ca[0].contentDocument).document,
        b.write(),
        b.close(),
        c = Ea(a, b),
        Ca.detach()),
        Da[a] = c),
        c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0],
            c && c.style ? (b = y.createElement("div"),
            d = y.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(y.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }
    ,
    Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
        Ha.test(g) && Ga.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle
    }
    ,
    Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Ha.test(g) && !Ka.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = d && d.style) {
            c.cssText = "float:left;opacity:.5",
            k.opacity = "0.5" === c.opacity,
            k.cssFloat = !!c.cssFloat,
            b.style.backgroundClip = "content-box",
            b.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === b.style.backgroundClip,
            k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(),
                    g
                },
                boxSizingReliable: function() {
                    return null == f && i(),
                    f
                },
                pixelPosition: function() {
                    return null == e && i(),
                    e
                },
                reliableMarginRight: function() {
                    return null == h && i(),
                    h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0],
                c && c.style && (b = y.createElement("div"),
                d = y.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
                b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                e = f = !1,
                h = !0,
                a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top,
                f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width,
                i = b.appendChild(y.createElement("div")),
                i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                b.style.width = "1px",
                h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight),
                b.removeChild(i)),
                b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                i = b.getElementsByTagName("td"),
                i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                g = 0 === i[0].offsetHeight,
                g && (i[0].style.display = "",
                i[1].style.display = "none",
                g = 0 === i[0].offsetHeight),
                c.removeChild(d))
            }
        }
    }(),
    m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Ma = /alpha\([^)]*\)/i
      , Na = /opacity\s*=\s*([^)]*)/
      , Oa = /^(none|table(?!-c[ea]).+)/
      , Pa = new RegExp("^(" + S + ")(.*)$","i")
      , Qa = new RegExp("^([+-])=(" + S + ")","i")
      , Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Sa = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ta = ["Webkit", "O", "Moz", "ms"];
    function Ua(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
          , d = b
          , e = Ta.length;
        while (e--)
            if (b = Ta[e] + c,
            b in a)
                return b;
        return d
    }
    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = m._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d),
            (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)),
            d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e),
            "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Ya(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ia(a)
          , g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Ha.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)),
                g = m.cssHooks[b] || m.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)),
            g = m.cssHooks[b] || m.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Ja(a, b, d)),
            "normal" === f && b in Sa && (f = Sa[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }),
    m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }),
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }),
    m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Va(this, !0)
        },
        hide: function() {
            return Va(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a,b,c,d,e)
    }
    m.Tween = Za,
    Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Za.propHooks._default.set(this),
            this
        }
    },
    Za.prototype.init.prototype = Za.prototype,
    Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    m.fx = Za.prototype.init,
    m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i"), cb = /queueHooks$/, db = [ib], eb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = bb.exec(b)
              , f = e && e[3] || (m.cssNumber[a] ? "" : "px")
              , g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function fb() {
        return setTimeout(function() {
            $a = void 0
        }),
        $a = m.now()
    }
    function gb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        n.always(function() {
            n.always(function() {
                h.unqueued--,
                m.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = m.css(a, "display"),
        l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j,
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            ab.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = m._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? m(a).show() : n.done(function() {
                m(a).hide()
            }),
            n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            });
            for (d in o)
                g = hb(q ? r[d] : 0, d, n),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c),
            e = b[d],
            f = a[c],
            m.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = m.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hb, j),
        m.isFunction(j.opts.start) && j.opts.start.call(a, j),
        m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                eb[c] = eb[c] || [],
                eb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? db.unshift(a) : db.push(a)
        }
    }),
    m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a)
              , f = m.speed(b, c, d)
              , g = function() {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = m.timers
                  , g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
        }
    }),
    m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    m.timers = [],
    m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(),
        $a = void 0
    }
    ,
    m.fx.timer = function(a) {
        m.timers.push(a),
        a() ? m.fx.start() : m.timers.pop()
    }
    ,
    m.fx.interval = 13,
    m.fx.start = function() {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval))
    }
    ,
    m.fx.stop = function() {
        clearInterval(_a),
        _a = null
    }
    ,
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e;
        b = y.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = y.createElement("select"),
        e = c.appendChild(y.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        k.getSetAttribute = "t" !== b.className,
        k.style = /top/.test(d.getAttribute("style")),
        k.hrefNormalized = "/a" === d.getAttribute("href"),
        k.checkOn = !!a.value,
        k.optSelected = e.selected,
        k.enctype = !!y.createElement("form").enctype,
        c.disabled = !0,
        k.optDisabled = !e.disabled,
        a = y.createElement("input"),
        a.setAttribute("value", ""),
        k.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        k.radioValue = "t" === a.value
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }),
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }),
    m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(),
                d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c,
                    m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""),
                    a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b],
            ob[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            ob[b] = f),
            e
        }
        : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }),
    qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    },
    m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    },
    m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i
      , tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a),
                f && (b = m.propFix[b] || b,
                e = m.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }),
    k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now()
      , wb = /\?/
      , xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }
    ,
    m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b),
        c
    }
    ;
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"),
        zb.href = "",
        zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mb(a, b, c, d) {
        var e = {}
          , f = a === Ib;
        function g(h) {
            var i;
            return e[h] = !0,
            m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c),
        a
    }
    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cb.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()),
            k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)),
            Mb(Hb, k, b, v),
            2 === t)
                return v;
            h = m.event && k.global,
            h && 0 === m.active++ && m.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !Eb.test(k.type),
            e = k.url,
            k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)),
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1,
                h && n.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                i = void 0,
                f = d || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                c && (u = Ob(k, v, c)),
                u = Pb(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (m.lastModified[e] = w),
                w = v.getResponseHeader("etag"),
                w && (m.etag[e] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                h && (n.trigger("ajaxComplete", [v, k]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }),
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = m(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }
    ,
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    }
    ;
    var Qb = /%20/g
      , Rb = /\[\]$/
      , Sb = /\r?\n/g
      , Tb = /^(?:submit|button|image|reset|file)$/i
      , Ub = /^(?:input|select|textarea|keygen)/i;
    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
        m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }
    ,
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                }
            }).get()
        }
    }),
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    }
    : Zb;
    var Wb = 0
      , Xb = {}
      , Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb)
            Xb[a](void 0, !0)
    }),
    k.cors = !!Yb && "withCredentials"in Yb,
    Yb = k.ajax = !!Yb,
    Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g],
                            b = void 0,
                            f.onreadystatechange = m.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                a
            }
        }
    }),
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = []
      , ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0,
            a
        }
    }),
    m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            _b.push(e)),
            g && m.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || y;
        var d = u.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e),
        e && e.length && m(e).remove(),
        m.merge([], d.childNodes))
    }
    ;
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc)
            return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        m.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var cc = a.document.documentElement;
    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = m.css(a, "top"),
            i = m.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            m.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (n.top = b.top - h.top + g),
            null != b.left && (n.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, n) : l.css(n)
        }
    },
    m.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()),
                c = dc(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                m.nodeName(a[0], "html") || (c = a.offset()),
                c.top += m.css(a[0], "borderTopWidth", !0),
                c.left += m.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                    a = a.offsetParent;
                return a || cc
            })
        }
    }),
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b),
            Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }),
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    m.fn.size = function() {
        return this.length
    }
    ,
    m.fn.andSelf = m.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ec = a.jQuery
      , fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc),
        b && a.jQuery === m && (a.jQuery = ec),
        m
    }
    ,
    typeof b === K && (a.jQuery = a.$ = m),
    m
});

/*bootstrap.min.js*/
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]'
      , d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.5",
    d.TRANSITION_DURATION = 150,
    d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this)
          , f = e.attr("data-target");
        f || (f = e.attr("href"),
        f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(),
        g.length || (g = e.closest(".alert")),
        g.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (g.removeClass("in"),
        a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    }
    ;
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.button")
              , f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this,f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({}, c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.3.5",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled"
          , d = this.$element
          , e = d.is("input") ? "val" : "html"
          , f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]),
            "loadingText" == b ? (this.isLoading = !0,
            d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1,
            d.removeClass(c).removeAttr(c))
        }, this), 0)
    }
    ,
    c.prototype.toggle = function() {
        var a = !0
          , b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1),
            b.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1),
            this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    }
    ,
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")),
        b.call(d, "toggle"),
        a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
              , g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this,f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }
    ,
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    }
    ,
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b)
          , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1
          , f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }
    ,
    c.prototype.to = function(a) {
        var b = this
          , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }
    ,
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active")
          , f = d || this.getItemForDirection(b, e)
          , g = this.interval
          , h = "next" == b ? "left" : "right"
          , i = this;
        if (f.hasClass("active"))
            return this.sliding = !1;
        var j = f[0]
          , k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k),
        !k.isDefaultPrevented()) {
            if (this.sliding = !0,
            g && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b),
            f[0].offsetWidth,
            e.addClass(h),
            f.addClass(h),
            e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                e.removeClass(["active", h].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"),
            f.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(m)),
            g && this.cycle(),
            this
        }
    }
    ;
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    }
    ;
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data())
              , h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.collapse")
              , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({}, d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"),
            b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f),
                !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"),
                    b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }
    ,
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }
    ,
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }
    ,
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    }
    ;
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e)
          , g = f.data("bs.collapse")
          , h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(),
        a(f).each(function() {
            var d = a(this)
              , e = b(d)
              , f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }
    function d(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop"
      , f = '[data-toggle="dropdown"]'
      , g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.5",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e)
              , g = f.hasClass("open");
            if (c(),
            !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }
    ,
    g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var e = b(d)
                  , g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)
                    return 27 == c.which && e.find(f).trigger("focus"),
                    d.trigger("click");
                var h = " li:not(.disabled):visible a"
                  , i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--,
                    40 == c.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    }
    ;
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this,g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }
    ,
    c.prototype.show = function(b) {
        var d = this
          , e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body),
            d.$element.show().scrollTop(0),
            d.adjustDialog(),
            e && d.$element[0].offsetWidth,
            d.$element.addClass("in"),
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }
    ,
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }
    ,
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$body.removeClass("modal-open"),
            a.resetAdjustments(),
            a.resetScrollbar(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    c.prototype.backdrop = function(b) {
        var d = this
          , e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }
    ,
    c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }
    ,
    c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }
    ,
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    }
    ;
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this)
          , e = d.attr("href")
          , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
          , g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tooltip")
              , f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        if (this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d),
        this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin"
                  , i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    }
    ,
    c.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    }
    ,
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
        c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }
    ,
    c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a])
                return !0;
        return !1
    }
    ,
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
        c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }
    ,
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this
              , f = this.tip()
              , g = this.getUID(this.type);
            this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
              , i = /\s?auto?\s?/i
              , j = i.test(h);
            j && (h = h.replace(i, "") || "top"),
            f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this),
            this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition()
              , l = f[0].offsetWidth
              , m = f[0].offsetHeight;
            if (j) {
                var n = h
                  , o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h,
                f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type),
                e.hoverState = null,
                "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }
    ,
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip()
          , e = d[0].offsetWidth
          , f = d[0].offsetHeight
          , g = parseInt(d.css("margin-top"), 10)
          , h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top += g,
        b.left += h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth
          , j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c)
          , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
          , n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b),
        this.replaceArrow(m, d[0][n], l)
    }
    ,
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right")
    }
    ,
    c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(),
            e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
            b && b()
        }
        var e = this
          , f = a(this.$tip)
          , g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g),
        g.isDefaultPrevented() ? void 0 : (f.removeClass("in"),
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
        this.hoverState = null,
        this)
    }
    ,
    c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0]
          , d = "BODY" == c.tagName
          , e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset()
          , g = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }
          , h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f)
    }
    ,
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }
    ,
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0
          , g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll
              , i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f
              , k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }
    ,
    c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }
    ,
    c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }
    ,
    c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    c.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    c.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type),
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c))),
        b ? (c.inState.click = !c.inState.click,
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ,
    c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type),
            a.$tip && a.$tip.detach(),
            a.$tip = null,
            a.$arrow = null,
            a.$viewport = null
        })
    }
    ;
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.popover")
              , f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5",
    c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
        a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    c.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body),
        this.$scrollElement = a(a(c).is(document.body) ? window : c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    b.prototype.refresh = function() {
        var b = this
          , c = "offset"
          , d = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        a.isWindow(this.$scrollElement[0]) || (c = "position",
        d = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var b = a(this)
              , e = b.data("target") || b.attr("href")
              , f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]),
            b.targets.push(this[1])
        })
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(),
        b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null,
            this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    }
    ,
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    }
    ,
    a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5",
    c.TRANSITION_DURATION = 150,
    c.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")
              , f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            })
              , g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }),
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }
    ,
    c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            h ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active")
          , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
        g.removeClass("in")
    }
    ;
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    }
    ;
    var e = function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.3.5",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop()
          , f = this.$element.offset()
          , g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed
          , i = h ? e : f.top
          , j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }
    ,
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop()
          , b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }
    ,
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height()
              , d = this.options.offset
              , e = d.top
              , f = d.bottom
              , g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : "")
                  , j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                this.affixed = h,
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
                this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    }
    ;
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this)
              , d = c.data();
            d.offset = d.offset || {},
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
}(jQuery);

/*jquery.magnific-popup.min.js*/
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {}, u = !!window.jQuery, v = a(window), w = function(a, c) {
        b.ev.on(o + a + p, c)
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, y = function(c, d) {
        b.ev.triggerHandler(o + c, d),
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        g = c),
        b.currTemplate.closeBtn
    }, A = function() {
        a.magnificPopup.instance || (b = new t,
        b.init(),
        a.magnificPopup.instance = b)
    }, B = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."),
            b.isIE8 = -1 !== c.indexOf("MSIE 8."),
            b.isLowIE = b.isIE7 || b.isIE8,
            b.isAndroid = /android/gi.test(c),
            b.isIOS = /iphone|ipad|ipod/gi.test(c),
            b.supportsTransition = B(),
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = a(document),
            b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                    g.parsed && (g = g.el[0]),
                    g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
            f = "",
            c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1),
            b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }),
            b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = x("container", b.wrap)),
            b.contentContainer = x("content"),
            b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                b["init" + j].call(b)
            }
            y("BeforeOpen"),
            b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }),
            f += " mfp-close-btn-in") : b.wrap.append(z())),
            b.st.alignTop && (f += " mfp-align-top"),
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }),
            (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }),
            b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }),
            v.on("resize" + p, function() {
                b.updateSize()
            }),
            b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && b.wrap.addClass(f);
            var k = b.wH = v.height()
              , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
            r && b._addClassToMFP(r),
            b.updateItemHTML(),
            y("BuildControls"),
            a("html").css(n),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP(q),
                b._setFocus()) : b.bgOverlay.addClass(q),
                d.on("focusin" + p, b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(k),
            y(m),
            c
        },
        close: function() {
            b.isOpen && (y(i),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
            b.ev.off(p),
            b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            b.bgOverlay.attr("class", "mfp-bg"),
            b.container.attr("class", "mfp-container"),
            !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
            b._lastFocusedEl && a(b._lastFocusedEl).focus(),
            b.currItem = null,
            b.content = null,
            b.currTemplate = null,
            b.prevHeight = 0,
            y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                  , d = window.innerHeight * c;
                b.wrap.css("height", d),
                b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
            y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
            b.content && b.content.detach(),
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
            c.preloaded = !0,
            y(n, c),
            e = c.type,
            b.container.prepend(b.contentContainer),
            y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a,
            a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
            y(k),
            b.container.addClass("mfp-" + c + "-holder"),
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
            e = {
                data: e,
                src: e.src
            }),
            e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
            e.index = c,
            e.parsed = !0,
            b.items[c] = e,
            y("ElementParse", e),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this,
                b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
            c.items ? (c.isObj = !0,
            a.off(e).on(e, d)) : (c.isObj = !1,
            c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
            a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation()),
                e.el = a(c.mfpEl),
                e.delegate && (e.items = d.find(e.delegate)),
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                a = e.status,
                d = e.text,
                b.preloader.html(d),
                b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                b.container.addClass("mfp-s-" + a),
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                  , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a),
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            y(l, [b, c, d]),
            a.each(c, function(a, c) {
                if (void 0 === c || c === !1)
                    return !0;
                if (e = a.split("_"),
                e.length > 1) {
                    var d = b.find(p + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else
                    b.find(p + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                b.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d,
                f.delegate && (e = e.find(f.delegate)),
                e = e.eq(g)),
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(),
        E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(),
                c.src) {
                    var e = b.st.inline
                      , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                        D = x(C),
                        C = "mfp-" + C),
                        E = f.after(D).detach().removeClass(C)),
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a(document.body).removeClass(H)
    }, K = function() {
        J(),
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                H = b.st.ajax.cursor,
                w(h + "." + I, K),
                w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                        b.appendContent(a(g.data), I),
                        c.finished = !0,
                        J(),
                        b._setFocus(),
                        setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16),
                        b.updateStatus("ready"),
                        y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                        c.finished = c.loadError = !0,
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image
                  , d = ".image";
                b.types.push("image"),
                w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }),
                w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor),
                    v.off("resize" + p)
                }),
                w("Resize" + d, b.resizeImage),
                b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                y("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , e = function(f) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                        c++,
                        void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0
                  , f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    y("ImageLoadComplete")) : (e++,
                    200 > e ? setTimeout(f, 100) : g()))
                }
                  , g = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , h = b.st.image
                  , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                    c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                    j.src = c.src,
                    i.is("img") && (c.img = c.img.clone()),
                    j = c.img[0],
                    j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
        N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , d = "all " + c.duration / 1e3 + "s " + c.easing
                          , e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                        b.css(e),
                        b
                    }, k = function() {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void k();
                            f = j(a),
                            f.css(b._getOffset()),
                            b.wrap.append(f),
                            e = setTimeout(function() {
                                f.css(b._getOffset(!0)),
                                e = setTimeout(function() {
                                    k(),
                                    setTimeout(function() {
                                        f.remove(),
                                        a = f = null,
                                        y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }),
                    w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.st.removalDelay = g,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)),
                            b.wrap.append(f),
                            b.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }),
                    w(h + d, function() {
                        b._allowZoom() && (k(),
                        f && f.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                  , f = parseInt(d.css("padding-top"), 10)
                  , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                h.top = e.top),
                h
            }
        }
    });
    var P = "iframe"
      , Q = "//about:blank"
      , R = function(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }),
                w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src
                  , f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                    e = this.src.replace("%id%", e),
                    !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                b._parseMarkup(d, g, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var S = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% - %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery
                  , e = ".mfp-gallery"
                  , g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0,
                c && c.enabled ? (f += " mfp-gallery",
                w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }),
                w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }),
                w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup
                          , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                          , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s)
                          , h = g ? "mfpFastClick" : "click";
                        e[h](function() {
                            b.prev()
                        }),
                        f[h](function() {
                            b.next()
                        }),
                        b.isIE7 && (x("b", e[0], !1, !0),
                        x("a", e[0], !1, !0),
                        x("b", f[0], !1, !0),
                        x("a", f[0], !1, !0)),
                        b.container.append(e.add(f))
                    }
                }),
                w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(),
                        b._preloadTimeout = null
                    }, 16)
                }),
                void w(h + e, function() {
                    d.off(e),
                    b.wrap.off("click" + e),
                    b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0,
                b.index = S(b.index + 1),
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                b.index = S(b.index - 1),
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                b.index = a,
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                    y("LazyLoad", d),
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0,
                        d.loadError = !0,
                        y("LazyLoadError", d)
                    }).attr("src", d.src)),
                    d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                      , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                    c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }),
                    w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }),
    function() {
        var b = 1e3
          , c = "ontouchstart"in window
          , d = function() {
            v.off("touchmove" + f + " touchend" + f)
        }
          , e = "mfpFastClick"
          , f = "." + e;
        a.fn.mfpFastClick = function(e) {
            return a(this).each(function() {
                var g, h = a(this);
                if (c) {
                    var i, j, k, l, m, n;
                    h.on("touchstart" + f, function(a) {
                        l = !1,
                        n = 1,
                        m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0],
                        j = m.clientX,
                        k = m.clientY,
                        v.on("touchmove" + f, function(a) {
                            m = a.originalEvent ? a.originalEvent.touches : a.touches,
                            n = m.length,
                            m = m[0],
                            (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0,
                            d())
                        }).on("touchend" + f, function(a) {
                            d(),
                            l || n > 1 || (g = !0,
                            a.preventDefault(),
                            clearTimeout(i),
                            i = setTimeout(function() {
                                g = !1
                            }, b),
                            e())
                        })
                    })
                }
                h.on("click" + f, function() {
                    g || e()
                })
            })
        }
        ,
        a.fn.destroyMfpFastClick = function() {
            a(this).off("touchstart" + f + " click" + f),
            c && v.off("touchmove" + f + " touchend" + f)
        }
    }(),
    A()
});

/*owl.carousel.min.js*/
!function(h, i, n, a) {
    function l(t, e) {
        this.settings = null,
        this.options = h.extend({}, l.Defaults, e),
        this.$element = h(t),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        h.each(["onResize", "onThrottledResize"], h.proxy(function(t, e) {
            this._handlers[e] = h.proxy(this[e], this)
        }, this)),
        h.each(l.Plugins, h.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)),
        h.each(l.Workers, h.proxy(function(t, e) {
            this._pipe.push({
                filter: e.filter,
                run: h.proxy(e.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    l.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    l.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    l.Type = {
        Event: "event",
        State: "state"
    },
    l.Plugins = {},
    l.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || ""
              , i = !this.settings.autoWidth
              , s = this.settings.rtl
              , n = {
                width: "auto",
                "margin-left": s ? e : "",
                "margin-right": s ? "" : e
            };
            i || this.$stage.children().css(n),
            t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , i = null
              , s = this._items.length
              , n = !this.settings.autoWidth
              , o = [];
            for (t.items = {
                merge: !1,
                width: e
            }; s--; )
                i = this._mergers[s],
                i = this.settings.mergeFit && Math.min(i, this.settings.items) || i,
                t.items.merge = 1 < i || t.items.merge,
                o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = []
              , e = this._items
              , i = this.settings
              , s = Math.max(2 * i.items, 4)
              , n = 2 * Math.ceil(e.length / 2)
              , o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0
              , r = ""
              , a = "";
            for (o /= 2; 0 < o; )
                t.push(this.normalize(t.length / 2, !0)),
                r += e[t[t.length - 1]][0].outerHTML,
                t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
                a = e[t[t.length - 1]][0].outerHTML + a,
                --o;
            this._clones = t,
            h(r).addClass("cloned").appendTo(this.$stage),
            h(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e; )
                s = o[i - 1] || 0,
                n = this._widths[this.relative(i)] + this.settings.margin,
                o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding
              , e = this._coordinates
              , i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length
              , i = !this.settings.autoWidth
              , s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--; )
                    t.css.width = this._widths[this.relative(e)],
                    s.eq(e).css(t.css);
            else
                i && (t.css.width = t.items.width,
                s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0,
            t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
            this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, e, i = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding, n = this.coordinates(this.current()) + s, o = n + this.width() * i, r = [], a = 0, h = this._coordinates.length; a < h; a++)
                t = this._coordinates[a - 1] || 0,
                e = Math.abs(this._coordinates[a]) + s * i,
                (this.op(t, "<=", n) && this.op(t, ">", o) || this.op(e, "<", n) && this.op(e, ">", o)) && r.push(a);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + r.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    l.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = h("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(h("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    l.prototype.initializeItems = function() {
        var t = this.$element.find(".owl-item");
        if (t.length)
            return this._items = t.get().map(function(t) {
                return h(t)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ,
    l.prototype.initialize = function() {
        var t, e, i;
        this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"),
        e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a,
        i = this.$element.children(e).width(),
        t.length && i <= 0 && this.preloadAutoWidthImages(t)),
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    l.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    l.prototype.setup = function() {
        var e = this.viewport()
          , t = this.options.responsive
          , i = -1
          , s = null;
        t ? (h.each(t, function(t) {
            t <= e && i < t && (i = Number(t))
        }),
        "function" == typeof (s = h.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()),
        delete s.responsive,
        s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + i))) : s = h.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }),
        this._breakpoint = i,
        this.settings = s,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    l.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    l.prototype.prepare = function(t) {
        var e = this.trigger("prepare", {
            content: t
        });
        return e.data || (e.data = h("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)),
        this.trigger("prepared", {
            content: e.data
        }),
        e.data
    }
    ,
    l.prototype.update = function() {
        for (var t = 0, e = this._pipe.length, i = h.proxy(function(t) {
            return this[t]
        }, this._invalidated), s = {}; t < e; )
            (this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s),
            t++;
        this._invalidated = {},
        this.is("valid") || this.enter("valid")
    }
    ,
    l.prototype.width = function(t) {
        switch (t = t || l.Width.Default) {
        case l.Width.Inner:
        case l.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    l.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    l.prototype.onThrottledResize = function() {
        i.clearTimeout(this.resizeTimer),
        this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    l.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))))
    }
    ,
    l.prototype.registerEventHandlers = function() {
        h.support.transition && this.$stage.on(h.support.transition.end + ".owl.core", h.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", h.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", h.proxy(this.onDragEnd, this)))
    }
    ,
    l.prototype.onDragStart = function(t) {
        var e = null;
        3 !== t.which && (e = h.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(),
        {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }),
        this.is("animating") && (h.support.transform ? this.animate(e.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = h(t.target),
        this._drag.stage.start = e,
        this._drag.stage.current = e,
        this._drag.pointer = this.pointer(t),
        h(n).on("mouseup.owl.core touchend.owl.core", h.proxy(this.onDragEnd, this)),
        h(n).one("mousemove.owl.core touchmove.owl.core", h.proxy(function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(n).on("mousemove.owl.core touchmove.owl.core", h.proxy(this.onDragMove, this)),
            Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    l.prototype.onDragMove = function(t) {
        var e = null
          , i = null
          , s = null
          , n = this.difference(this._drag.pointer, this.pointer(t))
          , o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(),
        this.settings.loop ? (e = this.coordinates(this.minimum()),
        i = this.coordinates(this.maximum() + 1) - e,
        o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        s = this.settings.pullDrag ? -1 * n.x / 5 : 0,
        o.x = Math.max(Math.min(o.x, e + s), i + s)),
        this._drag.stage.current = o,
        this.animate(o.x))
    }
    ,
    l.prototype.onDragEnd = function(t) {
        var e = this.difference(this._drag.pointer, this.pointer(t))
          , i = this._drag.stage.current
          , s = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        h(n).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = s,
        (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    l.prototype.closest = function(i, s) {
        var n = -1
          , o = this.width()
          , r = this.coordinates();
        return this.settings.freeDrag || h.each(r, h.proxy(function(t, e) {
            return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - o) && (n = "left" === s ? t + 1 : t),
            -1 === n
        }, this)),
        this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())),
        n
    }
    ,
    l.prototype.animate = function(t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(),
        e && (this.enter("animating"),
        this.trigger("translate")),
        h.support.transform3d && h.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : e ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, h.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }
    ,
    l.prototype.is = function(t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }
    ,
    l.prototype.current = function(t) {
        return t === a ? this._current : 0 === this._items.length ? a : (t = this.normalize(t),
        this._current !== t && ((e = this.trigger("change", {
            property: {
                name: "position",
                value: t
            }
        })).data !== a && (t = this.normalize(e.data)),
        this._current = t,
        this.invalidate("position"),
        this.trigger("changed", {
            property: {
                name: "position",
                value: this._current
            }
        })),
        this._current);
        var e
    }
    ,
    l.prototype.invalidate = function(t) {
        return "string" === h.type(t) && (this._invalidated[t] = !0,
        this.is("valid") && this.leave("valid")),
        h.map(this._invalidated, function(t, e) {
            return e
        })
    }
    ,
    l.prototype.reset = function(t) {
        (t = this.normalize(t)) !== a && (this._speed = 0,
        this._current = t,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(t)),
        this.release(["translate", "translated"]))
    }
    ,
    l.prototype.normalize = function(t, e) {
        var i = this._items.length
          , s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = a : (t < 0 || i + s <= t) && (t = ((t - s / 2) % i + i) % i + s / 2),
        t
    }
    ,
    l.prototype.relative = function(t) {
        return t -= this._clones.length / 2,
        this.normalize(t, !0)
    }
    ,
    l.prototype.maximum = function(t) {
        var e, i, s, n = this.settings, o = this._coordinates.length;
        if (n.loop)
            o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(),
                s = this.$element.width(); e-- && !(s < (i += this._items[e].width() + this.settings.margin)); )
                    ;
            o = e + 1
        } else
            o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2),
        Math.max(o, 0)
    }
    ,
    l.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }
    ,
    l.prototype.items = function(t) {
        return t === a ? this._items.slice() : (t = this.normalize(t, !0),
        this._items[t])
    }
    ,
    l.prototype.mergers = function(t) {
        return t === a ? this._mergers.slice() : (t = this.normalize(t, !0),
        this._mergers[t])
    }
    ,
    l.prototype.clones = function(i) {
        function s(t) {
            return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
        }
        var e = this._clones.length / 2
          , n = e + this._items.length;
        return i === a ? h.map(this._clones, function(t, e) {
            return s(e)
        }) : h.map(this._clones, function(t, e) {
            return t === i ? s(e) : null
        })
    }
    ,
    l.prototype.speed = function(t) {
        return t !== a && (this._speed = t),
        this._speed
    }
    ,
    l.prototype.coordinates = function(t) {
        var e, i = 1, s = t - 1;
        return t === a ? h.map(this._coordinates, h.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1,
        s = t + 1),
        e = this._coordinates[t],
        e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0,
        e = Math.ceil(e))
    }
    ,
    l.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }
    ,
    l.prototype.to = function(t, e) {
        var i = this.current()
          , s = null
          , n = t - this.relative(i)
          , o = (0 < n) - (n < 0)
          , r = this._items.length
          , a = this.minimum()
          , h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
        (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && 0 < s - n && (i = s - n,
        t = s,
        this.reset(i))) : t = this.settings.rewind ? (t % (h += 1) + h) % h : Math.max(a, Math.min(h, t)),
        this.speed(this.duration(i, t, e)),
        this.current(t),
        this.isVisible() && this.update()
    }
    ,
    l.prototype.next = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) + 1, t)
    }
    ,
    l.prototype.prev = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) - 1, t)
    }
    ,
    l.prototype.onTransitionEnd = function(t) {
        if (t !== a && (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    l.prototype.viewport = function() {
        var t;
        return this.options.responsiveBaseElement !== i ? t = h(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? t = n.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        t
    }
    ,
    l.prototype.replace = function(t) {
        this.$stage.empty(),
        this._items = [],
        t = t && (t instanceof jQuery ? t : h(t)),
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)),
        t.filter(function() {
            return 1 === this.nodeType
        }).each(h.proxy(function(t, e) {
            e = this.prepare(e),
            this.$stage.append(e),
            this._items.push(e),
            this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    l.prototype.add = function(t, e) {
        var i = this.relative(this._current);
        e = e === a ? this._items.length : this.normalize(e, !0),
        t = t instanceof jQuery ? t : h(t),
        this.trigger("add", {
            content: t,
            position: e
        }),
        t = this.prepare(t),
        0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t),
        0 !== this._items.length && this._items[e - 1].after(t),
        this._items.push(t),
        this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t),
        this._items.splice(e, 0, t),
        this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[i] && this.reset(this._items[i].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: t,
            position: e
        })
    }
    ,
    l.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: t
        }))
    }
    ,
    l.prototype.preloadAutoWidthImages = function(t) {
        t.each(h.proxy(function(t, e) {
            this.enter("pre-loading"),
            e = h(e),
            h(new Image).one("load", h.proxy(function(t) {
                e.attr("src", t.target.src),
                e.css("opacity", 1),
                this.leave("pre-loading"),
                this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }
    ,
    l.prototype.destroy = function() {
        for (var t in this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        h(n).off(".owl.core"),
        !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer),
        this.off(i, "resize", this._handlers.onThrottledResize)),
        this._plugins)
            this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    l.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
        case "<":
            return s ? i < t : t < i;
        case ">":
            return s ? t < i : i < t;
        case ">=":
            return s ? t <= i : i <= t;
        case "<=":
            return s ? i <= t : t <= i
        }
    }
    ,
    l.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }
    ,
    l.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }
    ,
    l.prototype.trigger = function(t, e, i, s, n) {
        var o = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , r = h.camelCase(h.grep(["on", t, i], function(t) {
            return t
        }).join("-").toLowerCase())
          , a = h.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), h.extend({
            relatedTarget: this
        }, o, e));
        return this._supress[t] || (h.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(a)
        }),
        this.register({
            type: l.Type.Event,
            name: t
        }),
        this.$element.trigger(a),
        this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)),
        a
    }
    ,
    l.prototype.enter = function(t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
            this._states.current[e] === a && (this._states.current[e] = 0),
            this._states.current[e]++
        }, this))
    }
    ,
    l.prototype.leave = function(t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }
    ,
    l.prototype.register = function(i) {
        var e;
        i.type === l.Type.Event ? (h.event.special[i.name] || (h.event.special[i.name] = {}),
        h.event.special[i.name].owl || (e = h.event.special[i.name]._default,
        h.event.special[i.name]._default = function(t) {
            return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
        }
        ,
        h.event.special[i.name].owl = !0)) : i.type === l.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags,
        this._states.tags[i.name] = h.grep(this._states.tags[i.name], h.proxy(function(t, e) {
            return h.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }
    ,
    l.prototype.suppress = function(t) {
        h.each(t, h.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }
    ,
    l.prototype.release = function(t) {
        h.each(t, h.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }
    ,
    l.prototype.pointer = function(t) {
        var e = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX,
        e.y = t.pageY) : (e.x = t.clientX,
        e.y = t.clientY),
        e
    }
    ,
    l.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }
    ,
    l.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }
    ,
    h.fn.owlCarousel = function(e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var t = h(this)
              , i = t.data("owl.carousel");
            i || (i = new l(this,"object" == typeof e && e),
            t.data("owl.carousel", i),
            h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                i.register({
                    type: l.Type.Event,
                    name: e
                }),
                i.$element.on(e + ".owl.carousel.core", h.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]),
                    i[e].apply(this, [].slice.call(arguments, 1)),
                    this.release([e]))
                }, i))
            })),
            "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
        })
    }
    ,
    h.fn.owlCarousel.Constructor = l
}(window.Zepto || window.jQuery, window, document),
function(e, i) {
    var s = function(t) {
        this._core = t,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": e.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = e.extend({}, s.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    s.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    s.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    s.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    s.prototype.destroy = function() {
        var t, e;
        for (t in i.clearInterval(this._interval),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(a, o) {
    var e = function(t) {
        this._core = t,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var e = this._core.settings
                      , i = e.center && Math.ceil(e.items / 2) || e.items
                      , s = e.center && -1 * i || 0
                      , n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s
                      , o = this._core.clones().length
                      , r = a.proxy(function(t, e) {
                        this.load(e)
                    }, this);
                    for (0 < e.lazyLoadEager && (i += e.lazyLoadEager,
                    e.loop && (n -= e.lazyLoadEager,
                    i++)); s++ < i; )
                        this.load(o / 2 + this._core.relative(n)),
                        o && a.each(this._core.clones(this._core.relative(n)), r),
                        n++
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    e.prototype.load = function(t) {
        var e = this._core.$stage.children().eq(t)
          , i = e && e.find(".owl-lazy");
        !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
            var i, s = a(e), n = 1 < o.devicePixelRatio && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: n
            }, "lazy"),
            s.is("img") ? s.one("load.owl.lazy", a.proxy(function() {
                s.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this)).attr("src", n) : s.is("source") ? s.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this)).attr("srcset", n) : ((i = new Image).onload = a.proxy(function() {
                s.css({
                    "background-image": 'url("' + n + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this),
            i.src = n)
        }, this)),
        this._loaded.push(e.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(r, i) {
    var s = function(t) {
        this._core = t,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": r.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": r.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": r.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = r.extend({}, s.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var e = this;
        r(i).on("load", function() {
            e._core.settings.autoHeight && e.update()
        }),
        r(i).resize(function() {
            e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId),
            e._intervalId = setTimeout(function() {
                e.update()
            }, 250))
        })
    };
    s.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    s.prototype.update = function() {
        var t = this._core._current
          , e = t + this._core.settings.items
          , i = this._core.settings.lazyLoad
          , s = this._core.$stage.children().toArray().slice(t, e)
          , n = []
          , o = 0;
        r.each(s, function(t, e) {
            n.push(r(e).height())
        }),
        (o = Math.max.apply(null, n)) <= 1 && i && this._previousHeight && (o = this._previousHeight),
        this._previousHeight = o,
        this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }
    ,
    s.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    r.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(c, e) {
    var i = function(t) {
        this._core = t,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": c.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": c.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": c.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": c.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": c.proxy(function(t) {
                var e;
                !t.namespace || (e = c(t.content).find(".owl-video")).length && (e.css("display", "none"),
                this.fetch(e, c(t.content)))
            }, this)
        },
        this._core.options = c.extend({}, i.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(t) {
            this.play(t)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    i.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
          , s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id")
          , n = t.attr("data-width") || this._core.settings.videoWidth
          , o = t.attr("data-height") || this._core.settings.videoHeight
          , r = t.attr("href");
        if (!r)
            throw new Error("Missing video URL.");
        if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))
            i = "youtube";
        else if (-1 < s[3].indexOf("vimeo"))
            i = "vimeo";
        else {
            if (!(-1 < s[3].indexOf("vzaar")))
                throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6],
        this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        },
        e.attr("data-video", r),
        this.thumbnail(t, this._videos[r])
    }
    ,
    i.prototype.thumbnail = function(e, t) {
        function i(t) {
            s = l.lazyLoad ? c("<div/>", {
                class: "owl-video-tn " + h,
                srcType: t
            }) : c("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + t + ")"
            }),
            e.after(s),
            e.after('<div class="owl-video-play-icon"></div>')
        }
        var s, n, o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "", r = e.find("img"), a = "src", h = "", l = this._core.settings;
        if (e.wrap(c("<div/>", {
            class: "owl-video-wrapper",
            style: o
        })),
        this._core.settings.lazyLoad && (a = "data-src",
        h = "owl-lazy"),
        r.length)
            return i(r.attr(a)),
            r.remove(),
            !1;
        "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg",
        i(n)) : "vimeo" === t.type ? c.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t[0].thumbnail_large,
                i(n)
            }
        }) : "vzaar" === t.type && c.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                n = t.framegrab_url,
                i(n)
            }
        })
    }
    ,
    i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    i.prototype.play = function(t) {
        var e, i = c(t.target).closest("." + this._core.settings.itemClass), s = this._videos[i.attr("data-video")], n = s.width || "100%", o = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        i = this._core.items(this._core.relative(i.index())),
        this._core.reset(i.index()),
        (e = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o),
        e.attr("width", n),
        "youtube" === s.type ? e.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? e.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && e.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"),
        c(e).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")),
        this._playing = i.addClass("owl-video-playing"))
    }
    ,
    i.prototype.isInFullScreen = function() {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame")
    }
    ,
    i.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    c.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, (window,
document)),
function(r) {
    var e = function(t) {
        this.core = t,
        this.core.options = r.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = void 0,
        this.next = void 0,
        this.handlers = {
            "change.owl.carousel": r.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(),
                this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": r.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        var t, e, i, s, n, o;
        1 === this.core.settings.items && r.support.animation && r.support.transition && (this.core.speed(0),
        e = r.proxy(this.clear, this),
        i = this.core.$stage.children().eq(this.previous),
        s = this.core.$stage.children().eq(this.next),
        n = this.core.settings.animateIn,
        o = this.core.settings.animateOut,
        this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
        i.one(r.support.animation.end, e).css({
            left: t + "px"
        }).addClass("animated owl-animated-out").addClass(o)),
        n && s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n)))
    }
    ,
    e.prototype.clear = function(t) {
        r(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    r.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, (window,
document)),
function(s, n, e) {
    var i = function(t) {
        this._core = t,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": s.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": s.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": s.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": s.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": s.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = s.extend({}, i.Defaults, this._core.options)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    i.prototype._next = function(t) {
        this._call = n.setTimeout(s.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
    }
    ,
    i.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    i.prototype.play = function(t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"),
        t = t || this._core.settings.autoplayTimeout,
        i = Math.min(this._time % (this._timeout || t), t),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : n.clearTimeout(this._call),
        this._time += this.read() % t - i,
        this._timeout = t,
        this._call = n.setTimeout(s.proxy(this._next, this, e), t - i)
    }
    ,
    i.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        n.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    i.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        n.clearTimeout(this._call))
    }
    ,
    i.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    s.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document),
function(o) {
    "use strict";
    var e = function(t) {
        this._core = t,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": o.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": o.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": o.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": o.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": o.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": o.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = o.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    e.prototype.initialize = function() {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function(t) {
            this.prev(i.navSpeed)
        }, this)),
        this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function(t) {
            this.next(i.navSpeed)
        }, this)),
        i.dotsData || (this._templates = [o('<button role="button">').addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", o.proxy(function(t) {
            var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
            t.preventDefault(),
            this.to(e, i.dotsSpeed)
        }, this)),
        this._overrides)
            this._core[t] = o.proxy(this[t], this)
    }
    ,
    e.prototype.destroy = function() {
        var t, e, i, s, n = this._core.settings;
        for (t in this._handlers)
            this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
            "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (s in this.overides)
            this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    e.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2, s = i + this._core.items().length, n = this._core.maximum(!0), o = this._core.settings, r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
        o.dots || "page" == o.slideBy)
            for (this._pages = [],
            t = i,
            e = 0; t < s; t++) {
                if (r <= e || 0 === e) {
                    if (this._pages.push({
                        start: Math.min(n, t - i),
                        end: t - i + r - 1
                    }),
                    Math.min(n, t - i) === n)
                        break;
                    e = 0,
                    0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }
    ,
    e.prototype.draw = function() {
        var t, e = this._core.settings, i = this._core.items().length <= e.items, s = this._core.relative(this._core.current()), n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i),
        e.nav && (this._controls.$previous.toggleClass("disabled", !n && s <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !n && s >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !e.dots || i),
        e.dots && (t = this._pages.length - this._controls.$absolute.children().length,
        e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(t) {
        var e = this._core.settings;
        t.page = {
            index: o.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }
    ,
    e.prototype.current = function() {
        var i = this._core.relative(this._core.current());
        return o.grep(this._pages, o.proxy(function(t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(t) {
        var e, i, s = this._core.settings;
        return "page" == s.slideBy ? (e = o.inArray(this.current(), this._pages),
        i = this._pages.length,
        t ? ++e : --e,
        e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()),
        i = this._core.items().length,
        t ? e += s.slideBy : e -= s.slideBy),
        e
    }
    ,
    e.prototype.next = function(t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }
    ,
    e.prototype.prev = function(t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }
    ,
    e.prototype.to = function(t, e, i) {
        var s;
        !i && this._pages.length ? (s = this._pages.length,
        o.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
    }
    ,
    o.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, (window,
document)),
function(s, n) {
    "use strict";
    var e = function(t) {
        this._core = t,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": s.proxy(function(t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": s.proxy(function(t) {
                if (t.namespace) {
                    var e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!e)
                        return;
                    this._hashes[e] = t.content
                }
            }, this),
            "changed.owl.carousel": s.proxy(function(t) {
                if (t.namespace && "position" === t.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current()))
                      , e = s.map(this._hashes, function(t, e) {
                        return t === i ? e : null
                    }).join();
                    if (!e || n.location.hash.slice(1) === e)
                        return;
                    n.location.hash = e
                }
            }, this)
        },
        this._core.options = s.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        s(n).on("hashchange.owl.navigation", s.proxy(function(t) {
            var e = n.location.hash.substring(1)
              , i = this._core.$stage.children()
              , s = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var t, e;
        for (t in s(n).off("hashchange.owl.navigation"),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    s.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(n, o) {
    var r = n("<support>").get(0).style
      , a = "Webkit Moz O ms".split(" ")
      , t = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , e = function() {
        return !!h("transform")
    }
      , i = function() {
        return !!h("perspective")
    }
      , s = function() {
        return !!h("animation")
    };
    function h(t, i) {
        var s = !1
          , e = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
            if (r[e] !== o)
                return s = !i || e,
                !1
        }),
        s
    }
    function l(t) {
        return h(t, !0)
    }
    !function() {
        return !!h("transition")
    }() || (n.support.transition = new String(l("transition")),
    n.support.transition.end = t.transition.end[n.support.transition]),
    s() && (n.support.animation = new String(l("animation")),
    n.support.animation.end = t.animation.end[n.support.animation]),
    e() && (n.support.transform = new String(l("transform")),
    n.support.transform3d = i())
}(window.Zepto || window.jQuery, (window,
void document));

/*jquery.form.js*/
!function(F) {
    function X() {
        var e;
        F.fn.ajaxSubmit.debug && (e = "[jquery.form] " + Array.prototype.join.call(arguments, ""),
        window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e))
    }
    F.fn.ajaxSubmit = function(L) {
        if (!this.length)
            return X("ajaxSubmit: skipping submit process - no element selected"),
            this;
        var E, e, t, M = this;
        "function" == typeof L && (L = {
            success: L
        }),
        E = this.attr("method"),
        t = (t = (t = "string" == typeof (e = this.attr("action")) ? F.trim(e) : "") || window.location.href || "") && (t.match(/^([^#]+)/) || [])[1],
        L = F.extend(!0, {
            url: t,
            success: F.ajaxSettings.success,
            type: E || "GET",
            iframeSrc: "about:blank"
        }, L);
        var a = {};
        if (this.trigger("form-pre-serialize", [this, L, a]),
        a.veto)
            return X("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (L.beforeSerialize && !1 === L.beforeSerialize(this, L))
            return X("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        var r = L.traditional;
        void 0 === r && (r = F.ajaxSettings.traditional);
        var n, o = this.formToArray(L.semantic);
        if (L.data && (L.extraData = L.data,
        n = F.param(L.data, r)),
        L.beforeSubmit && !1 === L.beforeSubmit(o, this, L))
            return X("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [o, this, L, a]),
        a.veto)
            return X("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        var i = F.param(o, r);
        n && (i = i ? i + "&" + n : n),
        "GET" == L.type.toUpperCase() ? (L.url += (0 <= L.url.indexOf("?") ? "&" : "?") + i,
        L.data = null) : L.data = i;
        var s, u = [];
        L.resetForm && u.push(function() {
            M.resetForm()
        }),
        L.clearForm && u.push(function() {
            M.clearForm(L.includeHidden)
        }),
        !L.dataType && L.target ? (s = L.success || function() {}
        ,
        u.push(function(e) {
            var t = L.replaceTarget ? "replaceWith" : "html";
            F(L.target)[t](e).each(s, arguments)
        })) : L.success && u.push(L.success);
        L.success = function(e, t, a) {
            for (var r = L.context || L, n = 0, o = u.length; n < o; n++)
                u[n].apply(r, [e, t, a || M, M])
        }
        ;
        var l = 0 < (!1).length
          , c = "multipart/form-data"
          , f = M.attr("enctype") == c || M.attr("encoding") == c
          , m = !!(l && (!1).get(0).files && window.FormData);
        X("fileAPI :" + m);
        var d = (l || f) && !m;
        return !1 !== L.iframe && (L.iframe || d) ? L.closeKeepAlive ? F.get(L.closeKeepAlive, function() {
            p(o)
        }) : p(o) : (l || f) && m ? (L.progress = L.progress || F.noop,
        function(e) {
            for (var r = new FormData, t = 0; t < e.length; t++)
                "file" != e[t].type && r.append(e[t].name, e[t].value);
            if (M.find("input:file:enabled").each(function() {
                var e = F(this).attr("name")
                  , t = this.files;
                if (e)
                    for (var a = 0; a < t.length; a++)
                        r.append(e, t[a])
            }),
            L.extraData)
                for (var a in L.extraData)
                    r.append(a, L.extraData[a]);
            L.data = null;
            var n = F.extend(!0, {}, F.ajaxSettings, L, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: "POST"
            });
            n.context = n.context || n,
            n.data = null;
            var o = n.beforeSend;
            n.beforeSend = function(e, t) {
                t.data = r,
                e.upload && (e.upload.onprogress = function(e) {
                    t.progress(e.position, e.total)
                }
                ),
                o && o.call(t, e, L)
            }
            ,
            F.ajax(n)
        }(o)) : F.ajax(L),
        this.trigger("form-submit-notify", [this, L]),
        this;
        function p(e) {
            var t, c, n, f, m, d, a, r, p, h, v, g, o, i, x, b, y, T, S, s, j, k, u = M[0], l = !!F.fn.prop;
            if (e)
                if (l)
                    for (t = 0; t < e.length; t++)
                        F(u[e[t].name]).prop("disabled", !1);
                else
                    for (t = 0; t < e.length; t++)
                        F(u[e[t].name]).removeAttr("disabled");
            function w(e) {
                return e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document
            }
            function D() {
                var e = M.attr("target")
                  , t = M.attr("action");
                u.setAttribute("target", n),
                E || u.setAttribute("method", "POST"),
                t != k.url && u.setAttribute("action", k.url),
                k.skipEncodingOverride || E && !/post/i.test(E) || M.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                k.timeout && (h = setTimeout(function() {
                    p = !0,
                    A(v)
                }, k.timeout));
                var a = [];
                try {
                    if (k.extraData)
                        for (var r in k.extraData)
                            a.push(F('<input type="hidden" name="' + r + '">').attr("value", k.extraData[r]).appendTo(u)[0]);
                    k.iframeTarget || (f.appendTo("body"),
                    m.attachEvent ? m.attachEvent("onload", A) : m.addEventListener("load", A, !1)),
                    setTimeout(function e() {
                        try {
                            var t = w(m).readyState;
                            X("state = " + t),
                            "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (e) {
                            X("Server abort: ", e, " (", e.name, ")"),
                            A(g),
                            h && clearTimeout(h),
                            h = void 0
                        }
                    }, 15),
                    u.submit()
                } finally {
                    u.setAttribute("action", t),
                    e ? u.setAttribute("target", e) : M.removeAttr("target"),
                    F(a).remove()
                }
            }
            function A(t) {
                if (!d.aborted && !T) {
                    try {
                        b = w(m)
                    } catch (e) {
                        X("cannot access response document: ", e),
                        t = g
                    }
                    if (t === v && d)
                        d.abort("timeout");
                    else if (t == g && d)
                        d.abort("server abort");
                    else if (b && b.location.href != k.iframeSrc || p) {
                        m.detachEvent ? m.detachEvent("onload", A) : m.removeEventListener("load", A, !1);
                        var e, a = "success";
                        try {
                            if (p)
                                throw "timeout";
                            var r = "xml" == k.dataType || b.XMLDocument || F.isXMLDoc(b);
                            if (X("isXml=" + r),
                            !r && window.opera && (null == b.body || "" == b.body.innerHTML) && --y)
                                return X("requeing onLoad callback, DOM not available"),
                                void setTimeout(A, 250);
                            var n = b.body ? b.body : b.documentElement;
                            d.responseText = n ? n.innerHTML : null,
                            d.responseXML = b.XMLDocument ? b.XMLDocument : b,
                            r && (k.dataType = "xml"),
                            d.getResponseHeader = function(e) {
                                return {
                                    "content-type": k.dataType
                                }[e]
                            }
                            ,
                            n && (d.status = Number(n.getAttribute("status")) || d.status,
                            d.statusText = n.getAttribute("statusText") || d.statusText);
                            var o, i, s, u = (k.dataType || "").toLowerCase(), l = /(json|script|text)/.test(u);
                            l || k.textarea ? (o = b.getElementsByTagName("textarea")[0]) ? (d.responseText = o.value,
                            d.status = Number(o.getAttribute("status")) || d.status,
                            d.statusText = o.getAttribute("statusText") || d.statusText) : l && (i = b.getElementsByTagName("pre")[0],
                            s = b.getElementsByTagName("body")[0],
                            i ? d.responseText = i.textContent ? i.textContent : i.innerText : s && (d.responseText = s.textContent ? s.textContent : s.innerText)) : "xml" != u || d.responseXML || null == d.responseText || (d.responseXML = S(d.responseText));
                            try {
                                x = j(d, u, k)
                            } catch (t) {
                                a = "parsererror",
                                d.error = e = t || a
                            }
                        } catch (t) {
                            X("error caught: ", t),
                            a = "error",
                            d.error = e = t || a
                        }
                        d.aborted && (X("upload aborted"),
                        a = null),
                        d.status && (a = 200 <= d.status && d.status < 300 || 304 === d.status ? "success" : "error"),
                        "success" === a ? (k.success && k.success.call(k.context, x, "success", d),
                        c && F.event.trigger("ajaxSuccess", [d, k])) : a && (null == e && (e = d.statusText),
                        k.error && k.error.call(k.context, d, a, e),
                        c && F.event.trigger("ajaxError", [d, k, e])),
                        c && F.event.trigger("ajaxComplete", [d, k]),
                        c && !--F.active && F.event.trigger("ajaxStop"),
                        k.complete && k.complete.call(k.context, d, a),
                        T = !0,
                        k.timeout && clearTimeout(h),
                        setTimeout(function() {
                            k.iframeTarget || f.remove(),
                            d.responseXML = null
                        }, 100)
                    }
                }
            }
            F(":input[name=submit],:input[id=submit]", u).length ? alert('Error: Form elements must not have name or id of "submit".') : ((k = F.extend(!0, {}, F.ajaxSettings, L)).context = k.context || k,
            n = "jqFormIO" + (new Date).getTime(),
            k.iframeTarget ? null == (r = (f = F(k.iframeTarget)).attr("name")) ? f.attr("name", n) : n = r : (f = F('<iframe name="' + n + '" src="' + k.iframeSrc + '" />')).css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            }),
            m = f[0],
            d = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(e) {
                    var t = "timeout" === e ? "timeout" : "aborted";
                    X("aborting upload... " + t),
                    this.aborted = 1,
                    f.attr("src", k.iframeSrc),
                    d.error = t,
                    k.error && k.error.call(k.context, d, t, e),
                    c && F.event.trigger("ajaxError", [d, k, t]),
                    k.complete && k.complete.call(k.context, d, t)
                }
            },
            (c = k.global) && !F.active++ && F.event.trigger("ajaxStart"),
            c && F.event.trigger("ajaxSend", [d, k]),
            k.beforeSend && !1 === k.beforeSend.call(k.context, d, k) ? k.global && F.active-- : d.aborted || ((a = u.clk) && (r = a.name) && !a.disabled && (k.extraData = k.extraData || {},
            k.extraData[r] = a.value,
            "image" == a.type && (k.extraData[r + ".x"] = u.clk_x,
            k.extraData[r + ".y"] = u.clk_y)),
            v = 1,
            g = 2,
            o = F("meta[name=csrf-token]").attr("content"),
            (i = F("meta[name=csrf-param]").attr("content")) && o && (k.extraData = k.extraData || {},
            k.extraData[i] = o),
            k.forceSync ? D() : setTimeout(D, 10),
            y = 50,
            S = F.parseXML || function(e, t) {
                return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"),
                t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }
            ,
            s = F.parseJSON || function(e) {
                return window.eval("(" + e + ")")
            }
            ,
            j = function(e, t, a) {
                var r = e.getResponseHeader("content-type") || ""
                  , n = "xml" === t || !t && 0 <= r.indexOf("xml")
                  , o = n ? e.responseXML : e.responseText;
                return n && "parsererror" === o.documentElement.nodeName && F.error && F.error("parsererror"),
                a && a.dataFilter && (o = a.dataFilter(o, t)),
                "string" == typeof o && ("json" === t || !t && 0 <= r.indexOf("json") ? o = s(o) : ("script" === t || !t && 0 <= r.indexOf("javascript")) && F.globalEval(o)),
                o
            }
            ))
        }
    }
    ,
    F.fn.ajaxForm = function(t) {
        if (0 !== this.length)
            return this.ajaxFormUnbind().bind("submit.form-plugin", function(e) {
                e.isDefaultPrevented() || (e.preventDefault(),
                F(this).ajaxSubmit(t))
            }).bind("click.form-plugin", function(e) {
                var t = e.target
                  , a = F(t);
                if (!a.is(":submit,input:image")) {
                    var r = a.closest(":submit");
                    if (0 == r.length)
                        return;
                    t = r[0]
                }
                var n, o = this;
                "image" == (o.clk = t).type && (null != e.offsetX ? (o.clk_x = e.offsetX,
                o.clk_y = e.offsetY) : "function" == typeof F.fn.offset ? (n = a.offset(),
                o.clk_x = e.pageX - n.left,
                o.clk_y = e.pageY - n.top) : (o.clk_x = e.pageX - t.offsetLeft,
                o.clk_y = e.pageY - t.offsetTop)),
                setTimeout(function() {
                    o.clk = o.clk_x = o.clk_y = null
                }, 100)
            });
        var e = {
            s: this.selector,
            c: this.context
        };
        return !F.isReady && e.s ? (X("DOM not ready, queuing ajaxForm"),
        F(function() {
            F(e.s, e.c).ajaxForm(t)
        })) : X("terminating; zero elements found by selector" + (F.isReady ? "" : " (DOM not ready)")),
        this
    }
    ,
    F.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ,
    F.fn.formToArray = function(e) {
        var t = [];
        if (0 === this.length)
            return t;
        var a, r, n, o, i, s, u, l, c, f = this[0], m = e ? f.getElementsByTagName("*") : f.elements;
        if (!m)
            return t;
        for (a = 0,
        i = m.length; a < i; a++)
            if (c = (o = m[a]).name)
                if (e && f.clk && "image" == o.type)
                    o.disabled || f.clk != o || (t.push({
                        name: c,
                        value: F(o).val(),
                        type: o.type
                    }),
                    t.push({
                        name: c + ".x",
                        value: f.clk_x
                    }, {
                        name: c + ".y",
                        value: f.clk_y
                    }));
                else if ((n = F.fieldValue(o, !0)) && n.constructor == Array)
                    for (r = 0,
                    s = n.length; r < s; r++)
                        t.push({
                            name: c,
                            value: n[r]
                        });
                else
                    null != n && t.push({
                        name: c,
                        value: n,
                        type: o.type
                    });
        return e || !f.clk || (c = (l = (u = F(f.clk))[0]).name) && !l.disabled && "image" == l.type && (t.push({
            name: c,
            value: u.val()
        }),
        t.push({
            name: c + ".x",
            value: f.clk_x
        }, {
            name: c + ".y",
            value: f.clk_y
        })),
        t
    }
    ,
    F.fn.formSerialize = function(e) {
        return F.param(this.formToArray(e))
    }
    ,
    F.fn.fieldSerialize = function(n) {
        var o = [];
        return this.each(function() {
            var e = this.name;
            if (e) {
                var t = F.fieldValue(this, n);
                if (t && t.constructor == Array)
                    for (var a = 0, r = t.length; a < r; a++)
                        o.push({
                            name: e,
                            value: t[a]
                        });
                else
                    null != t && o.push({
                        name: this.name,
                        value: t
                    })
            }
        }),
        F.param(o)
    }
    ,
    F.fn.fieldValue = function(e) {
        for (var t = [], a = 0, r = this.length; a < r; a++) {
            var n = this[a]
              , o = F.fieldValue(n, e);
            null == o || o.constructor == Array && !o.length || (o.constructor == Array ? F.merge(t, o) : t.push(o))
        }
        return t
    }
    ,
    F.fieldValue = function(e, t) {
        var a = e.name
          , r = e.type
          , n = e.tagName.toLowerCase();
        if (void 0 === t && (t = !0),
        t && (!a || e.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !e.checked || ("submit" == r || "image" == r) && e.form && e.form.clk != e || "select" == n && -1 == e.selectedIndex))
            return null;
        if ("select" != n)
            return F(e).val();
        var o = e.selectedIndex;
        if (o < 0)
            return null;
        for (var i = [], s = e.options, u = "select-one" == r, l = u ? o + 1 : s.length, c = u ? o : 0; c < l; c++) {
            var f = s[c];
            if (f.selected) {
                var m = (m = f.value) || (f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value);
                if (u)
                    return m;
                i.push(m)
            }
        }
        return i
    }
    ,
    F.fn.clearForm = function(e) {
        return this.each(function() {
            F("input,select,textarea", this).clearFields(e)
        })
    }
    ,
    F.fn.clearFields = F.fn.clearInputs = function(a) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var e = this.type
              , t = this.tagName.toLowerCase();
            r.test(e) || "textarea" == t || a && /hidden/.test(e) ? this.value = "" : "checkbox" == e || "radio" == e ? this.checked = !1 : "select" == t && (this.selectedIndex = -1)
        })
    }
    ,
    F.fn.resetForm = function() {
        return this.each(function() {
            "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset()
        })
    }
    ,
    F.fn.enable = function(e) {
        return void 0 === e && (e = !0),
        this.each(function() {
            this.disabled = !e
        })
    }
    ,
    F.fn.selected = function(a) {
        return void 0 === a && (a = !0),
        this.each(function() {
            var e, t = this.type;
            "checkbox" == t || "radio" == t ? this.checked = a : "option" == this.tagName.toLowerCase() && (e = F(this).parent("select"),
            a && e[0] && "select-one" == e[0].type && e.find("option").selected(!1),
            this.selected = a)
        })
    }
    ,
    F.fn.ajaxSubmit.debug = !1
}(jQuery);

/*jquery.easy-ticker.min.js*/
!function(r, a, u) {
    var e = "easyTicker"
      , p = {
        direction: "up",
        easing: "swing",
        speed: "slow",
        interval: 2e3,
        height: "auto",
        visible: 0,
        mousePause: 1,
        controls: {
            up: "",
            down: "",
            toggle: "",
            playText: "Play",
            stopText: "Stop"
        }
    };
    function o(t, e) {
        var c = this;
        function o() {
            c.timer = setInterval(function() {
                1 == c.winFocus && i(c.opts.direction)
            }, c.opts.interval),
            r(c.opts.controls.toggle).addClass("et-run").html(c.opts.controls.stopText)
        }
        function n() {
            clearInterval(c.timer),
            c.timer = 0,
            r(c.opts.controls.toggle).removeClass("et-run").html(c.opts.controls.playText)
        }
        function i(t) {
            var e, o, n, i, s;
            c.elem.is(":visible") && (n = "up" == t ? (e = ":first-child",
            o = "-=",
            "appendTo") : (e = ":last-child",
            o = "+=",
            "prependTo"),
            s = (i = c.targ.children(e)).outerHeight(),
            c.targ.stop(!0, !0).animate({
                top: o + s + "px"
            }, c.opts.speed, c.opts.easing, function() {
                i.hide()[n](c.targ).fadeIn(),
                c.targ.css("top", 0),
                l()
            }))
        }
        function s(t) {
            n(),
            i("up" == t ? "up" : "down")
        }
        function l() {
            var t, e, o, n;
            "auto" == c.opts.height && 0 != c.opts.visible ? (anim = "init" == arguments.callee.caller.name ? 0 : 1,
            o = anim,
            n = 0,
            c.targ.children(":lt(" + c.opts.visible + ")").each(function() {
                n += r(this).outerHeight()
            }),
            1 == o ? c.elem.stop(!0, !0).animate({
                height: n
            }, c.opts.speed) : c.elem.css("height", n)) : "auto" == c.opts.height && (t = 0,
            e = c.elem.css("display"),
            c.elem.css("display", "block"),
            c.targ.children().each(function() {
                t += r(this).outerHeight()
            }),
            c.elem.css({
                display: e,
                height: t
            }))
        }
        return c.opts = r.extend({}, p, e),
        c.elem = r(t),
        c.targ = r(t).children(":first-child"),
        c.timer = 0,
        c.mHover = 0,
        c.winFocus = 1,
        c.elem.children().css("margin", 0).children().css("margin", 0),
        c.elem.css({
            position: "relative",
            height: c.opts.height,
            overflow: "hidden"
        }),
        c.targ.css({
            position: "absolute",
            margin: 0
        }),
        setInterval(function() {
            l()
        }, 100),
        o(),
        r([a, u]).off("focus.jqet").on("focus.jqet", function() {
            c.winFocus = 1
        }).off("blur.jqet").on("blur.jqet", function() {
            c.winFocus = 0
        }),
        1 == c.opts.mousePause && c.elem.mouseenter(function() {
            c.timerTemp = c.timer,
            n()
        }).mouseleave(function() {
            0 !== c.timerTemp && o()
        }),
        r(c.opts.controls.up).on("click", function(t) {
            t.preventDefault(),
            s("up")
        }),
        r(c.opts.controls.down).on("click", function(t) {
            t.preventDefault(),
            s("down")
        }),
        r(c.opts.controls.toggle).on("click", function(t) {
            t.preventDefault(),
            (0 == c.timer ? o : n)()
        }),
        {
            up: function() {
                s("up")
            },
            down: function() {
                s("down")
            },
            start: o,
            stop: n,
            options: c.opts
        }
    }
    r.fn[e] = function(t) {
        return this.each(function() {
            r.data(this, e) || r.data(this, e, new o(this,t))
        })
    }
}(jQuery, window, document);
