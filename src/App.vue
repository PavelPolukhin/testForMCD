<template>
  <div class="main-wrapper">
    <div class="main-container">
      <div class="root_folders">
        <folder-view
            v-for="(folder, index) in folders"
            :key="index"
            :folders="folder.folders || ''"
            :depth="0"
            :label="folder.name"
            :countFiles="this.$helpers.countsFiles(folder.files?.length, folder.folders?.length)"
            :files="folder.files || ''"
        ></folder-view>
      </div>
     <div class="root_files">
        <file-view v-for="(item, index) in files" :key="index" :file="item"/>
     </div>
    </div>

  </div>
</template>

<script>
import FolderView from './components/FolderView.vue'
import FileView from "@/components/FileView";

export default {
  name: 'App',
  components: {
    FileView,
    FolderView
  },
  data: () => {
    return {}
  },
  computed:{
    folders(){
      return this.$store.state.foldersAndFiles.folders
    },
    files(){
      return this.$store.state.foldersAndFiles.files
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
