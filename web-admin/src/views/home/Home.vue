<template>
  <div>
    <el-page-header content="首页" icon="" title="企业门户网站管理系统" />

    <el-card class="box-card">
      <el-row>
        <el-col :span="4">
          <el-avatar :size="100" :src="avatarUrl" />
        </el-col>
        <el-col :span="20">
          <h3 style="line-height: 100px">欢迎 {{ useTool.userInfo.username || 'admin' }} 回来, {{ welcomeText }}</h3>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>公司产品</span>
        </div>
      </template>
      <el-carousel :interval="4000" type="card" height="400px" v-if="loopList.length">
        <el-carousel-item v-for="item in loopList" :key="item._id">
          <div
            :style="{
              backgroundImage: `url(http://localhost:3000${item.cover})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100%',
            }">
            <h3>{{ item.title }}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useToolStore } from '@/store';
import API from '@/api';

const loopList: any = ref([]);
const useTool = useToolStore();
const avatarUrl = computed(() => (useTool.userInfo.avatar ? 'http://localhost:3000' + useTool.userInfo.avatar : `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`));
const welcomeText = computed(() => (new Date().getHours() < 12 ? '要开心每一天.' : '喝杯咖啡提提神吧~'));

const getData = async () => {
  const res = await API.product.list({});
  if (res.code === 0) {
    loopList.value = res.data;
  }
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 50px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
