<template>
    <div>
        <section class="services" id="resume">
            <div class="container">
                <div class="section-heading">
                    <h1>Resume</h1>
                    <!--h6>Documents</h6-->
                </div>
                <div class="my-skills">
                    <div class="skill">
                        <!--h1>Resume</h1-->
                        <p class="global-link resume-file"><a href="./BachelorsDegree.pdf" target="_blank"><i class="far fa-file-pdf"/> Bachelors Degree.pdf</a></p>
                    </div>
                    <div class="skill">
                        <!--h1>Resume</h1-->
                        <p class="global-link resume-file"><a href="./Alexandre_Monteiro_CV.pdf" target="_blank"><i class="far fa-file-pdf"/> Alexandre Monteiro CV.pdf</a></p>
                    </div>
                    <div class="skill">
                        <!--h1>Resume</h1-->
                        <p class="global-link resume-file"><a href="./CourseCetificates.pdf" target="_blank"><i class="far fa-file-pdf"/> Course Certificates.pdf</a></p>
                    </div>
                </div>
                <div class="separator-line"></div>
                <!--<div class="my-skills">
                    <div class="skill">
                        <h1>Recommendations</h1>
                    </div>
                </div>
                <div class="my-skills">
                    
                       
                    
                    
                </div>-->
            </div>
        </section>

        <Footer :showArrow="true"></Footer>
    </div>
</template>

<style scoped>
.resume-file a {
    font-size: 1.5rem;
}
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer }
}
</script>
