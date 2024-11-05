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
              title: "Elton John: FishCrust Crusaders",
              subtitle: "Unity 3D Group Project",
              mainImage: {name: "elton1.png", index: 0},
              images: [[
                    {name: "elton2.png", index: 1},
              ],
              [
                    {name: "fifthC.jpg", index: 2},
              ],
              [
                    {name: "elton3.png", index: 3},
              ], 
              [
                    {name: "sixthC.jpg", index: 3},
              ]],
              descriptionComponent: "EltonDescript"
          }
      }
  }
}
</script>
