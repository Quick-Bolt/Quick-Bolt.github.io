<template>
    <div>
        <div id="portfolio-se">
                <div class="portfolio-item">
                    <div class="portfolio-img has-margin-right">
                        <router-link to="/terrain"><img src="../resources/project-images/terrainLogo.png" alt=""></router-link>
                    </div>
                    <div class="portfolio-description">
                        <h6>Software Development</h6>
                        <h1>Terrain Generator</h1>
                        <p>
                            This project generates a terrain based on a custom perlin noise function. It was made entirely using C++.<br>  
                            My task was programmer.
                        </p>
                        <p class="cta">Highlights: <strong>C++</strong>, <strong>Perlin Noise</strong>, <strong>Shaders</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/terrain"><strong>View Details</strong></router-link></p>
                        <br><br>
                        <a href="" target="_blank" class="project-link">
                            <i class=""></i>
                        </a>
                    </div>
                </div>

                <div class="separator-line"></div>
    
                <div class="portfolio-item">
                    <div class="portfolio-description has-margin-right">
                        <h6>Cyber-Physical Systems Development (Group Project)</h6>
                        <h1>Web Scraper</h1>
                        <p>
                            A project created to scrap information from a website and utilize it both in an SQL database and with Excel sheets.<br>
                            My task was programmer.
                        </p>
                        <p class="cta">Highlights: <strong>C#</strong>, <strong>SQL</strong>, <strong>Excel</strong>.</p>
                        <br><br>
                        <p class="cta"><router-link to="/webscrapper"><strong>View Details</strong></router-link></p>
                        <br><br>
                        <a href="" target="_blank" class="project-link">
                           
                        </a>
                    </div>
                    <div class="portfolio-img">
                        <router-link to="/webscrapper"><img src="../resources/project-images/scraperLogo.png" alt=""></router-link>
                    </div>
                </div>

                <div class="separator-line"></div>

            </div>
    </div>
</template>