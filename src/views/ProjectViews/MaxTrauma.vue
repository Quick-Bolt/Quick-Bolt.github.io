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
              title: "Max Trauma",
              subtitle: "Unity 3D Group Game for a Game Jam",
              mainImage: {name: "maxtrauma3.png", index: 0},
              images: [[
                    {name: "maxtrauma1.png", index: 1},
                    {name: "maxtrauma2.png", index: 2},
              ],
              [
                    {name: "maxtrauma4.png", index: 3},
              ]
              ],
              descriptionComponent: "MaxTraumaDescript"
          }
      }
  }
}
</script>
