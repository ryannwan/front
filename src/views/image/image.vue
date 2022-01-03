<template>
  <div class="app-container">
    <div class="app-container">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :http-request="getFile"
      >
        <el-button size="small" type="primary">上传</el-button>
      </el-upload>
    </div>
    <div class="app-container">
      <el-button size="small" type="success" @click="upload">确认上传</el-button>
    </div>
<div>
  <img :src="picurl" alt="beachball" />
</div>
  </div>
</template>

<script>

import { uploadimage } from '@/api/images'
import axios from 'axios'
export default {

  data() {
    return {
      picurl: "",
      file: {},
      fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    getFile(item) {
      console.log(item.file)
      this.file = item.file
    },
    // ArrayBuffer转为base64字符串
    arrayBufferToBase64(buffer) {
      //第一步，将ArrayBuffer转为二进制字符串
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      //将二进制字符串转为base64字符串
      return window.btoa(binary);
    },
    upload() {
      const fd = new FormData()
      fd.append('file', this.file)
      axios.post(
        'http://127.0.0.1:5000/image', fd,
        { headers: { 'Content-Type': 'multipart/form-data' }},
      ).then(response => {
        this.picurl = 'data:image/jpeg;base64,' + this.arrayBufferToBase64(response.data)
      })
    }
  }
}

</script>

<style scoped>

</style>
