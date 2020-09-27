<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in initMenuList"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/assets/css/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['permission_menu', 'sidebar']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.after) {
        return meta.after.path
      }
      return path
    },
    showLogo() {
      return true
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    // permission menu
    initMenuList() {
      return this.permission_menu
    }
  }
}
</script>
