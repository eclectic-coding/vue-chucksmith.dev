<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap mt-2 mx-auto">
      <div
        v-for="project in projects"
        :key="project.id"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <ProjectCard
          :img="project.images[0].resolutions.desktop.url"
          :title="project.displayName"
          :summary="project.summary"
          :github="project.githubUrl"
          :website="project.website"
        />
      </div>
    </div>
  </div>
</template>

<script>
import useProjects from "@/composables/projects";
import { onMounted } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  setup() {
    const { projects, fetchProjects } = useProjects();
    onMounted(() => fetchProjects());
    return { projects };
  },
  components: {
    ProjectCard,
  },
};
</script>
