module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/context/shop-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShopProvider",
    ()=>ShopProvider,
    "useShop",
    ()=>useShop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ShopContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function ShopProvider({ children }) {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const cartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.values(cart).reduce((s, q)=>s + q, 0), [
        cart
    ]);
    const wishlistCount = wishlist.size;
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((productId, quantity = 1)=>{
        setCart((prev)=>({
                ...prev,
                [productId]: (prev[productId] ?? 0) + quantity
            }));
    }, []);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((productId)=>{
        setCart((prev)=>{
            const next = {
                ...prev
            };
            delete next[productId];
            return next;
        });
    }, []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((productId, quantity)=>{
        if (quantity < 1) {
            setCart((prev)=>{
                const next = {
                    ...prev
                };
                delete next[productId];
                return next;
            });
            return;
        }
        setCart((prev)=>({
                ...prev,
                [productId]: quantity
            }));
    }, []);
    const toggleWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((productId)=>{
        setWishlist((prev)=>{
            const next = new Set(prev);
            if (next.has(productId)) next.delete(productId);
            else next.add(productId);
            return next;
        });
    }, []);
    const isInWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((productId)=>wishlist.has(productId), [
        wishlist
    ]);
    const moveToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((productId)=>{
        addToCart(productId, 1);
        setWishlist((prev)=>{
            const next = new Set(prev);
            next.delete(productId);
            return next;
        });
    }, [
        addToCart
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
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
        }), [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/shop-context.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
function useShop() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ShopContext);
    if (!ctx) throw new Error("useShop must be used within ShopProvider");
    return ctx;
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/auth-token.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/api/axios.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient,
    "toApiError",
    ()=>toApiError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-token.ts [app-ssr] (ecmascript)");
"use client";
;
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:4000") ?? "http://localhost:4000";
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
            return data.accessToken;
        }
        return null;
    }).catch(()=>null).finally(()=>{
        refreshPromise = null;
    });
    return refreshPromise;
}
apiClient.interceptors.request.use((config)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccessToken"])();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});
apiClient.interceptors.response.use((res)=>res, async (err)=>{
    const original = err.config;
    if (err.response?.status !== 401 || original._retry) {
        if (err.response?.status === 401) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["triggerUnauthorized"])();
        return Promise.reject(err);
    }
    original._retry = true;
    const newToken = await refreshAccessToken();
    if (newToken) {
        original.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(original);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["triggerUnauthorized"])();
    return Promise.reject(err);
});
function toApiError(err) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAxiosError(err)) {
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
}),
"[project]/api/auth.api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/axios.ts [app-ssr] (ecmascript)");
"use client";
;
const authApi = {
    login: (email, password)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/login", {
            email,
            password
        }).then((r)=>r.data),
    register: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/register", data).then((r)=>r.data),
    logout: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/logout", {}).then((r)=>r.data),
    refresh: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/refresh", {}, {
            withCredentials: true
        }).then((r)=>r.data),
    me: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get("/api/auth/me").then((r)=>r.data),
    forgotPassword: (email)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/forgot-password", {
            email
        }).then((r)=>r.data),
    resetPassword: (token, newPassword)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/reset-password", {
            token,
            newPassword
        }).then((r)=>r.data),
    verifyEmail: (token)=>__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post("/api/auth/verify-email", {
            token
        }).then((r)=>r.data)
};
}),
"[project]/context/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-token.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/auth.api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/axios.ts [app-ssr] (ecmascript)");
"use client";
;
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
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function AuthProvider({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((u)=>{
        setUserState(u);
    }, []);
    const refreshUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].refresh();
            if (data.success && data.accessToken && data.user) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                setUserState(toUser(data.user));
            }
        } catch  {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
            setUserState(null);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setOnUnauthorized"])(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
            setUserState(null);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        });
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setOnUnauthorized"])(null);
    }, [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].refresh().then((data)=>{
            if (data.success && data.accessToken && data.user) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                setUserState(toUser(data.user));
            }
        }).catch(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
            setUserState(null);
        }).finally(()=>setIsInitialized(true));
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password, _remember)=>{
        setError(null);
        setIsLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].login(email, password);
            if (data.success && data.accessToken && data.user) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                setUserState(toUser(data.user));
            }
        } catch (e) {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toApiError"])(e);
            setError(err.message ?? "Login failed");
            throw e;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (fullName, email, password, role)=>{
        setError(null);
        setIsLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].register({
                fullName,
                email,
                password,
                roleRequest: role === "admin_request" ? "admin" : undefined
            });
            if (data.success && data.accessToken && data.user) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccessToken"])(data.accessToken, data.expiresIn);
                setUserState(toUser(data.user));
            }
        } catch (e) {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toApiError"])(e);
            setError(err.message ?? "Registration failed");
            throw e;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].logout();
        } catch  {
        // ignore
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$token$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAccessToken"])();
            setUserState(null);
        }
    }, []);
    const forgotPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email)=>{
        setError(null);
        setIsLoading(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].forgotPassword(email);
        } catch (e) {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toApiError"])(e);
            setError(err.message ?? "Request failed");
            throw e;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (token, newPassword)=>{
        setError(null);
        setIsLoading(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].resetPassword(token, newPassword);
        } catch (e) {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toApiError"])(e);
            setError(err.message ?? "Reset failed");
            throw e;
        } finally{
            setIsLoading(false);
        }
    }, []);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setError(null), []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
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
        }), [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/auth-context.tsx",
        lineNumber: 234,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
function useIsAdmin() {
    const { user } = useAuth();
    return user?.role === "admin" || user?.role === "super_admin";
}
function useIsSuperAdmin() {
    const { user } = useAuth();
    return user?.role === "super_admin";
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5ff2d8c7._.js.map