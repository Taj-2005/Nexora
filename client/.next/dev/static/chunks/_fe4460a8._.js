(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/context/shop-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShopProvider",
    ()=>ShopProvider,
    "useShop",
    ()=>useShop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ShopContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ShopProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const cartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopProvider.useMemo[cartCount]": ()=>Object.values(cart).reduce({
                "ShopProvider.useMemo[cartCount]": (s, q)=>s + q
            }["ShopProvider.useMemo[cartCount]"], 0)
    }["ShopProvider.useMemo[cartCount]"], [
        cart
    ]);
    const wishlistCount = wishlist.size;
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[addToCart]": (productId, quantity = 1)=>{
            setCart({
                "ShopProvider.useCallback[addToCart]": (prev)=>({
                        ...prev,
                        [productId]: (prev[productId] ?? 0) + quantity
                    })
            }["ShopProvider.useCallback[addToCart]"]);
        }
    }["ShopProvider.useCallback[addToCart]"], []);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[removeFromCart]": (productId)=>{
            setCart({
                "ShopProvider.useCallback[removeFromCart]": (prev)=>{
                    const next = {
                        ...prev
                    };
                    delete next[productId];
                    return next;
                }
            }["ShopProvider.useCallback[removeFromCart]"]);
        }
    }["ShopProvider.useCallback[removeFromCart]"], []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[updateQuantity]": (productId, quantity)=>{
            if (quantity < 1) {
                setCart({
                    "ShopProvider.useCallback[updateQuantity]": (prev)=>{
                        const next = {
                            ...prev
                        };
                        delete next[productId];
                        return next;
                    }
                }["ShopProvider.useCallback[updateQuantity]"]);
                return;
            }
            setCart({
                "ShopProvider.useCallback[updateQuantity]": (prev)=>({
                        ...prev,
                        [productId]: quantity
                    })
            }["ShopProvider.useCallback[updateQuantity]"]);
        }
    }["ShopProvider.useCallback[updateQuantity]"], []);
    const toggleWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[toggleWishlist]": (productId)=>{
            setWishlist({
                "ShopProvider.useCallback[toggleWishlist]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(productId)) next.delete(productId);
                    else next.add(productId);
                    return next;
                }
            }["ShopProvider.useCallback[toggleWishlist]"]);
        }
    }["ShopProvider.useCallback[toggleWishlist]"], []);
    const isInWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[isInWishlist]": (productId)=>wishlist.has(productId)
    }["ShopProvider.useCallback[isInWishlist]"], [
        wishlist
    ]);
    const moveToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShopProvider.useCallback[moveToCart]": (productId)=>{
            addToCart(productId, 1);
            setWishlist({
                "ShopProvider.useCallback[moveToCart]": (prev)=>{
                    const next = new Set(prev);
                    next.delete(productId);
                    return next;
                }
            }["ShopProvider.useCallback[moveToCart]"]);
        }
    }["ShopProvider.useCallback[moveToCart]"], [
        addToCart
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopProvider.useMemo[value]": ()=>({
                cart,
                wishlist,
                cartCount,
                wishlistCount,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleWishlist,
                isInWishlist,
                moveToCart
            })
    }["ShopProvider.useMemo[value]"], [
        cart,
        wishlist,
        cartCount,
        wishlistCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        moveToCart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/shop-context.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(ShopProvider, "G/eyiKV3g7WeulrNlIIEQu4fm9c=");
_c = ShopProvider;
function useShop() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ShopContext);
    if (!ctx) throw new Error("useShop must be used within ShopProvider");
    return ctx;
}
_s1(useShop, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ShopProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/auth-token.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAccessToken",
    ()=>clearAccessToken,
    "getAccessToken",
    ()=>getAccessToken,
    "getExpiresAt",
    ()=>getExpiresAt,
    "isAccessTokenExpired",
    ()=>isAccessTokenExpired,
    "setAccessToken",
    ()=>setAccessToken,
    "setOnUnauthorized",
    ()=>setOnUnauthorized,
    "triggerUnauthorized",
    ()=>triggerUnauthorized
]);
"use client";
/**
 * In-memory access token store. Used by axios interceptor.
 * No localStorage — refresh token is HttpOnly cookie only.
 */ let accessToken = null;
let expiresAt = null;
function setAccessToken(token, expiresInSeconds) {
    accessToken = token;
    expiresAt = Date.now() + expiresInSeconds * 1000;
}
function getAccessToken() {
    return accessToken;
}
function getExpiresAt() {
    return expiresAt;
}
function isAccessTokenExpired() {
    if (!expiresAt) return true;
    return Date.now() >= expiresAt - 60 * 1000; // 1 min buffer
}
function clearAccessToken() {
    accessToken = null;
    expiresAt = null;
}
let onUnauthorized = null;
function setOnUnauthorized(cb) {
    onUnauthorized = cb;
}
function triggerUnauthorized() {
    onUnauthorized?.();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/api/axios.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient,
    "toApiError",
    ()=>toApiError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-token.ts [app-client] (ecmascript)");
"use client";
;
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:4000") ?? "http://localhost:4000";
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL,
    timeout: 30000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
let refreshPromise = null;
async function refreshAccessToken() {
    if (refreshPromise) return refreshPromise;
    refreshPromise = apiClient.post("/api/auth/refresh", {}, {
        withCredentials: true
    }).then((res)=>{
        const data = res.data;
        if (data.success && data.accessToken) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
            return data.accessToken;
        }
        return null;
    }).catch(()=>null).finally(()=>{
        refreshPromise = null;
    });
    return refreshPromise;
}
apiClient.interceptors.request.use((config)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessToken"])();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});
apiClient.interceptors.response.use((res)=>res, async (err)=>{
    const original = err.config;
    if (err.response?.status !== 401 || original._retry) {
        if (err.response?.status === 401) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerUnauthorized"])();
        return Promise.reject(err);
    }
    original._retry = true;
    const newToken = await refreshAccessToken();
    if (newToken) {
        original.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(original);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerUnauthorized"])();
    return Promise.reject(err);
});
function toApiError(err) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err)) {
        const data = err.response?.data;
        return {
            status: err.response?.status ?? 500,
            message: data?.message ?? err.message ?? "Request failed",
            code: data?.code,
            errors: data?.errors
        };
    }
    return {
        status: 500,
        message: "Request failed"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/api/auth.api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/axios.ts [app-client] (ecmascript)");
"use client";
;
const authApi = {
    login: (email, password)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/login", {
            email,
            password
        }).then((r)=>r.data),
    register: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/register", data).then((r)=>r.data),
    logout: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/logout", {}).then((r)=>r.data),
    refresh: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/refresh", {}, {
            withCredentials: true
        }).then((r)=>r.data),
    me: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get("/api/auth/me").then((r)=>r.data),
    forgotPassword: (email)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/forgot-password", {
            email
        }).then((r)=>r.data),
    resetPassword: (token, newPassword)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/reset-password", {
            token,
            newPassword
        }).then((r)=>r.data),
    verifyEmail: (token)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/verify-email", {
            token
        }).then((r)=>r.data)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth,
    "useIsAdmin",
    ()=>useIsAdmin,
    "useIsSuperAdmin",
    ()=>useIsSuperAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-token.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/auth.api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/axios.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function normalizeRole(role) {
    const r = role?.toUpperCase();
    if (r === "CUSTOMER") return "customer";
    if (r === "ADMIN") return "admin";
    if (r === "SUPER_ADMIN") return "super_admin";
    return "customer";
}
function toUser(u) {
    if (!u) return null;
    return {
        id: u.id,
        email: u.email,
        fullName: u.fullName,
        role: normalizeRole(u.role),
        avatarUrl: u.avatarUrl,
        createdAt: u.createdAt
    };
}
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[setUser]": (u)=>{
            setUserState(u);
        }
    }["AuthProvider.useCallback[setUser]"], []);
    const refreshUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[refreshUser]": async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].refresh();
                if (data.success && data.accessToken && data.user) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                    setUserState(toUser(data.user));
                }
            } catch  {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                setUserState(null);
            }
        }
    }["AuthProvider.useCallback[refreshUser]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOnUnauthorized"])({
                "AuthProvider.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                    setUserState(null);
                    if ("TURBOPACK compile-time truthy", 1) router.replace("/login");
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOnUnauthorized"])(null)
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].refresh().then({
                "AuthProvider.useEffect": (data)=>{
                    if (data.success && data.accessToken && data.user) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                        setUserState(toUser(data.user));
                    }
                }
            }["AuthProvider.useEffect"]).catch({
                "AuthProvider.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                    setUserState(null);
                }
            }["AuthProvider.useEffect"]).finally({
                "AuthProvider.useEffect": ()=>setIsInitialized(true)
            }["AuthProvider.useEffect"]);
        }
    }["AuthProvider.useEffect"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (email, password, _remember)=>{
            setError(null);
            setIsLoading(true);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].login(email, password);
                if (data.success && data.accessToken && data.user) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                    setUserState(toUser(data.user));
                }
            } catch (e) {
                const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toApiError"])(e);
                setError(err.message ?? "Login failed");
                throw e;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[login]"], []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[register]": async (fullName, email, password, role)=>{
            setError(null);
            setIsLoading(true);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].register({
                    fullName,
                    email,
                    password,
                    roleRequest: role === "admin_request" ? "admin" : undefined
                });
                if (data.success && data.accessToken && data.user) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                    setUserState(toUser(data.user));
                }
            } catch (e) {
                const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toApiError"])(e);
                setError(err.message ?? "Registration failed");
                throw e;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[register]"], []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": async ()=>{
            setError(null);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].logout();
            } catch  {
            // ignore
            } finally{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAccessToken"])();
                setUserState(null);
            }
        }
    }["AuthProvider.useCallback[logout]"], []);
    const forgotPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[forgotPassword]": async (email)=>{
            setError(null);
            setIsLoading(true);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].forgotPassword(email);
            } catch (e) {
                const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toApiError"])(e);
                setError(err.message ?? "Request failed");
                throw e;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[forgotPassword]"], []);
    const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[resetPassword]": async (token, newPassword)=>{
            setError(null);
            setIsLoading(true);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].resetPassword(token, newPassword);
            } catch (e) {
                const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toApiError"])(e);
                setError(err.message ?? "Reset failed");
                throw e;
            } finally{
                setIsLoading(false);
            }
        }
    }["AuthProvider.useCallback[resetPassword]"], []);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[clearError]": ()=>setError(null)
    }["AuthProvider.useCallback[clearError]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[value]": ()=>({
                user,
                isAuthenticated: !!user,
                isLoading,
                isInitialized,
                login,
                register,
                logout,
                forgotPassword,
                resetPassword,
                refreshUser,
                setUser,
                error,
                clearError
            })
    }["AuthProvider.useMemo[value]"], [
        user,
        isLoading,
        isInitialized,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        refreshUser,
        setUser,
        error,
        clearError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/auth-context.tsx",
        lineNumber: 234,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "XyvuzaRQKviJiJ73TomKvln44wg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
function useAuth() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
_s1(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useIsAdmin() {
    _s2();
    const { user } = useAuth();
    return user?.role === "admin" || user?.role === "super_admin";
}
_s2(useIsAdmin, "9ep4vdl3mBfipxjmc+tQCDhw6Ik=", false, function() {
    return [
        useAuth
    ];
});
function useIsSuperAdmin() {
    _s3();
    const { user } = useAuth();
    return user?.role === "super_admin";
}
_s3(useIsSuperAdmin, "9ep4vdl3mBfipxjmc+tQCDhw6Ik=", false, function() {
    return [
        useAuth
    ];
});
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_fe4460a8._.js.map