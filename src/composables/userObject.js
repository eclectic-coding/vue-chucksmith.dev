import { ref } from "vue";

export default function useUserObject() {
  let projects = ref([]);
  let education = ref([]);

  function fetchObjects() {
    fetch(`https://gitconnected.com/v1/portfolio/eclectic-coding`)
      .then((response) => response.json())
      .then((data) => {
        projects.value = data.projects;
        education.value = data.education;
      });
  }

  return { fetchObjects, projects, education };
}
