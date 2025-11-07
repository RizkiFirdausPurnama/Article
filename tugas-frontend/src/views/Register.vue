<template>
  <div class="container v-h-100">
    <div class="row justify-content-center align-items-center v-h-100">
      <div class="col-md-5">
        <div class="card shadow-lg">
          <div class="card-header text-center">
            <h3>Buat Akun Baru</h3>
          </div>
          <div class="card-body p-4">

            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="name" class="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="form.name"
                  required
                />
              </div>
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
              <div class="mb-3">
                <label for="password_confirmation" class="form-label">Konfirmasi Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password_confirmation"
                  v-model="form.password_confirmation"
                  required
                />
              </div>

              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span v-else>Register</span>
                </button>
              </div>
            </form>

          </div>
          <div class="card-footer text-center">
            <small>
              Sudah punya akun?
              <RouterLink to="/login">Login di sini</RouterLink>
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

const router = useRouter()
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
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

const handleRegister = async () => {
  loading.value = true
  errorMessage.value = null

  if (form.value.password !== form.value.password_confirmation) {
    errorMessage.value = 'Password dan Konfirmasi Password tidak cocok.'
    loading.value = false
    return
  }

  try {
    // 1. Ambil CSRF Cookie (Alamat tanpa /api)
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')

    // 2. BACA COOKIE SECARA MANUAL
    const csrfToken = getCookie('XSRF-TOKEN')

    // 3. Kirim data register DENGAN HEADER "PAKSA"
    await axios.post(`${API_URL}/register`, form.value, {
      headers: {
        'X-XSRF-TOKEN': csrfToken // <-- KITA PAKSA KIRIM HEADER-NYA
      }
    })

    // 4. Jika berhasil
    alert('Registrasi berhasil! Silakan login.')
    router.push('/login')

  } catch (error) {
    if (error.response && error.response.status === 422) {
      errorMessage.value = 'Data tidak valid. Pastikan password minimal 8 karakter.'
    } else {
      errorMessage.value = 'Registrasi gagal. Server mungkin error.'
    }
    console.error('Error register:', error)
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