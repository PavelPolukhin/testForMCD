<template>
  <div class="file" :style="indent">
    <div class="file-image" :title="file.type">
      <img :src="require(`../assets/images/fileTypeIcons/${fileImage(file.type)}.svg`)" alt=""></div>
    <div class="file-name" :title="file.name">{{ file.name }}</div>
    <div class="file-size" :title="file.length + '.kb'">{{fileSize(file.length)}}</div>
  </div>
</template>

<script>
export default {
  name: 'FileView',
  props: {
    file: Object,
    depth: Number,
  },
  computed: {
    indent() {
      if(this.depth > 1){
        return { paddingLeft: `${this.depth * 10}px` }
      }
    }
  },
  methods: {
    fileImage(type) {
      switch (type) {
        case 'image/jpeg':
          return 'jpeg'
        case 'image/png':
          return 'png'
        case 'image/svg':
          return 'svg'
        case 'application/json':
          return 'json'
        case 'application/javascript':
          return 'js'
        case 'text/plain':
          return 'text'
        default:
          return 'file'
      }
    },
    fileSize(size){
      if(size.length <=3){
        return `${size}.kb`
      }else {
        return `${Math.floor(size / 1000, )}.mb `
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
