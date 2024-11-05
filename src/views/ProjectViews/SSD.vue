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
              title: "Solid State Drive: Highway To Shell",
              subtitle: "Unity 2D and 3D Group Project",
              mainImage: {name: "ssd1.png", index: 0},
              images: [[
                    {name: "ssd2.png", index: 1},
              ],[
                    {name: "ssd3.png", index: 3},
              ]],
              descriptionComponent: "SSDDescript"
          }
      }
  }
}
</script>
