<template>
   <main>
<section class="about-main text-center text-lg-start">
    <div class="row align-items-center">
            <h1 class="main-text">Services</h1>
            <p class="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
</div>
</section>
<section class="service-sec">
    <div class="p-4">
        <h3 class="sec-text"> Our Services </h3>
        <h1 class="sec-heading"> A Perfect Smile Guaranteed </h1>
        <p class="para-text">Treatments at Saritha Dental Clinic have been carefully curated to address oral healthcare in its entirety. A broad spectrum of Treatments ensures that everything is conducted under one roof: from Diagnosis to Delivery. This streamlines the process, ensuring there are no gaps in communication. An In-House Dental Laboratory with state-of-the-art CAD-CAM assisted Digital Technology enables us to deliver Single Day Dentistry seamlessly.</p>
        <div class="pt-3">
            <a class="elementor-button" href="#">
        <i  class="fas fa-external-link-alt"></i>	
       <span class="elementor-button-text">Make Appointment</span>
            </a>
        </div>
    </div>
    <div class="about-card-container p-4">
        <div class="row">
          <div v-for="(service, index) in services" :key="index" class="col-md-4 pb-3">
            <div class="about-card-custom text-center">
              <div class="about-icon-box">
                <NuxtLink :to="service.link">
                    <img :src="service.image" :alt="service.title" />
                </NuxtLink>
              </div>
              <h5 class="fw-bold pt-3">{{ service.title }}</h5>
              <p class="text-muted">{{ service.description }}</p>
              <NuxtLink :to="service.link" class="fw-bold text-dark">Read More →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
<section class="form-sect text-lg-start sec-section">
    <div class="row">
        <!-- Left Side: Appointment Form -->
        <div class="col-md-6 order-2 order-lg-1">
            <div class="appointment-form">
                <input type="text" placeholder="Your Name">
                <input type="text" placeholder="Your Phone">
                <input type="email" placeholder="Your Mail">
                <select>
                    <option>Select Service</option>
                </select>
                <textarea placeholder="Your Message"></textarea>
                <button class="btn">Make Appointment</button>
            </div>
        </div>

        <!-- Right Side: Text + Contact Info -->
        <div class="col-md-6 order-1 order-lg-2">
            <h5 class="section-title">Book Now</h5>
            <h1 class="appointment-title">Make An Appointment</h1>
            <p class="para-text">
                Donec efficitur, enim bibendum volutpat dictum, tellus risus porttitor leo, eget ele ifend enim metus eu sem. Ut ipsum eros, bibendum et ligula vitae, sollicitudin.
            </p>
            <p class="para-text">
                Donec efficitur, enim bibendum volutpat dictum, tellus risus porttitor leo, eget ele ifend enim metus eu sem. Ut ipsum eros, bibendum et ligula vitae, sollicitudin.
            </p>

            <div class="row d-flex align-items-start">
                <!-- Left Side: Service Steps -->
                <div class="col-6">
                    <div class="service-steps">
                        <div class="service-item">
                            <div class="icon"><i class="fas fa-file-alt"></i></div>
                            <div class="text">
                                <h4>Make Appointment</h4>
                                <p>Donec efficitur, enim biben.</p>
                            </div>
                        </div>
                        <div class="service-item">
                            <div class="icon"><i class="fas fa-user-md"></i></div>
                            <div class="text">
                                <h4>Meet The Dentist</h4>
                                <p>Donec efficitur, enim biben.</p>
                            </div>
                        </div>
                        <div class="service-item">
                            <div class="icon"><i class="fas fa-tooth"></i></div>
                                <div class="text">
                                <h4>Dental Check Up</h4>
                                <p>Donec efficitur, enim biben.</p>
                            </div>
                        </div>
                        <div class="service-item">
                            <div class="icon"><i class="fas fa-money-check-alt"></i></div>
                            <div class="text">
                                <h4>Priscribe & Payment</h4>
                                <p>Donec efficitur, enim biben.</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <!-- Right Side: Contact Card -->
                <div class=" col-6">
                    <div class="contact-card">
                        <h3>Contact Information</h3>
                        <div class="contact-item">
                            <div class="contact-icon"><i class="fas fa-phone"></i></div>
                            <div class="contact-text">+919346852028</div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                            <div class="contact-text">saritha.clinic
                             @gmail.com</div>
                        </div><div class="contact-item">
                            <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="contact-text">Kompally, Hyderabad, 
                                Telangana 500062</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
<section >
    <div class="row align-items-center newsletter-section">
        <div class="col-lg-6 newsletter-container">
            <h2 class="newsletter-title">Subscribe Our Newsletter</h2>
            <p class="newsletter-text pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </div>
        <div class="col-lg-6">
            <div class="input-group">
                <input type="email" class="form-control" placeholder="Your Mail">
                <button class="subscribe-button">Subscribe Now</button>
            </div>
            <p class="newsletter-text mt-2">
                *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
            </p>
        </div>
</div>

</section>
</main> 
</template>
<script setup>
import { ref, onMounted } from "vue";
import "@/assets/style.css";
import { useScrollEffects } from "@/composables/useScrollEffects";

const services = ref([
  {
    title: "Teeth Whitening Solutions",
    description:
      "Your smile is one of your most important assets, conveying confidence, warmth, and a positive attitude.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/03/Untitled-600-%C3%97-450-px-1-600x348.jpg",
    link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Tranquil Dentistry: Conscious Sedation",
    description:
      "Conscious sedation is a technique used to induce a state of deep relaxation and calmness during dental treatments.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/03/4-600x348.jpg",
   link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Dental Veneers",
    description:
      "Dental veneers or porcelain laminates are shells of tooth coloured material that can be attached to the tooth.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/03/dental-veneers-and-dental-laminates-1-600x348.jpg",
     link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Oral Disinfection",
    description:
      "Popularly called oral prophylaxis in dental jargon, oral disinfection involves procedures like scaling and root planning.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/03/Oral-Disinfection-600x348.jpeg",
    link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Dental Implants",
    description:
      "The Implant: The Implant is essentially a screw which serve as the root for your teeth. This is the part that forms the attachment.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/03/Dental-Implants-600x348.jpg",
    link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Smile Design",
    description:
      "A smile makeover is the process of correcting one’s smile and enhancing its appearance through a series of cosmetic dental procedures.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/03/Smile-Designing-600x348.jpg",
 link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Wisdom Tooth Removal",
    description:
      "Wisdom teeth, or the third molars, are the backmost teeth in your mouth, which typically erupt between the ages of 17 to 21 years.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/02/Wisdom-Tooth-Removal-600x348.jpg",
  link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Root Canal",
    description:
      "In the recent past, Root Canal Treatments have given us the valuable option of saving a tooth.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/02/Root-Canal-Treatment-600x348.jpg",
  link: "/service/teeth-whitening-solutions"
    },
  {
    title: "Crowns and Bridges",
    description:
      "Crowns are tooth shaped caps which are placed over a tooth to restore its form, function, and aesthetics.",
    image:
      "https://kukatpally.sarithadental.com/wp-content/uploads/2020/02/Crowns-and-Bridges-600x348.jpg",
  link: "/service/teeth-whitening-solutions"
    },
]);

// Activate the scroll effects
useScrollEffects();

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.about-card-custom').forEach(el => observer.observe(el));
});

</script>