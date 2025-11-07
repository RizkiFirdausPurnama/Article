<template>
  <div class="container v-h-100">
    <div class="row justify-content-center align-items-center v-h-100">
      <div class="col-md-5">
        <div class="card shadow-lg">
          <div class="card-header text-center">
            <h3>Login Akun</h3>
          </div>
          <div class="card-body p-4">
            
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Alamat Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="form.password"
                  required
                />
              </div>

              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span v-else>Login</span>
                </button>
              </div>
            </form>
            
          </div>
          <div class="card-footer text-center">
            <small>
              Belum punya akun?
              <RouterLink to="/register">Buat akun di sini</RouterLink>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const form = ref({
  email: '',
  password: ''
})
const loading = ref(false)
const errorMessage = ref(null)
const API_URL = 'http://localhost:8000/api' // Alamat dengan /api

// FUNGSI BARU UNTUK MEMBACA COOKIE SECARA MANUAL
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift().replace('%3D', '='); // Menangani encoding
  }
}

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = null

  try {
    // 1. Ambil CSRF Cookie (Alamat tanpa /api)
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')

    // 2. BACA COOKIE SECARA MANUAL
    const csrfToken = getCookie('XSRF-TOKEN')

    // 3. Kirim data login DENGAN HEADER "PAKSA"
    await axios.post(`${API_URL}/login`, form.value, {
      headers: {
        'X-XSRF-TOKEN': csrfToken // <-- KITA PAKSA KIRIM HEADER-NYA
      }
    })

    // 4. Jika berhasil, ambil data user (PERBAIKAN ADA DI SINI)
    //    Kita hapus /api tambahan dari panggilan ini
    const response = await axios.get(`${API_URL}/user`, { // <-- HANYA /user
      headers: {
        'X-XSRF-TOKEN': csrfToken // <-- KITA PAKSA KIRIM HEADER-NYA
      }
    })

    // 5. Simpan data user di Pinia (State Management)
    authStore.setUser(response.data)

    // 6. Alihkan (redirect) ke Halaman Home
    router.push('/home')
  } catch (error) {
    // Tangani error
    errorMessage.value = 'Email atau Password salah.'
    console.error('Error login:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.v-h-100 {
  height: 100vh;
}
</style>