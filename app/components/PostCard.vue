<template>
  <div
    class="p-4 border rounded mb-4 cursor-pointer hover:bg-gray-50 transition-colors"
    @click="navigateToPost"
  >
    <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
    <p class="text-gray-700 line-clamp-3">{{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type Props = {
  post: Post
}

const props = defineProps<Props>()

const navigateToPost = () => {
  navigateTo(`/posts/${props.post.id}`)
}
</script>

