import { ref } from "vue";

export default function useProjects() {
  let projects = ref([]);

  function fetchProjects() {
    fetch(`https://gitconnected.com/v1/portfolio/eclectic-coding`)
      .then((response) => response.json())
      .then((data) => (projects.value = data.projects));
  }

  return { fetchProjects, projects };
}
