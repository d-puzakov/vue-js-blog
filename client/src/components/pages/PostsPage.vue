<template>
  <div class="container">
    <button type="button" @click="add()">Add</button>
    <div v-if="posts.length">
      <ul>
        <li v-bind:key="index" v-for="(post, index) in posts">{{ post.title }}</li>
      </ul>
    </div>
    <div v-else>
      <p>
        <b>No posts found</b>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'PostsPage',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    add () {
      this.$router.push({ path: 'Posts/new' })
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>
