// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import { useAuthStore } from '@/stores/auth' // Import Pinia store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Jika user buka halaman utama, arahkan ke login
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true } // Tandai bahwa halaman ini butuh login
    }
  ]
})

// Ini adalah "Navigation Guard"
// Fungsi ini akan berjalan SETIAP KALI user pindah halaman
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Cek apakah halaman yang dituju (to) butuh login (meta.requiresAuth)
  if (to.meta.requiresAuth && !authStore.user) {
    // Jika user BELUM LOGIN (authStore.user masih null)
    // dan mencoba akses halaman /home,
    // kita "tendang" dia kembali ke halaman /login.
    next('/login')
  } else {
    // Jika tidak (misal: user sudah login ATAU dia mau ke /login),
    // biarkan dia melanjutkan.
    next()
  }
})

export default router