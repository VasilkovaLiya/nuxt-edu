<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Posts</h1>
    
    <div v-if="pending" class="text-gray-600">
      Loading posts...
    </div>
    
    <div v-else-if="error" class="text-red-600">
      Error loading posts: {{ error }}
    </div>
    
    <div v-else>
      <PostCard
        v-for="post in postsStore.posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const postsStore = usePostsStore()

const { pending, error } = await useAsyncData('posts', async () => {
  await postsStore.fetchPosts()
})
</script>

