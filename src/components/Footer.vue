<template>
    <footer class="copyright">
      <div v-if="showArrow" @click="scrollToTop" class="up" id="up">
          <i class="fas fa-chevron-up"></i>
      </div>
      <a href="https://www.linkedin.com/in/alexandre-monteiro-game-dev/" target="_blank" class="project-link">
          <i class="fab fa-linkedin footer-icon"></i>
      </a>
      <a href="https://github.com/Quick-Bolt" target="_blank" class="project-link">
          <i class="fab fa-github footer-icon"></i>
      </a>
      <a href="https://quickbolt.itch.io/" target="_blank" class="project-link">
          <i class="fab fa-itch-io"></i>
      </a>
      <a href="mailto:alexandre.vieiramonteiro1@gmail.com" target="_blank" class="project-link">
          <i class="fa fa-envelope footer-icon"></i>
      </a>
      <p>&copy; 2019 - {{ new Date().getFullYear() }} Alexandre M.</p>
      <br>
      <div style="color: #2235aa; opacity: 0.67; font-weight: bold;">Made with Vue and Github Pages</div>
    </footer>
</template>

<script>
export default {
    props: ['showArrow'],
    methods: {
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  }
}
</script>
