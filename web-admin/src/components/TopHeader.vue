<template>
  <el-header>
    <div class="left">
      <el-icon @click="handleCollapsed">
        <Menu />
      </el-icon>
      <span style="margin-left: 10px">企业门户网站管理系统</span>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="30" :src="avatar" />
          <span style="margin-left: 5px">admin</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
            <el-dropdown-item divided @click="handleLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script setup lang="ts">
import { useToolStore } from '@/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const useTool = useToolStore();
const router = useRouter();

const avatar = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png');

const handleCollapsed = () => {
  useTool.changeCollapsed();
};

const handleCenter = () => {
  router.push('/center');
};

const handleLogout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f7f9;
}

.left,
.right {
  display: flex;
}

.left {
  i {
    margin: auto;
    cursor: pointer;
  }
}
.right {
  cursor: pointer;
  .el-dropdown {
    margin: auto;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    padding: 3px 8px;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    cursor: pointer;
  }
  .el-dropdown-link:focus-visible {
    outline: none;
  }
}
</style>
