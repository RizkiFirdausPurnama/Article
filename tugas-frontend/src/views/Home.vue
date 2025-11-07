<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom mb-4">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">THE NEWS*</a>
        
        <div class="d-flex align-items-center">
          <span v-if="authStore.user" class="navbar-text me-3">
            Halo, {{ authStore.user.name }}
          </span>
          <button @click="handleLogout" class="btn btn-danger btn-sm" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-else>Logout</span>
          </button>
        </div>
      </div>
    </nav>

    <div class="container">

      <div class="row mb-4">
        <div class="col-12">
          <div class="card text-bg-dark border-0">
            <img src="https://images.unsplash.com/photo-1519010470956-6d877008eaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDE4fHx2YXRpY2FufGVufDB8fHx8MTYzNzIyNjU5M3ww&ixlib=rb-4.0.3&q=80&w=1200" class="card-img" alt="Hero Image" style="opacity: 0.5; max-height: 500px; object-fit: cover;">
            <div class="card-img-overlay d-flex flex-column justify-content-end p-4">
              <h2 class="card-title fw-bold">A deep dive into the influence of cultural movements on contemporary society</h2>
            </div>
          </div>
        </div>
      </div>

      <h3 class="border-bottom pb-2 mb-3">LATEST NEWS</h3>
      <div class="row g-4 mb-4">
        
        <div class="col-md-7">
          <div class="card text-bg-dark border-0">
            <img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDR8fGNhcGl0b2wlMjBoaWxsfGVufDB8fHx8MTYzNzIyNjY3NHww&ixlib=rb-4.0.3&q=80&w=800" class="card-img" alt="Latest News" style="opacity: 0.6; object-fit: cover; max-height: 380px;">
            <div class="card-img-overlay d-flex flex-column justify-content-end p-3">
              <h4 class="card-title fw-bold">Rethinking the fate of journalism and YEAR AHEAD</h4>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action bg-transparent border-0 border-bottom p-3">
              <div class="row g-3">
                <div class="col-8">
                  <h6 class="fw-bold mb-1">How globalism will transform the boundaries of office life</h6>
                  <small class="text-muted">3 jam lalu</small>
                </div>
                <div class="col-4">
                  <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDl8fG9mZmljZSUyMGJ1c2luZXNzfGVufDB8fHx8MTYzNzIyNjc4MHww&ixlib=rb-4.0.3&q=80&w=150" class="img-fluid rounded" alt="News 1">
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent border-0 border-bottom p-3">
              <div class="row g-3">
                <div class="col-8">
                  <h6 class="fw-bold mb-1">Affront the integrity of ethical conduct and professionalism</h6>
                  <small class="text-muted">5 jam lalu</small>
                </div>
                <div class="col-4">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDd8fHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MHx8fHwxNjM3MjI2ODE4fDA&ixlib=rb-4.0.3&q=80&w=150" class="img-fluid rounded" alt="News 2">
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent border-0 border-bottom p-3">
              <div class="row g-3">
                <div class="col-8">
                  <h6 class="fw-bold mb-1">Principles or Karate is a defense resources</h6>
                  <small class="text-muted">7 jam lalu</small>
                </div>
                <div class="col-4">
                  <img src="https://images.unsplash.com/photo-1608754483863-06d168171e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDJ8fGthcmF0ZXxlbnwwfHx8fDE2MzcyMjY4NDJ8MA&ixlib=rb-4.0.3&q=80&w=150" class="img-fluid rounded" alt="News 3">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <h3 class="border-bottom pb-2 mb-3">WORLD NEWS</h3>
      <div class="row g-4 mb-4 align-items-center">
        <div class="col-md-4">
          <h4 class="fw-bold">Understanding the social constructs reshaping our world today</h4>
          <p class="text-muted">By Techsonia Lee - Leadership</p>
        </div>
        <div class="col-md-5">
          <img src="https://images.unsplash.com/photo-1534294038827-48d6f5d38e07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEwfHxzb2xkaWVyc3xlbnwwfHx8fDE2MzcyMjY4NzN8MA&ixlib=rb-4.0.3&q=80&w=500" class="img-fluid rounded" alt="World News">
        </div>
        <div class="col-md-3">
          <ul class="list-unstyled">
            <li class="border-bottom pb-2 mb-2">
              <h6 class="fw-bold">The global financial landscape and its impact on the new era</h6>
            </li>
            <li class="border-bottom pb-2 mb-2">
              <h6 class="fw-bold">Geopolitical paradigms and mitigating the risk of global affairs</h6>
            </li>
          </ul>
        </div>
      </div>

      <h3 class="border-bottom pb-2 mb-3">TECHNOLOGY NEWS</h3>
      <div class="row g-4 mb-4">
        <div class="col-md-3">
          <div class="card h-100 text-white" style="background-color: #212529;">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDV8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjM3MjI3MDM4fDA&ixlib=rb-4.0.3&q=80&w=300" class="card-img-top" alt="Tech News 1" style="height: 150px; object-fit: cover;">
            <div class="card-body">
              <h6 class="card-title fw-bold">Shifting the web to a human-centric nature</h6>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card h-100 text-white" style="background-color: #212529;">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDExfHx0ZWNobm9sb2d5fGVufDB8fHx8MTYzNzIyNzEzN3ww&ixlib=rb-4.0.3&q=80&w=300" class="card-img-top" alt="Tech News 2" style="height: 150px; object-fit: cover;">
            <div class="card-body">
              <h6 class="card-title fw-bold">AI's role in driving technological transformation</h6>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card h-100 text-white" style="background-color: #212529;">
            <img src="https://images.unsplash.com/photo-1550751827-4133d4212544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDI3fHxBSXxlbnwwfHx8fDE2MzcyMjcxNjB8MA&ixlib=rb-4.0.3&q=80&w=300" class="card-img-top" alt="Tech News 3" style="height: 150px; object-fit: cover;">
            <div class="card-body">
              <h6 class="card-title fw-bold">Embracing the AI revolution in XXI century</h6>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card h-100 text-white" style="background-color: #212529;">
            <img src="https://images.unsplash.com/photo-1532622785990-d2c6411633b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDI0fHxzb2NpZXR5fGVufDB8fHx8MTYzNzIyNzIwNnww&ixlib=rb-4.0.3&q=80&w=300" class="card-img-top" alt="Tech News 4" style="height: 150px; object-fit: cover;">
            <div class="card-body">
              <h6 class="card-title fw-bold">Finding what's next: a search for society</h6>
            </div>
          </div>
        </div>
      </div>

      <h3 class="border-bottom pb-2 mb-3">PODCASTS</h3>
      <div class="row g-4 mb-5">
        <div class="col-md-6">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action bg-transparent border-0 border-bottom p-3">
              <div class="row g-3 align-items-center">
                <div class="col-3 col-xl-2">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDF8fGhlYWRwaG9uZXN8ZW58MHx8fHwxNjM3MjI3MjQ0fDA&ixlib=rb-4.0.3&q=80&w=100" class="img-fluid rounded" alt="Pod 1">
                </div>
                <div class="col-9 col-xl-10">
                  <h6 class="fw-bold mb-1">Shifting the role of transition in a creative way</h6>
                  <small class="text-muted">The creative minds...</small>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent border-0 border-bottom p-3">
              <div class="row g-3 align-items-center">
                <div class="col-3 col-xl-2">
                  <img src="https://images.unsplash.com/photo-1587799216149-dceac03b5f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDI1fHxtaWNyb3Bob25lfGVufDB8fHx8MTYzNzIyNzMwNnww&ixlib=rb-4.0.3&q=80&w=100" class="img-fluid rounded" alt="Pod 2">
                </div>
                <div class="col-9 col-xl-10">
                  <h6 class="fw-bold mb-1">On the air: capturing the moment of truth</h6>
                  <small class="text-muted">Join us for a conversation...</small>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action bg-transparent border-0 border-bottom p-3">
              <div class="row g-3 align-items-center">
                <div class="col-3 col-xl-2">
                  <img src="https://images.unsplash.com/photo-1590602843685-391f6060f150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDE3fHxtaWNyb3Bob25lfGVufDB8fHx8MTYzNzIyNzMwNnww&ixlib=rb-4.0.3&q=80&w=100" class="img-fluid rounded" alt="Pod 3">
                </div>
                <div class="col-9 col-xl-10">
                  <h6 class="fw-bold mb-1">Connecting trends, primarily through audio</h6>
                  <small class="text-muted">The creative minds...</small>
                </div>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent border-0 border-bottom p-3">
              <div class="row g-3 align-items-center">
                <div class="col-3 col-xl-2">
                  <img src="https://images.unsplash.com/photo-1593005510323-3ab66b6c2c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDQ0fHxtaWNyb3Bob25lfGVufDB8fHx8MTYzNzIyNzM4MHww&ixlib=rb-4.0.3&q=80&w=100" class="img-fluid rounded" alt="Pod 4">
                </div>
                <div class="col-9 col-xl-10">
                  <h6 class="fw-bold mb-1">Exploring thoughtful considerations in tech</h6>
                  <small class="text-muted">Join us for a conversation...</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
    </div>

    <footer class="container text-center text-muted border-top mt-5 py-4">
      <p>&copy; 2025 THE NEWS* - Dibuat untuk Tugas GLSC</p>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth' // Panggil state management
import axios from 'axios'

const authStore = useAuthStore()
const router = useRouter()
const loading = ref(false)
const API_URL = 'http://localhost:8000/api' // Alamat dengan /api

// FUNGSI UNTUK MEMBACA COOKIE SECARA MANUAL
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift().replace('%3D', '='); // Menangani encoding
  }
}

const handleLogout = async () => {
  loading.value = true
  try {
    // 1. BACA COOKIE SECARA MANUAL
    const csrfToken = getCookie('XSRF-TOKEN')

    // 2. Panggil API logout Laravel DENGAN HEADER "PAKSA"
    await axios.post(`${API_URL}/logout`, {}, {
      headers: {
        'X-XSRF-TOKEN': csrfToken // <-- KITA PAKSA KIRIM HEADER-NYA
      }
    })
    
    // 3. Hapus data user dari Pinia
    authStore.clearUser()
    
    // 4. Alihkan ke halaman login
    router.push('/login')
  } catch (error) {
    console.error('Error logout:', error)
    // Jika logout gagal karena token, paksa hapus data user
    authStore.clearUser()
    router.push('/login')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Menambahkan efek overlay gelap pada card-img */
.card-img-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));
}

/* Memastikan gambar di list artikel kecil pas */
.list-group-item .img-fluid {
  width: 100%;
  height: 80px;
  object-fit: cover;
}

/* Memastikan gambar di list podcast pas */
.list-group-item .img-fluid.rounded {
  width: 80px; /* Lebar tetap */
  height: 80px; /* Tinggi tetap */
  object-fit: cover;
}
</style>