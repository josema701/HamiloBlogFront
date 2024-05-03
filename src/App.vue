<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Informacion from './components/Informacion.vue'
</script>

<template>
  <div class="wrapper">
    <!-- <HelloWorld msg="You did it!" /> -->
    <Informacion nombre="JOSE MAMANI" />

    <div class="content">
      <!-- Navbar Start -->
      <div class="container p-0">
        <nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
            <a href="#" class="navbar-brand d-block d-lg-none">Navigation</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav m-auto">

                  <RouterLink to="/" class="nav-item nav-link">Inicio</RouterLink>
                  <RouterLink to="/blog" class="nav-item nav-link">Blog</RouterLink>
                  <RouterLink to="/categorias" class="nav-item nav-link">Categorías</RouterLink>
                  <RouterLink to="/about" class="nav-item nav-link">Sobre mí</RouterLink>
                  <RouterLink to="/about" class="nav-item nav-link">Contacto</RouterLink>

                </div>
            </div>
        </nav>
      </div>
      <!-- Navbar End -->



      <RouterView />
    </div>

  </div>

  
</template>

<style scoped>

</style>
