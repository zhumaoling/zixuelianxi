<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />

  <!-- 测试 -->
  <HomePanel title="新鲜好物" sub-title="新鲜好物，好多商品">
    <div>
      新鲜好物的插槽
    </div>
  </HomePanel>

  <HomePanel title="人气推荐" sub-title="人气推荐，好多商品">
    <div>
      人气推荐的插槽
    </div>
  </HomePanel>

  <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
</template>