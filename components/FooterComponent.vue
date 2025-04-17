<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <!-- Company Description -->
        <div class="col-md-4">
          <div class="footer-logo">
            <img src="assets/images/sarithalogo.webp" alt="Saritha Dental" />
          </div>
          <p class="para-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <!-- Pages Links -->
        <div class="col-md-2">
          <h5 class="footer-title">Pages</h5>
          <ul class="footer-links">
            <li><NuxtLink to="#">Homepage</NuxtLink></li>
            <li><NuxtLink to="#">About Us</NuxtLink></li>
            <li><NuxtLink to="#">Our Vehicle</NuxtLink></li>
            <li><NuxtLink to="#">Our Services</NuxtLink></li>
          </ul>
        </div>

        <!-- Information Links -->
        <div class="col-md-3">
          <h5 class="footer-title">Information</h5>
          <ul class="footer-links">
            <li><NuxtLink to="#">Term & Condition</NuxtLink></li>
            <li><NuxtLink to="#">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="#">Frequently Asked Questions</NuxtLink></li>
            <li><NuxtLink to="#">List #01</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-md-3">
          <h5 class="footer-title">Quick Contact</h5>
          <ul class="footer-contact">
            <li>
              <!-- <font-awesome-icon icon="phone" /> -->
               +91 9346852028</li>
            <li>
              <!-- <font-awesome-icon icon="map" /> -->
               Kompally, Hyderabad, Telangana
              500062
            </li>
            <li>
              <!-- <font-awesome-icon icon="envelope" /> -->

              <a href="mailto:saritha.clinic@gmail.com"
                >saritha.clinic@gmail.com</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border"></div>
    <!-- Copyright Section -->
    <div class="copyright">
      <p>
        © Copyright 2022 by Saritha Implants & Aesthetic Dentistry. All Rights
        Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import "@/assets/style.css";
</script>
