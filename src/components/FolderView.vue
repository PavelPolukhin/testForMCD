<template>
  <div class="foldersAndFiles">
    <div class="folders">
      <div class="folders-label" @click="toggleChildren" :style="indent">
          <img :src="(folders.length || files.length) && !showChildren?
          require(`../assets/images/folder.svg`) :
          require(`../assets/images/folder-open.svg`)" alt="">
          <p>{{ label }}</p>
          <span v-if="countFiles && !showChildren">{{countFiles}}</span>
      </div>
      <folder-view
          v-if="showChildren"
          v-for="folder in folders"
          :folders="folder.folders ? folder.folders : ''"
          :label="folder.name ? folder.name : 'defaultName'"
          :depth="depth + 1"
          :countFiles="this.$helpers.countsFiles(folder.files?.length, folder.folders?.length)"
          :files="folder.files ? folder.files : ''"
      >
      </folder-view>
      <div class="folder_files" v-if="showChildren && files.length">
        <file-view v-for="(item, index) in files" :key="index"  :file="item" :depth="depth + 1"/>
      </div>
    </div>
  </div>
</template>

<script>

import FileView from "@/components/FileView";
export default {
  name: 'FolderView',
  components: {FileView},
  props: [ 'folders', 'label', 'depth', 'files', 'countFiles'],
  data() {
    return {
      showChildren: false
    }
  },
  computed: {
    indent() {
      if(this.depth > 1){
        return { paddingLeft: `${this.depth * 10}px` }
      }
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
