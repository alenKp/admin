<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <!-- <search id="header-search" class="right-menu-item" /> -->

      <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->

      <!-- <screenfull id="screenfull" class="right-menu-item hover-effect" /> -->

      <!-- <el-tooltip content="Global Size" effect="dark" placement="bottom">
        <size-select id="size-select" class="right-menu-item hover-effect" />
      </el-tooltip> -->

      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <el-avatar
            :size="40"
            shape="square"
            :src="avatar"
            @error="errorHandler"
          />
          <!-- <img :src="avatar" class="user-avatar" /> -->
          <span class="nickName">{{ name }}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- <router-link to="/profile/index">
            <el-dropdown-item>修改密码</el-dropdown-item>
          </router-link> -->
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar', 'name', 'avatar'])
  },
  methods: {
    errorHandler() {
      return true
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout() {
      this.$confirm('你确定要退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(async () => {
          await this.$store.dispatch('user/logout')
          this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        // &:hover {
        //   background: rgba(0, 0, 0, 0.025);
        // }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .el-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin-right: 5px;
        }

        .nickName {
          font-size: 14px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -17px;
          top: 19px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
