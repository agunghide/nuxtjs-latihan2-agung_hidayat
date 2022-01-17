<template>
  <div class="main-content">
    <h1 class="text-3xl font-bold text-green-500 text-center">
      Welcome Dashboard
    </h1>
    <div class="container mx-auto py-8 grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 md:px-0 lg:grid-cols-4 lg:gap-12 lg:px-0 transition-all duration-200 ease-linear">
      <Card v-for="(post, index) in posts" :key="`card-${index}`" :data="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const response = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    await store.dispatch('posts/setPosts', response)
    return { response }
  },
  computed:{
    posts(){
      return this.$store.state.posts.posts
    }
  }
}
</script>
