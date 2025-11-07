// src/stores/auth.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // Coba ambil data user dari localStorage saat pertama kali load
const user = ref(JSON.parse(localStorage.getItem('user')))

  // Fungsi untuk menyimpan data user ke state DAN localStorage
function setUser(userData) {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
}

  // Fungsi untuk menghapus data user
function clearUser() {
    user.value = null
    localStorage.removeItem('user')
}

  // Cek apakah user sudah login atau belum
const isLoggedIn = computed(() => !!user.value)

return { user, isLoggedIn, setUser, clearUser }
})