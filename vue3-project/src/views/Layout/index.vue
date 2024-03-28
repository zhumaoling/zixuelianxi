<script setup>
import LayoutNav from './Components/LayoutNav.vue'
import LayoutHeader from './Components/LayoutHeader.vue'
import LayoutFooter from './Components/LayoutFooter.vue'
import LayoutFixed from './Components/LayoutFixed.vue';
import { onMounted } from 'vue';

import { useCategoryStore } from '@/stores/categoryStore';

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory)

</script>



<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- <RouterView :key="$route.fullPath"></RouterView> -->
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>



<style></style>