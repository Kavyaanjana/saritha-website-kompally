<template>
  <header>
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container d-flex justify-content-between align-items-center">
        <p class="open-hours">WE ARE OPEN EVERY DAY 08:00 – 20:00</p>
        <div class="social-icons">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <!-- Desktop Navbar -->
    <nav
      class="navbar navbar-expand-lg bg-white shadow-sm"
      :class="{ 'sticky-header': isSticky, 'no-sticky': isMobileMenuOpen }"
    >
      <div class="container d-flex justify-content-between align-items-center">
        <NuxtLink class="navbar-brand" to="/">
          <img
            src="assets/images/sarithalogo.webp"
            alt="Saritha Dental"
          />
        </NuxtLink>
        <button class="navbar-toggler" type="button" @click="toggleMobileMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/treatments">Treatments</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">Contact Us</NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/appointment" class="appointment-btn">
            Make Appointment
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Mobile Sliding Menu -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-menu-header">
        <NuxtLink class="navbar-brand" to="/">
          <img
          src="assets/images/sarithalogo.webp"
          alt="Saritha Dental"
          />
        </NuxtLink>
        <button class="close-btn" @click="toggleMobileMenu">✖</button>
      </div>

      <!-- Scrollable Menu Items -->
      <div class="mobile-menu-content">
        <ul class="mobile-nav">
          <li>
            <NuxtLink to="/" @click="toggleMobileMenu">Home</NuxtLink>
            <hr />
          </li>
          <li>
            <NuxtLink to="/treatments" @click="toggleMobileMenu"
              >Treatments</NuxtLink
            >
            <hr />
          </li>
          <li>
            <NuxtLink to="/about" @click="toggleMobileMenu">About Us</NuxtLink>
            <hr />
          </li>
          <li>
            <NuxtLink to="/contact" @click="toggleMobileMenu"
              >Contact Us</NuxtLink
            >
            <hr />
          </li>
          <li>
            <NuxtLink
              to="/appointment"
              @click="toggleMobileMenu"
              class="appointment-btn"
            >
              Make Appointment
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Overlay -->
    <div
      class="overlay"
      v-if="isMobileMenuOpen"
      @click="toggleMobileMenu"
    ></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import "@/assets/style.css";

const isMobileMenuOpen = ref(false);
const isSticky = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Function to check scroll position and add sticky class
const handleScroll = () => {
  if (window.scrollY > 100) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

// Attach scroll event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Mobile menu styles */
.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 75%;
  max-width: 320px;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  flex-direction: column;
}

.mobile-menu.open {
  left: 0;
}

/* Header (Logo Centered, Close Button on Right) */
.mobile-menu-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 15px 0;
}

.mobile-menu-header img {
  max-width: 150px;
  display: block;
}

.close-btn {
  position: relative;
  margin-top: 10px;
  margin-left: auto;
  right: 15px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

/* Scrollable Menu */
.mobile-menu-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 20px;
}

/* Mobile Navigation */
.mobile-nav {
  list-style: none;
  padding: 0;
}

.mobile-nav li {
  text-align: left;
  padding: 10px 20px;
}

/* Mobile Navigation Links */
.mobile-nav a {
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;
  display: block;
  padding: 10px;
  transition: color 0.3s ease-in-out;
}

/* Hover effect */
.mobile-nav a:hover {
  color: #2ec4b6 !important;
}

/* Active link */
.mobile-nav a.router-link-exact-active {
  color: #2ec4b6 !important;
  font-weight: 600;
}
/* Separators */
hr {
  width: 100%;
  margin: 5px 0;
  border: 0;
  height: 1px;
  background: #696969;
}

/* Appointment Button */
.mobile-nav .appointment-btn {
  display: block;
  background: #2ec4b6;
  color: white;
  text-align: center;
  padding: 12px;
  border-radius: 5px;
  margin: 10px auto;
  width: 80%;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* Hide mobile menu on large screens */
@media (min-width: 991px) {
  .mobile-menu,
  .overlay {
    display: none;
  }
}
/* Sticky header styles */
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* High priority */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.3s ease-in-out;
}

/* Prevent overlap when mobile menu is open */
.no-sticky {
  position: relative !important;
  z-index: 1; /* Lower z-index when menu is open */
}

/* Ensure mobile menu is on top */
.mobile-menu.open {
  z-index: 1100; /* Higher than sticky-header */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
}
</style>
