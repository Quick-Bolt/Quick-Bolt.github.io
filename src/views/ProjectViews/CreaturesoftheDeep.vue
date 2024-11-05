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
              title: "Creatures of the Deep",
              subtitle: "Unity 3D Group Project",
              mainImage: {name: "creaturesdeep1.png", index: 0},
              images: [[
                    {name: "creaturesdeep2.png", index: 1},
                    {name: "creaturesdeep3.png", index: 2},
              ],[
                    {name: "creaturesdeep4.png", index: 3},
                    {name: "creaturesdeep5.png", index: 4},
              ]],
              descriptionComponent: "CreaturesoftheDeepDescript"
          }
      }
  }
}
</script>