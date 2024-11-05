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
              title: "Race Maze",
              subtitle: "Unity 2D Game Group Project",
              mainImage: {name: "racemazeplay.gif", index: 0},
              images: [[
                    {name: "raceMaze1.png", index: 1},
                    {name: "racemaze2.png", index: 2},
              ],
              [
                    {name: "racemaze3.png", index: 3},
              ],
              [
                    {name: "racemaze4.png", index: 4},
              ]],
              descriptionComponent: "RaceMazeDescript"
          }
      }
  }
}
</script>