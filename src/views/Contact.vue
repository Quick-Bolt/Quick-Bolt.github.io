<template>
    <div>
        <section class="contact" id="contact">
            <div class="container">
                <div class="section-heading">
                    <h1>Contact</h1>
                    <h6>I'm constantly seeking opportunities to refine and elevate my skills.</h6>
                    <h6>You can reach me by mail:</h6>
                </div>
                <div class="contact-icons">
                    <a href="mailto:alexandre.vieiramonteiro1@gmail.com" class="mail-icon">
                        <i class="fa fa-envelope"></i>
                    </a>
                </div>
                <br>
                <!--p id="contact-p-number">0736236760</p-->
            </div>
            <br><br>
            <div class="contact-img">
                <img src="../resources/contact-image.png">
            </div>
        </section>
        <Footer :showArrow="false"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
