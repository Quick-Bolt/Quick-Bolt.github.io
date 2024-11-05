<template>
    <div>
        <ProjectDetails :projectDetails="projectDetails"></ProjectDetails>
    </div>
</template>

<script>
import ProjectDetails from '@/components/ProjectDetails.vue';

export default {
  components: { ProjectDetails },
  data: () => {
      return {
          projectDetails: {
              title: "Web Scraper",
              subtitle: "Application to web scrape and interact with SQL and Excel",
              mainImage: {name: "scraperLogo.png", index: 0},
              images: [[
                    
              ]],
              descriptionComponent: "WebScrapperDescript"
          }
      }
  }
}
</script>