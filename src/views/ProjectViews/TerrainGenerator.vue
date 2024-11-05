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
              title: "Terrain Generator",
              subtitle: "Computer Graphics application to simulate terrain",
              mainImage: {name: "terrain1.png", index: 0},
              images: [[
                    {name: "terrain2.png", index: 1},
              ],[
                    {name: "terrain3.png", index: 2},
              ]],
              descriptionComponent: "TerrainGeneratorDescript"
          }
      }
  }
}
</script>