<template>
  <div class="about">
    <div class="masonry-grid" ref="myElement">
      <div class="masonry-item" style="height: 200px">1</div>
      <div class="masonry-item" style="height: 300px">2</div>
      <div class="masonry-item" style="height: 250px">3</div>
      <div class="masonry-item" style="height: 300px">4</div>
      <div class="masonry-item" style="height: 200px">5</div>
      <div class="masonry-item" style="height: 250px">6</div>
      <!-- 更多不同高度的商品 -->
    </div>
  </div>
</template>

<script setup>
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
  .masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-flow: dense; /* 密集填充模式 */
    gap: 20px;
    align-items: start; /* 避免拉伸内容 */
  }

  .masonry-item {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    grid-row-end: span 2; /* 示例值，需根据实际高度计算 */
  }
}
</style>
