<template>
  <div>
    <button
      @click="navigateTo('/posts')"
      class="mb-4 text-blue-600 hover:text-blue-800 underline"
    >
      ← Back to Posts
    </button>

    <div v-if="pending" class="text-gray-600">
      Loading post...
    </div>

    <div v-else-if="error" class="text-red-600">
      Error loading post: {{ error }}
    </div>

    <article v-else-if="post" class="max-w-3xl">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ post.body }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const route = useRoute()
const id = route.params.id as string

const { data: post, pending, error } = await useFetch<Post>(
  `https://jsonplaceholder.typicode.com/posts/${id}`
)
</script>

