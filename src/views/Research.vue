<template>
    <div>
        <section class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-heading">
                    <h1>Research Portfolio</h1>
                    <br><br>
                </div>
                <PortfolioResearch></PortfolioResearch>
            </div>
        </section>
        <Footer :showArrow="true"></Footer>
    </div>
    <!--<div>
        <section class="services" id="research">
            <div class="container">
                <div class="section-heading">
                    <h1>Research</h1>
                    <h6>Documents</h6>
                </div>
                <div class="my-skills">
                    <div class="skill"></div>
                    <div class="skill">
                        <h1>Research</h1>
                        <p class="global-link"><a href="https://gupea.ub.gu.se/handle/2077/67098" target="_blank"><i class="fas fa-link"/> The Evolution of Role Stereotypes and Related Design (Anti) Patterns</a></p>
                        <br>
                        <p class="global-link"><a href="./PlaytestStudyWarcryYCJY_Fabian_Froding.pdf" target="_blank"><i class="far fa-file-pdf"/> Games User Experience - An experimental playtest-study with two external studios.pdf</a></p>
                        <br>
                        <p class="global-link"><a href="./ImmersionInGamesAndMovies_Fabian_Froding.pdf" target="_blank"><i class="far fa-file-pdf"/> Measuring the Degree of Immersion in Video Games.pdf</a></p>
                        <br>
                        <p class="global-link"><a href="./ExploringTimeLoopSystems_Fabian_Froding.pdf" target="_blank"><i class="far fa-file-pdf"/> Exploring ways to evaluate the effect of time-loop systems on player experience in video games.pdf</a></p>
                    </div>
                    <div class="skill"></div>
                </div>
            </div>
            <br><br><br><br><br>
        </section>
        <Footer :showArrow="true"></Footer>
    </div>-->
</template>

<script>
import PortfolioResearch from '@/components/PortfolioResearch.vue';
import Footer from '@/components/Footer.vue'
export default {
  components: { PortfolioResearch, Footer }
}
</script>
