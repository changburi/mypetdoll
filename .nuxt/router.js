import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _f55039e8 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5608b896 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _0b61b2b1 = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _763f9b0f = () => interopDefault(import('../pages/reload.vue' /* webpackChunkName: "pages/reload" */))
const _e4fb46d0 = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _bbce99e4 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _5e4269cc = () => interopDefault(import('../pages/unregistry.vue' /* webpackChunkName: "pages/unregistry" */))
const _a56989fc = () => interopDefault(import('../pages/admin/clothes.vue' /* webpackChunkName: "pages/admin/clothes" */))
const _606b9992 = () => interopDefault(import('../pages/admin/purchase.vue' /* webpackChunkName: "pages/admin/purchase" */))
const _23053f1a = () => interopDefault(import('../pages/admin/registry.vue' /* webpackChunkName: "pages/admin/registry" */))
const _6a7c857c = () => interopDefault(import('../pages/admin/users.vue' /* webpackChunkName: "pages/admin/users" */))
const _0945183f = () => interopDefault(import('../pages/cloth/_id.vue' /* webpackChunkName: "pages/cloth/_id" */))
const _30da634c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _f55039e8,
      name: "admin"
    }, {
      path: "/cart",
      component: _5608b896,
      name: "cart"
    }, {
      path: "/mypage",
      component: _0b61b2b1,
      name: "mypage"
    }, {
      path: "/reload",
      component: _763f9b0f,
      name: "reload"
    }, {
      path: "/signin",
      component: _e4fb46d0,
      name: "signin"
    }, {
      path: "/signup",
      component: _bbce99e4,
      name: "signup"
    }, {
      path: "/unregistry",
      component: _5e4269cc,
      name: "unregistry"
    }, {
      path: "/admin/clothes",
      component: _a56989fc,
      name: "admin-clothes"
    }, {
      path: "/admin/purchase",
      component: _606b9992,
      name: "admin-purchase"
    }, {
      path: "/admin/registry",
      component: _23053f1a,
      name: "admin-registry"
    }, {
      path: "/admin/users",
      component: _6a7c857c,
      name: "admin-users"
    }, {
      path: "/cloth/:id?",
      component: _0945183f,
      name: "cloth-id"
    }, {
      path: "/",
      component: _30da634c,
      name: "index"
    }],

    fallback: false
  })
}
