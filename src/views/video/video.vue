<template>
  <div class="app-container">
    <img src="http://127.0.0.1:5000/video_feed" >
<!--    <el-button size="small" type="success" @click="onClick">按钮</el-button>-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Video',
  data() {
    return {
      picurl: ''
    }
  },
  methods: {
    onClick() {
      axios.post(
        'http://127.0.0.1:5000/video_feed'
      ).then(response => {
        console.log(this.picurl)
        this.picurl = response.data
        console.log(this.picurl)
      })
    }
  }
}
</script>

<style scoped>

</style>
