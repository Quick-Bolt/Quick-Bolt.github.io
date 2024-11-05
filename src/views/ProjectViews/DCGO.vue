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
              title: "DCGO",
              subtitle: "Unity TCG Game",
              mainImage: {name: "dcgoplay.gif", index: 0},
              images: [[
                    {name: "dcgo1.png", index: 1},
                    {name: "dcgo2.png", index: 2},
              ],[
                    {name: "dcgo3.png", index: 3},
                    {name: "dcgo5.png", index: 4},
              ]],
              descriptionComponent: "DCGODescript"
          }
      }
  }
}
</script>
