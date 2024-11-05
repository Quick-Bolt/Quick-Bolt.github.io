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
              title: "Fire Escape",
              subtitle: "Unity 3D Simulation",
              mainImage: {name: "fireescapeplay.gif", index: 0},
              images: [[
                    {name: "fireescape1.jpg", index: 1},
                    {name: "fireescape2.jpg", index: 2},
              ],[
                    {name: "fireescape4.jpg", index: 3},
                    {name: "fireescape5.jpg", index: 4},
              ]],
              descriptionComponent: "FireEscapeDescript"
          }
      }
  }
}
</script>