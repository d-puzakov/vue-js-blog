<template>
  <form>
    <input name="title" id="title" v-model.trim="post.title" />
    <input name="description" id="sedcription" v-model.trim="post.description" />
    <button type="button" v-on:click="addPost()">add</button>
    <button type="button" v-on:click="goBack()">back</button>
  </form>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPostPage',
  data () {
    return {
      post: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    async addPost () {
      console.log(this.post.title)
      if (this.post.title !== '' && this.post.description !== '') {
        await PostsService.addNewPost({
          title: this.post.title,
          description: this.post.description
        })
        this.$router.push({ name: 'Posts' })
      } else {
        alert('Empty fields!')
      }
    },
    goBack () {
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
