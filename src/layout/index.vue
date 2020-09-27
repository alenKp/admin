<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 左侧全选菜单、导航 -->
    <sidebar class="sidebar-container" />
    <!-- 右侧内容 -->
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
        <!-- <tags-view v-if="needTagsView" /> -->
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import { mapState } from 'vuex'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar
  },
  // mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
      // fixedHeader: state => state.settings.fixedHeader
      // device: state => state.app.device,
      // showSettings: state => state.settings.showSettings,
      // needTagsView: state => state.settings.tagsView,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
        // withoutAnimation: this.sidebar.withoutAnimation,
        // mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 200px);
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
