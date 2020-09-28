<template>
  <div class="mx-4 rounded bg-gray-400 shadow">
    <div class="p-2">
      <div class="font-bold">Recent Projects</div>
    </div>
    <div class="bg-white p-2 border-2 border-gray-400">
      <div v-for="project in projects" :key="project.id">
        {{ project.displayName }}
        <div v-if="project.githubUrl">{{ project.githubUrl }}</div>
        <div v-if="project.summary">{{ project.summary }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    fetchPosts() {
      fetch("https://gitconnected.com/v1/portfolio/eclectic-coding")
        .then((response) => response.json())
        .then((data) => (this.projects = data.projects));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log(this.projects);
  },
};
</script>
