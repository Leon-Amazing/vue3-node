<template>
  <div>
    <el-page-header content="添加产品" icon="" title="产品管理" />

    <el-form ref="productFormRef" :model="productForm" :rules="productFormRules" label-width="80px" class="demo-ruleForm">
      <el-form-item label="产品名称" prop="title">
        <el-input v-model="productForm.title" />
      </el-form-item>

      <el-form-item label="产品简要描述" prop="introduction">
        <el-input v-model="productForm.introduction" type="textarea" />
      </el-form-item>

      <el-form-item label="产品详细描述" prop="detail">
        <el-input v-model="productForm.detail" type="textarea" />
      </el-form-item>

      <el-form-item label="产品图片" prop="cover">
        <Upload :avatar="productForm.cover" @uploadchange="handleChange" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">添加产品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Upload from '@/components/Upload.vue';
import API from '@/api';
import { useRouter } from 'vue-router';
const productFormRef = ref();
const productForm = reactive({
  title: '',
  introduction: '',
  detail: '',
  cover: '',
  file: null,
});

const productFormRules = reactive({
  title: [{ required: true, message: '请输入名字', trigger: 'blur' }],
  introduction: [{ required: true, message: '请输入简要描述', trigger: 'blur' }],
  detail: [{ required: true, message: '请输入详细描述', trigger: 'blur' }],
  cover: [{ required: true, message: '请上传产品图片', trigger: 'blur' }],
});

//每次选择完图片之后的回调
const handleChange = (file: any) => {
  productForm.cover = URL.createObjectURL(file);
  productForm.file = file;
};
const router = useRouter();
const submitForm = () => {
  productFormRef.value.validate(async (valid: any) => {
    if (valid) {
      const res = await API.product.add(productForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.code === 0) {
        router.push(`/product-manage/productlist`);
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.demo-ruleForm {
  margin-top: 50px;
}
</style>
