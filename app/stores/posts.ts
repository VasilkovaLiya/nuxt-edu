import { defineStore } from 'pinia'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[]
  }),

  actions: {
    setPosts(posts: Post[]) {
      this.posts = posts
    },

    async fetchPosts() {
      const { data } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')
      if (data.value) {
        this.setPosts(data.value)
      }
    }
  }
})

