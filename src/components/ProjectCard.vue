<template>
  <article class="overflow-hidden rounded-lg shadow-lg">
    <img class="w-full" :src="img" alt="Project image" />

    <div class="font-bold text-xl pt-4">
      {{ title }}
    </div>

    <div class="px-6 pt-4 pb-2">
      <span v-if="github">
        <a :href="github">
          <i class="fab fa-github text-2xl px-3" aria-hidden="true"></i>
        </a>
      </span>

      <span v-if="website">
        <a :href="website">
          <i class="fa fa-rss text-2xl px-3" aria-hidden="true"></i>
        </a>
      </span>

<!--      <span v-if="video">-->
<!--        <a :href="video">-->
<!--          <i class="fas fa-video text-2xl px-3" aria-hidden="true"></i>-->
<!--        </a>-->
<!--      </span>-->
    </div>

    <p v-if="summary" class="text-gray-700 text-base mb-2 p-4">
      {{ summary }}
    </p>
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    img: String,
    title: String,
    summary: String,
    github: String,
    website: String,
  },
};
</script>

<style scoped></style>
